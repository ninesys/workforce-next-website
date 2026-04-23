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
  title: "Hire FastAPI Developers from India",
  description:
    "Hire pre-vetted FastAPI developers from India. Pydantic, SQLAlchemy, async Python, WebSocket, background tasks, OAuth2, and OpenAPI. SethAI-screened for skills and longevity.",
  keywords: [
    "hire FastAPI developers India",
    "FastAPI Python developers",
    "Pydantic developers",
    "async Python developers India",
    "Python API developers",
    "FastAPI staff augmentation",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire FastAPI Developers from India",
    description:
      "Hire pre-vetted FastAPI developers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/fastapi-developers/`,
  },
};

const skills = [
  "FastAPI",
  "Pydantic",
  "SQLAlchemy",
  "Async Python",
  "WebSocket",
  "Background Tasks",
  "OAuth2",
  "OpenAPI",
];

const whyPoints = [
  {
    title: "FastAPI specialists, not Django generalists",
    description:
      "Our developers chose FastAPI for a reason. They understand async Python, dependency injection, and type-driven development. They build APIs that are fast, well-documented, and easy to maintain.",
  },
  {
    title: "Production API experience",
    description:
      "Authentication, rate limiting, background jobs, WebSocket connections, database migrations. Our engineers have built and operated FastAPI services in production at scale.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get developers who stay and build context over time.",
  },
  {
    title: "AI-ready backend skills",
    description:
      "FastAPI is the default backend for LLM applications. Our developers understand how to build serving layers for ML models, streaming responses, and async inference pipelines.",
  },
];

const responsibilities = [
  "Designing Pydantic models for request and response validation, including nested models, custom validators, and computed fields",
  "Building async endpoints that handle thousands of concurrent connections without blocking the event loop",
  "Setting up dependency injection for database sessions, authentication, rate limiting, and feature flags",
  "Integrating SQLAlchemy or Tortoise ORM with Alembic migrations and connection pooling",
  "Implementing OAuth2, JWT, and API key authentication with role-based access control",
  "Building WebSocket endpoints for real-time features and streaming LLM responses",
  "Running background jobs with Celery, ARQ, or FastAPI's built-in BackgroundTasks",
  "Generating and maintaining OpenAPI documentation that non-technical stakeholders can actually read",
  "Writing pytest and httpx test suites with fixtures, mocks, and coverage reporting",
  "Profiling and optimizing endpoints with tools like py-spy, tracing, and structured logging",
];

const whenToHire = [
  {
    scenario: "Building an AI or LLM serving layer",
    recommendation: "Hire a dedicated FastAPI specialist",
    reason:
      "FastAPI is the de facto standard for LLM inference APIs in 2026. Streaming responses, async model calls, and token-level rate limiting all require deep async Python expertise that generalists rarely have.",
  },
  {
    scenario: "Migrating a Flask or Django REST Framework API",
    recommendation: "Hire a FastAPI specialist with migration experience",
    reason:
      "The sync-to-async transition breaks in subtle ways. ORMs behave differently, middleware patterns change, and testing strategies need rework. A generalist will ship bugs that take months to surface.",
  },
  {
    scenario: "Occasional API work alongside data or ML pipelines",
    recommendation: "A general Python engineer is usually fine",
    reason:
      "If APIs are a small part of a larger data or ML role, you do not need a FastAPI specialist. Any competent Python engineer can build simple CRUD endpoints with FastAPI in a few days.",
  },
  {
    scenario: "High-throughput public API serving mobile or third-party clients",
    recommendation: "Hire a FastAPI specialist",
    reason:
      "Production reliability at scale requires knowledge of connection pooling, circuit breakers, graceful shutdown, observability, and load testing. These are specialist concerns, not generalist ones.",
  },
];

