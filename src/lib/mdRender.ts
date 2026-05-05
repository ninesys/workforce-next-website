import type { BlogPost } from "@/data/blog/types";
import { siteMetadata } from "@/data/siteMetadata";
import { htmlToMd } from "./htmlToMd";

export function renderBlogPostMd(post: BlogPost): string {
  const url = `${siteMetadata.url}/blog/${post.slug}/`;
  const lines: string[] = [];

  lines.push(`# ${post.title}`);
  lines.push("");
  lines.push(
    `_Author: ${post.author} · Published: ${post.publishedAt}${
      post.updatedAt ? ` · Updated: ${post.updatedAt}` : ""
    } · Read time: ${post.readTime} min · URL: ${url}_`
  );
  lines.push("");

  if (post.tldr) {
    lines.push("## TL;DR");
    lines.push("");
    lines.push(`> ${post.tldr}`);
    lines.push("");
  }

  lines.push(htmlToMd(post.body).trim());
  lines.push("");

  if (post.faq && post.faq.length > 0) {
    lines.push("## Frequently asked questions");
    lines.push("");
    for (const item of post.faq) {
      lines.push(`### ${item.q}`);
      lines.push("");
      lines.push(item.a);
      lines.push("");
    }
  }

  lines.push("---");
  lines.push("");
  lines.push(`Published by ${siteMetadata.name} (${siteMetadata.url}).`);
  lines.push(
    `Workforce Next is an IT consulting and IT engineering company that helps growing businesses hire pre-vetted developers and teams from India.`
  );
  lines.push("");

  return lines.join("\n");
}
