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
  title: "Hire Generative AI Developers from India",
  description:
    "Hire pre-vetted generative AI developers from India. LLM apps, RAG, agents, fine-tuning, multi-modal, evals, prompt engineering. SethAI-screened.",
  keywords: [
    "hire generative AI developers",
    "hire GenAI developers India",
    "LLM application developers",
    "RAG developers India",
    "AI agent developers",
    "fine-tuning engineers",
    "multi-modal AI developers",
    "GenAI staff augmentation",
    "OpenAI Anthropic developers",
  ],
  openGraph: {
    ...ogDefaults("/hire/generative-ai-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Generative AI Developers from India",
    description:
      "Pre-vetted GenAI engineers for LLM apps, RAG, agents, fine-tuning, and multi-modal. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/generative-ai-developers/`,
  },
};

const skills = [
  "OpenAI / Anthropic / Gemini APIs",
  "LangChain / LlamaIndex",
  "RAG Pipelines",
  "Vector DBs (Pinecone, pgvector, Weaviate)",
  "Agent Frameworks",
  "Fine-tuning (LoRA, QLoRA)",
  "Evals (Ragas, LangSmith, Braintrust)",
  "Streaming UIs",
  "Multi-modal (Vision, Audio)",
  "Guardrails / Safety",
  "FastAPI / Node.js",
  "Vercel AI SDK",
];

const whyPoints = [
  {
    title: "GenAI specialists who have shipped real LLM products",
    description:
      "Our engineers have built production LLM apps with real users, real evals, real cost budgets. Not researchers and not tutorial-only engineers. They know what breaks in production.",
  },
  {
    title: "Model-agnostic and pragmatic",
    description:
      "Fluent in OpenAI, Anthropic, Gemini, open-weight models. They pick the model based on the task and budget, not loyalty. They know when to fine-tune vs prompt vs RAG.",
  },
  {
    title: "Evals and observability discipline",
    description:
      "LLM apps without evals are theatre. Our engineers build evaluation pipelines with Ragas, LangSmith, or Braintrust before they ship. They monitor token cost, latency, and quality in production.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership, communication, and career fit. You get GenAI engineers who stay long enough to iterate the system through 5+ versions, not contractors who ship a demo and leave.",
  },
];

const responsibilities = [
  "Designing LLM application architectures: when to RAG, when to fine-tune, when to use agents, when to keep it simple",
  "Building RAG pipelines with chunking strategies, embedding models, vector DBs, retrieval evals, and re-ranking",
  "Implementing agent systems with tool use, planning, memory, and proper failure handling",
  "Streaming LLM responses to web and mobile with proper token-by-token UX (Vercel AI SDK, Anthropic streaming)",
  "Fine-tuning open-weight models with LoRA or QLoRA when prompt engineering and RAG fall short",
  "Building eval pipelines: ground-truth datasets, LLM-as-judge, regression suites, A/B testing prompts and models",
  "Hardening LLM apps against prompt injection, jailbreaks, PII leakage, and supply-chain risks in model providers",
  "Tracking token cost, latency, and quality in production with LangSmith, Braintrust, Helicone, or custom observability",
  "Integrating LLMs into existing backends (Python FastAPI, Node.js) with proper rate limiting, retries, and fallbacks",
  "Building multi-modal flows: vision input (OCR, document understanding), audio (transcription, voice agents)",
];

const whenToHire = [
  {
    scenario: "Building a customer-facing AI feature in an existing product",
    recommendation: "Hire a GenAI specialist with production LLM experience",
    reason:
      "Customer-facing AI features need evals, observability, and proper error handling that tutorial-only engineers do not build. A specialist will ship a feature that does not embarrass you when it fails.",
  },
  {
    scenario: "Building an AI-native product from scratch",
    recommendation: "Hire a GenAI specialist plus a full-stack engineer",
    reason:
      "AI-native products need both the AI architecture and the product surface. A pod of one GenAI specialist plus one full-stack engineer is the most common shape we ship for early-stage AI products.",
  },
  {
    scenario: "Adding a simple chatbot or FAQ assistant",
    recommendation: "A general full-stack engineer may be enough",
    reason:
      "If you only need basic LLM integration with no evals, no agents, and no fine-tuning, a strong full-stack engineer with LLM API experience can ship this. Reserve GenAI specialists for harder problems.",
  },
  {
    scenario: "Fine-tuning a model on proprietary data",
    recommendation: "Hire a GenAI specialist with fine-tuning experience",
    reason:
      "Fine-tuning is its own discipline: dataset curation, LoRA setup, eval design, deployment economics. Specialists with this experience are a small subset of the GenAI pool. We screen explicitly.",
  },
];

