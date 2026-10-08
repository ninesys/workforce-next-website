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
  title: "AI Agent for Finance Ops & Invoicing Automation",
  description:
    "Done-for-you AI agent for finance ops. Processes invoices, reconciles transactions, and flags anomalies without growing your finance team. US and Canada founders and finance leads.",
  keywords: [
    "AI agent for finance ops",
    "invoice automation AI agent",
    "AP AR automation",
    "done-for-you AI agents",
    "reconciliation automation",
    "AI agent quickbooks netsuite",
    "finance ops automation",
  ],
  openGraph: {
    ...ogDefaults("/ai-agent-finance-ops/"),
    images: ["/images/og-default.png"],
    title: "AI Agent for Finance Ops & Invoicing Automation",
    description:
      "Done-for-you AI agent for finance ops. Processes invoices, reconciles transactions, and flags anomalies.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-agent-finance-ops/`,
  },
};

const agentVsHuman = [
  {
    label: "AI FINANCE AGENT",
    headline: "Best for volume.",
    line: "Invoice processing, reconciliation, anomaly flags, recurring reports. Every close-out task that is repeatable.",
    glyph: "AI",
  },
  {
    label: "FINANCE ANALYST",
    headline: "Best for judgment.",
    line: "Forecasting, board reporting, vendor negotiation, the calls that need real financial judgment.",
    glyph: "FA",
  },
  {
    label: "BLEND",
    headline: "Best for lean finance teams.",
    line: "Agent does the repetitive close-out work. Analyst owns the decisions and anything that touches strategy.",
    glyph: "AI+",
  },
];

const workflow = [
  { tag: "INTAKE", title: "Invoice intake and extraction", line: "Reads invoices from email or upload, extracts line items, matches against the PO automatically." },
  { tag: "AP AUTOMATION", title: "Approval routing and payment runs", line: "Routes for approval against your rules, schedules payment runs, no manual chasing for sign-off." },
  { tag: "RECONCILIATION", title: "Transaction matching", line: "Matches transactions across bank feeds, ledger, and invoices. Flags mismatches instead of burying them." },
  { tag: "ANOMALY DETECTION", title: "Flags before they become problems", line: "Duplicate payments, unusual vendor activity, and budget overruns surfaced as they happen, not at month-end." },
  { tag: "REPORTING", title: "Recurring reports, generated automatically", line: "Monthly close packet, cash flow view, and burn rate, ready without a manual pull every cycle." },
  { tag: "SYNC", title: "Reads and writes to your accounting system", line: "No manual re-entry between tools. The agent works inside the system you already use." },
];

const integrations = [
  { tag: "QUICKBOOKS", line: "Native" },
  { tag: "XERO", line: "Native" },
  { tag: "NETSUITE", line: "Native" },
  { tag: "BILL.COM", line: "Native" },
  { tag: "STRIPE", line: "Native" },
  { tag: "CUSTOM ERP", line: "API or webhook" },
];

const steps = [
  { num: "01", title: "Map the close process", line: "We capture your invoice volume, approval chain, chart of accounts, and reporting cadence." },
  { num: "02", title: "Configure the agent", line: "Matching rules, approval thresholds, and anomaly sensitivity set to your actual risk tolerance." },
  { num: "03", title: "Launch against one entity or ledger", line: "Live on a contained scope first, verified against your existing close before it expands." },
  { num: "04", title: "Analysts own the judgment calls", line: "Agent handles the repeatable close-out work. Your team reviews flags and owns strategic decisions." },
];

const fitFor = [
  { tag: "FINANCE LEADS AT GROWING STARTUPS", line: "Invoice and transaction volume outpacing the finance headcount." },
  { tag: "FOUNDERS DOING THEIR OWN BOOKS", line: "No dedicated finance hire yet, need the close done reliably every month." },
  { tag: "MULTI-ENTITY OR MULTI-CURRENCY OPS", line: "Reconciliation complexity that eats a disproportionate amount of time." },
  { tag: "TEAMS DROWNING IN MANUAL RECONCILIATION", line: "Want the close done in days, not the better part of two weeks." },
];

const faqItems: FAQ[] = [
  {
    question: "What does an AI agent for finance ops actually do?",
    answer:
      "It processes invoices end to end, matches transactions across your bank feed and ledger, flags anomalies like duplicate payments or unusual vendor activity, and generates recurring reports like the monthly close packet. A human reviews flags and owns anything requiring judgment, the agent handles the repeatable close-out work.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Is it safe to let an AI agent touch payments and reconciliation?",
    answer:
      "The agent proposes and flags, it does not move money unsupervised. Payment runs go through your existing approval chain, and anomalies are surfaced for human review rather than auto-resolved. The risk profile is closer to a very fast, very consistent junior analyst than an autonomous system with payment authority.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can it integrate with our accounting system?",
    answer:
      "Yes. Standard integrations with QuickBooks, Xero, NetSuite, Bill.com, and Stripe. Custom integrations for an in-house or less common ERP via API. The agent reads and writes directly to the system you already use, so there is no parallel spreadsheet to maintain.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiAgentFinanceOpsPage() {
  const serviceSchema = generateServiceSchema(
    "AI Agent for Finance Ops",
    "Done-for-you AI agent for finance ops. Processes invoices, reconciles transactions, and flags anomalies. Built for US and Canada founders and finance teams.",
    `${siteMetadata.url}/ai-agent-finance-ops/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Agent for Finance Ops", url: `${siteMetadata.url}/ai-agent-finance-ops/` },
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
            AI AGENT FOR FINANCE OPS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Run an AI Agent for Finance Ops,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or Hire a Finance Analyst (or Both).
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Processes invoices, reconciles transactions, and flags anomalies. Without growing your finance team.
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
              AI finance agent vs. finance analyst.
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
              Where the AI agent plugs into your finance workflow.
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
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Accounting integrations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Plugs into the accounting system you already use.
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
              Four steps to live finance automation.
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
            What we pair with finance ops automation.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Clean finance data usually depends on clean data pipelines elsewhere. See our{" "}
            <a href="/hire-data-analysts-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              data analysts and data engineers
            </a>{" "}
            if the reporting layer needs work too. If the agent needs custom logic beyond a done-for-you setup, our{" "}
            <a href="/ai-developers-who-build-ai/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI developers who build AI models
            </a>{" "}
            can build it bespoke. For a broader automation build across more of your ops, see our{" "}
            <a href="/hire/automation-consultants/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              automation consultants
            </a>. Not sure where to start? See{" "}
            <a href="/blog/which-finance-ops-tasks-to-automate-first/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              which finance tasks to automate first
            </a>{" "}
            and which should always stay with a human.
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
            Close your books without growing the finance team.
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us your invoice volume. Scoped proposal in 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
