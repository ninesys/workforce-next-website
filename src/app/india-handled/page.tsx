import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateArticleSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Remote Developers from India (Flexible Hours & Timezone)",
  description:
    "Hire dedicated, fractional, or full-time remote developers and QA engineers from India. Flexible hours, flexible timezone coverage, one B2B contract. Pre-vetted by SethAI.",
  keywords: [
    "hire remote developers India",
    "flexible hours remote developers",
    "flexible timezone developers",
    "dedicated remote developers India",
    "fractional remote engineers",
    "remote developer staffing India",
    "hire offshore developers India",
    "managed offshore development team",
    "hire developers with timezone overlap",
  ],
  openGraph: {
    ...ogDefaults("/india-handled/"),
    images: ["/images/og-default.png"],
    title: "Hire Remote Developers from India (Flexible Hours & Timezone)",
    description:
      "Dedicated, fractional, or full-time remote developers and QA engineers. Flexible hours, flexible timezone coverage. Pre-vetted by SethAI.",
  },
  alternates: {
    canonical: "https://workforcenext.in/india-handled/",
  },
};

const engagementOptions = [
  {
    title: "Dedicated full-time",
    hours: "40 hours per week",
    body: "One engineer, full-time, embedded in your team like an in-house hire. Standard for ongoing product work and long-running engagements.",
  },
  {
    title: "Fractional",
    hours: "10 to 20 hours per week",
    body: "Senior engineering input without a full-time commitment. Best for advisory, code review, design support, or part-time builders.",
  },
  {
    title: "Team pod",
    hours: "2 to 5 engineers",
    body: "Cross-functional squad with a tech lead. Best for MVPs, feature launches, migrations, or self-contained product builds.",
  },
];

const timezoneOptions = [
  {
    region: "US Eastern / Central",
    overlap: "Engineers start by 6 PM IST; 4 to 5 hour daily overlap",
  },
  {
    region: "US Pacific",
    overlap: "Engineers on a shifted schedule (8 PM to 4 AM IST) for 3 to 4 hour overlap",
  },
  {
    region: "UK / Europe",
    overlap: "Standard India hours give 4.5 to 6 hour overlap with CET and GMT",
  },
  {
    region: "Australia / APAC",
    overlap: "Standard India hours give 4 to 5 hour overlap with Sydney/Melbourne",
  },
  {
    region: "Dubai / Middle East",
    overlap: "1.5 hour offset; standard India hours give 7 to 8 hour overlap",
  },
  {
    region: "24/7 follow-the-sun",
    overlap: "Multiple engineers on staggered shifts for round-the-clock coverage",
  },
];

const whyPoints = [
  {
    title: "Remote developers, full stop",
    body: "We offer remote developers and QA engineers. Not payroll services, not HR software, not legal consulting. The product is engineering capacity.",
  },
  {
    title: "Flexible hours",
    body: "Full-time, part-time, or fractional. Hours shaped to your team's real workload, not forced into a one-size-fits-all bucket.",
  },
  {
    title: "Flexible timezones",
    body: "Engineers can work standard India hours or shift their schedule to overlap with your team. US Pacific, US Eastern, UK, EU, Australia, or Dubai.",
  },
  {
    title: "One simple contract",
    body: "One B2B services contract, one monthly invoice in your currency, predictable pricing. No surprise line items.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Stack, seniority, scope, working hours, timezone overlap target. A short brief is enough to start.",
  },
  {
    step: "02",
    title: "SethAI returns a shortlist",
    body: "Pre-vetted engineers matched on stack, context, and longevity signals. Shortlist within 48 hours.",
  },
  {
    step: "03",
    title: "You interview and pick",
    body: "Talk to candidates directly. Test working style, technical depth, communication. You choose the hire.",
  },
  {
    step: "04",
    title: "Paid trial week",
    body: "Real engineer, real code, real PRs. If the fit works, continue. If not, we shortlist another match at no extra cost.",
  },
];

