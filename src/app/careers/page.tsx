import { Metadata } from "next";
import CareersForm from "@/components/careers/CareersForm";
import Badge from "@/components/ui/Badge";
import { generateJobPostingSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Careers at Workforce Next - Join Our Engineering Team",
  description:
    "Join Workforce Next. We are hiring AI engineers, full-stack developers, data engineers, and more. Remote-first, ownership-driven, real engineering work.",
  keywords: [
    "careers workforce next",
    "AI developer jobs India",
    "remote developer jobs",
    "full stack developer jobs",
    "data engineer jobs",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Careers at Workforce Next - Join Our Engineering Team",
    description:
      "Join Workforce Next. Remote-first, ownership-driven engineering work on AI, data, and cloud projects.",
  },
  alternates: {
    canonical: "https://workforcenext.in/careers/",
  },
};

const perks = [
  {
    title: "Work on Real Problems",
    description:
      "Build AI agents, data pipelines, and cloud-native systems for real clients. No boring CRUD apps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Remote-First Culture",
    description:
      "Work from anywhere in India. We care about output, not office hours. Flexible schedules with async communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Ownership, Not Tasks",
    description:
      "You own features end-to-end. No micromanagement. We hire people who think like product engineers and give them space to do their best work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Growth and Learning",
    description:
      "Work with senior architects and AI engineers. Learn by shipping real products, not watching tutorials.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

const roles = [
  "Full-Stack Developer (React / Node.js)",
  "AI / ML Engineer",
  "Data Engineer (Spark / Airflow)",
  "Vibe-Code Optimisation Engineer",
  "Cloud & DevOps Engineer",
  "Mobile Developer (React Native / Flutter)",
  "QA / Test Automation Engineer",
  "UI/UX Designer",
];

const jobRoles = [
  { title: "Full-Stack Developer (React / Node.js)", value: "full-stack-developer" },
  { title: "AI / ML Engineer", value: "ai-ml-engineer" },
  { title: "Data Engineer (Spark / Airflow)", value: "data-engineer" },
  { title: "Vibe-Code Optimisation Engineer", value: "vibe-code-engineer" },
  { title: "Cloud & DevOps Engineer", value: "cloud-devops" },
  { title: "Mobile Developer (React Native / Flutter)", value: "mobile-developer" },
  { title: "QA / Test Automation Engineer", value: "qa-engineer" },
  { title: "UI/UX Designer", value: "ui-ux-designer" },
];

export default function CareersPage() {
  const jobPostingSchemas = generateJobPostingSchema(jobRoles);

  return (
    <>
      {jobPostingSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            CAREERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Build what matters. Join Workforce Next.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            We are always looking for talented engineers, designers, and problem
            solvers who want to work on AI and cloud projects that make a real
            difference. No fluff roles. Real engineering.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why engineers choose us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex gap-4 p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="text-primary-500 shrink-0 mt-1">{perk.icon}</div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + Form */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">
                Roles we hire for
              </h2>
              <p className="text-sm text-dark-400 dark:text-dark-300 mb-6">
                Don&apos;t see your exact role? Submit your resume anyway. We are
                always expanding and will reach out when there is a fit.
              </p>
              <ul className="space-y-3">
                {roles.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-dark-700 dark:text-dark-200">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
                Submit your resume
              </h2>
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
