"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function GccLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    teamSize: "",
    timeline: "",
    message: "",
    website: "", // honeypot — leave empty
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "form-name": "gcc-bot", ...formData }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">Request received</h3>
        <p className="mt-2 text-dark-400 dark:text-dark-300">
          Thank you. A senior team member will reach out within one business day to understand your scope and timeline.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              whatsapp: "",
              company: "",
              teamSize: "",
              timeline: "",
              message: "",
              website: "",
            });
          }}
          className="mt-4 text-primary-500 text-sm font-medium hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-[10px] bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-dark-300 dark:placeholder:text-dark-500";

  return (
    <form onSubmit={handleSubmit} name="gcc-bot" className="space-y-5">
      <input type="hidden" name="form-name" value="gcc-bot" />
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
        <label htmlFor="gcc-website">Leave this field blank</label>
        <input
          id="gcc-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>
      {error && (
        <div className="bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm rounded-[10px] p-4">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="gcc-name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Full Name *
          </label>
          <input
            id="gcc-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="gcc-email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Work Email *
          </label>
          <input
            id="gcc-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>

        <div>
          <label htmlFor="gcc-company" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Company *
          </label>
          <input
            id="gcc-company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClass}
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label htmlFor="gcc-whatsapp" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Phone / WhatsApp
          </label>
          <input
            id="gcc-whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className={inputClass}
            placeholder="+1 555 123 4567"
          />
        </div>

        <div>
          <label htmlFor="gcc-teamSize" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Planned India team size *
          </label>
          <select
            id="gcc-teamSize"
            name="teamSize"
            required
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="10-25">10-25</option>
            <option value="25-50">25-50</option>
            <option value="50-100">50-100</option>
            <option value="100+">100+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="gcc-timeline" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Target timeline *
          </label>
          <select
            id="gcc-timeline"
            name="timeline"
            required
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="0-3-months">0-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="exploring">Still exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="gcc-message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Tell us about your plans
        </label>
        <textarea
          id="gcc-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="What functions are you looking to build out in India, and where are you in the decision process?"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Request a GCC scoping call"}
      </Button>
    </form>
  );
}
