import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire a Fractional Project Manager from India",
  description:
    "Hire a fractional or on-demand project manager from India. Senior-level roadmap, sprint, and stakeholder coordination at part-time cost. SethAI-screened.",
  keywords: [
    "fractional project manager",
    "on-demand project manager",
    "rent a project manager",
    "hire fractional pm",
    "hire project manager India",
    "part time project manager hire",
    "interim project manager",
    "remote project manager India",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire a Fractional Project Manager from India",
    description:
      "Senior-level roadmap, sprint, and stakeholder coordination at part-time cost. Pre-vetted by SethAI for ownership and communication.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/fractional-project-manager/`,
    types: {
      "text/markdown": `${siteMetadata.url}/hire/fractional-project-manager.md`,
    },
  },
};

const skills = [
  "Jira",
  "Linear",
  "Asana",
  "Notion",
  "Confluence",
  "Slack",
  "Loom",
  "Miro",
  "Roadmunk",
  "Productboard",
  "OKRs",
  "RICE prioritization",
  "RACI matrices",
  "Sprint planning",
  "Retrospectives",
  "Stakeholder reporting",
];

const whyPoints = [
  {
    title: "Senior project manager, fractional cost",
    description:
      "A US senior project manager fully loaded costs $180,000 to $250,000 a year. Our fractional model gives you the same seniority for 20 to 30 hours a week at a fraction of that. The work that needs to happen still happens; the cost line shrinks.",
  },
  {
    title: "Plugs into your existing tools",
    description:
      "Jira, Linear, Asana, Notion, Confluence. We do not bring our own tooling religion. The PM works inside whatever stack your team already uses, including the conventions you have on naming, ticket shape, and review process.",
  },
  {
    title: "Engineering and product literacy",
    description:
      "Our PMs read PR titles, understand technical tradeoffs without translation, and run effective conversations with both engineers and product. They are not project managers in name only; they have shipped real software with real teams.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "Project management work fails quietly. Missed dependencies, unclear ownership, retros that never lead to changes. SethAI screens for the ownership and communication signals that predict whether the PM will actually move the work forward.",
  },
];

const responsibilities = [
  "Running sprint planning, backlog grooming, and weekly retrospectives that lead to actual process changes, not theatre",
  "Maintaining the product roadmap and quarterly plan in your tool of choice (Linear, Jira, Notion, Productboard, etc.)",
  "Stakeholder reporting: weekly written updates, monthly metrics, quarterly reviews framed for the audience that reads them",
  "Risk and dependency tracking across teams, vendors, and external integrations, with owners assigned before they slip",
  "Cross-team standup and sync coordination, with meeting hygiene enforced (no aimless syncs, no missing decision owners)",
  "Documentation discipline: PRDs, ADRs, runbooks, and meeting notes kept current rather than rotting in a wiki",
  "OKR cascading and quarterly planning, including the pre-work that turns abstract goals into testable initiatives",
  "Hiring loop coordination when the team is growing, including JD review, interview panel orchestration, and offer logistics",
  "Incident postmortem facilitation, so the team actually learns and ships the change rather than re-running the same incident",
  "Vendor and engineering manager liaison, keeping a clear seam between your team and any external suppliers",
];

const whenToHire = [
  {
    scenario: "You are a founder doing PM work yourself and drowning in coordination",
    recommendation: "Hire a fractional project manager",
    reason:
      "Founder-as-PM is the most common silent productivity killer in early-stage companies. A 20-hour-a-week fractional PM takes the standups, the JIRA hygiene, and the stakeholder updates off your plate so you can do the work only you can do.",
  },
  {
    scenario: "You have engineers but no clear roadmap or sprint cadence",
    recommendation: "Hire a fractional or full-time project manager",
    reason:
      "Engineering velocity without a roadmap is busy work. A senior PM brings the quarterly plan, the sprint cadence, and the prioritization conversations that turn velocity into shipped outcomes.",
  },
  {
    scenario: "Your team is fewer than four engineers and clarity comes from the founder",
    recommendation: "Not yet. Defer hiring a PM",
    reason:
      "Below four engineers, a PM is overhead. The founder can run a weekly sync and a single project channel. PMs earn their weight when coordination cost grows past what one founder can hold in their head.",
  },
  {
    scenario: "You have one full-time PM already and a major project surge",
    recommendation: "Add a fractional PM for the surge window",
    reason:
      "A 90-day intensive engagement is the right shape for launches, migrations, audit prep, or board-deadline projects. The fractional PM owns the surge work; the in-house PM continues running the ongoing roadmap.",
  },
];

