"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "form-name": "contact", ...formData }),
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
        <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
          Message sent!
        </h3>
        <p className="mt-2 text-dark-400 dark:text-dark-300">
          Thank you for reaching out. We&apos;ll get back to you within an hour.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", whatsapp: "", company: "", service: "", message: "" });
          }}
          className="mt-4 text-primary-500 text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-[10px] bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-dark-300 dark:placeholder:text-dark-500";

  return (
    <form onSubmit={handleSubmit} name="contact" className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      {error && (
        <div className="bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-sm rounded-[10px] p-4">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Work Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          WhatsApp Number
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className={inputClass}
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className={inputClass}
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          What are you looking for? *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={inputClass}
        >
          <option value="">Select...</option>
          <optgroup label="Hire Developers">
            <option value="hire-ai-developers">AI & Agentic Developers</option>
            <option value="hire-data-engineers">Data Engineers</option>
            <option value="hire-frontend-engineers">Frontend Engineers</option>
            <option value="hire-backend-engineers">Backend Engineers</option>
            <option value="hire-vibe-code">Vibe-Code Optimisation Engineer</option>
            <option value="hire-cloud-cost">Cloud Cost Optimisation Engineer</option>
            <option value="hire-langchain">LangChain / RAG Developers</option>
            <option value="hire-fastapi">FastAPI Developers</option>
          </optgroup>
          <optgroup label="Engagement Type">
            <option value="mvp-sprint">MVP Sprint (Founders)</option>
            <option value="engineering-pod">Engineering Pod (Startups)</option>
            <option value="enterprise-consulting">Enterprise Consulting</option>
          </optgroup>
          <optgroup label="Products">
            <option value="seth-ai-recruiter">SethAI Recruiter (Waitlist)</option>
            <option value="productivity-intelligence">Employee Productivity Intelligence</option>
          </optgroup>
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="What are you building? What kind of team or help do you need?"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
