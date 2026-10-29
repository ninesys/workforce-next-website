import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GccLeadForm from "@/components/gcc/GccLeadForm";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "India GCC Setup with a Build-Operate-Transfer Model",
  description:
    "Build and operate your Global Capability Center in India, then transfer full ownership to you on your timeline. Hiring, entity setup, infrastructure, and governance handled end to end.",
  keywords: [
    "GCC India",
    "build operate transfer India",
    "BOT model India",
    "set up GCC in India",
    "India Global Capability Center partner",
    "global capability center setup India",
    "captive center India",
    "GCC build operate transfer",
  ],
  openGraph: {
    ...ogDefaults("/for/gcc-india/"),
    images: ["/images/pages/gcc-india-hero.webp"],
    title: "India GCC Setup with a Build-Operate-Transfer Model",
    description:
      "Build and operate your Global Capability Center in India, then transfer full ownership to you on your timeline.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/for/gcc-india/`,
  },
};

const botPhases = [
  {
    label: "BUILD",
    headline: "We stand up the center.",
    line: "Entity planning support, office or hybrid setup, hiring plan, and the first core team hired against your bar, not a generic vendor profile.",
    glyph: "01",
  },
  {
    label: "OPERATE",
    headline: "We run it while it scales.",
    line: "HR, payroll, infrastructure, delivery management, and quality all run day to day while the team grows toward your target headcount.",
    glyph: "02",
  },
  {
    label: "TRANSFER",
    headline: "We hand over full ownership.",
    line: "Entity, team, and infrastructure transfer to you on a timeline agreed up front, not an open-ended arrangement with no exit.",
    glyph: "03",
  },
];

const whyIndia = [
  { tag: "TALENT DEPTH", line: "Senior engineering, data, and QA talent across every major stack, not a thin layer of generalists." },
  { tag: "TIMEZONE OVERLAP", line: "Workable overlap windows with the US, UK, and Europe for daily standups and live collaboration." },
  { tag: "COST STRUCTURE", line: "A materially lower fully-loaded cost per engineer than building the same team in the US, UK, or Western Europe." },
  { tag: "SCALE READINESS", line: "Hiring pipelines and infrastructure built to go from a handful of people to several hundred without a rebuild." },
];

const timeline = [
  { num: "01", title: "Scope the center", line: "Functions, headcount targets, entity structure, and the transfer timeline agreed before anything is hired." },
  { num: "02", title: "Build the core team", line: "Leadership and first engineers hired against your bar. Office, tooling, and compliance set up in parallel." },
  { num: "03", title: "Operate and scale", line: "Day-to-day HR, payroll, delivery, and quality run by us while headcount grows toward the agreed target." },
  { num: "04", title: "Prepare the handover", line: "Entity, contracts, infrastructure, and knowledge documented well ahead of the transfer date, not at the last minute." },
  { num: "05", title: "Transfer ownership", line: "The entity, the team, and the infrastructure become fully yours. No lock-in, no ongoing dependency on us." },
];

const whatTransfers = [
  {
    tag: "WHAT TRANSFERS TO YOU",
    items: [
      "The legal entity (or a clean transfer of the team into your own entity)",
      "Every employee's contract, novated to you directly",
      "Infrastructure, tooling licenses, and office arrangements",
      "Process documentation and delivery knowledge",
    ],
  },
  {
    tag: "WHAT WE KEEP SEPARATE FROM DAY ONE",
    items: [
      "Your IP stays yours. Assignment terms are in the original agreement, not negotiated at transfer time.",
      "No shared infrastructure that creates a dependency on us post-transfer",
      "No vendor lock-in clauses that make transfer harder than it needs to be",
      "A transfer date and criteria agreed before the center is even built",
    ],
  },
];

const fitFor = [
  { tag: "COMPANIES SCALING ENGINEERING IN INDIA", line: "Want an owned team of 25-200+, not a staffing arrangement." },
  { tag: "TEAMS WITHOUT INDIA ENTITY EXPERIENCE", line: "Need the center built and run by people who have done it before, not a first attempt in-house." },
  { tag: "ORGANIZATIONS WITH A CLEAR EXIT DATE IN MIND", line: "Want operational support now and full ownership on a defined timeline." },
  { tag: "ENTERPRISES EVALUATING GCC VS STAFF AUGMENTATION", line: "Need the center to eventually be fully theirs, not an ongoing dependency on a vendor." },
];

