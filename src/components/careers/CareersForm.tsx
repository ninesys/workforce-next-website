"use client";

import { useState, FormEvent, useRef } from "react";
import Button from "@/components/ui/Button";

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    portfolio: "",
    coverNote: "",
    website: "", // honeypot
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      portfolio: "",
      coverNote: "",
      website: "",
    });
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateFile = (file: File): string => {
    if (file.size > MAX_FILE_BYTES) {
      return "Resume must be 5 MB or smaller.";
    }
    const lower = file.name.toLowerCase();
    const extOk = ALLOWED_EXT.some((ext) => lower.endsWith(ext));
    const typeOk = ALLOWED_TYPES.includes(file.type);
    if (!extOk && !typeOk) {
      return "Only PDF, DOC, or DOCX files are accepted.";
    }
    return "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError("");
    if (!file) {
      setFileName("");
      return;
    }
    const errMsg = validateFile(file);
    if (errMsg) {
      setError(errMsg);
      setFileName("");
      e.target.value = "";
      return;
    }
    setFileName(file.name);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setError("Please attach your resume (PDF, DOC, or DOCX).");
      setSubmitting(false);
      return;
    }
    const fileError = validateFile(file);
    if (fileError) {
      setError(fileError);
      setSubmitting(false);
      return;
    }

    try {
      const body = new FormData();
      body.append("form-name", "careers");
      for (const [k, v] of Object.entries(formData)) {
        body.append(k, v);
      }
      body.append("resume", file, file.name);

      const res = await fetch("/api/submit-form", {
        method: "POST",
        body,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          data.error ||
            "Something went wrong. Please try again or email your resume to hello@workforcenext.in.",
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
            resetForm();
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
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 0, height: 0, overflow: "hidden" }}
      >
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

      {/* Resume upload */}
      <div>
        <label
          htmlFor="career-resume"
          className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1"
        >
          Resume *
        </label>
        <label
          htmlFor="career-resume"
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 p-4 border-2 border-dashed border-dark-200 dark:border-dark-600 rounded-[10px] bg-white dark:bg-dark-800 hover:border-primary-400 dark:hover:border-primary-500 cursor-pointer transition-colors"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-dark-900 dark:text-dark-50 truncate">
              {fileName || "Click to attach your resume"}
            </p>
            <p className="mt-0.5 text-xs text-dark-400 dark:text-dark-400">
              PDF, DOC, or DOCX. Max 5 MB.
            </p>
          </div>
          {fileName && (
            <span className="self-start sm:self-center inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300 text-xs font-bold">
              Attached
            </span>
          )}
        </label>
        <input
          id="career-resume"
          ref={fileInputRef}
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
          onChange={handleFileChange}
          className="sr-only"
        />
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
        {submitting ? "Submitting..." : "Submit application"}
      </Button>
    </form>
  );
}