const screeningSignals = [
  {
    signal: "Shipping track record, not meeting count",
    detail:
      "We ask candidates to walk through the last three projects they shipped. Strong candidates name the metric that moved and what they personally did. Weak ones describe how often they ran standups.",
  },
  {
    signal: "Tooling depth in Jira, Linear, or Asana",
    detail:
      "We ask candidates to design a Linear or Jira workspace for a fictional 12-engineer team across 3 projects. Strong candidates produce a clean ticket model with sensible labels and sprint structure. Weak ones drop everything in one project.",
  },
  {
    signal: "Engineering literacy",
    detail:
      "We give candidates a GitHub PR list and ask which one they would prioritize and why. Strong candidates read the diff and reason about user impact. Weak ones reach for the oldest ticket and call it done.",
  },
  {
    signal: "Stakeholder writing samples",
    detail:
      "We ask candidates for an example weekly update they wrote for an executive audience. Strong samples are short, framed, and end with a clear next-step ask. Weak samples are a wall of activity log.",
  },
  {
    signal: "Prioritization frameworks under pressure",
    detail:
      "We give candidates a list of ten requests from product, engineering, sales, and the CEO and ask them to triage. Strong candidates ask clarifying questions before sorting. Weak ones default to whoever shouted loudest.",
  },
  {
    signal: "Async-first communication",
    detail:
      "Our PMs work across timezones. We screen for engineers who default to written context, run effective async standups, and only escalate to a meeting when async has been tried first.",
  },
];

const engagementModels = [
  {
    name: "Fractional 20 hrs/week",
    hours: "20 hours per week",
    best: "Best for early-stage teams or single-project surges. Standups, sprint planning, weekly stakeholder report, and async backlog grooming.",
    includes:
      "Dedicated PM, weekly sync with you, written updates, Linear or Jira ownership, monthly retrospective.",
  },
  {
    name: "Fractional 30 hrs/week",
    hours: "30 hours per week",
    best: "Best for teams running multiple projects in parallel that need same-day coverage but cannot justify a full-time PM yet.",
    includes:
      "Dedicated PM, daily standup attendance, full roadmap ownership, hiring-loop coordination, incident postmortem facilitation.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams with multiple engineering pods, hiring growth, and continuous launches that need a single accountable owner.",
    includes:
      "Dedicated PM, embedded in your team, OKR cascading, vendor liaison, exec-ready reporting, PTO backup coverage.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your team context",
    description:
      "Team size, current tooling, project shape, and how many hours a week of PM coverage you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for shipping track record, tooling fluency, engineering literacy, and async communication. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview the shortlist",
    description:
      "Talk to candidates directly. Walk through your roadmap or current chaos and see how they think.",
  },
  {
    step: "04",
    title: "Start with a paid trial week",
    description:
      "Real coordination work on your actual project. If the PM is the right fit, the engagement continues. If not, we rematch.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What is a fractional project manager and how is it different from a full-time hire?",
    answer:
      "A fractional project manager is a senior PM who works for your team part-time, typically 20 to 30 hours a week, on a defined ongoing engagement. The seniority is the same as a full-time hire; the time commitment and the cost are scaled down. It is the right model when you need senior-level coordination but cannot yet justify a full-time PM. Most teams start fractional and convert to full-time when project volume grows past what part-time hours can carry.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is this what people mean when they say 'rent a project manager'?",
    answer:
      "Yes. The phrase 'rent a project manager' shows up in search queries from teams looking for exactly this model: senior PM coverage that you can start in days, scale up or down monthly, and end cleanly without a recruitment cycle or severance. We use the term fractional because it more accurately describes the engagement (you are not renting the person, you are buying a defined fraction of their time on a B2B services contract). The shape is the same.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does a fractional project manager cost in 2026?",
    answer:
      "A fractional project manager from India typically costs USD 3,500 to 5,500 per month at 20 hours per week and USD 5,000 to 7,500 at 30 hours per week, all-in. Full-time runs USD 6,500 to 10,000 per month for senior PMs and USD 9,000 to 12,500 for tech leads who run multiple pods. For comparison, a US senior PM fully loaded costs USD 180,000 to 250,000 a year.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Will the PM work in my existing tools or bring their own?",
    answer:
      "Your tools, every time. We do not impose a tooling religion. If you run on Linear, our PM works in Linear. Jira, the PM works in Jira. Notion, Asana, ClickUp, the same. The expectation is that the PM adapts to your conventions, ticket shape, and review process, not the other way around.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can a fractional PM run hiring loops, OKRs, and quarterly planning?",
    answer:
      "Yes. At 30 hours a week or full-time, all three are part of the standard scope. Hiring loop coordination includes JD review, panel orchestration, and offer logistics. OKR cascading turns abstract goals into testable initiatives at the team level. Quarterly planning includes pre-work, the planning meeting itself, and the follow-up that converts discussion into committed work.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How does timezone work for a fractional PM based in India?",
    answer:
      "We match the PM's working hours to your sync needs. For US Eastern customers, the PM typically covers 8 AM to 12 PM ET (5:30 PM to 9:30 PM IST) for live syncs and runs the rest async. For US Pacific, we shift the PM's day later. For UK, EU, and Australia, the natural India working day already overlaps cleanly. Async-first writing discipline means most coordination happens outside the live overlap anyway.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I scale the fractional engagement up or down month to month?",
    answer:
      "Yes, with one month notice in either direction. Start at 20 hours, move to 30, move to full-time, or scale back down if a project ends. The B2B contract is structured so you are not locked in on a specific hours commitment beyond the next month.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can you place a fractional project manager?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For surge engagements (a launch, a migration, a board deadline), we can often start within 3 to 5 days because we maintain a pre-screened PM bench specifically for short-notice work.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteMetadata.url },
  { name: "Hire", url: `${siteMetadata.url}/hire/` },
  {
    name: "Fractional Project Manager",
    url: `${siteMetadata.url}/hire/fractional-project-manager/`,
  },
]);

