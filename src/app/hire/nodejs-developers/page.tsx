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
  title: "Hire Node.js Developers from India",
  description:
    "Hire pre-vetted Node.js developers from India. Express, NestJS, Fastify, TypeScript, real-time, microservices, and serverless. SethAI-screened for skills and longevity.",
  keywords: [
    "hire Node.js developers",
    "hire Node.js developers India",
    "Node.js engineers",
    "NestJS developers",
    "Express.js developers",
    "TypeScript Node developers",
    "Node.js microservices developers",
    "Node.js staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/nodejs-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Node.js Developers from India",
    description:
      "Pre-vetted Node.js engineers for enterprise APIs, real-time, and microservices. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/nodejs-developers/`,
  },
};

const skills = [
  "Node.js 20 LTS",
  "TypeScript",
  "NestJS",
  "Express.js",
  "Fastify",
  "GraphQL",
  "WebSockets",
  "gRPC",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
];

const whyPoints = [
  {
    title: "Node.js specialists, not generic JavaScript devs",
    description:
      "Our engineers think in event loops, streams, and back-pressure. They know when to reach for worker threads, when clustering helps, and when the bottleneck is actually the database, not Node.",
  },
  {
    title: "Production experience at enterprise scale",
    description:
      "Real-time chat, payment APIs, BFF layers, microservices on Kubernetes, serverless on Lambda. The engineers we place have shipped Node.js workloads handling millions of requests per day.",
  },
  {
    title: "TypeScript-first, by default",
    description:
      "Every senior we place writes strict TypeScript. Interface-driven design, generics where they help, and the discipline to keep types honest as the codebase grows.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, communication, and career fit. You get developers who stay long enough to own the architecture, not contractors who churn at month four.",
  },
];

const responsibilities = [
  "Designing REST and GraphQL APIs in NestJS, Express, or Fastify with proper versioning, error envelopes, and OpenAPI contracts",
  "Building real-time features with WebSockets, Server-Sent Events, or Socket.io for chat, notifications, dashboards, and collaborative editing",
  "Implementing authentication and authorization with JWT, OAuth2, session-based auth, and role-based access control",
  "Architecting microservices that communicate over gRPC, message queues (Kafka, RabbitMQ, SQS), or event buses, with circuit breakers and retries",
  "Setting up async work pipelines using BullMQ, Temporal, or Lambda for jobs, schedulers, and event-driven workflows",
  "Integrating PostgreSQL, MongoDB, and Redis with connection pooling, read replicas, and migration tooling like Prisma, Drizzle, or TypeORM",
  "Profiling production issues with clinic.js, 0x, heap snapshots, and APM tools like Datadog, New Relic, or OpenTelemetry",
  "Hardening Node.js services against OWASP Top 10 risks, including input validation, prototype pollution, SSRF, and supply-chain risks in npm",
  "Containerizing services with Docker, deploying on Kubernetes or serverless (Lambda, Cloud Run), and wiring up CI/CD with GitHub Actions",
  "Writing pragmatic test suites with Vitest, Jest, and Supertest, with integration tests against real databases via Testcontainers",
];

const whenToHire = [
  {
    scenario: "Building an API-heavy SaaS or fintech backend",
    recommendation: "Hire a dedicated Node.js specialist",
    reason:
      "REST and GraphQL APIs, real-time features, third-party integrations, and webhook processing are exactly where Node.js wins. A specialist will design contracts, error semantics, and observability that survive scale.",
  },
  {
    scenario: "Adding real-time features to an existing product",
    recommendation: "Hire a Node.js specialist with WebSocket experience",
    reason:
      "Real-time at scale is harder than it looks. Sticky sessions, horizontal scaling, presence systems, and back-pressure handling all require production scars, not tutorials.",
  },
  {
    scenario: "Migrating a legacy PHP, Rails, or Express monolith to NestJS or microservices",
    recommendation: "Hire a Node.js specialist with migration experience",
    reason:
      "Migrations break in subtle ways. Auth flows, background jobs, feature parity, and rollout strategy need someone who has done this before, not someone learning on your codebase.",
  },
  {
    scenario: "Occasional API endpoints next to a primarily Python or Java stack",
    recommendation: "A general full-stack engineer is usually fine",
    reason:
      "If Node.js is a small slice of a larger backend, you do not need a specialist. Any competent JS engineer can ship Express endpoints in a few days.",
  },
  {
    scenario: "BFF or edge layer for a Next.js or React frontend",
    recommendation: "Hire a Node.js specialist with frontend empathy",
    reason:
      "BFFs sit between teams. The right engineer understands frontend data needs, caches sensibly, and avoids becoming a rubber-stamp proxy that adds latency without value.",
  },
];

