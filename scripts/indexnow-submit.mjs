/**
 * IndexNow Post-Build Submission Script
 * Automatically submits all site URLs to search engines after build.
 * Runs via: npm run build (triggered by postbuild script in package.json)
 *
 * Static routes and blog slugs are extracted directly from src/app/sitemap.ts
 * and src/data/blogPosts.ts so this script can never drift out of date with
 * the sitemap. Do not hardcode a URL list here.
 */

const INDEXNOW_KEY = "3e7d2156eff697e75f5a5ec5c33a98e4";
const HOST = "wfnext.com";
const BASE_URL = `https://${HOST}`;
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

async function getStaticRoutesFromSitemap() {
  try {
    const { readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const sitemapFile = readFileSync(resolve("src/app/sitemap.ts"), "utf-8");
    // Matches literal `${baseUrl}/some/path/` template strings, skipping any
    // line that interpolates a second variable (dynamic blogRoutes/jobRoutes).
    const matches = [...sitemapFile.matchAll(/`\$\{baseUrl\}([^`]*)`/g)];
    return matches
      .map((m) => m[1])
      .filter((path) => path.length > 0 && !path.includes("${"));
  } catch (err) {
    console.log(`[IndexNow] Could not read sitemap.ts, skipping static URLs (${err.message})`);
    return [];
  }
}

async function getBlogSlugs() {
  // Posts live one file per post under src/data/blog/ (blogPosts.ts is just
  // a thin index of imports with no slug fields of its own), so each file
  // has to be read individually.
  try {
    const { readdirSync, readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const dir = resolve("src/data/blog");
    const files = readdirSync(dir).filter(
      (f) => f.endsWith(".ts") && f !== "types.ts"
    );
    const slugs = [];
    for (const file of files) {
      const content = readFileSync(resolve(dir, file), "utf-8");
      const match = content.match(/"?slug"?:\s*"([^"]+)"/);
      if (match) slugs.push(match[1]);
    }
    return slugs.map((slug) => `/blog/${slug}/`);
  } catch (err) {
    console.log(`[IndexNow] Could not read blog post files, skipping blog URLs (${err.message})`);
    return [];
  }
}

async function submit() {
  const staticUrls = await getStaticRoutesFromSitemap();
  const blogUrls = await getBlogSlugs();
  // Blog URLs already come from sitemap.ts too (via blogPosts.map), so dedupe.
  const combined = [...new Set([...staticUrls, ...blogUrls])];
  const allUrls = combined.map((path) => `${BASE_URL}${path}`);

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
