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
  title: "Hire AI & Agentic Developers from India",
  description:
    "Hire pre-vetted AI and agentic developers from India. LangChain, AutoGen, CrewAI, RAG pipelines, multi-agent systems, and more. SethAI-screened for skills and longevity.",
  keywords: [
    "hire AI developers India",
    "hire agentic developers",
    "LangChain developers India",
    "AutoGen developers",
    "CrewAI developers",
    "RAG pipeline developers",
    "multi-agent systems",
    "AI staff augmentation India",
  ],
  openGraph: {
    ...ogDefaults("/hire/ai-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire AI & Agentic Developers from India",
    description:
      "Hire pre-vetted AI and agentic developers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/ai-developers/`,
  },
};

const skills = [
  "LangChain",
  "AutoGen",
  "CrewAI",
  "RAG Pipelines",
  "Multi-Agent Systems",
  "OpenAI API",
  "Anthropic API",
  "Vector Databases",
  "Prompt Engineering",
  "Fine-Tuning",
  "Evaluation",
];

const whyPoints = [
  {
    title: "AI-native engineers, not generalists",
    description:
      "Our AI developers work exclusively on LLM-powered applications, agentic workflows, and retrieval systems. They ship production AI, not prototypes that break the moment real users arrive.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get developers who stay and build context over time, which matters more in AI than almost any other field.",
  },
  {
    title: "Deep experience with agentic frameworks",
    description:
      "From LangChain and CrewAI to custom multi-agent orchestration, our engineers have built and deployed real agentic systems for production workloads, not tutorial demos.",
  },
  {
    title: "Full pipeline capability",
    description:
      "Our developers handle the entire stack: embeddings, vector stores, retrieval, agents, tool use, evaluation, observability, and deployment. Not just the fun parts.",
  },
];

const responsibilities = [
  "Designing LLM applications with clear prompt contracts, structured outputs, and deterministic failure modes",
  "Building RAG pipelines end-to-end: ingestion, chunking, embedding, indexing, retrieval, re-ranking, and evaluation",
  "Orchestrating multi-agent systems with LangChain, LangGraph, CrewAI, or AutoGen, including handoff logic and state management",
  "Implementing tool use and function calling with schema validation, retry logic, and graceful degradation when a model misfires",
  "Integrating multiple model providers (OpenAI, Anthropic, Google, open-source via Ollama, vLLM, or AWS Bedrock) behind a consistent interface",
  "Building evaluation harnesses that measure quality, cost, latency, and regression across prompt and model changes",
  "Managing token cost, caching strategies, streaming responses, and request batching for production economics",
  "Shipping observability with LangSmith, Langfuse, or custom tracing so on-call engineers can debug agent behavior",
  "Handling safety, content filtering, jailbreak resistance, and PII redaction for customer-facing deployments",
  "Collaborating with ML and data teams on fine-tuning, reward modeling, and evaluation datasets when off-the-shelf models fall short",
];

const whenToHire = [
  {
    scenario: "You are adding an AI feature to an existing product",
    recommendation: "Hire a dedicated AI developer",
    reason:
      "General backend engineers can wire up a chat endpoint in a day, and it will work in the demo. What breaks them is production: hallucinations, cost spikes, latency tails, failure modes no unit test predicts. An AI specialist has seen these before.",
  },
  {
    scenario: "You are building an AI-first product from scratch",
    recommendation: "Hire an AI developer as one of your first 3 engineers",
    reason:
      "AI-first products are architecturally different. Evaluation, prompt versioning, provider abstraction, and cost telemetry need to be foundational, not bolted on. Hire the specialist early or rewrite the foundation in 12 months.",
  },
  {
    scenario: "You are running a proof-of-concept or internal tool",
    recommendation: "A general full-stack engineer is usually fine",
    reason:
      "If it is not customer-facing and the blast radius of a bad response is small, you do not need a specialist. A strong generalist with an afternoon of API docs will ship a working PoC.",
  },
  {
    scenario: "You are hitting reliability or cost walls on an existing AI product",
    recommendation: "Hire an AI developer with evaluation and observability depth",
    reason:
      "Most AI products that hit reliability walls have no real evaluation pipeline. A specialist who can build one will save you more than their salary in the first quarter by letting you ship changes with confidence.",
  },
];

