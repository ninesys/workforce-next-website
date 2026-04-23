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
  title: "Hire LangChain Developers from India",
  description:
    "Hire pre-vetted LangChain developers from India. LangGraph, LangSmith, chains, agents, tools, retrieval, memory, and output parsers. SethAI-screened for skills and longevity.",
  keywords: [
    "hire LangChain developers India",
    "LangGraph developers",
    "LangSmith developers",
    "LangChain agents",
    "LangChain chains",
    "LLM application developers India",
    "LangChain staff augmentation",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire LangChain Developers from India",
    description:
      "Hire pre-vetted LangChain developers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/langchain-developers/`,
  },
};

const skills = [
  "LangChain",
  "LangGraph",
  "LangSmith",
  "Chains",
  "Agents",
  "Tools",
  "Retrieval",
  "Memory",
  "Output Parsers",
  "LCEL",
];

const whyPoints = [
  {
    title: "LangChain ecosystem specialists",
    description:
      "Our developers work with LangChain, LangGraph, and LangSmith daily. They build production chains and agents, not just notebook demos that never see real traffic.",
  },
  {
    title: "Deep understanding of LLM patterns",
    description:
      "Chains, agents, tool use, memory management, retrieval, and structured output. Our engineers know when to use each pattern and, more importantly, when not to.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. LangChain evolves fast. You need developers who keep up without constant hand-holding.",
  },
  {
    title: "Production deployment experience",
    description:
      "Our developers have deployed LangChain applications to production with LangSmith observability, streaming responses, error handling, and cost management under real load.",
  },
];

const responsibilities = [
  "Designing LangChain applications with LCEL (LangChain Expression Language) for clean, composable pipelines",
  "Building LangGraph state machines for multi-step and multi-agent workflows with clear handoff logic",
  "Integrating retrievers, vector stores, and rerankers into production chains with proper evaluation",
  "Implementing tool-using agents with schema validation, retry policies, and graceful degradation when tools fail",
  "Instrumenting LangSmith traces, evaluations, and regression tests so prompt changes ship with confidence",
  "Managing memory: conversation buffers, summarization, entity stores, and persistent context across sessions",
  "Designing structured output with Pydantic, JSON Schema, and output parsers that survive model variance",
  "Streaming partial responses to the UI with token-level control and backpressure handling",
  "Abstracting across model providers (OpenAI, Anthropic, Google, Bedrock, Ollama) so the stack is not locked in",
  "Managing token costs with caching, batching, and judicious use of smaller models where quality allows",
];

const whenToHire = [
  {
    scenario: "You are prototyping an LLM application and want speed",
    recommendation: "Hire a LangChain developer",
    reason:
      "LangChain is still the fastest way to wire up retrieval, agents, tools, and memory. A LangChain specialist can stand up a working prototype in days and iterate with you while the product direction is still fluid.",
  },
  {
    scenario: "You are productionizing a notebook-grade LangChain demo",
    recommendation: "Hire a LangChain developer with LangSmith depth",
    reason:
      "Moving from notebook to production is where most teams get stuck. Streaming, error handling, eval pipelines, cost control, and observability all need real engineering. A specialist has shipped this path before.",
  },
  {
    scenario: "You are hitting reliability or cost ceilings on an existing LangChain system",
    recommendation: "Hire a senior LangChain developer or evaluate migration",
    reason:
      "Sometimes LangChain abstractions become the bottleneck. A senior specialist can tell you whether the fix is inside LangChain (LCEL, LangGraph) or whether you should migrate hot paths to raw SDK calls. Honest answer, not framework loyalty.",
  },
  {
    scenario: "You need custom, highly controlled LLM logic from day one",
    recommendation: "A general AI engineer writing raw SDK code may be better",
    reason:
      "LangChain is a fast start but adds indirection. If you need fine-grained control over prompts, token counting, and provider behavior, raw SDK code plus a thin library is often simpler than building around the LangChain abstractions.",
  },
];

