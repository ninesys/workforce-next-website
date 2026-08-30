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
  title: "Hire Backend Engineers from India",
  description:
    "Hire pre-vetted backend engineers from India. FastAPI, Node.js, Go, PostgreSQL, Redis, Docker, Kubernetes, and more. SethAI-screened for skills and longevity.",
  keywords: [
    "hire backend engineers India",
    "hire nodejs developer",
    "hire node.js developer",
    "hire FastAPI developers India",
    "Node.js developers India",
    "Go developers India",
    "backend staff augmentation India",
    "microservices developers",
  ],
  openGraph: {
    ...ogDefaults("/hire/backend-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire Backend Engineers from India",
    description:
      "Hire pre-vetted backend engineers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/backend-engineers/`,
  },
};

const skills = [
  "FastAPI",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "API Design",
  "Microservices",
  "gRPC",
];

const whyPoints = [
  {
    title: "Systems thinkers, not script writers",
    description:
      "Our backend engineers design APIs, manage databases, and build services that handle real traffic. They think about failure modes, not just happy paths.",
  },
  {
    title: "Multi-language, multi-framework",
    description:
      "FastAPI, Node.js, Go. Our engineers pick the right tool for the job and have shipped production services across multiple backend stacks. No religion, no single-tool loyalty.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. Backend systems reward engineers who stay and understand them deeply over time.",
  },
  {
    title: "DevOps-aware engineering",
    description:
      "Docker, Kubernetes, CI/CD, monitoring. Our backend engineers deploy and operate what they build. No throwing code over the wall and hoping for the best.",
  },
];

const responsibilities = [
  "Designing REST and GraphQL APIs with clear contracts, versioning strategy, and thoughtful error envelopes",
  "Building services in FastAPI, Node.js, NestJS, Go, or whichever language fits your stack and constraints",
  "Modeling PostgreSQL schemas with indexes, partitioning, and zero-downtime migration strategies",
  "Designing caching layers with Redis, Memcached, or in-process caches that actually reduce load without introducing stale-data bugs",
  "Implementing authentication (OAuth2, OIDC, JWT, API keys) with proper rotation, revocation, and audit logging",
  "Building background job systems with Celery, BullMQ, Temporal, or Asynq for durable async work",
  "Containerizing services with Docker and deploying to Kubernetes, ECS, or serverless platforms like AWS Lambda",
  "Setting up CI/CD pipelines with automated tests, preview environments, and safe rollback strategies",
  "Instrumenting observability with Prometheus, Grafana, Sentry, or OpenTelemetry so on-call engineers can debug fast",
  "Profiling performance bottlenecks across application code, database queries, and network paths",
];

const whenToHire = [
  {
    scenario: "You are building a new product or microservice",
    recommendation: "Hire a senior backend engineer",
    reason:
      "Early architectural decisions compound. API design, database schema, and deployment patterns get baked into every later choice. A senior backend engineer sets the foundation so the next year of shipping is not fighting the framework.",
  },
  {
    scenario: "You need to scale an existing service under load",
    recommendation: "Hire a backend engineer with SRE instincts",
    reason:
      "Scaling is about profiling, caching strategy, database tuning, and architectural surgery. A generalist will add more instances and hope. A specialist will measure, find the real bottleneck, and fix it.",
  },
  {
    scenario: "You are building a small internal tool or admin panel",
    recommendation: "A full-stack engineer is usually fine",
    reason:
      "For internal tools where traffic is low and complexity is bounded, a full-stack hire with decent backend skills is cheaper and faster than a specialist. Reserve backend specialists for production systems that really need them.",
  },
  {
    scenario: "You are migrating from monolith to microservices",
    recommendation: "Hire a backend engineer with distributed systems depth",
    reason:
      "Microservices migrations are where junior teams get burned. Network partitions, distributed transactions, service discovery, and observability all become real problems. A specialist who has done this before will save you multiple quarters of rework.",
  },
];