const screeningSignals = [
  {
    signal: "Event loop and async correctness",
    detail:
      "Can the candidate explain why a CPU-bound function freezes every request? Do they know when to use Promise.all vs sequential awaits, when to reach for worker threads, and how setImmediate differs from setTimeout(0)?",
  },
  {
    signal: "TypeScript depth, not just syntax",
    detail:
      "We test interface design, generics, conditional types, and discriminated unions. We also check whether the candidate uses any as an escape hatch or holds the line on type safety.",
  },
  {
    signal: "Framework judgment",
    detail:
      "Express vs NestJS vs Fastify is a real architectural choice. We ask candidates to defend their pick for a given scenario and check whether they can explain interceptors, middleware, decorators, and DI tradeoffs.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a Node.js service with a memory leak, a connection pool exhaustion bug, or a wrongly-configured cluster and ask them to find it. This filters out engineers who have only built tutorial apps.",
  },
  {
    signal: "API design instincts",
    detail:
      "Status codes, idempotency, pagination cursors, error envelopes, rate limiting, and versioning. Strong candidates have opinions and reasons. Weak ones default to whatever the framework generates.",
  },
  {
    signal: "Security awareness",
    detail:
      "Input validation with zod or class-validator, CSRF, SSRF, prototype pollution, JWT pitfalls, and npm supply-chain hygiene. We test whether the candidate has internalized OWASP basics or just heard of them.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams needing senior Node.js guidance without a full-time budget.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously and needing integrated pod members.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Team pod",
    hours: "2 to 5 engineers",
    best: "Best for a feature, migration, or new product that needs a self-contained Node.js squad.",
    includes:
      "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your Node.js stack, traffic shape, and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for Node.js depth, TypeScript, and communication fit. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Test API design thinking, async reasoning, and working style.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the developer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a Node.js developer from India?",
    answer:
      "Mid-level Node.js developers from India cost between USD 4,000 and 6,500 per month for full-time engagement. Senior engineers with NestJS, microservices, or real-time experience range from USD 5,500 to 8,500 per month. Pricing includes engineering manager oversight, context documentation, and PTO backup that most competitors charge separately for.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "When should we choose Node.js over Java, Go, or Python for an enterprise backend?",
    answer:
      "Node.js wins when your workload is I/O bound, your frontend is JavaScript or TypeScript, you need real-time features, or you want fast iteration on APIs and BFFs. Choose Java or Go when the workload is CPU heavy, when you need single-process throughput at the lowest latency, or when an existing JVM ecosystem is too expensive to abandon.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your Node.js engineers use NestJS or stay on plain Express?",
    answer:
      "Most senior engineers we place default to NestJS for new enterprise work because of its DI container, modular structure, and first-class TypeScript. Express remains common in legacy services and BFF layers. Fastify shows up in performance-critical APIs. We match the engineer to the framework you already run, not the one they prefer in isolation.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Node.js developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers we arrange engineers who shift their schedule to cover standups and afternoon collaboration windows.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What enterprise Node.js projects have your engineers shipped?",
    answer:
      "Our engineers have built payments APIs handling millions of transactions per month, real-time trading dashboards, multi-tenant SaaS backends, IoT ingestion pipelines on Kafka, BFFs powering Next.js apps, and serverless services on AWS Lambda. Most have integrated Stripe, Twilio, AWS, GCP, and the major identity providers.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do you screen for production-ready Node.js skills, not just tutorials?",
    answer:
      "We use SethAI plus a 5-stage human screen: resume review for production projects, a 60-minute coding assessment building a real API, a system design conversation, a production debugging exercise on a broken service, and a culture and communication interview. Most candidates fail the debugging step, which is the point.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to onboard a Node.js developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist in 48 hours. Full ramp on your codebase typically takes 2 to 4 weeks, with first meaningful PRs landing in week 1 or 2 depending on architecture complexity.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your Node.js engineers know modern deployment tooling?",
    answer:
      "Yes. All engineers ship with Docker fluency. Most have production experience with Kubernetes, AWS ECS, AWS Lambda, GCP Cloud Run, and CI/CD on GitHub Actions or GitLab. For serverless workloads we screen specifically for cold-start optimization, bundling with esbuild, and Lambda Layers usage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireNodejsDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Node.js Developers from India",
    "Hire pre-vetted Node.js developers from India. Express, NestJS, Fastify, TypeScript, real-time, microservices, and serverless. SethAI-screened.",
    `${siteMetadata.url}/hire/nodejs-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Node.js Developers",
      url: `${siteMetadata.url}/hire/nodejs-developers/`,
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
            HIRE NODE.JS DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Node.js Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build enterprise-grade Node.js services in
            NestJS, Express, and Fastify. Real-time, microservices, serverless,
            and BFFs. Screened by SethAI for technical depth and long-term fit.
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
            Why Node.js is the default for enterprise APIs in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Node.js quietly took over the enterprise backend over the last
              five years. It powers payments APIs at fintechs, real-time
              dashboards at SaaS companies, BFF layers at every Next.js shop,
              and the integration glue that holds modern product stacks
              together. The runtime is easy to start with. Running it cleanly
              in production at enterprise scale is not.
            </p>
            <p>
              A Node.js engineer worth hiring is different from a generalist
              JavaScript developer in specific ways. They think in async by
              default, design with TypeScript interfaces before code, reach for
              NestJS or Fastify when complexity demands it, know how to keep an
              event loop healthy under load, and understand the npm
              supply-chain risks they inherit on every install. These instincts
              take years to build, and they are exactly what gets skipped in a
              typical algorithm screen.
            </p>
            <p>
              Every engineer we place is screened by SethAI for these
              instincts. The shortlist you receive is not pre-filtered on
              LinkedIn keywords. It is evaluated on the depth of production
              Node.js work, the quality of async reasoning, and the signals
              that predict whether someone will still be shipping for you in
              two years.
            </p>
            <p>
              For a deeper view of what these engineers do day-to-day, read{" "}
              <a
                href="/blog/nodejs-developer-role-enterprise-applications-2026/"
                className="text-primary-600 hover:underline"
              >
                the role of a Node.js developer in enterprise applications
              </a>
              . For a hiring-cost benchmark, see our{" "}
              <a
                href="/blog/hire-nodejs-developers-from-india-2026/"
                className="text-primary-600 hover:underline"
              >
                Node.js hiring guide for India
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire Node.js developers from Workforce Next
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

      {/* What a Node.js developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What an enterprise Node.js developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a Node.js developer through Workforce Next, here is the work they
            take ownership of on a modern enterprise backend:
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

      {/* When to hire a specialist vs generalist */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Specialist or generalist: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every backend role needs a Node.js specialist. Here is how we
            help customers decide before they spend on the wrong profile.
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
                className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
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
            Three ways to work with our Node.js engineers. Every engagement
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

      {/* Further reading */}
      <section className="section-padding bg-white dark:bg-dark-900 border-t border-dark-50 dark:border-dark-700">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Further reading on enterprise Node.js
          </h2>
          <ul className="space-y-3 text-dark-600 dark:text-dark-200 leading-relaxed">
            <li>
              <a
                href="/blog/nodejs-developer-role-enterprise-applications-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                The role of a Node.js developer in enterprise applications
              </a>:
              what these engineers actually do, from APIs to real-time to
              integrations.
            </li>
            <li>
              <a
                href="/blog/nodejs-vs-java-vs-go-enterprise-backend-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Node.js vs Java vs Go for enterprise backends
              </a>:
              when each runtime wins, and when the choice does not matter.
            </li>
            <li>
              <a
                href="/blog/expressjs-vs-fastify-vs-nestjs-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Express.js vs Fastify vs NestJS
              </a>:
              honest framework comparison, when each one wins, and how to pick.
            </li>
            <li>
              <a
                href="/blog/nodejs-microservices-architecture-enterprise-guide-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Node.js microservices architecture for enterprise teams
              </a>:
              NestJS, gRPC, queues, observability, and the patterns that hold
              up.
            </li>
            <li>
              <a
                href="/blog/nodejs-performance-scaling-production-checklist-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Node.js performance and scaling: a production checklist
              </a>:
              clustering, worker threads, memory leaks, and p99 latency.
            </li>
            <li>
              <a
                href="/blog/nodejs-security-enterprise-checklist-owasp-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Node.js security checklist for enterprise teams
              </a>:
              OWASP-aligned controls, JWT pitfalls, prototype pollution, and
              npm hygiene.
            </li>
            <li>
              <a
                href="/blog/hire-nodejs-developers-from-india-2026/"
                className="text-primary-600 hover:underline font-semibold"
              >
                Hire Node.js developers from India: 2026 guide
              </a>:
              costs, screening, and tradeoffs vs other talent pools.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring Node.js developers
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
            Ready to hire Node.js developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your Node.js stack and we will match you with the
            right engineers within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
