import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Employee Productivity Intelligence - Visibility Without Surveillance",
  description:
    "AI-powered productivity intelligence that gives employees visibility into their own data, coaching nudges instead of alerts, and managers weekly AI reports. Not surveillance. Clarity.",
  keywords: [
    "employee productivity software",
    "AI productivity intelligence",
    "team productivity tool",
    "employee performance analytics",
    "productivity monitoring alternative",
    "AI coaching tool",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Employee Productivity Intelligence - Visibility Without Surveillance",
    description:
      "AI-powered productivity intelligence. Employees see their own data. Managers get weekly AI reports. Not surveillance.",
  },
  alternates: {
    canonical:
      "https://workforcenext.in/products/employee-productivity-intelligence/",
  },
};

const pillars = [
  {
    title: "Visibility Without Fear",
    description:
      "Employees see their own data first. Work patterns, focus time, collaboration load, and energy trends. When people understand their own habits, they improve on their own terms.",
    highlights: [
      "Personal dashboard with daily and weekly patterns",
      "Focus time tracking and distraction analysis",
      "Collaboration load metrics (meetings, messages, context switches)",
      "Employees control what managers can see",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "AI Coaching Nudges",
    description:
      "Not alerts. Not warnings. Gentle, context-aware nudges that help people work better. Like a good manager who notices patterns and suggests improvements, without the micromanagement.",
    highlights: [
      "\"You had 6 hours of meetings yesterday. Consider blocking focus time today.\"",
      "\"Your deep work sessions are most productive before noon.\"",
      "\"You have been context-switching more than usual this week.\"",
      "Nudges are private to the employee by default",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Manager Intelligence",
    description:
      "Weekly AI-generated reports that give managers what they actually need: team health signals, workload distribution, and collaboration patterns. No raw surveillance data, just actionable insights.",
    highlights: [
      "Weekly AI summary of team productivity patterns",
      "Workload imbalance detection across the team",
      "Burnout risk indicators based on sustained overwork patterns",
      "Sprint velocity context (why output changed, not just that it did)",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "INR 299",
    period: "per user / month",
    capacity: "Up to 25 users",
    features: [
      "Personal productivity dashboard",
      "AI coaching nudges",
      "Weekly individual reports",
      "Focus time tracking",
      "Email support",
    ],
    cta: "Start free trial",
    ctaHref: "/contact/?offer=epi-starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "INR 399",
    period: "per user / month",
    capacity: "Up to 100 users",
    features: [
      "Everything in Starter",
      "Manager intelligence reports",
      "Team workload analytics",
      "Burnout risk indicators",
      "Slack and Teams integration",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaHref: "/contact/?offer=epi-growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to your needs",
    capacity: "Unlimited users",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "SSO and advanced security",
      "Dedicated account manager",
      "Custom AI model training",
      "On-premise deployment option",
    ],
    cta: "Request a demo",
    ctaHref: "/contact/?offer=epi-enterprise",
    highlighted: false,
  },
];

export default function EmployeeProductivityIntelligencePage() {
  const serviceSchema = generateServiceSchema(
    "Employee Productivity Intelligence",
    "AI-powered productivity intelligence that gives employees visibility into their own data, coaching nudges, and managers weekly AI reports. Not surveillance, clarity.",
    "https://workforcenext.in/products/employee-productivity-intelligence/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "Products", url: "https://workforcenext.in/products/" },
    {
      name: "Employee Productivity Intelligence",
      url: "https://workforcenext.in/products/employee-productivity-intelligence/",
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
            PRODUCT
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Not surveillance. Clarity.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            AI-powered productivity intelligence that helps employees understand
            their own work patterns and gives managers the insights they need
            without watching over anyone&apos;s shoulder.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=epi-starter" size="lg">
              Start free trial
            </Button>
            <Button href="/contact/?offer=epi-enterprise" variant="outline" size="lg">
              Request a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            Three pillars of productivity intelligence
          </h2>
          <div className="space-y-12">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className="text-primary-500 mb-3">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-primary-50 dark:bg-dark-800 rounded-xl p-6 border border-primary-100 dark:border-dark-700">
                    <ul className="space-y-3">
                      {pillar.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm text-dark-700 dark:text-dark-200">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            Simple pricing, no surprises
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-12 max-w-xl mx-auto">
            Start with a free trial. Scale as your team grows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-xl border flex flex-col ${
                  plan.highlighted
                    ? "bg-white dark:bg-dark-900 border-primary-500 ring-2 ring-primary-500 shadow-lg"
                    : "bg-white dark:bg-dark-900 border-dark-50 dark:border-dark-700"
                }`}
              >
                {plan.highlighted && (
                  <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
                    Most popular
                  </p>
                )}
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                  {plan.name}
                </h3>
                <p className="mt-2">
                  <span className="text-3xl font-extrabold text-dark-900 dark:text-dark-50">
                    {plan.price}
                  </span>
                </p>
                <p className="text-sm text-dark-400 dark:text-dark-300">
                  {plan.period}
                </p>
                <p className="text-xs text-primary-500 font-semibold mt-1">
                  {plan.capacity}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-primary-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm text-dark-700 dark:text-dark-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    href={plan.ctaHref}
                    variant={plan.highlighted ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            See it in action
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Start a free trial with your team, or request a personalized demo to
            see how productivity intelligence works for your specific workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/?offer=epi-starter" variant="white" size="lg">
              Start free trial
            </Button>
            <Button
              href="/contact/?offer=epi-enterprise"
              variant="outline"
              size="lg"
              className="border-dark-600 text-dark-200 hover:border-primary-400 hover:text-primary-400"
            >
              Request a demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
