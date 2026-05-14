import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Context Continuity Guarantee",
  description:
    "If a developer ever leaves, our context docs get a replacement productive in days, not months. Codebase walkthroughs, glossaries, and decision logs.",
  keywords: [
    "developer replacement guarantee",
    "context continuity offshore",
    "offshore developer knowledge transfer",
    "codebase documentation",
    "architecture decision log",
    "domain glossary development team",
    "developer transition plan",
  ],
  openGraph: {
    ...ogDefaults("/context-continuity-guarantee/"),
    images: ["/images/og-default.png"],
    title: "Context Continuity Guarantee",
    description:
      "If a developer leaves, our context docs get a replacement productive in days, not months.",
  },
  alternates: {
    canonical: "https://workforcenext.in/context-continuity-guarantee/",
  },
};

const contextDocs = [
  {
    title: "Codebase walkthrough",
    description:
      "A living document that maps out the project structure, key modules, data flow, and how different services connect. Updated as the codebase evolves. A new developer reads this and understands where things live and why.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Domain glossary",
    description:
      "Every business has its own language. We document the domain terms, business rules, and edge cases so a new developer does not have to ask your team to explain things that were already explained six months ago.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Architecture decision log",
    description:
      "Why was this database chosen? Why does this service run separately? We record the reasoning behind key technical decisions so a new developer understands the tradeoffs, not just the outcome.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
    ),
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "Context Continuity Guarantee",
    url: "https://workforcenext.in/context-continuity-guarantee/",
  },
]);

const articleSchema = generateArticleSchema({
  headline: "Context Continuity Guarantee",
  description:
    "How we keep replacement developers productive in days, not months: living codebase walkthroughs, domain glossaries, and architecture decision logs.",
  url: "https://workforcenext.in/context-continuity-guarantee/",
  datePublished: "2026-03-10",
});

export default function ContextContinuityGuaranteePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            OUR GUARANTEE
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Context Continuity Guarantee
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            People leave jobs. That is normal. What is not normal is losing
            months of momentum every time it happens. Our guarantee is simple:
            if a developer leaves, their replacement is productive in days, not
            months.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            The problem with typical offshore handoffs
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-6">
            When a developer leaves a typical offshore team, all the context
            leaves with them. The business rules they learned, the architectural
            decisions they understood, the tribal knowledge they absorbed over
            months of Slack conversations and code reviews. Gone.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-6">
            The replacement starts from scratch. Your product manager spends
            weeks re-explaining the same things. Your senior engineers get
            pulled into mentoring instead of building. Velocity drops. Deadlines
            slip. And you start wondering if offshore development is worth the
            headache.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
            We decided to fix this. Not with retention bonuses or non-compete
            clauses, but with documentation that captures context before anyone
            thinks about leaving.
          </p>
        </div>
      </section>

      {/* The three documents */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Three documents that protect your momentum
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            For every engagement, we create and maintain three context
            documents. These are living documents that get updated as the
            project evolves. Workforce Next maintains copies of everything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contextDocs.map((doc) => (
              <div
                key={doc.title}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <div className="text-primary-500 mb-4">{doc.icon}</div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {doc.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works in practice */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            How it works in practice
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold text-sm">
                1
              </div>
              <div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  Documents are created during onboarding
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  When your developer starts, we create the initial codebase
                  walkthrough, domain glossary, and architecture decision log.
                  This is part of our standard process, not an add-on.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold text-sm">
                2
              </div>
              <div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  Documents evolve with the project
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  As new features ship and architectural decisions get made, the
                  docs get updated. Monthly advisory check-ins include a review
                  of documentation freshness.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold text-sm">
                3
              </div>
              <div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  If someone leaves, the replacement reads the docs
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  The new developer gets the full context package. They
                  understand the codebase structure, domain language, and
                  architectural reasoning before writing their first line of
                  code. Your team does not have to re-explain everything.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold text-sm">
                4
              </div>
              <div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  Workforce Next maintains copies of everything
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  All context documents are stored and versioned on our side.
                  Even if your internal wiki gets messy or someone accidentally
                  deletes something, the knowledge is safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Build with confidence
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300">
            Your momentum should not depend on any single person staying
            forever. Let us show you how context continuity works in practice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See our full process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
