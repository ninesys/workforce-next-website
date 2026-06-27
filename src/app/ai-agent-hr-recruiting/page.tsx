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
  title: "AI Agent for HR & Recruiting Outreach Automation",
  description:
    "Done-for-you AI agent for recruiting outreach. Source, screen, and message candidates without burning recruiter hours. US and Canada founders and HR teams.",
  keywords: [
    "AI agent for recruiting outreach",
    "AI agent for HR",
    "done-for-you AI agents",
    "hire an AI agent or remote expert",
    "AI sourcing agent",
    "ATS automation",
    "recruiting outreach automation",
  ],
  openGraph: {
    ...ogDefaults("/ai-agent-hr-recruiting/"),
    images: ["/images/og-default.png"],
    title: "AI Agent for HR & Recruiting Outreach Automation",
    description:
      "Done-for-you AI agent for recruiting outreach. Sources, messages, screens, and schedules candidates.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/ai-agent-hr-recruiting/`,
  },
};

const agentVsHuman = [
  {
    label: "AI RECRUITING AGENT",
    headline: "Best for volume.",
    line: "Sources, first-touch outreach, reply triage, interview scheduling. Handles the work that burns recruiter hours.",
    glyph: "AI",
  },
  {
    label: "HUMAN RECRUITER",
    headline: "Best for closing.",
    line: "Offer conversations, candidate experience, judgment calls. Where the hire actually gets made.",
    glyph: "HU",
  },
  {
    label: "BLEND",
    headline: "Best for hiring teams.",
    line: "Agent does volume. Human takes warm replies and runs the close. Recruiters focus on conversation, not sourcing.",
    glyph: "AI+",
  },
];

const workflow = [
  { tag: "SOURCING", title: "From LinkedIn, GitHub, talent communities", line: "Pulls candidates against your role brief. Filters out the obvious mismatches." },
  { tag: "OUTREACH", title: "First-touch and follow-ups", line: "Personalized messages in your voice. References real signals from the candidate's profile." },
  { tag: "REPLIES", title: "Reply triage", line: "Classifies interested, not now, no. Hot replies get a human hand-off in minutes." },
  { tag: "SCREENING", title: "Resume screening", line: "Reads resumes against your rubric. Flags top matches, surfaces concerns." },
  { tag: "SCHEDULING", title: "Interview scheduling", line: "Books first-round calls without back-and-forth. Calendar invites in your tool." },
  { tag: "ATS", title: "ATS sync", line: "Reads open roles and writes sourced candidates back. Recruiters work in one tool, not two." },
];

const atsIntegrations = [
  { tag: "GREENHOUSE", line: "Native" },
  { tag: "LEVER", line: "Native" },
  { tag: "ASHBY", line: "Native" },
  { tag: "WORKABLE", line: "Native" },
  { tag: "BAMBOOHR", line: "Native" },
  { tag: "CUSTOM ATS", line: "API or webhook" },
];

const steps = [
  { num: "01", title: "Map the role", line: "We capture your role brief, must-haves, deal-breakers, and your company voice." },
  { num: "02", title: "Configure the agent", line: "Personalization rules, sourcing parameters, ATS integration, scheduling tool." },
  { num: "03", title: "Launch + warm up", line: "Outreach domains warmed, first sequences live, performance tuned weekly." },
  { num: "04", title: "Recruiters run the close", line: "Agent hands warm replies to recruiters. Humans own the offer." },
];

const fitFor = [
  { tag: "HEADS OF TALENT", line: "Need to source at volume without growing the recruiter team." },
  { tag: "FOUNDERS HIRING ENGINEERS", line: "No in-house recruiter and no time to source themselves." },
  { tag: "HR LEADERS AT SMBS", line: "One-person HR team that needs leverage, not more tools." },
  { tag: "AGENCY RECRUITERS", line: "Source for clients faster without giving up margin to platforms." },
];

const faqItems: FAQ[] = [
  {
    question: "What does an AI agent for recruiting outreach actually do?",
    answer:
      "It sources candidates from LinkedIn, GitHub, and other public talent surfaces based on your role brief, sends personalized first-touch outreach, classifies replies (interested, not now, no), and schedules interviews with the ones who say yes. A human recruiter still owns the offer conversation and the final decision. The agent handles the volume work that burns recruiter hours.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Will an AI recruiting agent damage our employer brand?",
    answer:
      "Only if it sends mass-templated messages, and that is not how we set them up. The agent is configured with your role context, your company voice, and a personalization layer that references real signals from the candidate's profile. Reply rates from candidates are typically higher than batch-and-blast templates because the messages read like a recruiter wrote them.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "Can the AI agent integrate with our ATS?",
    answer:
      "Yes. Standard integrations with Greenhouse, Lever, Ashby, Workable, BambooHR, and Recruitee. Custom integrations for in-house ATS via API or webhook. The agent reads open roles from your ATS and writes sourced candidates and interview events back, so your recruiters work in one tool, not two.",
    category: "automation",
    categoryLabel: "Automation",
  },
];

export default function AiAgentHrRecruitingPage() {
  const serviceSchema = generateServiceSchema(
    "AI Agent for HR and Recruiting",
    "Done-for-you AI agent for recruiting outreach. Source, message, screen, and schedule candidates. Built for US and Canada founders and HR teams.",
    `${siteMetadata.url}/ai-agent-hr-recruiting/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "AI Agent for HR and Recruiting", url: `${siteMetadata.url}/ai-agent-hr-recruiting/` },
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
            AI AGENT FOR HR &amp; RECRUITING
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Run an AI Agent for Recruiting Outreach,
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              or Hire a Human Recruiter (or Both).
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Sources, messages, screens, and schedules candidates. Without burning recruiter hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">Book a discovery call</Button>
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
              AI recruiting agent vs. human recruiter.
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
              Where the AI agent plugs into your hiring workflow.
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

      {/* ATS INTEGRATIONS */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">ATS integrations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Plugs into the ATS you already use.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {atsIntegrations.map((s) => (
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
              Four steps to live recruiting outreach.
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
            What we pair with recruiting outreach.
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            Most teams hire engineers. See our{" "}
            <a href="/ai-developers-who-build-ai/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI developers who build AI models
            </a>{" "}
            if that is who the agent is sourcing. Recruiting a data team? Pair this with{" "}
            <a href="/hire-data-analysts-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              data analysts and data engineers
            </a>{" "}
            so the AI agent knows the right roles to target. The same outreach mechanics that work for candidates also work for customers. See our{" "}
            <a href="/ai-sdr-outreach/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              AI SDR setup service
            </a>.
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
            Source the next hire without burning recruiter hours.
          </h2>
          <p className="text-lg text-primary-50 mb-8">Tell us the role. Scoped proposal in 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
