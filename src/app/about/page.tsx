import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "About | AI Automation Agency for Founders | Workforce Next",
  description:
    "Workforce Next is an AI automation agency for founders. Four services: consulting, AI agents and workflows, dedicated developers and QA, and AEO/GEO organic growth. Based in India.",
  keywords: [
    "about Workforce Next",
    "AI automation agency for founders",
    "AI agency India",
    "AI consulting and automation",
    "AEO GEO agency",
    "dedicated AI developers India",
  ],
  openGraph: {
    ...ogDefaults("/about/"),
    images: ["/images/og-default.png"],
    title: "About | AI Automation Agency for Founders",
    description:
      "Workforce Next is an AI automation agency for founders. Four services, one partner.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/about/`,
  },
};

const services = [
  { num: "01", tag: "CONSULTING", line: "Product development consulting." },
  { num: "02", tag: "AUTOMATION", line: "AI agents and workflows." },
  { num: "03", tag: "TALENT", line: "Dedicated developers and QA." },
  { num: "04", tag: "GROWTH", line: "AEO, GEO, SEO for organic pipeline." },
];

const values = [
  {
    title: "One partner, whole arc",
    line: "Decide, build, automate, grow. No handoffs.",
  },
  {
    title: "Honesty over polish",
    line: "If something will not work, we say so. Better decisions, less rework.",
  },
  {
    title: "Context compounds",
    line: "What we ship in one motion sharpens the next.",
  },
];

const principles = [
  "Built around founders, not bureaucracy",
  "Engineering-grade execution, not slide decks",
  "Fixed-scope sprints, weekly delivery cadence",
  "Discovery call first, never a hard sell",
  "Pricing on the call, never on the page",
  "Written deliverables you can act on",
];

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "About", url: `${siteMetadata.url}/about/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-20 md:pt-40 md:pb-24">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative max-w-4xl">
          <Badge variant="primary" className="mb-4">ABOUT US</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 dark:text-dark-50 leading-[1.05]">
            AI Automation Agency
            <br />
            <span className="text-primary-500">built for founders.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-dark-500 dark:text-dark-300 max-w-2xl">
            Four services, one partner. Consulting, automation, talent, and organic growth.
          </p>

          {/* Forte ribbon */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-2xl bg-dark-900 dark:bg-primary-500/15 border border-primary-500/30">
            <span className="text-sm font-bold text-primary-300 dark:text-primary-300 uppercase tracking-widest">Our forte</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-400" />
            <span className="text-base sm:text-lg font-extrabold text-white dark:text-dark-50">
              Ownership · Automation · Engineering
            </span>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — visual grid */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four services. End to end.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl transition-all overflow-hidden"
              >
                <span aria-hidden className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary-50 dark:text-primary-500/10 leading-none select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{s.tag}</p>
                  <p className="mt-2 text-base font-extrabold text-dark-900 dark:text-dark-50 leading-snug">{s.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3 text-center">The story</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-10">
            Why we built it this way.
          </h2>
          <div className="space-y-5 text-dark-500 dark:text-dark-300 leading-relaxed text-lg">
            <p>
              We started as a software services company in 2020. We saw the same pattern everywhere: founders forced to hire one vendor for strategy, another for engineering, another for automation, another for marketing. Four contracts. Four handoffs. Four invoices. Constant context loss.
            </p>
            <p>
              The work that compounds <strong>is</strong> the work that does not get handed off. So we rebuilt around four services delivered by one partner: consulting, automation, talent, and AEO/GEO growth.
            </p>
            <p>
              <strong className="text-dark-900 dark:text-dark-50">SethAI</strong> powers the talent service. It matches engineers by context and longevity, not just tech stack.
            </p>
          </div>
        </div>
      </section>

      {/* FORTE BANNER */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl -translate-y-1/2" />
        </div>
        <div className="container-custom relative text-center max-w-4xl">
          <p className="text-sm font-bold text-primary-300 uppercase tracking-widest mb-4">Our forte</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              Ownership.
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            <span className="bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 bg-clip-text text-transparent">
              Automation.
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text text-transparent">
              Engineering.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Three things we are obsessive about across all four services.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we believe</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Three things we will not budge on.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative p-7 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-extrabold text-dark-900 dark:text-dark-50">{v.title}</h3>
                <p className="mt-3 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{v.line}</p>
                <div className="mt-5 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES — tag list */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">How we operate</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Operating principles.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-dark-800 border border-dark-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 text-primary-300 flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <p className="text-dark-100 leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Who runs it.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 p-7 rounded-2xl border border-dark-50 dark:border-dark-700 bg-primary-50/40 dark:bg-dark-800">
            <div className="shrink-0">
              <Image
                src="/images/gaurav.jpeg"
                alt="Gaurav, Founder of Workforce Next"
                width={120}
                height={120}
                className="rounded-2xl object-cover w-24 h-24 sm:w-28 sm:h-28 shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-dark-900 dark:text-dark-50">Gaurav</h3>
              <p className="text-sm font-bold text-primary-500 mb-3">Founder &amp; Solution Architect</p>
              <p className="text-dark-500 dark:text-dark-300 leading-relaxed mb-4">
                20 years in solution architecture and enterprise software. Built Workforce Next to give founders one partner across the whole arc.
              </p>
              <Link href="/about/gaurav" className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-600 font-bold text-sm transition-colors">
                Read full bio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Where we are</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            India, remote-first.
          </h2>
          <div className="inline-block p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 text-left">
            <p className="font-extrabold text-dark-900 dark:text-dark-50 mb-1">Workforce Next Pvt. Ltd.</p>
            <p className="text-dark-500 dark:text-dark-300">DLF Cyber City, Gurugram, Haryana, India</p>
            <p className="text-sm text-dark-400 mt-1">Tech Office: NPX Urbtech, Sector 153, Noida, U.P.</p>
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
            Want to work with us?
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            One discovery call. Scoped proposal in 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">Book a discovery call</Button>
            <Button href="/careers" variant="outline" size="lg" className="!border-white/30 !text-white hover:!border-white hover:!bg-white/10">
              Join the team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
