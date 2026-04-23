import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateFAQPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Cost of Switching Tech Partners - What It Actually Takes",
  description:
    "Switching offshore tech partners costs more than you think. Onboarding time, velocity dips, re-explanation overhead, and lost momentum. Here is the real breakdown.",
  keywords: [
    "cost of switching offshore developers",
    "offshore vendor switching cost",
    "developer onboarding time",
    "remote team transition cost",
    "offshore developer retention",
    "tech partner switching framework",
    "staff augmentation transition",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Cost of Switching Tech Partners",
    description:
      "Switching offshore tech partners costs more than you think. Here is the real breakdown.",
  },
  alternates: {
    canonical: "https://workforcenext.in/cost-of-switching/",
  },
};

const costComponents = [
  {
    component: "Onboarding time",
    duration: "4 to 8 weeks",
    description:
      "New developers need to learn your codebase, domain language, deployment pipeline, and team norms. Even strong engineers need this ramp-up period before they can contribute independently.",
  },
  {
    component: "Velocity dip",
    duration: "30 to 60% drop",
    description:
      "During the first 2 to 3 months, your team output drops significantly. Senior developers spend time mentoring instead of building, and new hires produce less while they learn.",
  },
  {
    component: "Re-explanation overhead",
    duration: "2 to 4 weeks",
    description:
      "Every business rule, product decision, and technical tradeoff needs to be explained again. This knowledge transfer pulls your existing team away from their own work.",
  },
  {
    component: "Cultural re-alignment",
    duration: "4 to 8 weeks",
    description:
      "Communication cadence, code review norms, meeting culture, and feedback style all need to be re-established. This is the part most companies underestimate.",
  },
  {
    component: "Opportunity cost",
    duration: "2 to 3 months",
    description:
      "Features that could have shipped during the transition period are delayed. Competitors keep moving while your team is rebuilding capacity. This is the cost that never shows up on invoices.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What is the real cost of switching offshore tech partners?",
    answer:
      "The real cost includes 4 to 8 weeks of onboarding, a 30 to 60 percent velocity dip for 2 to 3 months, re-explanation overhead, cultural re-alignment time, and the opportunity cost of delayed features. Most companies underestimate the total impact because the indirect costs are invisible on invoices.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to onboard a new offshore developer?",
    answer:
      "A new offshore developer typically needs 4 to 8 weeks to become productive, depending on codebase complexity and domain knowledge required. At Workforce Next, we reduce this to days by maintaining context documents including codebase walkthroughs, domain glossaries, and architecture decision logs.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do you retain offshore developers long term?",
    answer:
      "We retain developers through three mechanisms. First, SethAI screens for longevity signals like ownership mindset and career alignment, not just technical skills. Second, structured onboarding with context docs gives developers clarity and purpose from day one. Third, monthly engineering advisory check-ins catch friction early and keep teams healthy.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const faqSchema = generateFAQPageSchema(faqItems);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "Cost of Switching",
    url: "https://workforcenext.in/cost-of-switching/",
  },
]);

export default function CostOfSwitchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            SWITCHING COSTS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            What does it actually cost to switch tech partners?
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            The hourly rate looks cheaper. But when you add up the onboarding
            time, velocity dip, re-explanation overhead, and lost momentum, the
            real cost of switching is much higher than staying and fixing what
            you have.
          </p>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            The five hidden costs of switching
          </h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-dark-50 dark:border-dark-700">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-50 dark:bg-dark-800">
                  <th className="text-left px-6 py-4 text-sm font-extrabold text-dark-900 dark:text-dark-50">
                    Cost component
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-extrabold text-dark-900 dark:text-dark-50">
                    Typical impact
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-extrabold text-dark-900 dark:text-dark-50">
                    What happens
                  </th>
                </tr>
              </thead>
              <tbody>
                {costComponents.map((cost, index) => (
                  <tr
                    key={cost.component}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-dark-900"
                        : "bg-primary-50/30 dark:bg-dark-800/50"
                    }
                  >
                    <td className="px-6 py-5 font-bold text-dark-900 dark:text-dark-50 align-top whitespace-nowrap">
                      {cost.component}
                    </td>
                    <td className="px-6 py-5 text-primary-500 font-bold align-top whitespace-nowrap">
                      {cost.duration}
                    </td>
                    <td className="px-6 py-5 text-dark-400 dark:text-dark-300 leading-relaxed">
                      {cost.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {costComponents.map((cost) => (
              <div
                key={cost.component}
                className="p-5 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-dark-900 dark:text-dark-50">
                    {cost.component}
                  </h3>
                  <span className="text-sm font-bold text-primary-500 bg-primary-50 dark:bg-dark-800 px-3 py-1 rounded-full">
                    {cost.duration}
                  </span>
                </div>
                <p className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {cost.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The alternative */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            The alternative: build once, keep the context
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-8 max-w-3xl">
            At Workforce Next, we designed our entire process around eliminating
            these switching costs. Not by locking you in, but by making the
            experience good enough that switching never makes sense.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Screen for longevity
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                SethAI evaluates ownership mindset and career alignment, not
                just algorithms. People who want to stay get matched with teams
                where they will thrive.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Document everything
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                Every engagement gets a codebase walkthrough, domain glossary,
                and architecture decision log. If someone leaves, the next
                person starts with context, not questions.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
              <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                Monthly check-ins
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                Our engineering advisory catches problems early. Small friction
                gets fixed before it becomes a reason to leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Stop paying the switching tax
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300">
            Build a team that stays. Tell us what you need and we will show you
            how we keep developers engaged for the long term.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Talk to us
            </Button>
            <Button
              href="/context-continuity-guarantee"
              variant="outline"
              size="lg"
            >
              Context continuity guarantee
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