const screeningSignals = [
  {
    signal: "Production LLM judgment",
    detail:
      "When to RAG vs fine-tune vs prompt-only. When to use an agent vs a simple chain. Cost vs latency tradeoffs across models. We test architectural reasoning, not just API recall.",
  },
  {
    signal: "Evals literacy",
    detail:
      "LLM-as-judge patterns, ground-truth dataset design, regression suites, A/B testing methodology, Ragas for RAG quality. Engineers who do not eval are shipping based on vibes.",
  },
  {
    signal: "Model provider fluency",
    detail:
      "Differences between OpenAI, Anthropic, Gemini, open-weight models. Cost per million tokens, context windows, tool use APIs, vision capabilities, latency profiles. We test breadth.",
  },
  {
    signal: "Prompt and agent design",
    detail:
      "Few-shot vs zero-shot, structured outputs (JSON mode, function calling), system prompt design, agent tool definitions. We give a real task and watch the prompt iteration.",
  },
  {
    signal: "Safety and security awareness",
    detail:
      "Prompt injection defenses, jailbreak mitigation, PII redaction, output filtering, OWASP LLM Top 10 understanding. See our LLM security blog for the depth we expect.",
  },
  {
    signal: "Observability and cost engineering",
    detail:
      "Token cost tracking, latency monitoring, quality regression alerts, response caching, prompt versioning. We test production discipline, not just demo skills.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior GenAI guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for AI-native products shipping continuously and needing integrated team members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for an AI MVP, feature launch, or platform-level AI integration.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your AI feature, models, eval strategy, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for GenAI production experience, eval discipline, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architecture, prompt design, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a generative AI developer from India?",
    answer:
      "Mid-level GenAI developers from India cost USD 5,000 to 7,500 per month for full-time engagement. Senior engineers with production LLM, eval, and fine-tuning depth range from USD 7,000 to 11,000 per month. Pricing reflects the specialist nature of the role. Includes engineering manager oversight and PTO backup.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What models do your GenAI engineers work with?",
    answer:
      "Model-agnostic: OpenAI (GPT-4 family, o-series), Anthropic (Claude Opus, Sonnet, Haiku), Gemini, and open-weight models (Llama 3.x, Mistral, Qwen) on platforms like Together, Groq, or self-hosted vLLM. They pick the model for the task and budget, not by loyalty.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Should we use RAG, fine-tuning, or both?",
    answer:
      "RAG when you need access to evolving knowledge or proprietary documents. Fine-tuning when you need consistent behavior, output format, or specialized reasoning beyond what prompts achieve. Many production systems use both. Our engineers help you scope this decision.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Do your GenAI engineers build evals before shipping?",
    answer:
      "Yes. Every senior we place builds an eval pipeline before shipping a customer-facing LLM feature: ground-truth dataset, LLM-as-judge, regression suite. We screen for eval discipline explicitly. Engineers who ship without evals do not pass our bar.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your engineers handle agent systems with tool use?",
    answer:
      "Yes. We have shipped agent systems using LangChain, LlamaIndex, custom orchestration, and provider-native tool use (Anthropic, OpenAI). We screen for failure handling, planning patterns, and when NOT to use agents (often the right answer).",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What about security and prompt injection?",
    answer:
      "Standard work. Our engineers implement input validation, output filtering, system prompt hardening, PII redaction, and supply-chain hygiene. See our OWASP LLM Top 10 checklist and Prompt Injection Defense posts for the depth we expect.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your GenAI engineers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireGenerativeAIDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Generative AI Developers from India",
    "Hire pre-vetted generative AI developers from India. LLM apps, RAG, agents, fine-tuning, multi-modal, evals. SethAI-screened.",
    `${siteMetadata.url}/hire/generative-ai-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Generative AI Developers", url: `${siteMetadata.url}/hire/generative-ai-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE GENERATIVE AI DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Generative AI Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship production LLM apps. RAG, agents,
            fine-tuning, multi-modal, and evals. Model-agnostic, cost-aware,
            and shipped under real users. Screened by SethAI for depth and
            longevity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why production GenAI is a specialist skill in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Building a demo with the OpenAI API is easy. Shipping a
              production LLM feature that does not embarrass you when it
              fails, that has evals, that controls cost, that survives
              prompt injection, and that you can iterate confidently is
              hard. The gap between tutorial work and production GenAI is
              wider than in almost any other tech stack right now.
            </p>
            <p>
              A GenAI engineer worth hiring in 2026 picks models pragmatically,
              builds evals before shipping, knows when to RAG vs fine-tune,
              hardens against prompt injection, and tracks token cost like
              the line item it is. They have shipped features with real
              users and watched them fail in real ways.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For deeper context, read our{" "}
              <a href="/blog/ai-enabled-remote-staffing-complete-guide-2026/" className="text-primary-600 hover:underline">AI-enabled remote staffing guide</a>{" "}
              or the{" "}
              <a href="/blog/owasp-llm-top-10-implementation-checklist-2026/" className="text-primary-600 hover:underline">OWASP LLM Top 10 checklist</a>.{" "}
              For specific framework needs see{" "}
              <a href="/hire/langchain-developers/" className="text-primary-600 hover:underline">LangChain</a> or{" "}
              <a href="/hire/rag-developers/" className="text-primary-600 hover:underline">RAG developers</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire generative AI developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a generative AI developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire a GenAI developer through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Specialist or generalist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every AI role needs a GenAI specialist. Here is how we help customers decide.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our GenAI engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring generative AI developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire generative AI developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your AI product and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
