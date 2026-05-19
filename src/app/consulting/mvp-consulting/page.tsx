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
  title: "MVP Consulting for Founders: Scope, Stack, and Ship",
  description:
    "MVP consulting for pre-seed and seed founders. Scope advisory, tech stack selection, build vs no-code, founding team shape, prelaunch validation, 12-week MVP roadmap.",
  keywords: [
    "MVP consulting",
    "MVP consultant",
    "MVP development consulting",
    "MVP scoping advisor",
    "fractional CTO MVP",
    "MVP tech stack consultant",
    "startup MVP advisor",
    "minimum viable product consulting",
    "MVP roadmap",
  ],
  openGraph: {
    ...ogDefaults("/consulting/mvp-consulting/"),
    images: ["/images/og-default.png"],
    title: "MVP Consulting for Founders: Scope, Stack, and Ship",
    description:
      "Scope advisory, tech stack selection, build vs no-code, founding team shape, prelaunch validation. For pre-seed and seed founders.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/consulting/mvp-consulting/`,
  },
};

const skills = [
  "MVP Scoping",
  "Tech Stack Selection",
  "Build vs Buy vs No-Code",
  "Founding Team Shape",
  "12-week Roadmap Design",
  "Prelaunch Validation",
  "Cost Modeling (USD 2K to 50K)",
  "Modern Stack (Next.js, FastAPI, Supabase)",
  "AI-Augmented MVPs (Claude, GPT, RAG)",
  "Mobile MVP (Flutter, React Native)",
  "B2B SaaS Patterns",
  "Consumer App Patterns",
];

const whyPoints = [
  {
    title: "Consultants who have shipped real MVPs, not just advised on them",
    description:
      "Our MVP consultants have founded companies, led MVP teams, and shipped 0-to-1 products in production. The advice is grounded in what works under real founder constraints (no budget, no team, no time).",
  },
  {
    title: "Honest about what an MVP actually is",
    description:
      "A real MVP is the smallest thing that lets you test whether anyone wants this. It is not a product. It is not a v1. We help you scope mercilessly so you ship in 8 to 12 weeks, not 6 months.",
  },
  {
    title: "Stack picks for the next 18 months, not the next 10 years",
    description:
      "MVP stacks should optimize for shipping speed and pivot flexibility, not for scaling to 10M users. We pick stacks that are easy to iterate on, easy to hire for, and easy to throw away if the MVP fails.",
  },
  {
    title: "Build advisory, team advisory, or both",
    description:
      "Project advisory (1 to 4 weeks) for founders who want a written MVP roadmap. Fractional CTO (10 to 20 hrs/week) for founders who want ongoing technical guidance through the build. Both produce written deliverables you keep.",
  },
];

const responsibilities = [
  "Scoping the MVP mercilessly: defining the smallest possible thing that tests your core hypothesis with real users",
  "Picking the tech stack for the next 18 months, not the next 10 years: Next.js or Astro for web, FastAPI or Node for backend, Supabase or Firebase for fast-launch data, Vercel for hosting",
  "Designing the AI layer when it makes sense: where Claude/GPT genuinely improves the MVP, where it is overkill, build vs API vs RAG decisions",
  "Choosing build vs no-code vs hybrid: when Webflow + Airtable beats custom code, when no-code hits walls fast, when to start custom from day one",
  "Designing the founding engineering team shape: solo technical founder, founder + 1 engineer, founder + small offshore pod, fractional CTO + offshore",
  "Building the 12-week MVP roadmap: what ships in week 4, week 8, week 12; what gets cut; what gets faked with manual ops",
  "Setting the prelaunch validation plan: how to recruit beta users, what to measure, how to know the MVP is working",
  "Cost modeling the MVP build: realistic price tags for build, infra, AI API spend, and ongoing costs after launch",
  "Helping founders interview engineering candidates: technical screens, scope-fit conversations, fractional vs full-time decisions",
  "Avoiding the common MVP mistakes: over-engineering, building before talking to users, premature optimization, wrong stack picks",
];

const useCases = [
  {
    scenario: "Pre-seed founder with USD 15K to spend on an MVP",
    examples: "Scope to the smallest testable hypothesis. Recommend Next.js + Supabase + Vercel + Claude for AI features. Identify what gets faked manually for the first 100 users. Ship in 10 weeks.",
  },
  {
    scenario: "Seed-funded founder with a CTO but unsure of stack and scope",
    examples: "Architecture review of CTO's proposed plan. Negotiated scope cut (kill features 4 to 7 of the original spec). Validated stack picks. Shipped in 11 weeks vs planned 20.",
  },
  {
    scenario: "Non-technical founder needing technical co-founder substitute",
    examples: "Fractional CTO (15 hours/week) embedded with the team. Hired 2 engineers via our staff aug. Owned architecture, code review, hiring. Replaced after 8 months by full-time CTO.",
  },
  {
    scenario: "AI-native MVP from a founder who isn't deep in AI",
    examples: "Where AI earns its keep in the MVP (LLM-powered onboarding, classification), where it's overkill (a chatbot for a 50-user MVP). Build vs API decisions. Cost modeling for inference at MVP scale.",
  },
  {
    scenario: "B2B SaaS MVP for an enterprise customer's pilot",
    examples: "Scoping for a single-tenant pilot with one paying customer, not a multi-tenant platform from day one. Auth choice (Clerk vs Auth0 vs roll-your-own), data model that supports future multi-tenancy, deployment shape.",
  },
  {
    scenario: "Mobile MVP for a consumer app",
    examples: "Flutter vs React Native vs native decision based on team and roadmap. Backend choice (Firebase vs Supabase vs custom). App Store launch plan, beta cohort design, analytics instrumentation.",
  },
];

