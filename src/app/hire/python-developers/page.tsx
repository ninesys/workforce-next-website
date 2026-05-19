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
  title: "Hire Python Developers from India",
  description:
    "Hire pre-vetted Python developers from India. Django, FastAPI, Flask, async Python, data engineering, ML, automation. SethAI-screened for depth and longevity.",
  keywords: [
    "hire Python developers",
    "hire Python developers India",
    "Python engineers India",
    "Django developers",
    "Flask developers",
    "Python automation engineer",
    "Python data engineer",
    "Python ML engineer",
    "Python staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/python-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Python Developers from India",
    description:
      "Pre-vetted Python engineers for APIs, data, ML, and automation. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/python-developers/`,
  },
};

const skills = [
  "Python 3.12",
  "Django",
  "FastAPI",
  "Flask",
  "Async Python",
  "Pydantic",
  "SQLAlchemy",
  "Celery",
  "pandas",
  "PyTorch",
  "PostgreSQL",
  "AWS",
  "Docker",
  "pytest",
];

const whyPoints = [
  {
    title: "Python specialists, not generalists with Python on a resume",
    description:
      "Our engineers think in async by default, reach for type hints before docstrings, and know when the GIL actually matters. They have shipped Python in production at scale.",
  },
  {
    title: "Production track record across the Python stack",
    description:
      "Payments APIs in FastAPI, ML serving layers, Django admins, Celery pipelines, data engineering on Airflow and dbt, automation tooling. Real systems, not tutorials.",
  },
  {
    title: "Type-driven Python by default",
    description:
      "Type hints, mypy or pyright in CI, Pydantic models for IO boundaries. The senior Python engineers we place hold the type-safety line as a codebase grows.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership, communication, and career fit. You get Python engineers who stay long enough to own a service, not contractors who churn at month four.",
  },
];

const responsibilities = [
  "Designing FastAPI or Django REST endpoints with proper validation, error envelopes, OpenAPI docs, and async patterns",
  "Building Celery, ARQ, or Temporal pipelines for background jobs, schedulers, and event-driven workflows",
  "Integrating PostgreSQL and Redis with connection pooling, migrations via Alembic, and proper query patterns",
  "Shipping ML serving layers, streaming inference responses, and async model call patterns",
  "Implementing OAuth2, JWT, session-based auth, and role-based access control in Python services",
  "Writing pandas, polars, or PySpark transforms; building Airflow or Prefect DAGs for ETL pipelines",
  "Profiling production issues with py-spy, cProfile, and APM tools like Datadog or New Relic",
  "Hardening Python services against OWASP Top 10 risks, supply-chain risks in PyPI, and SSRF in webhook handlers",
  "Containerizing services with Docker, deploying on Kubernetes or AWS Lambda, wiring up CI/CD",
  "Writing pytest suites with fixtures, factory-boy, and integration tests against real databases via Testcontainers",
];

const whenToHire = [
  {
    scenario: "Building a data or ML pipeline backend",
    recommendation: "Hire a Python specialist with data engineering depth",
    reason:
      "Python is the default language for data and ML. Specialists know when to reach for pandas vs Polars vs Spark, how to design idempotent pipelines, and how to test transforms without flaking.",
  },
  {
    scenario: "Building an LLM serving or AI API backend",
    recommendation: "Hire a Python specialist with FastAPI and async experience",
    reason:
      "FastAPI is the de facto standard for LLM serving in 2026. Streaming responses, async model calls, and token-level rate limiting all need real async Python expertise.",
  },
  {
    scenario: "Modernizing a Django monolith into services",
    recommendation: "Hire a Python specialist with migration experience",
    reason:
      "Django sync-to-async migrations break in subtle ways. ORM behavior, middleware patterns, and testing strategies all shift. A generalist will ship bugs that surface months later.",
  },
  {
    scenario: "Occasional automation scripts next to a JS or Java stack",
    recommendation: "A general full-stack engineer is usually fine",
    reason:
      "If Python is a small slice of your stack, a generalist who can write a Flask endpoint or a glue script is enough. Save the specialist budget for real Python workloads.",
  },
];