const screeningSignals = [
  {
    signal: "Evaluation discipline",
    detail:
      "Vibes are not quality. We test whether candidates build evaluation sets, run regressions on every prompt change, and can explain precision, recall, and task-specific metrics. Engineers who skip this step ship regressions to production.",
  },
  {
    signal: "Cost and latency awareness",
    detail:
      "We ask candidates to critique a chat architecture and estimate its cost per conversation. Strong answers show instincts on batching, caching, streaming, provider choice, and when to use smaller models. Weak ones skip straight to GPT-5.",
  },
  {
    signal: "Prompt engineering judgment",
    detail:
      "We screen for engineers who treat prompts as code: versioned, tested, and reviewed. We reject candidates whose entire approach is copy-pasting prompts from Twitter and hoping for the best.",
  },
  {
    signal: "Agent failure mode instincts",
    detail:
      "Multi-agent systems fail in subtle ways: infinite loops, stale context, tool misuse, model drift. We give candidates a misbehaving agent and ask them to diagnose it. The good ones spot the problem in under ten minutes.",
  },
  {
    signal: "Provider neutrality",
    detail:
      "Good AI engineers design for model and provider changes. We screen for candidates who know when to use OpenAI vs. Anthropic vs. open-source, and who build abstractions that let you swap providers without a rewrite.",
  },
  {
    signal: "Safety and responsible AI awareness",
    detail:
      "Content filtering, PII handling, jailbreak testing, usage policies. These are not optional in 2026. We screen for engineers who treat safety as table stakes, not an afterthought.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams adding their first AI feature and needing senior guidance before hiring full-time.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for AI-first products shipping continuously and needing an embedded specialist.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "AI pod",
    hours: "2 to 4 engineers",
    best: "Best for a new AI product or platform that needs a self-contained squad across infra, retrieval, and application logic.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us what you are building, the AI stack you use, and what kind of developer you need.",
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
      "Talk to the candidates directly. Assess technical ability, culture fit, and working style on your terms.",
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
    question: "How much does it cost to hire an AI developer in India?",
    answer:
      "Mid-level AI developers in India typically cost between 4,500 and 7,000 USD per month for full-time engagement. Senior engineers with production LLM experience, agent orchestration, and evaluation depth range from 7,000 to 11,000 USD per month. At Workforce Next, pricing includes an engineering manager, context docs, and backup coverage, which most competitors bill for separately.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between an AI developer and a machine learning engineer?",
    answer:
      "AI developers build applications on top of existing models: prompting, RAG, agents, tool use, and integration. ML engineers train and deploy their own models: datasets, training infrastructure, evaluation, and research. The overlap is real but the day-to-day work is very different. Most companies in 2026 need AI developers, not ML engineers. If you are using the OpenAI API, you need the former.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Which AI frameworks do your developers work with?",
    answer:
      "Our AI developers are fluent across LangChain, LangGraph, LangSmith, CrewAI, AutoGen, LlamaIndex, and the raw SDKs for OpenAI, Anthropic, Google, AWS Bedrock, and Azure OpenAI. Most have opinions on when each one is the right choice. We match engineers to the frameworks you already use rather than pushing our preferences onto you.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your AI developers build production systems, not just prototypes?",
    answer:
      "Yes, and this is the whole point of SethAI's screening. We reject candidates whose only LLM experience is tutorials. Every engineer we place has shipped at least one production AI system with real traffic, observability, cost management, and on-call responsibilities. We have seen too many teams hire a prototyper and end up with a demo that cannot survive first contact with customers.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your AI developers work in my timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover morning standups and afternoon pair sessions.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire an AI developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened AI engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireAIDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire AI & Agentic Developers from India",
    "Hire pre-vetted AI and agentic developers from India. LangChain, AutoGen, CrewAI, RAG pipelines, multi-agent systems. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/ai-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "AI Developers", url: `${siteMetadata.url}/hire/ai-developers/` },
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
            HIRE AI DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire AI &amp; Agentic Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build production LLM applications, agentic
            workflows, and retrieval-augmented systems. Screened by SethAI for
            technical depth and long-term fit.
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
            Why real AI engineers are the hardest hire in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Every engineer on LinkedIn now claims AI experience. Most of them
              built a chatbot tutorial last weekend. The gap between an engineer
              who can wire up the OpenAI SDK and one who can ship a reliable
              agent system with evaluation, cost controls, and graceful failure
              is enormous. Hiring the wrong AI developer is how teams end up
              with demos that impress investors and crash the moment real users
              arrive.
            </p>
            <p>
              A genuine AI developer thinks in evaluation sets, prompt
              contracts, failure modes, and provider economics. They have been
              woken up by a runaway agent, debugged a hallucination at 2 a.m.,
              and shipped a feature that got smarter over six months of real
              traffic. These instincts come from shipping production systems,
              not from courses or certificates.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              buzzwords like GPT or LangChain. It is evaluated on depth across
              the stack, production AI experience, and the signals that predict
              whether someone will still be shipping quality work for you as
              the model landscape changes.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire AI developers from Workforce Next
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

      {/* What an AI developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What an AI developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            an AI developer through Workforce Next, here is the work they take
            ownership of on a modern LLM-powered product:
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
            AI specialist or generalist: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every AI project needs a specialist. Here is how we help
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
            Three ways to work with our AI engineers. Every engagement includes
            an engineering manager, shared context documentation, and PTO
            backup coverage at no extra cost.
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
            Common questions about hiring AI developers
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
            Ready to hire AI developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us what you are building and we will match you with the right
            engineers within 48 hours.
          </p>
          <Button href="/contact/" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
