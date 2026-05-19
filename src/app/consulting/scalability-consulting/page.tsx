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
  title: "Scalability Consulting: Performance, Infrastructure, and Cost at Scale",
  description:
    "Scalability consulting for growing companies hitting scale walls. Performance audits, infrastructure scaling, database tuning, microservices migration, cloud cost at scale.",
  keywords: [
    "scalability consulting",
    "scalability consultant",
    "performance audit",
    "infrastructure scaling consultant",
    "database scalability",
    "microservices migration consulting",
    "scale-up engineering consulting",
    "high-traffic application consulting",
    "cloud scale optimization",
  ],
  openGraph: {
    ...ogDefaults("/consulting/scalability-consulting/"),
    images: ["/images/og-default.png"],
    title: "Scalability Consulting: Performance, Infrastructure, and Cost at Scale",
    description:
      "Performance audits, database scaling, microservices migration, cloud cost optimization. For growing companies hitting scale walls.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/consulting/scalability-consulting/`,
  },
};

const skills = [
  "Performance Profiling",
  "Database Scaling (PostgreSQL, MongoDB)",
  "Read Replicas & Sharding",
  "Caching Strategy (Redis, Memcached)",
  "Microservices Migration",
  "Event-Driven Architecture",
  "Kubernetes & Container Orchestration",
  "Load Testing (k6, Locust, JMeter)",
  "Observability (OpenTelemetry, Datadog)",
  "Cloud Cost Engineering (FinOps)",
  "CDN & Edge Strategy",
  "Multi-region Architecture",
];

const whyPoints = [
  {
    title: "Consultants who have scaled real systems",
    description:
      "Our consultants have taken systems from 1K to 10M+ daily users. They have shipped database sharding, microservices migrations, and 100x traffic scaling in production. The advice is based on production scars, not blog posts.",
  },
  {
    title: "Profile first, prescribe second",
    description:
      "We do not show up with a microservices recommendation. We profile your actual bottleneck (often a missing index or a misconfigured pool, not your architecture) and prescribe the cheapest fix that works.",
  },
  {
    title: "Cost-aware scaling",
    description:
      "Scaling is easy if you have unlimited budget. We design scaling strategies that fit your cost ceiling: when to scale vertically, when to shard, when to drop to a cheaper queue, when caching pays for itself.",
  },
  {
    title: "Project or fractional",
    description:
      "Project engagements (2 to 8 weeks) for a specific scaling problem. Fractional engagements (10 to 20 hours/week) for ongoing scaling advisory as your traffic grows.",
  },
];

const responsibilities = [
  "Profiling production performance: APM analysis, flame graphs, database query plans, event loop lag, GC pause time",
  "Designing database scaling strategies: read replicas, connection pool tuning, query optimization, partitioning, sharding, when to move to a different database entirely",
  "Building caching layers: Redis or Memcached strategy, cache invalidation patterns, edge caching with CDN, in-process caching with TTLs",
  "Architecting microservices migrations from monoliths: bounded contexts, strangler fig pattern, service mesh decisions, observability across services",
  "Designing event-driven architectures with Kafka, RabbitMQ, SQS, or Kinesis when synchronous communication hits limits",
  "Running load tests with k6, Locust, or JMeter; defining realistic SLOs and error budgets",
  "Tuning Kubernetes for scale: HPA configuration, pod sizing, node selection, cluster autoscaling, multi-AZ resilience",
  "Building observability that actually helps at scale: structured logging, distributed tracing with OpenTelemetry, alerting tied to SLOs",
  "Designing multi-region architectures for latency, resilience, or compliance: read replicas, global load balancing, active-active vs active-passive",
  "Cost optimization at scale: rightsizing, Savings Plans modeling, spot capacity strategy, idle cleanup, NAT Gateway audit, data-transfer optimization",
];

const useCases = [
  {
    scenario: "B2B SaaS hitting 10x traffic growth in 12 months",
    examples: "Performance audit identified database connection pool exhaustion and N+1 queries. Fixed with proper pool tuning, query optimization, and Redis caching for hot reads. Saved a microservices migration the team was about to start (and would have regretted).",
  },
  {
    scenario: "Fintech app with 500ms p99 latency on read paths",
    examples: "Designed read replica architecture, materialized views for dashboards, edge caching with Cloudflare. Brought p99 down to 80ms without changing application code significantly.",
  },
  {
    scenario: "Legacy monolith approaching its scale ceiling",
    examples: "Designed phased microservices migration using strangler fig pattern. 18-month sequencing to extract billing, then identity, then notifications. Avoided the big-bang rewrite that kills most modernization projects.",
  },
  {
    scenario: "Cloud bill growing 40% YoY without traffic growth",
    examples: "FinOps audit identified idle resources, missed Savings Plan opportunities, oversized instances, and NAT Gateway egress costs. 38% bill reduction in 90 days without losing capacity.",
  },
  {
    scenario: "Event-driven architecture with growing latency",
    examples: "Kafka consumer lag analysis, consumer rebalance investigation, partition strategy review. Identified slow downstream calls causing back-pressure; redesigned consumer concurrency and added bulkheading.",
  },
  {
    scenario: "Multi-region launch for a US-only product",
    examples: "Designed EU region rollout with read replicas, regional storage, latency-aware routing. Handled GDPR data residency, DR strategy, and team operational model for cross-region debugging.",
  },
];

