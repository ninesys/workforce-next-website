import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Frontend Engineers from India (React, Next.js, TypeScript)",
  description:
    "Hire pre-vetted frontend engineers from India. React, Next.js 14+, TypeScript, Tailwind, performance optimization, and accessibility. SethAI-screened for skills and longevity.",
  keywords: [
    "hire frontend engineers India",
    "hire React developers India",
    "hire Next.js developers India",
    "TypeScript developers India",
    "Tailwind CSS developers",
    "frontend staff augmentation",
    "performance optimization engineers",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire Frontend Engineers from India",
    description:
      "Hire pre-vetted React, Next.js, and TypeScript engineers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/frontend-engineers/`,
  },
};

const skills = [
  "React",
  "Next.js 14+",
  "TypeScript",
  "Tailwind CSS",
  "Zustand",
  "React Query",
  "Performance Optimization",
  "Accessibility",
  "Playwright",
  "Storybook",
];

const whyPoints = [
  {
    title: "React and Next.js specialists",
    description:
      "Our frontend engineers work with React and Next.js daily. They understand Server Components, streaming, the App Router, and Cache Components. Not just class components and Redux from five years ago.",
  },
  {
    title: "Performance-first mindset",
    description:
      "Core Web Vitals, bundle splitting, lazy loading, image optimization, RSC boundaries. Our engineers build fast interfaces, not just pretty ones that tank Lighthouse scores.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get engineers who stay and build UI systems over time rather than shipping one-off components.",
  },
  {
    title: "Accessibility as standard",
    description:
      "WCAG compliance, semantic HTML, keyboard navigation, screen reader testing. Our engineers build interfaces that work for everyone, including users of assistive technology.",
  },
];

const responsibilities = [
  "Building React and Next.js 14+ interfaces using Server Components, Suspense, and the App Router correctly",
  "Designing component systems with Storybook, TypeScript types, and thoughtful prop APIs that stay usable as they scale",
  "Writing Tailwind CSS styles with consistent design tokens, responsive variants, and accessible color contrast",
  "Managing client state with Zustand, Jotai, or React Context, and server state with React Query or SWR",
  "Implementing real loading states, optimistic updates, and error boundaries that handle the paths users actually hit",
  "Optimizing Core Web Vitals (LCP, INP, CLS) with bundle splitting, lazy loading, image optimization, and font strategy",
  "Writing Playwright and Vitest tests for interaction, accessibility, and regression coverage",
  "Ensuring WCAG 2.2 AA compliance: keyboard navigation, ARIA where needed, semantic HTML, color contrast, and motion preferences",
  "Integrating with backend APIs (REST, GraphQL, tRPC) with proper typing, error handling, and retry logic",
  "Pairing with designers in Figma on interaction details and with backend engineers on API contracts",
];

const whenToHire = [
  {
    scenario: "You are building a product where UI quality is the competitive edge",
    recommendation: "Hire a senior frontend engineer",
    reason:
      "Consumer SaaS, design tools, dashboards, and content platforms compete on interface quality. A senior frontend specialist will ship polish, performance, and accessibility that generalists cut corners on when deadlines pressure them.",
  },
  {
    scenario: "You are migrating from a legacy React stack (CRA, Pages Router, Redux)",
    recommendation: "Hire a frontend engineer with Next.js App Router depth",
    reason:
      "Migrations to Server Components and the App Router are where teams trip up. A specialist who has done this migration before will identify hydration pitfalls, caching gotchas, and code-split boundaries that a generalist misses.",
  },
  {
    scenario: "You are shipping an internal admin panel",
    recommendation: "A full-stack engineer is usually fine",
    reason:
      "Internal tools benefit more from speed than polish. A full-stack engineer with decent React skills and a component library like shadcn/ui will ship a usable admin in days. Reserve specialists for customer-facing surfaces.",
  },
  {
    scenario: "Your product has accessibility or compliance requirements",
    recommendation: "Hire a frontend engineer with WCAG expertise",
    reason:
      "Healthtech, edtech, government, and public sector products have accessibility obligations. Retrofitting accessibility into a working interface costs more than building it in correctly the first time. Hire a specialist who treats accessibility as a first-class concern.",
  },
];

