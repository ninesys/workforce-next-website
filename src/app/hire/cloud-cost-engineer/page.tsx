import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Cloud Cost Engineers from India (AWS, Azure, GCP FinOps)",
  description:
    "Hire pre-vetted cloud cost engineers from India. AWS, Azure, GCP FinOps, Kubernetes rightsizing, spot and reserved instances, Terraform cost estimation. Average 30-60% cloud savings.",
  keywords: [
    "hire cloud cost engineer",
    "FinOps engineer India",
    "AWS cost optimization India",
    "GCP cost engineer",
    "Azure FinOps",
    "Kubernetes rightsizing",
    "cloud cost reduction",
    "cloud savings engineer",
  ],
  openGraph: {
    title: "Hire Cloud Cost Engineers from India",
    description:
      "Cloud cost engineers who typically save 30-60% on cloud bills. AWS, Azure, GCP FinOps specialists. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/cloud-cost-engineer/`,
  },
};

const skills = [
  "AWS Cost Explorer",
  "Azure Advisor",
  "GCP Billing",
  "Kubernetes Rightsizing",
  "Spot Instances",
  "Reserved Instances",
  "Terraform Cost Estimation",
  "FinOps",
  "Savings Plans",
];

const whyPoints = [
  {
    title: "Engineers who pay for themselves",
    description:
      "A good cloud cost engineer typically saves 30-60% on your monthly cloud bill. The ROI is measurable from month one. This is one of the few roles where the math is not up for debate.",
  },
  {
    title: "Multi-cloud FinOps expertise",
    description:
      "AWS, Azure, GCP. Our engineers work across all major cloud providers and understand the pricing models, discount programs, and cost levers of each one. No single-cloud blind spots.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. Cloud cost work requires deep context over time. You need someone who stays and keeps savings compounding.",
  },
  {
    title: "Infrastructure and code-level optimization",
    description:
      "Our engineers go beyond dashboards. They rightsize Kubernetes clusters, optimize data transfer, refactor expensive queries, and implement cost-aware architecture patterns.",
  },
];

const responsibilities = [
  "Auditing AWS, Azure, or GCP bills to identify the 10-20% of resources causing 80% of waste",
  "Rightsizing EC2, RDS, ECS, and Kubernetes workloads based on actual utilization, not peak-hour fear",
  "Designing spot instance, savings plan, and reserved instance portfolios that balance commitment and flexibility",
  "Implementing Kubernetes vertical and horizontal pod autoscaling, node pools, and spot node strategies",
  "Optimizing data transfer costs: cross-AZ, cross-region, and NAT gateway traffic that silently adds thousands per month",
  "Refactoring expensive queries and pipelines in BigQuery, Snowflake, Redshift, or Athena to cut compute spend",
  "Setting up cost anomaly detection, budget alerts, and tag-based allocation so teams see their own costs",
  "Building FinOps dashboards for engineering leaders: cost per customer, cost per feature, cost per tenant",
  "Integrating cost estimation into CI/CD with Infracost, Terraform plans, or native cost forecasting",
  "Training engineering teams on cost-aware patterns so savings do not erode when the specialist rotates off",
];

const whenToHire = [
  {
    scenario: "Your cloud bill is above $50K/month and growing faster than revenue",
    recommendation: "Hire a cloud cost engineer immediately",
    reason:
      "At this scale, a specialist usually saves more in the first quarter than they cost for the year. Delay is literal money left on the table. The ROI math rarely fails.",
  },
  {
    scenario: "You are on a Kubernetes platform and nobody owns cost",
    recommendation: "Hire a cloud cost engineer with Kubernetes depth",
    reason:
      "Kubernetes waste hides in plain sight: overprovisioned requests, lazy HPA, expensive node pools, egress traffic. A specialist who has done this before will find and fix the patterns quickly.",
  },
  {
    scenario: "Your spend is under $10K/month and relatively flat",
    recommendation: "A DevOps or SRE engineer is usually enough",
    reason:
      "At low spend, the absolute dollar savings from a dedicated cost specialist rarely justify the hire. A DevOps engineer with basic FinOps awareness and a weekly dashboard review is usually enough.",
  },
  {
    scenario: "You are preparing for an acquisition, IPO, or board review",
    recommendation: "Hire a cloud cost engineer for a focused engagement",
    reason:
      "Gross margin questions get sharp attention in these moments. A cost specialist can clean up waste, implement allocation, and build a defensible cost story in 6-12 weeks, often paying for themselves several times over.",
  },
];

