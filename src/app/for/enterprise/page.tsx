import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Enterprise Engineering Services - The Right Specialist for Your Exact Problem",
  description:
    "Expert on-demand, staff augmentation, and fixed-scope consulting for enterprise teams. Free 2-hour architecture assessment. AI, data, cloud, and full-stack specialists.",
  keywords: [
    "enterprise staff augmentation India",
    "hire AI consultant",
    "enterprise software development",
    "fixed scope consulting",
    "architecture assessment",
    "enterprise engineering services",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Enterprise Engineering Services - The Right Specialist for Your Exact Problem",
    description:
      "Expert on-demand, staff augmentation, and fixed-scope consulting for enterprise teams.",
  },
  alternates: {
    canonical: "https://workforcenext.in/for/enterprise/",
  },
};

const engagementModels = [
  {
    title: "Expert On-Demand",
    description:
      "Need a LangChain specialist for 3 weeks? A cloud cost engineer for an audit? Get a senior expert embedded in your team for a specific problem, on your timeline.",
    bestFor: "Targeted problems that need deep expertise fast.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    description:
      "Extend your existing team with 1-10 developers who integrate into your workflows. Same tools, same standups, same Slack channels. They just happen to be ours.",
    bestFor: "Scaling capacity without the overhead of full-time hires.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Fixed-Scope Consulting",
    description:
      "A defined deliverable with a fixed timeline and price. Architecture review, migration plan, proof of concept, or performance audit. Clear scope, clear outcome.",
    bestFor: "Projects with well-defined outcomes and timelines.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const specializations = [
  "AI agents and LLM integration",
  "Data engineering and analytics pipelines",
  "Cloud architecture and cost optimization",
  "Full-stack product development",
  "DevOps and infrastructure automation",
  "QA and test automation",
  "Mobile development (React Native, Flutter)",
  "Legacy system modernization",
];

export default function EnterprisePage() {
  const serviceSchema = generateServiceSchema(
    "Enterprise Engineering Services",
    "Expert on-demand, staff augmentation, and fixed-scope consulting for enterprise teams. Free 2-hour architecture assessment.",
    "https://workforcenext.in/for/enterprise/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "For Enterprise", url: "https://workforcenext.in/for/enterprise/" },
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
            FOR ENTERPRISE
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            The right specialist for your exact problem.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Whether you need one expert for three weeks or ten developers for a
            year, we match the engagement model to your problem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=enterprise-assessment" size="lg">
              Book free assessment
            </Button>
            <Button href="#engagement-models" variant="outline" size="lg">
              See engagement models
            </Button>
          </div>
        </div>
      </section>

      {/* Free Assessment Offer */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl text-center">
          <div className="bg-primary-50 dark:bg-dark-800 rounded-2xl p-8 md:p-10 border border-primary-100 dark:border-dark-700">
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              FREE OFFER
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-4">
              2-Hour Architecture Assessment
            </h2>
            <p className="text-dark-400 dark:text-dark-300 max-w-xl mx-auto mb-6">
              A senior architect reviews your current system, identifies
              bottlenecks, and recommends next steps. No sales pitch, just honest
              technical feedback you can act on.
            </p>
            <Button href="/contact/?offer=enterprise-assessment">
              Book free assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        id="engagement-models"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            Three ways to engage
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-12 max-w-xl mx-auto">
            Pick the model that fits your situation. Or let us recommend one after
            your free assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all flex flex-col"
              >
                <div className="text-primary-500 mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                  {model.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed flex-1">
                  {model.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-primary-500">
                  Best for: {model.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            Our specializations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specializations.map((spec) => (
              <div key={spec} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary-500 shrink-0"
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
                <span className="text-dark-700 dark:text-dark-200">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let us find the right fit
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Start with a free 2-hour architecture assessment. No commitment, no
            sales pitch. Just a senior architect and honest technical feedback.
          </p>
          <Button
            href="/contact/?offer=enterprise-assessment"
            variant="white"
            size="lg"
          >
            Book free assessment
          </Button>
        </div>
      </section>
    </>
  );
}
