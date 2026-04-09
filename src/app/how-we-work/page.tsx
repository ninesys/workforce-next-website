import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "How We Work - Build Your Remote Engineering Team | Workforce Next",
  description:
    "Our 7-step process for building dedicated remote engineering teams that stay. From SethAI screening to structured onboarding and monthly advisory check-ins.",
  keywords: [
    "how to hire remote developers",
    "offshore developer onboarding process",
    "dedicated team engagement model",
    "remote engineering team setup",
    "SethAI developer screening",
    "staff augmentation process",
    "hire developers India process",
  ],
  openGraph: {
    title: "How We Work - Build Your Remote Engineering Team | Workforce Next",
    description:
      "Our 7-step process for building dedicated remote engineering teams that stay.",
  },
  alternates: {
    canonical: "https://workforcenext.in/how-we-work/",
  },
};

const steps = [
  {
    number: "01",
    name: "Share your role and team context",
    text: "Tell us what you are building, the tech stack, team size, and what kind of person would thrive in your environment. The more context we have, the better the match.",
  },
  {
    number: "02",
    name: "SethAI screens for skills and longevity",
    text: "Our AI recruiter, SethAI, evaluates candidates on technical depth, ownership mindset, career alignment, and communication reliability. You get a 1-page match report for each shortlisted candidate.",
  },
  {
    number: "03",
    name: "You interview the shortlist (2-3 candidates)",
    text: "We send you 2 to 3 pre-vetted candidates. You run your own interviews, pair-programming sessions, or technical deep-dives. No pressure to accept anyone who does not feel right.",
  },
  {
    number: "04",
    name: "One-week paid trial",
    text: "Before any long-term commitment, your chosen candidate works with your team for one week on real tasks. You see how they communicate, solve problems, and fit into your workflow.",
  },
  {
    number: "05",
    name: "Structured onboarding with context docs",
    text: "We create a codebase walkthrough, domain glossary, and architecture decision log. Your new team member gets productive fast because they understand why things were built a certain way, not just what exists.",
  },
  {
    number: "06",
    name: "Monthly engineering advisory check-in",
    text: "Every month, our senior engineering advisor reviews team health, velocity trends, and any friction points. Think of it as a lightweight retrospective that catches problems before they grow.",
  },
  {
    number: "07",
    name: "Expansion or replacement with context continuity",
    text: "Need to add a second developer? Or if someone leaves, we use the existing context docs to get a replacement up to speed in days, not months. Your momentum never stalls.",
  },
];

const howToSchema = generateHowToSchema(
  "How to build a dedicated remote engineering team with Workforce Next",
  "A 7-step process for hiring, onboarding, and retaining remote developers through SethAI screening, structured onboarding, and monthly advisory check-ins.",
  steps.map((s) => ({ name: s.name, text: s.text }))
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  { name: "How We Work", url: "https://workforcenext.in/how-we-work/" },
]);

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            OUR PROCESS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            How we build your team and keep it together
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Most offshore engagements fail because of poor screening, zero
            onboarding, and no plan for when someone leaves. We fixed all three.
            Here is exactly how it works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-primary-100 dark:bg-dark-700" />
                )}
                {/* Step number */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-extrabold text-sm">
                  {step.number}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-extrabold text-dark-900 dark:text-dark-50">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-10">
            Why this process works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Better screening
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                SethAI filters for longevity signals, not just leetcode scores.
                You meet candidates who actually want to stay.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Faster ramp-up
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                Context docs mean your new developer understands the domain,
                architecture, and team norms from day one. No guessing.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Built-in continuity
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                If someone ever leaves, the context docs and advisory
                relationship mean you are never starting from zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Ready to build your team?
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300">
            Tell us what you are building and we will put the right people in
            front of you within a week.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/why-teams-stay" variant="outline" size="lg">
              Why teams stay
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
