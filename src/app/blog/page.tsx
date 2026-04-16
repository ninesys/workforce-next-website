"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
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
    </>
  );
}
