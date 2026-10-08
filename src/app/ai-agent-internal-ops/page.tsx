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
  title: "AI Agent for Internal Ops & IT Helpdesk Automation",
  description:
    "Done-for-you AI agent for internal ops. Resolves employee IT requests, provisions access, and routes approvals without growing internal ops headcount. US and Canada founders and ops leads.",
  keywords: [
    "AI agent for internal ops",
    "IT helpdesk automation",
    "employee onboarding automation",
    "done-for-you AI agents",
    "access provisioning automation",
    "AI agent slack okta",
    "internal ops automation",
  ],
  openGraph: {
    ...ogDefaults("/ai-agent-internal-ops/"),
    images: ["/images/og-default.png"],
    title: "AI Agent for Internal Ops & IT Helpdesk Automation",
    description:
      "Done-for-you AI agent for internal ops. Resolves employee requests, provisions access, and routes approvals.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-agent-internal-ops/`,
  },
};

const agentVsHuman = [
  {
    label: "AI OPS AGENT",
    headline: "Best for volume.",
    line: "Access requests, onboarding checklists, routine IT tickets, policy questions. The repeatable employee-facing work.",
    glyph: "AI",
  },
  {
    label: "OPS OR IT GENERALIST",
    headline: "Best for judgment.",
    line: "Security exceptions, vendor decisions, infrastructure calls. Where real risk assessment is needed.",
    glyph: "HU",
  },
  {
    label: "BLEND",
    headline: "Best for lean internal teams.",
    line: "Agent handles routine employee requests. Human owns anything with real security or budget risk attached.",
    glyph: "AI+",
  },
];

const workflow = [
  { tag: "ACCESS REQUESTS", title: "Provisioning and deprovisioning", line: "Grants and revokes tool access against your policy automatically, with a full audit trail." },
  { tag: "ONBOARDING", title: "New-hire IT setup", line: "Runs the new-hire checklist end to end and pings the employee when everything is ready to use." },
  { tag: "TICKET TRIAGE", title: "Routine IT tickets, resolved", line: "Password resets, VPN access, software installs, handled without a human in the loop." },
  { tag: "POLICY Q&A", title: "Answers from your actual docs", line: "Employee questions get answered against your internal documentation instead of pinging IT or HR directly." },
  { tag: "APPROVALS", title: "Routing to the right approver", line: "Spend, access, and policy-exception requests routed automatically, no chasing someone over Slack." },
  { tag: "AUDIT TRAIL", title: "Every action logged", line: "Full record for SOC 2, internal audit, or compliance review, without a manual reconciliation project." },
];

const integrations = [
  { tag: "SLACK", line: "Native" },
  { tag: "OKTA", line: "Native" },
  { tag: "GOOGLE WORKSPACE", line: "Native" },
  { tag: "JIRA SERVICE MGMT", line: "Native" },
  { tag: "MICROSOFT ENTRA", line: "Native" },
  { tag: "CUSTOM IT STACK", line: "API or webhook" },
];

const steps = [
  { num: "01", title: "Map the request types", line: "We capture your top request categories, access policies, approval chain, and escalation rules." },
  { num: "02", title: "Configure the agent", line: "Access rules, approval thresholds, and audit logging set to your actual security posture." },
  { num: "03", title: "Launch on a contained scope", line: "Live on one request category first, verified before it expands to the rest." },
  { num: "04", title: "Humans own the exceptions", line: "Agent resolves the routine. Your team handles security exceptions and anything with real risk." },
];

const fitFor = [
  { tag: "OPS LEADS AT GROWING STARTUPS", line: "Headcount scaling faster than the internal ops team can keep up with manually." },
  { tag: "IT TEAMS OF ONE", line: "One person covering access, onboarding, and tickets for the whole company." },
  { tag: "COMPANIES SCALING HEADCOUNT FAST", line: "Onboarding consistency matters more as hiring volume increases." },
  { tag: "COMPLIANCE-CONSCIOUS TEAMS", line: "Need an audit trail on access and approvals, not tribal knowledge." },
];

