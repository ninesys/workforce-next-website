import { Metadata } from "next";
import { ogDefaults, siteMetadata } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Nearshore Software Development Company, India",
  description:
    "Workforce Next is an India-based nearshore software development company serving US, UK, and EU clients. Dedicated engineering teams with 4+ hours daily overlap, SethAI-matched to your stack and industry.",
  keywords: [
    "nearshore software development companies",
    "nearshore software development india",
    "nearshore development team",
    "offshore software development companies",
    "dedicated software development team india",
    "outsource software development india",
  ],
  openGraph: {
    ...ogDefaults("/nearshore-software-development/"),
    images: ["/images/og-default.png"],
    title: "Nearshore Software Development Company, India",
    description:
      "India-based nearshore software development. Dedicated engineering teams with daily timezone overlap for US, UK, and EU clients. SethAI-matched engineers.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/nearshore-software-development/`,
  },
};

const comparison = [
  {
    criterion: "Timezone overlap",
    nearshore: "4-8 hrs/day typical (Eastern Europe, LatAm)",
    india: "4-6 hrs/day with a shifted schedule, 8+ hrs on India Standard Time for UK",
    verdict: "Comparable",
  },
  {
    criterion: "English fluency",
    nearshore: "High in Eastern Europe and LatAm tech hubs",
    india: "High. English is the language of Indian engineering education and business",
    verdict: "Comparable",
  },
  {
    criterion: "Engineering talent pool",
    nearshore: "Deep in specific locations (Poland, Romania, Colombia)",
    india: "Largest English-speaking engineering graduate pool in the world",
    verdict: "India advantage",
  },
  {
    criterion: "Cost vs US hiring",
    nearshore: "Meaningfully lower than US rates",
    india: "Meaningfully lower than US rates, typically below nearshore pricing too",
    verdict: "India advantage",
  },
  {
    criterion: "Regulatory / compliance",
    nearshore: "EU data residency for Eastern Europe; LatAm varies",
    india: "IT/ITES industry has decades of US compliance alignment",
    verdict: "Comparable",
  },
];

const services = [
  {
    title: "Dedicated development teams",
    description:
      "One engineer or a full pod matched to your stack and domain. Frontend, backend, full-stack, AI/ML, DevOps. Paid trial week before you commit.",
    href: "/for/startups/",
  },
  {
    title: "AI agents and automation",
    description:
      "AI-native engineers who build production LLM applications, agentic workflows, and process automation, not just prototypes.",
    href: "/hire/ai-developers/",
  },
  {
    title: "Vibe-code hardening",
    description:
      "Audit and harden AI-generated codebases before they face real traffic. Rate limiting, security, scalable architecture, in place, not rewritten.",
    href: "/hire/vibe-code-engineer/",
  },
  {
    title: "QA and software testing",
    description:
      "Dedicated QA teams covering manual testing, test automation, performance, and security. Embedded in your sprint cycle.",
    href: "/qa-testing-services/",
  },
  {
    title: "India GCC setup (Build-Operate-Transfer)",
    description:
      "For companies ready to build a permanent India engineering hub. We build, operate, and transfer full ownership to you on your timeline.",
    href: "/for/gcc-india/",
  },
];

