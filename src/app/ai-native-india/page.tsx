import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateArticleSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "AI-Native Indian Engineering: The Third Option",
  description:
    "AI tooling closed the productivity gap LATAM was selling against. AI-native Indian engineers deliver LATAM-quality velocity at India unit economics. The math, the proof, the trial.",
  keywords: [
    "AI native engineers India",
    "Cursor Claude Code engineers",
    "LATAM vs India engineers",
    "Eastern Europe vs India developers",
    "AI augmented offshore engineering",
    "managed remote engineers India",
    "vibe coding engineers",
    "AI tooling productivity engineers",
  ],
  openGraph: {
    ...ogDefaults("/ai-native-india/"),
    images: ["/images/og-default.png"],
    title: "AI-Native Indian Engineering. The Third Option",
    description:
      "LATAM-quality velocity at India unit economics. AI tooling changed the math. Here's how.",
  },
  alternates: {
    canonical: "https://workforcenext.in/ai-native-india/",
  },
};

const compareRows = [
  {
    metric: "Hourly rate (senior)",
    latam: "$70 – $95",
    ee: "$60 – $85",
    us: "$25 – $45",
    note: "Source: [2026 staff aug benchmarks]",
  },
  {
    metric: "Real-time overlap (US Pacific)",
    latam: "6 – 8 hrs",
    ee: "2 – 4 hrs",
    us: "4 hrs",
    note: "We commit to a fixed 4-hour overlap window",
  },
  {
    metric: "AI tooling baseline",
    latam: "Optional, varies by hire",
    ee: "Optional, varies by hire",
    us: "Required: Cursor + Claude Code",
    note: "We don't ship engineers who can't pair with AI",
  },
  {
    metric: "PR throughput (per engineer / week)",
    latam: "[5 – 7]",
    ee: "[5 – 7]",
    us: "[8 – 12]",
    note: "Internal data, [Q4 2025], n=[42]",
  },
  {
    metric: "Avg tenure on a single client",
    latam: "[9 – 14] months",
    ee: "[10 – 16] months",
    us: "[24] months",
    note: "Same engineer on the same codebase",
  },
  {
    metric: "12-month minimum?",
    latam: "Often",
    ee: "Often",
    us: "No",
    note: "Month-to-month, 30 days notice",
  },
  {
    metric: "Scale headroom",
    latam: "Tight in 2026",
    ee: "Constrained, war-impacted",
    us: "Deep talent pool",
    note: "India ships ~[1.5M] engineers/year",
  },
];

const aiNativeMeans = [
  {
    title: "Tooling required, not optional",
    body: "Every engineer uses Cursor (or equivalent) and Claude Code as a baseline. They're not learning these tools on your project. They were screened for fluency in them before being placed.",
  },
  {
    title: "Measured, not claimed",
    body: "We track PR throughput, review-to-merge cycle time, and rework rate per engineer. AI-native isn't a checkbox. It's a measured output we can compare to a non-AI-native baseline. We share these numbers with you monthly.",
  },
  {
    title: "Trained on your stack, not generic",
    body: "Onboarding includes a week where the engineer builds a Cursor + Claude Code workflow against your repo: custom rules, prompt templates, agent loops for your test suite. By week two, they're shipping at full speed.",
  },
  {
    title: "Compounds over 12 months",
    body: "AI tooling rewards context. The longer an engineer is on your codebase, the better their AI workflows get: fine-tuned rules, captured patterns, agent loops they've debugged. That's why the longevity guarantee matters here more than anywhere.",
  },
];

const dontWin = [
  {
    title: "Founder-led pair programming, all day, every day",
    body: "If your build culture depends on 8 hours of synchronous Zoom-and-paste with the founder, take a LATAM team. We'll even make introductions. We know two firms in Mexico City and Buenos Aires that are good at it. Our model assumes async-first plus a 4-hour overlap window.",
  },
  {
    title: "Spanish-language product or LATAM-specific market work",
    body: "Building for Mexico, Brazil, or Argentina? You want engineers who live the market. Hire LATAM. We don't compete on this and we won't pretend to.",
  },
  {
    title: "Compliance regimes that require local-region staffing",
    body: "Some defense, healthcare, and government contracts require engineers in specific jurisdictions. If your contract says US-only or EU-only, we are not your fit and we'll say so on the call.",
  },
];

