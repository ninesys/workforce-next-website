import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import WaitlistForm from "@/components/contact/WaitlistForm";
import SethAIIllustration from "@/components/products/SethAIIllustration";
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "SethAI - The AI Recruiter That Screens for What Matters",
  description:
    "SethAI screens developers for technical skills and longevity signals like ownership mindset and career alignment. Get a 1-page match report for AI, agentic, data, and full-stack roles.",
  keywords: [
    "AI recruiter",
    "SethAI",
    "hire AI developers",
    "developer screening tool",
    "AI hiring platform",
    "technical recruiter AI",
    "developer match report",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "SethAI - The AI Recruiter That Screens for What Matters",
    description:
      "SethAI screens developers for technical skills and longevity signals. Join the waitlist.",
  },
  alternates: {
    canonical: "https://workforcenext.in/products/seth-ai-recruiter/",
  },
};

const problems = [
  {
    title: "Job boards match keywords",
    description:
      "They find people who listed \"LangChain\" on their resume. They cannot tell you if that person actually built a production RAG pipeline or just followed a tutorial.",
  },
  {
    title: "ATS systems match years",
    description:
      "5+ years of Python does not mean someone can architect an AI agent system. Experience duration and experience depth are not the same thing.",
  },
  {
    title: "Interviews are unreliable",
    description:
      "Coding puzzles test puzzle-solving. Behavioral questions test interview prep. Neither tells you who will own a feature end-to-end and ship it without hand-holding.",
  },
];

const features = [
  {
    title: "Technical Skill Screening",
    description:
      "SethAI evaluates actual technical depth, not just keyword presence. It assesses architecture thinking, tool fluency, and problem-solving patterns.",
  },
  {
    title: "Longevity Signal Analysis",
    description:
      "Ownership mindset, career trajectory alignment, communication reliability, and collaboration patterns. The signals that predict whether someone stays and grows.",
  },
  {
    title: "1-Page Match Report",
    description:
      "No 20-page assessment documents. One clear page with a match score, strengths, risks, and a recommendation. Everything a hiring manager needs to decide.",
  },
  {
    title: "AI, Agentic, Data, and Full-Stack Roles",
    description:
      "Purpose-built for modern engineering roles. LangChain developers, RAG engineers, data pipeline architects, and full-stack product engineers.",
  },
];

export default function SethAIRecruiterPage() {
  const softwareSchema = generateSoftwareApplicationSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://workforcenext.in" },
    { name: "Products", url: "https://workforcenext.in/products/" },
    {
      name: "SethAI Recruiter",
      url: "https://workforcenext.in/products/seth-ai-recruiter/",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-4">
                PRODUCT
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
                SethAI: the AI recruiter that screens for what matters.
              </h1>
              <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
                Hiring AI developers is broken. SethAI fixes it by screening for
                technical depth and ownership mindset, not just keywords and
                years of experience.
              </p>
              <div className="mt-6">
                <Badge variant="accent" className="text-sm">
                  Currently in development
                </Badge>
              </div>
              <div className="mt-6">
                <Button href="#waitlist" size="lg">
                  Join the SethAI waitlist
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SethAIIllustration className="max-w-[560px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            Hiring AI developers is broken
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-12 max-w-xl mx-auto">
            The tools we use to hire were built for a different era. They do not
            work for AI and engineering roles where depth matters more than
            breadth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What SethAI Does */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            What SethAI does differently
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            Join the SethAI waitlist
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-8">
            SethAI is currently in development. Join the waitlist to get early
            access when we launch.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need developers right now?
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            While SethAI is in development, our team uses the same screening
            methodology to match developers manually. Get profiles within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Talk to us
          </Button>
        </div>
      </section>
    </>
  );
}
