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
  title: "Hire React Native Developers from India",
  description:
    "Hire pre-vetted React Native developers from India. New Architecture, TurboModules, Expo, code-push, native modules in Swift/Kotlin. SethAI-screened.",
  keywords: [
    "hire React Native developers",
    "hire React Native developers India",
    "Expo developers",
    "React Native TurboModules",
    "React Native new architecture",
    "cross platform mobile developers",
    "React Native Firebase developers",
    "React Native staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/react-native-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire React Native Developers from India",
    description:
      "Pre-vetted React Native engineers for iOS and Android with shared JS codebase. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/react-native-developers/`,
  },
};

const skills = [
  "React Native 0.76+",
  "New Architecture (Fabric, TurboModules)",
  "Expo SDK 52+",
  "TypeScript",
  "Reanimated 3",
  "Gesture Handler",
  "React Navigation",
  "Redux Toolkit / Zustand",
  "React Query",
  "Hermes",
  "EAS Build / Submit",
  "CodePush / Expo Updates",
  "Firebase / Supabase",
  "Sentry",
];

const whyPoints = [
  {
    title: "React Native specialists, not React-web devs trying mobile",
    description:
      "Our engineers know the bridge vs the New Architecture, ship to TestFlight and Play Console regularly, and have shipped real apps with native modules. They are not React devs reading a tutorial.",
  },
  {
    title: "Expo and bare workflow depth",
    description:
      "Expo for fast iteration and managed-workflow projects. Bare React Native for apps that need custom native modules or deep integration. We match the engineer to your project setup.",
  },
  {
    title: "Native module fluency",
    description:
      "When the JS layer is not enough, our engineers drop to Swift, Kotlin, or Objective-C and write TurboModules or Fabric components properly. Not just glue around existing libraries.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership, communication, and career fit. You get React Native engineers who stay long enough to ship features 2 and 3, not contractors who disappear after the MVP.",
  },
];

const responsibilities = [
  "Architecting React Native apps with proper navigation (React Navigation), state (Redux Toolkit, Zustand, or Jotai), and data fetching (React Query, SWR)",
  "Migrating apps to the New Architecture (Fabric renderer + TurboModules) and updating third-party libraries to be compatible",
  "Writing native modules in Swift, Kotlin, and Objective-C when JS-only is not enough (Bluetooth, custom camera, vendor SDKs)",
  "Setting up Expo (managed or bare) with EAS Build, EAS Submit, EAS Update, and proper environment management",
  "Implementing push notifications (FCM, APNs), deep linking (Universal Links, App Links), and OAuth flows",
  "Building 60fps animations with Reanimated 3 worklets and Gesture Handler, avoiding bridge thrashing",
  "Integrating Firebase Auth, Firestore, Crashlytics, Remote Config, and Cloud Functions",
  "Setting up CI/CD with EAS Build, Bitrise, or GitHub Actions for automated TestFlight and Play Console releases",
  "Optimizing app size, startup time, and memory; profiling JS thread and UI thread with Flipper or React DevTools",
  "Writing unit tests with Jest, component tests with React Native Testing Library, and E2E with Detox or Maestro",
];

const whenToHire = [
  {
    scenario: "You have a strong React web team and want to ship mobile fast",
    recommendation: "Hire a React Native specialist",
    reason:
      "React Native lets your existing React engineers reuse skills and even share business logic via shared packages. Faster ramp than asking a React team to learn Swift and Kotlin.",
  },
  {
    scenario: "You need many native SDK integrations (payments, KYC, vendor SDKs)",
    recommendation: "Hire a React Native specialist with native modules experience",
    reason:
      "The npm ecosystem has React Native wrappers for almost every major SDK. When wrappers are missing, our engineers write them in Swift and Kotlin without breaking the cross-platform story.",
  },
  {
    scenario: "You want maximum UI polish and design-system consistency",
    recommendation: "Consider Flutter as an alternative",
    reason:
      "Flutter draws its own widgets so visual fidelity across platforms is tighter than React Native, which uses platform-native primitives. See our Flutter page for that view.",
  },
  {
    scenario: "Adding a small companion app to a larger native iOS or Android product",
    recommendation: "Native may be simpler than introducing React Native",
    reason:
      "If you only need one platform and have native engineers, Swift or Kotlin is often simpler than introducing React Native as a second runtime.",
  },
];