const whenToHire = [
  {
    scenario: "You have an idea, USD 10K to 50K of budget, and no technical co-founder",
    recommendation: "Hire on MVP advisory + execution (project, 8 to 12 weeks)",
    reason:
      "We scope, pick the stack, build with our engineers (or your hires), and ship. Founder runs product and user research; we run the build. Most common engagement for non-technical founders.",
  },
  {
    scenario: "You have a CTO but want a second opinion on scope and stack",
    recommendation: "Project advisory (1 to 4 weeks)",
    reason:
      "Independent review of the proposed MVP, scope, stack, and team shape. Written report with recommendations. Often saves 1 to 3 months of build time by killing the right scope.",
  },
  {
    scenario: "You want ongoing technical leadership through the MVP build",
    recommendation: "Fractional CTO (10 to 20 hours/week)",
    reason:
      "Best when the founder is non-technical and wants embedded technical leadership through the 12-week build. Hires engineers, owns architecture, runs code review, joins investor calls on technical topics.",
  },
  {
    scenario: "You just want someone to build the MVP",
    recommendation: "Skip the consulting, hire the engineers directly",
    reason:
      "If you have a clear scope and stack picked, you do not need MVP consulting. See our software engineers, full-stack developers, or for/founders MVP Sprint page.",
  },
];

const screeningSignals = [
  {
    signal: "0-to-1 shipping experience",
    detail:
      "We screen for consultants who have founded companies or led MVP teams to launch. Engineers who have only worked on scale-stage products are great at scale problems but often wrong about MVP tradeoffs.",
  },
  {
    signal: "Scope discipline",
    detail:
      "Can the consultant kill features ruthlessly? We test by giving a typical bloated MVP scope and asking what they'd cut. Consultants who add features rather than remove are dangerous.",
  },
  {
    signal: "Stack pragmatism",
    detail:
      "Right stack for MVPs is what ships fast and is easy to iterate, not what's technically interesting. We test whether candidates push their preferred stack regardless of context, or pick based on founder constraints.",
  },
  {
    signal: "AI judgment",
    detail:
      "Modern MVPs have AI questions. When does Claude/GPT in the loop earn its keep, when is it overkill, when is RAG better than fine-tuning. Cost modeling for inference at MVP scale.",
  },
  {
    signal: "Founder communication",
    detail:
      "MVP consulting talks to non-technical founders constantly. We test ability to translate stack tradeoffs into business language without dumbing down.",
  },
  {
    signal: "Cost-awareness",
    detail:
      "Real MVPs run on USD 50 to 500 per month of infra. Consultants who default to enterprise-grade infrastructure burn founder budget for no MVP benefit.",
  },
];

const engagementModels = [
  {
    name: "MVP advisory (project)",
    hours: "1 to 4 week engagement",
    best: "Best for founders who want a written MVP roadmap before they spend on building.",
    includes:
      "Scoping sessions, stack recommendation, team shape design, 12-week roadmap, cost model, prelaunch validation plan. Written deliverable.",
  },
  {
    name: "Fractional CTO",
    hours: "10 to 20 hours per week",
    best: "Best for non-technical founders building an MVP without a technical co-founder.",
    includes:
      "Embedded consultant through the 12-week build, hiring support, architecture decisions, code review, investor call participation on technical topics.",
  },
  {
    name: "MVP build (project)",
    hours: "8 to 12 weeks fixed price",
    best: "Best when you want advisory + execution in one engagement (paired with our engineers).",
    includes:
      "Scoping + stack picks + team of 2 to 3 engineers + tech lead + delivery to MVP launch. Predictable fixed-price quote.",
  },
];

const steps = [
  { step: "01", title: "Share your idea", description: "Tell us what you're building, your stage, your budget, and your timeline." },
  { step: "02", title: "SethAI matches consultants", description: "SethAI screens for 0-to-1 experience, relevant industry context, and engagement-model fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to consultants directly. Test scope discipline, stack reasoning, and founder communication." },
  { step: "04", title: "Scoping call, then start", description: "Free 30-min scoping. Fixed-price quote for advisory or build, monthly rate for fractional CTO. Start within a week." },
];

