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
  title: "IT Consulting Services for Startups to Enterprises",
  description:
    "Strategic IT consulting for startups to enterprises. Tech roadmaps, vendor selection, modernization, IT spend optimization, security posture. Fractional CTO or project-based.",
  keywords: [
    "IT consulting",
    "IT consulting services",
    "strategic IT consulting",
    "fractional CTO",
    "technology roadmap consulting",
    "IT modernization consulting",
    "enterprise IT consulting",
    "IT vendor selection consulting",
    "IT spend optimization",
  ],
  openGraph: {
    ...ogDefaults("/consulting/it-consulting/"),
    images: ["/images/og-default.png"],
    title: "IT Consulting Services for Startups to Enterprises",
    description:
      "Strategic IT consulting. Tech roadmaps, vendor selection, modernization, IT spend, security posture. Fractional CTO or project-based.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/consulting/it-consulting/`,
  },
};

const skills = [
  "Technology Roadmap",
  "Vendor Selection (build vs buy)",
  "IT Modernization",
  "Cloud Strategy (AWS, GCP, Azure)",
  "Security Posture & Compliance",
  "Architecture Review",
  "Cost & FinOps",
  "M&A Tech Due Diligence",
  "Engineering Org Design",
  "AI Adoption Strategy",
  "Vendor Consolidation",
  "Platform Engineering",
];

const whyPoints = [
  {
    title: "Hands-on consultants who have built and run real systems",
    description:
      "Our consultants are operators, not slide-deck strategists. They have built the platforms, lived through the incidents, and managed the budgets they advise on. Their recommendations work because they have shipped them.",
  },
  {
    title: "Vendor-agnostic recommendations",
    description:
      "We do not resell software, take referral fees, or have partnerships that color our advice. When we recommend a cloud, a stack, or a tool, it's because it fits your business, not because someone pays us.",
  },
  {
    title: "Fractional CTO or project engagement",
    description:
      "Fractional CTO (10 to 20 hours/week embedded with your team) for ongoing strategic input. Project-based engagements (1 to 8 weeks) for specific decisions like vendor selection, architecture review, or M&A diligence.",
  },
  {
    title: "Written deliverables you can act on",
    description:
      "Every engagement produces written outputs: roadmap docs, ADRs, vendor evaluation reports, security posture assessments, cost analyses. Not just calls and slides.",
  },
];

const responsibilities = [
  "Building a 12-to-36 month technology roadmap aligned to business goals, with quarterly milestones and explicit tradeoffs documented",
  "Evaluating vendors and tooling: build vs buy analysis, RFP design, scoring frameworks, contract review",
  "Designing modernization plans for legacy systems: strangler fig migrations, monolith-to-services patterns, cloud lift-and-shift vs replatform decisions",
  "Reviewing architecture for scalability, security, and cost; producing actionable Architecture Decision Records (ADRs)",
  "Assessing IT spend and identifying waste: cloud bill audits, license rationalization, vendor consolidation opportunities",
  "Building cloud strategies that fit the business: single-cloud vs multi-cloud, region selection, FinOps tagging strategy",
  "Designing engineering organizations: pod structure, hiring plans, career ladders, leveling, on-call models",
  "Running M&A technology due diligence: code quality assessment, security posture, vendor lock-in risk, integration cost",
  "Setting security posture: identity strategy, audit logging, encryption standards, incident response runbooks, compliance roadmap (SOC 2, ISO 27001, HIPAA)",
  "Advising on AI adoption: where AI earns its keep in your business, where it's overkill, build-vs-buy on AI tooling, hire vs train",
];

const useCases = [
  {
    scenario: "Fractional CTO for a Series A startup",
    examples: "Founder is technical but stretched. We embed 15 hours/week to own architecture decisions, hiring, security posture, and vendor selection. Bridges the gap until a full-time CTO is hired.",
  },
  {
    scenario: "Pre-IPO technology audit",
    examples: "Comprehensive review of architecture, security posture, IP ownership, vendor concentration, and tech debt for a company preparing for IPO. Produces a board-ready written assessment.",
  },
  {
    scenario: "Cloud cost optimization initiative",
    examples: "30 to 50% reduction in AWS or GCP bill via right-sizing, Savings Plans modeling, idle cleanup, NAT Gateway audit, data-transfer optimization, and FinOps tagging strategy.",
  },
  {
    scenario: "Modernization roadmap for legacy monolith",
    examples: "Phased plan to migrate a 10-year-old PHP/Java/Rails monolith to a modern stack. Strangler fig pattern, risk mitigation, team training plan, 18-24 month sequencing.",
  },
  {
    scenario: "M&A technology due diligence",
    examples: "Acquirer hires us to assess a target's codebase, security posture, vendor risk, and integration complexity. 2 to 4 week engagement producing a written assessment with deal-relevant recommendations.",
  },
  {
    scenario: "AI adoption strategy for a mid-market company",
    examples: "Where AI fits, where it doesn't, build-vs-buy, vendor evaluation (OpenAI vs Anthropic vs open-weight), hiring vs training existing team, governance and security implications.",
  },
];

