import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "MVP Sprint for Founders - AI Product in 4 Weeks",
  description:
    "Get a senior developer matched by SethAI for a 4-week MVP sprint. Fixed scope, 1-week paid trial, and a developer who stays with you past launch. INR 1.2-1.8L / $1,500-$2,200.",
  keywords: [
    "MVP development India",
    "hire AI developer for startup",
    "MVP sprint developer",
    "build MVP in 4 weeks",
    "startup developer India",
    "SethAI matched developer",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "MVP Sprint for Founders - AI Product in 4 Weeks",
    description:
      "Get a senior developer matched by SethAI for a 4-week MVP sprint. Fixed scope, 1-week paid trial.",
  },
  alternates: {
    canonical: "https://workforcenext.in/for/founders/",
  },
};

const sprintIncludes = [
  {
    title: "1 Senior Developer",
    description:
      "Hand-picked by SethAI based on your tech stack, domain, and working style. Not a random resume from a bench.",
  },
  {
    title: "4-Week Fixed Engagement",
    description:
      "Clear scope, clear timeline. You get a working product at the end, not a slide deck.",
  },
  {
    title: "1-Week Paid Trial",
    description:
      "Start with a paid trial week. If the fit is not right, you walk away. No lock-in, no risk.",
  },
  {
    title: "SethAI Matching",
    description:
      "Our AI recruiter screens for technical depth and ownership mindset, not just keyword matches on a resume.",
  },
];

const timeline = [
  {
    week: "Trial Week",
    title: "Prove the fit",
    description:
      "Your developer starts on a scoped task. You evaluate code quality, communication, and pace. If it works, we continue.",
  },
  {
    week: "Week 1-2",
    title: "Build the core",
    description:
      "Architecture decisions, core features, and the first deployable version. Daily async updates, weekly sync calls.",
  },
  {
    week: "Week 3",
    title: "Integrate and iterate",
    description:
      "Connect APIs, add auth, handle edge cases. Real users can start testing by the end of this week.",
  },
  {
    week: "Week 4",
    title: "Ship and stabilize",
    description:
      "Bug fixes, performance tuning, deployment setup. You launch with confidence, not crossed fingers.",
  },
];

export default function FoundersPage() {
  const serviceSchema = generateServiceSchema(
    "MVP Sprint for Founders",
    "4-week fixed-scope MVP development with a senior developer matched by SethAI. Includes 1-week paid trial.",
    "https://workforcenext.in/for/founders/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "For Founders", url: "https://workforcenext.in/for/founders/" },
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
            FOR FOUNDERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            From idea to working AI product in 4 weeks.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            One senior developer. Four weeks. Fixed scope. You get a real product,
            not a prototype that falls apart when users show up.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=mvp-sprint" size="lg">
              Start your MVP Sprint
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-dark-400 dark:text-dark-300 mb-8 max-w-xl mx-auto">
            No hourly billing surprises. No scope creep clauses. One price for the
            full sprint.
          </p>
          <div className="inline-block bg-primary-50 dark:bg-dark-800 rounded-2xl p-8 md:p-10 border border-primary-100 dark:border-dark-700">
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              4-Week MVP Sprint
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50">
              INR 1.2-1.8L
            </p>
            <p className="text-dark-400 dark:text-dark-300 mt-1">
              $1,500 - $2,200 USD
            </p>
            <p className="text-sm text-dark-400 dark:text-dark-300 mt-4">
              Includes 1-week paid trial. Walk away if the fit is not right.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            What you get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sprintIncludes.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="text-primary-500 shrink-0 mt-1">
                  <svg
                    className="w-6 h-6"
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
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="how-it-works"
        className="section-padding bg-white dark:bg-dark-900"
      >
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            How the sprint works
          </h2>
          <div className="space-y-8">
            {timeline.map((step, index) => (
              <div key={step.week} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-primary-200 dark:bg-dark-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                    {step.week}
                  </p>
                  <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50 mt-1">
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

      {/* Longevity */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-4">
            Built for the long run
          </h2>
          <p className="text-lg text-dark-400 dark:text-dark-300 leading-relaxed">
            Your MVP Sprint developer is matched for longevity. They are still with
            you at 100 users, your first pivot, and your first scale moment. When
            you are ready to grow the team, your sprint developer becomes the anchor
            of your engineering pod.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to build?
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Tell us what you are building and we will match you with the right
            developer within 48 hours.
          </p>
          <Button href="/contact/?offer=mvp-sprint" variant="white" size="lg">
            Start your MVP Sprint
          </Button>
        </div>
      </section>
    </>
  );
}
