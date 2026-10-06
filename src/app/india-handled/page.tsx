import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "India Handled | What's Covered Under Managed Staff Augmentation",
  description:
    "Every operational and statutory line on the India side, covered under one invoice: PF, gratuity, GST, FEMA, equipment, and IP assignment. Plus the embedded engineering manager model and typical pod structure.",
  keywords: [
    "managed staff augmentation India",
    "India PF GST FEMA compliance",
    "embedded engineering manager offshore",
    "dedicated developer pod structure",
    "India statutory compliance outsourcing",
    "offshore team operating model",
  ],
  openGraph: {
    ...ogDefaults("/india-handled/"),
    images: ["/images/og-default.png"],
    title: "India Handled | What's Covered Under Managed Staff Augmentation",
    description:
      "PF, gratuity, GST, FEMA, equipment, and IP, all under one invoice. The operating model behind managed staff augmentation from India.",
  },
  alternates: {
    canonical: "https://wfnext.com/india-handled/",
  },
};

const complianceCoverage = [
  {
    tag: "PF",
    title: "Provident Fund",
    line: "Statutory retirement contribution for every employee, filed and paid on our side. Not itemized back to you, not your liability.",
  },
  {
    tag: "GRATUITY",
    title: "Gratuity",
    line: "The statutory payout owed to an employee on separation after sufficient tenure. Accrued and funded by us, not something that shows up as a surprise line item later.",
  },
  {
    tag: "GST",
    title: "GST",
    line: "Goods and Services Tax on our invoicing is handled under our own registration. You get one clean B2B invoice, not a tax position you need to manage.",
  },
  {
    tag: "FEMA",
    title: "FEMA compliance",
    line: "Foreign Exchange Management Act rules govern how an India-based vendor can bill a foreign client. We structure every contract to stay compliant so your payment never gets flagged or delayed on the way in.",
  },
  {
    tag: "EQUIPMENT",
    title: "Equipment",
    line: "Laptop, monitor, and standard engineering hardware are provisioned and maintained on our side as part of the engagement, not billed separately.",
  },
  {
    tag: "IP",
    title: "IP assignment",
    line: "Every engineer's work product is assigned to you under the master agreement. Code lives in your repositories throughout the engagement, nothing to transfer at the end because it was never anywhere else.",
  },
];

const podModel = [
  {
    title: "An embedded engineering manager, not a bench-utilization PM",
    line: "The EM's job is the engineer's career and your outcome, not maximizing how many clients our bench serves. They own standups, code review quality, and flagging risk before it becomes a missed sprint.",
  },
  {
    title: "A pod, not a lone hire, once you are past a single role",
    line: "A standard pod is two to four senior engineers paired with a fractional engineering manager, working in your repo, your Slack, and your sprint cadence. SethAI matches the engineers to your stack; the EM owns delivery quality.",
  },
];

const timezones = [
  { region: "USA & Canada", hours: "Overlap 9am to 5pm ET or PT" },
  { region: "UK & Europe", hours: "Overlap 9am to 5pm GMT, CET, CEST" },
  { region: "Australia & NZ", hours: "Overlap morning AEST through afternoon AWST" },
  { region: "Dubai & UAE", hours: "Full working day overlap" },
];

const faqItems: FAQ[] = [
  {
    question: "What exactly does India-handled managed staff augmentation cover?",
    answer:
      "Provident Fund, gratuity, GST on invoicing, FEMA-compliant cross-border billing, equipment, and IP assignment, all under one monthly invoice. If a vendor itemizes any of these separately as an add-on fee after you have signed, that is a sign the original quote was not the real number.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is an embedded engineering manager, and why does it matter?",
    answer:
      "It is an engineering manager whose job is tied to your outcome and the engineer's career growth, not to keeping the vendor's bench utilized across many clients. They own standups, code review, and surfacing risk early. Without this role, a dedicated engineer still ends up managed by whoever has time, which is worse than no management.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What does a typical dedicated developer pod look like?",
    answer:
      "Two to four senior engineers paired with a fractional engineering manager, embedded in your repository, your Slack, and your sprint cadence. A single dedicated hire is the entry point; most engagements that go past one role settle into this pod shape.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is there an EOR or separate legal entity I need to set up?",
    answer:
      "No. One India-registered company, one contract, one invoice. You are not setting up an Employer of Record relationship or a local entity; the employment relationship is between us and the engineer, and you are our B2B customer.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "When does this model not fit, and what do you do then?",
    answer:
      "If you need real-time North American overlap with a synchronous, founder-led culture and no India geography will satisfy that, we will say so and point you to a LATAM partner rather than force-fit a placement that will not work for either side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do timezones actually work across an engagement?",
    answer:
      "Teams shift their working hours to overlap with yours. Standard overlap windows exist for US East, US West, UK, EU, Australia, and Dubai, so you get same-day collaboration without taking calls at 2am.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://wfnext.com" },
  { name: "India Handled", url: "https://wfnext.com/india-handled/" },
]);

const faqSchema = generateFAQPageSchema(faqItems);

export default function IndiaHandledPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative max-w-5xl">
          <Badge variant="primary" className="mb-4">INDIA HANDLED</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 dark:text-dark-50 leading-[1.05]">
            Every statutory line,
            <br />
            <span className="text-primary-500">handled on our side. Not yours.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-dark-500 dark:text-dark-300 max-w-3xl">
            Provident Fund, gratuity, GST, FEMA-compliant billing, equipment, and IP assignment, all under one monthly invoice. This is what a clean managed staff augmentation quote actually includes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">See how we work</Button>
          </div>
        </div>
      </section>

      {/* COMPLIANCE COVERAGE */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Under one invoice</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              What&apos;s actually covered.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceCoverage.map((c) => (
              <div
                key={c.tag}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{c.tag}</p>
                <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50 leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-dark-500 dark:text-dark-300 leading-relaxed">{c.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POD MODEL */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">The operating model</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Embedded management, not a bench.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {podModel.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="w-3 h-3 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-extrabold text-dark-900 dark:text-dark-50">{a.title}</h3>
                  <p className="mt-1 text-sm text-dark-500 dark:text-dark-300">{a.line}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-dark-600 dark:text-dark-200 leading-relaxed max-w-2xl mx-auto">
            If you need real-time North American overlap with a synchronous, founder-led culture that no India geography will satisfy, we will tell you that honestly and point you to a LATAM partner instead of force-fitting a placement that will not work for either side.
          </p>
        </div>
      </section>

      {/* TIMEZONES */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3">Timezones</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Your working day, covered.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timezones.map((t) => (
              <div
                key={t.region}
                className="p-6 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <h3 className="text-lg font-extrabold text-white">{t.region}</h3>
                <p className="mt-2 text-sm text-primary-200">{t.hours}</p>
              </div>
            ))}
          </div>
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
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-dark-800 text-primary-500 flex items-center justify-center font-bold group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </details>
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
            One invoice. Everything handled.
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            Tell us where you are. Scoped proposal in 48 hours.
          </p>
          <Button href="/contact/" variant="white" size="lg">Book a discovery call</Button>
        </div>
      </section>
    </>
  );
}
