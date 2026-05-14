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
  title: "Hire Data Engineers from India (dbt, Airflow, Spark, Snowflake)",
  description:
    "Hire pre-vetted data engineers from India. dbt, Airflow, Spark, Snowflake, Kafka, BigQuery, Dagster, and modern data lakehouses. SethAI-screened for skills and longevity.",
  keywords: [
    "hire data engineers India",
    "dbt developers India",
    "Airflow developers",
    "Spark developers India",
    "Snowflake engineers",
    "data pipeline developers",
    "data lakehouse engineers",
    "Kafka developers India",
  ],
  openGraph: {
    ...ogDefaults("/hire/data-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire Data Engineers from India",
    description:
      "Pre-vetted data engineers skilled in dbt, Airflow, Spark, Snowflake, and modern data lakehouses. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/data-engineers/`,
  },
};

const skills = [
  "dbt",
  "Apache Spark",
  "Airflow",
  "Snowflake",
  "Data Lakehouses",
  "Kafka",
  "BigQuery",
  "Redshift",
  "Dagster",
  "Iceberg",
];

const whyPoints = [
  {
    title: "Production data pipeline experience",
    description:
      "Our data engineers have built and maintained pipelines that process millions of records daily. They understand data quality, observability, and cost control, not just ETL tutorials.",
  },
  {
    title: "Modern data stack expertise",
    description:
      "From dbt transformations to Spark jobs to lakehouse table formats like Iceberg and Delta Lake, our engineers work across the modern data stack. They build systems that scale.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get engineers who stay long enough to understand your data domain and business logic.",
  },
  {
    title: "End-to-end pipeline ownership",
    description:
      "Ingestion, transformation, orchestration, testing, monitoring, and cost management. Our engineers own the full data lifecycle, not just one piece of it.",
  },
];

const responsibilities = [
  "Designing data models with dbt: staging, intermediate, and mart layers with clear lineage and testing",
  "Building batch pipelines with Airflow, Dagster, or Prefect, including retries, backfills, and SLA monitoring",
  "Writing Spark jobs in PySpark or Scala for large-scale transformations, joins, and aggregations",
  "Managing cloud data warehouses (Snowflake, BigQuery, Redshift, Databricks) with cost-aware query design and warehouse sizing",
  "Implementing streaming pipelines with Kafka, Kinesis, or Pub/Sub with exactly-once semantics where needed",
  "Operating modern lakehouses with Iceberg, Delta Lake, or Hudi including partition evolution and time travel",
  "Building data quality frameworks with dbt tests, Great Expectations, or Soda, including freshness and anomaly checks",
  "Instrumenting pipeline observability: run times, row counts, cost per job, and alerting when SLAs slip",
  "Designing schema evolution strategies that do not break downstream consumers when source systems change",
  "Partnering with analytics and ML teams on reliable, documented, well-modeled datasets they can trust",
];

const whenToHire = [
  {
    scenario: "You are building a data platform from scratch",
    recommendation: "Hire a senior data engineer",
    reason:
      "Early architecture choices compound. Warehouse choice, modeling conventions, orchestration layer, and data contracts all shape the next three years. A senior data engineer prevents the rebuild everyone does in year two.",
  },
  {
    scenario: "Your pipelines are slow, expensive, or constantly breaking",
    recommendation: "Hire a data engineer with optimization depth",
    reason:
      "Most data-platform pain comes from a small number of query, modeling, or orchestration problems. A specialist who has seen these before will identify and fix the 20 percent of pipelines causing 80 percent of the cost or breakage.",
  },
  {
    scenario: "You are doing simple analytics on a small dataset",
    recommendation: "A backend or analytics engineer is usually fine",
    reason:
      "If your data volume is modest and your requirements are reporting-grade, a backend engineer with SQL skills or an analytics engineer can often cover the work without hiring a dedicated data engineer.",
  },
  {
    scenario: "You are adopting a lakehouse or migrating to the modern data stack",
    recommendation: "Hire a data engineer with lakehouse and dbt depth",
    reason:
      "Lakehouse migrations get messy: table format choice, catalog strategy, compute separation, and permissions. A specialist who has done this will save months of false starts and wrong turns.",
  },
];

