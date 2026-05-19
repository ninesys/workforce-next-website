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
  title: "Hire Automation Consultants (n8n, Make, Zapier + AI)",
  description:
    "Hire automation consultants who wire n8n, Make, Zapier, and AI (Claude, GPT, OpenAI) to automate real business workflows. Sales ops, support, finance, internal tools. Project or retainer.",
  keywords: [
    "automation consulting",
    "hire automation consultant",
    "n8n consulting",
    "Zapier consultant",
    "Make.com consultant",
    "AI workflow automation",
    "business process automation",
    "workflow automation services",
    "n8n developer for hire",
    "Zapier expert India",
  ],
  openGraph: {
    ...ogDefaults("/hire/automation-consultants/"),
    images: ["/images/og-default.png"],
    title: "Hire Automation Consultants (n8n, Make, Zapier + AI)",
    description:
      "Wire n8n, Make, or Zapier with Claude or GPT to automate real business workflows. Project or retainer pricing.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/automation-consultants/`,
  },
};

const skills = [
  "n8n (self-hosted + cloud)",
  "Make.com (Integromat)",
  "Zapier",
  "Pipedream",
  "Workato",
  "OpenAI / Anthropic / Gemini APIs",
  "LangChain",
  "Webhooks & APIs",
  "Airtable / Notion / Google Workspace",
  "HubSpot / Salesforce",
  "Slack / WhatsApp / Email triggers",
  "Postgres / Supabase",
];

const whyPoints = [
  {
    title: "We ship automations that actually run on Monday",
    description:
      "Consultants who build workflows, demo them, hand you a tidy doc, then disappear before the first error breaks production. We stay long enough to harden, monitor, and iterate the system based on real usage.",
  },
  {
    title: "Tool-agnostic, problem-first",
    description:
      "n8n when you need self-host control and complex branching. Make for visual builder fluency. Zapier when business users need to maintain it. We pick the platform for the workflow, not the other way round.",
  },
  {
    title: "AI integrated where it earns its keep",
    description:
      "Claude or GPT in the loop for classification, extraction, summarization, drafting, and decisioning. Not bolted on for marketing. We measure quality, cost per run, and where the LLM is overkill.",
  },
  {
    title: "Project or retainer, not body-shop hours",
    description:
      "Scoped projects (₹50K to ₹5L, or USD 600 to 6,000) for a clear workflow. Monthly retainers for teams that want ongoing automation work without a full-time hire. Pick the engagement that fits.",
  },
];

const responsibilities = [
  "Mapping the manual workflow you want to kill, finding the right automation triggers, and designing the happy path plus failure modes",
  "Building the workflow in n8n, Make, Zapier, or Pipedream with proper error handling, retries, and notifications when something needs human attention",
  "Integrating AI steps (Claude, GPT, OpenAI structured output, function calling) for tasks that need judgment, extraction, or generation",
  "Wiring webhooks, REST and GraphQL APIs, and database queries to connect tools that do not natively talk to each other",
  "Building approval flows, escalation paths, and human-in-the-loop steps where automation should pause, not act",
  "Setting up monitoring, run logs, error alerts, and cost dashboards so you know what is running and what it costs",
  "Self-hosting n8n on your infrastructure (Hetzner, AWS, Render, Railway) when SaaS pricing or data residency demands it",
  "Documenting workflows so your team can maintain them after the consultant hands off",
  "Migrating from one platform to another (Zapier to n8n is the most common, usually for cost or complexity reasons)",
  "Building internal tools on top of automation: dashboards, admin panels, Slack apps, custom forms",
];

const useCases = [
  {
    scenario: "Sales operations automation",
    examples: "New lead from form to CRM with enrichment, scoring, and Slack ping. Calendar invites and reminder sequences. CRM hygiene jobs that run nightly.",
  },
  {
    scenario: "Customer support automation",
    examples: "Auto-categorizing tickets with an LLM, routing to the right queue, drafting first-response templates, escalating angry messages to a human.",
  },
  {
    scenario: "Finance and ops automation",
    examples: "Invoice extraction from email PDFs, AP approval flows, expense report parsing, monthly reconciliation jobs that pull from Stripe, Razorpay, and your bank.",
  },
  {
    scenario: "Content and marketing automation",
    examples: "Blog post syndication, social repost scheduling, AI-drafted weekly newsletters from a content calendar, lead-magnet delivery sequences.",
  },
  {
    scenario: "Internal tooling",
    examples: "Slack apps for HR requests, custom approval workflows, Airtable-backed admin panels, hiring-pipeline automation.",
  },
  {
    scenario: "AI-powered data processing",
    examples: "Document classification at scale, structured extraction from unstructured text, summarization pipelines, transcript processing with LLM-generated action items.",
  },
];