const screeningSignals = [
  {
    signal: "Cost instinct on unfamiliar architectures",
    detail:
      "We show candidates an architecture diagram and ask where the money goes. Strong candidates find NAT gateway traffic, cross-AZ transfer, and oversized databases in under ten minutes. Weak ones look only at EC2.",
  },
  {
    signal: "Kubernetes cost fluency",
    detail:
      "We ask candidates to critique a Kubernetes cluster's resource requests, HPA settings, and node groups. Strong candidates identify overprovisioning patterns and spot usage opportunities. Weak ones look at the cluster autoscaler config and stop.",
  },
  {
    signal: "Savings plan and RI portfolio judgment",
    detail:
      "We give candidates a real usage pattern and ask them to design a commitment portfolio. Strong candidates balance compute savings plans, EC2 savings plans, and RIs based on flexibility needs. Weak ones commit everything or nothing.",
  },
  {
    signal: "Code-level optimization awareness",
    detail:
      "Good cost engineers do not stop at infrastructure. We screen for engineers who have refactored slow queries, restructured Lambda handlers, or changed retry logic to cut spend. Infrastructure-only cost work misses half the opportunity.",
  },
  {
    signal: "Executive communication",
    detail:
      "Cost work is meaningless if the CFO does not understand the story. We screen for engineers who can explain tradeoffs without jargon, defend cost decisions to leadership, and frame savings in business terms.",
  },
  {
    signal: "Multi-cloud neutrality",
    detail:
      "We favor engineers who have optimized costs on at least two clouds. Single-cloud specialists often recommend tools and patterns that do not translate. Real FinOps work rewards breadth.",
  },
];

