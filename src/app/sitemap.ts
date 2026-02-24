import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://workforcenext.in";

  const staticRoutes = [
    "",
    "/services/ai-agents",
    "/services/automation",
    "/services/iot",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/blog" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
