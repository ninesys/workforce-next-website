import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateArticleSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Not Another Indian Body Shop - Managed Remote Engineers",
  description:
    "If TCS, Infosys, or a tier-2 vendor wasted six months of your roadmap, this page is for you. Dedicated engineers, 1-week trial, no account-manager buffer.",
  keywords: [
    "alternative to TCS Infosys Wipro",
    "burned by Indian outsourcing",
    "managed remote engineers India",
    "dedicated developers India",
    "Indian outsourcing alternative",
    "no body shop staff augmentation",
    "Andela alternative",
    "no conversion fee staff augmentation",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Not Another Indian Body Shop",
    description:
      "For VPs of Engineering who've been burned by TCS, Infosys, or a tier-2 vendor. Here's how we're different, point by point.",
  },
  alternates: {
    canonical: "https://workforcenext.in/not-another-body-shop/",
  },
};

const oldModelFails = [
  {
    title: "The pyramid",
    body: "Big shops sell you a senior architect on the pitch deck and staff the build with a pyramid of juniors. The senior is on six accounts. The juniors learn on your codebase.",
  },
  {
    title: "T&M billing",
    body: "Time-and-materials means slower work pays more. The vendor has no reason to ship faster. You have every reason to suspect they're not.",
  },
  {
    title: "No skin in the game",
    body: "If a developer underperforms, the vendor swaps them out. The cost of the swap (re-onboarding, lost context, missed sprints) sits with you, not them.",
  },
  {
    title: "Account managers as buffers",
    body: "You don't talk to the engineer. You talk to a delivery manager who summarises what the engineer said. Three layers of telephone between you and the code.",
  },
  {
    title: "Quiet subcontracting",
    body: "Your work gets handed to a smaller shop the original vendor doesn't tell you about. You signed with one company. You're really working with three.",
  },
];

const complaintMap = [
  {
    complaint: "Engineers say yes to scope they can't hit, then blame you when it slips.",
    answer:
      "Every engineer goes through a 1-week paid trial on real work before the engagement starts. If they can't push back on scope, ask clarifying questions, and surface risk early, the trial fails. We don't place yes-people. The first thing your trial engineer is asked to do is read your spec and tell you what's missing.",
  },
  {
    complaint: "Bait-and-switch. The pitch shows seniors, the build is staffed with juniors.",
    answer:
      "The engineer you interview is the engineer you get. We name them. We send their GitHub, their last 3 employers, their LinkedIn. There is no bench, no pool, no rotation. If the named engineer is unavailable, the engagement doesn't start.",
  },
  {
    complaint: "Code that requires a second team to fix what the first team shipped.",
    answer:
      "Every PR is reviewed by a senior on our side before it touches your main branch. That review is part of the cost, not an upsell. Trial week includes a code sample your team grades. If your team wouldn't merge it, we don't place the engineer.",
  },
  {
    complaint: "Patch fixes instead of root-cause debugging.",
    answer:
      "We screen for this in the trial. The trial brief includes a real bug from a real codebase and we ask candidates to write a postmortem, not just a fix. If the postmortem reads like a band-aid, they don't pass.",
  },
  {
    complaint: "Documentation aversion. Same questions asked twice, context never captured.",
    answer:
      "Every engagement comes with three living documents: a codebase walkthrough, a domain glossary, and an architecture decision log. We maintain them. You never re-explain why a service exists. If your engineer leaves, the next person reads the docs and ships in days, not months.",
  },
  {
    complaint: "Account-manager buffering. You can't talk to the developer directly.",
    answer:
      "You get the engineer's Slack, email, and calendar on day one. You DM them, you stand-up with them, you do code review with them. We do not insert a delivery manager. Your only contact with us is a monthly engineering advisory call, which you can skip.",
  },
  {
    complaint: "Subcontracting. Your work quietly handed off to a smaller shop.",
    answer:
      "Every engineer is a full-time WorkforceNext employee in our Gurugram HQ. We do not subcontract. We name it in the contract. If we ever needed to, we'd ask you first, in writing.",
  },
];

const trialSteps = [
  {
    n: "1",
    title: "We scope a real piece of work",
    body: "Not a take-home test. A genuine ticket from your backlog: a feature, a refactor, a hard bug. Your team writes the brief. We agree on definition of done.",
  },
  {
    n: "2",
    title: "The named engineer ships it in 5 working days",
    body: "Direct Slack with your team. Daily stand-up. PRs against a real branch. You see exactly how they work, write, communicate, and push back.",
  },
  {
    n: "3",
    title: "Friday: you decide",
    body: "If it's a fit, the engagement starts Monday. If it's not, you walk. You keep the code, the PRs, the docs, and the postmortem we wrote on the trial itself.",
  },
];

