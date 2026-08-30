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
  title: "Hire Software Engineers from India",
  description:
    "Hire pre-vetted software engineers from India. Full-stack, backend, frontend, mobile, data, DevOps. Matched by context, screened by SethAI for skills and longevity.",
  keywords: [
    "hire software engineer",
    "hire software engineers India",
    "hire software developers",
    "remote software engineers",
    "dedicated software engineers",
    "software engineering team India",
    "software engineer staff augmentation",
    "outsource software engineering",
    "hire senior software engineer",
  ],
  openGraph: {
    ...ogDefaults("/hire/software-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire Software Engineers from India",
    description:
      "Pre-vetted software engineers across the stack. Matched by context, screened for longevity. SethAI-powered.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/software-engineers/`,
  },
};

const skills = [
  "Backend (Node, Python, Java, Go)",
  "Frontend (React, Next.js, Vue)",
  "Mobile (iOS, Android, Flutter, RN)",
  "Data Engineering",
  "AI / ML Engineering",
  "DevOps & SRE",
  "QA & SDET",
  "System Design",
  "Microservices",
  "Cloud (AWS, GCP, Azure)",
  "Databases (PostgreSQL, Mongo)",
  "TypeScript",
];

const whyPoints = [
  {
    title: "Real software engineers, not just coders",
    description:
      "Our engineers design systems, write tests, review code, take on-call, and own production outcomes. They think about reliability, security, and maintainability, not just shipping a feature.",
  },
  {
    title: "Matched to your context, not to keywords",
    description:
      "SethAI matches engineers by industry experience (fintech, healthtech, SaaS), team size, working style, and product type. Not just \"React on resume\". Context fit predicts retention.",
  },
  {
    title: "Senior bench across the stack",
    description:
      "Backend, frontend, mobile, data, DevOps, AI, QA. We can staff a single engineer or a full cross-functional pod. Most placements are senior (5 to 10+ years).",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership, communication, and career fit. You get software engineers who stay long enough to ship features 2, 3, and 4, not contractors who churn at month four.",
  },
];

const responsibilities = [
  "Designing systems and writing RFCs for non-trivial features (data model, API contracts, scaling story, failure modes)",
  "Shipping production code with proper tests, code review, documentation, and incremental rollout",
  "Owning a service or feature end-to-end: from design through ship, on-call, and iteration",
  "Reviewing teammates' PRs with substantive feedback, not rubber stamps",
  "Participating in on-call rotations with runbooks and post-mortems for the services they own",
  "Mentoring junior and mid engineers via pairing, design reviews, and code review feedback",
  "Improving the codebase incrementally: refactoring, debt cleanup, dependency upgrades, observability gaps",
  "Collaborating with product, design, and other engineering teams via clear written communication",
  "Estimating work honestly, raising risks early, and being a reliable contributor to sprint commitments",
  "Staying current with the stack: framework upgrades, security advisories, ecosystem changes",
];

const whenToHire = [
  {
    scenario: "You need a generalist software engineer across the stack",
    recommendation: "Hire from our software engineering bench",
    reason:
      "If your work spans frontend, backend, and DevOps in roughly equal measure, a generalist is more flexible than a deep specialist. We match for breadth plus enough depth on your primary stack.",
  },
  {
    scenario: "You need a deep specialist (e.g., AI, mobile, data, DevOps)",
    recommendation: "Hire from our specialist hire pages (see related)",
    reason:
      "For deep specialist work, our role-specific pages (AI, Mobile, Data, DevOps) match you to engineers with vertical depth, not a generalist who happens to have touched it.",
  },
  {
    scenario: "You need a small team to ship a feature, MVP, or migration",
    recommendation: "Hire a team pod (tech lead + 2-4 engineers)",
    reason:
      "Pods come pre-formed with a tech lead who owns architecture and design, plus engineers across the layers you need. Faster to assemble than building a custom team.",
  },
  {
    scenario: "You have one well-defined small project (under 4 weeks)",
    recommendation: "Consider a fractional engagement or freelancer",
    reason:
      "Full-time dedicated software engineers fit ongoing work. For one-off small projects, a fractional engagement (20 hours/week) or a specialist freelancer is usually more efficient.",
  },
];