const faqs: FAQ[] = [
  {
    question: "What does Workforce Next actually offer?",
    answer:
      "Remote developers and QA engineers from India, on dedicated, fractional, or full-time engagements. Engineers can work standard India hours or shift their schedule to overlap with your team's working hours. That's the offer. One product: remote engineering capacity.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Can engineers work flexible hours?",
    answer:
      "Yes. We offer full-time (40 hours/week), part-time, and fractional (10 to 20 hours/week) engagements. Hours are shaped to your team's actual workload. If you need an engineer for 25 hours a week or a tech lead for 12 hours a week, we structure the engagement that way.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Can engineers work in our timezone?",
    answer:
      "Yes. Standard India hours give 4 to 6 hours of overlap with UK, EU, Australia, and US Eastern. For US Pacific or Australian customers we arrange engineers who shift their schedule (start late afternoon or early evening India time) to give meaningful overlap with your working hours.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Do we need to set up an India entity?",
    answer:
      "No. You sign one B2B services contract with us and pay one monthly invoice in your currency. The engineer is our employee in India, not yours. You don't worry about the operational side.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What's the pricing model?",
    answer:
      "One all-in monthly fee in your currency, indexed to the role and seniority. Predictable month to month. Pricing scales with hours: fractional is roughly half of full-time. No setup fees, no recruitment fees, no hidden costs.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Who owns the IP the engineer produces?",
    answer:
      "You do, fully. Standard work-product assignment. There's no shared ownership, no licence-back, and no India-resident IP retention.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What happens if we want to end the engagement?",
    answer:
      "You give 30 days notice on the services contract. No 12-month lock-in. If you want a replacement instead of an exit, we shortlist within 48 hours and the swap is at no extra fee in the first 90 days.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "How fast can an engineer start?",
    answer:
      "Shortlist in 48 hours, interviews the following week, paid trial start typically 7 to 10 business days after intake call. Engineers with bench availability can start faster.",
    category: "hiring",
    categoryLabel: "Operations",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "Hire Remote Developers from India",
    url: "https://workforcenext.in/india-handled/",
  },
]);

const faqSchema = generateFAQPageSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "Hire Remote Developers from India (Flexible Hours & Timezone)",
  description:
    "Hire dedicated, fractional, or full-time remote developers from India. Flexible hours, flexible timezone coverage, one B2B contract.",
  url: "https://workforcenext.in/india-handled/",
  datePublished: "2026-04-10",
  dateModified: "2026-05-19",
});

export default function IndiaHandledPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            REMOTE DEVELOPERS FROM INDIA
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire remote developers from India. Flexible hours. Flexible
            timezones.
          </h1>
          <p className="mt-5 text-lg text-dark-400 dark:text-dark-300 max-w-2xl leading-relaxed">
            Pre-vetted developers and QA engineers from India for startups
            to enterprises. Dedicated, fractional, or full-time. Standard
            India hours or shifted to overlap with your team. One product:
            engineering capacity that ships.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a 15-min call
            </Button>
            <Button href="#engagement" variant="outline" size="lg">
              See engagement options
            </Button>
          </div>
          <p className="mt-6 text-sm text-dark-400 dark:text-dark-400">
            One B2B contract. Predictable monthly pricing. Paid trial
            before commitment.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What we actually offer
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            One product, with the flexibility to shape it to your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 bg-white dark:bg-dark-900"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement options */}
      <section
        id="engagement"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Flexible hours: three engagement shapes
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Match the engagement to the work, not the other way around.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementOptions.map((option) => (
              <div
                key={option.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col"
              >
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">
                  {option.title}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary-500 dark:text-primary-400">
                  {option.hours}
                </p>
                <p className="mt-4 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {option.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone options */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Flexible timezones: shaped to your hours
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Engineers can work standard India hours or shift their schedule
            to give meaningful daily overlap with your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {timezoneOptions.map((tz) => (
              <div
                key={tz.region}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {tz.region}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {tz.overlap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-500/15 text-primary-700 dark:text-primary-400 font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Pick the engineer. Start shipping.
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            15-min call. Tell us your stack, your hours, your timezone. We
            return a shortlist within 48 hours. You interview, you pick, you
            run a paid trial week. No commitment until you are ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book the 15-min call
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See the full process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
