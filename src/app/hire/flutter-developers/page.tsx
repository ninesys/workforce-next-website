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
  title: "Hire Flutter Developers from India",
  description:
    "Hire pre-vetted Flutter developers from India. Dart 3, Flutter 3.x, iOS + Android + web from one codebase, state management, native channels, Firebase. SethAI-screened.",
  keywords: [
    "hire Flutter developers",
    "hire Flutter developers India",
    "Flutter app development India",
    "Dart developers",
    "cross platform mobile developers",
    "Flutter Firebase developers",
    "Flutter state management Bloc Riverpod",
    "Flutter staff augmentation",
    "Flutter freelance India",
  ],
  openGraph: {
    ...ogDefaults("/hire/flutter-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Flutter Developers from India",
    description:
      "Pre-vetted Flutter engineers for iOS, Android, and web from one codebase. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/flutter-developers/`,
  },
};

const skills = [
  "Flutter 3",
  "Dart 3",
  "Riverpod",
  "Bloc",
  "GoRouter",
  "Firebase",
  "Supabase",
  "Hive / Isar",
  "Method Channels",
  "Flutter Web",
  "Flutter for Desktop",
  "FlutterFlow",
  "Codemagic / Bitrise",
  "Sentry",
];

const whyPoints = [
  {
    title: "Flutter specialists, not generic mobile devs",
    description:
      "Our engineers think in widgets, manage state deliberately with Riverpod or Bloc, and know when to drop to native via method channels. They ship Flutter at production scale.",
  },
  {
    title: "One codebase, real production reach",
    description:
      "iOS, Android, web, and increasingly desktop from one Dart codebase. We have shipped Flutter apps with 100K+ MAU, deep native integration, and offline-first behavior.",
  },
  {
    title: "Dart 3 modernity",
    description:
      "Records, patterns, sealed classes, and class modifiers. Strict null-safety. The engineers we place write modern Dart, not the Dart of 2019.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership, communication, and career fit. You get Flutter engineers who stay long enough to ship features 2 and 3, not freelancers who disappear after the MVP.",
  },
];

const responsibilities = [
  "Architecting Flutter apps with clean layering (presentation, domain, data) and proper feature-first folder structure",
  "Choosing and implementing state management (Riverpod, Bloc, Provider) based on team size and complexity",
  "Building offline-first features with Hive, Isar, Drift, or Supabase local cache plus sync queues",
  "Writing platform channels (Kotlin and Swift) for native APIs Flutter does not expose yet",
  "Integrating Firebase Auth, Firestore, Realtime Database, Cloud Functions, Crashlytics, and Remote Config",
  "Setting up CI/CD with Codemagic, Bitrise, or GitHub Actions for automated TestFlight and Play Console releases",
  "Implementing push notifications (FCM, APNs), deep linking (uni_links, app_links), and dynamic links",
  "Building responsive layouts that work across phones, foldables, tablets, and Flutter Web",
  "Profiling jank with Flutter DevTools, fixing rebuild storms, and optimizing app startup time",
  "Writing widget tests, integration tests with Patrol, and golden tests for design-system stability",
];

const whenToHire = [
  {
    scenario: "Building a cross-platform MVP that needs to look native on both iOS and Android",
    recommendation: "Hire a Flutter specialist",
    reason:
      "Flutter ships a single codebase to both platforms with consistent UX. For early-stage products it cuts build time roughly in half vs maintaining two native codebases.",
  },
  {
    scenario: "Building a complex app with heavy native integration (Bluetooth, camera, AR)",
    recommendation: "Hire a Flutter specialist with native channels experience",
    reason:
      "Flutter is excellent until you need a native API it does not expose. Specialists know how to drop to Kotlin or Swift via platform channels without breaking the cross-platform story.",
  },
  {
    scenario: "Adding a mobile app to an existing React or Next.js web product",
    recommendation: "Consider Flutter OR React Native, depending on team skills",
    reason:
      "React Native fits teams already deep in React. Flutter usually wins on UI polish, performance, and design-system consistency. See our React Native page for the alternative view.",
  },
  {
    scenario: "Building a small companion app to a larger native iOS or Android product",
    recommendation: "Native may be simpler than Flutter for one platform",
    reason:
      "If you only need one platform and have native engineers, Swift or Kotlin is often simpler than introducing Flutter as a second runtime.",
  },
];

