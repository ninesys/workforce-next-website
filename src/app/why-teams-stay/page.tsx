import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateBreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Why Teams Stay | One Partner Across All Four Services",
  description:
    "We carry the whole arc: consulting, automation, talent, and growth. No handoffs. Context compounds across every motion. Here is why customers keep us across all four services.",
  keywords: [
    "AI automation agency retention",
    "one partner four services",
    "agency context continuity",
    "AI agency long term",
    "agency that delivers",
  ],
  openGraph: {
    ...ogDefaults("/why-teams-stay/"),
    images: ["/images/og-default.png"],
    title: "Why Teams Stay | One Partner Across All Four Services",
    description:
      "Consulting, automation, talent, and growth from one partner. Context compounds. Customers stay.",
  },
  alternates: {
    canonical: "https://wfnext.com/why-teams-stay/",
  },
};

const reasons = [
  {
    num: "01",
    tag: "ONE PARTNER",
    title: "Whole arc, no handoffs",
    line: "Same team carries you from deciding what to build, to shipping it, to running it, to bringing buyers in.",
  },
  {
    num: "02",
    tag: "CONTEXT",
    title: "Each motion sharpens the next",
    line: "What we learn in consulting shapes the build. What we ship informs the automation. What we automate feeds the growth motion.",
  },
  {
    num: "03",
    tag: "DELIVERY",
    title: "Fixed scope, weekly cadence",
    line: "Every engagement is scoped. Every week you see what shipped. No surprises, no scope creep, no monthly retainer trap.",
  },
];

const proofs = [
  { tag: "Consulting", line: "Architecture decisions you can point to a year later." },
  { tag: "Automation", line: "Workflows still running long after we handed them over." },
  { tag: "Talent", line: "Developers who actually understand the product." },
  { tag: "Growth", line: "Compounding organic traffic and AI citations." },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://wfnext.com" },
  { name: "Why Teams Stay", url: "https://wfnext.com/why-teams-stay/" },
]);

export default function WhyTeamsStayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative max-w-4xl text-center">
          <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-200 border-primary-400/30">
            WHY TEAMS STAY
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05]">
            One partner.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              Whole arc.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            Most agencies do one thing. We carry consulting, automation, talent, and growth. Context compounds. Customers stay.
          </p>

          {/* Forte ribbon */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-primary-400/30">
            <span className="text-xs font-bold text-primary-200 uppercase tracking-widest">Our forte</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-300" />
            <span className="text-base sm:text-lg font-extrabold text-white">
              Ownership <span className="text-primary-300">·</span> Automation <span className="text-primary-300">·</span> Engineering
            </span>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Three reasons</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Why one partner beats four vendors.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="group relative p-7 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <span aria-hidden className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary-50 dark:text-primary-500/10 leading-none select-none">
                  {r.num}
                </span>
                <div className="relative">
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{r.tag}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-dark-900 dark:text-dark-50">{r.title}</h3>
                  <p className="mt-3 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{r.line}</p>
                  <div className="mt-5 h-1 w-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT STAYS */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What lasts</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What we leave behind.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proofs.map((p) => (
              <div
                key={p.tag}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{p.tag}</p>
                  <p className="mt-1 text-base font-bold text-dark-900 dark:text-dark-50">{p.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        </div>
        <div className="container-custom relative text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Get one partner. Drop three vendors.
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            Tell us where you are. Scoped proposal in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="white" size="lg">Book a discovery call</Button>
            <Button href="/how-we-work" variant="outline" size="lg" className="!border-white/30 !text-white hover:!border-white hover:!bg-white/10">
              See how we work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
