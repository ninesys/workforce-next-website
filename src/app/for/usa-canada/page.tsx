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
  title: "Hire Indian Developers for US & Canadian Companies",
  description:
    "Hire pre-vetted Indian developers for US and Canadian companies. Follow-the-Sun coverage for 24/7 work, USD or CAD invoicing, HIPAA and SOC 2 ready, no US entity needed.",
  keywords: [
    "hire indian developers usa",
    "hire indian developers canada",
    "hire indian developers for us startup",
    "follow the sun india usa",
    "us company india developers no entity",
    "indian developers HIPAA SOC 2",
    "hire developers from india for canadian company",
    "north america india engineering",
  ],
  openGraph: {
    ...ogDefaults("/for/usa-canada/"),
    images: ["/images/og-default.png"],
    title: "Hire Indian Developers for US & Canadian Companies",
    description:
      "Pre-vetted Indian developers with Follow-the-Sun coverage. USD or CAD invoicing. HIPAA and SOC 2 ready. No US or Canadian entity needed.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/for/usa-canada/`,
  },
};

const overlapRows = [
  { city: "New York / Toronto (ET)", overlap: "2 to 3 hours", note: "8:30 AM ET morning standup is 6 PM IST. Tight but workable for daily sync." },
  { city: "Chicago / Mexico City (CT)", overlap: "2 to 3 hours", note: "Same shape as ET, shifted by an hour. Most teams run on this overlap." },
  { city: "Denver / Edmonton (MT)", overlap: "2 hours", note: "Tight overlap, often paired with shifted-schedule engineers." },
  { city: "San Francisco / Vancouver (PT)", overlap: "1 to 2 hours", note: "Best handled with shifted India hours or Follow-the-Sun coverage." },
];

const whyPoints = [
  {
    title: "Follow-the-Sun coverage is the default",
    description:
      "A US team carrying 24/7 on-call burns out predictably. We pair an India-based pod with your US team so the night shift is covered without anyone running themselves into the ground.",
  },
  {
    title: "200K dollar a year cost gap per senior engineer",
    description:
      "A senior US developer fully loaded costs $250,000 to $380,000 a year. The Indian equivalent runs $66,000 to $144,000 all-in. Across a five-engineer team that is a million dollars a year saved without sacrificing seniority.",
  },
  {
    title: "HIPAA, SOC 2, and PIPEDA aware",
    description:
      "Our engineers have shipped under SOC 2 Type II, HIPAA-aligned health products, and PIPEDA for Canadian customers. Audit logs, access control, encryption discipline are habits, not retrofits.",
  },
  {
    title: "No US or Canadian entity, no EOR",
    description:
      "One B2B services contract with Workforce Next Pvt. Ltd. USD invoicing for US customers, CAD for Canadian. Indian payroll, PF, gratuity, equipment stay our problem. You sign one contract; you do not file W-9s for the engineer.",
  },
];

const overlapModels = [
  "Standard schedule: India 11 AM to 8 PM IST (overlaps 8:30 AM to 10:30 AM ET, 5:30 AM to 7:30 AM PT). Good for ET/CT customers running an early standup.",
  "Shifted schedule: India 1 PM to 10 PM IST (overlaps 10:30 AM to 12:30 PM ET, 7:30 AM to 9:30 AM PT). Better for PT customers and late-morning syncs.",
  "Late shift: India 4 PM to 1 AM IST (overlaps 1:30 PM to 6:30 PM PT, 4:30 PM to 9:30 PM ET). Used for engineers paired with US Pacific teams.",
  "Follow-the-Sun pod: 2 to 3 engineers covering US day shift plus India night shift, with documented handover at the boundary. Used for SRE, on-call, and 24/7 platform work.",
];

const pricingRows = [
  { level: "Mid-level", monthly: "USD 5,000 to 7,500 (CAD 6,800 to 10,200)", three: "USD 15,000 to 22,500", four: "USD 20,000 to 30,000" },
  { level: "Senior", monthly: "USD 7,000 to 10,500 (CAD 9,500 to 14,300)", three: "USD 21,000 to 31,500", four: "USD 28,000 to 42,000" },
  { level: "Tech lead", monthly: "USD 10,000 to 14,500 (CAD 13,600 to 19,700)", three: "USD 30,000 to 43,500", four: "USD 40,000 to 58,000" },
];

