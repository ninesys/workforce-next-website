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
  title: "Hire Automation Consultants | AI Agents + Workflow Automation | Workforce Next",
  description:
    "Automation consultants who wire AI agents into your real business workflows. Sales ops, support, finance, content, and internal tooling. Project or retainer.",
  keywords: [
    "automation consulting",
    "hire automation consultant",
    "workflow automation services",
    "AI workflow automation",
    "business process automation",
    "AI agent development",
    "automation agency for founders",
    "AI integration consulting",
  ],
  openGraph: {
    ...ogDefaults("/hire/automation-consultants/"),
    images: ["/images/og-default.png"],
    title: "Hire Automation Consultants | AI Agents + Workflow Automation",
    description:
      "Wire AI agents into the real workflows eating your team's time. Project or retainer.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/automation-consultants/`,
  },
};

const arc = [
  {
    num: "01",
    tag: "DISCOVER",
    headline: "Map the manual workflow.",
    line: "We shadow your team, find what bleeds time, and pick the right candidate.",
  },
  {
    num: "02",
    tag: "DESIGN",
    headline: "Happy path + failure modes.",
    line: "Triggers, branches, retries, human-in-the-loop. Built to survive Monday morning.",
  },
  {
    num: "03",
    tag: "SHIP",
    headline: "Build, demo, harden.",
    line: "Workflow live in your tools. AI agents in the loop only where they earn their keep.",
  },
  {
    num: "04",
    tag: "HANDOFF",
    headline: "Documented and yours.",
    line: "Runbook, monitoring, naming conventions. Your team owns it after we leave.",
  },
];

const useCases = [
  {
    tag: "SALES OPS",
    title: "Lead to CRM",
    line: "Forms → enrichment → scoring → Slack ping. CRM hygiene that runs nightly.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-1" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <path d="M14 14h36v36H14z" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" rx="4" />
        <rect x="14" y="14" width="36" height="36" rx="4" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M20 26h24M20 32h18M20 38h22" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="22" r="6" fill="url(#auto-icon-1)" />
        <path d="M46 22l1.5 1.5L51 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "SUPPORT",
    title: "Ticket triage",
    line: "AI classifies tickets, routes to the right queue, drafts first replies, escalates anger.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-2" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <path d="M12 24c0-6 5-10 12-10h16c7 0 12 4 12 10v12c0 6-5 10-12 10H30l-10 8v-8c-5-1-8-5-8-10V24z" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <circle cx="24" cy="30" r="2.5" fill="url(#auto-icon-2)" />
        <circle cx="32" cy="30" r="2.5" fill="url(#auto-icon-2)" />
        <circle cx="40" cy="30" r="2.5" fill="url(#auto-icon-2)" />
      </svg>
    ),
  },
  {
    tag: "FINANCE",
    title: "Invoice to ledger",
    line: "Extract data from PDFs, route approvals, reconcile monthly. Less spreadsheet, more sleep.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-3" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <path d="M18 10h22l8 8v36H18z" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M40 10v8h8" stroke="#022E5E" strokeWidth="2" fill="none" />
        <path d="M24 26h16M24 32h16M24 38h10" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="46" cy="44" r="8" fill="url(#auto-icon-3)" />
        <path d="M42 44l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "CONTENT",
    title: "Publish + syndicate",
    line: "Calendar → AI drafts → multi-channel syndication → engagement loop.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-4" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <rect x="10" y="14" width="44" height="36" rx="4" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M28 24l12 8-12 8z" fill="url(#auto-icon-4)" />
      </svg>
    ),
  },
  {
    tag: "INTERNAL",
    title: "Slack apps + admin",
    line: "HR requests, approval flows, custom panels. Stop building one-offs.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-5" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <rect x="14" y="14" width="14" height="14" rx="3" fill="url(#auto-icon-5)" />
        <rect x="36" y="14" width="14" height="14" rx="3" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <rect x="14" y="36" width="14" height="14" rx="3" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <rect x="36" y="36" width="14" height="14" rx="3" fill="url(#auto-icon-5)" />
      </svg>
    ),
  },
  {
    tag: "AI PROCESSING",
    title: "Doc + data pipelines",
    line: "Classify, extract, summarize at scale. Structured output your downstream tools can use.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="auto-icon-6" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="22" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M32 14v8M32 42v8M14 32h8M42 32h8" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="6" fill="url(#auto-icon-6)" />
        <path d="M29 32l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const why = [
  {
    title: "Ships on Monday, not in a deck",
    line: "We stay long enough to harden, monitor, and iterate based on real usage.",
  },
  {
    title: "Tool-agnostic, problem-first",
    line: "We pick the platform for the workflow, not the other way around.",
  },
  {
    title: "AI where it earns its keep",
    line: "LLMs in the loop for classification, extraction, drafting. Not bolted on for marketing.",
  },
  {
    title: "Project or retainer",
    line: "Scoped projects with a clear end, or monthly retainers for continuous backlogs.",
  },
];