const whenToHire = [
  {
    scenario: "You have a clear workflow that eats 5+ hours a week of someone's time",
    recommendation: "Hire on a project basis",
    reason:
      "A scoped 2 to 4 week project lands the workflow with full handover. Predictable cost, predictable ROI. Best starting point if you've never engaged an automation consultant before.",
  },
  {
    scenario: "You want ongoing automation work without a full-time hire",
    recommendation: "Hire on a monthly retainer",
    reason:
      "Retainers (20 to 80 hours/month) work when there's a continuous backlog of small-to-medium automations across the org. We embed in your tools, run a backlog, and ship continuously.",
  },
  {
    scenario: "You're building a custom SaaS product with automation under the hood",
    recommendation: "Hire a full-stack developer with n8n experience",
    reason:
      "If the automation is your product (not your ops), you need a software engineer who knows the platform, not a consultant. See our Node.js or full-stack developers pages.",
  },
  {
    scenario: "Your finance team needs ONE workflow to extract invoice data",
    recommendation: "A scoped 1-week project is usually enough",
    reason:
      "Single-workflow projects are fast: scoping call, build, test, hand off. You don't need a retainer if the work has a clear end.",
  },
];

const screeningSignals = [
  {
    signal: "Platform fluency, not platform loyalty",
    detail:
      "We test whether the consultant can defend a pick between n8n, Make, and Zapier for a specific scenario. If they have one favorite for every problem, they will over-engineer or under-deliver.",
  },
  {
    signal: "Error handling discipline",
    detail:
      "Happy-path automations are demos. Production automations need retries, dead-letter handling, alert routing, and human escalation. We ask candidates to walk through a real failure flow they built.",
  },
  {
    signal: "AI integration judgment",
    detail:
      "When to use Claude/GPT, when to use a fine-tuned model, when to skip AI entirely. Strong consultants run cost-per-run math on AI steps before recommending them.",
  },
  {
    signal: "API and webhook depth",
    detail:
      "When the no-code platform hits a wall, can the consultant drop into raw HTTP requests, custom code nodes (n8n function nodes in JavaScript), and webhook signing? We test this explicitly.",
  },
  {
    signal: "Self-hosting and ops awareness",
    detail:
      "n8n self-hosted on Hetzner, AWS, Render, or Railway. Postgres backups. Worker scaling. Webhook reliability. Many automation problems are ops problems in disguise.",
  },
  {
    signal: "Documentation and handover discipline",
    detail:
      "If your team can't maintain the workflow after the consultant leaves, the value evaporates in 6 months. We screen for clear documentation, naming conventions, and runbook quality.",
  },
];

const engagementModels = [
  {
    name: "Single project",
    hours: "₹50K to ₹5L (USD 600 to 6,000)",
    best: "Best for one clear workflow with a defined end. Scoping call, build, test, hand off.",
    includes:
      "Workflow design doc, built automation, test runs, run-log monitoring setup, documentation for your team. Two weeks of post-launch support.",
  },
  {
    name: "Monthly retainer",
    hours: "20 to 80 hours per month",
    best: "Best for teams with a continuous automation backlog and no dedicated automation hire.",
    includes:
      "Dedicated consultant or pod, shared backlog, weekly sync, on-demand requests, ongoing maintenance of shipped workflows.",
  },
  {
    name: "Audit & roadmap",
    hours: "1 to 2 week engagement",
    best: "Best when you have many manual processes and want help prioritizing which to automate first.",
    includes:
      "Workflow inventory, ROI analysis per workflow, platform recommendation, prioritized 90-day automation roadmap.",
  },
];

