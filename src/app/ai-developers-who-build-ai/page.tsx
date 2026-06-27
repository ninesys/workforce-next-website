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
  title: "Hire AI Developers Who Build AI Models | Workforce Next",
  description:
    "Outsource AI development to senior engineers who build production models, RAG systems, and agents. Hire an AI agent or remote expert. US and Canada founders.",
  keywords: [
    "outsource AI development and data analytics",
    "hire AI developers",
    "AI engineers for hire",
    "hire an AI agent or remote expert",
    "done-for-you AI agents",
    "RAG system development",
    "AI model fine-tuning service",
    "senior AI engineers remote",
  ],
  openGraph: {
    ...ogDefaults("/ai-developers-who-build-ai/"),
    images: ["/images/og-default.png"],
    title: "Hire AI Developers Who Build AI Models",
    description:
      "Senior AI engineers and AI coding agents. Build production models, RAG, and agents. Outsource AI development cleanly.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-developers-who-build-ai/`,
  },
};

const agentVsHuman = [
  {
    label: "AI CODING AGENT",
    headline: "Best for velocity.",
    line: "Greenfield prototypes, throwaway scripts, senior-supervised feature work. Cursor, Claude Code, Copilot Workspace level.",
    glyph: "AI",
  },
  {
    label: "SENIOR AI ENGINEER",
    headline: "Best for production.",
    line: "Production models, customer-facing agents, anything touching sensitive data. Brings judgment the agent does not.",
    glyph: "HU",
  },
  {
    label: "ENGINEER PLUS AGENT",
    headline: "Best for most teams.",
    line: "Senior engineer in the driver's seat using AI agents to multiply output. Our default recommendation.",
    glyph: "AI+",
  },
];

const projects = [
  { tag: "MODELS", title: "Fine-tuning + deployment", line: "Custom fine-tunes on open weights, hosted on your infra, monitored in production." },
  { tag: "RAG", title: "RAG systems", line: "Retrieval-augmented generation that actually retrieves the right context, with eval harnesses." },
  { tag: "AGENTS", title: "Production AI agents", line: "Multi-step agents with tool use, memory, and human-in-the-loop guardrails." },
  { tag: "FEATURES", title: "AI inside your SaaS", line: "Wire LLMs into your product without making them the product. Cost-aware by default." },
  { tag: "EVAL", title: "Eval and observability", line: "Golden sets, regression suites, real-time tracing. So you know when the model gets worse." },
  { tag: "MIGRATION", title: "Model migrations", line: "Move off legacy LLMs without breaking your prompts or downstream behavior." },
];

const stacks = [
  { tag: "LANGUAGES", line: "Python and TypeScript primary" },
  { tag: "MODELS", line: "OpenAI, Anthropic, Llama, Hugging Face" },
  { tag: "FRAMEWORKS", line: "LangChain, LlamaIndex, custom orchestration" },
  { tag: "VECTORS", line: "Pinecone, Weaviate, pgvector" },
  { tag: "DEPLOY", line: "AWS, GCP, Modal, Replicate, Vercel" },
  { tag: "OBS", line: "Langfuse, Helicone, Datadog, custom traces" },
];

const steps = [
  { num: "01", title: "Scope the build", line: "What model, what data, what success looks like, what production looks like." },
  { num: "02", title: "Pick the team shape", line: "Engineer, engineer plus agent, or specialist pod. We propose the right shape." },
  { num: "03", title: "Ship in sprints", line: "Weekly demo cadence. You see eval results before you see a release." },
  { num: "04", title: "Handoff or stay", line: "Documented code, eval harness, runbooks. Extend the engagement or take it in-house." },
];

const fitFor = [
  { tag: "AI-PRODUCT FOUNDERS", line: "Need senior AI engineering muscle without a full-time hire." },
  { tag: "SAAS CTOS", line: "Adding AI features and want them production-grade from day one." },
  { tag: "ENTERPRISE TEAMS", line: "Have data and a use case but no in-house AI engineering bench." },
  { tag: "FUNDED STARTUPS", line: "Need to ship a model to market faster than hiring would allow." },
];

