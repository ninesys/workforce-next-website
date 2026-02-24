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
      const body = new URLSearchParams({
        "form-name": "contact",
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
      <div className="bg-success-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-slate-900">
          Message Sent!
        </h3>
        <p className="mt-2 text-slate-600">
          Thank you for reaching out. We&apos;ll get back to you within an hour.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", whatsapp: "", company: "", service: "", message: "" });
          }}
          className="mt-4 text-accent-600 text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="contact" className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      {error && (
        <div className="bg-red-50 text-red-700 text-sm rounded-lg p-4">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Work Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">
          WhatsApp Number
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900 bg-white"
        >
          <option value="">Select a service...</option>
          <option value="ai-agents">AI Agents</option>
          <option value="automation">Workflow Automation</option>
          <option value="iot">IoT - CloudIQ</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900 resize-none"
          placeholder="Tell us about your project or challenge..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
