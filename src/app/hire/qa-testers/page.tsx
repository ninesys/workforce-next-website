import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire QA Engineers & Software Testers from India",
  description:
    "Hire QA engineers who think like users and break things before your customers do. Manual testing, automation, performance, security, and API testing. Context-matched to your product and industry.",
  keywords: [
    "hire QA engineers India",
    "hire software testers India",
    "QA automation engineers",
    "hire Selenium developers",
    "hire Playwright testers",
    "manual testing India",
    "performance testing India",
    "API testing engineers",
    "dedicated QA team India",
  ],
  openGraph: {
    ...ogDefaults("/hire/qa-testers/"),
    images: ["/images/og-default.png"],
    title: "Hire QA Engineers & Software Testers from India",
    description:
      "QA engineers who care about quality, not just test cases. Manual, automation, performance, and security testing.",
  },
  alternates: {
    canonical: "https://workforcenext.in/hire/qa-testers/",
  },
};

const testingTypes = [
  {
    title: "Manual & Exploratory Testing",
    description:
      "Testers who actually use your product the way a real person would. They find the edge cases that scripts miss, the flows that feel wrong, and the bugs that only show up when someone does something unexpected.",
    skills: ["Exploratory testing", "Usability testing", "Regression testing", "Cross-browser", "Mobile testing"],
  },
  {
    title: "Test Automation",
    description:
      "Engineers who build test suites that run on every commit. Not fragile Selenium scripts that break weekly. Stable, maintainable automation that actually catches regressions and gives your team confidence to ship fast.",
    skills: ["Selenium", "Playwright", "Cypress", "Appium", "Jest", "pytest", "TestNG"],
  },
  {
    title: "API & Integration Testing",
    description:
      "Your backend talks to 12 services, 3 payment gateways, and a handful of third-party APIs. These testers make sure all of that works together, handles failures gracefully, and returns the right thing every time.",
    skills: ["Postman", "REST Assured", "GraphQL testing", "Contract testing", "Pact", "Newman"],
  },
  {
    title: "Performance & Load Testing",
    description:
      "Before your product hits 10,000 concurrent users, you need someone who has already simulated it. They find the bottlenecks, the memory leaks, and the database queries that work fine at 100 users but fall apart at scale.",
    skills: ["JMeter", "k6", "Gatling", "Locust", "Artillery", "APM tools"],
  },
  {
    title: "Security Testing",
    description:
      "Not a checkbox audit. Engineers who try to break into your application the way an attacker would. OWASP Top 10, authentication bypasses, injection attacks, and data exposure risks.",
    skills: ["OWASP", "Burp Suite", "ZAP", "Penetration testing", "Vulnerability scanning", "SAST/DAST"],
  },
];

const whyUs = [
  {
    title: "They think like users, not robots",
    description:
      "Our QA engineers don't just follow test scripts. They explore your product the way a confused customer would, a power user would, and a malicious actor would. Three different mindsets, three different kinds of bugs caught.",
  },
  {
    title: "Context-matched to your product",
    description:
      "Testing a fintech app is nothing like testing an e-commerce platform. Transaction flows, compliance requirements, and failure modes are completely different. We match QA engineers who have tested products in your industry before.",
  },
  {
    title: "They work inside your team, not outside it",
    description:
      "No separate QA team throwing bugs over the wall. Your tester joins your sprint, attends your standups, reviews PRs for testability, and works alongside your developers. Bugs get caught before they reach staging, not after.",
  },
  {
    title: "Automation that actually saves time",
    description:
      "Bad test automation costs more than it saves. Flaky tests, slow suites, scripts that break every time the UI changes. Our automation engineers build test infrastructure that your team trusts and maintains easily.",
  },
];

const process = [
  { step: "01", title: "Tell us what you are testing", description: "Web app, mobile app, API, microservices, or all of the above. We need to know your product, your stack, and where quality is hurting the most right now." },
  { step: "02", title: "SethAI matches by testing context", description: "An e-commerce tester understands checkout edge cases. A healthtech tester knows compliance testing. We match QA engineers who have worked on products like yours." },
  { step: "03", title: "You interview and decide", description: "We shortlist 2 to 3 candidates with a match report for each. You interview them, ask your questions, and pick the one that fits your team." },
  { step: "04", title: "One-week paid trial", description: "Your QA engineer works on real bugs and real test cases for a week. If you are not happy, we rematch at no cost. No risk." },
];

