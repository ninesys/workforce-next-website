#!/bin/bash
# IndexNow Submission Script
# Run after deployment to notify search engines of updated URLs
# Usage: ./scripts/indexnow-submit.sh

INDEXNOW_KEY="3e7d2156eff697e75f5a5ec5c33a98e4"
HOST="workforcenext.in"
KEY_LOCATION="https://${HOST}/${INDEXNOW_KEY}.txt"

# All site URLs to submit
URLS=(
  "https://${HOST}/"
  "https://${HOST}/services/ai-agents/"
  "https://${HOST}/services/automation/"
  "https://${HOST}/services/iot/"
  "https://${HOST}/blog/"
  "https://${HOST}/blog/category/ai/"
  "https://${HOST}/blog/category/automation/"
  "https://${HOST}/blog/category/iot/"
  "https://${HOST}/blog/category/insights/"
  "https://${HOST}/blog/category/hiring/"
  "https://${HOST}/faq/"
  "https://${HOST}/contact/"
  "https://${HOST}/careers/"
  "https://${HOST}/hire-dedicated-developers/"
  "https://${HOST}/hire-ai-developers/"
  "https://${HOST}/hire-mobile-app-developers/"
  "https://${HOST}/hire-software-developers-india/"
  "https://${HOST}/hire-software-testers/"
  "https://${HOST}/blog/ai-driven-soil-testing-spectroscopy-iot/"
  "https://${HOST}/blog/convert-electronic-product-to-iot-smart-device/"
  "https://${HOST}/blog/how-to-hire-developers-in-india/"
  "https://${HOST}/blog/why-enterprise-ai-projects-fail/"
  "https://${HOST}/blog/agentic-ai-vs-traditional-automation/"
  "https://${HOST}/blog/workflow-automation-upgrade-signs/"
  "https://${HOST}/blog/iot-platform-vendor-lock-in/"
  "https://${HOST}/blog/real-time-analytics-manufacturing/"
  "https://${HOST}/blog/hidden-cost-legacy-integration/"
)

# Build JSON payload
URL_JSON=$(printf '"%s",' "${URLS[@]}")
URL_JSON="[${URL_JSON%,}]"

PAYLOAD=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${INDEXNOW_KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": ${URL_JSON}
}
EOF
)

echo "Submitting ${#URLS[@]} URLs to IndexNow..."

# Submit to Bing/Yandex IndexNow endpoint
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

if [ "$RESPONSE" = "200" ] || [ "$RESPONSE" = "202" ]; then
  echo "IndexNow submission successful (HTTP ${RESPONSE})"
  echo "URLs submitted to Bing, Yandex, Seznam, and Naver"
else
  echo "IndexNow submission returned HTTP ${RESPONSE}"
  echo "Payload sent:"
  echo "${PAYLOAD}" | head -5
fi

echo ""
echo "Verification: Your key file should be accessible at:"
echo "  ${KEY_LOCATION}"
echo ""
echo "Search engines notified: Bing, Yandex, Seznam.cz, Naver"
