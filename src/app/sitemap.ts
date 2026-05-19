import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://workforcenext.in";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Hire pages
    { url: `${baseUrl}/hire/ai-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/data-engineers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/frontend-engineers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/backend-engineers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/product-engineers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/vibe-code-engineer/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/cloud-cost-engineer/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/qa-testers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/langchain-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hire/rag-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hire/fastapi-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hire/fullstack-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/devops-engineers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/mcp-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hire/nodejs-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/fractional-project-manager/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hire/unity-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/ios-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/android-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/python-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/php-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/java-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/wordpress-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/hire/shopify-developers/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Segment pages
    { url: `${baseUrl}/for/founders/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/startups/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/enterprise/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/europe/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/usa-canada/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/australia/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for/dubai/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Products
    { url: `${baseUrl}/products/seth-ai-recruiter/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Core pages
    { url: `${baseUrl}/how-we-work/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/why-teams-stay/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cost-of-switching/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/context-continuity-guarantee/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/not-another-body-shop/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ai-native-india/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/india-handled/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about/gaurav/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Blog listing
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // Utility pages
    { url: `${baseUrl}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/careers/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-use/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Blog posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
