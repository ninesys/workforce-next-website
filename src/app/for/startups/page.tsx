import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers: Engineering Pods",
  description:
    "Hire dedicated developers who take ownership of your product, not just tickets. Build a 3 to 8 person engineering pod, screened by SethAI, in 30 days.",
  keywords: [
    "hire dedicated developers",
    "dedicated engineering team",
    "offshore development team",
    "software development outsourcing company",
    "offshore software development company",
    "outsourcing development team",
    "engineering pod India",
    "staff augmentation for startups",
  ],
  openGraph: {
    ...ogDefaults("/for/startups/"),
    images: ["/images/og-default.png"],
    title: "Hire Dedicated Developers: Engineering Pods for Startups",
    description:
      "Hire dedicated developers who take ownership of your product. Build a 3 to 8 person engineering pod, screened by SethAI, in 30 days.",
  },
  alternates: {
    canonical: "https://wfnext.com/for/startups/",
  },
};

const faqItems: FAQ[] = [
  {
    question: "What does it actually mean to hire dedicated developers?",
    answer:
      "A dedicated developer works exclusively on your product, inside your tools and your sprint, not split across other clients the way a typical outsourcing bench works. You get the continuity of a direct hire with the speed of an external team.",
    category: "hiring",
    categoryLabel: "Hiring & Teams",
  },
  {
    question: "How is this different from a typical software development outsourcing company?",
    answer:
      "Most outsourcing companies rotate staff between clients and measure success by tickets closed, not product outcomes. Our developers are screened by SethAI for ownership mindset specifically, work exclusively on your product, and come with a Context Continuity Guarantee if someone needs to be replaced.",
    category: "hiring",
    categoryLabel: "Hiring & Teams",
  },
  {
    question: "Can this work like an offshore development team for an ongoing engagement?",
    answer:
      "Yes. Most pods start at 3 to 8 people and run as an ongoing offshore development team embedded in your workflow, not a one-off project handoff. You can scale the pod up or down as your roadmap changes.",
    category: "hiring",
    categoryLabel: "Hiring & Teams",
  },
  {
    question: "What does 'ownership mindset' actually mean when SethAI screens a developer?",
    answer:
      "It means the developer flags risks before being asked, owns a feature through production issues rather than handing it off at the ticket boundary, and treats your roadmap as something they are accountable for, not just a list of assigned tasks. SethAI screens for this specifically, alongside technical skill.",
    category: "hiring",
    categoryLabel: "Hiring & Teams",
  },
  {
    question: "How fast can a dedicated engineering pod actually start?",
    answer:
      "Curated profiles within 48 hours, a paid trial week per developer, and the full pod embedded in your workflow within 30 days. If a developer is not the right fit during the trial, we replace them at no cost.",
    category: "hiring",
    categoryLabel: "Hiring & Teams",
  },
];

const podRoles = [
  {
    role: "AI / Backend Lead",
    description:
      "Owns architecture decisions, code reviews, and technical direction. The person your CTO talks to.",
  },
  {
    role: "2-3 Full-Stack Developers",
    description:
      "Ship features end-to-end. React, Next.js, Node, Python, or whatever your stack needs.",
  },
  {
    role: "1 QA Engineer",
    description:
      "Automated testing, regression coverage, and release confidence. Not an afterthought.",
  },
  {
    role: "Data Engineer (optional)",
    description:
      "Pipelines, analytics infrastructure, and ML data prep. Add when your data needs grow.",
  },
];

