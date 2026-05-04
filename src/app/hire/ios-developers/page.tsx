import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire iOS Application Developers from India (Swift, SwiftUI)",
  description:
    "Hire pre-vetted iOS application developers from India. Swift, SwiftUI, UIKit, Combine, Core Data, App Store delivery, and accessibility. SethAI-screened.",
  keywords: [
    "hire ios application developers",
    "hire ios developers India",
    "hire remote app developers",
    "swift developers India",
    "swiftui developers India",
    "iphone app developer for hire",
    "ios staff augmentation",
    "App Store app developer",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Hire iOS Application Developers from India",
    description:
      "Pre-vetted iOS engineers across Swift, SwiftUI, UIKit, and App Store delivery. SethAI-screened for technical depth and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/ios-developers/`,
  },
};

const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Combine",
  "Swift Concurrency",
  "Core Data",
  "Core Animation",
  "XCTest",
  "Xcode Cloud",
  "App Store Connect",
  "TestFlight",
  "Push Notifications",
  "In-App Purchases",
  "WidgetKit",
  "HealthKit",
  "ARKit",
];

const whyPoints = [
  {
    title: "Native iOS depth, not framework tourism",
    description:
      "Swift and SwiftUI are first-class. Our iOS engineers understand the lifecycle of a modern app from a cold launch to background refresh, not just how to wire a single screen in a tutorial.",
  },
  {
    title: "App Store delivery, not just builds",
    description:
      "Submitting to the App Store, surviving review, shipping phased rollouts, and reading App Store Connect crash logs are part of the job. We screen for engineers who have done it across multiple apps, not just on a portfolio project.",
  },
  {
    title: "Hooks into your backend and design teams",
    description:
      "iOS work is rarely solo. Our engineers collaborate cleanly with backend teams on API contracts and with designers on Figma handoffs, push back when a spec is ambiguous, and ship without endless ping-pong.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "iOS apps fail in subtle ways: a memory leak, a flaky background task, a permission prompt at the wrong time. SethAI evaluates the engineer's incident track record and ownership signals so the second release ships as cleanly as the first.",
  },
];

const responsibilities = [
  "Architecting iOS apps in Swift and SwiftUI with a clear separation of view, view model, and data layers",
  "Migrating UIKit screens to SwiftUI incrementally where the value justifies the work, and knowing when to leave UIKit alone",
  "Designing concurrency patterns with async/await and Swift Concurrency, including actor isolation for shared state",
  "Building offline-first apps with Core Data, SwiftData, or a custom local store plus a thoughtful sync layer",
  "Wiring REST and GraphQL APIs with proper auth refresh, retry policies, and structured error handling",
  "Managing push notifications, deep links, and universal links so the app routes the user to the right screen every time",
  "Implementing in-app purchases and StoreKit 2 with receipt validation and proper restore handling",
  "Hardening accessibility: VoiceOver, Dynamic Type, Reduced Motion, and color contrast that survives the actual review",
  "Setting up CI/CD with Xcode Cloud, Fastlane, or Bitrise, plus TestFlight pipelines for staged rollouts",
  "Owning App Store submission, review responses, phased rollouts, and crash triage post-release",
];

const whenToHire = [
  {
    scenario: "You are launching your first iPhone app",
    recommendation: "Hire a senior iOS application developer",
    reason:
      "First releases set the architectural patterns the next two years of work will live with. A senior iOS engineer ships a clean foundation, sets up CI, handles the App Store submission, and leaves your team with a codebase the next developer can extend.",
  },
  {
    scenario: "You have an existing iOS app and feature velocity has stalled",
    recommendation: "Hire a senior iOS engineer plus a refactor mandate",
    reason:
      "Stalled velocity is usually architecture debt. A senior engineer profiles the bottlenecks, untangles tight coupling, and migrates the right parts to SwiftUI without freezing the roadmap.",
  },
  {
    scenario: "You want a single codebase for iOS and Android",
    recommendation: "Consider a React Native or Flutter engineer instead",
    reason:
      "If your team is small and the product is non-trivial cross-platform UI without deep platform features, cross-platform tooling can ship faster. We staff React Native and Flutter engineers separately. If your app needs deep iOS integration (HealthKit, ARKit, advanced widgets), native iOS still wins.",
  },
  {
    scenario: "You are scaling an iOS team past three engineers",
    recommendation: "Hire a tech lead with shipped scaling experience",
    reason:
      "iOS teams scale through modularization, code ownership boundaries, and a dependency-injection story that survives. A tech lead who has done this before saves quarters of pain. We staff senior iOS leads who have run teams of five to fifteen engineers.",
  },
];

