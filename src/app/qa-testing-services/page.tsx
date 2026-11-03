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
  title: "Software Quality Assurance Services",
  description:
    "Workforce Next provides software quality assurance services including manual testing, test automation, performance testing, and QA outsourcing from India. Dedicated QA teams for funded startups and product companies.",
  keywords: [
    "software quality assurance services",
    "software test automation companies",
    "software testing outsourcing companies",
    "software testing services",
    "qa outsourcing india",
    "hire qa engineers india",
    "offshore qa team india",
  ],
  openGraph: {
    ...ogDefaults("/qa-testing-services/"),
    images: ["/images/og-default.png"],
    title: "Software Quality Assurance Services",
    description:
      "Dedicated QA teams from India covering manual testing, test automation, performance testing, and API testing. Screened by SethAI for technical depth and product context.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/qa-testing-services/`,
  },
};

const services = [
  {
    title: "Manual & Exploratory Testing",
    description:
      "Testers who think like users, not ticket-closers. Functional testing, regression, edge-case discovery, and UX validation. Documented with reproducible steps and context your team can act on.",
    tools: ["TestRail", "JIRA", "Zephyr", "Qase"],
  },
  {
    title: "Test Automation",
    description:
      "We build automation frameworks that run in CI and catch regressions before code reaches staging. End-to-end, component, and API test coverage across web and mobile.",
    tools: ["Playwright", "Cypress", "Selenium", "Appium"],
  },
  {
    title: "Performance & Load Testing",
    description:
      "We stress your product before your users do. Throughput benchmarks, bottleneck identification, and capacity planning for launch spikes and scale events.",
    tools: ["k6", "JMeter", "Gatling", "Artillery"],
  },
  {
    title: "API & Security Testing",
    description:
      "Contract-level API validation, schema checks, and boundary testing. OWASP-aligned security scanning to find injection vectors, auth gaps, and data exposure before they reach production.",
    tools: ["Postman", "REST Assured", "Burp Suite", "OWASP ZAP"],
  },
];