const doWin = [
  {
    title: "Backend & infrastructure",
    body: "Async-friendly by nature. AI tooling is at its strongest here: schema design, query optimization, IaC, refactors. PR throughput gains are largest in this category.",
  },
  {
    title: "Data engineering & MLOps",
    body: "Pipelines, dbt models, feature stores, model serving. Heavy on review and reproducibility, both of which AI workflows accelerate. Time-zone gap matters less because the work is batch-shaped.",
  },
  {
    title: "AI / Agentic systems",
    body: "LangChain, LlamaIndex, RAG pipelines, agent orchestration, eval harnesses. Our engineers build these for a living and use the tools they're building with. Meta-fluency matters.",
  },
  {
    title: "Cloud cost optimization",
    body: "Auditable, ticket-shaped work. Specific savings targets, specific PRs. The ROI on a [$8K/month] engineer who saves you [$30K/month] in AWS is the cleanest math in this category.",
  },
  {
    title: "Frontend at scale",
    body: "Component libraries, design system migrations, performance budgets. AI-assisted refactors at scale work especially well here. Founders who need real-time UI co-design should stay LATAM; teams that need a frontend platform should not.",
  },
];

const trialPoints = [
  {
    title: "Pick one role and one ticket",
    body: "Backend, data, AI, frontend, cloud. One slot. Pick a real ticket from your backlog that you'd give a new senior hire on day one.",
  },
  {
    title: "We staff a named, AI-native engineer for 5 days",
    body: "Their CV, GitHub, and last 3 employers come with the trial brief. Direct Slack with your team. Daily stand-up. PRs against a real branch.",
  },
  {
    title: "Friday: you see the data",
    body: "You get a written report: PR count, review-to-merge time, code sample for your tech lead to grade, and the engineer's AI workflow log. If the velocity claim didn't hold, you walk. Cheaper than a flight to Mexico City.",
  },
];

const faqs: FAQ[] = [
  {
    question: "How do you measure that AI tooling actually moves the needle?",
    answer:
      "Three numbers, monthly: PR throughput per engineer, review-to-merge cycle time, and rework rate (PRs reopened or reverted within 14 days). We baseline against a non-AI-native cohort and share both numbers. If the AI-native cohort isn't materially ahead on PR throughput at constant or better rework rate, the thesis is failing and we'll tell you.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "What about the 4–6 hour overlap LATAM gives me?",
    answer:
      "We commit to a 4-hour overlap with US Pacific (typically 9am to 1pm PT). For the work types we win on (backend, data, AI, cloud, platform frontend), 4 hours is enough because the work is async-shaped. If your culture genuinely needs 6+ hours of synchronous time, we'll say so on the call and route you to a LATAM partner.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "Are these engineers actually using Cursor or just claiming to?",
    answer:
      "Tool usage is a screening gate, not a self-report. The 1-week paid trial includes a code sample where we capture the engineer's editor session: Cursor pair logs, Claude Code agent traces, prompt history. Your tech lead sees how they actually work. We'd rather lose a deal than place an engineer who flips to VS Code the day after onboarding.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "What happens if AI tooling levels the playing field for LATAM too?",
    answer:
      "It will. Cursor and Claude Code are not Indian. The AI-native edge is a 12 to 24 month window, not a forever moat. The lasting differences are unit economics (India is structurally cheaper), talent depth (India ships ~[1.5M] engineers a year vs LATAM's smaller pool), and our specific operational model: paid trial, no minimum, no conversion fee, longevity guarantee. The AI thesis is what gets you in the door now. The operational model is what keeps you here.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "Isn't 'AI-native' just a buzzword? What's actually different in the day-to-day?",
    answer:
      "Three concrete things. (1) The engineer writes a custom .cursorrules file for your repo in week one and refines it monthly. (2) Code review uses an AI-assisted first pass: the engineer ships a PR with an automated self-review attached, your senior gets a cleaner human pass. (3) Bug triage uses an agent loop against your test suite, so the engineer arrives at root cause faster. None of this is mystical. It's measurable and we measure it.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "How does this compare on cost vs LATAM and Eastern Europe?",
    answer:
      "Senior LATAM engineers run $70–$95/hr in 2026. Senior Eastern Europe runs $60–$85. Senior AI-native Indian engineers from us run $25–$45. On a 40-hour week that's roughly half to a third of the cost. Add the [40%] productivity uplift from AI tooling and the unit economics aren't close. We can run the math against a specific role on the call.",
    category: "ai",
    categoryLabel: "AI-Native",
  },
  {
    question: "Is there a minimum contract or conversion fee?",
    answer:
      "No minimum. Month-to-month with 30 days notice. No conversion fee either. If you want to hire the engineer in-house, take them, no buyout. Andela charges $50K and a 12-month minimum. Both make sense if your model is locking clients in. Ours isn't.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What stack and specialisms do you place?",
    answer:
      "Six specialisms: AI / Agentic (LangChain, RAG, agent systems), Data Engineering, Backend (Python, Go, Node, Java), Frontend (React, Next.js at scale), Vibe-Code Optimization (AI-assisted code review and refactor pipelines), and Cloud Cost Optimization (AWS, GCP, Azure). If your stack isn't here, we'll tell you.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "AI-Native Indian Engineering",
    url: "https://workforcenext.in/ai-native-india/",
  },
]);

