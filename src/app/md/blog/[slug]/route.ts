import { blogPosts } from "@/data/blogPosts";
import { renderBlogPostMd } from "@/lib/mdRender";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(renderBlogPostMd(post), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      "x-robots-tag": "index, follow",
    },
  });
}