const faqItems: FAQ[] = [
  {
    question: "What is MVP consulting and when do founders need it?",
    answer:
      "MVP consulting is strategic advisory for founders building their first product: scope, tech stack, team shape, build vs no-code decisions, 12-week roadmap, prelaunch validation plan. You need it when you have an idea but are unsure what to build first, what tech to use, who to hire, or how much it should cost. Most common for non-technical founders or founders with technical experience who want an outside read.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does MVP consulting cost?",
    answer:
      "MVP advisory project (1 to 4 weeks): USD 2,000 to USD 8,000. Fractional CTO (10 to 20 hours/week): USD 4,000 to USD 8,000 per month. MVP build (advisory + execution, 8 to 12 weeks): USD 15,000 to USD 50,000 depending on scope. Pricing reflects the seniority of the consultants (typically 8+ years experienced founders or ex-CTOs).",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you also build the MVP, not just advise?",
    answer:
      "Yes. Our MVP build engagement combines advisory + execution: scoping, stack picks, plus a team of 2 to 3 engineers + tech lead delivering the actual build in 8 to 12 weeks. Most non-technical founders pick this. Technical founders often pick advisory-only and use their own team for execution.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What tech stacks do you recommend for MVPs in 2026?",
    answer:
      "Default web stack: Next.js + TypeScript + Supabase or Postgres + Vercel. Default mobile: Flutter or React Native + Firebase or Supabase. Default AI integration: OpenAI or Anthropic APIs via FastAPI or Node. We recommend boring, well-trodden stacks for MVPs because they ship faster and are easier to hire for. Optimize for shipping speed and pivot flexibility, not for scaling to 10M users.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we use no-code for our MVP?",
    answer:
      "Sometimes yes. Webflow + Airtable + Zapier or Make works for marketing sites, basic admin tools, and many B2B internal-tool MVPs. No-code hits walls fast on: AI-augmented workflows, complex business logic, mobile apps, multi-tenant SaaS, real-time features. We help founders pick the right approach instead of defaulting to either side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does an MVP take to build in 2026?",
    answer:
      "Real MVPs (smallest thing that tests your hypothesis with real users) should ship in 8 to 12 weeks with a 2 to 3 person team. Anything taking 6 months is not an MVP, it is a v1 product. The discipline of scoping to 12 weeks is one of the highest-value parts of MVP consulting.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What's the difference between MVP consulting and just hiring developers?",
    answer:
      "MVP consulting decides what to build, what stack to use, what team shape to hire, and how to validate. Hiring developers executes the build. Many non-technical founders need both, often in the same engagement. Technical founders often need only the build (and skip advisory) because they already know what they want.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your MVP consultants work in our timezone?",
    answer:
      "Yes. Our consultants in India routinely overlap with US Eastern, US Pacific, UK, EU, Australia, and Dubai timezones. MVP work typically includes 2 to 3 sync calls per week plus async on Slack during overlap windows. For solo founders working evenings, we can structure shifted hours.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function MVPConsultingPage() {
  const serviceSchema = generateServiceSchema(
    "MVP Consulting for Founders",
    "MVP consulting for pre-seed and seed founders. Scope advisory, tech stack selection, build vs no-code, founding team shape, prelaunch validation.",
    `${siteMetadata.url}/consulting/mvp-consulting/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Consulting", url: `${siteMetadata.url}/consulting/` },
    { name: "MVP Consulting", url: `${siteMetadata.url}/consulting/mvp-consulting/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">MVP CONSULTING</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">MVP Consulting for Founders: Scope, Stack, and Ship</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Scope advisory, tech stack selection, build vs no-code, founding
            team shape, prelaunch validation. For pre-seed and seed founders
            building their first product. Project advisory, fractional CTO, or
            full build.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Scope an MVP</Button>
            <Button href="#engagement" variant="outline" size="lg">See engagement options</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">The biggest MVP mistake is building one in the first place</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most MVPs that ship in 2026 should not have. The founders did not
              talk to enough users first, the scope was 5x what was needed to
              test the hypothesis, the stack was chosen for &ldquo;scaling to 10
              million users&rdquo; instead of &ldquo;shipping in 10 weeks&rdquo;, and the team
              was built for a v1 product instead of a learning experiment.
              Then 6 months later the MVP launches, nobody wants it, and the
              founder is out of runway.
            </p>
            <p>
              An MVP consultant worth hiring is honest about what an MVP
              actually is: the smallest thing that lets you test whether
              anyone wants this. They cut scope ruthlessly, pick boring stacks
              that ship fast, design teams for the next 12 weeks rather than
              the next 12 months, and tell founders what NOT to build as much
              as what to build.
            </p>
            <p>
              Every consultant we place is screened for this. For execution
              capacity, see our{" "}
              <a href="/for/founders/" className="text-primary-600 hover:underline">MVP Sprint engagement</a>{" "}
              or{" "}
              <a href="/hire/fullstack-developers/" className="text-primary-600 hover:underline">full-stack developers</a>.
              For broader strategic IT advisory, see{" "}
              <a href="/consulting/it-consulting/" className="text-primary-600 hover:underline">IT consulting</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire MVP consultants from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an MVP consultant actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire an MVP consultant through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Common MVP engagements</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">A snapshot of recent founder engagements we have run.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Advisory, fractional CTO, or full build: which engagement?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Match the engagement to your founder stage and budget.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our MVP consultants.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about MVP consulting</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to scope your MVP?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us your idea and we will scope an engagement within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Start a conversation</Button>
        </div>
      </section>
    </>
  );
}
