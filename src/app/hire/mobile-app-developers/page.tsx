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
  title: "Mobile App Development Company India | Workforce Next",
  description:
    "Hire a mobile app development team from India. React Native, Flutter, iOS (Swift), and Android (Kotlin) engineers. SethAI-screened, dedicated pods, daily timezone overlap.",
  keywords: [
    "mobile app development company india",
    "hire mobile app developers india",
    "mobile app development team india",
    "react native developers india",
    "flutter developers india",
    "ios developers india",
    "android developers india",
    "cross platform mobile development india",
    "mobile app development outsourcing india",
  ],
  openGraph: {
    ...ogDefaults("/hire/mobile-app-developers/"),
    images: ["/images/og-default.png"],
    title: "Mobile App Development Company India | Workforce Next",
    description:
      "React Native, Flutter, iOS, and Android engineers from India. Dedicated pods, SethAI-screened, daily timezone overlap.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/mobile-app-developers/`,
  },
};

const platforms = [
  {
    name: "React Native",
    href: "/hire/react-native-developers/",
    tagline: "One codebase, iOS + Android",
    best: "Best for React-first teams who want to share logic with the web and ship fast to both stores.",
    skills: ["New Architecture", "Expo / EAS", "TypeScript", "Native modules", "Reanimated"],
    badge: "Most popular",
  },
  {
    name: "Flutter",
    href: "/hire/flutter-developers/",
    tagline: "Pixel-perfect across platforms",
    best: "Best for design-heavy apps where visual consistency matters more than shared web codebase.",
    skills: ["Dart 3", "Flutter 3.x", "Bloc / Riverpod", "Platform channels", "Firebase"],
    badge: "Fastest UI parity",
  },
  {
    name: "iOS (Swift)",
    href: "/hire/ios-developers/",
    tagline: "Native Apple ecosystem",
    best: "Best for apps that rely on Apple-only APIs: ARKit, HealthKit, CoreML, Wallet, or CarPlay.",
    skills: ["Swift 5.9+", "SwiftUI", "UIKit", "Combine", "Xcode Cloud"],
    badge: "Apple-native",
  },
  {
    name: "Android (Kotlin)",
    href: "/hire/android-developers/",
    tagline: "Native Google ecosystem",
    best: "Best for high-performance Android apps, Play Store depth, and Wear OS or Android Auto.",
    skills: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Hilt"],
    badge: "Google-native",
  },
];