const screeningSignals = [
  {
    signal: "Modern Dart fluency",
    detail:
      "Records, patterns, sealed classes, class modifiers (final, base, interface, sealed), strict null-safety, FFI when needed. We test whether candidates use Dart 3 features or write Dart like it is 2019.",
  },
  {
    signal: "State management judgment",
    detail:
      "Riverpod, Bloc, Provider, GetX, Redux. Strong candidates can defend a pick for a given app size and team and explain rebuild semantics. Weak ones default to setState everywhere.",
  },
  {
    signal: "Widget tree and rebuild discipline",
    detail:
      "const constructors, RepaintBoundary, ValueListenableBuilder vs Consumer, ListView.builder vs Column. We hand a janky scroll list and watch them profile and fix.",
  },
  {
    signal: "Native channels and platform views",
    detail:
      "Method channels, event channels, basic message channels. Embedding native views (camera preview, maps, AR). Writing the Kotlin/Swift side cleanly, not just calling existing plugins.",
  },
  {
    signal: "Release engineering",
    detail:
      "App signing, provisioning profiles, Codemagic or Bitrise CI, TestFlight and Play Console internal tracks, staged rollouts, crash monitoring with Crashlytics or Sentry.",
  },
  {
    signal: "Cross-platform UX judgment",
    detail:
      "When to use Material vs Cupertino widgets, how to adapt for foldables and tablets, accessibility (Semantics widget), platform-specific behaviors like back navigation on Android.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior Flutter guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated pod members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a new app build, complex feature, or backend-plus-mobile combined scope.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your app, platforms, backend, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for Flutter depth, state-management experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architecture, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a Flutter developer from India?",
    answer:
      "Mid-level Flutter developers from India cost USD 3,500 to 5,500 per month for full-time engagement. Senior engineers with native channels, complex state, and release-engineering depth range from USD 5,000 to 7,500 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Flutter or React Native: which should we choose?",
    answer:
      "Flutter usually wins on UI consistency, performance, and design-system fidelity because it draws its own widgets. React Native wins for teams already deep in React, and where you need many native modules from the npm ecosystem. Both are excellent in 2026. We match the engineer to your existing stack.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Flutter engineers ship to web and desktop too?",
    answer:
      "Yes for web (Flutter Web is production-ready for internal tools, dashboards, and admin panels but still has caveats for marketing sites). Desktop is solid for internal tooling and increasingly for consumer apps. Tell us your target and we will match an engineer with shipping experience on that surface.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your Flutter engineers handle native iOS and Android integration?",
    answer:
      "Yes. Senior Flutter engineers we place write Kotlin and Swift via platform channels for native APIs Flutter does not expose: Bluetooth, custom camera, AR, native SDKs from vendors like Stripe or Twilio. We screen for native channels explicitly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you handle the App Store and Play Store submission process?",
    answer:
      "Yes. Submission, review-guidelines compliance, beta testing setup (TestFlight, Play Console internal/closed tracks), staged rollouts, and post-launch crash monitoring are standard work. We have shipped to both stores hundreds of times.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What backend do your Flutter engineers work with?",
    answer:
      "Most commonly Firebase (Auth, Firestore, Cloud Functions, FCM) and Supabase. They are also comfortable with REST and GraphQL backends in Node.js, Python (FastAPI), or Java. Tell us your backend and we will match an engineer fluent in the integration.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Flutter developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireFlutterDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Flutter Developers from India",
    "Hire pre-vetted Flutter developers from India. Dart 3, state management, native channels, Firebase, web, and desktop. SethAI-screened.",
    `${siteMetadata.url}/hire/flutter-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Flutter Developers", url: `${siteMetadata.url}/hire/flutter-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE FLUTTER DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Flutter Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship Flutter in production. iOS, Android,
            web, and desktop from one Dart codebase. Screened by SethAI for
            depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why Flutter is the default cross-platform pick in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Flutter quietly became the default cross-platform mobile choice
              for serious product teams. Dart 3 modernized the language with
              records, patterns, and sealed classes. Impeller is replacing
              Skia and fixing the jank stories that haunted Flutter early on.
              Web and desktop are mature enough that the same codebase reaches
              four surfaces.
            </p>
            <p>
              A Flutter engineer worth hiring in 2026 thinks in widget trees,
              manages state deliberately, knows when to drop to native, and
              treats rebuild discipline as a craft. They write Dart 3, not
              Dart 2.7 in disguise. These instincts take years.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For the alternative view, read our{" "}
              <a href="/hire/react-native-developers/" className="text-primary-600 hover:underline">React Native developers</a>{" "}
              page, or see our broader{" "}
              <a href="/hire/ios-developers/" className="text-primary-600 hover:underline">iOS</a> and{" "}
              <a href="/hire/android-developers/" className="text-primary-600 hover:underline">Android</a> pillar pages.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire Flutter developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a Flutter developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a Flutter developer through Workforce Next, here is
            the work they take ownership of:
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every mobile role needs a Flutter specialist. Here is how we help customers decide before they spend on the wrong profile.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our Flutter engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring Flutter developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire Flutter developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your Flutter project and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
