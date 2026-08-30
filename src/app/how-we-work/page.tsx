import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "How We Work | AI Automation Agency for Founders",
  description:
    "How we deliver our four services: product consulting, AI agents for operations, dedicated developers and QA, and AEO/GEO organic growth. One discovery call, one partner, four motions.",
  keywords: [
    "AI automation agency process",
    "how we work workforce next",
    "AI automation engagement model",
    "product development consulting process",
    "dedicated developer onboarding",
    "AEO GEO process",
  ],
  openGraph: {
    ...ogDefaults("/how-we-work/"),
    images: ["/images/og-default.png"],
    title: "How We Work | AI Automation Agency for Founders",
    description:
      "How we deliver our four services. One partner across the whole arc.",
  },
  alternates: {
    canonical: "https://wfnext.com/how-we-work/",
  },
};

const arc = [
  {
    label: "Decide",
    pillar: "01 · CONSULTING",
    headline: "Product development consulting.",
    line: "Architecture, stack, scope. We help you decide what to build.",
  },
  {
    label: "Build",
    pillar: "02 · TALENT",
    headline: "Dedicated developers and QA.",
    line: "Senior engineers in your timezone. They ship and test it.",
  },
  {
    label: "Automate",
    pillar: "03 · AUTOMATION",
    headline: "AI agents for operations.",
    line: "Workflows and AI agents take repetitive ops off your team.",
  },
  {
    label: "Grow",
    pillar: "04 · GROWTH",
    headline: "AEO + GEO + SEO.",
    line: "Get cited by ChatGPT, Perplexity, Gemini. Found in Google.",
  },
];

const steps = [
  {
    number: "01",
    name: "Share what you are trying to ship",
    text: "Tell us where you are: pre-PMF, scaling, or stuck. We scope a single engagement or a bundle of the four services.",
  },
  {
    number: "02",
    name: "Scoped proposal in 48 hours",
    text: "Written scope, fixed-price quote, and a clear delivery timeline. Approve and we start the following week.",
  },
  {
    number: "03",
    name: "Embedded delivery, weekly cadence",
    text: "Whichever service you picked, the team works your timezone and reports weekly. You see every change before it goes live.",
  },
  {
    number: "04",
    name: "Handover and what is next",
    text: "Written deliverables, team enablement, and an honest read on which of the other three services would move the needle next.",
  },
];

const fitFor = [
  {
    title: "Founders pre-PMF",
    line: "Start with Consulting. Decide before you spend.",
  },
  {
    title: "Funded startups scaling",
    line: "Start with Talent and Automation. Ship faster, free up ops.",
  },
  {
    title: "SaaS losing AI search",
    line: "Start with Growth. Be the one AI recommends.",
  },
  {
    title: "Teams shipping fast",
    line: "Bundle two or more. One partner, zero handoffs.",
  },
];

const whyItWorks = [
  {
    title: "One partner, four motions",
    line: "No handoffs between agency, consultancy, and dev shop. Same team carries the arc.",
  },
  {
    title: "Context compounds",
    line: "Whatever we ship for you in service one shows up sharper in service two.",
  },
  {
    title: "Fixed scope, weekly delivery",
    line: "You approve a scope. We ship to it. You see it weekly. No surprises.",
  },
];

const howToSchema = generateHowToSchema(
  "How Workforce Next delivers its four services",
  "A 4-step process for engaging with Workforce Next across consulting, automation, talent, and AEO/GEO growth.",
  steps.map((s) => ({ name: s.name, text: s.text }))
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://wfnext.com" },
  { name: "How We Work", url: "https://wfnext.com/how-we-work/" },
]);

export default function HowWeWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative max-w-4xl text-center">
          <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-200 border-primary-400/30">
            HOW WE WORK
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            One partner.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              Four motions.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Consulting decides. Talent builds. Automation runs the ops. Growth brings the buyers.
          </p>
          <div className="mt-10">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
          </div>
        </div>
      </section>

      {/* THE ARC */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The arc</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four services. One journey.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {arc.map((a) => (
              <div
                key={a.label}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{a.pillar}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-dark-900 dark:text-dark-50">{a.label}</h3>
                <p className="mt-3 text-sm font-bold text-dark-700 dark:text-dark-200">{a.headline}</p>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{a.line}</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — visual timeline */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four steps. No fluff.
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div aria-hidden className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300" />
            {steps.map((s) => (
              <div key={s.number} className="relative text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white font-extrabold text-xl shadow-lg shadow-primary-500/30">
                  {s.number}
                </div>
                <h3 className="mt-4 font-extrabold text-dark-900 dark:text-dark-50">{s.name}</h3>
                <p className="mt-1.5 text-sm text-dark-500 dark:text-dark-300">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO TO START WHERE */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Where to start</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Pick your first motion.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fitFor.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-extrabold text-dark-900 dark:text-dark-50">{f.title}</h3>
                  <p className="mt-1 text-sm text-dark-500 dark:text-dark-300">{f.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Why it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              The agency model, finally fixed.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whyItWorks.map((w) => (
              <div
                key={w.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <h3 className="text-lg font-extrabold text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{w.line}</p>
              </div>
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
            Tell us what you are shipping.
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            One discovery call. Scoped proposal in 48 hours.
          </p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
