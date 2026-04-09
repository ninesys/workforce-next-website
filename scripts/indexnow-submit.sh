#!/bin/bash
# IndexNow Submission Script
# Run after deployment to notify search engines of updated URLs
# Usage: ./scripts/indexnow-submit.sh

INDEXNOW_KEY="3e7d2156eff697e75f5a5ec5c33a98e4"
HOST="workforcenext.in"
KEY_LOCATION="https://${HOST}/${INDEXNOW_KEY}.txt"

# All site URLs
URLS=(
  "https://${HOST}/"
  "https://${HOST}/hire/ai-developers/"
  "https://${HOST}/hire/data-engineers/"
  "https://${HOST}/hire/frontend-engineers/"
  "https://${HOST}/hire/backend-engineers/"
  "https://${HOST}/hire/product-engineers/"
  "https://${HOST}/hire/vibe-code-engineer/"
  "https://${HOST}/hire/cloud-cost-engineer/"
  "https://${HOST}/hire/qa-testers/"
  "https://${HOST}/hire/langchain-developers/"
  "https://${HOST}/hire/rag-developers/"
  "https://${HOST}/hire/fastapi-developers/"
  "https://${HOST}/for/founders/"
  "https://${HOST}/for/startups/"
  "https://${HOST}/for/enterprise/"
  "https://${HOST}/products/seth-ai-recruiter/"
  "https://${HOST}/products/employee-productivity-intelligence/"
  "https://${HOST}/how-we-work/"
  "https://${HOST}/why-teams-stay/"
  "https://${HOST}/cost-of-switching/"
  "https://${HOST}/context-continuity-guarantee/"
  "https://${HOST}/about/"
  "https://${HOST}/about/gaurav/"
  "https://${HOST}/faq/"
  "https://${HOST}/contact/"
  "https://${HOST}/careers/"
  "https://${HOST}/privacy-policy/"
  "https://${HOST}/terms-of-use/"
)

# Build JSON payload
URL_LIST=""
for url in "${URLS[@]}"; do
  URL_LIST="${URL_LIST}\"${url}\","
done
URL_LIST="[${URL_LIST%,}]"

PAYLOAD="{\"host\":\"${HOST}\",\"key\":\"${INDEXNOW_KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":${URL_LIST}}"

echo "[IndexNow] Submitting ${#URLS[@]} URLs..."

# Submit to IndexNow API (covers Bing, Yandex, Seznam, Naver)
ENGINES=("https://api.indexnow.org/indexnow" "https://www.bing.com/indexnow" "https://yandex.com/indexnow")

for engine in "${ENGINES[@]}"; do
  echo -n "[IndexNow] ${engine}... "
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST "${engine}" \
    -H "Content-Type: application/json; charset=utf-8" \
    -d "${PAYLOAD}")
  echo "HTTP ${HTTP_CODE}"
done

echo "[IndexNow] Done. ${#URLS[@]} URLs submitted to ${#ENGINES[@]} engines."