const faqItems: FAQ[] = [
  {
    question: "Is India considered nearshore for US companies?",
    answer:
      "Technically, nearshore refers to geographic proximity: Eastern Europe for Western Europe, Latin America for North America. India is offshore in that strict definition. In practice, the qualities buyers seek from nearshore vendors are language fluency, time zone overlap, cultural alignment, and engineering depth, and India delivers all four when the engagement is structured correctly. A shifted-schedule India team working 1pm-10pm IST overlaps with US Eastern business hours almost entirely. The geography is different; the working relationship is comparable.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How does timezone overlap work with an India team?",
    answer:
      "India Standard Time is UTC+5:30. For US Eastern Time, this creates a natural overlap in the mornings (IST afternoon). For US Pacific, our engineers shift their schedule to start at 1pm-2pm IST, covering the full US Pacific morning. Every Workforce Next engagement includes at least 4 hours of guaranteed daily overlap for standups, pair programming, and async catch-up. UK clients get near-complete overlap on a standard IST schedule.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What makes Workforce Next different from other India-based software development companies?",
    answer:
      "Two things. First, SethAI screens for industry context and longevity signals, not just technical keywords. An engineer matched to a fintech startup has actually shipped payment systems, not just listed fintech on their CV. Second, context continuity is built into every engagement: codebase walkthrough, domain glossary, architecture decision log. When the team grows or someone leaves, the next engineer ramps in days, not months.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What types of companies do you typically work with?",
    answer:
      "We work with three kinds of clients: technical founders who built something with AI coding tools and need it hardened for real users; funded startups that have junior developers but need senior engineering oversight; and US or UK companies that want a permanent India engineering team set up via our Build-Operate-Transfer model without the risk of incorporating in India themselves.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How quickly can a nearshore development team be assembled?",
    answer:
      "SethAI delivers matched profiles within 48 hours of your intake call. From requirements to a developer starting their trial week is typically 7 to 10 business days. For a full engineering pod (3 to 5 engineers), allow 2 to 3 weeks for the matching and interview process across the team. Every engagement starts with a paid trial week, real work on your actual codebase, before you commit.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function NearshoreSoftwareDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    "Nearshore Software Development, India",
    "Dedicated nearshore software development teams from India. Daily timezone overlap for US, UK, and EU clients. SethAI-matched engineers screened for skills and longevity.",
    `${siteMetadata.url}/nearshore-software-development/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Nearshore Software Development", url: `${siteMetadata.url}/nearshore-software-development/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            NEARSHORE DEVELOPMENT
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Nearshore software development company, India.
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Dedicated engineering teams from India with daily timezone overlap for
            US, UK, and EU clients. SethAI-matched to your stack and industry.
            The quality of nearshore without the Eastern Europe or LatAm price premium.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Book a discovery call
            </Button>
            <Button href="/how-we-work/" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Timezone reassurance */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            The timezone question, answered honestly
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most buyers who search for nearshore software development companies are
              really asking one question: will I be able to work with this team like
              they are in the same building? The honest answer for India is: yes, with
              the right schedule structure.
            </p>
            <p>
              India Standard Time is UTC+5:30. A developer on a standard schedule
              reaches full overlap with US Eastern mornings and UK business hours
              without any schedule change. For US Pacific clients, we structure an
              afternoon-start schedule (1pm IST onward), giving you 6 to 8 hours of
              live overlap with your working day. Every Workforce Next engagement
              guarantees a minimum of 4 hours of daily overlap, enforced in the
              working agreement, not just promised on a sales call.
            </p>
            <p>
              The second timezone concern is communication lag on async work. We
              address this through structured daily handoffs, documented decision logs,
              and the same context documentation tools we use for every engagement.
              When you start the day, you have a clear record of what was done,
              what was decided, and what is blocked.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Nearshore vs India: how the criteria actually compare
          </h2>
          <p className="text-dark-500 dark:text-dark-300 mb-8">
            These are the criteria buyers use when evaluating nearshore software
            development companies. India holds up on every one.
          </p>
          <div className="tw overflow-x-auto">
            <table className="w-full text-sm border-collapse" style={{minWidth: "520px"}}>
              <thead>
                <tr>
                  <th className="text-left font-medium text-dark-400 dark:text-dark-400 pb-3 pr-6 border-b border-dark-200 dark:border-dark-700 text-xs uppercase tracking-wide">Criterion</th>
                  <th className="text-left font-medium text-dark-400 dark:text-dark-400 pb-3 pr-6 border-b border-dark-200 dark:border-dark-700 text-xs uppercase tracking-wide">Typical nearshore</th>
                  <th className="text-left font-medium text-dark-400 dark:text-dark-400 pb-3 pr-6 border-b border-dark-200 dark:border-dark-700 text-xs uppercase tracking-wide">India (Workforce Next)</th>
                  <th className="text-left font-medium text-dark-400 dark:text-dark-400 pb-3 border-b border-dark-200 dark:border-dark-700 text-xs uppercase tracking-wide">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-white/60 dark:bg-dark-900/60" : ""}>
                    <td className="py-4 pr-6 font-medium text-dark-900 dark:text-dark-50 align-top">{row.criterion}</td>
                    <td className="py-4 pr-6 text-dark-600 dark:text-dark-200 align-top">{row.nearshore}</td>
                    <td className="py-4 pr-6 text-dark-600 dark:text-dark-200 align-top">{row.india}</td>
                    <td className="py-4 text-primary-600 dark:text-primary-400 font-semibold align-top whitespace-nowrap">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-dark-400 dark:text-dark-500">Comparisons are generalizations. Specific vendor performance varies. This table covers typical positioning, not individual company guarantees.</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            What our India engineering teams build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-dark-100 dark:border-dark-700 flex flex-col"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a
                    href={service.href}
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "48h", label: "Matched profiles via SethAI" },
              { stat: "4+", label: "Hours daily timezone overlap guaranteed" },
              { stat: "2020", label: "Founded in Gurugram, India" },
              { stat: "0", label: "Recruitment or setup fees" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <dt className="text-3xl font-extrabold text-white">{stat}</dt>
                <dd className="mt-1 text-sm text-dark-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Questions about nearshore software development from India
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to build with an India engineering team?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Tell us what you are building and we will match you with the right
            engineers within 48 hours. Paid trial week before you commit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/" variant="white" size="lg">
              Book a discovery call
            </Button>
            <Button href="/for/startups/" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              See the engineering pod
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