const screeningSignals = [
  {
    signal: "System design judgment",
    detail:
      "Given a real-world feature, can the candidate sketch a system that scales, handles failure, and stays maintainable? We test design at the engineer's claimed seniority level.",
  },
  {
    signal: "Code quality and review",
    detail:
      "We give a PR with real-world bugs and design issues and watch the candidate review it. Substantive feedback on naming, correctness, edge cases, performance, and tests vs rubber-stamp approval.",
  },
  {
    signal: "Debugging instinct",
    detail:
      "We hand candidates a broken service with a memory leak, race condition, or misconfigured dependency and watch the diagnostic process. Hypothesis-driven debugging vs trial-and-error.",
  },
  {
    signal: "Testing discipline",
    detail:
      "Unit, integration, and E2E test design. When to mock vs not. Test pyramid judgment. Are tests assertions or aspirations? We read their test code, not just their app code.",
  },
  {
    signal: "Communication and collaboration",
    detail:
      "Written explanations of technical decisions. Async-friendly status updates. Pushback on bad scope. Clarifying questions before assumptions. The engineering skills that scale teams.",
  },
  {
    signal: "Ownership and longevity signals",
    detail:
      "Career trajectory fit, why they left the last role, what kind of work energizes them, how they handle ambiguity. SethAI predicts retention. We confirm in interviews.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams or part-time roles.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated team members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 5 engineers", best: "Best for a feature, MVP, migration, or new product squad.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your product, stack, team size, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for skills, context fit, and longevity signals. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test design, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a software engineer from India?",
    answer:
      "Mid-level software engineers from India cost USD 3,500 to 6,000 per month for full-time engagement. Senior engineers (5+ years) range from USD 5,500 to 8,500 per month. Specialist roles (AI, ML, Cloud, deep mobile) range from USD 6,500 to 10,000. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between a software engineer and a developer?",
    answer:
      "We use the terms interchangeably for hiring. Some teams reserve \"engineer\" for senior practitioners who design systems and own production outcomes, and \"developer\" for engineers who primarily implement. We default to engineer in titles and match seniority to your actual scope.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we hire one engineer or a full team?",
    answer:
      "If you have an existing engineering team and need to add capacity, hire one or two engineers. If you are building from scratch, replatforming, or need a self-contained squad to ship a feature, hire a team pod with a tech lead. We help you scope this before matching.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a software engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. Full ramp on your codebase typically takes 2 to 4 weeks.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your software engineers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap. For US Pacific or Australian customers we arrange engineers who shift their schedule.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What stacks do your software engineers cover?",
    answer:
      "Backend: Node.js, Python (Django, FastAPI), Java (Spring), Go, PHP, .NET. Frontend: React, Next.js, Vue, Angular, TypeScript. Mobile: iOS (Swift), Android (Kotlin), Flutter, React Native. Data: PostgreSQL, MongoDB, Redis, Snowflake, BigQuery. Cloud: AWS, GCP, Azure. AI/ML: PyTorch, LangChain, RAG.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your software engineers handle the full development lifecycle?",
    answer:
      "Yes. Senior engineers we place own design through ship, on-call, and iteration. They write tests, review PRs, participate in retros, and mentor mid and junior engineers. They are full team members, not contractors who only code to spec.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireSoftwareEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Software Engineers from India",
    "Hire pre-vetted software engineers from India across the stack. Matched by context, screened by SethAI for skills and longevity.",
    `${siteMetadata.url}/hire/software-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Software Engineers", url: `${siteMetadata.url}/hire/software-engineers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE SOFTWARE ENGINEERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Software Engineers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted software engineers across the stack: backend, frontend,
            mobile, data, DevOps. Matched to your product context. Screened by
            SethAI for skills and longevity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Hiring software engineers is a context problem, not a keyword problem</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most software engineer hiring fails because resumes are matched
              on keywords instead of context. A Node.js engineer who built
              payments systems at a fintech is a different hire from a Node.js
              engineer who built a marketing-site CMS. Same tech stack, very
              different fit. The cost of getting this wrong is a 4-to-6 month
              ramp, mediocre work, and churn at month four.
            </p>
            <p>
              We hire and match software engineers differently. SethAI scores
              candidates on industry experience, product type, team size, and
              working style alongside the technical stack. The shortlist you
              see is not pre-filtered on LinkedIn keywords. It is matched on
              the work you actually need done.
            </p>
            <p>
              For specialist roles (AI, mobile, data, DevOps) see our
              role-specific pages. For broad cross-stack roles, this page is
              your starting point. Either way, every engineer we place is
              screened for ownership and longevity in addition to skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire software engineers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a software engineer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a software engineer through Workforce Next, here is
            the work they take ownership of on a modern engineering team:
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Generalist or specialist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Software engineering covers a wide surface. Here is how we help customers decide before they spend on the wrong profile.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our software engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring software engineers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire software engineers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your team and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