const screeningSignals = [
  {
    signal: "React rendering and reconciliation fluency",
    detail:
      "We ask candidates to explain why a component re-renders and when to reach for useMemo, useCallback, or stable refs. Strong candidates know the actual cost of each choice. Weak ones sprinkle memoization everywhere and hope it helps.",
  },
  {
    signal: "Server Components and Suspense judgment",
    detail:
      "Next.js Server Components are powerful and easy to misuse. We test whether candidates know when to put a component on the server vs. client, and how Suspense boundaries affect streaming and perceived performance.",
  },
  {
    signal: "Performance instincts",
    detail:
      "We hand candidates a slow app and ask them to diagnose it. Good engineers pull up the Performance tab, measure before guessing, and know which optimizations actually move Core Web Vitals. Weak ones add useMemo to everything and declare victory.",
  },
  {
    signal: "Accessibility fluency",
    detail:
      "Keyboard navigation, ARIA, semantic HTML, focus management. We screen for engineers who treat accessibility as non-negotiable, not as a last-minute checklist the week before launch.",
  },
  {
    signal: "TypeScript discipline",
    detail:
      "We review candidates' TypeScript for honest typing, sensible generics, and no excessive any. We reject candidates who escape the type system rather than learn how to use it.",
  },
  {
    signal: "Design sensibility",
    detail:
      "Strong frontend engineers care about spacing, alignment, hierarchy, and visual rhythm. We screen for engineers who have shipped interfaces they care about and can explain why one layout reads cleaner than another.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams needing senior frontend polish without a full-time headcount commitment.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for consumer-facing products shipping continuously and needing an embedded frontend specialist.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Frontend pod",
    hours: "2 to 4 engineers",
    best: "Best for a design-system rebuild, major UI rewrite, or new product front end that needs a self-contained squad.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your frontend stack, design system, and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for React depth, performance instincts, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their component thinking, design sensibility, and working style.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the engineer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a frontend engineer in India?",
    answer:
      "Mid-level frontend engineers in India typically cost between 3,500 and 6,000 USD per month for full-time engagement. Senior engineers with Next.js App Router depth, strong accessibility practice, and design sensibility range from 6,000 to 9,000 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your frontend engineers work with Next.js 14 and the App Router?",
    answer:
      "Yes. Every senior frontend engineer we place has shipped production apps on Next.js 14 or 15 with the App Router. Server Components, streaming, Suspense, and Cache Components are part of how we screen. If your app is still on Pages Router or Create React App, we match engineers who have done migrations and can guide you through the path.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your frontend engineers ship accessible interfaces?",
    answer:
      "Yes. WCAG 2.2 AA compliance is a baseline expectation for engineers we place on consumer-facing or regulated products. They know keyboard navigation, ARIA patterns, color contrast, focus management, and screen reader testing with VoiceOver and NVDA. For edtech, healthtech, or government work we specifically match engineers with accessibility audit experience.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What CSS frameworks do your frontend engineers use?",
    answer:
      "Most of our engineers work in Tailwind CSS by default, which is the dominant choice in 2026. They also have production experience with CSS-in-JS (styled-components, Emotion), CSS Modules, and vanilla Sass. We match engineers whose background aligns with your stack rather than forcing a migration.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your frontend engineers collaborate with our designers in Figma?",
    answer:
      "Yes. Strong frontend engineers are fluent in reading Figma files: auto-layout, components, tokens, and interaction specs. We screen specifically for design sensibility and the ability to push back when a spec will cause accessibility, performance, or responsive issues. They partner with designers, not just consume specs.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a frontend engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened frontend engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireFrontendEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Frontend Engineers from India",
    "Hire pre-vetted frontend engineers from India. React, Next.js 14+, TypeScript, Tailwind, performance optimization, and accessibility. SethAI-screened.",
    `${siteMetadata.url}/hire/frontend-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Frontend Engineers",
      url: `${siteMetadata.url}/hire/frontend-engineers/`,
    },
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
            HIRE FRONTEND ENGINEERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Frontend Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted React and Next.js engineers who ship fast, accessible,
            production-grade interfaces. Screened by SethAI for technical
            depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why good frontend engineers are rarer than they look
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Every engineer with a GitHub profile claims React experience. The
              gap between someone who can assemble tutorials and someone who
              can ship a production interface with genuine performance,
              accessibility, and craft is enormous. Hiring the wrong frontend
              engineer is how teams end up with bloated bundles, broken
              keyboard navigation, and Lighthouse scores that embarrass
              investors.
            </p>
            <p>
              A genuine frontend engineer thinks in render trees, layout
              stability, and user intent. They know why a 200ms input lag
              feels broken, why accessibility is not optional, and why a
              design system pays for itself by the third component. They have
              shipped interfaces that real users depend on and have been
              woken up by a performance regression caused by an innocent
              looking PR.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              keywords like React or Next.js. It is evaluated on rendering
              depth, Core Web Vitals judgment, accessibility fluency, and the
              signals that predict whether someone will still be shipping
              quality interfaces for you two years from now.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire frontend engineers from Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a frontend engineer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a frontend engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a frontend engineer through Workforce Next, here is the work they
            take ownership of on a modern product:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to hire a specialist vs generalist */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Frontend specialist or full-stack engineer: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every project needs a frontend specialist. Here is how we help
            customers decide before they spend on the wrong profile.
          </p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div
                key={item.scenario}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                  {item.scenario}
                </h3>
                <p className="text-sm font-bold text-primary-500 mb-3">
                  {item.recommendation}
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-800 dark:text-dark-100 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div
                key={item.signal}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.signal}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing and engagement models */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our frontend engineers. Every engagement
            includes an engineering manager, shared context documentation, and
            PTO backup coverage at no extra cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col"
              >
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">
                  {model.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary-500">
                  {model.hours}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {model.best}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">
                  {model.includes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
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

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring frontend engineers
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
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
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to hire frontend engineers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your product and design system. We will match you
            with the right engineers within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