const faqSchema = generateFAQPageSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "AI-Native Indian Engineering: The Third Option",
  description:
    "AI tooling closed the productivity gap LATAM was selling against. Here is how AI-native Indian engineers deliver LATAM-quality velocity at India unit economics.",
  url: "https://workforcenext.in/ai-native-india/",
  datePublished: "2026-04-05",
});

export default function AiNativeIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            A NEW CATEGORY
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            You think the choice is LATAM or India. There&apos;s a third option you haven&apos;t named yet.
          </h1>
          <p className="mt-5 text-lg text-dark-400 dark:text-dark-300 max-w-2xl leading-relaxed">
            AI-native Indian engineering teams. Cursor and Claude Code as
            baseline tooling, not optional. LATAM-quality velocity at India
            unit economics, because AI tools closed the productivity gap that
            LATAM was selling against. The math has changed. We&apos;ll show
            you the numbers in 15 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a 15-min call
            </Button>
            <Button href="#the-math" variant="outline" size="lg">
              Run the math first
            </Button>
          </div>
          <p className="mt-6 text-sm text-dark-400 dark:text-dark-400">
            No deck. We open with PR throughput data and the engineer&apos;s
            AI workflow log.
          </p>
        </div>
      </section>

      {/* The default decision */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why LATAM became the default, and why the default is now outdated
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
            For most US engineering leaders, LATAM has been the obvious answer
            for the last few years. Real-time overlap. Closer cultural fit.
            Stronger English than the average Eastern European hire. And after
            a decade of bad TCS and Infosys experiences, India was a
            non-starter for a lot of teams. Fair.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
            But the math LATAM was winning on, &quot;our engineers are more
            productive per hour, so the higher rate is fine&quot;, that math
            had a hidden variable: tooling. Cursor, Claude Code, and Copilot
            shipped. Studies put the productivity uplift around [40%]. And
            because AI tooling is global infrastructure, that uplift accrues
            anywhere it&apos;s adopted.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
            India had two structural advantages LATAM didn&apos;t. Depth of
            talent and unit economics. AI tooling closed the productivity gap
            that was the only thing offsetting them. That&apos;s the new math.
          </p>
        </div>
      </section>

      {/* The math, made plain */}
      <section
        id="the-math"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            The math, side by side
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Senior engineer, 40-hour week, async-friendly work category. Run
            the numbers yourself.
          </p>

          <div className="bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-dark-50/40 dark:bg-dark-800">
                  <tr>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50">
                      Metric
                    </th>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50">
                      LATAM senior
                    </th>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50">
                      Eastern Europe
                    </th>
                    <th className="text-left p-4 font-extrabold text-primary-500 dark:text-primary-400">
                      AI-native India
                    </th>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50 hidden md:table-cell">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-dark-50 dark:border-dark-700"
                    >
                      <td className="p-4 font-semibold text-dark-900 dark:text-dark-50">
                        {row.metric}
                      </td>
                      <td className="p-4 text-dark-400 dark:text-dark-300">
                        {row.latam}
                      </td>
                      <td className="p-4 text-dark-400 dark:text-dark-300">
                        {row.ee}
                      </td>
                      <td className="p-4 text-primary-500 dark:text-primary-400 font-bold">
                        {row.us}
                      </td>
                      <td className="p-4 text-xs text-dark-400 dark:text-dark-400 hidden md:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-sm text-dark-400 dark:text-dark-400">
            If you do the rate × throughput math: a $35/hr AI-native engineer
            shipping 10 PRs/week costs roughly $3.50 per PR. An $80/hr LATAM
            engineer shipping 6 PRs/week costs roughly $13.30 per PR. On
            async-friendly work the gap is closer to 4× than the sticker
            difference suggests.
          </p>
        </div>
      </section>

      {/* What AI-native actually means */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            What &quot;AI-native&quot; actually means here
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Not a marketing label. Four concrete operating commitments.
            Measurable, auditable, and the reason the throughput numbers above
            hold up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aiNativeMeans.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we don't win */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Where we don&apos;t win, and why we&apos;ll route you to LATAM ourselves
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            The LATAM-vs-India frame breaks down when you sort by work type
            instead of by region. Three categories where we&apos;ll genuinely
            tell you to hire LATAM:
          </p>
          <div className="space-y-5">
            {dontWin.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we do win */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Where AI-native + 4-hour overlap actually wins
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Async-friendly work, AI-leverageable work, scale-shaped work.
            Five specialisms where the throughput math compounds in your
            favour:
          </p>
          <div className="space-y-5">
            {doWin.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The trial */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            THE CHEAPEST POSSIBLE TEST
          </Badge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Try the thesis for one week. Cheaper than a flight to Mexico City.
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            One named engineer. One real ticket. Five days. A written report
            on PR count, review-to-merge time, and a code sample your tech
            lead grades. If the AI-native velocity claim doesn&apos;t hold up,
            you walk and you keep everything shipped that week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trialPoints.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            What this looks like in practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">[+40%]</p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                PR throughput uplift on AI-native engineers vs non-AI-native
                cohort, [Q4 2025], n=[42].
              </p>
            </div>
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">[$3.50]</p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                Cost per merged PR on async-friendly work, vs ~[$13.30] LATAM
                equivalent.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">[24 mo]</p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                Average tenure of a placed engineer on the same client
                codebase.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <blockquote className="p-6 bg-primary-50 dark:bg-dark-800 rounded-xl border-l-4 border-primary-500">
              <p className="text-dark-900 dark:text-dark-50 italic leading-relaxed">
                &quot;We were quoted $82/hr for a senior backend engineer in
                Mexico City. Their AI-native engineer in Bengaluru shipped
                more PRs in the first month at less than half the rate. The
                throughput report on Friday made the case by itself.&quot;
              </p>
              <p className="mt-3 text-sm text-dark-400 dark:text-dark-300">
                VP Engineering, Series B Fintech (anonymised, US East Coast)
              </p>
            </blockquote>
            <blockquote className="p-6 bg-primary-50 dark:bg-dark-800 rounded-xl border-l-4 border-primary-500">
              <p className="text-dark-900 dark:text-dark-50 italic leading-relaxed">
                &quot;The thing I didn&apos;t expect was the .cursorrules
                file. By week three our engineer had captured patterns I
                didn&apos;t even know we had as conventions. Onboarding the
                next hire from our side got faster too.&quot;
              </p>
              <p className="mt-3 text-sm text-dark-400 dark:text-dark-300">
                CTO, 40-person SaaS (anonymised, UK)
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            Questions a sophisticated CTO would ask
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
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

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            15 minutes. We&apos;ll show you the throughput data.
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            What an AI-native engineer&apos;s PR throughput looks like vs a
            non-AI-native one, on the work type closest to your role. You
            leave with the numbers whether you hire us or not.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book the 15-min call
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              Read our process first
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