const faqItems: FAQ[] = [
  {
    question: "What is a Build-Operate-Transfer (BOT) model for a GCC in India?",
    answer:
      "BOT means a partner builds your Global Capability Center in India, including hiring, entity setup, and infrastructure, operates it day to day while it scales, and then transfers full ownership, the entity, the team, and the infrastructure, to you on an agreed timeline. You end up with a fully owned India center without having to build the operating capability from scratch yourself.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "How is a GCC different from staff augmentation or hiring dedicated developers?",
    answer:
      "Staff augmentation gives you people who work as your team but remain employed by the vendor indefinitely. A GCC under a BOT model is a path to an entity and a team you will own outright. If you want a handful of developers ongoing, staff augmentation is simpler. If you want a scaled, owned India operation with a defined path to full control, a GCC and BOT model fits better.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "How long does the Build phase take?",
    answer:
      "It depends on scope and target headcount, but a core leadership and first-wave engineering team is typically in place within a few months of signing. Full scale-up to target headcount happens over the Operate phase, on a schedule set during initial scoping, not an open-ended ramp.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "When does the Transfer actually happen, and what does it include?",
    answer:
      "The transfer date and the criteria that trigger it (headcount reached, operational maturity, or simply a calendar date) are agreed before the center is built, not negotiated after the fact. Transfer includes the legal entity or a clean novation of every employee's contract to you, infrastructure and tooling, and full process documentation.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "Who owns the IP built during the Build and Operate phases?",
    answer:
      "You do. IP assignment terms are written into the original agreement before the center starts operating, not revisited at transfer time. This is a standard, non-negotiable term of how we structure every GCC engagement.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "Is there any lock-in after the transfer?",
    answer:
      "No. Once the entity, team, and infrastructure transfer, there is no shared tooling, licensing, or dependency that requires an ongoing relationship with us. You can optionally keep working with us on specific problems afterward, but nothing about the GCC itself requires it.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
  {
    question: "What size company is a GCC and BOT model a good fit for?",
    answer:
      "It fits organizations planning a team of roughly 25 to 200 or more people in India, where the end goal is an owned operation rather than an ongoing vendor arrangement. Smaller or shorter-term needs are usually better served by staff augmentation or a dedicated-hire engagement instead.",
    category: "hiring",
    categoryLabel: "GCC & BOT",
  },
];

export default function GccIndiaPage() {
  const serviceSchema = generateServiceSchema(
    "India GCC Build-Operate-Transfer",
    "Build and operate a Global Capability Center in India, then transfer full ownership, entity, team, and infrastructure, to the client on an agreed timeline.",
    `${siteMetadata.url}/for/gcc-india/`,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "GCC India (Build-Operate-Transfer)", url: `${siteMetadata.url}/for/gcc-india/` },
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
            GCC INDIA / BUILD-OPERATE-TRANSFER
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Build Your India GCC.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              Own It When You&apos;re Ready.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            We build and operate your Global Capability Center in India, then transfer the entity, the team, and the infrastructure to you on a timeline agreed up front.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#lead-form" size="lg">Request a scoping call</Button>
            <Button href="#bot-model" variant="outline" size="lg" className="!bg-white/10 !border-white/30 !text-white hover:!bg-white/20 hover:!text-white">
              See how BOT works
            </Button>
          </div>
          <div className="mt-14 overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <Image
              src="/images/pages/gcc-india-hero.webp"
              alt="India GCC build-operate-transfer model"
              width={1200}
              height={630}
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* BOT MODEL */}
      <section id="bot-model" className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The BOT model</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
              Build. Operate. Transfer.
            </h2>
          </div>
          <div className="mb-14 overflow-hidden rounded-2xl shadow-card border border-dark-50 dark:border-dark-700">
            <Image
              src="/images/pages/gcc-india-bot-phases.webp"
              alt="Build, operate, and transfer phases of setting up a GCC in India"
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {botPhases.map((p) => (
              <div
                key={p.label}
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-extrabold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {p.glyph}
                </div>
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{p.label}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">{p.headline}</h3>
                <p className="mt-4 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{p.line}</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INDIA */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Why India</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Why companies are building GCCs in India right now.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyIndia.map((w) => (
              <div
                key={w.tag}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{w.tag}</p>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{w.line}</p>
                <div className="mt-4 h-1 w-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Five steps from scoping to full ownership.
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            <div aria-hidden className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300" />
            {timeline.map((s) => (
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

      {/* WHAT TRANSFERS */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Ownership and IP</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Clean terms, agreed before day one.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatTransfers.map((group) => (
              <div
                key={group.tag}
                className="p-7 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700"
              >
                <p className="text-sm font-extrabold text-primary-400 uppercase tracking-widest mb-4">{group.tag}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-dark-100 leading-relaxed">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Best-fit organizations.
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
            Not ready for a full GCC yet?
          </h2>
          <p className="text-base sm:text-lg text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl mx-auto">
            If you need a handful of dedicated engineers rather than a full owned operation, see our{" "}
            <a href="/for/enterprise/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              enterprise engagement models
            </a>{" "}
            or hire{" "}
            <a href="/hire/software-architects/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              dedicated software architects
            </a>{" "}
            and{" "}
            <a href="/hire/backend-engineers/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              backend engineers
            </a>{" "}
            directly. For how we structure engagements so they actually last, see{" "}
            <a href="/why-teams-stay/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              why teams stay with us 18+ months
            </a>{" "}
            and{" "}
            <a href="/how-we-work/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              how we work
            </a>. And if you are still deciding between a full GCC and building your own India entity from scratch, read{" "}
            <a href="/blog/gcc-build-operate-transfer-vs-own-entity-india/" className="text-primary-500 hover:text-primary-600 font-bold underline">
              GCC Build-Operate-Transfer vs building your own entity
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

      {/* LEAD FORM */}
      <section id="lead-form" className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-overlay filter blur-3xl" />
        </div>
        <div className="container-custom relative max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Scope your India GCC.
            </h2>
            <p className="text-lg text-primary-50">
              Tell us your target team size and timeline. We&apos;ll come back with a scoped Build-Operate-Transfer plan.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <GccLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