const screeningSignals = [
  {
    signal: "Async and GIL correctness",
    detail:
      "Can the candidate explain why a CPU-bound function blocks an async event loop? Do they know when to use ProcessPoolExecutor vs ThreadPoolExecutor? Do they understand what the GIL actually prevents and what it does not?",
  },
  {
    signal: "Type system depth",
    detail:
      "We test typing.Protocol, generics, TypedDict, Literal, ParamSpec. Do they use mypy or pyright in CI? Do they hold the type-safety line or escape with cast and Any?",
  },
  {
    signal: "Pydantic and validation judgment",
    detail:
      "Given a messy third-party JSON payload, can the candidate design a Pydantic v2 model that validates, coerces, and documents it cleanly? Do they know when to use validators vs preprocessing?",
  },
  {
    signal: "Framework fluency",
    detail:
      "Django vs FastAPI vs Flask is a real architectural choice. We ask candidates to defend their pick for a scenario and check that they can explain dependency injection, middleware, and ORM tradeoffs.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a Python service with a memory leak, a connection pool exhaustion bug, or a wrongly-configured Celery worker and ask them to find it. This filters out tutorial-only engineers.",
  },
  {
    signal: "Packaging and dependency hygiene",
    detail:
      "pip, poetry, uv. Lockfile discipline. CVE response. Are they shipping a requirements.txt with pinned versions or guessing on every deploy?",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams needing senior Python guidance without a full-time budget.",
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
    best: "Best for a feature, migration, or new product that needs a self-contained Python squad.",
    includes:
      "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your Python stack, traffic shape, and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for Python depth, framework experience, and communication fit. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Test API design, async reasoning, and working style.",
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
    question: "How much does it cost to hire a Python developer from India?",
    answer:
      "Mid-level Python developers from India cost USD 4,000 to 6,500 per month for full-time engagement. Senior engineers with FastAPI, ML, or data engineering depth range from USD 5,500 to 8,500 per month. Pricing includes engineering manager oversight, context documentation, and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we use Django, FastAPI, or Flask?",
    answer:
      "Use Django for traditional web apps with admin, ORM, and templates baked in. Use FastAPI for async-native APIs, LLM serving, and modern type-driven backends. Use Flask for small services where you want minimal framework opinions. Most senior Python engineers we place are comfortable across all three.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your Python engineers comfortable with async Python?",
    answer:
      "Yes. Every senior we place defaults to async-native code in FastAPI and modern Python. We test async correctness explicitly: candidates must explain why blocking calls inside async functions freeze the event loop and demonstrate proper use of asyncio.gather, semaphores, and async context managers.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Python engineers work on AI and ML projects?",
    answer:
      "Yes. Most senior Python engineers we screen have shipped ML or LLM-adjacent work in the last 18 months: serving layers with FastAPI streaming, RAG pipelines with Pinecone or pgvector, agent backends, multi-tenant AI chat APIs, and inference gateways routing between OpenAI, Anthropic, and self-hosted models.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What modern tooling do your Python engineers use?",
    answer:
      "uv or poetry for dependency management, ruff for linting, mypy or pyright for typing, pytest with Testcontainers for integration tests, Pydantic v2 for IO validation, Alembic for migrations, and OpenTelemetry for observability. They ship with Docker and deploy on Kubernetes, AWS Lambda, or GCP Cloud Run.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Python developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap. For US Pacific customers we arrange engineers who shift their schedule to cover standups and afternoon collaboration.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to onboard a Python developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist in 48 hours. Full ramp on your codebase typically takes 2 to 4 weeks, with first meaningful PRs landing in week 1 or 2.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between hiring a Python developer and a data engineer?",
    answer:
      "A Python developer typically focuses on application code: APIs, services, automation. A data engineer specializes in pipelines, warehousing, and transforms (Airflow, dbt, Spark). Both use Python heavily but the day-to-day work differs. Tell us your scope and we will match the right profile.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HirePythonDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Python Developers from India",
    "Hire pre-vetted Python developers from India. Django, FastAPI, Flask, async Python, data engineering, ML. SethAI-screened.",
    `${siteMetadata.url}/hire/python-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Python Developers", url: `${siteMetadata.url}/hire/python-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE PYTHON DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Python Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship Python in production. FastAPI, Django,
            Flask, async, data engineering, and ML. Screened by SethAI for depth
            and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why Python is still the default for backends, data, and AI in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Python kept its lead because it sits at the intersection of three
              of the most important workloads in modern software: API backends,
              data pipelines, and machine learning. No other language touches
              all three with the same depth of library coverage. FastAPI made
              async-native Python competitive with Node.js for I/O-heavy APIs.
              Django remains the safest pick for a traditional web app. The data
              and ML ecosystem (pandas, PyTorch, Hugging Face) keeps Python
              non-negotiable for anyone building intelligent features.
            </p>
            <p>
              A Python engineer worth hiring in 2026 is different from a
              generalist with Python on their resume. They default to type
              hints, reach for Pydantic v2 at IO boundaries, know when async
              actually helps and when it adds noise, and care about packaging
              and dependency hygiene the same way they care about code. These
              instincts take years to build.
            </p>
            <p>
              Every engineer we place is screened by SethAI for these instincts.
              For broader context, read our{" "}
              <a href="/blog/ai-mvp-tech-stack-2026/" className="text-primary-600 hover:underline">AI MVP tech stack</a> or{" "}
              <a href="/hire/fastapi-developers/" className="text-primary-600 hover:underline">FastAPI developers</a> page if FastAPI is your primary need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire Python developers from Workforce Next
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a Python developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a Python developer through Workforce Next, here is the
            work they take ownership of on a modern Python stack:
          </p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Specialist or generalist: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every Python role needs a specialist. Here is how we help
            customers decide before they spend on the wrong profile.
          </p>
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

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">
                {skill}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our Python engineers. Every engagement
            includes an engineering manager, shared context documentation, and
            PTO backup coverage at no extra cost.
          </p>
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

      <section className="section-padding bg-white dark:bg-dark-900">
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

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring Python developers
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire Python developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your Python stack and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
