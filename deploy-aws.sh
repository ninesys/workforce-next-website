#!/usr/bin/env bash
set -euo pipefail

# ─── AWS S3 + CloudFront Deploy Script ───
# Required env vars (set in .env or export manually):
#   AWS_S3_BUCKET                    - S3 bucket name (e.g. workforcenext.in)
#   AWS_CLOUDFRONT_DISTRIBUTION_ID   - CloudFront distribution ID (e.g. E1A2B3C4D5E6F7)
#   AWS_REGION                       - AWS region (e.g. ap-south-1)
#
# AWS credentials must be configured via:
#   - Environment vars: AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY
#   - Or ~/.aws/credentials profile
#   - Or IAM instance role
#
# Note: Netlify Forms (contact + careers) won't work on S3.
#       You'll need a separate form backend (API Gateway + Lambda, Formspree, etc.)

# Load .env if it exists
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

# Validate required vars
: "${AWS_S3_BUCKET:?Set AWS_S3_BUCKET in .env}"
: "${AWS_CLOUDFRONT_DISTRIBUTION_ID:?Set AWS_CLOUDFRONT_DISTRIBUTION_ID in .env}"
: "${AWS_REGION:?Set AWS_REGION in .env}"

echo "==> Building site..."
rm -rf out
npm run build

echo "==> Syncing to s3://${AWS_S3_BUCKET}..."
aws s3 sync out/ "s3://${AWS_S3_BUCKET}" \
  --region "${AWS_REGION}" \
  --delete \
  --cache-control "public, max-age=3600" \
  --exclude "_next/static/*"

# Long cache for hashed static assets (immutable)
aws s3 sync out/_next/static/ "s3://${AWS_S3_BUCKET}/_next/static/" \
  --region "${AWS_REGION}" \
  --cache-control "public, max-age=31536000, immutable"

echo "==> Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${AWS_CLOUDFRONT_DISTRIBUTION_ID}" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "==> Invalidation created: ${INVALIDATION_ID}"
echo "==> Deploy complete! Site will be live once invalidation finishes (~1-2 min)."
