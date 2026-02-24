"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import BlogCategories from "@/components/blog/BlogCategories";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Insights & Resources
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Expert insights on AI agents, workflow automation, and IoT cloud
            platforms. Practical guides, industry analysis, and case studies.
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <BlogCategories
            active={activeCategory}
            onChange={setActiveCategory}
          />

          {filteredPosts.length === 0 ? (
            <p className="text-center text-slate-500 py-12">
              No posts found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
