import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Indian Developers for Dubai & UAE Companies (GST+4)",
  description:
    "Hire pre-vetted Indian developers for Dubai, Abu Dhabi, and UAE companies. 1.5 hour timezone gap, AED or USD invoicing, DIFC and ADGM aware, no UAE entity needed.",
  keywords: [
    "hire indian developers dubai",
    "hire indian developers uae",
    "hire indian developers abu dhabi",
    "dubai india timezone overlap",
    "uae offshore developer",
    "DIFC ADGM data residency",
    "AED offshore developer",
    "hire developers from india for dubai company",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire Indian Developers for Dubai & UAE Companies",
    description:
      "Pre-vetted Indian developers with a 1.5 hour timezone gap. AED or USD invoicing. DIFC and ADGM aware. No UAE entity needed.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/for/dubai/`,
  },
};

const overlapRows = [
  { city: "Dubai (GST)", overlap: "Almost full day", note: "1.5 hours behind India. Indian engineer's full workday overlaps with the UAE workday." },
  { city: "Abu Dhabi (GST)", overlap: "Almost full day", note: "Same as Dubai. Same overlap shape." },
  { city: "Sharjah (GST)", overlap: "Almost full day", note: "Same as Dubai. Same overlap shape." },
  { city: "Doha / Riyadh (AST)", overlap: "Almost full day", note: "2.5 hours behind India. Same comment applies." },
];

const whyPoints = [
  {
    title: "Best timezone overlap of any offshore relationship",
    description:
      "The UAE is 1.5 hours behind India. The full Indian workday overlaps with the full UAE workday. Daily standups, real-time pair programming, and afternoon syncs are all trivially scheduled. There is no offshore relationship in the world with better timezone shape than this one.",
  },
  {
    title: "Same workweek, same business calendar",
    description:
      "The UAE moved to a Monday to Friday workweek in 2022. Saudi Arabia, Bahrain, and Qatar follow Sunday to Thursday but with significant overlap. Indian engineers work Monday to Friday with optional Saturday cover. Holidays and major business events line up substantially.",
  },
  {
    title: "DIFC, ADGM, and PDPL aware",
    description:
      "Our engineers operate aware of the DIFC Data Protection Law, ADGM regulations, and the UAE Personal Data Protection Law (PDPL). Cross-border data flows from the UAE to India are documented and supported by DPAs that match customer environments.",
  },
  {
    title: "AED or USD invoicing, no UAE entity needed",
    description:
      "One B2B services contract with Workforce Next Pvt. Ltd. AED invoicing for UAE-based customers, USD for those who prefer it. The engineer is our employee in India. You handle the work; we handle Indian payroll, PF, gratuity, equipment, and benefits. No DED license, no free zone setup, no UAE labour-card paperwork.",
  },
];

const pricingRows = [
  { level: "Mid-level", monthly: "AED 16,500 to 24,000 (USD 4,500 to 6,500)", three: "AED 49,500 to 72,000", four: "AED 66,000 to 96,000" },
  { level: "Senior", monthly: "AED 24,000 to 35,000 (USD 6,500 to 9,500)", three: "AED 72,000 to 105,000", four: "AED 96,000 to 140,000" },
  { level: "Tech lead", monthly: "AED 35,000 to 50,000 (USD 9,500 to 13,500)", three: "AED 105,000 to 150,000", four: "AED 140,000 to 200,000" },
];

