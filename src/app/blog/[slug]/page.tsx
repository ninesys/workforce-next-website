import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { generateBreadcrumbSchema } from "@/lib/jsonLd";
import { generateTocAndInjectIds } from "@/lib/blogToc";
import Button from "@/components/ui/Button";
import AuthorBio from "@/components/blog/AuthorBio";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const ogImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://workforcenext.in${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : "https://workforcenext.in/images/og-default.png";

  const socialTitle = post.ogTitle ?? post.title;
  const socialDescription = post.ogDescription ?? post.metaDescription;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      type: "article",
      url: `https://workforcenext.in/blog/${post.slug}/`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://workforcenext.in/blog/${post.slug}/`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "Blog", url: "https://workforcenext.in/blog/" },
    { name: post.title, url: `https://workforcenext.in/blog/${post.slug}/` },
  ]);

  const articleImageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://workforcenext.in${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : "https://workforcenext.in/images/og-default.png";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: articleImageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://workforcenext.in/about/gaurav/",
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "Workforce Next",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Workforce Next",
      url: "https://workforcenext.in",
      logo: {
        "@type": "ImageObject",
        url: "https://workforcenext.in/images/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://workforcenext.in/blog/${post.slug}/`,
    },
    keywords: post.keywords.join(", "),
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: post.author,
    jobTitle: post.authorRole,
    url: "https://workforcenext.in/about/gaurav/",
    image: "https://workforcenext.in/images/gaurav.jpeg",
    worksFor: {
      "@type": "Organization",
      name: "Workforce Next",
      url: "https://workforcenext.in",
    },
    sameAs: ["https://www.linkedin.com/in/gaurav-singh-workforcenext"],
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Generate Table of Contents from H2s and inject IDs into body for anchor navigation
  const { body: bodyWithIds, toc } = generateTocAndInjectIds(post.body);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            >
              Blog
            </Link>
            <span className="text-dark-200 dark:text-dark-500">/</span>
            <span className="px-3 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full">
              {post.categoryLabel}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-dark-400 dark:text-dark-300">
            <span>
              By{" "}
              <Link
                href="/about/gaurav"
                className="text-primary-500 hover:underline"
              >
                {post.author}
              </Link>
            </span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>{post.readTime} min read</span>
          </div>
          {post.image && (
            <div className="mt-8 overflow-hidden rounded-2xl shadow-card border border-dark-50 dark:border-dark-700">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article */}
      <article className="py-12 md:py-16 bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          {post.tldr && (
            <aside
              aria-label="Summary"
              className="mb-10 p-5 sm:p-6 rounded-xl border-l-4 border-primary-500 bg-primary-50/60 dark:bg-primary-500/10"
            >
              <p className="text-xs font-extrabold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
                TL;DR
              </p>
              <p className="text-base leading-relaxed text-dark-700 dark:text-dark-100">
                {post.tldr}
              </p>
            </aside>
          )}
          {toc.length >= 3 && (
            <nav
              aria-label="Table of contents"
              className="mb-10 p-5 sm:p-6 rounded-xl border border-dark-50 dark:border-dark-700 bg-primary-50/40 dark:bg-dark-800/60"
            >
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-dark-700 dark:text-dark-200 mb-4">
                In this article
              </h2>
              <ol className="space-y-2 list-decimal list-inside marker:text-primary-500 marker:font-bold">
                {toc.map((entry) => (
                  <li
                    key={entry.id}
                    className="text-dark-700 dark:text-dark-200 leading-relaxed"
                  >
                    <a
                      href={`#${entry.id}`}
                      className="text-dark-700 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 hover:underline"
                    >
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-extrabold prose-headings:text-dark-900 dark:prose-headings:text-dark-50 prose-h2:scroll-mt-24 prose-p:text-dark-600 dark:prose-p:text-dark-200 prose-p:leading-relaxed prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-dark-900 dark:prose-strong:text-dark-100"
            dangerouslySetInnerHTML={{ __html: bodyWithIds }}
          />
          <AuthorBio name={post.author} role={post.authorRole} />
        </div>
      </article>

      {/* FAQ Section */}
      {post.faq && post.faq.length > 0 && (
        <section className="py-12 md:py-16 bg-white dark:bg-dark-900 border-t border-dark-50 dark:border-dark-800">
          <div className="container-custom max-w-3xl">
            <h2 className="text-xl md:text-2xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white dark:bg-dark-800 rounded-xl border border-dark-50 dark:border-dark-700 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-primary-50/50 dark:hover:bg-primary-500/5 transition-colors list-none">
                    <span className="font-bold text-dark-900 dark:text-dark-50 text-[15px] pr-4">
                      {item.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-dark-300 dark:text-dark-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-dark-500 dark:text-dark-300 text-[15px] leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-primary-50 dark:bg-dark-800">
          <div className="container-custom max-w-3xl">
            <h2 className="text-xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
              Related posts
            </h2>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-5 bg-white dark:bg-dark-800/80 rounded-xl border border-dark-50 dark:border-dark-700/50 hover:shadow-card transition-all"
                >
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-100">
            Ready to build your team?
          </h2>
          <p className="mt-3 text-dark-300 max-w-lg mx-auto">
            Tell us what you are building and we will find the right engineers
            for your project. 48-hour matching, 1-week paid trial.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