const whenToHire = [
  {
    scenario: "You are growing fast and worried about scale walls in the next 12 months",
    recommendation: "Project engagement: performance and scaling audit (2 to 4 weeks)",
    reason:
      "Get an outside read on where your bottlenecks actually are and what to fix in what order. Avoids both over-engineering (expensive) and under-engineering (incidents).",
  },
  {
    scenario: "You are already in production fire-fighting mode",
    recommendation: "Project engagement: incident triage + scaling remediation (4 to 8 weeks)",
    reason:
      "Stabilize the immediate issues, then prescribe the architectural changes needed to prevent recurrence. Often runs alongside your in-house team.",
  },
  {
    scenario: "You want ongoing scaling input as your traffic grows",
    recommendation: "Fractional engagement (10 to 20 hours/week)",
    reason:
      "Embedded consultant who reviews PRs, joins architecture reviews, advises on capacity planning, and unblocks the team. Best when growth is sustained and scaling decisions come up monthly.",
  },
  {
    scenario: "You want someone to write the code",
    recommendation: "Hire engineers instead",
    reason:
      "Scalability consulting is advisory and architectural. For execution, hire backend engineers, DevOps engineers, or a software architect on full-time engagement.",
  },
];

const screeningSignals = [
  {
    signal: "Production scaling track record",
    detail:
      "We ask consultants to walk through real scaling work they have shipped: what was the bottleneck, what did they try first, what actually worked, what they would do differently. Theoretical answers lose points.",
  },
  {
    signal: "Profiling discipline",
    detail:
      "Can the consultant explain how they would profile a slow API in production? Specific tools, what they measure, how they read a flame graph. Consultants who jump to architecture without profiling are dangerous.",
  },
  {
    signal: "Database depth",
    detail:
      "Most scaling problems are database problems. We test query plan reading, indexing strategy, partitioning vs sharding decisions, connection pool sizing, and the gap between OLTP and OLAP scaling patterns.",
  },
  {
    signal: "Cost-aware architecture",
    detail:
      "Scaling design that ignores cost is over-engineering. We test consultants on the cost implications of their recommendations: NAT Gateway data-transfer, Redis vs Memcached pricing, Kafka cost at scale.",
  },
  {
    signal: "Microservices judgment",
    detail:
      "Strong scalability consultants know when NOT to recommend microservices. We screen for engineers who have shipped both monoliths and services in production and can defend a pick for a given context.",
  },
  {
    signal: "Observability literacy",
    detail:
      "Distributed tracing, structured logging, SLO design, alerting strategy. Scaling without observability is flying blind. We test whether the consultant has shipped real observability or just dashboards.",
  },
];

const engagementModels = [
  {
    name: "Scaling audit (project)",
    hours: "2 to 4 week engagement",
    best: "Best for getting an outside read on bottlenecks and a written remediation roadmap.",
    includes:
      "Production profiling, database analysis, architecture review, written report with prioritized recommendations, stakeholder presentation.",
  },
  {
    name: "Scaling remediation (project)",
    hours: "4 to 8 week engagement",
    best: "Best when you need both diagnosis and the senior engineering work to fix the highest-priority issues.",
    includes:
      "Audit + hands-on fixes for the top 2 to 3 issues, runbooks, monitoring setup, knowledge transfer to your team.",
  },
  {
    name: "Fractional scaling advisor",
    hours: "10 to 20 hours per week",
    best: "Best for sustained growth phases where scaling decisions come up monthly.",
    includes:
      "Embedded consultant, weekly architecture review, PR review on critical paths, capacity planning, incident post-mortem leadership.",
  },
];

const steps = [
  { step: "01", title: "Share your scaling problem", description: "Tell us your current traffic, growth rate, where it's breaking, and what you've tried." },
  { step: "02", title: "SethAI matches consultants", description: "SethAI screens for relevant production scaling experience and stack fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to consultants directly. Test profiling reasoning, scaling judgment, and working style." },
  { step: "04", title: "Scoping call, then start", description: "Free 30-min scoping. Fixed-price quote for project work, monthly rate for fractional. Start within a week." },
];