const screeningSignals = [
  {
    signal: "New Architecture readiness",
    detail:
      "Fabric renderer, TurboModules, Codegen, bridgeless mode. Are they migrating apps to the New Architecture cleanly? Do they understand what changed and what library compatibility implies?",
  },
  {
    signal: "Expo vs bare workflow judgment",
    detail:
      "When does the managed Expo workflow accelerate the team and when does it block them? When to eject. We test whether candidates default to one without thinking.",
  },
  {
    signal: "Native module fluency",
    detail:
      "Writing TurboModules in Swift, Kotlin, or Objective-C. Bridging native UI components via Fabric. We give a hypothetical SDK integration and watch the design.",
  },
  {
    signal: "Performance debugging",
    detail:
      "JS thread vs UI thread, Reanimated worklets, list virtualization (FlashList vs FlatList), avoiding bridge thrashing, image caching. We hand a janky list and watch the profile.",
  },
  {
    signal: "Release engineering",
    detail:
      "EAS Build, EAS Submit, EAS Update, CodePush, TestFlight, Play Console internal/closed tracks, app signing, provisioning, OTA update strategy and rollback.",
  },
  {
    signal: "Cross-platform UX judgment",
    detail:
      "Platform.OS branching done sparingly, native-feeling navigation patterns, accessibility (accessibilityLabel, hints), Dark Mode, Dynamic Type, RTL support.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior React Native guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated pod members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a new app build, complex feature, or backend-plus-mobile combined scope.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your app, target platforms, backend, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for React Native depth, native module experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architecture, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a React Native developer from India?",
    answer:
      "Mid-level React Native developers from India cost USD 3,500 to 5,500 per month for full-time engagement. Senior engineers with New Architecture, native modules, and release-engineering depth range from USD 5,000 to 7,500 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "React Native or Flutter: which should we choose?",
    answer:
      "React Native wins for teams already deep in React who want skill reuse and shared business logic across web and mobile. Flutter wins for tighter UI fidelity, performance, and design-system consistency. Both are excellent in 2026. We help you decide based on your existing team and product needs.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we use Expo or bare React Native?",
    answer:
      "Use Expo (managed or with EAS) for fast iteration, OTA updates, and projects that do not need custom native modules. Use bare React Native (or Expo bare) when you need deep native integration, custom modules, or specific platform-level control. Most modern projects start with Expo and stay there.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your React Native engineers ready for the New Architecture?",
    answer:
      "Yes. Every senior we place is familiar with Fabric, TurboModules, Codegen, and bridgeless mode. We test New Architecture readiness explicitly: candidates explain library compatibility, migration patterns, and the performance implications.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your React Native engineers write native modules in Swift and Kotlin?",
    answer:
      "Yes. When the npm ecosystem does not have a wrapper for the SDK you need, our engineers write the native module in Swift, Kotlin, or Objective-C themselves and expose it via TurboModules or the legacy bridge. We screen for this explicitly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you handle App Store and Play Store submissions?",
    answer:
      "Yes. Submission, review-guidelines compliance, beta testing setup (TestFlight, Play Console internal and closed tracks), staged rollouts, and post-launch crash monitoring are standard work. We have shipped to both stores hundreds of times.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your React Native developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireReactNativeDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire React Native Developers from India",
    "Hire pre-vetted React Native developers from India. New Architecture, TurboModules, Expo, native modules, OTA updates. SethAI-screened.",
    `${siteMetadata.url}/hire/react-native-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "React Native Developers", url: `${siteMetadata.url}/hire/react-native-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE REACT NATIVE DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire React Native Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship React Native in production. New
            Architecture, Expo, native modules, OTA updates. Screened by
            SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why React Native still wins for React-first teams</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              React Native quietly reset itself with the New Architecture
              (Fabric + TurboModules + bridgeless), Expo SDK 52+, EAS Build
              and Update, and a Hermes engine that has matured into a
              first-class JavaScript runtime. For teams already shipping React
              on the web, React Native remains the fastest path to mobile
              because the team, the patterns, and the business logic carry
              over.
            </p>
            <p>
              A React Native engineer worth hiring in 2026 thinks in terms of
              the New Architecture, knows when to use Expo vs bare, writes
              native modules in Swift and Kotlin when needed, and uses
              Reanimated worklets to keep animations off the JS thread. They
              are not React-web devs experimenting with mobile.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For the alternative view, read our{" "}
              <a href="/hire/flutter-developers/" className="text-primary-600 hover:underline">Flutter developers</a>{" "}
              page, or see our broader{" "}
              <a href="/hire/ios-developers/" className="text-primary-600 hover:underline">iOS</a> and{" "}
              <a href="/hire/android-developers/" className="text-primary-600 hover:underline">Android</a> pillar pages.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire React Native developers from Workforce Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a React Native developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a React Native developer through Workforce Next, here
            is the work they take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Specialist or generalist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every mobile role needs a React Native specialist. Here is how we help customers decide before they spend on the wrong profile.</p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div key={item.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">{item.scenario}</h3>
                <p className="text-sm font-bold text-primary-500 mb-3">{item.recommendation}</p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our React Native engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.name} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col">
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">{model.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary-500">{model.hours}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{model.best}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">{model.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring React Native developers</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire React Native developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your project and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
