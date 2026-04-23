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
  title: "Hire Vibe-Code Optimisation Engineers from India",
  description:
    "Hire pre-vetted vibe-code optimisation engineers who audit and refactor AI-generated code from Cursor, Copilot, and v0. Production-ready code, security audits, test coverage, and tech debt reduction.",
  keywords: [
    "hire vibe code engineer",
    "AI code review engineer",
    "Cursor code audit",
    "Copilot code optimisation",
    "vibe coding optimisation",
    "AI generated code review",
    "production AI code engineers",
  ],
  openGraph: {
    title: "Hire Vibe-Code Optimisation Engineers from India",
    description:
      "Engineers who turn AI-generated drafts into production-ready code. Cursor, Copilot, v0 audit specialists.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/vibe-code-engineer/`,
  },
};

const skills = [
  "Cursor",
  "Copilot",
  "v0",
  "Code Review",
  "Security Auditing",
  "Performance Optimization",
  "Test Coverage",
  "Tech Debt Reduction",
  "Refactoring",
];

const whyPoints = [
  {
    title: "AI-generated code needs human oversight",
    description:
      "Cursor, Copilot, and v0 write code fast, but they also introduce subtle bugs, security holes, and architectural shortcuts. A vibe-code optimisation engineer catches what the AI misses before customers do.",
  },
  {
    title: "Production-ready, not prototype-ready",
    description:
      "Our engineers turn AI-generated drafts into code that passes security audits, handles edge cases, and scales under load. They close the gap between demo and production.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get engineers who stay long enough to keep the codebase clean as AI-generated volume keeps rising.",
  },
  {
    title: "New role, real demand",
    description:
      "Every team using AI coding tools needs someone who can audit the output. This role did not exist two years ago. In 2026 it is one of the most valuable positions on a modern engineering team.",
  },
];

const responsibilities = [
  "Reviewing AI-generated code from Cursor, Copilot, v0, Claude Code, or similar tools before it ships to production",
  "Identifying subtle bugs: off-by-one errors, incorrect null handling, missing error boundaries, broken invariants",
  "Auditing for security issues: SQL injection, XSS, SSRF, secret leaks, missing authorization checks",
  "Spotting architectural shortcuts: unnecessary abstractions, duplicated logic, implicit global state, flawed retries",
  "Refactoring AI-generated drafts into code that matches the codebase's conventions, naming, and style",
  "Writing or fixing test coverage that AI tools rarely produce correctly the first time",
  "Profiling performance regressions introduced by AI drafts that look correct but scale poorly",
  "Tracking and reducing tech debt accumulated from rapid AI-assisted shipping cycles",
  "Training teams on prompting patterns that reduce downstream rework and surface better first drafts",
  "Setting up CI checks, lint rules, and review workflows that catch common AI-generated anti-patterns automatically",
];

const whenToHire = [
  {
    scenario: "Your team ships a lot of AI-assisted code without formal review",
    recommendation: "Hire a vibe-code optimisation engineer immediately",
    reason:
      "Rapid AI shipping without review creates an invisible debt curve. Bugs, security issues, and architectural drift compound silently. A specialist who reviews AI-generated output catches these before they become incidents or rewrites.",
  },
  {
    scenario: "You are shipping a customer-facing product built largely with v0, Cursor, or Claude Code",
    recommendation: "Hire a vibe-code optimisation engineer for the pre-launch pass",
    reason:
      "AI tools produce working demos quickly but often miss the production boundary: auth, rate limits, input validation, streaming edge cases, accessibility. A specialist does the pre-launch pass so real customers do not discover the gaps first.",
  },
  {
    scenario: "You are a small team with only occasional AI code generation",
    recommendation: "Normal code review is usually enough",
    reason:
      "If AI-generated code is a small fraction of what ships and your team has strong code-review discipline, a dedicated vibe-code specialist is overkill. Standard review plus a senior engineer usually covers the need.",
  },
  {
    scenario: "You are adopting AI coding tools across a large engineering org",
    recommendation: "Hire a vibe-code engineer to lead standards and training",
    reason:
      "Rolling out AI tooling without standards produces chaos: every team uses it differently, every codebase accumulates different debt. A specialist can set org-wide review practices, prompting guides, and CI checks that scale adoption safely.",
  },
];

const screeningSignals = [
  {
    signal: "AI-generated code intuition",
    detail:
      "We give candidates real AI-generated pull requests and ask them to review. Strong candidates immediately flag subtle bugs, missing edge cases, and unnecessary complexity. Weak ones praise the code or nitpick formatting.",
  },
  {
    signal: "Security review fluency",
    detail:
      "We hand candidates AI-generated code with planted vulnerabilities (SQLi, missing auth, SSRF, secret leaks) and ask them to audit. Strong candidates find most within 20 minutes. Weak ones focus on style and miss the actual risks.",
  },
  {
    signal: "Refactoring judgment",
    detail:
      "Good vibe-code engineers know when to refactor and when to leave AI-generated code alone. We screen for engineers who can articulate why a pattern is worth keeping or changing, without reflexive preference.",
  },
  {
    signal: "Testing instincts",
    detail:
      "AI tools generate test scaffolds that often pass while testing nothing meaningful. We screen for engineers who can spot tautological tests, missing coverage, and brittle mocks in AI-generated test files.",
  },
  {
    signal: "Prompting and tool literacy",
    detail:
      "We screen for engineers who know how to work with Cursor, Copilot, Claude Code, and v0 effectively, including when to prompt differently to reduce downstream rework. This is the upstream lever most engineers ignore.",
  },
  {
    signal: "Codebase convention awareness",
    detail:
      "AI tools generate generic code that fights a codebase's conventions. We screen for engineers who notice style drift, naming inconsistencies, and abstraction mismatches that degrade the codebase over time.",
  },
];

