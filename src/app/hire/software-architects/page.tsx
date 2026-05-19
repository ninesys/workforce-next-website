import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Software Architects from India",
  description:
    "Hire pre-vetted software architects from India. System design, microservices, event-driven, cloud, scalability, security. Fractional or full-time. SethAI-screened.",
  keywords: [
    "hire software architect",
    "hire software architects India",
    "remote software architect",
    "fractional software architect",
    "system design consultant",
    "microservices architect",
    "cloud software architect",
    "principal engineer India",
    "staff engineer hire",
  ],
  openGraph: {
    ...ogDefaults("/hire/software-architects/"),
    images: ["/images/og-default.png"],
    title: "Hire Software Architects from India",
    description:
      "Pre-vetted software architects for system design, scaling, and modernization. Fractional or full-time. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/software-architects/`,
  },
};

const skills = [
  "System Design",
  "Microservices",
  "Event-Driven Architecture",
  "Domain-Driven Design",
  "API Design",
  "Cloud Architecture (AWS, GCP, Azure)",
  "Kubernetes / Containers",
  "Kafka / Event Streams",
  "Security Architecture",
  "Performance Engineering",
  "Data Architecture",
  "Architecture Decision Records",
];

const whyPoints = [
  {
    title: "Real architects, not slide-deck consultants",
    description:
      "Our architects write code, draw real systems, and own ADRs. They have shipped the systems they design, run them in production, and been on-call for the incidents. Not partners who hand off to junior teams.",
  },
  {
    title: "Hands-on plus strategic",
    description:
      "Architecture work happens in PRs, in design reviews, in pairing sessions, not in 80-page Word documents. Our architects spend 30 to 50% of their time on the code that proves the design.",
  },
  {
    title: "Fractional or full-time engagements",
    description:
      "Most architecture work is fractional: 10 to 20 hours per week, embedded in your team. We also place full-time architects for major modernizations or platform builds. Match the model to the work.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership and communication, not just technical depth. You get architects who stay long enough to see decisions through, not consultants who disappear after the design phase.",
  },
];

const responsibilities = [
  "Writing Architecture Decision Records (ADRs) for non-trivial decisions with tradeoffs, context, and consequences documented",
  "Designing systems end-to-end: data model, API contracts, scaling story, failure modes, security posture",
  "Running design reviews with the team: socratic questioning, not top-down decree",
  "Building reference implementations or proofs-of-concept that de-risk the architecture before broad adoption",
  "Defining technology choices (language, framework, database, queue, cloud services) with explicit rationale",
  "Architecting microservices boundaries, event-driven flows, and cross-service consistency patterns (saga, outbox)",
  "Designing cloud architectures (multi-account, multi-region, edge, hybrid) with cost and operational tradeoffs",
  "Establishing security architecture: identity flows, authorization patterns, encryption strategy, threat modeling",
  "Setting platform engineering standards: observability, CI/CD, testing pyramid, secrets management, dependency hygiene",
  "Mentoring senior engineers on system design, code review, and architectural thinking",
];

const whenToHire = [
  {
    scenario: "You are building a new platform or major product from scratch",
    recommendation: "Hire a full-time software architect for 3-6 months",
    reason:
      "Greenfield work has the highest leverage architecturally. Bad early decisions become expensive to undo. A dedicated architect during the first phase pays for itself many times over.",
  },
  {
    scenario: "You are scaling an existing product past initial product-market fit",
    recommendation: "Hire a fractional architect (10-20 hours/week)",
    reason:
      "At scale-up stage, architecture work happens in spurts: a major refactor, a microservices split, a data layer redesign. A fractional architect gives you senior input without a full-time hire.",
  },
  {
    scenario: "You are modernizing a legacy monolith",
    recommendation: "Hire a full-time architect with migration experience",
    reason:
      "Modernizations need someone who has done them before, can stage the work safely, and knows when to strangle vs rewrite. A hands-on architect plus 2-3 engineers is a common pod shape.",
  },
  {
    scenario: "You need a senior engineer who can design, but not a dedicated architect role",
    recommendation: "Hire a Senior or Staff engineer instead",
    reason:
      "Many teams do not need a dedicated architect; they need a senior engineer who can design well. Our software engineers page covers this. Architects are for teams where design is a full-time role.",
  },
];

const screeningSignals = [
  {
    signal: "System design depth",
    detail:
      "Given a realistic scenario (multi-tenant SaaS, real-time platform, fintech ledger), can the architect design it on a whiteboard with explicit tradeoffs? We go deeper than typical interviews.",
  },
  {
    signal: "ADR-quality reasoning",
    detail:
      "We ask candidates to write a one-page ADR on a real decision. Strong architects produce context, tradeoffs, and consequences. Weak ones produce only the decision.",
  },
  {
    signal: "Code-level credibility",
    detail:
      "We have architects review code and walk us through their own recent PRs. Architects who have not coded in years lose credibility with the engineering team and produce designs that do not match reality.",
  },
  {
    signal: "Production incident experience",
    detail:
      "We ask about real incidents they were on-call for, how they were diagnosed, and what changed afterward. Architecture work that has not survived production fire is theoretical.",
  },
  {
    signal: "Stakeholder communication",
    detail:
      "Can the architect translate technical tradeoffs into business language for product, finance, and the CEO? Most architecture decisions are also business decisions, and the architect is the translator.",
  },
  {
    signal: "Migration and modernization track record",
    detail:
      "Migrations are where architecture is tested. Strangler fig pattern, incremental rollout, parallel run, dual-write, sunset planning. We screen specifically for migration experience when the role calls for it.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "10 to 20 hours per week", best: "Best for scale-up stage teams needing senior architectural input without a full-time hire.", includes: "Dedicated architect, embedded in your team, weekly design reviews, ADR drafting, on-demand consults." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for major platform builds, modernizations, or new products in the first 3-6 months.", includes: "Dedicated architect, hands-on design plus code, engineering manager check-ins, PTO backup coverage." },
  { name: "Architecture review", hours: "1 to 4 week engagement", best: "Best for an external review of an existing architecture before a major change.", includes: "Architect-led review, findings document with prioritized recommendations, follow-up session." },
];

