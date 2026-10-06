import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Why Developers Stay | Offshore Developer Retention",
  description:
    "The average offshore developer engagement lasts 4 to 6 months. Ours average 18+ months. Here is the engagement structure that actually keeps dedicated developers on your team.",
  keywords: [
    "developer retention",
    "offshore developer retention",
    "remote developer attrition",
    "dedicated developer engagement model",
    "best staffing model for developer retention",
    "why offshore developers leave",
    "nearshore developer turnover",
  ],
  openGraph: {
    ...ogDefaults("/why-teams-stay/"),
    images: ["/images/og-default.png"],
    title: "Why Developers Stay | Offshore Developer Retention",
    description:
      "Industry average engagement: 4 to 6 months. Ours: 18+ months. The structure behind the difference.",
  },
  alternates: {
    canonical: "https://wfnext.com/why-teams-stay/",
  },
};

const whatWeDoDifferently = [
  {
    num: "01",
    tag: "ENGAGEMENT",
    title: "Dedicated, not rotated",
    line: "The developer works on your product only, full time. No splitting time across other clients, no quarterly reassignment to whoever is paying more that month.",
  },
  {
    num: "02",
    tag: "SCREENING",
    title: "Ownership mindset, not just stack match",
    line: "SethAI screens for whether a candidate asks why something is being built, not just whether they know the framework. Ownership signals predict retention better than tech-stack keywords do.",
  },
  {
    num: "03",
    tag: "CONTEXT",
    title: "Context compounds instead of resetting",
    line: "Architecture decisions, domain glossaries, and codebase context accumulate over the engagement under our Context Continuity Guarantee, so the developer gets more valuable to your team every month, not interchangeable with the next hire.",
  },
];

const warningSignsIntro =
  "Retention is a lot easier to manage when you catch disengagement a month early instead of in an exit conversation. We watch for Slack presence dropping, shrinking PR size, fewer questions, and pulling back from team rituals. One sign alone is nothing. Three is usually a goodbye email in a few weeks.";

const faqItems: FAQ[] = [
  {
    question: "Which offshore or remote staffing model actually has the best developer retention?",
    answer:
      "Dedicated engagement models outperform freelance marketplaces and rotating agency staffing on retention, because the developer works on one product full time instead of splitting attention across clients. The structural factors that drive retention are full-time dedication, ownership-mindset screening, and context that compounds instead of resetting with every new assignment, not the hourly rate or the brand name of the vendor.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long do dedicated offshore developer engagements typically last?",
    answer:
      "The industry average for an offshore developer engagement is 4 to 6 months before the developer rotates off or leaves. Our engagements average 18 or more months, driven by dedicated full-time placement, ownership-based screening, and a Context Continuity Guarantee that makes the developer more valuable to your team the longer they stay.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Why do offshore developers leave client projects early?",
    answer:
      "Rarely because of pay. The three real drivers are feeling like an interchangeable commodity, having no ownership over what they build, and seeing no career growth in being a rotating contractor on someone else's roadmap. Agencies that reassign developers between clients every quarter remove any incentive to deeply learn a codebase or a business.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Does developer retention depend on paying higher rates?",
    answer:
      "No. Retention is driven by engagement structure, not pay. Developers stay when they work on one product full time, have real ownership over decisions, and see their accumulated context and judgment valued by the team, not just when the hourly rate goes up.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What happens if a specific engineer we are placed with is not the right fit?",
    answer:
      "A replacement starts without you needing to justify the decision at length. There is no extra cost for the swap, a pre-vetted bench means the replacement is usually identified within days rather than weeks, and whatever context the first engineer built up transfers to the replacement so you are not starting over.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How is a dedicated engagement different from a freelance marketplace or staffing agency?",
    answer:
      "A freelance marketplace puts an independent contractor on your project who likely also works for other clients at the same time. A rotating staffing agency moves developers between client accounts on its own schedule. A dedicated engagement means one developer, full time, on your product only, for as long as the engagement runs, which is the structural difference behind why dedicated models retain longer.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the 'body shop' pattern in offshore staffing, and how do you avoid it?",
    answer:
      "It is the legacy outsourcing playbook: a senior engineer is pitched, a junior shows up on day one, the vendor keeps most of the margin, and the engineer rotates across several client accounts to protect that margin. We avoid it structurally: no lock-in contract, no conversion fee if you hire the engineer in-house later, and every statutory and operational line on the India side handled on our end so it never becomes the client's problem.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://wfnext.com" },
  { name: "Why Developers Stay", url: "https://wfnext.com/why-teams-stay/" },
]);