const steps = [
  { step: "01", title: "Share your project", description: "Stack, scope, dates, and any DIFC/ADGM/PDPL constraints." },
  { step: "02", title: "SethAI matches in 48 hours", description: "Industry context, timezone fit, longevity signals." },
  { step: "03", title: "You interview the shortlist", description: "Direct interviews. Walk through your codebase or specs." },
  { step: "04", title: "Paid trial week, then engagement", description: "Real work. Continue or rematch at no cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How does the India to UAE timezone gap actually work?",
    answer:
      "India is 1.5 hours ahead of the UAE. The full Indian workday (10 AM to 7 PM IST) overlaps with the full UAE workday (8:30 AM to 5:30 PM GST). This is the strongest timezone shape any offshore relationship offers anywhere in the world. There is no need for shifted schedules, no Follow-the-Sun pods, no asynchronous-first compromises. Daily standups, real-time pair programming, and afternoon syncs are all trivially scheduled.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are the engagements aware of UAE data protection law (PDPL) and DIFC?",
    answer:
      "Yes. Our engineers operate under contracts that recognise the UAE Personal Data Protection Law (PDPL), DIFC Data Protection Law (where applicable), and ADGM regulations. Cross-border data flows from the UAE to India are documented in the DPA and supported by appropriate safeguards. We have engineers who have shipped in DIFC-licensed firms and ADGM-regulated entities.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do I need a UAE entity, DED licence, or free zone setup to hire your engineers?",
    answer:
      "No. The engineer is our employee in India and the contract is between two corporate entities (you and Workforce Next Pvt. Ltd.). We invoice in AED or USD per your preference. There is no employment relationship between you and the engineer, so no DED licence, no labour card, no UAE entity, no free zone setup needed. The contract is a B2B services agreement.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does a senior Indian developer cost a UAE company in 2026?",
    answer:
      "A senior Indian developer costs AED 24,000 to 35,000 per month all-in to a UAE customer (USD 6,500 to 9,500). That is AED 288,000 to 420,000 a year, compared to AED 540,000 to 900,000 for the equivalent Dubai or Abu Dhabi senior fully loaded with housing, schooling, and visa costs. The full breakdown by level is in the pricing table on this page.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Will the workweek difference cause problems? UAE is now Monday to Friday and India works the same week.",
    answer:
      "No. The UAE moved to a Monday to Friday workweek in January 2022, which aligned perfectly with India's Monday to Friday week. Saudi Arabia, Bahrain, and Qatar still run Sunday to Thursday, but the four-day overlap (Monday to Thursday) is more than enough for most engagements, and we can arrange Sunday cover by an engineer running a shifted week if a customer specifically needs it.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I extend a 3 or 4 month contract into a longer engagement?",
    answer:
      "Yes, frictionlessly. Most UAE customers who extend do so by month 3 because the timezone overlap and unit economics make the case stronger than any local alternative. There is no extension fee, no re-matching, no recruitment fee. The contract simply rolls into a continuation period at the same monthly rate. You can also stop cleanly at the original end date with no penalty.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteMetadata.url },
  { name: "For", url: `${siteMetadata.url}/for/` },
  { name: "Dubai & UAE", url: `${siteMetadata.url}/for/dubai/` },
]);

const faqSchema = generateFAQPageSchema(faqItems);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Indian Developers for Dubai & UAE Companies",
  description:
    "Pre-vetted Indian developers matched to Dubai, Abu Dhabi, and UAE companies, with a 1.5 hour timezone gap, AED or USD invoicing, DIFC and ADGM aware contracting, and no UAE entity required.",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
  },
  serviceType: "Staff Augmentation",
  areaServed: [
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Oman" },
  ],
  audience: {
    "@type": "Audience",
    geographicArea: { "@type": "Place", name: "Middle East" },
  },
  url: `${siteMetadata.url}/for/dubai/`,
};

export default function ForDubaiPage() {
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
            FOR DUBAI &amp; UAE COMPANIES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Indian Developers for Dubai &amp; UAE Companies
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers from India with a 1.5 hour timezone gap. AED
            or USD invoicing. DIFC, ADGM, and PDPL aware. One B2B contract,
            no UAE entity or DED licence needed.
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
            Why UAE companies hire Indian developers in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              The UAE engineering hiring market is structurally constrained.
              Local talent is small, expat hiring is expensive once you add
              housing, schooling, and visa costs, and free-zone licensing
              adds friction even for short-term roles. Indian developers
              solve all three problems while preserving the timezone shape
              that makes daily collaboration trivial.
            </p>
            <p>
              The 1.5 hour gap is the strongest offshore timezone fit in the
              world. There is no shifted-schedule compromise, no
              Follow-the-Sun pod, no async-first workaround. The full
              Indian workday overlaps with the full UAE workday, which means
              an Indian engineer behaves indistinguishably from an in-house
              hire on every dimension that matters: standups, pair
              programming, code review, incident response.
            </p>
            <p>
              Every engineer we place is screened by SethAI for production
              depth, communication, and longevity signals. The shortlist is
              filtered on shipped work and the instincts that survive a
              regulated environment. The pricing is in AED or USD, the
              contract is DIFC and PDPL aware, and there is no UAE entity to
              set up.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Four reasons UAE companies pick Workforce Next
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

      {/* Timezone */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            How much overlap do you actually get with India from the UAE?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            The full Indian workday overlaps with the full UAE workday.
            Practical sync windows for the Gulf metros we serve most often:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-100 dark:border-dark-700">
                  <th className="py-3 pr-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Gulf city
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
            What does an Indian developer cost a UAE company in 2026?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            All-in pricing in AED with USD equivalent. Includes our
            employer-side India overhead, equipment, payroll, and the
            engineering manager assigned to your account. The same monthly
            rate applies on a 3 month or 12 month engagement; no short-term
            premium.
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
            Common questions from UAE customers
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
            Ready to staff your Dubai or UAE project from India?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your stack, scope, and any DIFC/ADGM/PDPL constraints.
            We will match you within 48 hours and start the paid trial week
            as soon as you sign.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
