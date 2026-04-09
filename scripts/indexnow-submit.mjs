/**
 * IndexNow Post-Build Submission Script
 * Automatically submits all site URLs to search engines after build.
 * Runs via: npm run build (triggered by postbuild script in package.json)
 */

const INDEXNOW_KEY = "3e7d2156eff697e75f5a5ec5c33a98e4";
const HOST = "workforcenext.in";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// Static pages
const staticUrls = [
  "/",
  "/hire/ai-developers",
  "/hire/data-engineers",
  "/hire/frontend-engineers",
  "/hire/backend-engineers",
  "/hire/product-engineers",
  "/hire/vibe-code-engineer",
  "/hire/cloud-cost-engineer",
  "/hire/qa-testers",
  "/hire/langchain-developers",
  "/hire/rag-developers",
  "/hire/fastapi-developers",
  "/for/founders",
  "/for/startups",
  "/for/enterprise",
  "/products/seth-ai-recruiter",
  "/products/employee-productivity-intelligence",
  "/how-we-work",
  "/why-teams-stay",
  "/cost-of-switching",
  "/context-continuity-guarantee",
  "/about",
  "/about/gaurav",
  "/blog",
  "/faq",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms-of-use",
];

// Extract blog slugs from data file
async function getBlogSlugs() {
  try {
    const { readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const dataFile = readFileSync(
      resolve("src/data/blogPosts.ts"),
      "utf-8"
    );
    const slugMatches = [...dataFile.matchAll(/slug:\s*"([^"]+)"/g)];
    return slugMatches.map((m) => `/blog/${m[1]}`);
  } catch {
    console.log("[IndexNow] Could not read blog posts, skipping blog URLs");
    return [];
  }
}

async function submit() {
  const blogUrls = await getBlogSlugs();
  const allUrls = [...staticUrls, ...blogUrls].map((u) => `${BASE_URL}${u}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: allUrls,
  };

  console.log(`[IndexNow] Submitting ${allUrls.length} URLs...`);

  const engines = [
    { name: "IndexNow (API)", url: "https://api.indexnow.org/indexnow" },
    { name: "Bing", url: "https://www.bing.com/indexnow" },
    { name: "Yandex", url: "https://yandex.com/indexnow" },
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine.url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(
        `[IndexNow] ${engine.name}: ${res.status} ${res.ok ? "OK" : res.statusText}`
      );
    } catch (err) {
      console.log(`[IndexNow] ${engine.name}: failed (${err.message})`);
    }
  }

  console.log(
    `[IndexNow] Done. ${allUrls.length} URLs submitted to ${engines.length} engines.`
  );
}

submit();
