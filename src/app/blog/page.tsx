"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const blogIndexFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a senior developer from India cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Indian developers cost USD 5,000 to 8,500 per month all-in (salary, benefits, equipment, and partner team management). Fully loaded equivalent in the US runs USD 14,000 to 19,000 per month, or USD 220,000 to 290,000 per year. The 60 to 70% cost delta is geography, not a quality gap.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to hire a dedicated developer from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a vetted partner, expect three to five matched profiles within 5 business days, paid trials starting in week 2, and a confirmed hire by week 3 or 4. Going direct on LinkedIn or job boards typically takes 8 to 12 weeks, most of which is filtering noise.",
      },
    },
    {
      "@type": "Question",
      name: "What time zones do Indian developers work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India Standard Time is UTC+5:30. That gives a 4 to 5 hour overlap with the UK and continental Europe, a 2 to 3 hour overlap with the US East Coast morning, and a 5 hour overlap with Sydney afternoon. Most teams run a daily standup at 9 AM your time and let engineers async the rest of the day.",
      },
    },
    {
      "@type": "Question",
      name: "Dedicated developer or freelancer for ongoing product work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For continuous product work, dedicated developers beat freelancers on quality, accountability, and continuity. Freelancers fit short fixed-scope projects. The total-cost-of-ownership comparison (including ramp-up, churn, and rework) usually puts a dedicated India developer at lower true cost than a US freelancer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire developers from India for a short-term project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Useful engagements start at four to eight weeks; below that, ramp-up overhead outweighs throughput. We run short-term engagements regularly for European clients on production deadlines, where the timezone overlap with India makes async delivery practical.",
      },
    },
    {
      "@type": "Question",
      name: "What roles do you most commonly staff from India in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Backend (Node.js, Python, Go), frontend (React.js, Next.js, TypeScript), mobile (React Native, Flutter, native iOS, native Android), AI engineering (RAG, LangChain, MCP, vector databases), DevOps and SRE, and QA automation (Playwright, Cypress, Appium, Maestro). Each role has its own pillar page and most have a hiring guide blog post.",
      },
    },
  ],
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexFaqLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <Badge variant="primary" className="mb-4">
            BLOG
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50">
            Insights on hiring, engineering, and building remote teams
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Practical advice from our experience building dedicated engineering
            teams for startups and enterprises. No fluff, no corporate jargon.
          </p>
        </div>
      </section>

      {/* Intro: what readers find on this blog */}
      <section className="bg-white dark:bg-dark-900 pt-12 md:pt-16 pb-4">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            What you will find on the Workforce Next blog
          </h2>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed mb-4">
            This blog is the long-form companion to our hiring work. We
            publish honest pieces about how to hire dedicated developers
            from India, how to structure offshore engineering teams,
            and how to ship production AI applications without breaking
            things. Every post is written by an engineer or an engineering
            manager who has done the work, not a content team.
          </p>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed mb-4">
            Recent themes you can read across the archive:
          </p>
          <ul className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Role-specific hiring guides</strong> for Node.js,
              React.js, Android, iOS, mobile cross-platform, MCP server,
              and software testing engineers from India.
            </li>
            <li>
              <strong>Cost benchmarks</strong> with 2026 senior India
              developer salaries against fully loaded US numbers.
            </li>
            <li>
              <strong>AI engineering practices</strong>: OWASP LLM Top 10
              implementation, RAG architecture, agent framework
              selection, prompt engineering in production.
            </li>
            <li>
              <strong>Engagement model breakdowns</strong>: dedicated
              developer vs freelancer vs agency, staff augmentation vs
              EOR vs Indian entity, short-term European projects.
            </li>
            <li>
              <strong>Team operating playbooks</strong>: software testing
              pods, mobile testing teams, Follow-the-Sun SRE, fractional
              project management.
            </li>
          </ul>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed">
            We update this archive every week. If a topic you care about
            is missing, write to us on{" "}
            <Link
              href="/contact/"
              className="text-primary-600 dark:text-primary-400 underline underline-offset-2 hover:text-primary-700"
            >
              the contact page
            </Link>{" "}
            and we will add it to the queue.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full transition-all",
                  activeCategory === cat.value
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white dark:bg-dark-800 rounded-xl border border-dark-50 dark:border-dark-700 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {post.image && (
                  <div className="aspect-[1200/630] overflow-hidden bg-dark-50 dark:bg-dark-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={630}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full">
                      {post.categoryLabel}
                    </span>
                    <span className="text-xs text-dark-300 dark:text-dark-400">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-dark-300 dark:text-dark-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-sm font-semibold text-primary-500 dark:text-primary-400 flex items-center gap-1">
                      Read more
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-dark-400 dark:text-dark-300 py-12">
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Blog FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Frequently asked questions about hiring Indian developers
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How much does a senior developer from India cost in 2026?",
                a: "Senior Indian developers cost USD 5,000 to 8,500 per month all-in (salary, benefits, equipment, and partner team management). Fully loaded equivalent in the US runs USD 14,000 to 19,000 per month, or USD 220,000 to 290,000 per year. The 60 to 70% cost delta is geography, not a quality gap.",
              },
              {
                q: "How long does it take to hire a dedicated developer from India?",
                a: "With a vetted partner, expect three to five matched profiles within 5 business days, paid trials starting in week 2, and a confirmed hire by week 3 or 4. Going direct on LinkedIn or job boards typically takes 8 to 12 weeks, most of which is filtering noise.",
              },
              {
                q: "What time zones do Indian developers work in?",
                a: "India Standard Time is UTC+5:30. That gives a 4 to 5 hour overlap with the UK and continental Europe, a 2 to 3 hour overlap with the US East Coast morning, and a 5 hour overlap with Sydney afternoon. Most teams run a daily standup at 9 AM your time and let engineers async the rest of the day.",
              },
              {
                q: "Dedicated developer or freelancer for ongoing product work?",
                a: "For continuous product work, dedicated developers beat freelancers on quality, accountability, and continuity. Freelancers fit short fixed-scope projects. The total-cost-of-ownership comparison (including ramp-up, churn, and rework) usually puts a dedicated India developer at lower true cost than a US freelancer.",
              },
              {
                q: "Can I hire developers from India for a short-term project?",
                a: "Yes. Useful engagements start at four to eight weeks; below that, ramp-up overhead outweighs throughput. We run short-term engagements regularly for European clients on production deadlines, where the timezone overlap with India makes async delivery practical.",
              },
              {
                q: "What roles do you most commonly staff from India in 2026?",
                a: "Backend (Node.js, Python, Go), frontend (React.js, Next.js, TypeScript), mobile (React Native, Flutter, native iOS, native Android), AI engineering (RAG, LangChain, MCP, vector databases), DevOps and SRE, and QA automation (Playwright, Cypress, Appium, Maestro). Each role has its own pillar page and most have a hiring guide blog post.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.q}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
