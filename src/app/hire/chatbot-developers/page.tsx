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
  title: "Hire Chatbot Developers from India",
  description:
    "Hire pre-vetted chatbot developers from India. LLM chat, RAG-grounded support bots, agent workflows, voice agents, WhatsApp/Slack/web. SethAI-screened.",
  keywords: [
    "hire chatbot developers",
    "hire chatbot developers India",
    "AI chatbot developers",
    "LLM chatbot India",
    "RAG support bot",
    "voice agent developers",
    "WhatsApp bot developers",
    "Slack bot developers",
    "chatbot staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/chatbot-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Chatbot Developers from India",
    description:
      "Pre-vetted chatbot engineers for LLM chat, RAG bots, agent workflows, and voice. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/chatbot-developers/`,
  },
};

const skills = [
  "OpenAI / Anthropic / Gemini",
  "LangChain / LlamaIndex",
  "RAG Pipelines",
  "Vector DBs",
  "Function Calling / Tool Use",
  "Streaming UIs",
  "WhatsApp Cloud API",
  "Slack / Discord bots",
  "Twilio Voice / Vapi / Retell",
  "Vercel AI SDK",
  "Intent classification",
  "Eval frameworks",
];

const whyPoints = [
  {
    title: "Chatbot specialists who ship to real users",
    description:
      "Our engineers have shipped customer-facing support bots, sales agents, internal copilots, and voice agents. They know the difference between a demo and a system that handles 10K+ conversations a day.",
  },
  {
    title: "RAG-grounded answers, not hallucination",
    description:
      "Production bots need grounding in real documents. We build proper RAG: chunking strategy, retrieval evals, citation surfacing, and fallback when the knowledge base does not have an answer.",
  },
  {
    title: "Multi-channel fluency",
    description:
      "Web chat, WhatsApp Cloud API, Slack, Discord, Telegram, and voice via Twilio or Vapi. Same conversation logic, different surfaces. We design for channel-agnostic flows.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership and communication. You get chatbot engineers who iterate the system through real user feedback, not contractors who ship a demo and leave.",
  },
];

const responsibilities = [
  "Designing conversation flows: greeting, intent routing, escalation to human, fallback handling, conversation memory",
  "Building RAG-grounded support bots with chunking, embedding, retrieval, re-ranking, and answer synthesis with citations",
  "Implementing agent workflows with function calling: lookup orders, update tickets, book meetings, query internal APIs",
  "Integrating with WhatsApp Cloud API, Slack, Discord, Telegram, web chat (custom React widget or Intercom-style)",
  "Building voice agents on Twilio Voice, Vapi, Retell, or LiveKit with streaming STT, LLM, and TTS",
  "Setting up eval pipelines: golden conversation sets, LLM-as-judge for answer quality, regression suites",
  "Hardening against prompt injection, off-topic abuse, PII leakage, and tool-misuse by the agent",
  "Tracking conversation metrics: resolution rate, escalation rate, CSAT, token cost, latency, hallucination rate",
  "Integrating with CRMs (Salesforce, HubSpot), helpdesks (Zendesk, Intercom), and analytics (Segment, Mixpanel)",
  "Building handoff to human flows: typing indicators, queue routing, full transcript with summary for the human agent",
];

const whenToHire = [
  {
    scenario: "Building a customer support bot with RAG over your docs",
    recommendation: "Hire a chatbot specialist with RAG production experience",
    reason:
      "Support bots without proper RAG hallucinate and damage trust. Specialists build retrieval, evals, citation surfacing, and clean escalation to humans. Generalists ship the demo and leave you with churned customers.",
  },
  {
    scenario: "Building a sales or lead-qualification chatbot",
    recommendation: "Hire a chatbot specialist with conversational design experience",
    reason:
      "Sales bots are about conversation design as much as LLM quality. Specialists know when to qualify, when to hand off, and how to keep prospects engaged without being aggressive.",
  },
  {
    scenario: "Building a voice agent for inbound or outbound calls",
    recommendation: "Hire a chatbot specialist with voice experience",
    reason:
      "Voice agents are their own world: streaming STT/TTS, interrupt handling, latency budgets, telephony stack. We screen specifically for voice when the role demands.",
  },
  {
    scenario: "Adding a simple FAQ widget with 10 canned answers",
    recommendation: "A general full-stack engineer may be enough",
    reason:
      "If you only need basic FAQ with no LLM, no retrieval, and no escalation, a strong full-stack engineer can ship a widget. Reserve chatbot specialists for harder problems.",
  },
];