const faqSchema = generateFAQPageSchema(faqItems);

export default function WhyTeamsStayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative max-w-4xl text-center">
          <Badge variant="primary" className="mb-6 bg-primary-500/20 text-primary-200 border-primary-400/30">
            DEVELOPER RETENTION
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05]">
            Developers who stay.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-200 bg-clip-text text-transparent">
              Not developers who rotate.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto">
            The average offshore developer engagement lasts 4 to 6 months before the developer rotates off or leaves. Ours average 18 or more months. The difference is the engagement structure: full-time dedication, ownership-mindset screening, and context that compounds instead of resetting.
          </p>

          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-primary-400/30">
            <span className="text-xs font-bold text-primary-200 uppercase tracking-widest">Built for</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-300" />
            <span className="text-base sm:text-lg font-extrabold text-white">
              Ownership <span className="text-primary-300">·</span> Context <span className="text-primary-300">·</span> Longevity
            </span>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-dark-50 dark:border-dark-700 text-center">
              <p className="text-xs font-bold text-dark-400 uppercase tracking-widest mb-2">Industry average</p>
              <p className="text-5xl font-extrabold text-dark-400 dark:text-dark-500">4-6 months</p>
              <p className="mt-2 text-sm text-dark-500 dark:text-dark-400">before an offshore developer rotates off or leaves</p>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary-400 bg-primary-50/40 dark:bg-primary-500/10 text-center">
              <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">WorkforceNext average</p>
              <p className="text-5xl font-extrabold text-primary-600 dark:text-primary-300">18+ months</p>
              <p className="mt-2 text-sm text-dark-500 dark:text-dark-300">and most of our placements exceed that</p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY SHOP PATTERN */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The root cause</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Most churn traces back to the body-shop pattern.
            </h2>
          </div>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed text-center max-w-2xl mx-auto">
            The legacy outsourcing playbook: a senior architect shows up on the pitch deck, a junior shows up on day one. The vendor takes a heavy markup, pays the engineer little of it, and rotates them across several client accounts to keep margins up. The engineer has no reason to stay on any single codebase, and the client has no reason to trust the next engineer who shows up either. This is the pattern that gave tier-one Indian outsourcing its reputation, and it is still how a lot of staffing works.
          </p>
          <p className="mt-6 text-dark-600 dark:text-dark-200 leading-relaxed text-center max-w-2xl mx-auto">
            We structure engagements specifically to avoid it: no lock-in contract, no conversion fee if you want to hire the engineer in-house later, and every statutory and operational line on the India side (PF, GST, FEMA) handled on our end so a client-side team never inherits that complexity.
          </p>
        </div>
      </section>

      {/* WHY DEVELOPERS LEAVE */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The real reason</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Why most offshore developers leave early.
            </h2>
          </div>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed text-center max-w-2xl mx-auto">
            Rarely about money. Developers leave when they feel like a commodity interchangeable with any other developer, when they have no ownership over what they build, and when there is no career growth in being a rotating contractor on someone else&apos;s product. See the <a href="/blog/why-offshore-developers-keep-leaving/" className="text-primary-600 dark:text-primary-300 underline">full breakdown of why offshore developers leave and what actually works</a> for the mechanics.
          </p>
        </div>
      </section>

      {/* WHAT WE DO DIFFERENTLY */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The structure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What makes developers stay.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatWeDoDifferently.map((r) => (
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

      {/* WARNING SIGNS + FIT */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Caught early</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              We watch for disengagement before it becomes an exit.
            </h2>
          </div>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed text-center max-w-2xl mx-auto">
            {warningSignsIntro}
          </p>
          <p className="mt-6 text-dark-600 dark:text-dark-200 leading-relaxed text-center max-w-2xl mx-auto">
            And if a specific engineer genuinely is not the right fit, that is a different problem from attrition, and it is covered separately. See <a href="/blog/dedicated-developer-replacement-and-exit-terms/" className="text-primary-600 dark:text-primary-300 underline">what a real replacement guarantee should cover</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about developer retention</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-primary-50/40 dark:bg-dark-800 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
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
            Get a developer who sticks around.
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            Tell us what you need. Scoped proposal in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
            <Button href="/how-we-work/" variant="outline" size="lg" className="!border-white/30 !text-white hover:!border-white hover:!bg-white/10">
              See how we work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
