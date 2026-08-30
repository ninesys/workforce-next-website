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
  title: "Hire Data Analysts & Engineers (Human or AI Agent)",
  description:
    "Outsource AI development and data analytics. Hire human data analysts, data engineers, or an AI data agent to ship dashboards, pipelines, and decisions.",
  keywords: [
    "outsource AI development and data analytics",
    "hire data analyst",
    "hire data engineer",
    "AI data agent",
    "done-for-you AI agents",
    "hire an AI agent or remote expert",
    "analytics engineering for startups",
    "data engineering as a service",
  ],
  openGraph: {
    ...ogDefaults("/hire-data-analysts-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire Data Analysts & Engineers (Human or AI Agent)",
    description:
      "Outsource data analytics. Human analysts, data engineers, or AI agents on top of your warehouse.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire-data-analysts-engineers/`,
  },
};

const agentVsHuman = [
  {
    label: "AI DATA AGENT",
    headline: "Best for ad-hoc.",
    line: "Text-to-SQL, analyst copilots, anomaly detection on a clean warehouse. Answers questions on demand.",
    glyph: "AI",
  },
  {
    label: "HUMAN ANALYST",
    headline: "Best for strategy.",
    line: "Stakeholder communication, root-cause investigation, dashboard design that gets used.",
    glyph: "HU",
  },
  {
    label: "BLEND",
    headline: "Best for most teams.",
    line: "AI agent for the queries, human analyst for the strategic work. The agent makes the analyst 3x faster.",
    glyph: "AI+",
  },
];

const what = [
  { tag: "DASHBOARDS", title: "Dashboards your team uses", line: "Built in Looker, Mode, Hex, or Metabase. Designed for one job each, not a sea of charts." },
  { tag: "PIPELINES", title: "Data pipelines", line: "Ingestion, modeling, and orchestration on Snowflake, BigQuery, or Databricks. Versioned and tested." },
  { tag: "AI ON WAREHOUSE", title: "AI agent on top of data", line: "An AI agent that answers natural-language questions against your warehouse. With guardrails." },
  { tag: "TRANSFORM", title: "Analytics engineering", line: "dbt models, tests, documentation. The kind your future analyst will thank you for." },
  { tag: "REVENUE OPS", title: "Revenue analytics", line: "ARR, MRR, churn, cohorts, attribution. Decisions you can defend in a board meeting." },
  { tag: "ANOMALIES", title: "Anomaly detection", line: "AI watches your KPIs. Flags what changed, what caused it, and what to do." },
];

const stacks = [
  { tag: "WAREHOUSE", line: "Snowflake, BigQuery, Redshift, Databricks" },
  { tag: "TRANSFORM", line: "dbt" },
  { tag: "ORCH", line: "Airflow, Dagster, Prefect" },
  { tag: "BI", line: "Looker, Mode, Hex, Metabase" },
  { tag: "INGEST", line: "Fivetran, Airbyte, Stitch" },
  { tag: "AI", line: "OpenAI, Claude, text-to-SQL agents" },
];

const steps = [
  { num: "01", title: "Audit the data", line: "Where it lives, how dirty it is, what decisions it should drive." },
  { num: "02", title: "Pick the team shape", line: "Analyst, engineer, AI agent, or blend. We propose what fits." },
  { num: "03", title: "Ship the foundation", line: "Pipelines, models, dashboards, AI agent on top. Weekly demo cadence." },
  { num: "04", title: "Handoff or stay", line: "Documented stack, runbooks, ongoing support. You choose the duration." },
];

const fitFor = [
  { tag: "SAAS FOUNDERS", line: "Need answers from data without hiring a full data team." },
  { tag: "REVOPS LEADERS", line: "Want revenue analytics that match the way you actually run the business." },
  { tag: "SMB BUYERS", line: "Have data in 5 tools and no source of truth. Yet." },
  { tag: "FUNDED STARTUPS", line: "Ready to build the data foundation before scaling." },
];

const faqItems: FAQ[] = [
  {
    question: "Do I hire a data analyst, a data engineer, or both?",
    answer:
      "A data analyst answers questions: dashboards, ad-hoc analyses, weekly reporting. A data engineer builds the plumbing: ingestion, modeling, the warehouse, and reliable pipelines. Early-stage SaaS usually starts with one analytics engineer who does both. Once your data volume crosses a threshold, you split into specialized roles. We help you scope which one to hire first.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can an AI agent replace a data analyst?",
    answer:
      "For ad-hoc questions against a clean warehouse, yes. AI agents like text-to-SQL tools and analyst copilots are good enough today. For pipeline reliability, anomaly investigation, and stakeholder communication, you still want a human in the loop. We offer both: an AI data agent layered on top of your warehouse, plus human analysts for the strategic work.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What data stacks do you work with?",
    answer:
      "Warehouses: Snowflake, BigQuery, Redshift, Databricks. Transformation: dbt. Orchestration: Airflow, Dagster, Prefect. BI: Looker, Mode, Hex, Metabase. Ingestion: Fivetran, Airbyte, Stitch, custom connectors. We build on the stack you already pay for instead of forcing you onto ours.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function HireDataAnalystsEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Data Analysts and Data Engineers",
    "Outsource AI development and data analytics. Hire human data analysts, data engineers, or AI data agents for dashboards, pipelines, and decisions.",
    `${siteMetadata.url}/hire-data-analysts-engineers/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Data Analysts and Engineers", url: `${siteMetadata.url}/hire-data-analysts-engineers/` },
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
            DATA ANALYTICS &amp; ENGINEERING
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Hire Data Analysts and Engineers,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or an AI Agent That Crunches Your Data.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Dashboards, pipelines, and AI agents that turn your warehouse into decisions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="#stack" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See the stack
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
              AI data agent vs. human analyst.
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

      {/* WHAT WE SHIP */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we ship</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What does an outsourced data team actually do?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {what.map((w) => (
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

      {/* STACK */}
      <section id="stack" className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              What data stacks do you work with?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stacks.map((s) => (
              <div
                key={s.tag}
                className="p-5 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all text-center"
              >
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{s.tag}</p>
                <p className="mt-2 text-sm font-bold text-white leading-snug">{s.line}</p>
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
              Four steps from messy data to decisions.
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
            What we pair with data work.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Pair the data team with{" "}
            <a href="/ai-developers-who-build-ai/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI developers who build AI models
            </a>{" "}
            when the pipelines feed a custom model. Most outbound failures are data failures. See how our{" "}
            <a href="/ai-sdr-outreach/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI SDR setup service
            </a>{" "}
            plugs into your CRM cleanly. And if you are hiring data engineers, our{" "}
            <a href="/ai-agent-hr-recruiting/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI agent for recruiting outreach
            </a>{" "}
            can run the candidate sourcing for you.
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
            Turn your data into decisions.
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us where your data lives. Scoped proposal in 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