const notForYou = [
  {
    title: "You need real-time pair programming with founders, all day",
    body: "Our team works a 4-hour overlap with US Pacific. Deep collaboration happens in writing, async. If you need someone in your office hours every minute, hire a LATAM-based firm. They're better suited for it.",
  },
  {
    title: "You need 50 contractors for a one-quarter sprint",
    body: "We don't do staff augmentation by the dozen. We place 1 to 8 dedicated engineers per client, and we screen for engineers who want to stay 18+ months. If you need a body-shop scale-up for a short sprint, the big firms are built for it. We're not.",
  },
  {
    title: "You want to manage developers like contractors",
    body: "Our engineers are employees. They take ownership, push back on bad ideas, and write postmortems. If you want someone who silently grinds through tickets without questioning anything, our model will frustrate you.",
  },
];

const faqs: FAQ[] = [
  {
    question: "How do I know your engineers won't say yes to everything?",
    answer:
      "The 1-week paid trial is built around this exact problem. Day 1 of the trial, the engineer is given your spec and asked to surface gaps in writing. If they don't push back, they don't pass. We've turned down candidates who looked great on paper because they couldn't say 'this requirement contradicts that one'.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What happens if the engineer leaves after six months?",
    answer:
      "Three things. First, our retention is well above industry. Engineers stay because we don't rotate them and we pay them well. Second, the codebase walkthrough, domain glossary, and ADR are already written, so a replacement is productive in days. Third, replacement costs zero. We eat the rematch.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I talk to the engineer directly without going through an account manager?",
    answer:
      "Yes. There is no account manager. You get Slack, email, and calendar. We add ourselves to a monthly check-in that you can decline. Communication overhead is the single biggest reason offshore fails, and we don't add to it.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you subcontract any of the work?",
    answer:
      "No. Every engineer is a full-time WorkforceNext employee at our Gurugram HQ. The contract names this. If a future engagement ever required a partner, we'd write you first.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Why do you charge for the trial when other firms offer it free?",
    answer:
      "Free trials attract clients who aren't serious and engineers who treat it as practice. Charging means you've committed enough to pick a real ticket, and our engineer treats the week as a real engagement. It also means we're not running 30 free trials a quarter and starving paying clients of attention. The trial fee is small, usually one week of the eventual rate.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What if I want to hire the engineer in-house after six months?",
    answer:
      "Take them. No conversion fee, no buyout. Andela charges $50K. We charge zero. The reason: an engineer who wants to be a full-time employee of yours will be miserable as a managed contractor. Forcing them stays good for one quarter, then ruins the relationship.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "No. Andela makes you sign a 12-month minimum. We don't. The trial is one week. After that, it's month-to-month with 30 days notice. We've found that no minimum keeps us honest. We have to keep earning the engagement every month.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How is this different from Toptal, Andela, Turing, or DistantJob?",
    answer:
      "Toptal and Turing are marketplaces. You're hiring a freelancer who likely has 2 other clients. Andela has the model closest to ours but with a 12-month lock-in and a $50K conversion fee. DistantJob places people for you but doesn't manage the engagement after. We're a managed model with no lock-in, no conversion fee, no marketplace, and we keep the engineer with you long-term. Same person on your codebase for years.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "Not Another Body Shop",
    url: "https://workforcenext.in/not-another-body-shop/",
  },
]);

const faqSchema = generateFAQPageSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "Not Another Indian Body Shop",
  description:
    "Why managed remote engineers from Workforce Next are different from the TCS, Infosys, and tier-2 vendor experience VPs of Engineering have been burned by.",
  url: "https://workforcenext.in/not-another-body-shop/",
  datePublished: "2026-03-20",
});