const whenToHire = [
  {
    scenario: "You need a strategic IT advisor but cannot justify a full-time CTO yet",
    recommendation: "Hire a fractional CTO (10 to 20 hours/week)",
    reason:
      "Common for Series A to early B companies. The fractional CTO embeds with the team, owns major decisions, runs technical interviews for senior hires, and unblocks the founder.",
  },
  {
    scenario: "You have a specific high-stakes decision to make in the next 90 days",
    recommendation: "Hire on a fixed-scope project engagement",
    reason:
      "Vendor selection, architecture review, M&A diligence, modernization scoping. Project engagements run 1 to 8 weeks, produce a written deliverable, and end cleanly.",
  },
  {
    scenario: "You have a CTO but want a second opinion on a major direction",
    recommendation: "Hire on an architecture review engagement",
    reason:
      "Two-week deep dive that produces an independent ADR-quality assessment. Best when the in-house team is too close to the problem or the CTO wants outside validation for the board.",
  },
  {
    scenario: "You need someone to write tickets and ship features",
    recommendation: "Hire developers, not consultants",
    reason:
      "IT consulting is advisory work. If you need execution capacity, see our software engineers, full-stack developers, or DevOps engineers pages.",
  },
];

const screeningSignals = [
  {
    signal: "Code-credible operator",
    detail:
      "We screen for consultants who have shipped code in the last 12 months, not just managed teams. Consultants who haven't operated in years give advice that doesn't match production reality.",
  },
  {
    signal: "Stakeholder communication",
    detail:
      "Can the consultant translate technical tradeoffs into business language for product, finance, and the board? IT consulting is half engineering, half stakeholder management.",
  },
  {
    signal: "Written deliverable quality",
    detail:
      "We test consultants on ADR-quality reasoning: given a real decision, can they produce a one-page assessment with context, options, tradeoffs, and recommendation? Not all senior engineers can do this.",
  },
  {
    signal: "Vendor and tooling fluency",
    detail:
      "Real exposure to the major clouds (AWS, GCP, Azure), modern frameworks, SaaS landscape, and AI tooling. Generalists who only know one stack give one-stack advice.",
  },
  {
    signal: "Cost and budget literacy",
    detail:
      "Reading a cloud bill, understanding FinOps, modeling licensing tradeoffs, building a 3-year TCO. IT consultants who don't think about cost give advice the CFO won't fund.",
  },
  {
    signal: "Independence from vendor incentives",
    detail:
      "We screen for consultants who don't resell, take referral fees, or have partnerships that color their advice. Vendor-agnostic recommendations are the table stakes of real IT consulting.",
  },
];

const engagementModels = [
  {
    name: "Fractional CTO",
    hours: "10 to 20 hours per week",
    best: "Best for startups (Series A to early B) needing strategic IT leadership without a full-time hire.",
    includes:
      "Embedded consultant, weekly sync, architecture and hiring decision ownership, board meeting support, on-demand consults.",
  },
  {
    name: "Project engagement",
    hours: "1 to 8 weeks fixed scope",
    best: "Best for one specific decision: vendor selection, architecture review, M&A diligence, modernization scoping, cost audit.",
    includes:
      "Defined scope, written deliverable, stakeholder presentation, follow-up session. Fixed-price quote upfront.",
  },
  {
    name: "Strategic retainer",
    hours: "5 to 10 hours per month",
    best: "Best for established teams that want on-demand advisory without a full fractional engagement.",
    includes:
      "Monthly sync, on-demand consults, quarterly written assessment of strategic priorities, ad-hoc decision support.",
  },
];

const steps = [
  { step: "01", title: "Share your context", description: "Tell us your stage, team size, the decisions on your plate, and what you need help with." },
  { step: "02", title: "SethAI matches consultants", description: "SethAI screens for relevant industry, stack, and engagement-model fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to consultants directly. Test reasoning, communication, and working style." },
  { step: "04", title: "Scoping call, then start", description: "Free 30-min scoping call. Fixed-price quote for projects, monthly rate for fractional or retainer. Start within a week." },
];