const screeningSignals = [
  {
    signal: "LCEL and composition fluency",
    detail:
      "We ask candidates to refactor a messy chain into clean LCEL. Strong candidates reach for runnables, parallel steps, and retry policies naturally. Weak candidates write everything as a giant function and call it a chain.",
  },
  {
    signal: "LangGraph state machine design",
    detail:
      "Multi-step workflows fail when state is modeled poorly. We test whether candidates can design a LangGraph with explicit states, conditional edges, and interrupt points for human-in-the-loop review.",
  },
  {
    signal: "LangSmith evaluation discipline",
    detail:
      "We look for engineers who build eval datasets, run regressions on every prompt change, and treat LangSmith as a first-class observability tool, not an afterthought.",
  },
  {
    signal: "Cost and latency instincts",
    detail:
      "We ask candidates to estimate cost per conversation on a given architecture. Strong answers cover caching, batching, streaming, and when to reach for smaller models. Weak answers skip to the most expensive option.",
  },
  {
    signal: "Framework boundary awareness",
    detail:
      "The best LangChain developers know when to drop out of the framework. We screen for engineers who can explain when LangChain adds value and when it is adding weight without adding leverage.",
  },
  {
    signal: "Async and streaming correctness",
    detail:
      "Streaming LLM responses involves async generators, backpressure, and partial parsing. We give candidates a broken streaming endpoint and ask them to fix it. This filters out engineers who only know synchronous chains.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams adding their first LangChain application and needing senior guidance before full-time hiring.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for AI-first products shipping continuously and needing an embedded LangChain specialist.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "LangChain pod",
    hours: "2 to 4 engineers",
    best: "Best for a new AI product or platform that needs a self-contained squad across retrieval, agents, and application logic.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us what LLM application you are building, which parts of the LangChain ecosystem you use, and what kind of developer you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for LangChain depth, agentic thinking, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their understanding of chains, agents, and the LangChain ecosystem.",
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
    question: "How much does it cost to hire a LangChain developer in India?",
    answer:
      "Mid-level LangChain developers in India typically cost between 4,500 and 7,000 USD per month for full-time engagement. Senior engineers with LangGraph, LangSmith, and production LLM experience range from 7,000 to 10,500 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is LangChain production-ready in 2026?",
    answer:
      "Yes, with honest caveats. LangChain has matured significantly, LCEL provides clean composition, and LangGraph makes complex workflows tractable. That said, some teams still drop out of the framework for hot paths that need tight cost or latency control. Our developers know when each choice is right and will not recommend LangChain where raw SDK calls would be simpler.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What is the difference between LangChain and LlamaIndex?",
    answer:
      "LangChain is a general-purpose framework for building LLM applications including chains, agents, and tools. LlamaIndex is optimized specifically for retrieval-augmented generation and document indexing. Many teams use both: LlamaIndex for advanced retrieval, LangChain for agent orchestration. Our LangChain developers are usually comfortable with both and will recommend the right tool per workload.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Do your developers work with LangGraph and LangSmith?",
    answer:
      "Yes. Every senior LangChain developer we place has shipped at least one production LangGraph state machine and uses LangSmith as a first-class observability and evaluation tool. LangGraph is now our default recommendation for anything beyond a simple chain, and LangSmith is part of every production deployment we help set up.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Which LLM providers do your LangChain developers have experience with?",
    answer:
      "Our engineers have production experience with OpenAI, Anthropic, Google, AWS Bedrock, Azure OpenAI, and open-source models served via Ollama or vLLM. Most LangChain applications we ship include a provider abstraction layer so you can switch models or vendors without a rewrite. This is baked into how we screen.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your LangChain developers work in my timezone?",
    answer:
      "Yes. Our engineers routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team. For US Pacific customers, we arrange engineers on a shifted schedule to cover morning standups and afternoon pair sessions.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireLangChainDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire LangChain Developers from India",
    "Hire pre-vetted LangChain developers from India. LangGraph, LangSmith, chains, agents, tools, retrieval, memory. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/langchain-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "LangChain Developers",
      url: `${siteMetadata.url}/hire/langchain-developers/`,
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
            HIRE LANGCHAIN DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire LangChain Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted developers who build production LLM applications with
            LangChain, LangGraph, and LangSmith. Screened by SethAI for
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
            Why LangChain talent is harder to hire than it looks
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              LangChain is the fastest way to stand up an LLM application in
              2026. It is also the fastest way to ship a demo that falls apart
              under real traffic. The gap between an engineer who can run the
              quickstart and one who can ship a reliable LangGraph workflow
              with eval pipelines, cost controls, and LangSmith observability
              is enormous. Hiring the wrong LangChain developer is how teams
              end up with chains that work in development and hallucinate in
              production.
            </p>
            <p>
              A genuine LangChain developer thinks in LCEL runnables, state
              machines, retry policies, and failure modes. They know when the
              framework is adding value and when it is adding weight. They
              have shipped streaming responses to customers, debugged runaway
              agents in production, and rewritten prompts based on evaluation
              data rather than vibes.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              LinkedIn keywords. It is evaluated on LangChain ecosystem depth,
              production deployment experience, and the signals that predict
              whether someone will still be shipping quality work as LangChain
              and the underlying models keep changing.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire LangChain developers from Workforce Next
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

      {/* What a LangChain developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a LangChain developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a LangChain developer through Workforce Next, here is the work
            they take ownership of on a modern LLM-powered product:
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
            LangChain specialist or general AI engineer: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every AI project needs a LangChain specialist. Here is how we
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
            Three ways to work with our LangChain engineers. Every engagement
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
            Common questions about hiring LangChain developers
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
            Ready to hire LangChain developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your LLM application and we will match you with the
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
