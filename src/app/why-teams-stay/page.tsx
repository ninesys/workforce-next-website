import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateBreadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Why Teams Stay - Retention Philosophy | Workforce Next",
  description:
    "Our retention approach is built on three mechanisms: SethAI screening for longevity, context documentation, and monthly engineering advisory check-ins. Here is why teams stay.",
  keywords: [
    "offshore developer retention",
    "remote team retention",
    "developer engagement offshore",
    "reduce offshore attrition",
    "SethAI screening",
    "engineering advisory check-in",
    "dedicated team retention",
  ],
  openGraph: {
    title: "Why Teams Stay | Workforce Next",
    description:
      "Our retention approach is built on three mechanisms: SethAI screening, context docs, and monthly advisory.",
  },
  alternates: {
    canonical: "https://workforcenext.in/why-teams-stay",
  },
};

const mechanisms = [
  {
    title: "SethAI screening for longevity",
    description:
      "Our AI recruiter does not just test coding skills. SethAI evaluates ownership mindset, career alignment, and communication reliability. We look for people who want to build something meaningful, not people who are just looking for the next pay bump.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    title: "Context documentation from day one",
    description:
      "Every engagement gets a codebase walkthrough, domain glossary, and architecture decision log. These living documents give developers clarity and purpose. They know why things were built a certain way, not just what exists. That understanding creates ownership.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Monthly engineering advisory check-in",
    description:
      "Every month, a senior engineering advisor reviews team health, velocity trends, and any friction points. Small problems get fixed before they grow into reasons to leave. Think of it as preventive maintenance for your team.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  { name: "Why Teams Stay", url: "https://workforcenext.in/why-teams-stay" },
]);

export default function WhyTeamsStayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            RETENTION
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Why teams stay
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            The biggest problem with offshore development is not finding good
            people. It is keeping them. We built Workforce Next around three
            retention mechanisms that address why developers actually leave.
          </p>
        </div>
      </section>

      {/* The three mechanisms */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10 text-center">
            Three mechanisms that keep teams together
          </h2>
          <div className="space-y-8">
            {mechanisms.map((mechanism) => (
              <div
                key={mechanism.title}
                className="flex gap-5 p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <div className="text-primary-500 shrink-0 mt-1">
                  {mechanism.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-dark-900 dark:text-dark-50">
                    {mechanism.title}
                  </h3>
                  <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                    {mechanism.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Build a team that lasts
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300">
            Tell us what you are building and we will show you how our retention
            approach works in practice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See our process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