const engagementModels = [
  {
    name: "Single project",
    tag: "ONE WORKFLOW, CLEAR END",
    best: "One workflow eating 5+ hours a week of someone's time.",
    includes:
      "Workflow design, build, test runs, monitoring setup, documentation. Post-launch support included.",
  },
  {
    name: "Monthly retainer",
    tag: "CONTINUOUS BACKLOG",
    best: "Ongoing automation work without a full-time hire.",
    includes:
      "Dedicated consultant or pod, shared backlog, weekly sync, on-demand requests, ongoing maintenance.",
  },
  {
    name: "Audit + roadmap",
    tag: "PRIORITIZE FIRST",
    best: "Many manual processes, unsure which to automate first.",
    includes:
      "Workflow inventory, qualitative ROI per workflow, platform recommendation, prioritized roadmap.",
  },
];

const screening = [
  {
    title: "Platform fluency",
    line: "Can defend a pick between platforms for a specific scenario. Not loyal to one tool.",
  },
  {
    title: "Error handling discipline",
    line: "Retries, dead-letters, alert routing, human escalation. Not just the happy path.",
  },
  {
    title: "AI integration judgment",
    line: "Knows when an LLM step is overkill and when it pays for itself.",
  },
  {
    title: "API + webhook depth",
    line: "Can drop into raw HTTP, custom code nodes, and webhook signing when the no-code wall hits.",
  },
  {
    title: "Self-hosting + ops awareness",
    line: "Backups, scaling, webhook reliability. Many automation problems are ops problems.",
  },
  {
    title: "Handover discipline",
    line: "If your team cannot maintain it, the value evaporates. We screen for documentation quality.",
  },
];

const steps = [
  { num: "01", title: "Share the workflow", line: "Tell us what to automate and what the manual process looks like." },
  { num: "02", title: "Scoped in 48 hours", line: "Free scoping call. Fixed-price quote or monthly retainer rate." },
  { num: "03", title: "Build and demo", line: "We build in your tools, demo the workflow, iterate on your feedback." },
  { num: "04", title: "Launch and document", line: "Go live, hand off documentation, monitor, support after." },
];

