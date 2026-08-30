import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Remote Developers from India for Europe (CET / GMT)",
  description:
    "Hire remote developers from India for European companies. Flexible hours, 4.5+ hours of CET and GMT overlap, 3 to 12 month engagements, EUR or GBP invoicing.",
  keywords: [
    "hire indian developers europe",
    "hire indian developers uk",
    "hire indian developers germany",
    "indian developers CET timezone",
    "short term indian developer europe",
    "3 month contract offshore developer",
    "interim indian developer",
    "indian developer GMT overlap",
    "hire developers from india for european company",
  ],
  openGraph: {
    ...ogDefaults("/for/europe/"),
    images: ["/images/og-default.png"],
    title: "Hire Remote Developers from India for Europe",
    description:
      "Remote developers from India with flexible hours, 4.5+ hours of CET and GMT overlap. 3 to 12 month engagements. EUR or GBP invoicing.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/for/europe/`,
  },
};

const overlapRows = [
  { city: "London (GMT/BST)", overlap: "4 to 5 hours", note: "Standard hours align cleanly. No engineer shift required." },
  { city: "Dublin (GMT/IST)", overlap: "4 to 5 hours", note: "Same as London. Strong sync window for daily standups." },
  { city: "Lisbon (WET)", overlap: "4 to 5 hours", note: "Same as London. Same sync window." },
  { city: "Berlin (CET/CEST)", overlap: "4 to 5 hours", note: "Tested daily by our active German engagements." },
  { city: "Amsterdam (CET/CEST)", overlap: "4 to 5 hours", note: "Same as Berlin. Same overlap shape." },
  { city: "Paris (CET/CEST)", overlap: "4 to 5 hours", note: "Same as Berlin. Productive afternoon overlap." },
  { city: "Stockholm (CET/CEST)", overlap: "4 to 5 hours", note: "Same as Berlin. Strong fit for Nordic teams." },
  { city: "Madrid (CET/CEST)", overlap: "4 to 5 hours", note: "Late-afternoon collaboration window." },
  { city: "Helsinki (EET/EEST)", overlap: "5 to 6 hours", note: "Best India-Europe overlap on the list." },
];

const whyPoints = [
  {
    title: "Best timezone fit India can offer",
    description:
      "London-to-Mumbai is 4.5 hours. Berlin-to-Mumbai is the same. The first half of an Indian engineer's day overlaps directly with a European morning. Daily standups, sync reviews, and pairing all fit naturally without anyone shifting hours.",
  },
  {
    title: "Short-term engagements supported",
    description:
      "3 to 4 month contracts are a first-class engagement model, not a favor. We run them on a B2B services contract with clear ramp, deliverable, and exit clauses. No hidden long-term lock-in, no recruitment fee on extension.",
  },
  {
    title: "Engineers familiar with EU data practices",
    description:
      "Our engineers operate on EU-style data minimization, audit logs, and access-control practices that meet the GDPR baseline. We can sign a customer-supplied DPA where your compliance environment requires.",
  },
  {
    title: "Simple contracting in EUR or GBP",
    description:
      "One B2B services contract, EUR or GBP invoicing, VAT handled correctly. The engineer is our employee in India. You don't worry about the operational side.",
  },
];

const shortTermDeliverables = [
  "Fixed-scope MVP sprints (4 to 8 weeks of build, 1 to 2 weeks of polish)",
  "Capacity surges around a release window or board demo",
  "Migrations: framework upgrades, cloud moves, monorepo splits",
  "Interim cover for an in-house engineer on extended leave",
  "Discovery and prototyping work for a feature you are not yet ready to scope",
  "Audit-and-remediate engagements for performance, security, or cost issues",
];