const engagementModels = [
  {
    name: "Audit engagement",
    hours: "2 to 4 weeks",
    best: "Best for a focused audit of AI-generated code in an existing codebase, with fix recommendations and standards.",
    includes:
      "Codebase audit, common anti-pattern identification, CI check proposals, prompting guidelines, executive summary.",
  },
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams shipping regular AI-assisted code but not enough for full-time oversight.",
    includes:
      "Dedicated engineer, ongoing PR review, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for AI-heavy engineering orgs where vibe-code review is a continuous need.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly standards review.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your codebase, AI tools you use (Cursor, Copilot, v0), and where quality concerns are showing up.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for AI code review instincts, security depth, and refactoring judgment. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to candidates directly. Have them review one of your recent AI-generated PRs live.",
  },
  {
    step: "04",
    title: "Start with audit or trial week",
    description:
      "Begin with a paid trial or focused audit. If the engineer is the right fit, continue. If not, we find another match.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What is a vibe-code optimisation engineer?",
    answer:
      "A vibe-code optimisation engineer specializes in reviewing, refactoring, and productionizing code generated by AI tools like Cursor, Copilot, Claude Code, and v0. They catch the bugs, security issues, and architectural shortcuts that AI tools still miss, and they ship code that is safe, performant, and maintainable. The role exists because AI coding tools generate working demos quickly but still need experienced human oversight before code reaches real customers.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does it cost to hire a vibe-code engineer in India?",
    answer:
      "Full-time senior vibe-code engineers in India typically cost between 5,500 and 9,000 USD per month. Audit engagements usually run 2 to 4 weeks at a fixed fee. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage. Most customers see ROI through reduced bug rework, faster PR review cycles, and avoided production incidents.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Why not just use AI code review tools like Greptile or CodeRabbit?",
    answer:
      "AI review tools are useful and we recommend them. They catch common patterns and surface obvious issues. They do not catch subtle architectural drift, security gaps requiring context, or judgment calls about when a convention should bend. Combine both: AI review tools for first pass, a vibe-code engineer for the second pass where it matters. The human adds judgment the tools still cannot match.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your vibe-code engineers know Cursor, Copilot, v0, and Claude Code?",
    answer:
      "Yes. Every engineer we place uses these tools daily and knows their failure modes. They can review AI-generated code because they have produced and critiqued enough of it to recognize the patterns. They also know how to prompt differently so less rework is needed downstream. This is part of how we screen.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Will a vibe-code engineer slow down our shipping velocity?",
    answer:
      "In the short term there is a small cost: PRs get an additional review. In the medium term most customers ship faster because bugs get caught before release, production incidents drop, and the codebase stays healthy. Customers typically report faster overall velocity after the first month as the review pipeline becomes natural.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a vibe-code engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For audit engagements we can often start within 3 to 5 days given a pre-screened bench of specialists.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireVibeCodeEngineerPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Vibe-Code Optimisation Engineers from India",
    "Hire pre-vetted vibe-code optimisation engineers who audit and refactor AI-generated code. Cursor, Copilot, v0 specialists. SethAI-screened.",
    `${siteMetadata.url}/hire/vibe-code-engineer/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Vibe-Code Engineer",
      url: `${siteMetadata.url}/hire/vibe-code-engineer/`,
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
            HIRE VIBE-CODE ENGINEER
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Vibe-Code Optimisation Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who audit, refactor, and productionize
            AI-generated code from Cursor, Copilot, Claude Code, and v0.
            Screened by SethAI for technical depth and long-term fit.
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
            Why vibe coding needs a specialist on the other side
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              AI coding tools like Cursor, Copilot, Claude Code, and v0 have
              changed how code gets written. Demos ship in hours. Prototypes
              look polished on day one. The catch is invisible: AI-generated
              code carries subtle bugs, security gaps, and architectural
              shortcuts that only surface weeks later, often in production.
              Hiring without an engineer who catches these is how teams end
              up with silent tech debt that compounds faster than they can
              refactor.
            </p>
            <p>
              A vibe-code optimisation engineer is the counterbalance. They
              read AI-generated pull requests with the skepticism of a
              reviewer who has seen the same generative patterns fail many
              times. They spot missing auth checks, tautological tests,
              brittle error handling, and code that fights the codebase&apos;s
              conventions. They close the gap between demo quality and
              production quality.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              tool keywords. It is evaluated on review depth, security
              instincts, refactoring judgment, and the signals that predict
              whether someone can keep your codebase healthy as AI-assisted
              volume keeps rising.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire vibe-code engineers from Workforce Next
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

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a vibe-code optimisation engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a vibe-code engineer through Workforce Next, here is the work
            they take ownership of:
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

      {/* When to hire */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Do you need a dedicated vibe-code engineer?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every team needs a specialist. Here is how we help customers
            decide.
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

      {/* Engagement */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our vibe-code engineers. Most customers
            start with an audit and move to fractional or full-time based on
            what surfaces.
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
            Common questions about hiring vibe-code engineers
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
            Ready to clean up your AI-generated code?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your codebase and AI tool usage. We will match you
            with a vibe-code specialist within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