const faqItems: FAQ[] = [
  {
    question: "What is scalability consulting and when do we need it?",
    answer:
      "Scalability consulting helps growing companies handle increased traffic, data volume, or operational complexity without rewriting their architecture or burning through cloud budgets. You need it when traffic is doubling year-over-year, when p99 latency is creeping up, when your cloud bill is growing faster than revenue, or when your team is starting to debate microservices migrations.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does scalability consulting cost?",
    answer:
      "Scaling audit (2 to 4 weeks): USD 6,000 to USD 18,000. Scaling remediation (4 to 8 weeks): USD 12,000 to USD 40,000 depending on the complexity of the fixes. Fractional scaling advisor (10 to 20 hours/week): USD 5,000 to USD 9,500 per month. Pricing reflects the seniority required; scaling consultants are typically 8 to 15 years experienced.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Will you recommend microservices?",
    answer:
      "Only when the evidence supports it. Most scaling problems we audit are database problems (missing indexes, bad connection pool tuning, N+1 queries) or caching problems, not architecture problems. We have saved customers from microservices migrations they were about to start and would have regretted. When microservices are the right answer, we say so and design the migration to minimize risk.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you help cut our cloud bill at scale?",
    answer:
      "Yes. FinOps engagements are common: rightsizing instances, Savings Plans and Reserved Instance modeling, spot capacity strategy, idle resource cleanup, NAT Gateway and data-transfer audits. We have cut customer bills by 30 to 50% without losing capacity. See also our cloud cost engineer page for execution capacity.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you work on databases specifically?",
    answer:
      "Yes. Database scaling is one of the most common engagements: read replicas, connection pool tuning, query optimization, partitioning, sharding strategy, when to move from PostgreSQL to a different database, materialized views for read-heavy dashboards.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What stacks do your scalability consultants work with?",
    answer:
      "Node.js, Python, Java, Go on the application side. PostgreSQL, MongoDB, MySQL, Redis, DynamoDB on the data side. AWS, GCP, Azure, Kubernetes on infrastructure. Kafka, RabbitMQ, SQS, Kinesis for messaging. Our consultants have shipped production work across all of these.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How is this different from hiring a senior backend engineer?",
    answer:
      "Senior backend engineers execute. Scalability consultants advise: profile the bottleneck, design the remediation, write the ADR, and either hand off to your team or stay through implementation. Many engagements pair our consultant with your in-house engineers for the actual fix work. If you only need execution, hire backend engineers or a software architect.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your consultants work in our timezone?",
    answer:
      "Yes. Our consultants in India routinely overlap with US Eastern, US Pacific, UK, EU, Australia, and Dubai timezones. Most engagements include at least 4 hours of daily overlap. For incident response work, we can structure on-call coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function ScalabilityConsultingPage() {
  const serviceSchema = generateServiceSchema(
    "Scalability Consulting",
    "Scalability consulting for growing companies. Performance audits, infrastructure scaling, database tuning, microservices migration, cloud cost optimization.",
    `${siteMetadata.url}/consulting/scalability-consulting/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Consulting", url: `${siteMetadata.url}/consulting/` },
    { name: "Scalability Consulting", url: `${siteMetadata.url}/consulting/scalability-consulting/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">SCALABILITY CONSULTING</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Scalability Consulting: Performance, Infrastructure, and Cost at Scale</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Hands-on consultants who have scaled production systems from 1K
            to 10M+ daily users. Performance audits, database scaling,
            microservices migration, cloud cost engineering. Profile first,
            prescribe second.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Scope a project</Button>
            <Button href="#engagement" variant="outline" size="lg">See engagement options</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why most scaling problems are not architecture problems</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              By the time a team calls in scalability consulting, they have
              usually already started designing a microservices migration or
              comparing managed Kafka providers. About half the time, the real
              problem is a missing database index, a connection pool sized at
              the default, an N+1 query buried in an ORM, or a hot read that
              should have been cached. The other half of the time, the
              architecture really is the problem, and the migration needs to
              happen.
            </p>
            <p>
              A scalability consultant worth hiring profiles first and
              prescribes second. They have shipped both small fixes that
              saved teams from rewrites and large architectural migrations
              that actually finished. They have been on-call for the
              incidents and they design with cost as a first-class
              constraint, not an afterthought.
            </p>
            <p>
              Every consultant we place is screened for this. For broader
              IT strategy work, see{" "}
              <a href="/consulting/it-consulting/" className="text-primary-600 hover:underline">IT consulting</a>.
              For specific architecture roles, see{" "}
              <a href="/hire/software-architects/" className="text-primary-600 hover:underline">software architects</a>.
              For cost-focused engagements, see{" "}
              <a href="/hire/cloud-cost-engineer/" className="text-primary-600 hover:underline">cloud cost engineer</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire scalability consultants from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a scalability consultant actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire a scalability consultant through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Common scalability engagements</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">A snapshot of recent customer scaling problems we have solved.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Audit, remediation, or fractional: which engagement?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Match the engagement shape to where you are in the scaling problem.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our scalability consultants.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about scalability consulting</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Hitting a scale wall?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us what's breaking and we will scope an engagement within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Start a conversation</Button>
        </div>
      </section>
    </>
  );
}