export default function NotAnotherBodyShopPage() {
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
            FOR VPs OF ENGINEERING
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Last time you tried Indian engineers, it cost you six months of roadmap.
          </h1>
          <p className="mt-5 text-lg text-dark-400 dark:text-dark-300 max-w-2xl leading-relaxed">
            That wasn&apos;t a country problem. It was a model problem.
            Pyramids, T&amp;M billing, account-manager buffers, quiet
            subcontracting. We built WorkforceNext to fix the model, not the
            country. If you have 15 minutes, we&apos;ll show you how, point by
            point.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a 15-min call
            </Button>
            <Button href="#what-we-do-differently" variant="outline" size="lg">
              See the seven differences
            </Button>
          </div>
          <p className="mt-6 text-sm text-dark-400 dark:text-dark-400">
            No deck. No discovery calls stretched over three weeks. We open with
            the engineer&apos;s name and CV.
          </p>
        </div>
      </section>

      {/* You've probably tried this before */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            You&apos;ve probably done this dance before
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
            A glossy pitch deck. A senior architect on the kickoff call who
            disappears by week two. Three juniors you didn&apos;t interview now
            owning your auth service. Tickets closed with band-aid fixes. A
            delivery manager who keeps saying &quot;we&apos;ll align on
            that&quot; instead of getting you the engineer.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
            Six months later you have a Confluence page nobody updated, a
            codebase your in-house team is quietly rewriting, and a board
            slide you&apos;d rather not present.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
            If any of that is too specific, yeah. We&apos;ve heard it from
            every VP who reaches out to us.
          </p>
        </div>
      </section>

      {/* Why the old model fails */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Why the old model breaks, every time
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            None of this is bad luck. The big-shop model is structurally set up
            to produce these outcomes. Five reasons it keeps happening:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {oldModelFails.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do differently */}
      <section
        id="what-we-do-differently"
        className="section-padding bg-white dark:bg-dark-900"
      >
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Seven complaints, seven specific answers
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            No abstractions. Each complaint we hear, mapped to the exact
            mechanism on our side that prevents it.
          </p>
          <div className="space-y-5">
            {complaintMap.map((row, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-0 rounded-xl border border-dark-50 dark:border-dark-700 overflow-hidden"
              >
                <div className="p-6 bg-dark-50/40 dark:bg-dark-800 border-b md:border-b-0 md:border-r border-dark-50 dark:border-dark-700">
                  <p className="text-xs font-bold tracking-wide text-dark-400 dark:text-dark-400 uppercase mb-2">
                    The complaint
                  </p>
                  <p className="text-dark-900 dark:text-dark-50 font-semibold leading-relaxed">
                    {row.complaint}
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-dark-900">
                  <p className="text-xs font-bold tracking-wide text-primary-500 dark:text-primary-400 uppercase mb-2">
                    What we do
                  </p>
                  <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
                    {row.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 1-week paid trial */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            THE TRIAL
          </Badge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            One week. Paid. Real work. You can walk on Friday.
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4 max-w-3xl">
            Most firms that offer a free trial are running it as a sales motion.
            Free trials attract clients who aren&apos;t committed and engineers
            who treat the week as practice. Both sides phone it in.
          </p>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Charging a small fee, usually one week of the eventual rate,
            forces both sides to take it seriously. You pick a real ticket. We
            staff a real engineer. If it doesn&apos;t work, you keep everything
            shipped that week and we part as friends.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trialSteps.map((step) => (
              <div
                key={step.n}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-500 flex items-center justify-center font-extrabold mb-4">
                  {step.n}
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

          <div className="mt-10 p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700">
            <p className="text-sm font-bold tracking-wide text-primary-500 dark:text-primary-400 uppercase mb-3">
              What you keep if you walk away
            </p>
            <ul className="space-y-2 text-dark-400 dark:text-dark-300">
              <li>• The shipped work: code, PRs, tests.</li>
              <li>• The codebase walkthrough we wrote that week.</li>
              <li>• The domain glossary we drafted from your spec.</li>
              <li>
                • A written debrief on what we&apos;d do differently if you
                hired anyone else.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proof / specifics */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            What this looks like in practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">
                18 months
              </p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                Median tenure of a placed engineer on the same client
                codebase. Same person, no rotation.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">
                48 hours
              </p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                From brief to your first shortlist of named engineers with
                full CV, GitHub, and last three employers.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
              <p className="text-3xl font-extrabold text-primary-500">$0</p>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
                Conversion fee if you hire the engineer in-house. Andela
                charges around $50,000 for the same.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <blockquote className="p-6 bg-primary-50 dark:bg-dark-800 rounded-xl border-l-4 border-primary-500">
              <p className="text-dark-900 dark:text-dark-50 italic leading-relaxed">
                &quot;The trial week is what made the difference. We&apos;ve
                used three other firms before and never once interviewed the
                actual engineer doing the work. Here we hired the person we
                interviewed, and the same person is still on the codebase 14
                months later.&quot;
              </p>
              <p className="mt-3 text-sm text-dark-400 dark:text-dark-300">
                VP Engineering, Series B SaaS (anonymised, US East Coast)
              </p>
            </blockquote>
            <blockquote className="p-6 bg-primary-50 dark:bg-dark-800 rounded-xl border-l-4 border-primary-500">
              <p className="text-dark-900 dark:text-dark-50 italic leading-relaxed">
                &quot;Our previous vendor charged us for a senior, staffed two
                juniors. By the time we caught it, four months of velocity
                had gone. With WorkforceNext, the engineer&apos;s GitHub was
                in our hands before the first interview. That alone is the
                pitch.&quot;
              </p>
              <p className="mt-3 text-sm text-dark-400 dark:text-dark-300">
                CTO, 25-person Fintech (anonymised, London)
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What we are not for */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            We&apos;re not for everyone
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Three buyer profiles where we&apos;d rather tell you up front than
            sell you something that won&apos;t work:
          </p>
          <div className="space-y-5">
            {notForYou.map((item) => (
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

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            Questions a burned VP would actually ask
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
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
            15 minutes. We&apos;ll show you the trial scope.
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            You walk away with a written plan whether you hire us or not. The
            named engineer, the trial brief, and a one-pager on how we&apos;d
            run the first 90 days.
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
