import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "Hire a Vibe-Code Optimisation Engineer | Workforce Next",
  description:
    "Hire an engineer who reviews and productionises AI-generated code. Cursor, Copilot, code review, security auditing, performance optimization, and test coverage.",
  keywords: [
    "vibe code engineer",
    "vibe coding optimisation",
    "AI code review engineer",
    "Cursor code review",
    "Copilot code quality",
    "productionise AI code",
    "AI-generated code review",
    "tech debt reduction",
  ],
  openGraph: {
    title: "Hire a Vibe-Code Optimisation Engineer | Workforce Next",
    description:
      "Hire an engineer who reviews and productionises AI-generated code. Make vibe-coded projects production-ready.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/vibe-code-engineer/`,
  },
};

const skills = [
  "Cursor",
  "Copilot",
  "Code Review",
  "Security Auditing",
  "Performance Optimization",
  "Test Coverage",
  "Tech Debt Reduction",
];

const whyPoints = [
  {
    title: "AI-generated code needs human oversight",
    description:
      "Cursor and Copilot write code fast, but they also introduce subtle bugs, security holes, and architectural shortcuts. A vibe-code optimisation engineer catches what the AI misses.",
  },
  {
    title: "Production-ready, not prototype-ready",
    description:
      "Our engineers turn AI-generated drafts into code that passes security audits, handles edge cases, and scales under load. They close the gap between demo and production.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. You get engineers who stay long enough to clean up the codebase properly.",
  },
  {
    title: "New role, real demand",
    description:
      "Every team using AI coding tools needs someone who can audit the output. This role did not exist two years ago. Now it is one of the most valuable positions on a modern engineering team.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us which AI coding tools your team uses, the size of your codebase, and what problems you are seeing.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for code review depth, security awareness, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their ability to spot AI-generated patterns and their approach to tech debt.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the engineer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

export default function HireVibeCodeEngineerPage() {
  const serviceSchema = generateServiceSchema(
    "Hire a Vibe-Code Optimisation Engineer",
    "Hire an engineer who reviews and productionises AI-generated code. Cursor, Copilot, code review, security auditing, performance optimization.",
    `${siteMetadata.url}/hire/vibe-code-engineer/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Vibe-Code Engineer",
      url: `${siteMetadata.url}/hire/vibe-code-engineer/`,
    },
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
            NEW ROLE
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire a Vibe-Code Optimisation Engineer
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Your team uses Cursor, Copilot, and other AI tools to write code
            fast. But who reviews, hardens, and productionises that code? That is
            what this engineer does.
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

      {/* Why hire from us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why you need a vibe-code optimisation engineer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-dark-900 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
              >
                {skill}
              </span>
            ))}
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
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {s.description}
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
            Make your AI-generated code production-ready
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your codebase and AI tooling, and we will match you
            with a vibe-code optimisation engineer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
