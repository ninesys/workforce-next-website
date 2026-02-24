"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", company: "", service: "", message: "" });
          }}
          className="mt-4 text-accent-600 text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          id="name"
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
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
          Company
        </label>
        <input
          id="company"
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
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-slate-900 resize-none"
          placeholder="Tell us about your project or challenge..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
