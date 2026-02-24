"use client";

import { useState } from "react";
import { faqs, faqCategories } from "@/data/faqs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <Badge variant="white" className="mb-6">
            FAQ
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Everything you need to know about AI agents, workflow automation, and
            IoT cloud platforms. Can&apos;t find your answer?{" "}
            <a
              href="/contact"
              className="text-accent-400 hover:text-accent-300 underline"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setOpenIndex(null);
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  activeCategory === cat.value
                    ? "bg-primary-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={cn(
                      "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    <Badge variant="accent" className="mb-3">
                      {faq.categoryLabel}
                    </Badge>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Our team is happy to discuss your specific use case and how our
            solutions can help your organization.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="white" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