const screeningSignals = [
  {
    signal: "Production chatbot judgment",
    detail:
      "When to RAG vs prompt-only, when to use an agent vs a fixed flow, how to handle out-of-domain queries, escalation triggers. Strong candidates have shipped at scale and know the failure modes.",
  },
  {
    signal: "RAG quality discipline",
    detail:
      "Chunking strategy, embedding model selection, retrieval evals (recall@k, precision@k), re-ranking, citation surfacing. Candidates who do not eval RAG quality are shipping by vibes.",
  },
  {
    signal: "Conversation design",
    detail:
      "Greeting design, system-prompt structure, persona consistency, memory management, conversation summarization for long sessions, escalation triggers. The non-LLM part of bot quality.",
  },
  {
    signal: "Channel-specific fluency",
    detail:
      "WhatsApp Cloud API (templates, message types, opt-in flows). Slack (interactive components, modals, slash commands). Voice (STT/TTS latency, interrupt handling, telephony integration).",
  },
  {
    signal: "Safety and abuse handling",
    detail:
      "Prompt injection defenses, off-topic redirection, PII redaction, tool-misuse prevention, content moderation. We screen specifically because chatbots have higher abuse surface than most LLM apps.",
  },
  {
    signal: "Metrics and iteration",
    detail:
      "Resolution rate, escalation rate, CSAT, hallucination rate, token cost per conversation. We test whether candidates iterate based on data or vibes.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for teams adding a chatbot to an existing product without dedicated AI hires.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for chatbot-native products or major support automation initiatives.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 3 engineers", best: "Best for a multi-channel rollout (web + WhatsApp + voice) or platform-wide bot.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your use case, channels, knowledge base, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for chatbot production experience, RAG depth, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test conversation design, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a chatbot developer from India?",
    answer:
      "Mid-level chatbot developers from India cost USD 4,000 to 6,500 per month for full-time engagement. Senior engineers with RAG, multi-channel, or voice agent experience range from USD 6,000 to 9,000 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Should we use a chatbot platform (Intercom, Drift) or custom build?",
    answer:
      "Platforms work for simple FAQ and lead capture. Custom builds win when you need deep RAG over proprietary docs, complex agent workflows, voice integration, or tight integration with your product. Our engineers help you decide before you commit to a path.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your chatbot engineers ship to WhatsApp, Slack, or voice?",
    answer:
      "Yes. WhatsApp Cloud API (with template approvals and opt-in flows), Slack apps (interactive components, slash commands), Discord, Telegram, voice via Twilio Voice, Vapi, Retell, or LiveKit. Same conversation logic across channels where possible.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How do you handle hallucinations in support bots?",
    answer:
      "RAG grounding in your real docs, citation surfacing in answers, explicit \"I do not know\" fallback when retrieval fails, and clean escalation to a human agent. We measure hallucination rate with LLM-as-judge evals before shipping.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your chatbot engineers integrate with our CRM and helpdesk?",
    answer:
      "Yes. Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, ServiceNow integrations are standard. The bot can create tickets, update opportunities, look up orders, and hand off to humans with full transcript and AI-generated summary.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can you handle voice agents and outbound calling?",
    answer:
      "Yes. Voice agents on Twilio Voice, Vapi, Retell, or LiveKit with streaming STT, LLM, and TTS. Interrupt handling, sub-1-second latency targets, and full telephony integration. We screen specifically for voice when the role calls for it.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your chatbot developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireChatbotDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Chatbot Developers from India",
    "Hire pre-vetted chatbot developers from India. LLM chat, RAG, agents, voice, multi-channel. SethAI-screened.",
    `${siteMetadata.url}/hire/chatbot-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Chatbot Developers", url: `${siteMetadata.url}/hire/chatbot-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE CHATBOT DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Chatbot Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship production chatbots. RAG support
            bots, sales agents, voice agents, multi-channel deployment.
            Screened by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Chatbots in 2026: the demo-to-production gap is everything</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Building a chatbot demo with the OpenAI API takes an afternoon.
              Shipping one that handles 10,000 conversations a day, grounds
              answers in your docs, escalates cleanly to humans, costs less
              than a junior support agent, and does not damage trust when it
              fails takes months of production iteration. That gap is where
              most chatbot projects die.
            </p>
            <p>
              A chatbot engineer worth hiring in 2026 has shipped to real
              users at scale. They build RAG with proper evals, design
              escalation flows, harden against prompt injection, and track
              resolution rate as the primary metric. They have seen what
              breaks when 1% of users try to abuse the bot.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For broader AI staffing context see our{" "}
              <a href="/blog/ai-enabled-remote-staffing-complete-guide-2026/" className="text-primary-600 hover:underline">AI-enabled remote staffing guide</a>{" "}
              or our{" "}
              <a href="/blog/prompt-injection-defense-production-llm-apps-2026/" className="text-primary-600 hover:underline">prompt injection defense post</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire chatbot developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a chatbot developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire a chatbot developer through Workforce Next, here is the work they take ownership of:</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every chatbot needs a specialist. Here is how we help customers decide.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our chatbot engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring chatbot developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire chatbot developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your use case and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
