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
  "https://${HOST}/hire/fullstack-developers/"
  "https://${HOST}/for/founders/"
  "https://${HOST}/for/startups/"
  "https://${HOST}/for/enterprise/"
  "https://${HOST}/products/seth-ai-recruiter/"
  "https://${HOST}/products/employee-productivity-intelligence/"
  "https://${HOST}/how-we-work/"
  "https://${HOST}/why-teams-stay/"
  "https://${HOST}/cost-of-switching/"
  "https://${HOST}/context-continuity-guarantee/"
  "https://${HOST}/not-another-body-shop/"
  "https://${HOST}/ai-native-india/"
  "https://${HOST}/india-handled/"
  "https://${HOST}/about/"
  "https://${HOST}/about/gaurav/"
  "https://${HOST}/faq/"
  "https://${HOST}/contact/"
  "https://${HOST}/careers/"
  "https://${HOST}/privacy-policy/"
  "https://${HOST}/terms-of-use/"
  # Blog listing
  "https://${HOST}/blog/"
  # Blog posts
  "https://${HOST}/blog/12-parameters-ai-matching-tools-should-evaluate/"
  "https://${HOST}/blog/how-does-ai-developer-matching-actually-work/"
  "https://${HOST}/blog/best-ai-developer-matching-tools-2026/"
  "https://${HOST}/blog/what-is-lifestyle-fit-matching-in-developer-hiring/"
  "https://${HOST}/blog/why-offshore-developers-keep-leaving/"
  "https://${HOST}/blog/vibe-coding-explained-when-to-use-it/"
  "https://${HOST}/blog/context-first-matching-why-tech-stack-is-not-enough/"
  "https://${HOST}/blog/real-cost-of-switching-tech-partners/"
  "https://${HOST}/blog/how-to-build-ai-mvp-4-weeks-offshore-developer/"
  "https://${HOST}/blog/dedicated-developer-vs-freelancer-vs-agency-total-cost/"
  "https://${HOST}/blog/ai-developer-interview-questions-what-to-ask/"
  "https://${HOST}/blog/rag-vs-fine-tuning-when-to-use-which/"
  "https://${HOST}/blog/how-to-choose-ai-agent-framework/"
  "https://${HOST}/blog/do-you-still-need-a-prompt-engineer-in-2026/"
  "https://${HOST}/blog/best-workflow-automation-tools-2026/"
  "https://${HOST}/blog/ai-mvp-tech-stack-2026/"
  "https://${HOST}/blog/staff-augmentation-vs-eor-vs-india-entity-2026/"
  "https://${HOST}/blog/toptal-vs-andela-vs-turing-vs-workforcenext-comparison-2026/"
  "https://${HOST}/blog/senior-indian-developer-salary-2026/"
  "https://${HOST}/blog/verify-indian-developer-experience-checklist-2026/"
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