const faqItems: FAQ[] = [
  {
    question: "Should I hire an AI developer or use an AI coding agent?",
    answer:
      "Use an AI coding agent (Cursor, Claude Code, Copilot Workspace) for greenfield prototypes, throwaway scripts, and senior-supervised feature work. Hire a senior AI engineer when you are shipping a production model, an AI agent customers depend on, or anything that touches sensitive data. Most of our customers blend the two: a senior engineer in the driver's seat using AI agents to multiply output.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What AI stacks do your developers ship on?",
    answer:
      "Python and TypeScript primary. Model stacks: OpenAI, Anthropic Claude, Llama, fine-tuned open models on Hugging Face. RAG and agent frameworks: LangChain, LlamaIndex, custom orchestration. Vector stores: Pinecone, Weaviate, pgvector. Deployment: AWS, GCP, Modal, Replicate. We pick the stack to fit the workload, not the other way around.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can I outsource AI development without losing IP control?",
    answer:
      "Yes. Every engagement runs under a US or Canada friendly master services agreement with full IP assignment to you, an NDA, and a clean Git history you own. Models, weights, prompts, and any tooling we build for you are yours. We do not reuse customer IP across engagements.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiDevelopersWhoBuildAiPage() {
  const serviceSchema = generateServiceSchema(
    "AI Developers Who Build AI Models",
    "Outsource AI development and data analytics. Senior AI engineers and AI coding agents that build production models, RAG systems, and agents.",
    `${siteMetadata.url}/ai-developers-who-build-ai/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Developers Who Build AI Models", url: `${siteMetadata.url}/ai-developers-who-build-ai/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative max-w-5xl text-center">
          <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-200 border-primary-400/30">
            AI DEVELOPERS
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Hire AI Developers Who Build AI Models,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or an AI Agent That Codes Alongside Them.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Outsource AI development to senior engineers (with AI agents in the loop) who ship to production.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">Book a discovery call</Button>
            <Button href="#projects" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See what we build
            </Button>
          </div>
        </div>
      </section>

      {/* AGENT vs HUMAN */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Agent or human?</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
              AI coding agent vs. senior engineer.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agentVsHuman.map((a) => (
              <div
                key={a.label}
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {a.glyph}
                </div>
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{a.label}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">{a.headline}</h3>
                <p className="mt-4 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{a.line}</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we build</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Which AI projects are we built for?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{p.tag}</p>
                <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50">{p.title}</h3>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{p.line}</p>
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACKS dark strip */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              What AI stacks do our developers ship on?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stacks.map((s) => (
              <div
                key={s.tag}
                className="p-5 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all text-center"
              >
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{s.tag}</p>
                <p className="mt-2 text-sm font-bold text-white leading-snug">{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              How does the engagement work?
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div aria-hidden className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300" />
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white font-extrabold text-xl shadow-lg shadow-primary-500/30">
                  {s.num}
                </div>
                <h3 className="mt-4 font-extrabold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-1.5 text-sm text-dark-500 dark:text-dark-300">{s.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT FOR */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Who it is for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Best-fit teams.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fitFor.map((f) => (
              <div
                key={f.tag}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{f.tag}</p>
                  <p className="mt-1 text-base font-bold text-dark-900 dark:text-dark-50">{f.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED OFFERINGS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Related offerings</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            What we usually pair with AI engineering.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Pair AI engineering with{" "}
            <a href="/hire-data-analysts-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              data analysts and data engineers
            </a>{" "}
            so the model trains on clean data. If you also need outbound, see our{" "}
            <a href="/ai-sdr-outreach/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI SDR setup service
            </a>
            . The same engineers can wire the SDR agent into your stack. For internal-ops AI, our{" "}
            <a href="/ai-agent-hr-recruiting/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI agent for HR and recruiting
            </a>{" "}
            shows how productionised agents look in a non-customer-facing workflow.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50/30 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Quick answers.
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-dark-800 text-primary-500 flex items-center justify-center font-bold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-overlay filter blur-3xl" />
        </div>
        <div className="container-custom relative text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to ship a model to production?
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us what you are building. Scoped proposal in 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