const whenToHire = [
  {
    scenario: "You need to ship a fixed-scope feature in the next 90 days",
    recommendation: "Hire an Indian developer on a 3 to 4 month engagement",
    reason:
      "Short-term engagements work best when the scope is genuinely bounded. A senior engineer matched in 48 hours and started inside a week buys a real working window before extension or wind-down decisions need to be made.",
  },
  {
    scenario: "Your in-house engineer is on parental leave for 4 months",
    recommendation: "Hire an interim Indian developer on the same length engagement",
    reason:
      "Interim cover is one of the cleanest use cases for short-term offshore. Match the engineer to the leaving engineer's stack and project, hand over context, and end cleanly when the in-house engineer returns.",
  },
  {
    scenario: "You want long-term capacity on a roadmap that runs years",
    recommendation: "Use a long-term dedicated engagement instead",
    reason:
      "If the work has no defined end, a short-term contract introduces unnecessary churn. Long-term dedicated engagements amortize ramp-up cost and let context compound. The page on India-handled covers that model.",
  },
  {
    scenario: "You are evaluating offshore for the first time",
    recommendation: "Start with a 3 month engagement",
    reason:
      "A 3 month engagement is long enough to ship something meaningful and short enough to walk away if the model is not for you. Most customers who start this way extend at month 3 because the unit economics and timezone overlap make the case.",
  },
];

const pricingRows = [
  { level: "Mid-level", monthly: "EUR 4,500 to 6,500 (GBP 3,800 to 5,500)", three: "EUR 13,500 to 19,500", four: "EUR 18,000 to 26,000" },
  { level: "Senior", monthly: "EUR 6,500 to 9,500 (GBP 5,500 to 8,000)", three: "EUR 19,500 to 28,500", four: "EUR 26,000 to 38,000" },
  { level: "Tech lead", monthly: "EUR 9,500 to 13,500 (GBP 8,000 to 11,400)", three: "EUR 28,500 to 40,500", four: "EUR 38,000 to 54,000" },
];

const steps = [
  { step: "01", title: "Share your project context", description: "Stack, scope, dates, team size. We need 20 minutes." },
  { step: "02", title: "SethAI matches in 48 hours", description: "Industry context, timezone fit, longevity signals. Shortlist of 2 or 3 candidates." },
  { step: "03", title: "You interview the shortlist", description: "Direct interviews. Walk through your codebase or specs and see how the engineer thinks." },
  { step: "04", title: "Paid trial week, then full engagement", description: "Real work on your project. Continue or rematch at no cost." },
];

const faqItems: FAQ[] = [
  {
    question: "Can I hire an Indian developer for a 3 or 4 month contract specifically?",
    answer:
      "Yes. Short-term 3 to 4 month engagements are a first-class model for European customers, not a one-off. The contract is a B2B services agreement with a defined start, scope, and end date. There is no lock-in clause and no recruitment fee on extension. About 30 percent of our active European engagements are short-term in this exact range, often around fixed-scope MVPs, migrations, or interim cover.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much CET or GMT overlap do I actually get with an Indian developer?",
    answer:
      "London (GMT) and Dublin sit 4.5 hours behind India during winter, 3.5 hours during British Summer Time. Berlin, Amsterdam, Paris, and Stockholm sit 4.5 hours behind during winter, 3.5 hours during CEST. Helsinki (EET) is 3.5 hours behind during winter. In practical terms, an Indian engineer's 1 PM to 6 PM IST is your 8:30 AM to 1:30 PM GMT or 9:30 AM to 2:30 PM CET. That is enough for a daily standup, real-time pair programming, and a sync review every day without anyone shifting hours. We can also run shifted schedules where the engineer starts later for fuller-day overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your engineers familiar with GDPR practices?",
    answer:
      "Yes. Our engineers operate on EU-style data minimization, audit logging, and access-control practices that meet the GDPR baseline. Personal data processed during the engagement stays under the customer's lawful basis. We can sign a customer-supplied DPA where your compliance environment requires.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do I need to set up a European entity to hire your engineers?",
    answer:
      "No. You sign one B2B services contract with Workforce Next Pvt. Ltd. We invoice in EUR or GBP with a single VAT-correct invoice each month. The engineer is our employee in India, not yours. You don't worry about the operational side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Who owns the IP at the end of a short-term engagement?",
    answer:
      "You do, fully and unconditionally. The contract assigns work-for-hire IP to the customer for any code, design, documentation, or other work product produced during the engagement. We retain no IP rights. At the end of the engagement (whether month 3, month 4, or extended), the IP transfer is already complete; nothing additional needs to be signed.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What does a 3 month engagement cost in EUR or GBP?",
    answer:
      "Senior engineers typically run EUR 6,500 to 9,500 per month all-in, depending on stack and seniority within the senior band. A 3 month senior engagement therefore lands around EUR 19,500 to 28,500 total. Mid-level engineers run EUR 4,500 to 6,500 per month. Tech leads run EUR 9,500 to 13,500. Pricing is the same on a 3 month or 4 month contract; there is no short-term premium.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What if the engineer underperforms in the first month?",
    answer:
      "We rematch at no extra cost. The engagement starts with a paid trial week specifically so both sides can verify fit before the full contract begins. After the trial, if performance falls below the bar in any of the first four weeks, we have a structured replacement process: a new engineer is matched within 7 to 10 business days, ramp-up cost is absorbed by us, and the contract end date is preserved.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I extend a 3 or 4 month contract into a longer engagement?",
    answer:
      "Yes, frictionlessly. Most short-term customers who extend do so by month 3 because the timezone overlap and unit economics make the case. There is no extension fee, no re-matching, no recruitment fee. The contract simply rolls into a continuation period at the same monthly rate. You can also stop cleanly at the original end date with no penalty.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteMetadata.url },
  { name: "For", url: `${siteMetadata.url}/for/` },
  { name: "Europe", url: `${siteMetadata.url}/for/europe/` },
]);

