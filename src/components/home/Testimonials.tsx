"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't take our word for it. Hear from the enterprise leaders who've transformed their operations with Workforce Next."
        />
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div className="relative bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            <svg
              className="absolute top-6 left-6 w-10 h-10 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <footer className="mt-6">
                <div className="font-heading font-semibold text-slate-900">
                  {testimonials[active].name}
                </div>
                <div className="text-sm text-slate-500">
                  {testimonials[active].title}, {testimonials[active].company}
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === active
                    ? "bg-primary-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