const faqItems: FAQ[] = [
  {
    question: "When should we automate a workflow with AI?",
    answer:
      "When a workflow eats meaningful hours per week of someone's time, follows a repeatable pattern, and has clear inputs and outputs. AI is right when the workflow needs classification, extraction, or drafting that simple rules cannot cover. We will tell you honestly when a workflow does not need AI in the loop.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "We build on the major workflow platforms (self-hosted and cloud) plus direct API and webhook integrations. We pick the platform for the workflow: simple integrations get a no-code tool, complex branching gets self-hosted control, customer-product builds get a real codebase. We help you decide before we build.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you integrate Claude or GPT into our automations?",
    answer:
      "Yes. AI in the loop is standard for modern workflows: classification, extraction from unstructured documents, drafting (emails, summaries, replies), and decisioning. We integrate the major model providers and measure quality and cost-per-run so the AI step earns its keep.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you self-host workflow tools for us?",
    answer:
      "Yes. We deploy on Hetzner, AWS, Render, Railway, or your existing cloud. We handle deployment, database backups, worker scaling, webhook reliability, and ongoing maintenance. Self-hosting usually pays back at higher execution volumes versus SaaS pricing.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can you migrate us from one platform to another?",
    answer:
      "Yes. Cost and complexity are the two most common reasons customers migrate. We map every active workflow, rebuild on the new platform, run in parallel for validation, then cut over.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Do you handle ongoing maintenance?",
    answer:
      "Post-launch support is included in every project. For ongoing maintenance, monthly retainers cover monitoring, fixes when APIs change, small enhancements, and a backlog of new automations.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What workflows do you most commonly automate?",
    answer:
      "Sales ops (lead to CRM with enrichment), customer support (ticket categorization and routing), finance (invoice extraction and approval flows), content (publishing and syndication), and internal tooling (Slack apps, approval workflows, admin panels). AI is in the loop on most modern automation work.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can your consultants work in our timezone?",
    answer:
      "Yes. Our consultants in India overlap with US Eastern, US Pacific, UK, EU, Australia, and Dubai timezones. Retainer engagements include a weekly sync call in your business hours with async work the rest of the time.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function HireAutomationConsultantsPage() {
  const serviceSchema = generateServiceSchema(
    "Automation Consultants for AI + Workflow Automation",
    "Automation consultants who wire AI agents into real business workflows. Sales ops, support, finance, content, and internal tooling.",
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative max-w-5xl text-center">
          <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-200 border-primary-400/30">
            AUTOMATION CONSULTANTS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Automate the workflows
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              eating your team&apos;s time.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-primary-100/90 max-w-2xl mx-auto leading-relaxed">
            Workflows, AI agents, and integrations shipped to your real tools. Project or retainer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">Book a discovery call</Button>
            <Button href="#engagement" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See engagement options
            </Button>
          </div>
        </div>
      </section>

      {/* THE ARC */}
      <section className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30" />
        <div className="container-custom relative max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The arc</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Discovery to handover.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {arc.map((a) => (
              <div
                key={a.num}
                className="group relative p-7 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <span aria-hidden className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary-50 dark:text-primary-500/10 leading-none select-none">
                  {a.num}
                </span>
                <div className="relative">
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{a.tag}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50 leading-snug">{a.headline}</h3>
                  <p className="mt-3 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{a.line}</p>
                  <div className="mt-5 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES BENTO */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we ship</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Six workflows we ship all the time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="group relative p-7 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 p-2.5 group-hover:scale-110 transition-transform duration-300">
                    {u.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{u.tag}</p>
                    <h3 className="mt-1.5 text-lg font-extrabold text-dark-900 dark:text-dark-50">{u.title}</h3>
                    <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{u.line}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Why us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Built to run on Monday.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {why.map((w) => (
              <div
                key={w.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-extrabold text-dark-900 dark:text-dark-50">{w.title}</h3>
                  <p className="mt-1 text-sm text-dark-500 dark:text-dark-300">{w.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS — dark bento */}
      <section id="engagement" className="section-padding bg-dark-900 dark:bg-dark-950 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Engagement</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Three ways to work together.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementModels.map((m) => (
              <div
                key={m.name}
                className="group p-7 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 hover:from-primary-900/30 hover:to-dark-900 transition-all duration-300 flex flex-col"
              >
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{m.tag}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{m.name}</h3>
                <p className="mt-4 text-sm text-primary-200">{m.best}</p>
                <p className="mt-5 text-sm text-dark-300 leading-relaxed border-t border-dark-700 pt-4">
                  {m.includes}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" size="lg">Scope your engagement</Button>
          </div>
        </div>
      </section>

      {/* SCREENING SIGNALS */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How we screen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What separates good consultants from demo-builders.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {screening.map((s) => (
              <div
                key={s.title}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl transition-all"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{s.line}</p>
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — visual timeline */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four steps. No fluff.
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div aria-hidden className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300" />
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white font-extrabold text-xl shadow-lg shadow-primary-500/30">
                  {s.num}
                </div>
                <h3 className="mt-4 font-extrabold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-1.5 text-sm text-dark-500 dark:text-dark-300">{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50/30 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Quick answers.
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-dark-800 text-primary-500 flex items-center justify-center font-bold group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-overlay filter blur-3xl" />
        </div>
        <div className="container-custom relative text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to automate the right workflow?
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            Tell us what is bleeding time. Scoped proposal in 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
