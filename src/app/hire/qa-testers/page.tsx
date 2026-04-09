import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/jsonLd";

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
          <p className="mt-5 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
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
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
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
                <p className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
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
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
