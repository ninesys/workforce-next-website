import { Metadata } from "next";
import { ogDefaults, siteMetadata } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "AI Automation Agency for Technical Founders",
  description:
    "Workforce Next is an AI automation agency built for technical founders. We harden vibe-coded apps, build AI agents and workflows, and provide dedicated engineering teams screened by SethAI.",
  keywords: [
    "ai automation agency",
    "ai agent development company",
    "ai workflow automation services",
    "ai automation for founders",
    "hire ai developers india",
    "ai automation agency india",
  ],
  openGraph: {
    ...ogDefaults("/ai-automation-agency/"),
    images: ["/images/og-default.png"],
    title: "AI Automation Agency for Technical Founders",
    description:
      "Workforce Next is an AI automation agency built for technical founders. AI agents, workflow automation, vibe-code hardening, and dedicated engineers.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-automation-agency/`,
  },
};

const useCases = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "You built with AI tools and need it production-ready",
    description:
      "Cursor, Claude Code, Bolt, Lovable — your app works in the demo. But it has no rate limiting, no bot protection, and architecture that won't survive real users. We audit and harden it without a rewrite.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "You have a junior team but need senior AI judgment",
    description:
      "Your team ships features but no one is making architecture calls, evaluating AI model costs, or building the evaluation pipelines that prevent regressions. We embed a senior AI lead without the full-time hire.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "You want to validate an idea with a working AI product fast",
    description:
      "No internal team yet. You want a working, deployable product in weeks — not months — so you can test demand before building a full engineering org. One senior developer, fixed scope, fast turnaround.",
  },
];

const services = [
  {
    title: "AI Agents and Agentic Workflows",
    description:
      "We design and build multi-agent systems that handle real business tasks: lead research, document processing, customer support, internal ops. LangChain, CrewAI, AutoGen, custom orchestration.",
    href: "/hire/ai-developers/",
    linkLabel: "Hire AI developers",
  },
  {
    title: "Workflow Automation",
    description:
      "We map your manual processes and replace the repetitive parts with reliable automated pipelines. Integrations across your CRM, helpdesk, data warehouse, and communication stack.",
    href: "/hire/automation-consultants/",
    linkLabel: "Hire automation consultants",
  },
  {
    title: "Vibe-Code Hardening",
    description:
      "Audit and harden AI-generated codebases before they hit real users. Rate limiting, input validation, bot protection, secrets management, and architecture review. Audit-first, no rewrite unless the code demands it.",
    href: "/hire/vibe-code-engineer/",
    linkLabel: "Hire a vibe-code engineer",
  },
  {
    title: "Dedicated AI Engineering Teams",
    description:
      "One engineer or a full pod, matched to your stack and industry by SethAI. Flexible hours to overlap with US, UK, EU, or Australia working hours. Paid trial week, context docs from day one.",
    href: "/for/startups/",
    linkLabel: "See the engineering pod",
  },
];

const differentiators = [
  {
    title: "Built for founders, not enterprises",
    description:
      "Our processes, timelines, and communication style are calibrated to the speed founders need. No account managers between you and the engineer.",
  },
  {
    title: "SethAI matches on context, not keywords",
    description:
      "A fintech founder gets a developer who has shipped payment rails, not just someone who knows Python. Every match includes a 1-page report with technical depth, strengths, and red flags.",
  },
  {
    title: "Audit-first, not rebuild-first",
    description:
      "We review what you have before suggesting what to replace. Most AI-built codebases need hardening, not rewriting. That distinction saves months and budget.",
  },
  {
    title: "Context continuity is built in",
    description:
      "Every engagement includes a codebase walkthrough, domain glossary, and architecture decision log. When the team grows or changes, the next person ramps in days, not months.",
  },
];