const screeningSignals = [
  {
    signal: "Async and event loop correctness",
    detail:
      "Can the candidate explain why a blocking call inside an async function freezes the entire server? Do they reach for asyncio.gather when appropriate? We test this with real scenarios, not trivia.",
  },
  {
    signal: "Pydantic model design",
    detail:
      "Given a messy third-party payload, can the candidate design a Pydantic model that validates, coerces, and documents it cleanly? We look for judgment on when to use custom validators vs. preprocessing.",
  },
  {
    signal: "Dependency injection understanding",
    detail:
      "FastAPI's DI system is powerful but easy to misuse. We test whether candidates know the difference between request-scoped, application-scoped, and generator-based dependencies.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a FastAPI app with a memory leak, a subtle race condition, or a mis-configured middleware and ask them to find it. This filters out tutorial-only engineers.",
  },
  {
    signal: "API design judgment",
    detail:
      "Good FastAPI developers care about status codes, error envelopes, idempotency, versioning, and pagination. We ask candidates to critique a messy API spec and explain what they would change.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams needing senior guidance without a full-time budget.",
    includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously and needing integrated pod members.",
    includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Team pod",
    hours: "2 to 4 engineers",
    best: "Best for a feature, migration, or new product that needs a self-contained squad.",
    includes: "Tech lead plus 1 to 3 engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your API architecture, Python ecosystem, and what kind of developer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for FastAPI depth, async Python experience, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their API design thinking, testing approach, and working style.",
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
    question: "How much does it cost to hire a FastAPI developer in India?",
    answer:
      "Mid-level FastAPI developers in India typically cost between 3,500 and 6,000 USD per month for full-time engagement, depending on experience and production track record. Senior engineers with AI or LLM serving experience range from 6,000 to 9,000 USD per month. At Workforce Next, pricing includes an engineering manager, context documentation, and backup coverage, which most competitors charge separately for.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How is FastAPI different from Django and Flask?",
    answer:
      "FastAPI is async-native, built on Starlette and Pydantic, which makes it significantly faster for I/O-bound workloads like LLM serving, WebSockets, and high-concurrency APIs. Django is a full-stack framework with its own ORM, admin, and template system, better suited for traditional web apps. Flask is sync and minimalist, good for simple services but lacks FastAPI's automatic validation, OpenAPI generation, and async support. A FastAPI developer needs different instincts than a Django developer, which is why screening for the right specialization matters.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your FastAPI developers work in my timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For companies in US Pacific, we can arrange engineers who work a shifted schedule to cover standups and afternoon collaboration windows.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What AI and LLM projects have your FastAPI developers worked on?",
    answer:
      "Our FastAPI engineers have built LLM serving layers with streaming token responses, RAG pipelines integrating Pinecone and pgvector, agent orchestration backends, multi-tenant AI chat APIs, and inference gateways that route between OpenAI, Anthropic, and self-hosted models. Because FastAPI is the default choice for production LLM infrastructure, nearly every senior Python engineer we place has shipped AI-adjacent work in the last 18 months.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How long does it take to hire a FastAPI developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened FastAPI engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your developers know modern deployment tooling like Docker, Kubernetes, and AWS Lambda?",
    answer:
      "Yes. All our FastAPI engineers ship with Docker fluency, and most have production experience with Kubernetes, AWS ECS, or AWS Lambda via Mangum. For serverless FastAPI workloads we also screen for cold-start optimization and ASGI adapter experience. If your infrastructure is opinionated, we match engineers whose background aligns with your stack rather than forcing a fit.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireFastAPIDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire FastAPI Developers from India",
    "Hire pre-vetted FastAPI developers from India. Pydantic, SQLAlchemy, async Python, WebSocket, OAuth2. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/fastapi-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "FastAPI Developers",
      url: `${siteMetadata.url}/hire/fastapi-developers/`,
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
            HIRE FASTAPI DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire FastAPI Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted Python engineers who build fast, type-safe APIs with
            FastAPI and Pydantic. Screened by SethAI for technical depth and
            long-term fit.
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
            Why FastAPI talent is suddenly hard to find
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              FastAPI has quietly become the default backend framework for a
              generation of Python services. It powers LLM serving layers at AI
              startups, replaces aging Flask codebases at mid-market companies,
              and sits behind real-time features that Django never fit cleanly.
              The framework itself is easy to pick up. Running it in production
              is not.
            </p>
            <p>
              A FastAPI developer worth hiring is different from a generalist
              Python engineer in specific ways. They think in async by default,
              reach for Pydantic before dictionaries, design dependency
              injection trees instead of global state, and know how to keep an
              event loop healthy under load. These instincts take years to
              build, and they are precisely what gets skipped in the typical
              bootcamp or algorithm screen.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not pre-filtered on
              LinkedIn keywords. It is evaluated on the depth of production
              FastAPI work, the quality of async reasoning, and the signals
              that predict whether someone will still be shipping for you in
              two years.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire FastAPI developers from Workforce Next
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

      {/* What a FastAPI developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a FastAPI developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a FastAPI developer through Workforce Next, here is the work they
            take ownership of on a modern Python backend:
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
            Not every Python role needs a FastAPI specialist. Here is how we
            help customers decide before they start spending on the wrong
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
            Three ways to work with our FastAPI engineers. Every engagement
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
            Common questions about hiring FastAPI developers
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
            Ready to hire FastAPI developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your Python backend and we will match you with the
            right developers within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