const steps = [
  { step: "01", title: "Share your context", description: "Tell us about your system, scale, team, and what architectural problem you are solving." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for architectural depth, communication, and engagement-model fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test system design, ADR writing, and stakeholder communication." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a software architect from India?",
    answer:
      "Software architects from India cost USD 7,000 to 12,000 per month for full-time engagement. Fractional engagements (10-20 hours/week) cost USD 3,500 to 6,500 per month. Architecture review engagements (1-4 weeks) range from USD 5,000 to 25,000 depending on scope. Pricing reflects the seniority and judgment required.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do we need a software architect or just a senior engineer?",
    answer:
      "If architecture work is happening in spurts and your senior engineers can handle most design, you need a fractional architect (or none). If architecture is a daily concern across multiple teams, or you are building a new platform, you need a dedicated architect. Many teams overhire architects when senior engineers would do.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your software architects still hands-on with code?",
    answer:
      "Yes. We screen specifically for hands-on architects. Architects who have not written code in years lose credibility with the engineering team and design systems that do not match production reality. Our architects spend 30-50% of their time in code: PRs, design proofs, pairing.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between a software architect, solution architect, and enterprise architect?",
    answer:
      "Software architect: designs a system or product (hands-on, code-credible). Solution architect: designs how multiple systems integrate to solve a business problem (often cloud-vendor specific, certified). Enterprise architect: defines standards across the org. We staff all three; tell us the scope and we match.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can a fractional architect actually be effective in 10-20 hours per week?",
    answer:
      "Yes, when scoped correctly. Fractional architects work best on weekly design reviews, ADR drafting, on-demand consults, and being embedded in critical PR reviews. They are less effective when treated as part-time builders. Match the engagement to the work, not the budget.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your software architects lead a legacy modernization?",
    answer:
      "Yes. We have led modernizations from PHP and Rails monoliths to modern Node/Python/Java microservices, from on-prem to cloud, and from custom auth to OIDC. Modernization architects are screened specifically for migration experience: strangler fig, dual-write, parallel run, sunset planning.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your software architects work in our timezone?",
    answer:
      "Yes. Our architects in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap for design reviews and synchronous work.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireSoftwareArchitectsPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Software Architects from India",
    "Hire pre-vetted software architects from India. System design, microservices, cloud, modernization. Fractional or full-time. SethAI-screened.",
    `${siteMetadata.url}/hire/software-architects/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Software Architects", url: `${siteMetadata.url}/hire/software-architects/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE SOFTWARE ARCHITECTS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Software Architects from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Hands-on, code-credible architects who design real systems and
            stay to see them through. Fractional or full-time. Screened by
            SethAI for depth, ADR-quality reasoning, and production
            experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Architecture work happens in code, not in slide decks</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most software architecture hiring goes wrong because it
              optimizes for credentials and consulting polish instead of
              hands-on production experience. The architect joins, writes a
              long document, runs a review, and disappears before the design
              proves itself. The engineering team is left to discover what
              was unbuildable.
            </p>
            <p>
              A software architect worth hiring in 2026 is hands-on. They
              write code 30 to 50% of the time, draw systems they can
              defend, write ADRs with explicit tradeoffs, and stay through
              implementation so the design adapts to reality. They have
              been on-call for the systems they have designed.
            </p>
            <p>
              Every architect we place is screened by SethAI for those
              instincts: code credibility, ADR-quality reasoning, production
              incident experience, and the ownership to see a decision
              through. If you need a hands-on senior engineer rather than a
              dedicated architect, see our{" "}
              <a href="/hire/software-engineers/" className="text-primary-600 hover:underline">software engineers</a>{" "}
              page. For cloud-specific architecture, our{" "}
              <a href="/hire/aws-developers/" className="text-primary-600 hover:underline">AWS developers</a>{" "}
              page is the right fit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire software architects from Workforce Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a software architect actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a software architect through Workforce Next, here is
            the work they take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Architect, senior engineer, or fractional: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Many teams overhire architects when senior engineers would do. Here is how we help customers decide.</p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div key={item.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">{item.scenario}</h3>
                <p className="text-sm font-bold text-primary-500 mb-3">{item.recommendation}</p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our software architects. Every engagement includes context documentation and PTO backup coverage at no extra cost.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.name} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col">
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">{model.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary-500">{model.hours}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{model.best}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">{model.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring software architects</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire a software architect?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your system and we will match you with the right architect within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