const whyIndia = [
  {
    title: "10+ years of mobile production depth",
    description:
      "Our engineers have shipped consumer apps, B2B tools, fintech wallets, IoT companions, and telematics dashboards to the App Store and Play Store. Not just tutorial projects.",
  },
  {
    title: "SethAI screening beyond technical skills",
    description:
      "Every candidate is evaluated on 12 parameters including ownership mindset, communication, and career fit, not just whether they know the framework. You get engineers who stay.",
  },
  {
    title: "Daily timezone overlap",
    description:
      "Our Noida-based team overlaps with US Eastern (5:30 PM IST = 8 AM ET) and UK hours. Stand-ups, reviews, and async collaboration without waiting 24 hours for a reply.",
  },
  {
    title: "Dedicated pods, not freelancer roulette",
    description:
      "You get a named engineer or pod that works exclusively on your product. Shared context, engineering manager oversight, and PTO backup coverage included.",
  },
  {
    title: "Stack advisory before you hire",
    description:
      "React Native or Flutter? Native or cross-platform? We help you choose the right stack for your product, team, and roadmap before placing anyone. The wrong hire costs more than the consultation.",
  },
  {
    title: "Replacement guarantee",
    description:
      "If the fit is not right in the first 30 days, we replace the engineer at no extra cost. No renegotiation, no finger-pointing.",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell us what you are building",
    description:
      "Platform targets, backend stack, existing codebase (if any), and what kind of engineer or pod you need.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "We screen for platform depth, production experience, and working-style fit. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to candidates directly. Test architecture decisions, debugging instincts, and communication.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. Right fit — continue. Wrong fit — we replace at no extra cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "React Native or Flutter: which should we choose?",
    answer:
      "React Native wins for teams already deep in React who want to share business logic and components between web and mobile. Flutter wins for pixel-perfect design consistency and apps that need tight UI control across platforms. Both are excellent in 2026. We help you decide based on your team, product, and roadmap before you hire.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we go cross-platform or build native iOS and Android separately?",
    answer:
      "Cross-platform (React Native or Flutter) works for most apps and saves significant development time. Go native when you need deep Apple or Google ecosystem integration (ARKit, HealthKit, Wear OS, Android Auto), when performance in complex rendering matters, or when your team already has strong native engineers. We walk you through this decision on the first call.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your engineers handle App Store and Play Store submissions?",
    answer:
      "Yes. App Store Connect, Play Console, beta testing via TestFlight and internal tracks, review-guidelines compliance, staged rollouts, and post-launch monitoring are standard. We have shipped hundreds of apps to both stores.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you build the backend too, or just the mobile app?",
    answer:
      "We can do both. Many of our engagements include a backend engineer alongside the mobile engineer — Node.js, Python, or FastAPI — so the full product ships from one pod without the coordination overhead of splitting vendors.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What if we need to switch stacks mid-project?",
    answer:
      "It happens. If your product evolves beyond what the current stack handles, we advise on migration paths and can replace or supplement the team with the right engineers. We have migrated React Native apps to Flutter and bare RN apps to Expo, and vice versa.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do you handle timezone differences?",
    answer:
      "Our engineers in Noida overlap with US Eastern from about 8 AM to 1 PM ET (5:30 PM to 10:30 PM IST), and UK/Europe from 9 AM to 2 PM BST. Standard engagements include at least 4 hours of live overlap daily for standups, code reviews, and unblocking.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How do you vet mobile engineers before placing them?",
    answer:
      "SethAI screens every candidate across 12 parameters: platform depth, production experience, debugging instincts, communication, ownership mindset, and career fit. Technical screening includes take-home tasks and architecture discussions specific to the platform, not generic algorithm rounds.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireMobileAppDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Mobile App Development Company India",
    "Hire pre-vetted mobile app developers from India. React Native, Flutter, iOS, and Android engineers. SethAI-screened, dedicated pods, daily timezone overlap.",
    `${siteMetadata.url}/hire/mobile-app-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Mobile App Developers", url: `${siteMetadata.url}/hire/mobile-app-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">MOBILE APP DEVELOPMENT</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Mobile app development company in India.
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            React Native, Flutter, iOS, and Android engineers from Noida, India.
            Dedicated pods, SethAI-screened for depth and fit, daily timezone
            overlap with US and UK teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      {/* Platform cards */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-4">
            Choose your platform
          </h2>
          <p className="text-center text-dark-600 dark:text-dark-200 max-w-2xl mx-auto mb-12">
            Not sure which stack fits your product? We help you decide before you hire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-card transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {platform.name}
                  </h3>
                  <span className="text-xs font-semibold bg-primary-50 dark:bg-dark-800 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full border border-primary-100 dark:border-dark-600">
                    {platform.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold text-dark-500 dark:text-dark-400 mb-3">
                  {platform.tagline}
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed mb-4 flex-1">
                  {platform.best}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:underline">
                  Hire {platform.name} developers →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Workforce Next */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire mobile engineers from Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyIndia.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{point.title}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What our mobile teams build
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Consumer apps that ship to the App Store and Play Store. B2B
              tools with complex data and offline-first sync. Fintech wallets
              with biometric auth, KYC flows, and payment SDKs. IoT companion
              apps that talk to hardware over BLE and MQTT. Telematics
              dashboards that render real-time GPS and sensor streams.
              Field-service apps used by teams who cannot afford downtime.
            </p>
            <p>
              Our engineers have built in regulated industries (financial
              services, healthcare, logistics) and understand what production
              really means: release pipelines, crash monitoring, staged
              rollouts, on-call coverage, and handling edge cases that only
              appear at scale.
            </p>
            <p>
              We are not a body-shop. When you share your product brief, we
              push back on stack choices that do not fit, flag architectural
              risks before they become rewrite projects, and tell you when a
              single engineer is the right call versus a full pod.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about mobile app development in India
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to hire your mobile team?
          </h2>
          <p className="text-primary-100 leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us your platform, product, and timeline. We will match you with
            the right engineers and have a shortlist in 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/" size="lg" variant="secondary">
              Start the conversation
            </Button>
            <Button href="/how-we-work/" size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              See how we work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
