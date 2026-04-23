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
  title: "Hire Full Stack Developers from India (Node.js, Python, React, AWS)",
  description:
    "Hire pre-vetted full stack developers from India skilled in Node.js, Python, React, and AWS. End-to-end engineers who ship features across frontend, backend, and cloud. SethAI-screened for technical depth and longevity.",
  keywords: [
    "hire full stack developers India",
    "full stack developer Node.js React",
    "Python React full stack developers",
    "AWS full stack engineers",
    "MERN stack developers India",
    "full stack developer staff augmentation",
    "hire remote full stack engineers",
  ],
  openGraph: {
    title: "Hire Full Stack Developers from India",
    description:
      "Pre-vetted full stack engineers skilled in Node.js, Python, React, and AWS. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/fullstack-developers/`,
  },
};

const skills = [
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Redis",
];

const whyPoints = [
  {
    title: "Fluent across the stack, not jack-of-all-trades",
    description:
      "Our full stack engineers are senior on at least one layer (usually backend) and strong enough to ship across the rest. They write idiomatic Node.js or Python, ship accessible React, and understand how a request actually travels through AWS.",
  },
  {
    title: "End-to-end ownership",
    description:
      "The best full stack engineers own features from user story to production log. Ours are screened for that instinct. They write their own migrations, their own deploy pipelines, and their own monitoring.",
  },
  {
    title: "Cloud-native by default",
    description:
      "AWS fluency is not optional. Our full stack engineers know Lambda, ECS, RDS, S3, CloudFront, and IAM well enough to design and operate them. Most have shipped at least one production system on AWS without a dedicated DevOps team.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get engineers who stay and build real context, not contractors who churn after six months.",
  },
];

const responsibilities = [
  "Designing and shipping React and Next.js frontends with accessible components, proper state management, and real loading and error states",
  "Building REST and GraphQL APIs in Node.js (Express, NestJS, Fastify) or Python (FastAPI, Django REST Framework) with auth, validation, and pagination",
  "Modeling PostgreSQL schemas, writing Prisma or SQLAlchemy queries, and managing migrations without taking production down",
  "Provisioning AWS infrastructure with the console or Terraform: Lambda, ECS Fargate, RDS, S3, CloudFront, SQS, and SES",
  "Setting up CI/CD pipelines with GitHub Actions, including test runs, preview deploys, type checks, and automated rollbacks",
  "Integrating auth providers (Auth0, Cognito, Clerk), payment providers (Stripe), and third-party APIs with proper retries and idempotency",
  "Writing integration and end-to-end tests with Playwright, Cypress, Vitest, and pytest so regressions surface before customers find them",
  "Instrumenting observability with Sentry, Datadog, or OpenTelemetry — turning opaque failures into logs that on-call engineers can actually act on",
  "Optimizing performance across the stack: React rendering, database indexes, cache strategies, and CDN configuration",
  "Pairing with designers on interaction details and with ops on incident response, without needing a translator in either direction",
];

const whenToHire = [
  {
    scenario: "Early-stage startup shipping an MVP with a small team",
    recommendation: "Hire a full stack engineer",
    reason:
      "At 0 to 20 engineers, specialists create coordination overhead that slows you down. A strong full stack engineer will ship the frontend, backend, and AWS plumbing for a feature in the same sprint — and the handoffs you would otherwise pay for disappear.",
  },
  {
    scenario: "Scaling company with dedicated frontend and backend teams",
    recommendation: "Hire specialists, not full stack",
    reason:
      "Once you have team leads on either side, a full stack generalist often sits awkwardly in the middle. Depth wins at this stage: a React specialist, a backend specialist, and an SRE will each out-produce a full stack hire in their own domain.",
  },
  {
    scenario: "Feature teams that need to own a vertical slice",
    recommendation: "Hire full stack engineers for the pod",
    reason:
      "If your engineering org is structured around outcome-owning pods rather than layer-owning teams, full stack engineers are a force multiplier. One or two per pod can keep the pod self-sufficient on 80 percent of work.",
  },
  {
    scenario: "Migrating from monolith to services, or adding new platforms",
    recommendation: "Hire full stack engineers with infrastructure depth",
    reason:
      "Rewrites are where full stack pays off most. One engineer who can move a feature across React, Node.js, and AWS without tripping over handoffs ships migrations 2 to 3 times faster than a layered team with meetings at every boundary.",
  },
];