const steps = [
  { step: "01", title: "Share your workflow", description: "Tell us what you want to automate, what tools you use, and what the manual process looks like today." },
  { step: "02", title: "We scope and quote", description: "Free 30-min scoping call. Fixed-price quote for projects, monthly rate for retainers." },
  { step: "03", title: "Build and demo", description: "We build in your tools (or our sandbox), demo the workflow, iterate based on your feedback." },
  { step: "04", title: "Launch and document", description: "Go live, hand off documentation, monitor for two weeks. You own the workflow." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does automation consulting cost?",
    answer:
      "Single workflows: ₹50,000 to ₹5,00,000 (USD 600 to 6,000) depending on complexity and platform. Monthly retainers: ₹80,000 to ₹4,00,000 per month (USD 1,000 to 5,000) for 20 to 80 hours/month. Audit & roadmap engagements: ₹50,000 to ₹2,00,000 (USD 600 to 2,500) for 1 to 2 weeks of work.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Should we use n8n, Make, or Zapier?",
    answer:
      "Use Zapier when business users need to maintain workflows and the integrations exist out of the box. Use Make for visual fluency on medium-complexity workflows. Use n8n (self-hosted or cloud) when you need cost control at scale, complex branching, custom code nodes, or data residency. We help you decide before we build.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you integrate Claude, GPT, or other AI into our automations?",
    answer:
      "Yes. AI in the loop is the norm for modern automations: LLM-based classification, extraction from unstructured documents, drafting (emails, summaries, replies), and decisioning. We integrate OpenAI, Anthropic Claude, Google Gemini, or open-weight models, and we measure cost per run so the AI step earns its keep.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you self-host n8n for us?",
    answer:
      "Yes. Self-hosted n8n on Hetzner, AWS, Render, Railway, or your existing cloud. We handle the deployment, Postgres backup setup, worker scaling, webhook reliability, and ongoing maintenance. Self-hosting usually pays back at 50+ executions per day vs n8n Cloud pricing.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you migrate us from Zapier to n8n?",
    answer:
      "Yes. Zapier-to-n8n migration is one of our most common engagements, usually triggered by cost (Zapier scales expensively) or complexity (Zapier hits walls on branching, loops, and custom code). We map every active Zap, rebuild in n8n, run parallel for validation, then cut over.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Do you handle the ongoing maintenance of automations you build?",
    answer:
      "Two weeks of post-launch support is included in every project. For ongoing maintenance, we offer monthly retainers (20 to 80 hours) that cover monitoring, fixes when APIs change, small enhancements, and a backlog of new automations.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What workflows do you most commonly automate?",
    answer:
      "Sales ops (lead to CRM with enrichment), customer support (ticket categorization and routing), finance (invoice extraction and approval flows), content marketing (publishing and syndication), and internal tooling (Slack apps, approval workflows, custom admin panels). AI is now in roughly 60% of new automations we build.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can your consultants work in our timezone?",
    answer:
      "Yes. Our consultants in India routinely overlap with US Eastern, US Pacific, UK, EU, Australia, and Dubai timezones. Most retainer engagements include a weekly sync call in your business hours, with async work the rest of the time.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function HireAutomationConsultantsPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Automation Consultants (n8n, Make, Zapier + AI)",
    "Hire automation consultants who wire n8n, Make, Zapier, and AI (Claude, GPT, OpenAI) to automate real business workflows.",
    `${siteMetadata.url}/hire/automation-consultants/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Automation Consultants", url: `${siteMetadata.url}/hire/automation-consultants/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE AUTOMATION CONSULTANTS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Automation Consultants (n8n, Make, Zapier + AI)
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Wire n8n, Make, or Zapier with Claude or GPT to automate the real
            workflows eating your team&apos;s time. Sales ops, support, finance,
            content, internal tools. Project-based or monthly retainer.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start a project</Button>
            <Button href="#engagement" variant="outline" size="lg">See engagement options</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why automation consulting is the most grounded AI investment in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              While everyone debates whether AGI arrives in 3 years or 30,
              there is a much more grounded category of AI work generating
              real ROI right now: wiring n8n, Make, or Zapier to Claude or
              GPT to automate the manual workflows that quietly eat your
              team&apos;s time. Sales ops, customer support, finance, content,
              internal tools. The math is simple: pay a consultant 50K to
              5L rupees (or 600 to 6,000 dollars) to kill a workflow that
              was burning 5 hours a week of someone&apos;s time forever.
            </p>
            <p>
              An automation consultant worth hiring picks platforms
              pragmatically, builds with proper error handling and
              monitoring, integrates AI only where it earns its keep, and
              documents workflows so your team can maintain them. They do
              not over-engineer with AI for marketing reasons, and they do
              not under-engineer with happy-path-only workflows that break
              on the first real edge case.
            </p>
            <p>
              For tool-specific deep dives, read our{" "}
              <a href="/blog/best-workflow-automation-tools-2026/" className="text-primary-600 hover:underline">best workflow automation tools 2026</a>{" "}
              post. For AI-augmented automation patterns, see our{" "}
              <a href="/hire/generative-ai-developers/" className="text-primary-600 hover:underline">generative AI developers</a> page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire automation consultants from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an automation consultant actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire an automation consultant through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Common workflows we automate</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            If a workflow lives in a spreadsheet, in someone&apos;s head, or in a
            chain of emails, it can probably be automated. Here are the most
            common categories we ship.
          </p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Project, retainer, or audit: which engagement?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Different automation problems need different engagement shapes.
            Here is how we help customers decide.
          </p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our automation consultants. Pick the shape that fits your work.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about automation consulting</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to automate a workflow?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us what you want to automate and we will scope it within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Start a project</Button>
        </div>
      </section>
    </>
  );
}