const faqSchema = generateFAQPageSchema(faqItems);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire a Fractional Project Manager from India",
  description:
    "Hire a fractional or on-demand project manager from India. Senior-level roadmap, sprint, and stakeholder coordination at part-time cost. The model people mean when they search 'rent a project manager.' SethAI-screened for ownership and communication.",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
  },
  serviceType: "Staff Augmentation",
  areaServed: "Worldwide",
  url: `${siteMetadata.url}/hire/fractional-project-manager/`,
};

export default function HireFractionalProjectManagerPage() {
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
            HIRE FRACTIONAL PROJECT MANAGER
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire a Fractional Project Manager from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Senior-level roadmap, sprint, and stakeholder coordination at
            part-time cost. The on-demand model people mean when they search
            for &quot;rent a project manager.&quot; Pre-vetted by SethAI for
            ownership and communication.
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

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why fractional project management is the most under-bought role in
            2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Most early-stage teams refuse to hire a project manager because
              they see PMs as overhead. Then the founder spends 15 hours a
              week running standups, chasing blockers, and writing weekly
              updates instead of doing the work only the founder can do. The
              maths is ugly: a fractional PM at 20 hours a week costs less
              than that founder time, and the project ships faster because
              the coordination layer is owned by someone whose only job is
              to own it.
            </p>
            <p>
              The same maths repeats one stage up. A team with a single
              full-time PM hits a launch surge or a migration project and
              the PM ends up 60 hours a week. A 90-day fractional PM takes
              the surge work; the full-time PM stays at sustainable hours;
              the project lands on time. This is the engagement people
              search for when they type &quot;rent a project manager&quot;
              into Google.
            </p>
            <p>
              Every PM we place is screened by SethAI for shipping track
              record, tooling fluency, engineering literacy, and async
              communication. The shortlist is filtered on what they have
              actually delivered, not on certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire fractional project managers from Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a fractional project manager actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire a
            fractional PM through Workforce Next, here is the work they take
            ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to hire */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Do you actually need a project manager yet?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every team is ready for a PM hire. Here is how we help
            customers decide before they spend on the wrong shape.
          </p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div
                key={item.scenario}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                  {item.scenario}
                </h3>
                <p className="text-sm font-bold text-primary-500 mb-3">
                  {item.recommendation}
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-800 dark:text-dark-100 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div
                key={item.signal}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.signal}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our project managers. Most customers
            start fractional and scale up as project volume grows. Switching
            models requires one month of notice in either direction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col"
              >
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">
                  {model.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary-500">
                  {model.hours}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {model.best}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">
                  {model.includes}
                </p>
              </div>
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
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring a fractional project manager
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.answer}
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
            Ready to get the coordination layer off your plate?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your team shape and the hours of PM coverage you need.
            We will match you with a fractional project manager within 48
            hours and start the paid trial week as soon as you sign.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