const screeningSignals = [
  {
    signal: "API design judgment",
    detail:
      "Status codes, pagination, idempotency, versioning, error envelopes. We ask candidates to critique a messy API spec and explain what they would change. Strong answers show taste and production experience. Weak ones show tutorial-level instincts.",
  },
  {
    signal: "Database and query awareness",
    detail:
      "We give candidates a slow query and ask them to explain why it is slow and how to fix it. Strong candidates reach for EXPLAIN, indexes, and schema changes. Weak ones suggest caching as the first response.",
  },
  {
    signal: "Concurrency and async correctness",
    detail:
      "Race conditions, deadlocks, event loops, goroutines. We test whether candidates know why a naive implementation breaks under load and how to fix it without hand-waving.",
  },
  {
    signal: "Deployment and operational thinking",
    detail:
      "Blue-green deploys, graceful shutdowns, readiness probes, zero-downtime migrations. We screen for engineers who have been on call and know what it takes to ship safely at 3 a.m.",
  },
  {
    signal: "Security instincts",
    detail:
      "SQL injection, SSRF, auth leaks, rate limiting, CORS. We ask candidates to review a risky endpoint and spot the issues. Good backend engineers see these instinctively. Weak ones need a checklist.",
  },
  {
    signal: "Cross-language pragmatism",
    detail:
      "We favor engineers who have shipped in at least two backend languages and can explain tradeoffs honestly. Single-language zealots often struggle on teams that use the right tool for each job.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams needing senior backend guidance without a full-time commitment.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously and needing an embedded backend specialist.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Backend pod",
    hours: "2 to 4 engineers",
    best: "Best for a new service, migration, or platform rewrite that needs a self-contained squad.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your backend stack, system architecture, and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for technical depth, ownership signals, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess system design ability, coding style, and working approach.",
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
    question: "How much does it cost to hire a backend engineer in India?",
    answer:
      "Mid-level backend engineers in India typically cost between 3,500 and 6,500 USD per month for full-time engagement. Senior engineers with production scale experience and distributed systems depth range from 6,500 to 9,500 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do I hire a Node.js developer specifically?",
    answer:
      "The same intake process. Tell us you want a Node.js developer and SethAI matches engineers whose production track record is Node-heavy: Express, Fastify, NestJS, Bun, real-time features, TypeScript end-to-end, edge deployments. Senior Node.js developers from India typically cost between 5,500 and 8,500 USD per month all-in. The shortlist comes back in 48 hours and you start with a one-week paid trial.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Which backend language should I choose for a new project?",
    answer:
      "Choose Node.js/TypeScript if your team is already TypeScript end-to-end or you are shipping real-time features. Choose Python (FastAPI) if your backend touches AI, ML, data pipelines, or you need async Python. Choose Go if you need low-latency services, high concurrency, or you are building infrastructure and want strong deployment binaries. Most of our engineers are comfortable in at least two of these and will recommend based on your constraints.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your backend engineers know Kubernetes and DevOps?",
    answer:
      "Yes. Every backend engineer we place ships with Docker fluency, and most have production Kubernetes experience across EKS, GKE, or self-managed clusters. For teams without dedicated SREs, our senior backend engineers set up CI/CD, observability, and incident response. If your infrastructure is opinionated, we match engineers whose background aligns rather than forcing a fit.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your backend engineers build APIs for mobile and third-party clients?",
    answer:
      "Yes. Production API work is the bread and butter of backend engineering. Our engineers have shipped REST, GraphQL, and gRPC APIs consumed by iOS, Android, web, and external partner applications. They understand versioning, rate limiting, pagination, authentication, and the operational concerns that matter when someone else depends on your API contract.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your backend engineers work in my timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover morning standups and afternoon pair sessions.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a backend engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened backend engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireBackendEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Backend Engineers from India",
    "Hire pre-vetted backend engineers from India. FastAPI, Node.js, Go, PostgreSQL, Redis, Docker, Kubernetes. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/backend-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Backend Engineers",
      url: `${siteMetadata.url}/hire/backend-engineers/`,
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
            HIRE BACKEND ENGINEERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Backend Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build robust APIs, scalable services, and
            reliable infrastructure. Screened by SethAI for technical depth and
            long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work/" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What makes a real backend engineer worth hiring
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Every engineer claims backend experience on a resume. The gap
              between someone who can wire up a REST endpoint and someone who
              can design a service that survives production traffic, database
              failovers, and 2 a.m. incidents is enormous. Hiring the wrong
              backend engineer is how teams end up with systems that work in
              staging and page the on-call every Friday night.
            </p>
            <p>
              A genuine backend engineer thinks in failure modes. They know
              why a query is slow before they write it, why a cache can
              introduce bugs worse than the ones it solves, and why a
              migration needs to be written twice before it ships. They have
              been on call, shipped zero-downtime migrations, and debugged
              incidents that nobody else on the team understood.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              framework keywords. It is evaluated on depth across systems
              design, API quality, database pragmatism, and the signals that
              predict whether someone will still be shipping reliably for you
              in two years.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire backend engineers from Workforce Next
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

      {/* What a backend engineer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a backend engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a backend engineer through Workforce Next, here is the work they
            take ownership of on a production system:
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

      {/* Node.js focused section */}
      <section
        id="hire-nodejs-developer"
        className="section-padding bg-white dark:bg-dark-900 border-t border-dark-50 dark:border-dark-800"
      >
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Hire Node.js developers from India
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Node.js is the default backend choice for product teams that
              already write TypeScript on the frontend, for real-time features
              that need event-driven concurrency, and for any team that wants
              one language across the stack so a backend engineer can also
              read and reason about the React side. We hire Node.js developers
              for that profile specifically: engineers who treat the runtime
              as a first-class production environment, not just a way to spin
              up a quick API.
            </p>
            <p>
              The frameworks our Node.js engineers ship in production: Express
              for the simplest services, Fastify for performance-sensitive
              APIs, NestJS for opinionated multi-team monoliths, and Hono or
              Bun for edge and serverless deployments. They are fluent in
              async correctness, event-loop pitfalls, structured logging, and
              the operational concerns (graceful shutdown, signal handling,
              memory profiling) that separate a hobby Node service from one
              that runs at scale.
            </p>
            <p className="font-semibold text-dark-900 dark:text-dark-50">
              Typical Node.js deliverables we ship in the first 90 days:
            </p>
            <ul className="space-y-2">
              {[
                "Production REST or GraphQL APIs in Express, Fastify, or NestJS with proper auth, rate limiting, and structured logging",
                "Real-time services using WebSockets, Server-Sent Events, or Socket.IO for chat, notifications, and live dashboards",
                "Background job systems with BullMQ, Agenda, or Temporal for durable async work",
                "TypeScript-first codebases with end-to-end type safety from database to client via Prisma, Drizzle, or Kysely",
                "Edge and serverless functions on Vercel, Cloudflare Workers, or AWS Lambda with cold-start awareness baked in",
                "Migration from JavaScript to TypeScript without freezing feature work",
              ].map((item) => (
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
            <p>
              If your stack is more Python or Go than Node, the same engineering
              manager will match you to those engineers instead. We do not push
              Node where it does not fit. The point is to give you the right
              backend engineer for the work, not to sell a framework.
            </p>
          </div>
        </div>
      </section>

      {/* When to hire a specialist vs generalist */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Backend specialist or full-stack engineer: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every project needs a backend specialist. Here is how we help
            customers decide before they spend on the wrong profile.
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

      {/* Pricing and engagement models */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our backend engineers. Every engagement
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
            Common questions about hiring backend engineers
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
            Ready to hire backend engineers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your backend architecture and we will match you with
            the right engineers within 48 hours.
          </p>
          <Button href="/contact/" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
