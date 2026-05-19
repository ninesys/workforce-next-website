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
  title: "Hire Indian Developers for Australian Companies (AEST)",
  description:
    "Hire pre-vetted Indian developers for Australian companies. 4.5+ hours of AEST overlap, AUD invoicing, Privacy Act ready, no Australian entity or sponsorship needed.",
  keywords: [
    "hire indian developers australia",
    "hire indian developers sydney",
    "hire indian developers melbourne",
    "AEST india timezone overlap",
    "australian company india developers",
    "AUD offshore developer",
    "privacy act 1988 india engineer",
    "hire developers from india for australian company",
  ],
  openGraph: {
    ...ogDefaults("/for/australia/"),
    images: ["/images/og-default.png"],
    title: "Hire Indian Developers for Australian Companies",
    description:
      "Pre-vetted Indian developers with 4.5+ hours of AEST overlap. AUD invoicing. Privacy Act 1988 ready. No Australian entity or sponsorship needed.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/for/australia/`,
  },
};

const overlapRows = [
  { city: "Perth (AWST)", overlap: "5 to 6 hours", note: "Best India-Australia overlap. Same timezone gap as London-Mumbai." },
  { city: "Sydney / Melbourne (AEDT/AEST)", overlap: "4 to 5 hours", note: "Strong overlap. India 1 PM to 6 PM IST is your 6:30 PM to 11:30 PM AEDT." },
  { city: "Brisbane (AEST)", overlap: "4 to 5 hours", note: "No daylight saving. Stable overlap year-round." },
  { city: "Adelaide / Darwin (ACST/ACDT)", overlap: "4 to 5 hours", note: "Half-hour offset from East coast. Same overlap shape." },
];

const whyPoints = [
  {
    title: "Strong AEST and AWST overlap",
    description:
      "Perth-Mumbai is 5.5 hours, the same as London-Mumbai. Sydney and Melbourne sit 4.5 hours apart from India during AEDT. Daily standups, sync reviews, and pair programming all fit naturally in your morning or our afternoon.",
  },
  {
    title: "200K AUD a year cost gap per senior engineer",
    description:
      "A senior Sydney developer fully loaded costs AUD 220,000 to 300,000. The Indian equivalent runs AUD 100,000 to 165,000 all-in. Across a five-engineer team that is over half a million AUD a year saved without sacrificing seniority.",
  },
  {
    title: "Engineers familiar with APP data practices",
    description:
      "Our engineers operate on data minimization, audit logs, and access controls aligned with the Australian Privacy Principles (APPs). We can sign a customer-supplied DPA where your privacy environment requires.",
  },
  {
    title: "Simple contracting in AUD",
    description:
      "One B2B services contract, AUD invoicing. The engineer is our employee in India, not yours. No 482 visa or Australian entity needed. You don't worry about the operational side.",
  },
];

const pricingRows = [
  { level: "Mid-level", monthly: "AUD 6,800 to 10,000", three: "AUD 20,400 to 30,000", four: "AUD 27,200 to 40,000" },
  { level: "Senior", monthly: "AUD 10,000 to 14,500", three: "AUD 30,000 to 43,500", four: "AUD 40,000 to 58,000" },
  { level: "Tech lead", monthly: "AUD 14,500 to 20,500", three: "AUD 43,500 to 61,500", four: "AUD 58,000 to 82,000" },
];

