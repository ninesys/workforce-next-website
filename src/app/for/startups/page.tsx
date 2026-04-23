import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Engineering Pods for Startups - Build Your Product Team in 30 Days",
  description:
    "Build a dedicated 3-8 person engineering pod in 30 days. AI/backend lead, full-stack developers, QA, and optional data engineer. 48-hour profile delivery via SethAI.",
  keywords: [
    "dedicated engineering team startup",
    "hire remote developers for startup",
    "engineering pod India",
    "startup development team",
    "dedicated development team India",
    "staff augmentation for startups",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Engineering Pods for Startups - Build Your Product Team in 30 Days",
    description:
      "Build a dedicated 3-8 person engineering pod in 30 days. 48-hour profile delivery via SethAI.",
  },
  alternates: {
    canonical: "https://workforcenext.in/for/startups/",
  },
};

const podRoles = [
  {
    role: "AI / Backend Lead",
    description:
      "Owns architecture decisions, code reviews, and technical direction. The person your CTO talks to.",
  },
  {
    role: "2-3 Full-Stack Developers",
    description:
      "Ship features end-to-end. React, Next.js, Node, Python, or whatever your stack needs.",
  },
  {
    role: "1 QA Engineer",
    description:
      "Automated testing, regression coverage, and release confidence. Not an afterthought.",
  },
  {
    role: "Data Engineer (optional)",
    description:
      "Pipelines, analytics infrastructure, and ML data prep. Add when your data needs grow.",
  },
];

const differentiators = [
  {
    title: "48-Hour Profile Delivery",
    description:
      "SethAI screens candidates before you ever see a profile. You get 2-3 strong matches within 48 hours, not 20 mediocre resumes.",
  },
  {
    title: "1-Week Paid Trial Per Developer",
    description:
      "Every developer starts with a paid trial week. If they are not the right fit, we replace them at no cost.",
  },
  {
    title: "Context Continuity Guarantee",
    description:
      "If a developer leaves, we transfer all context to their replacement within one sprint. Your roadmap does not stop.",
  },
  {
    title: "Monthly Advisory",
    description:
      "A senior architect reviews your codebase monthly. Architecture feedback, tech debt flags, and scaling advice included.",
  },
  {
    title: "Your Team, Not Ours",
    description:
      "Agency staff rotate between clients. Your pod does not. They attend your standups, use your tools, and build your product.",
  },
  {
    title: "Scale Up or Down",
    description:
      "Need to add a mobile developer for a quarter? Or pause a role during a funding gap? Flex the pod as your needs change.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Tell us what you are building",
    description:
      "Share your tech stack, roadmap, and team culture. We figure out the right pod composition together.",
  },
  {
    step: "2",
    title: "SethAI matches your developers",
    description:
      "Within 48 hours, you receive curated profiles screened for technical skills and ownership mindset.",
  },
  {
    step: "3",
    title: "Trial week for each developer",
    description:
      "Every pod member starts with a 1-week paid trial. You evaluate them on real work, not interviews.",
  },
  {
    step: "4",
    title: "Your pod is live",
    description:
      "Within 30 days, your full engineering pod is embedded in your workflow. Daily standups, sprint cycles, direct Slack access.",
  },
];

export default function StartupsPage() {
  const serviceSchema = generateServiceSchema(
    "Engineering Pods for Startups",
    "Dedicated 3-8 person engineering pods for startups. 48-hour profile delivery via SethAI, 1-week paid trial per developer, and Context Continuity Guarantee.",
    "https://workforcenext.in/for/startups/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "For Startups", url: "https://workforcenext.in/for/startups/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            FOR STARTUPS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Build your product engineering team in 30 days.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            3-8 dedicated developers who work exclusively on your product. Matched
            by SethAI, trial-tested, and built to stay.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=engineering-pod" size="lg">
              Build my pod
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Typical Pod */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            A typical engineering pod
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-12 max-w-xl mx-auto">
            Every pod is customized to your stack and stage. Here is what a common
            setup looks like.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {podRoles.map((item) => (
              <div
                key={item.role}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-4">
            Agency staff rotate between clients. Your pod does not.
          </h2>
          <p className="text-lg text-dark-400 dark:text-dark-300 leading-relaxed">
            Your developers are not juggling three other projects. They are in your
            Slack, your Jira, your codebase. They know your domain, your users,
            and your technical debt. That context is what makes them productive,
            and it is what you lose every time an agency rotates someone out.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            What is included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-px h-full bg-primary-200 dark:bg-dark-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to build your pod?
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Tell us about your product and team needs. We will send you curated
            profiles within 48 hours.
          </p>
          <Button href="/contact/?offer=engineering-pod" variant="white" size="lg">
            Build my pod
          </Button>
        </div>
      </section>
    </>
  );
}
