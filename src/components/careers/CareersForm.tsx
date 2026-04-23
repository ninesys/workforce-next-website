"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    portfolio: "",
    resumeLink: "",
    coverNote: "",
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
        body: JSON.stringify({ "form-name": "careers", ...formData }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong. Please try again or email your resume to hello@workforcenext.in."
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-[10px] bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-dark-300 dark:placeholder:text-dark-500";

  if (submitted) {
    return (
      <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
          Resume submitted!
        </h3>
        <p className="mt-2 text-dark-400 dark:text-dark-300">
          Thank you for your interest in Workforce Next. We review every
          application and will reach out if there is a match.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              role: "",
              experience: "",
              portfolio: "",
              resumeLink: "",
              coverNote: "",
              website: "",
            });
          }}
          className="mt-4 text-primary-500 text-sm font-medium hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="careers" className="space-y-5">
      <input type="hidden" name="form-name" value="careers" />
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
        <label htmlFor="career-website">Leave this field blank</label>
        <input
          id="career-website"
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
          <label htmlFor="career-name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Full Name *
          </label>
          <input
            id="career-name"
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
          <label htmlFor="career-email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Email *
          </label>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="john@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Phone / WhatsApp *
          </label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="career-experience" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
            Years of Experience *
          </label>
          <select
            id="career-experience"
            name="experience"
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="0-1">0 - 1 year (Fresher)</option>
            <option value="1-3">1 - 3 years</option>
            <option value="3-5">3 - 5 years</option>
            <option value="5-8">5 - 8 years</option>
            <option value="8+">8+ years</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="career-role" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Role you are applying for *
        </label>
        <select
          id="career-role"
          name="role"
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a role...</option>
          <option value="ai-ml-engineer">AI / ML Engineer</option>
          <option value="data-engineer">Data Engineer (Spark / Airflow)</option>
          <option value="full-stack-developer">Full-Stack Developer (React / Node.js)</option>
          <option value="frontend-engineer">Frontend Engineer (React / Next.js)</option>
          <option value="backend-engineer">Backend Engineer (FastAPI / Go / Node.js)</option>
          <option value="vibe-code-engineer">Vibe-Code Optimisation Engineer</option>
          <option value="cloud-cost-engineer">Cloud Cost Optimisation Engineer</option>
          <option value="cloud-devops">Cloud & DevOps Engineer</option>
          <option value="mobile-developer">Mobile Developer (React Native / Flutter)</option>
          <option value="qa-engineer">QA / Test Automation Engineer</option>
          <option value="ui-ux-designer">UI/UX Designer</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="career-resume" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Resume Link (Google Drive / Dropbox / LinkedIn) *
        </label>
        <input
          id="career-resume"
          name="resumeLink"
          type="url"
          required
          value={formData.resumeLink}
          onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
          className={inputClass}
          placeholder="https://drive.google.com/file/..."
        />
        <p className="mt-1 text-xs text-dark-300 dark:text-dark-400">
          Upload your resume to Google Drive or Dropbox and paste the public link here.
        </p>
      </div>

      <div>
        <label htmlFor="career-portfolio" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Portfolio / GitHub / LinkedIn
        </label>
        <input
          id="career-portfolio"
          name="portfolio"
          type="url"
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
          className={inputClass}
          placeholder="https://github.com/johndoe"
        />
      </div>

      <div>
        <label htmlFor="career-note" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
          Why do you want to join Workforce Next?
        </label>
        <textarea
          id="career-note"
          name="coverNote"
          rows={4}
          value={formData.coverNote}
          onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Tell us briefly about yourself and what excites you about this role..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit resume"}
      </Button>
    </form>
  );
}