const differentiators = [
  {
    title: "Service model, not staff augmentation",
    description:
      "We are not placing a CV in your Slack. We run a QA engagement: test plan, coverage matrix, defect triage, and a handover report. You get a partner, not a headcount addition.",
  },
  {
    title: "Product-context matching via SethAI",
    description:
      "A tester who has broken fintech products thinks differently than one who has tested e-commerce checkout flows. SethAI matches QA engineers to your product domain, not just your test framework.",
  },
  {
    title: "Automation that survives the sprint",
    description:
      "Most offshore automation suites are abandoned after the first sprint because they were written for one moment in the codebase. We build maintainable frameworks with page object models and selector strategies that hold up as the product evolves.",
  },
  {
    title: "Embedded with your dev cycle",
    description:
      "Our QA engineers sit in your sprint ceremonies, write test cases from acceptance criteria, and flag gaps before code is merged, not after it ships. Shift-left is not a buzzword here.",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell us about your product",
    description:
      "Stack, test coverage gaps, recent incidents, and what keeps you up at night. A short call or a written brief is enough to scope the engagement.",
  },
  {
    step: "02",
    title: "SethAI matches your QA engineer",
    description:
      "Shortlist in 48 hours. Each candidate is matched on product domain, test framework depth, and communication style. You get a 1-page match report per candidate.",
  },
  {
    step: "03",
    title: "Trial week on your actual product",
    description:
      "Your QA engineer writes and executes a test plan on a real sprint. You evaluate coverage quality, defect depth, and collaboration. If the fit is not right, we rematch at no cost.",
  },
  {
    step: "04",
    title: "Ongoing QA partnership",
    description:
      "Dedicated QA coverage per sprint, with a monthly test health report and recommendations for automation investment. Context docs maintained throughout.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What is the difference between software quality assurance services and simply hiring a QA tester?",
    answer:
      "A QA tester executes test cases. A software quality assurance service owns the test strategy: what to test, in what order, with what coverage, and how to measure improvement over time. At Workforce Next, every QA engagement starts with a test plan and coverage matrix, not a list of assigned tickets. The difference shows up in the defects that get caught before your users find them.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you provide test automation engineers specifically, or just manual testers?",
    answer:
      "Both. Our QA practice covers the full spectrum: exploratory and manual testers, automation engineers who build Playwright or Cypress frameworks, performance testers who run k6 and JMeter campaigns, and API testers who validate contracts and catch schema drift. We match the profile to what your product actually needs rather than defaulting to one type.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "How does offshore QA outsourcing to India compare to a local QA firm?",
    answer:
      "The main tradeoffs are cost and timezone. India-based QA engineers work at a lower cost than local equivalents while covering the same test frameworks and methodologies. On timezone: every Workforce Next engagement includes at least 4 hours of daily overlap with your team. For US Pacific, we arrange morning-overlap schedules. The main risk in offshore QA is context loss when testers rotate. We address that through context documentation and dedicated assignments, not shared resource pools.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you take over an existing test suite or do you start from scratch?",
    answer:
      "We start with an audit of what exists. Most codebases have some test coverage. We assess what is worth keeping, what is brittle and misleading, and what gaps are costing you the most. We then build on top of what is solid rather than discarding working tests. If the existing suite is genuinely unusable, we say so in the audit with evidence before recommending a rebuild.",
    category: "automation",
    categoryLabel: "Automation",
  },
  {
    question: "How quickly can a QA engagement start?",
    answer:
      "SethAI delivers matched QA profiles within 48 hours of your intake call. From requirements to a QA engineer starting their trial week is typically 7 to 10 business days. If you have a launch deadline driving urgency, tell us on the intake call. We maintain a bench of pre-screened QA engineers who can start in 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function QATestingServicesPage() {
  const serviceSchema = generateServiceSchema(
    "Software Quality Assurance Services",
    "Dedicated QA teams from India covering manual testing, test automation, performance testing, and API testing. Screened by SethAI for technical depth and product context.",
    `${siteMetadata.url}/qa-testing-services/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "QA Testing Services", url: `${siteMetadata.url}/qa-testing-services/` },
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
            QA &amp; TESTING SERVICES
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Software quality assurance services from India.
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Dedicated QA teams covering manual testing, test automation, performance,
            and security. Matched to your product domain by SethAI. Based in India,
            embedded in your sprint cycle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=qa-testing" size="lg">
              Start a QA engagement
            </Button>
            <Button href="/hire/qa-testers/" variant="outline" size="lg">
              Hire a QA engineer
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-4">
            Four QA disciplines, one dedicated team
          </h2>
          <p className="text-center text-dark-500 dark:text-dark-300 mb-12 max-w-xl mx-auto">
            Every engagement is scoped to your actual gaps, not sold as a bundled package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 text-xs font-medium rounded-md border border-dark-100 dark:border-dark-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why product companies choose Workforce Next for QA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <div className="text-primary-500 shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                    {item.description}
                  </p>
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
              { stat: "48h", label: "QA profile delivery via SethAI" },
              { stat: "4+", label: "Hours daily overlap with your team" },
              { stat: "4", label: "Testing disciplines in one engagement" },
              { stat: "0", label: "Recruitment fees" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <dt className="text-3xl font-extrabold text-white">{stat}</dt>
                <dd className="mt-1 text-sm text-dark-300">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How a QA engagement works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold text-lg mb-4">
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
            Common questions about software testing outsourcing
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
          <p className="mt-6 text-sm text-dark-500 dark:text-dark-300">
            Looking to hire an individual QA engineer rather than a full engagement?{" "}
            <a href="/hire/qa-testers/" className="text-primary-600 dark:text-primary-400 underline">
              See the QA hire page.
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to improve your software quality?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Tell us your stack and your biggest testing gap. We will scope the
            right QA engagement and match you with an engineer in 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/?offer=qa-testing" variant="white" size="lg">
              Start a QA engagement
            </Button>
            <Button href="/hire/qa-testers/" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Hire a QA engineer
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