const faqItems: FAQ[] = [
  {
    question: "What does an AI agent for internal ops actually do?",
    answer:
      "It provisions and deprovisions tool access against your policy, runs new-hire IT onboarding end to end, resolves routine IT tickets like password resets, answers employee policy questions from your own documentation, and routes approvals to the right person. A human owns security exceptions and anything with real risk attached.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Does the agent have access to sensitive systems, and how is that controlled?",
    answer:
      "The agent operates within scoped permissions you define, the same principle as least-privilege access for any employee or integration. Every action is logged for audit. Anything outside its defined scope, like a security exception or an unusual access request, gets routed to a human rather than approved automatically.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can it integrate with our existing IT stack?",
    answer:
      "Yes. Standard integrations with Slack, Okta, Google Workspace, Jira Service Management, and Microsoft Entra. Custom integrations for an in-house identity or ticketing system via API. The agent reads and writes directly into the tools your team already uses.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiAgentInternalOpsPage() {
  const serviceSchema = generateServiceSchema(
    "AI Agent for Internal Ops",
    "Done-for-you AI agent for internal ops. Resolves employee IT requests, provisions access, and routes approvals. Built for US and Canada founders and ops teams.",
    `${siteMetadata.url}/ai-agent-internal-ops/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Agent for Internal Ops", url: `${siteMetadata.url}/ai-agent-internal-ops/` },
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
            AI AGENT FOR INTERNAL OPS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Run an AI Agent for Internal Ops,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or Hire an IT/Ops Generalist (or Both).
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Resolves employee requests, provisions access, and routes approvals. Without growing internal ops headcount.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="#workflow" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See the workflow
            </Button>
          </div>
        </div>
      </section>

      {/* AGENT vs HUMAN */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Agent or human?</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
              AI ops agent vs. IT/ops generalist.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agentVsHuman.map((a) => (
              <div
                key={a.label}
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {a.glyph}
                </div>
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{a.label}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">{a.headline}</h3>
                <p className="mt-4 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{a.line}</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Workflow</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Where the AI agent plugs into your internal ops workflow.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflow.map((w) => (
              <div
                key={w.title}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{w.tag}</p>
                <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50">{w.title}</h3>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{w.line}</p>
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">IT stack integrations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Plugs into the IT stack you already use.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((s) => (
              <div
                key={s.tag}
                className="p-5 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all text-center"
              >
                <p className="text-sm font-extrabold text-white">{s.tag}</p>
                <p className="mt-1 text-xs font-bold text-primary-400 uppercase tracking-widest">{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four steps to live internal ops automation.
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

      {/* FIT FOR */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Who it is for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Best-fit teams.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fitFor.map((f) => (
              <div
                key={f.tag}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{f.tag}</p>
                  <p className="mt-1 text-base font-bold text-dark-900 dark:text-dark-50">{f.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED OFFERINGS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Related offerings</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            What we pair with internal ops automation.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Onboarding automation pairs naturally with sourcing the hire in the first place. See our{" "}
            <a href="/ai-agent-hr-recruiting/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI agent for recruiting outreach
            </a>{" "}
            to cover both ends of the hiring-to-onboarding pipeline. If you need a dedicated engineer for infrastructure-level work beyond what a done-for-you agent covers, see our{" "}
            <a href="/hire/devops-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              DevOps engineers
            </a>. For a broader automation build across more of your ops, see our{" "}
            <a href="/hire/automation-consultants/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              automation consultants
            </a>. Not sure where to start? See{" "}
            <a href="/blog/which-internal-ops-tasks-to-automate-first/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              which IT and ops tasks to automate first
            </a>{" "}
            and which should stay with a human.
          </p>
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
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-dark-800 text-primary-500 flex items-center justify-center font-bold group-open:rotate-45 transition-transform">+</span>
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
            Handle employee requests without growing internal ops.
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us your request volume. Scoped proposal in 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
