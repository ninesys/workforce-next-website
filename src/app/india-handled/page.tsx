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
  title: "AI Automation Agency from India | Four Services, Global Delivery",
  description:
    "AI automation agency based in India serving founders globally. Product consulting, AI agents and workflows, dedicated developers and QA, and AEO/GEO growth. Flexible timezone coverage.",
  keywords: [
    "AI automation agency India",
    "AI agency from India",
    "dedicated developers India",
    "AI consulting India",
    "workflow automation India",
    "AEO GEO agency India",
    "hire AI engineers India",
    "AI automation agency for founders",
  ],
  openGraph: {
    ...ogDefaults("/india-handled/"),
    images: ["/images/og-default.png"],
    title: "AI Automation Agency from India | Four Services, Global Delivery",
    description:
      "Four services, one partner, India delivery. Consulting, automation, talent, and AEO/GEO growth.",
  },
  alternates: {
    canonical: "https://wfnext.com/india-handled/",
  },
};

const services = [
  { num: "01", tag: "CONSULTING", title: "Product development consulting", line: "Architecture, stack, scope decisions." },
  { num: "02", tag: "AUTOMATION", title: "AI agents for operations", line: "Workflows and agents take ops off your team." },
  { num: "03", tag: "TALENT", title: "Dedicated developers and QA", line: "Senior engineers in your timezone, ship and test." },
  { num: "04", tag: "GROWTH", title: "AEO + GEO + SEO", line: "Cited by AI search. Found in Google." },
];

const indiaAdvantages = [
  {
    title: "Senior engineering pool",
    line: "Bangalore, Gurugram, Noida, Hyderabad. Deep talent across AI, automation, web, and data.",
  },
  {
    title: "Timezone flexibility",
    line: "Teams shift schedules to overlap with US, UK, EU, Canada, Australia, or Dubai working hours.",
  },
  {
    title: "Cross-service rates",
    line: "Same India delivery base across all four services. Consulting, automation, talent, and growth all benefit.",
  },
  {
    title: "B2B contract simplicity",
    line: "One India-registered company. One contract. No EOR, no PE complications.",
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
    question: "Why pick an India-based AI automation agency?",
    answer:
      "India has the deepest senior engineering pool for AI, automation, web, and data work outside the US. The same delivery base sharpens every one of our four services: consulting, automation, talent, and growth. You get senior delivery across the whole arc at India delivery economics.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do timezones work?",
    answer:
      "Our teams shift schedules to overlap with your working day. Standard overlap windows for US East, US West, UK, EU, Australia, and Dubai. You get same-day collaboration without needing to take late-night calls yourself.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I engage you for just one of the four services?",
    answer:
      "Yes. Most engagements start with one service. Customers typically expand into the others as trust builds. There is no requirement to bundle.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do I need a separate contract for each service?",
    answer:
      "No. One master agreement with Workforce Next Pvt. Ltd. covers all four services. Project-specific scopes layer underneath. Less paperwork, faster start.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What about IP, security, and compliance?",
    answer:
      "Standard NDA, IP assignment in the MSA, GDPR-aligned data handling, and SOC 2 friendly engagement practices. We have shipped for customers with serious compliance requirements; the details get covered in the discovery call.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can a new engagement start?",
    answer:
      "Discovery call to scoped proposal in 48 hours. Approved proposal to delivery start within the following week. Faster than hiring in your own market, and the team is already trained.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://wfnext.com" },
  { name: "India-Handled", url: "https://wfnext.com/india-handled/" },
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
          <Badge variant="primary" className="mb-4">INDIA DELIVERY</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 dark:text-dark-50 leading-[1.05]">
            AI Automation Agency
            <br />
            <span className="text-primary-500">from India. For founders worldwide.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-dark-500 dark:text-dark-300 max-w-3xl">
            Four services delivered from India: consulting, automation, talent, and AEO/GEO growth. One contract, your timezone, senior delivery across the whole arc.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Book a discovery call</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">See how we work</Button>
          </div>
        </div>
      </section>

      {/* FOUR SERVICES */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">What we deliver</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Four services. One India base.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="group relative p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <span aria-hidden className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary-50 dark:text-primary-500/10 leading-none select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">{s.tag}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-dark-900 dark:text-dark-50 leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-dark-500 dark:text-dark-300">{s.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIA ADVANTAGES */}
      <section className="section-padding bg-primary-50/40 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-3">Why India</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              The senior delivery base.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {indiaAdvantages.map((a) => (
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
            Senior delivery, your timezone, one partner.
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
