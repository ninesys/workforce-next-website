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
  title: "AI SDR for Outreach: Hire an AI Agent or Human SDR",
  description:
    "Done-for-you AI SDR setup service. Hire an AI agent or remote SDR to research accounts, write outbound, and book meetings. Built for US and Canada founders.",
  keywords: [
    "AI SDR setup service",
    "AI SDR for outreach",
    "hire AI SDR",
    "done-for-you AI agents",
    "hire an AI agent or remote expert",
    "AI agent for B2B outbound",
    "AI sales development representative",
  ],
  openGraph: {
    ...ogDefaults("/ai-sdr-outreach/"),
    images: ["/images/og-default.png"],
    title: "AI SDR for Outreach: Hire an AI Agent or Human SDR",
    description:
      "Done-for-you AI SDR setup. AI agent or human SDR runs your outbound, replies, and meeting bookings.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-sdr-outreach/`,
  },
};

const agentVsHuman = [
  {
    label: "AI SDR AGENT",
    headline: "Best for volume.",
    line: "Researches accounts, writes personalized outbound, sends, triages replies, and books meetings. Faster and cheaper per touch.",
    glyph: "AI",
  },
  {
    label: "HUMAN SDR",
    headline: "Best for judgment.",
    line: "Handles strategic accounts, complex objections, and warm-handoff conversations. Slower per touch, stronger on conversion.",
    glyph: "HU",
  },
  {
    label: "BLEND",
    headline: "Best for most teams.",
    line: "AI runs top-of-funnel volume. Humans take over once a reply needs nuance or the deal goes multi-thread.",
    glyph: "AI+",
  },
];

const what = [
  { tag: "RESEARCH", title: "Account intel", line: "Pulls firmographic, tech-stack, and intent signals on every account before writing." },
  { tag: "WRITING", title: "Personalized outbound", line: "Generates first-touch and follow-up sequences in your brand voice with real personalization." },
  { tag: "SEND + WARMUP", title: "Deliverability hardened", line: "Subdomain warmup, SPF/DKIM/DMARC, send caps per inbox, inbox rotation." },
  { tag: "REPLIES", title: "Reply triage", line: "Classifies interested vs. not-now vs. unsubscribe. Routes hot replies to a human in seconds." },
  { tag: "BOOKING", title: "Meeting booking", line: "Pulls calendar availability and schedules calls without back-and-forth." },
  { tag: "REPORTING", title: "Pipeline tracking", line: "Weekly performance review: open rates, reply rates, meetings booked, qualified pipeline created." },
];

const steps = [
  { num: "01", title: "Audit ICP + offer", line: "We map your ICP, value props, current outbound stack, and what is working." },
  { num: "02", title: "Configure agent or place human", line: "Spin up the AI agent with your voice and personalization, or recruit a human SDR." },
  { num: "03", title: "Launch + warm up", line: "Domains warmed, inboxes ramped, first sequences live within two weeks." },
  { num: "04", title: "Tune the pipeline", line: "Weekly performance review, sequence iteration, ICP refinement based on real replies." },
];

const fitFor = [
  { tag: "B2B SAAS FOUNDERS", line: "Need pipeline but cannot justify a full SDR team yet." },
  { tag: "AGENCY OWNERS", line: "Outbound for clients without growing a service team." },
  { tag: "SMB SALES LEADERS", line: "Top-of-funnel coverage without burning rep hours on research and writing." },
  { tag: "REVENUE OPS", line: "Want AI-led outbound that integrates cleanly with the existing CRM and motion." },
];

const engagement = [
  { tag: "SETUP", title: "One-time setup", line: "ICP audit, sending infrastructure, AI agent configuration, CRM and calendar integration, sequence v1." },
  { tag: "MANAGED", title: "Monthly management", line: "Sequence tuning, reply oversight, weekly reporting, deliverability monitoring, ICP refinement." },
  { tag: "BLEND", title: "AI + human SDR", line: "Add a placed human SDR alongside the agent for strategic accounts and warm hand-offs." },
];

const faqItems: FAQ[] = [
  {
    question: "What is an AI SDR and how is it different from a human SDR?",
    answer:
      "An AI SDR is an AI agent that handles outbound prospecting end to end: account research, message writing, sending, reply triage, and meeting booking. A human SDR does the same work manually. The AI SDR runs faster and cheaper per touch; a human SDR brings judgment to complex objections and high-value accounts. Most founders run a blend: AI SDR for top-of-funnel volume, human for the strategic accounts.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Will the AI SDR get my domain flagged or blacklisted?",
    answer:
      "Our setup includes deliverability hardening from day one: subdomain warmup, SPF/DKIM/DMARC configuration, send-volume ramp, inbox rotation, and reply-rate monitoring. We do not send from your primary domain, and we cap volume per inbox at deliverability-safe levels. The AI agent is configured to write personalized, non-spammy outbound by default.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "What is included in the AI SDR setup service?",
    answer:
      "Initial ICP and offer audit, sending infrastructure setup (domain, inboxes, warmup), AI agent configuration with your brand voice and value props, integration with your CRM and meeting tool, weekly performance tuning, and monthly reporting. We can also place a human SDR alongside the AI agent if your motion needs both.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiSdrOutreachPage() {
  const serviceSchema = generateServiceSchema(
    "AI SDR for Outreach",
    "Done-for-you AI SDR setup service. Hire an AI agent or human SDR to research accounts, write outbound, and book meetings.",
    `${siteMetadata.url}/ai-sdr-outreach/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI SDR for Outreach", url: `${siteMetadata.url}/ai-sdr-outreach/` },
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
            AI SDR FOR OUTREACH
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Hire an AI SDR Agent
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or a Human SDR to Run Your Outbound.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Done-for-you AI SDR setup service. Researches accounts, writes outbound, books meetings.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="#engagement" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See engagement
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
              AI SDR vs. human SDR vs. blend.
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

      {/* WHAT IT DOES bento */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What it does</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What does an AI SDR actually do for outreach?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {what.map((w) => (
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

      {/* HOW IT WORKS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              How does our AI SDR setup service work?
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

      {/* ENGAGEMENT */}
      <section id="engagement" className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Engagement</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Setup, managed, or AI plus human.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagement.map((e) => (
              <div
                key={e.title}
                className="p-7 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{e.tag}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{e.title}</h3>
                <p className="mt-4 text-sm text-dark-300 leading-relaxed">{e.line}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact/" size="lg">Scope your AI SDR</Button>
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
            Pair the SDR with the rest of the stack.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Pair the SDR with{" "}
            <a href="/ai-developers-who-build-ai/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI developers who build the matching models
            </a>{" "}
            when you need custom personalization. Founders ranking on talent volume should also see{" "}
            <a href="/hire-data-analysts-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              data analysts and data engineers
            </a>{" "}
            to track outbound performance. And once outbound pulls top engineering candidates, use{" "}
            <a href="/ai-agent-hr-recruiting/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              our AI agent for recruiting outreach
            </a>{" "}
            to handle them.
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
            Ready to put an AI SDR on your outbound?
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us your ICP. Scoped proposal in 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
