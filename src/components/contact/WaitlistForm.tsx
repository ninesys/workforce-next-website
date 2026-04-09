"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const body = new URLSearchParams({
        "form-name": "seth-waitlist",
        ...formData,
      });

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us at hello@workforcenext.in.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-[10px] bg-white dark:bg-dark-900 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-dark-300 dark:placeholder:text-dark-500";

  if (submitted) {
    return (
      <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-8 text-center border border-primary-100 dark:border-primary-500/20">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
          You&apos;re on the list!
        </h3>
        <p className="mt-2 text-dark-400 dark:text-dark-300">
          We&apos;ll reach out as soon as SethAI is ready for early access. Thanks for your interest.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="seth-waitlist"
      className="space-y-5 bg-primary-50 dark:bg-dark-800 p-6 md:p-8 rounded-2xl border border-primary-100 dark:border-dark-700"
    >
      <input type="hidden" name="form-name" value="seth-waitlist" />
      {error && (
        <div className="bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm rounded-[10px] p-4">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="waitlist-name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
          Name *
        </label>
        <input
          type="text"
          id="waitlist-name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="waitlist-email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
          Email *
        </label>
        <input
          type="email"
          id="waitlist-email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="waitlist-role" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1.5">
          What role are you hiring for?
        </label>
        <input
          type="text"
          id="waitlist-role"
          name="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className={inputClass}
          placeholder="e.g. Senior AI Engineer, Full-Stack Developer"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Joining..." : "Join the SethAI waitlist"}
      </Button>
    </form>
  );
}