const engagementModels = [
  {
    name: "Audit engagement",
    hours: "4 to 6 weeks",
    best: "Best for a one-time deep cost audit and remediation plan before deciding on ongoing engagement.",
    includes:
      "Full bill audit, tagging strategy, quick-win remediation, savings roadmap, and executive-ready summary.",
  },
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for companies with ongoing cost needs but not a full-time role yet. Savings typically cover the engagement several times over.",
    includes:
      "Dedicated engineer, monthly cost reviews, ongoing optimization work, dashboard maintenance, Slack coverage.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for organizations with $50K+ monthly spend, complex workloads, and continuous optimization opportunities.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, quarterly executive summaries.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your cloud footprint (AWS, Azure, GCP), monthly spend, and top cost concerns.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for FinOps depth, multi-cloud fluency, and executive communication. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their optimization instincts, communication style, and past savings.",
  },
  {
    step: "04",
    title: "Start with an audit or trial week",
    description:
      "Begin with a paid trial or focused audit. If the engineer is the right fit, continue. If not, we find another match.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a cloud cost engineer in India?",
    answer:
      "Full-time senior cloud cost engineers in India typically cost between 6,000 and 10,000 USD per month. A common audit engagement runs 4 to 6 weeks at a fixed fee. For most customers with $30K+ monthly cloud spend, a specialist saves multiples of their salary in the first quarter. Pricing at Workforce Next includes an engineering manager and quarterly executive summaries.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much can a cloud cost engineer actually save me?",
    answer:
      "Typical savings range from 20% to 60% of monthly cloud spend, with 30-40% being the most common outcome for companies that have not previously invested in FinOps. Savings come from rightsizing, commitment portfolios (RIs, savings plans, spot), Kubernetes tuning, data transfer optimization, and code-level query or service refactors. Existing well-optimized environments see smaller numbers; early-stage or unoptimized ones often see more than 50%.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between a FinOps engineer and a DevOps engineer?",
    answer:
      "DevOps engineers focus on delivery, reliability, and automation. FinOps engineers focus on cost visibility, efficiency, and commitment strategy. The overlap is real but the day-to-day priorities differ. A DevOps engineer might not notice that NAT gateways are costing $8K/month; a FinOps engineer finds that in the first week. For teams spending more than $30K/month on cloud, both roles create distinct value.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your engineers work across AWS, Azure, and GCP?",
    answer:
      "Yes. Our FinOps engineers typically have production experience on at least two major clouds. Most projects have one primary cloud with secondary workloads elsewhere, and our engineers are comfortable in that shape. If you are deeply single-cloud, we match engineers with matching depth rather than forcing breadth you do not need.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can a cloud cost engineer work alongside my existing DevOps team?",
    answer:
      "Yes, and this is the norm. A good cost engineer collaborates with DevOps and platform teams rather than replacing them. They contribute PRs to Terraform modules, educate teams on cost-aware patterns, and build dashboards that make cost visible to the engineers making architectural decisions. The goal is usually to leave the organization permanently better at FinOps, not to lock in a dependency.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a cloud cost engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For audit engagements, we can often start within 3 to 5 days given a pre-screened bench of specialists.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireCloudCostEngineerPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Cloud Cost Engineers from India",
    "Hire pre-vetted cloud cost engineers from India. AWS, Azure, GCP FinOps, Kubernetes rightsizing, spot and reserved instances. Average 30-60% cloud savings. SethAI-screened.",
    `${siteMetadata.url}/hire/cloud-cost-engineer/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Cloud Cost Engineer",
      url: `${siteMetadata.url}/hire/cloud-cost-engineer/`,
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
            HIRE CLOUD COST ENGINEER
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Cloud Cost Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted FinOps engineers who typically save 30 to 60 percent on
            monthly cloud bills across AWS, Azure, and GCP. Screened by
            SethAI for technical depth and long-term fit.
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
            Why cloud cost engineering is one of the few hires that pays for itself
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most engineering roles are an investment in future output. A
              cloud cost engineer is different: the ROI is measurable in the
              same quarter they start. For companies spending $30K a month or
              more on cloud, a specialist routinely finds 30 to 60 percent
              savings. That is more than the role costs, usually by a
              significant multiple, and the savings compound month after
              month.
            </p>
            <p>
              The catch is that real FinOps work requires depth across
              architecture, Kubernetes, data transfer, commitment planning,
              and organizational communication. It is not a dashboard job. A
              generalist with some AWS knowledge will cut 10 percent and call
              it done. A specialist will find the hidden patterns: NAT
              gateways running $8K a month for no reason, oversized databases
              that nobody benchmarked, Kubernetes clusters at 20 percent
              utilization, expensive queries running every five minutes that
              nobody needs.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              certification keywords. It is evaluated on actual cost savings
              shipped, architecture judgment, executive communication, and
              the signals that predict whether someone will keep finding
              opportunities months after the easy wins are gone.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire cloud cost engineers from Workforce Next
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

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a cloud cost engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a cloud cost engineer through Workforce Next, here is the work
            they take ownership of:
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
            Do you actually need a cloud cost engineer yet?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every team is ready to hire a specialist. Here is how we help
            customers decide.
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

      {/* Engagement */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our FinOps engineers. Most customers start
            with an audit, then move to fractional or full-time based on what
            the audit surfaces.
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
            Common questions about hiring cloud cost engineers
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
            Ready to cut your cloud bill?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your monthly cloud spend and we will match you with a
            FinOps engineer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
