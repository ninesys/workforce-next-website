import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Android Developers from India (Kotlin, Jetpack Compose)",
  description:
    "Hire pre-vetted Android developers from India. Kotlin, Jetpack Compose, Coroutines, Hilt, Room, Play Console delivery, and accessibility. SethAI-screened.",
  keywords: [
    "hire android developers India",
    "hire remote app developers",
    "android app developer job description",
    "kotlin developers India",
    "jetpack compose developer",
    "google play app developer",
    "android staff augmentation",
    "android engineer for hire",
  ],
  openGraph: {
    ...ogDefaults("/hire/android-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Android Developers from India",
    description:
      "Pre-vetted Android engineers across Kotlin, Jetpack Compose, and Play Console delivery. SethAI-screened for technical depth and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/android-developers/`,
  },
};

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Java",
  "Coroutines",
  "Flow",
  "Room",
  "Hilt",
  "Retrofit",
  "OkHttp",
  "Gradle",
  "Espresso",
  "Play Console",
  "Firebase",
  "WorkManager",
  "Wear OS",
  "Material 3",
];

const whyPoints = [
  {
    title: "Modern Android, not legacy Java muscle memory",
    description:
      "Kotlin and Jetpack Compose are first-class. Our Android engineers work in the toolchain Google supports today, not the View XML and Activity-only patterns from five years ago. Java fluency is there for legacy code, not as the default.",
  },
  {
    title: "Play Console delivery, not just builds",
    description:
      "Submitting to Google Play, surviving policy review, shipping staged rollouts, and reading ANR and crash reports in Play Console are part of the job. We screen for engineers who have shipped multiple apps to production, not just to a debug device.",
  },
  {
    title: "Fragmentation pragmatism",
    description:
      "Android runs on thousands of device and OS combinations. Our engineers test against real device matrices, handle low-end memory and storage, and ship apps that survive Samsung custom OEM behavior, not just on a Pixel.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "Android apps fail in subtle ways: a background service killed by Doze, a permission denied silently, a Compose recomposition loop. SethAI evaluates incident track record and ownership signals so the second release ships as cleanly as the first.",
  },
];

const responsibilities = [
  "Architecting Android apps in Kotlin and Jetpack Compose with a clear separation of view, view model, and data layers",
  "Migrating legacy View XML or Java screens to Compose incrementally where the value justifies the work",
  "Designing concurrency patterns with Kotlin Coroutines and Flow, including structured concurrency and proper cancellation handling",
  "Building offline-first apps with Room or DataStore plus a thoughtful sync layer",
  "Wiring REST and GraphQL APIs through Retrofit and OkHttp with proper auth refresh, retry policies, and structured error handling",
  "Managing push notifications via Firebase Cloud Messaging, deep links, and app links so the app routes the user to the right screen every time",
  "Implementing in-app billing and Play Billing Library with receipt validation and proper restore handling",
  "Hardening accessibility: TalkBack, content descriptions, font scaling, color contrast, and material design that survives the actual policy review",
  "Setting up CI/CD with Gradle, Bitrise, GitHub Actions, or Codemagic, plus internal-test and staged-rollout pipelines on Play Console",
  "Owning Play Console submission, policy review responses, staged rollouts, and ANR / crash triage post-release",
];

const whenToHire = [
  {
    scenario: "You are launching your first Android app",
    recommendation: "Hire a senior Android developer",
    reason:
      "First releases set the architectural patterns the next two years of work will live with. A senior Android engineer ships a clean Compose foundation, sets up CI, handles the Play Console submission, and leaves your team with a codebase the next developer can extend.",
  },
  {
    scenario: "You have an existing Android app stuck on Java and View XML",
    recommendation: "Hire a senior Android engineer plus a migration mandate",
    reason:
      "Stalled velocity on a legacy Android codebase is almost always View XML, Java, and outdated dependency injection. A senior engineer migrates the right surfaces to Kotlin and Compose without freezing the roadmap, and leaves the team faster.",
  },
  {
    scenario: "You want a single codebase for iOS and Android",
    recommendation: "Consider a React Native, Flutter, or Kotlin Multiplatform engineer",
    reason:
      "If your team is small and the product is non-trivial cross-platform UI without deep platform features, cross-platform tooling can ship faster. We staff React Native and Flutter engineers separately. If your app needs deep Android integration (Wear OS, Auto, advanced widgets, ML Kit), native Android still wins.",
  },
  {
    scenario: "You are scaling an Android team past three engineers",
    recommendation: "Hire a tech lead with shipped scaling experience",
    reason:
      "Android teams scale through modularization, code ownership boundaries, and a build configuration that survives. A tech lead who has done this before saves quarters of pain. We staff senior Android leads who have run teams of five to fifteen engineers.",
  },
];

