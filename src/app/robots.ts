import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Each per-bot group needs its own disallow because, per RFC 9309,
  // a crawler that matches a specific group ignores the wildcard rules.
  const aiAndSearchBots = [
    "Googlebot",
    "Bingbot",
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "PerplexityBot",
    "ClaudeBot",
    "Amazonbot",
    "Applebot-Extended",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiAndSearchBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://workforcenext.in/sitemap.xml",
  };
}