const screeningSignals = [
  {
    signal: "Real depth on at least one layer",
    detail:
      "We reject candidates who claim to be full stack but are shallow everywhere. Every engineer we place is demonstrably senior on backend or frontend, with strong working knowledge of the other. Generalism without depth is not something we will ship to you.",
  },
  {
    signal: "React performance and rendering fluency",
    detail:
      "Can the candidate explain why a component re-renders, when to reach for useMemo vs. stable refs, and how Next.js server and client components split? We test this with a real slow app and measure whether they can diagnose it.",
  },
  {
    signal: "API design and backend pragmatism",
    detail:
      "Status codes, pagination strategies, idempotency, versioning, migration safety. We ask candidates to critique a messy API spec and a risky migration plan. Strong answers show judgment; weak answers show they have only ever written tutorial-level code.",
  },
  {
    signal: "AWS cost awareness and operational instinct",
    detail:
      "We look for engineers who notice that a Lambda with a 1GB memory config is probably wrong, who know when RDS is cheaper than DynamoDB, and who have been woken up by a real AWS bill. Cost instincts are a strong proxy for production experience.",
  },
  {
    signal: "End-to-end debugging under pressure",
    detail:
      "We give candidates a broken production-style app and ask them to trace a bug from the browser through the API to the database and back. This filters out engineers who only know their own layer and fall apart when a problem crosses boundaries.",
  },
  {
    signal: "Communication and async discipline",
    detail:
      "Full stack engineers make more decisions alone than specialists do. We screen for clear written communication, good PR descriptions, and the judgment to escalate before a decision becomes expensive to reverse.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams that need senior end-to-end capacity but cannot commit to a full-time hire yet.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously who want a full stack engineer embedded in their pod.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Team pod",
    hours: "2 to 4 engineers",
    best: "Best for a new product, rewrite, or self-contained workstream that needs a cross-functional squad.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your product, your stack (Node.js or Python, React or Next.js, AWS or GCP), and what kind of engineer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for stack fluency, depth on your primary layer, AWS experience, and communication fit. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to candidates directly. Assess their end-to-end thinking, code review instincts, and working style on your actual problem space.",
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
    question:
      "How much does it cost to hire a full stack developer in India?",
    answer:
      "Mid-level full stack developers in India typically cost between 4,000 and 6,500 USD per month for full-time engagement. Senior engineers with AWS production experience and strong React and backend depth range from 6,500 to 10,000 USD per month. At Workforce Next, pricing includes an engineering manager, context documentation, and backup coverage, which most competitors bill for separately.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question:
      "Should I hire a Node.js or a Python full stack developer?",
    answer:
      "Choose Node.js if your team is already on TypeScript end-to-end, if you are shipping real-time features (chat, collaboration, live dashboards), or if your API surface is tightly coupled to frontend data shapes. Choose Python if you are doing AI, ML, data processing, or integrating with the Python ecosystem (LangChain, Pandas, scientific libraries). Our engineers typically specialize in one but can work fluently in the other, so you do not have to pre-commit before the first interview.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is included in the AWS experience you screen for?",
    answer:
      "Every full stack engineer we place has shipped production systems on AWS. The baseline covers Lambda, ECS Fargate, RDS (PostgreSQL and MySQL), S3, CloudFront, API Gateway, SQS, and IAM. Senior engineers usually add Terraform or CDK, multi-region deployments, VPC design, and cost optimization. We can also match engineers with GCP or Azure experience if your infrastructure is not AWS-first.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your full stack developers work in my timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover morning standups and afternoon pair sessions. Async-first workflows (good PR descriptions, Loom walkthroughs, Slack discipline) are part of how we train every engineer.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What kinds of products have your full stack developers built?",
    answer:
      "Typical engagements include B2B SaaS dashboards, internal tools and admin consoles, AI-powered applications with LLM-backed features, e-commerce and marketplace platforms, healthtech and fintech products with strict compliance requirements, and migrations from legacy monoliths to modern stacks. Most of our engineers have shipped at least one production system in each of these categories over their career.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a full stack developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened full stack engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireFullStackDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Full Stack Developers from India",
    "Hire pre-vetted full stack developers from India skilled in Node.js, Python, React, and AWS. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/fullstack-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Full Stack Developers",
      url: `${siteMetadata.url}/hire/fullstack-developers/`,
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
            HIRE FULL STACK DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Full Stack Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            End-to-end engineers who ship across Node.js, Python, React, and
            AWS. Pre-vetted by SethAI for technical depth, AWS production
            experience, and long-term fit.
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
            Why hiring a real full stack engineer is harder than it looks
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Every resume on LinkedIn claims full stack. Almost none of them
              are. The gap between an engineer who ships small React tweaks and
              calls it frontend work, and one who can actually own a feature
              from a Figma file through Node.js or Python services into AWS
              production, is enormous. Hiring the wrong kind of full stack
              engineer is how teams end up with React code that needs rewriting
              and AWS configurations that silently double your bill.
            </p>
            <p>
              A genuine full stack developer thinks in whole systems. They
              understand how a React render lands on a Node.js or FastAPI
              endpoint, which queries it triggers, what the RDS query plan
              looks like, and how CloudFront is caching the response. They have
              been on call, shipped their own migrations, and fixed their own
              production incidents. These instincts are built over years, and
              they are exactly what gets missed in a typical keyword-match
              hiring process.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              buzzwords. It is evaluated on depth across the stack, AWS
              production experience, and the signals that predict whether
              someone will still be shipping quality work for you in two years.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire full stack developers from Workforce Next
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

      {/* What a full stack developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a full stack developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a full stack developer through Workforce Next, here is the work
            they take ownership of on a modern Node.js, Python, React, and AWS
            product:
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
            Full stack or specialists: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Full stack engineers are not the right hire for every team. Here is
            how we help customers decide before they start spending on the
            wrong profile.
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
            Three ways to work with our full stack engineers. Every engagement
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
            Common questions about hiring full stack developers
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
            Ready to hire full stack developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your product and stack. We will match you with the
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