const faqItems: FAQ[] = [
  {
    question: "What is IT consulting and what does an IT consultant actually do?",
    answer:
      "IT consulting is strategic advisory on technology decisions: tech roadmaps, vendor selection, architecture, modernization, cost optimization, security posture, and engineering org design. An IT consultant produces written deliverables (roadmap docs, ADRs, assessment reports) and unblocks key decisions. It is distinct from staff augmentation (which is execution capacity) and software development (which is building specific systems).",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does IT consulting cost in 2026?",
    answer:
      "Fractional CTO engagements (10 to 20 hours/week) cost USD 4,500 to 9,000 per month. Project engagements (1 to 8 weeks) range from USD 3,000 to USD 30,000 depending on scope. Strategic retainers (5 to 10 hours/month) cost USD 1,500 to USD 3,500 per month. Pricing reflects the seniority and judgment required; consultants are typically 10+ years experienced operators.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you do fractional CTO engagements?",
    answer:
      "Yes. Fractional CTO is our most common engagement for Series A to early B startups. The consultant embeds 10 to 20 hours/week, owns architecture decisions, runs senior technical interviews, joins board meetings on technical topics, and unblocks the founder. Typical engagement length is 6 to 18 months until a full-time CTO is hired.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your IT consultants vendor-agnostic?",
    answer:
      "Yes. We do not resell software, take referral fees, or have partnerships that color advice. When we recommend a cloud, a database, or a SaaS tool, the recommendation reflects what fits your business. We will tell you when an in-house build beats a vendor and vice versa.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you help with M&A technology due diligence?",
    answer:
      "Yes. Acquirers and PE firms hire us to assess target companies' code quality, architecture, security posture, vendor concentration, IP ownership, tech debt, and integration cost. Engagements run 2 to 4 weeks and produce a board-ready written assessment with deal-relevant recommendations.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What's the difference between IT consulting and hiring developers?",
    answer:
      "IT consulting is advisory: deciding what to build, what to buy, and how to organize. Hiring developers is execution: building the systems and shipping the code. Most companies need both. We do both, on separate engagements. See our software engineers and full-stack developers pages for execution work.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you work with enterprises or just startups?",
    answer:
      "Both. Startups (Series A to D) typically engage on fractional CTO or project work. Enterprises engage on architecture review, modernization planning, cloud cost optimization, M&A diligence, and AI adoption strategy. The engagement model differs but the consultants and the rigor are the same.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your IT consultants work in our timezone?",
    answer:
      "Yes. Our consultants in India routinely overlap with US Eastern, US Pacific, UK, EU, Australia, and Dubai timezones. Most engagements include weekly sync calls in your business hours plus on-demand availability via Slack or email during overlap windows.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function ITConsultingPage() {
  const serviceSchema = generateServiceSchema(
    "IT Consulting Services",
    "Strategic IT consulting for startups to enterprises. Tech roadmaps, vendor selection, modernization, IT spend, security posture. Fractional CTO or project-based.",
    `${siteMetadata.url}/consulting/it-consulting/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Consulting", url: `${siteMetadata.url}/consulting/` },
    { name: "IT Consulting", url: `${siteMetadata.url}/consulting/it-consulting/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">IT CONSULTING</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">IT Consulting Services for Startups to Enterprises</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Hands-on, code-credible IT consultants who have built and run the
            systems they advise on. Fractional CTO, project engagements, or
            strategic retainer. Vendor-agnostic recommendations, written
            deliverables.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start a project</Button>
            <Button href="#engagement" variant="outline" size="lg">See engagement options</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What real IT consulting looks like in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              IT consulting got a bad name from the era of partners who flew in,
              ran a 6-month engagement, produced a deck, and left the team to
              figure out implementation. That model is dead. What works in 2026
              is hands-on consultants who write code, draw real systems, defend
              ADRs with explicit tradeoffs, and stay through implementation so
              the advice adapts to reality.
            </p>
            <p>
              An IT consultant worth hiring picks vendors pragmatically (not
              based on partnerships or referral fees), thinks about cost as a
              first-class constraint, and produces written deliverables you can
              actually act on. They have built the systems they advise on and
              been on-call for the incidents.
            </p>
            <p>
              Every consultant we place is screened for this. For execution
              capacity instead of advisory, see our{" "}
              <a href="/hire/software-engineers/" className="text-primary-600 hover:underline">software engineers</a> or{" "}
              <a href="/hire/software-architects/" className="text-primary-600 hover:underline">software architects</a> pages.
              For automation-specific advisory, see{" "}
              <a href="/hire/automation-consultants/" className="text-primary-600 hover:underline">automation consultants</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire IT consultants from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an IT consultant actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire an IT consultant through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Common IT consulting engagements</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">A snapshot of the kinds of work IT consultants take on for our customers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div key={u.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{u.scenario}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{u.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Fractional CTO, project, or retainer: which engagement?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Different problems need different engagement shapes. Here is how we help customers decide.</p>
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

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white dark:bg-dark-900 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement" className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our IT consultants. Match the shape to your problem.</p>
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

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
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

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about IT consulting</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to talk IT strategy?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us what decision you&apos;re trying to make and we will scope an engagement within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Start a conversation</Button>
        </div>
      </section>
    </>
  );
}