const responsibilities = [
  "Writing and executing manual test plans that cover the happy path, the expected edges, and the user actions nobody predicted",
  "Building automated test suites in Playwright, Cypress, Selenium, or Appium that stay green when the UI changes reasonably",
  "Reviewing PRs for testability: flagging missing test coverage, unclear error handling, and risky patterns before they ship",
  "Creating API test suites in Postman, REST Assured, or Pact to validate contracts between services and third parties",
  "Designing load tests with k6, JMeter, or Locust that simulate realistic traffic and surface bottlenecks before customers do",
  "Running security tests against OWASP Top 10: SQL injection, XSS, CSRF, SSRF, auth bypasses, and data exposure",
  "Maintaining CI/CD quality gates: preventing broken builds from reaching staging and flaky tests from blocking releases",
  "Filing detailed bug reports with reproduction steps, environment details, and suggested root cause when possible",
  "Partnering with product and engineering on test strategy for new features before code gets written",
  "Investigating intermittent failures that nobody else has time to debug, often the most valuable work a QA engineer does",
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a QA engineer in India?",
    answer:
      "Mid-level QA engineers in India typically cost between 2,800 and 4,500 USD per month for full-time engagement. Senior automation engineers with performance and security testing depth range from 4,500 to 7,500 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should I hire a manual tester, an automation engineer, or both?",
    answer:
      "It depends on product maturity. New products benefit from manual and exploratory testing to find UX and flow issues. Stable products benefit from automation to catch regressions. Most teams need both: manual for edge cases and new features, automation for regression. Our QA engineers are usually comfortable with both and will recommend the right mix for your stage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What test automation frameworks do your QA engineers use?",
    answer:
      "Our engineers work in Playwright and Cypress for web, Appium and Espresso for mobile, REST Assured and Postman for APIs, and Pact for contract testing. They also have experience with k6, JMeter, and Locust for performance testing. We match engineers whose primary framework aligns with your stack rather than forcing a migration.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your QA engineers do security testing?",
    answer:
      "Yes, though depth varies. Every senior QA engineer we place can run OWASP Top 10 checks, use Burp Suite and ZAP, and handle baseline authentication and injection testing. For deep penetration testing, we match engineers with specific security certifications and experience. Security testing is often combined with our vibe-code audit work for AI-generated code.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your QA engineers work in my timezone?",
    answer:
      "Yes. Our QA engineers routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap. For US Pacific customers we arrange shifted schedules to cover standups, sprint reviews, and bug triage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a QA engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Industry-specific matches (fintech, healthtech) may take 1 to 2 extra days. For common test automation needs, we often match within 48 hours from a pre-screened bench.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function QATestersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire QA Engineers & Software Testers from India",
    "QA engineers and software testers matched by product context and industry experience. Manual testing, automation, performance, security, and API testing.",
    "https://workforcenext.in/hire/qa-testers/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "Hire Developers", url: "https://workforcenext.in/hire/ai-developers/" },
    { name: "QA Engineers & Testers", url: "https://workforcenext.in/hire/qa-testers/" },
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
            HIRE QA ENGINEERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            QA engineers who break things
            <br />
            <span className="text-primary-500">before your customers do.</span>
          </h1>
          <p className="mt-5 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Not script-followers. Testers who actually care about quality. They
            explore your product like a real user, automate what matters, and catch
            the bugs that cost you customers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Hire QA engineers
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See how we match
            </Button>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
              What We Cover
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Every kind of testing your product needs
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {testingTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white dark:bg-dark-800 p-6 sm:p-8 rounded-xl border border-dark-50 dark:border-dark-700 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-dark-50">
                  {type.title}
                </h3>
                <p className="mt-2 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {type.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {type.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a QA engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a QA engineer through Workforce Next, here is the work they take
            ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
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

      {/* Why Us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              How our QA engineers are different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-dark-800/80 p-6 sm:p-7 rounded-xl border border-dark-50 dark:border-dark-700/50 shadow-card"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              How it works
            </h2>
          </div>

          <div className="space-y-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 sm:gap-6 p-5 sm:p-6 rounded-xl border border-dark-50 dark:border-dark-700 bg-white dark:bg-dark-800"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-primary-200 dark:text-primary-500/20 shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software testing team H2 absorb */}
      <section className="section-padding bg-white dark:bg-dark-900 border-t border-dark-50 dark:border-dark-700/50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Hire a software testing team, not just a tester
          </h2>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed mb-5">
            One QA engineer rarely covers a real product. Most growing teams need a
            small testing pod: a manual QA lead who owns release readiness, an
            automation engineer who keeps the regression suite green, and a part-time
            performance or accessibility specialist who steps in for releases. We
            staff this pod, manage it, and integrate it with your existing engineering
            workflow.
          </p>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed mb-5">
            A typical Workforce Next testing pod has three engineers covering manual
            exploratory testing, end-to-end automation in Playwright or Cypress, and
            API testing in Postman or REST Assured. The pod plugs into your sprint
            cadence, pairs with a fractional QA lead for strategy, and reports the
            same Core Web Vitals, defect-leakage, and flake-rate metrics every week.
          </p>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-200 leading-relaxed mb-2">
            For the full pod structure, hiring loop, and 2026 cost benchmarks, read
            our <a className="text-primary-600 dark:text-primary-400 underline underline-offset-2 hover:text-primary-700" href="/blog/hire-software-testing-team-2026/">guide to hiring a software testing team in 2026</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring QA engineers
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
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 py-16 sm:py-20 md:py-28">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-100">
            Ship with confidence.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-dark-300 max-w-xl mx-auto">
            A good QA engineer pays for themselves by catching the bug that would
            have cost you 100 customers. One-week paid trial. No recruitment fees.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Hire QA engineers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