const screeningSignals = [
  {
    signal: "Real Swift Concurrency fluency",
    detail:
      "We ask candidates to explain when @MainActor matters, what an actor solves that a queue does not, and where async/await leaks data races anyway. Strong candidates have shipped real concurrent code. Weak ones quote the WWDC talk.",
  },
  {
    signal: "SwiftUI plus UIKit pragmatism",
    detail:
      "We give candidates a screen and ask whether they would build it in SwiftUI, UIKit, or a hybrid. Strong answers show production taste: SwiftUI where the speed pays off, UIKit where SwiftUI still does not earn its weight.",
  },
  {
    signal: "Memory and leak awareness",
    detail:
      "We ask candidates to walk through a retain cycle they hit and fixed. Strong candidates explain weak/unowned, capture lists, and Instruments. Weak ones reach for force-unwrap and hope.",
  },
  {
    signal: "App Store and review experience",
    detail:
      "We screen for engineers who have shipped multiple apps through App Store review, including the rejection that happens when the privacy disclosure does not match the actual data flow. Production scars beat clean portfolio links.",
  },
  {
    signal: "Accessibility as a habit",
    detail:
      "We test whether candidates think about VoiceOver and Dynamic Type by default. Apps that ignore these get rejected by review and lose users on the open web. Strong iOS engineers build accessible by default.",
  },
  {
    signal: "Cross-team communication",
    detail:
      "iOS work touches backend contracts, design systems, and product. We screen for engineers who write clear PRs, push back constructively on ambiguous specs, and unblock themselves without daily handholding.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams maintaining a small iOS app or building one alongside a stronger Android effort.",
    includes:
      "Dedicated iOS engineer, weekly sync, App Store review support, code review for in-house contributors.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously to the App Store and needing an embedded iOS owner.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, App Store and TestFlight ownership.",
  },
  {
    name: "iOS pod",
    hours: "2 to 4 engineers",
    best: "Best for new iOS apps, large rewrites, or feature factories that need a self-contained squad.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, CI/CD setup, coordinated App Store releases.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your iOS context",
    description:
      "Tell us about the app, the existing codebase if any, and whether you need full-time, fractional, or a pod.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for Swift and SwiftUI depth, App Store delivery experience, and accessibility habits. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview the shortlist",
    description:
      "Talk to candidates directly. Walk through your existing app or design specs and see how they think.",
  },
  {
    step: "04",
    title: "Start with a paid trial week",
    description:
      "Real work on your actual app. If the engineer is the right fit, the engagement continues. If not, we rematch.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire iOS application developers in India?",
    answer:
      "Mid-level iOS developers in India typically cost between 4,000 and 6,500 USD per month all-in. Senior iOS engineers with shipped App Store apps and SwiftUI plus UIKit depth range from 6,500 to 9,500 USD per month. Tech leads who have run iOS teams cost 9,000 to 12,500 USD per month. Pricing at Workforce Next includes an engineering manager and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should I hire a native iOS developer or use React Native or Flutter?",
    answer:
      "Native iOS wins when the app uses deep platform features (HealthKit, ARKit, advanced widgets, complex animations, Apple Watch, App Clips), when long-term performance matters, and when the team will likely staff Android separately. Cross-platform wins when the app is primarily UI plus REST APIs, the team is small, and time to market matters more than platform polish. We staff both; tell us your shape and we will recommend honestly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your iOS developers ship to the App Store and handle review responses?",
    answer:
      "Yes. App Store delivery is part of the job for every iOS engineer we place. They handle binary uploads through Xcode Cloud or Fastlane, manage TestFlight rollouts, write privacy disclosures that match the actual data flow, respond to App Store review questions, and run staged rollouts with crash monitoring. The expectation is shipped, not just built.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your iOS developers integrate with our backend team in a different timezone?",
    answer:
      "Yes. India-based iOS developers typically overlap with US Eastern by four to five hours and with US Pacific by two to three. For US Pacific customers we arrange shifted schedules. The engineers are comfortable defining and reviewing API contracts asynchronously, working from clear handoffs, and flagging blockers before they become urgent.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your iOS developers handle accessibility and App Store review?",
    answer:
      "Yes. VoiceOver, Dynamic Type, Reduced Motion, and color contrast are habits we screen for. Apps that ignore accessibility lose users and increasingly fail App Store review on regulated categories. Our senior iOS engineers ship accessibility by default and treat it as a release blocker, not a backlog ticket.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can you place an iOS developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For pod engagements (multiple engineers) the timeline is similar because we maintain a pre-screened iOS bench. Most delays come from interview scheduling on the customer side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireIosDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire iOS Application Developers from India",
    "Hire pre-vetted iOS application developers from India. Swift, SwiftUI, UIKit, Combine, Core Data, App Store delivery. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/ios-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "iOS Developers",
      url: `${siteMetadata.url}/hire/ios-developers/`,
    },
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
            HIRE IOS APPLICATION DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire iOS Application Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted iOS engineers across Swift, SwiftUI, UIKit, and the
            full App Store delivery surface. Screened by SethAI for technical
            depth, App Store track record, and long-term fit.
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
            What separates a real iOS developer from a portfolio-only one
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Almost any developer can ship a single screen on the App Store.
              The gap between that and a developer who can take an app from
              cold launch to a hundred thousand users, through five App Store
              reviews and three iOS releases, is enormous. Hiring the wrong
              iOS engineer is how teams end up with apps that work in
              TestFlight and crash on a thousand real devices.
            </p>
            <p>
              A real iOS application developer thinks in lifecycle, memory,
              and review. They know why a backgrounded app behaves
              differently from a foreground one, why a strong reference cycle
              breaks after a week of use, and why an App Store review will
              reject a privacy disclosure that does not match the actual data
              flow. They have shipped multiple apps, been on call for
              production crashes, and survived an iOS major version update.
            </p>
            <p>
              Every engineer we place is screened by SethAI for these
              instincts. The shortlist is filtered on Swift fluency, App
              Store delivery experience, accessibility habits, and the
              signals that predict whether someone will still be shipping
              cleanly for you in eighteen months.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire iOS application developers from Workforce Next
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
            What an iOS developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire an
            iOS application developer through Workforce Next, here is the
            work they take ownership of:
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
            Native iOS or cross-platform: what does your project actually need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every project needs a native iOS specialist. Here is how we
            help customers decide before they hire the wrong profile.
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
            Three ways to work with our iOS engineers. Every engagement
            includes an engineering manager, shared context documentation,
            and PTO backup coverage at no extra cost.
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
            Common questions about hiring iOS application developers
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
            Ready to ship your iOS app?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about the app and your stack. We will match you with an
            iOS application developer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
