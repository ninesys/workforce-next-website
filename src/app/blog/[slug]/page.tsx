import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { generateArticleSchema } from "@/lib/jsonLd";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://workforcenext.in/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(post)),
        }}
      />

      {/* Header */}
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-500">{post.categoryLabel}</span>
          </nav>

          <Badge variant="white" className="mb-4">
            {post.categoryLabel}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>{formatDate(post.publishedAt)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <Badge variant="accent" className="mb-2">
                    {related.categoryLabel}
                  </Badge>
                  <h3 className="font-heading font-semibold text-slate-900 leading-snug">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {related.readTime} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-primary py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Want to Learn More?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Talk to our team about how these insights apply to your organization.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="white" size="md">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
