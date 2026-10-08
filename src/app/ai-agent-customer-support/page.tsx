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
  title: "AI Agent for Customer Support Automation",
  description:
    "Done-for-you AI agent for customer support. Resolves routine tickets, drafts replies, and triages escalations without burning support hours. US and Canada founders and support teams.",
  keywords: [
    "AI agent for customer support",
    "AI customer support automation",
    "done-for-you AI agents",
    "hire an AI agent or human support team",
    "support ticket automation",
    "helpdesk automation",
    "AI agent zendesk intercom",
  ],
  openGraph: {
    ...ogDefaults("/ai-agent-customer-support/"),
    images: ["/images/og-default.png"],
    title: "AI Agent for Customer Support Automation",
    description:
      "Done-for-you AI agent for customer support. Resolves tickets, drafts replies, and triages escalations.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-agent-customer-support/`,
  },
};

const agentVsHuman = [
  {
    label: "AI SUPPORT AGENT",
    headline: "Best for volume.",
    line: "Resolves routine tickets end to end, drafts replies for anything outside its confidence threshold, triages by urgency and sentiment.",
    glyph: "AI",
  },
  {
    label: "HUMAN AGENT",
    headline: "Best for judgment.",
    line: "Account-specific calls, retention conversations, anything emotionally charged. Where real support experience matters.",
    glyph: "HU",
  },
  {
    label: "BLEND",
    headline: "Best for support teams.",
    line: "Agent resolves the routine. Human owns edge cases and anything that needs a real person. Senior agents stop doing tier-1 work.",
    glyph: "AI+",
  },
];

const workflow = [
  { tag: "TRIAGE", title: "Ticket classification", line: "Classifies by intent, urgency, and sentiment. Routes to the right queue automatically." },
  { tag: "AUTO-RESOLVE", title: "Routine tickets, handled end to end", line: "Order status, password resets, billing lookups, anything repeatable and low-risk." },
  { tag: "DRAFTING", title: "Drafts for human review", line: "Anything outside the agent's confidence threshold gets drafted, not sent blind, and queued for a human." },
  { tag: "KNOWLEDGE BASE", title: "Stays current with your docs", line: "Reads your help center and macros directly. Updates to your docs update the agent, no retraining project." },
  { tag: "ESCALATION", title: "Human handoff with full context", line: "Frustrated or high-value customers get flagged to a human immediately, with the full thread attached." },
  { tag: "REPORTING", title: "Resolution and satisfaction tracking", line: "Deflection rate, resolution time, and CSAT, so you see what the agent is actually doing to your metrics." },
];

const integrations = [
  { tag: "ZENDESK", line: "Native" },
  { tag: "INTERCOM", line: "Native" },
  { tag: "FRESHDESK", line: "Native" },
  { tag: "HELP SCOUT", line: "Native" },
  { tag: "CRISP", line: "Native" },
  { tag: "CUSTOM HELPDESK", line: "API or webhook" },
];

const steps = [
  { num: "01", title: "Map the tickets", line: "We capture your top ticket categories, existing macros, tone, and escalation rules." },
  { num: "02", title: "Configure the agent", line: "Knowledge base ingestion, confidence thresholds, and escalation triggers set to your risk tolerance." },
  { num: "03", title: "Launch on a slice of volume", line: "Live on a subset of tickets first, tuned weekly against actual resolution accuracy." },
  { num: "04", title: "Humans own the edge cases", line: "Agent resolves the routine. Your team handles anything it flags or can't confidently answer." },
];

const fitFor = [
  { tag: "SUPPORT LEADS AT SAAS", line: "Ticket volume growing faster than the headcount budget." },
  { tag: "FOUNDERS DOING SUPPORT THEMSELVES", line: "No dedicated support hire yet, need leverage now, not in a quarter." },
  { tag: "ECOMMERCE AND MARKETPLACES", line: "Seasonal volume spikes that would otherwise need temp staff." },
  { tag: "TEAMS DROWNING IN TIER-1", line: "Want senior agents focused on real problems, not password resets." },
];

const faqItems: FAQ[] = [
  {
    question: "What does an AI agent for customer support actually do?",
    answer:
      "It classifies incoming tickets by intent and urgency, resolves routine repeatable requests end to end, and drafts replies for anything outside its confidence threshold instead of guessing. A human reviews drafts and owns escalations. The agent handles the volume work that keeps senior support staff stuck on tier-1 tickets.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Will customers notice they are talking to an AI agent?",
    answer:
      "We do not set these up to impersonate a human, and we recommend disclosure as standard practice, not something to hide. In practice, the agent resolves routine requests quickly enough that most customers are satisfied with the speed. Anything that needs a human gets handed off, with context, rather than the customer having to repeat themselves.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can the AI agent integrate with our helpdesk?",
    answer:
      "Yes. Standard integrations with Zendesk, Intercom, Freshdesk, Help Scout, and Crisp. Custom integrations for an in-house helpdesk via API or webhook. The agent reads your macros and knowledge base directly and writes resolutions back, so your team works in one tool, not two.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiAgentCustomerSupportPage() {
  const serviceSchema = generateServiceSchema(
    "AI Agent for Customer Support",
    "Done-for-you AI agent for customer support. Resolves tickets, drafts replies, and triages escalations. Built for US and Canada founders and support teams.",
    `${siteMetadata.url}/ai-agent-customer-support/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Agent for Customer Support", url: `${siteMetadata.url}/ai-agent-customer-support/` },
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
            AI AGENT FOR CUSTOMER SUPPORT
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Run an AI Agent for Customer Support,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or Hire a Human Team (or Both).
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Resolves routine tickets, drafts replies, and triages escalations. Without burning support hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="#workflow" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See the workflow
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
              AI support agent vs. human support team.
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

      {/* WORKFLOW */}
      <section id="workflow" className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Workflow</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Where the AI agent plugs into your support workflow.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflow.map((w) => (
              <div
                key={w.title}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{w.tag}</p>
                <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50">{w.title}</h3>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{w.line}</p>
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Helpdesk integrations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Plugs into the helpdesk you already use.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((s) => (
              <div
                key={s.tag}
                className="p-5 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all text-center"
              >
                <p className="text-sm font-extrabold text-white">{s.tag}</p>
                <p className="mt-1 text-xs font-bold text-primary-400 uppercase tracking-widest">{s.line}</p>
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
              Four steps to live support automation.
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
            What we pair with support automation.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            If the agent needs custom logic beyond what a done-for-you setup covers, our{" "}
            <a href="/hire/chatbot-developers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              chatbot developers
            </a>{" "}
            can build it bespoke. Outbound and support usually need the same customer data layer, see our{" "}
            <a href="/ai-sdr-outreach/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI SDR setup
            </a>{" "}
            if you also want outbound automated. For a broader automation build across more of your ops, see our{" "}
            <a href="/hire/automation-consultants/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              automation consultants
            </a>. Not sure where to start? See{" "}
            <a href="/blog/which-customer-support-tickets-to-automate-first/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              which ticket types to automate first
            </a>{" "}
            and which should stay with a human.
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
            Resolve tickets without burning support hours.
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us your ticket volume. Scoped proposal in 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