const differentiators = [
  {
    title: "48-Hour Profile Delivery",
    description:
      "SethAI screens candidates before you ever see a profile. You get 2-3 strong matches within 48 hours, not 20 mediocre resumes.",
  },
  {
    title: "1-Week Paid Trial Per Developer",
    description:
      "Every developer starts with a paid trial week. If they are not the right fit, we replace them at no cost.",
  },
  {
    title: "Context Continuity Guarantee",
    description:
      "If a developer leaves, we transfer all context to their replacement within one sprint. Your roadmap does not stop.",
  },
  {
    title: "Monthly Advisory",
    description:
      "A senior architect reviews your codebase monthly. Architecture feedback, tech debt flags, and scaling advice included.",
  },
  {
    title: "Your Team, Not Ours",
    description:
      "Agency staff rotate between clients. Your pod does not. They attend your standups, use your tools, and build your product.",
  },
  {
    title: "Scale Up or Down",
    description:
      "Need to add a mobile developer for a quarter? Or pause a role during a funding gap? Flex the pod as your needs change.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Tell us what you are building",
    description:
      "Share your tech stack, roadmap, and team culture. We figure out the right pod composition together.",
  },
  {
    step: "2",
    title: "SethAI matches your developers",
    description:
      "Within 48 hours, you receive curated profiles screened for technical skills and ownership mindset.",
  },
  {
    step: "3",
    title: "Trial week for each developer",
    description:
      "Every pod member starts with a 1-week paid trial. You evaluate them on real work, not interviews.",
  },
  {
    step: "4",
    title: "Your pod is live",
    description:
      "Within 30 days, your full engineering pod is embedded in your workflow. Daily standups, sprint cycles, direct Slack access.",
  },
];

export default function StartupsPage() {
  const serviceSchema = generateServiceSchema(
    "Engineering Pods for Startups",
    "Dedicated 3-8 person engineering pods for startups. 48-hour profile delivery via SethAI, 1-week paid trial per developer, and Context Continuity Guarantee.",
    "https://wfnext.com/for/startups/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wfnext.com" },
    { name: "For Startups", url: "https://wfnext.com/for/startups/" },
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
            FOR STARTUPS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire dedicated developers who take ownership.
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            3-8 dedicated developers who work exclusively on your product as your
            own engineering pod, not a rotating bench from an outsourcing vendor.
            Matched by SethAI for ownership mindset, trial-tested, and built to stay.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/?offer=engineering-pod" size="lg">
              Build my pod
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Typical Pod */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-4">
            A typical engineering pod
          </h2>
          <p className="text-dark-400 dark:text-dark-300 text-center mb-12 max-w-xl mx-auto">
            Every pod is customized to your stack and stage. Here is what a common
            setup looks like.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {podRoles.map((item) => (
              <div
                key={item.role}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-4">
            A typical outsourcing company rotates staff between clients. Your pod does not.
          </h2>
          <p className="text-lg text-dark-400 dark:text-dark-300 leading-relaxed">
            Your developers are not juggling three other projects. They are in your
            Slack, your Jira, your codebase. They know your domain, your users,
            and your technical debt. That context is what makes them productive,
            and it is what you lose every time an outsourcing vendor rotates someone
            out. SethAI screens every candidate for ownership mindset specifically,
            not just technical skill, because a developer who does not own the
            outcome will not build that context in the first place.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            What is included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="space-y-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-px h-full bg-primary-200 dark:bg-dark-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50">
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

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-50 text-center mb-12">
            Quick answers
          </h2>
          <p className="text-center text-sm text-dark-400 dark:text-dark-300 mb-8 -mt-6">
            For the fuller breakdown, read{" "}
            <a href="/blog/hire-dedicated-developers-who-take-ownership/" className="text-primary-500 hover:text-primary-600 font-semibold underline">
              hire dedicated developers who actually take ownership, not just tickets
            </a>.
          </p>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group p-6 rounded-xl bg-primary-50/30 dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-dark-900 text-primary-500 flex items-center justify-center font-bold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900 dark:bg-dark-950">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to build your pod?
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Tell us about your product and team needs. We will send you curated
            profiles within 48 hours.
          </p>
          <Button href="/contact/?offer=engineering-pod" variant="white" size="lg">
            Build my pod
          </Button>
        </div>
      </section>
    </>
  );
}