const steps = [
  {
    step: "01",
    title: "Describe your situation",
    description:
      "Tell us whether you need an app hardened, a workflow automated, a team augmented, or an MVP shipped. We scope from there, not from a service menu.",
  },
  {
    step: "02",
    title: "SethAI matches in 48 hours",
    description:
      "Our AI recruiter screens for technical depth and longevity signals, not resume keywords. You receive a shortlist with a 1-page match report per candidate.",
  },
  {
    step: "03",
    title: "You interview and choose",
    description:
      "Direct interviews, your questions, your criteria. No black box. We recommend; you decide.",
  },
  {
    step: "04",
    title: "Paid trial, then commit",
    description:
      "Every engagement starts with a paid trial on your actual codebase. If the fit is not right, we rematch at no cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What does an AI automation agency actually do?",
    answer:
      "An AI automation agency builds the AI layer on top of your business: agents that handle real tasks, workflows that replace manual steps, and the engineering infrastructure to run it reliably. At Workforce Next, we also harden AI-generated codebases and provide dedicated engineers for ongoing product development. The work covers both the build and the team.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "How is this different from hiring a freelancer or a generic dev agency?",
    answer:
      "Two differences. First, every engineer is screened by SethAI for industry context and longevity signals, not just technical keywords. A developer matched to a fintech founder has actually shipped payment systems. Second, we are set up for ongoing engagements, not one-off projects. Context documentation, context continuity, and engineering advisory are built into every dedicated engagement. Freelancers and generic agencies reset context when the project ends.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What AI frameworks and tools do your engineers work with?",
    answer:
      "Our AI engineers work across LangChain, LangGraph, CrewAI, AutoGen, LlamaIndex, and the raw SDKs for OpenAI, Anthropic, Google, AWS Bedrock, and Azure OpenAI. For workflow automation: Zapier, Make, n8n, and custom integrations. For vibe-code hardening: whatever stack the codebase was built in, since we audit first and fix in place.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How quickly can you start?",
    answer:
      "SethAI delivers matched profiles within 48 hours of your intake call. From requirements to a developer starting their trial week is typically 7 to 10 business days. If you have an urgent need, we maintain a bench of pre-screened engineers who can start in 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your team work in US or European timezones?",
    answer:
      "Yes. Our engineers in India routinely shift to overlap with US Eastern, US Pacific, UK, and European timezones. Every dedicated engagement includes at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover morning standups.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function AIAutomationAgencyPage() {
  const serviceSchema = generateServiceSchema(
    "AI Automation Agency for Technical Founders",
    "AI agents, workflow automation, vibe-code hardening, and dedicated engineering teams for technical founders. Screened by SethAI for technical depth and long-term fit.",
    `${siteMetadata.url}/ai-automation-agency/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Automation Agency", url: `${siteMetadata.url}/ai-automation-agency/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            AI AUTOMATION AGENCY
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            AI automation agency for technical founders.
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            We harden vibe-coded apps, build AI agents and workflows, and provide
            dedicated engineering teams that stay. Based in India, built for founders
            in the US, UK, and EU.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Book a discovery call
            </Button>
            <Button href="/how-we-work/" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Three situations we solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-dark-100 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-dark-800 flex items-center justify-center text-primary-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-4">
            What we build and automate
          </h2>
          <p className="text-center text-dark-500 dark:text-dark-300 mb-12 max-w-xl mx-auto">
            Four service tracks. Each one is a dedicated practice, not a side offering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a
                    href={service.href}
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {service.linkLabel} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why founders choose Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl border border-dark-100 dark:border-dark-700"
              >
                <div className="text-primary-500 shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "48h", label: "Profile delivery via SethAI" },
              { stat: "7–10", label: "Business days to trial start" },
              { stat: "4+", label: "Hours daily timezone overlap" },
              { stat: "2020", label: "Founded in Gurugram, India" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <dt className="text-3xl font-extrabold text-white">{stat}</dt>
                <dd className="mt-1 text-sm text-dark-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-primary-50 dark:bg-dark-800 border border-dark-100 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to talk?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Tell us what you are building and we will match you with the right
            engineer or automation approach within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/" variant="white" size="lg">
              Book a discovery call
            </Button>
            <Button href="/hire/ai-developers/" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Hire AI developers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