const faqSchema = generateFAQPageSchema(faqItems);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Indian Developers for Europe",
  description:
    "Remote developers from India for European companies, with flexible hours, 4.5+ hours of CET / GMT overlap, 3 to 12 month engagement models, and EUR or GBP invoicing.",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
  },
  serviceType: "Staff Augmentation",
  areaServed: [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Ireland" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "Spain" },
    { "@type": "Country", "name": "Portugal" },
    { "@type": "Country", "name": "Sweden" },
    { "@type": "Country", "name": "Finland" },
    { "@type": "Country", "name": "Denmark" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Country", "name": "Austria" },
    { "@type": "Country", "name": "Switzerland" },
  ],
  audience: {
    "@type": "Audience",
    geographicArea: { "@type": "Place", name: "Europe" },
  },
  url: `${siteMetadata.url}/for/europe/`,
};

export default function ForEuropePage() {
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
            FOR EUROPEAN COMPANIES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Remote Developers from India for Europe
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers from India with flexible hours and 4.5+
            hours of CET and GMT overlap. 3 to 12 month engagements. One
            B2B contract in EUR or GBP.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work/" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why Indian developers fit European companies better than the
            offshore market generally suggests
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              The offshore conversation in Europe usually pits Eastern Europe
              against Latin America. India shows up late and often gets
              compared on the wrong axis. The honest 2026 picture is
              different: India-Europe gives 4.5 to 5.5 hours of natural
              timezone overlap with London, Berlin, Amsterdam, Paris,
              Stockholm, Helsinki and the rest, which is competitive with
              Eastern Europe and significantly better than the LATAM-Europe
              shape that buyers default to without checking the math.
            </p>
            <p>
              The cost gap is also wider than buyers expect. A senior
              developer in London costs roughly GBP 110,000 to 150,000 fully
              loaded. The Polish or Romanian equivalent runs EUR 70,000 to
              95,000. A senior Indian developer matched through Workforce
              Next costs EUR 78,000 to 114,000 per year on a long-term
              engagement, and proportionally less on a short 3 to 4 month
              contract because there is no recruitment fee, no severance, and
              no employer NI on your side.
            </p>
            <p>
              The third axis is engagement flexibility. Most offshore vendors
              push 6 to 18 month dedicated contracts as the default. We run a
              meaningful share of European engagements at 3 to 4 months
              specifically, with structured ramp, deliverable, and exit
              clauses. That short-term shape is the one this page is built
              around.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Four reasons European companies pick Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-term engagement section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            How does a 3 to 4 month Indian developer engagement actually work?
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Short-term offshore engagements have a reputation for going
              wrong because the ramp-up phase eats the contract. A 3 month
              contract with a 4 week ramp leaves only 8 productive weeks. We
              compress that ramp deliberately so the math works for European
              customers running fixed-scope work.
            </p>
            <p className="font-semibold text-dark-900 dark:text-dark-50">
              The shape of a typical 3 to 4 month engagement:
            </p>
            <ul className="space-y-2">
              {[
                "Week 0: matching call, candidate shortlist within 48 hours, customer interviews complete by end of week.",
                "Week 1: paid trial week. Real work on the actual codebase. Either side can walk if it is not the right fit.",
                "Week 2 to 4: ramp into ownership. Codebase walkthrough, architectural context, first shipped tickets.",
                "Week 5 to end: full velocity. Daily standup, sync review, paired programming during overlap windows.",
                "Final 2 weeks: structured handover. Documentation written, runbooks left behind, IP fully transferred.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-dark-900 dark:text-dark-50 mt-6">
              Where short-term engagements pay off the most:
            </p>
            <ul className="space-y-2">
              {shortTermDeliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timezone overlap table */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            How much CET and GMT overlap do you actually get?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            India does not observe Daylight Saving Time, so overlap shifts by
            an hour when European clocks change. Practical sync windows for
            the cities we serve most often:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-100 dark:border-dark-700">
                  <th className="py-3 pr-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    European city
                  </th>
                  <th className="py-3 pr-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Daily overlap
                  </th>
                  <th className="py-3 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {overlapRows.map((row) => (
                  <tr
                    key={row.city}
                    className="border-b border-dark-50 dark:border-dark-700/50"
                  >
                    <td className="py-3 pr-4 text-sm text-dark-700 dark:text-dark-200 font-semibold">
                      {row.city}
                    </td>
                    <td className="py-3 pr-4 text-sm text-primary-500 font-bold">
                      {row.overlap}
                    </td>
                    <td className="py-3 text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
            For customers who want full-day overlap, we run shifted-schedule
            engineers who start later in the IST day so the overlap covers
            the full European afternoon. This is offered at no extra cost on
            engagements three months and longer.
          </p>
        </div>
      </section>

      {/* Who is this for / not for */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Who is this for, and who is it not for?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Short-term Indian developer engagements solve a specific class of
            problem well. They are the wrong choice for several others. Honest
            framing:
          </p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div
                key={item.scenario}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                  {item.scenario}
                </h3>
                <p className="text-sm font-bold text-primary-500 mb-3">
                  {item.recommendation}
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What does a 3 or 4 month Indian developer cost in EUR or GBP?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            All-in pricing for European customers. One monthly fee in EUR
            or GBP, indexed to role and seniority. There is no short-term
            premium; the monthly rate on a 3 month engagement matches the
            rate on a 12 month engagement.
          </p>
          <div className="overflow-x-auto rounded-xl border border-dark-50 dark:border-dark-700 bg-white dark:bg-dark-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-100 dark:border-dark-700">
                  <th className="py-3 px-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Level
                  </th>
                  <th className="py-3 px-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Monthly all-in
                  </th>
                  <th className="py-3 px-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    3 month total
                  </th>
                  <th className="py-3 px-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    4 month total
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr
                    key={row.level}
                    className="border-b border-dark-50 dark:border-dark-700/50"
                  >
                    <td className="py-3 px-4 text-sm text-dark-700 dark:text-dark-200 font-semibold">
                      {row.level}
                    </td>
                    <td className="py-3 px-4 text-sm text-dark-600 dark:text-dark-200">
                      {row.monthly}
                    </td>
                    <td className="py-3 px-4 text-sm text-dark-600 dark:text-dark-200">
                      {row.three}
                    </td>
                    <td className="py-3 px-4 text-sm text-dark-600 dark:text-dark-200">
                      {row.four}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions from European customers
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
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to staff your European project from India?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your stack, scope, and dates. We will match you with a
            pre-vetted Indian developer within 48 hours and start the paid
            trial week as soon as you sign.
          </p>
          <Button href="/contact/" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