const steps = [
  { step: "01", title: "Share your project", description: "Stack, scope, dates, AEST or AWST sync preference." },
  { step: "02", title: "SethAI matches in 48 hours", description: "Industry context, timezone fit, longevity signals." },
  { step: "03", title: "You interview the shortlist", description: "Direct interviews. Walk through your codebase or specs." },
  { step: "04", title: "Paid trial week, then engagement", description: "Real work. Continue or rematch at no cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much AEST or AWST overlap do I get with an Indian developer?",
    answer:
      "Sydney and Melbourne sit 4.5 hours ahead of India during AEDT (5 hours during AEST). Perth sits 2.5 hours ahead. In practical terms, an Indian engineer's 1 PM to 6 PM IST is your 6:30 PM to 11:30 PM AEDT or 3:30 PM to 8:30 PM AWST. Most Australian customers run an early-afternoon sync window, which lines up cleanly with our morning. We can also run shifted-schedule engineers who start earlier in IST for fuller-day overlap with Sydney mornings.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is the engagement compliant with the Australian Privacy Act?",
    answer:
      "Yes. Every Australian engagement is signed under a DPA aligned with the Australian Privacy Principles (APPs) under the Privacy Act 1988. Our engineers follow data minimization, audit logging, and access-control practices that meet APP baselines. Personal data processed during the engagement stays under the customer's lawful basis, and cross-border data flows are documented. We can also operate under specific customer DPAs when required.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do I need an Australian entity, ABN, or visa sponsorship to hire your engineers?",
    answer:
      "No. The engineer is our employee in India and the contract is between two corporate entities (you and Workforce Next Pvt. Ltd.). We invoice in AUD. No 482 visa, no Australian entity, no ABN registration needed. The contract is a B2B services agreement; you don't worry about the operational side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does a senior Indian developer cost an Australian company in 2026?",
    answer:
      "A senior Indian developer costs AUD 10,000 to 14,500 per month all-in to an Australian customer. That is AUD 120,000 to 174,000 a year, compared to AUD 220,000 to 300,000 for the equivalent Sydney or Melbourne senior fully loaded. The full breakdown by level is in the pricing table on this page.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I extend a 3 or 4 month contract into a longer engagement?",
    answer:
      "Yes, frictionlessly. Most Australian customers who extend do so by month 3 because the timezone overlap and unit economics make the case. There is no extension fee, no re-matching, no recruitment fee. The contract simply rolls into a continuation period at the same monthly rate. You can also stop cleanly at the original end date with no penalty.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Who owns the IP at the end of the engagement?",
    answer:
      "You do, fully and unconditionally. The contract assigns work-for-hire IP to the customer for any code, design, documentation, or other work product produced during the engagement. We retain no IP rights. At the end of the engagement (whether month 3, month 4, or extended), the IP transfer is already complete; nothing additional needs to be signed.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteMetadata.url },
  { name: "For", url: `${siteMetadata.url}/for/` },
  { name: "Australia", url: `${siteMetadata.url}/for/australia/` },
]);

const faqSchema = generateFAQPageSchema(faqItems);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Indian Developers for Australian Companies",
  description:
    "Pre-vetted Indian developers matched to Australian companies, with 4.5+ hours of AEST and AWST overlap, AUD invoicing, Privacy Act 1988 aligned contracting, and no Australian entity required.",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
  },
  serviceType: "Staff Augmentation",
  areaServed: [
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "New Zealand" },
  ],
  audience: {
    "@type": "Audience",
    geographicArea: { "@type": "Country", name: "Australia" },
  },
  url: `${siteMetadata.url}/for/australia/`,
};

export default function ForAustraliaPage() {
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
            FOR AUSTRALIAN COMPANIES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Indian Developers for Australian Companies
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers from India with 4.5+ hours of AEST and AWST
            overlap. AUD invoicing. Privacy Act 1988 aligned. One B2B
            contract, no Australian entity or visa sponsorship needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why Australian companies hire Indian developers in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Australian engineering hiring has always been hard. The local
              talent pool is small relative to demand, salaries have climbed
              past AUD 220,000 fully loaded for a senior engineer in Sydney
              or Melbourne, and the 482 visa pipeline has been tightening
              for years. India offers a meaningful alternative without any
              of those constraints.
            </p>
            <p>
              The timezone shape is genuinely good. Sydney and Melbourne are
              4.5 hours ahead of India during AEDT and 5 hours during AEST,
              which gives a clean afternoon sync window without anyone
              shifting hours. Perth-India overlap is identical to London-India
              at 5.5 hours. Daily standups, real-time pair programming, and
              sync reviews all fit naturally.
            </p>
            <p>
              Every engineer we place is screened by SethAI for production
              depth, communication, and longevity signals. The shortlist is
              filtered on shipped work and the instincts that survive the
              first incident. The pricing is in AUD, the contract is
              Privacy-Act aligned, and there is no Australian entity to set
              up.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Four reasons Australian companies pick Workforce Next
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

      {/* Timezone overlap */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            How much AEST and AWST overlap do you actually get?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            India does not observe daylight saving, so overlap shifts by an
            hour when Australian East-coast clocks change. Practical sync
            windows for the metros we serve most often:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-100 dark:border-dark-700">
                  <th className="py-3 pr-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Australian city
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
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What does an Indian developer cost an Australian company in 2026?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            All-in pricing in AUD. One monthly fee indexed to role and
            seniority. The same monthly rate applies on a 3 month or 12
            month engagement; no short-term premium.
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
            Common questions from Australian customers
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
            Ready to staff your Australian project from India?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your stack, scope, and timezone preference. We will match
            you within 48 hours and start the paid trial week as soon as you
            sign.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