const screeningSignals = [
  {
    signal: "Data modeling judgment",
    detail:
      "We ask candidates to review a dimensional model or a messy dbt project and critique it. Strong candidates point out naming inconsistencies, missing grain clarity, and over-abstraction. Weak ones either accept everything or rewrite with unnecessary complexity.",
  },
  {
    signal: "SQL depth",
    detail:
      "We give candidates a slow analytical query and ask them to optimize it. Strong candidates reach for window functions, CTE vs. subquery tradeoffs, indexes, partitioning, and clustering. Weak ones apply cargo-culted tricks without measuring.",
  },
  {
    signal: "Orchestration instincts",
    detail:
      "Retries, idempotency, backfills, SLAs. We test whether candidates can design a DAG that survives a transient API failure, a partial day of data loss, or a schema change upstream. Weak ones assume the happy path always wins.",
  },
  {
    signal: "Cost awareness",
    detail:
      "Data warehouses bill for compute, storage, and data transfer. We ask candidates to estimate the cost of a proposed architecture and explain where the money goes. Strong answers show operator instincts. Weak ones default to the biggest warehouse size available.",
  },
  {
    signal: "Testing discipline",
    detail:
      "Tests are not optional on pipelines that downstream teams trust. We screen for engineers who add dbt tests, Great Expectations assertions, or custom checks by default, not as an afterthought when something breaks.",
  },
  {
    signal: "Stakeholder communication",
    detail:
      "Data engineers spend half their time translating business requirements into data models. We screen for engineers who can push back on ambiguous specs, ask the right questions, and document data contracts in plain language.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams needing senior data engineering guidance without a full-time headcount commitment.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for data platforms shipping continuously and needing an embedded data engineering specialist.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Data pod",
    hours: "2 to 4 engineers",
    best: "Best for a new data platform, major migration, or team needing dedicated ingestion, modeling, and analytics capacity.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your data sources, warehouse, and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for data pipeline depth, SQL fluency, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their modeling instincts, query thinking, and working approach.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the engineer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a data engineer in India?",
    answer:
      "Mid-level data engineers in India typically cost between 4,000 and 6,500 USD per month for full-time engagement. Senior engineers with production lakehouse, streaming, or multi-warehouse experience range from 6,500 to 10,000 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Which data warehouse should I choose?",
    answer:
      "Snowflake is the easiest to operate and has the richest ecosystem, but it is costly at scale. BigQuery is excellent for teams already on Google Cloud with unpredictable query patterns. Redshift is competitive if you need tight AWS integration. Databricks wins for heavy Spark or ML workloads. Our data engineers will recommend based on your data volume, query patterns, team skills, and existing cloud footprint, not on our preferences.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your data engineers work with dbt and modern transformation tools?",
    answer:
      "Yes. Every senior data engineer we place has shipped production dbt projects with layered models, tests, documentation, and CI. Most also work with orchestrators like Airflow or Dagster, reverse-ETL tools like Hightouch or Census, and observability tools like Monte Carlo. If you are starting from scratch, we can guide the toolchain choice; if you already have one, we match engineers who know it.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your data engineers build streaming pipelines?",
    answer:
      "Yes. Our engineers have production experience with Kafka, Kinesis, Pub/Sub, and Flink. They know the tradeoffs between exactly-once and at-least-once, how to design for backpressure, and when streaming is genuinely required vs. when a micro-batch pattern is simpler. Streaming is often chosen for reasons that do not hold up under scrutiny; we help you choose honestly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your data engineers work in my timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover standups and afternoon pair sessions.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a data engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened data engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireDataEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Data Engineers from India",
    "Hire pre-vetted data engineers from India. dbt, Airflow, Spark, Snowflake, Kafka, BigQuery, Dagster, and modern data lakehouses. SethAI-screened.",
    `${siteMetadata.url}/hire/data-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Data Engineers",
      url: `${siteMetadata.url}/hire/data-engineers/`,
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
            HIRE DATA ENGINEERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Data Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build production data pipelines, modern
            warehouses, and lakehouse platforms. Screened by SethAI for
            technical depth and long-term fit.
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
            What separates a real data engineer from an ETL writer
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Every engineer with SQL on their resume claims data engineering
              experience. The gap between someone who can wire up an Airflow
              DAG and someone who can run a reliable, cost-controlled,
              well-modeled data platform for a business that depends on it is
              enormous. Hiring the wrong data engineer is how teams end up
              with pipelines that break every Monday, warehouses that cost
              five figures a month for no clear reason, and analytics nobody
              trusts.
            </p>
            <p>
              A genuine data engineer thinks in grain, lineage, idempotency,
              cost, and trust. They have been woken up by a broken pipeline,
              investigated a silent data quality regression, and rewritten a
              model that everyone else thought was fine. They partner with
              analysts and ML teams rather than throwing data over the wall.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              tool keywords like dbt or Snowflake. It is evaluated on
              modeling depth, SQL fluency, cost awareness, and the signals
              that predict whether someone will still be keeping your data
              platform trustworthy a year from now.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire data engineers from Workforce Next
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

      {/* What a data engineer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a data engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a data engineer through Workforce Next, here is the work they take
            ownership of on a modern data platform:
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
            Data engineer or analytics engineer: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every data project needs a dedicated data engineer. Here is
            how we help customers decide before they spend on the wrong
            profile.
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

      {/* Pricing */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our data engineers. Every engagement
            includes an engineering manager, shared context documentation, and
            PTO backup coverage at no extra cost.
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
            Common questions about hiring data engineers
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
            Ready to hire data engineers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your data stack and we will match you with the right
            engineers within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