const steps = [
  { step: "01", title: "Share your project", description: "Stack, scope, dates, timezone preference. We need 20 minutes." },
  { step: "02", title: "SethAI matches in 48 hours", description: "Industry context, timezone fit, longevity signals. Shortlist of 2 or 3." },
  { step: "03", title: "You interview the shortlist", description: "Direct interviews. Walk through your codebase or specs." },
  { step: "04", title: "Paid trial week, then engagement", description: "Real work on your project. Continue or rematch at no cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How does the timezone gap between India and US/Canada actually work?",
    answer:
      "Three patterns work for almost every customer. (1) Standard India hours give 2 to 3 hours of morning overlap with US Eastern, which covers a daily standup and an early sync. (2) Shifted India hours move the engineer's day later so the overlap shifts toward US Pacific. (3) For 24/7 needs, a Follow-the-Sun pod pairs a US day-shift team with an India night-shift pod, with documented handover. We pick the pattern based on your stack, your team's working style, and whether you need real-time pair programming or async-first delivery.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the Follow-the-Sun model and when should I use it?",
    answer:
      "Follow-the-Sun is a 24/7 engineering coverage model where your US team handles the day shift and an India-based pod handles the night shift. A documented handover happens at the boundary every day. Incident ownership stays with the on-shift pod, with the other available for escalation. It is the right model when you are running a customer-facing platform with US night incidents, or an SRE function where on-call burnout is a real cost. Two pods on opposite sides of the world is cheaper than one US team running themselves into the ground.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your engineers work under SOC 2, HIPAA, or PIPEDA?",
    answer:
      "Yes. We staff engineers who have shipped under SOC 2 Type II, HIPAA-aligned healthtech products, and PIPEDA for Canadian customers. Audit logging, access control, encryption at rest and in transit, and incident response are habits, not retrofits. We sign customer-specific BAAs (HIPAA), DPAs, and scope-of-work documents tailored to the compliance environment. For SOC 2 audits we have been through Type I and Type II audits with multiple US customers.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do I need to set up a US or Canadian entity to hire your engineers?",
    answer:
      "No. The engineer is our employee in India. You sign one B2B services contract with Workforce Next Pvt. Ltd. and we invoice in USD (US) or CAD (Canada). You do not file a W-9, you do not run payroll, you do not handle Indian PF or gratuity. There is no employment relationship between you and the engineer. The model is identical for US and Canadian customers; the only difference is the invoicing currency and a few PIPEDA-related contract clauses for Canada.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does a senior Indian developer cost a US or Canadian company in 2026?",
    answer:
      "A senior Indian developer costs USD 7,000 to 10,500 per month all-in to a US customer (CAD 9,500 to 14,300 to a Canadian customer). That works out to USD 84,000 to 126,000 a year, compared to USD 250,000 to 380,000 for the equivalent US senior developer fully loaded. The gap of roughly 200,000 dollars per engineer per year is the primary driver of US offshore hiring in 2026. The full per-role and per-level breakdown is in our outsourcing trends post.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What if my team is on US Pacific time? Will the overlap be too thin?",
    answer:
      "PT customers get 1 to 2 hours of natural overlap with India during standard hours. We solve this with a shifted India schedule (engineer starts at 1 PM or 4 PM IST), which gives 4 to 5 hours of overlap with the US Pacific morning. About a third of our active US engagements run on the shifted schedule. We treat it as standard, not as a favor.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteMetadata.url },
  { name: "For", url: `${siteMetadata.url}/for/` },
  { name: "USA & Canada", url: `${siteMetadata.url}/for/usa-canada/` },
]);

const faqSchema = generateFAQPageSchema(faqItems);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire Indian Developers for US & Canadian Companies",
  description:
    "Pre-vetted Indian developers matched to US and Canadian companies, with Follow-the-Sun coverage, shifted-schedule options, USD or CAD invoicing, SOC 2 / HIPAA / PIPEDA-aware contracting, and no US or Canadian entity required.",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
  },
  serviceType: "Staff Augmentation",
  areaServed: [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
  ],
  audience: {
    "@type": "Audience",
    geographicArea: { "@type": "Place", name: "North America" },
  },
  url: `${siteMetadata.url}/for/usa-canada/`,
};

export default function ForUsaCanadaPage() {
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
            FOR US &amp; CANADIAN COMPANIES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Indian Developers for US &amp; Canadian Companies
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers from India with Follow-the-Sun coverage,
            shifted-schedule options for US Pacific, and SOC 2 / HIPAA /
            PIPEDA-aware contracting. One B2B contract in USD or CAD. No US
            or Canadian entity needed.
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
            Why US and Canadian companies hire Indian developers in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              The fully loaded cost of a senior US developer climbed past
              $250,000 a year while AI-assisted development closed the
              productivity gap that used to justify the premium. At the same
              time, the talent pool for AI, data, and platform engineering
              cannot be filled from the US alone at any reasonable timeline.
              The result is that offshore hiring in 2026 is no longer a
              cheap-labour decision; it is a strategic-capacity decision.
            </p>
            <p>
              India is the largest available pool for that capacity, with
              specific strengths in AI and data, scale, and the willingness
              to run Follow-the-Sun coverage for US night shifts. The
              timezone gap is real, but it is a solvable problem rather than
              a deal breaker.
            </p>
            <p>
              Every engineer we place is screened by SethAI for production
              depth, communication, and the longevity signals that predict
              whether they will still be shipping cleanly for you in 18
              months. The shortlist is filtered on shipped work and the
              instincts that survive a 3 a.m. incident.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Four reasons US and Canadian companies pick Workforce Next
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
            How does the India to North America timezone gap actually work?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            India is 9.5 to 13.5 hours ahead of North America depending on
            metro and daylight saving. Practical sync windows by primary US
            and Canadian timezone:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dark-100 dark:border-dark-700">
                  <th className="py-3 pr-4 text-sm font-bold text-dark-900 dark:text-dark-50">
                    Customer city
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
          <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50 mb-3">
            Four schedule patterns we run for North American customers:
          </h3>
          <ul className="space-y-2">
            {overlapModels.map((item) => (
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
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What does an Indian developer cost a US or Canadian company in 2026?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            All-in pricing for North American customers. Includes our
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
            Common questions from US and Canadian customers
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
            Ready to staff your North American project from India?
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