const screeningSignals = [
  {
    signal: "Real Coroutines and Flow fluency",
    detail:
      "We ask candidates to explain when CoroutineScope cancellation matters, what stateIn vs shareIn solves, and where naive Flow collection leaks resources. Strong candidates have shipped real concurrent code. Weak ones quote the Codelab.",
  },
  {
    signal: "Compose plus View XML pragmatism",
    detail:
      "We give candidates a screen and ask whether they would build it in Compose, View XML, or hybrid via ComposeView. Strong answers show production taste: Compose where the speed and state model pay off, XML where Compose still does not earn its weight on legacy screens.",
  },
  {
    signal: "Memory, ANR, and Doze awareness",
    detail:
      "We ask candidates to walk through an ANR or memory leak they hit and fixed. Strong candidates explain WeakReference, lifecycle-aware components, and Doze restrictions on background work. Weak ones reach for postDelayed and hope.",
  },
  {
    signal: "Play Console and policy experience",
    detail:
      "We screen for engineers who have shipped multiple apps through Play Console, including the policy rejection that happens when permissions outlive the disclosed use case. Production scars beat clean portfolio links.",
  },
  {
    signal: "Fragmentation and device matrix testing",
    detail:
      "We test whether candidates think about Samsung OEM quirks, low-end memory, and Android version skew by default. Apps that ignore these get rejected by users and lose retention. Strong Android engineers test against real device matrices.",
  },
  {
    signal: "Cross-team communication",
    detail:
      "Android work touches backend contracts, design systems, and product. We screen for engineers who write clear PRs, push back constructively on ambiguous specs, and unblock themselves without daily handholding.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams maintaining a small Android app or building one alongside a stronger iOS effort.",
    includes:
      "Dedicated Android engineer, weekly sync, Play Console review support, code review for in-house contributors.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously to Google Play and needing an embedded Android owner.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, Play Console and internal-test ownership.",
  },
  {
    name: "Android pod",
    hours: "2 to 4 engineers",
    best: "Best for new Android apps, large rewrites, or feature factories that need a self-contained squad.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, CI/CD setup, coordinated Play Store releases.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your Android context",
    description:
      "Tell us about the app, the existing codebase if any, and whether you need full-time, fractional, or a pod.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for Kotlin and Compose depth, Play Console delivery experience, and accessibility habits. Shortlist in 48 hours.",
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
    question: "What does an Android app developer job description actually look like in 2026?",
    answer:
      "A modern Android job description leads with Kotlin, Jetpack Compose, and Coroutines and Flow. It expects MVVM or MVI architecture, dependency injection through Hilt, Room or DataStore for persistence, and Retrofit for networking. It expects Play Console delivery experience, accessibility habits (TalkBack, content descriptions), and ANR and crash triage in production. It does not lead with Java; Java fluency is now a maintenance skill, not a hiring requirement.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does it cost to hire Android developers in India?",
    answer:
      "Mid-level Android developers in India typically cost between 4,000 and 6,500 USD per month all-in. Senior Android engineers with shipped Play Store apps and Compose plus Coroutines depth range from 6,500 to 9,500 USD per month. Tech leads who have run Android teams cost 9,000 to 12,500 USD per month. Pricing at Workforce Next includes an engineering manager and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should I hire a native Android developer or use React Native or Flutter?",
    answer:
      "Native Android wins when the app uses deep platform features (Wear OS, Auto, advanced widgets, ML Kit, App Bundles, complex animations), when long-term performance matters, and when the team will likely staff iOS separately. Cross-platform wins when the app is primarily UI plus REST APIs, the team is small, and time to market matters more than platform polish. We staff both; tell us your shape and we will recommend honestly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Kotlin or Java for new Android work in 2026?",
    answer:
      "Kotlin, in almost every case. Google has been Kotlin-first since 2019 and the modern Android toolchain (Compose, Coroutines, Hilt, kotlinx.serialization) assumes it. Java is still appropriate inside large legacy codebases that have not migrated, but new code should be Kotlin. We screen Android engineers for Kotlin fluency and treat Java as a maintenance skill.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your Android developers ship to Google Play and handle policy review?",
    answer:
      "Yes. Play Console delivery is part of the job for every Android engineer we place. They handle bundle uploads, manage internal-test and staged rollouts, write data-safety disclosures that match the actual data flow, respond to Play Console policy questions, and triage ANRs and crashes in Play Console. The expectation is shipped, not just built.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can you place an Android developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For pod engagements (multiple engineers) the timeline is similar because we maintain a pre-screened Android bench. Most delays come from interview scheduling on the customer side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireAndroidDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Android Developers from India",
    "Hire pre-vetted Android developers from India. Kotlin, Jetpack Compose, Coroutines, Hilt, Room, Play Console delivery. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/android-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Android Developers",
      url: `${siteMetadata.url}/hire/android-developers/`,
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
            HIRE ANDROID DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Android Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted Android engineers across Kotlin, Jetpack Compose, and
            the full Google Play delivery surface. Screened by SethAI for
            technical depth, Play Console track record, and long-term fit.
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
            What separates a real Android developer from a portfolio-only one
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Almost any developer can ship a single screen on the Play Store.
              The gap between that and a developer who can take an Android
              app from cold launch to a million users, through five Play
              Console policy reviews and three Android major version updates,
              is enormous. Hiring the wrong Android engineer is how teams
              end up with apps that work on a Pixel and ANR on every Samsung
              in the field.
            </p>
            <p>
              A real Android developer thinks in lifecycle, fragmentation,
              and policy. They know why a backgrounded service gets killed
              by Doze, why a Compose recomposition loop tanks battery, and
              why a Play Console policy review will reject a data-safety
              form that does not match the actual data flow. They have
              shipped multiple apps, been on call for production crashes,
              and survived an Android major version update.
            </p>
            <p>
              Every engineer we place is screened by SethAI for these
              instincts. The shortlist is filtered on Kotlin fluency, Play
              Console delivery experience, accessibility habits, and the
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
            Why hire Android developers from Workforce Next
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
            What an Android developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire
            an Android developer through Workforce Next, here is the work
            they take ownership of:
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
            Native Android or cross-platform: what does your project actually need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every project needs a native Android specialist. Here is how
            we help customers decide before they hire the wrong profile.
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
            Three ways to work with our Android engineers. Every engagement
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
            Common questions about hiring Android developers
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
            Ready to ship your Android app?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about the app and your stack. We will match you with an
            Android developer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
