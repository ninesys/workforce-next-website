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
  title: "Hire Unity Developers from India (C#, Game Dev, AR/VR)",
  description:
    "Hire pre-vetted Unity developers from India. C#, mobile games, AR/VR, WebGL, multiplayer netcode, and Asset Store delivery. SethAI-screened for skills and longevity.",
  keywords: [
    "hire unity developers",
    "hire unity developers in india",
    "hire dedicated unity developers in india",
    "unity developer jobs remote",
    "unity game developer hire",
    "remote unity developer jobs",
    "unity AR VR developer hire",
    "unity 6 developer hire",
    "C# unity developer india",
    "hire unity 3d developer india",
  ],
  openGraph: {
    ...ogDefaults("/hire/unity-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Unity Developers from India",
    description:
      "Pre-vetted Unity engineers across mobile, AR/VR, PC, and WebGL. Asset Store, Steam, App Store delivery experience. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/unity-developers/`,
  },
};

const skills = [
  "Unity 6",
  "C#",
  "URP",
  "HDRP",
  "Shader Graph",
  "Cinemachine",
  "Timeline",
  "Addressables",
  "DOTS / ECS",
  "Burst Compiler",
  "Job System",
  "AR Foundation",
  "XR Interaction Toolkit",
  "Mirror",
  "Photon",
  "Netcode for GameObjects",
  "Unity Cloud Build",
];

const whyPoints = [
  {
    title: "Unity 6 and C# at production depth",
    description:
      "Our Unity engineers ship in current Unity 6 with idiomatic C# (async/await, generics, ScriptableObjects, custom inspectors). They are not Unity hobbyists who learned the editor; they are engineers who happen to ship in Unity.",
  },
  {
    title: "Mobile, AR/VR, PC, and WebGL all covered",
    description:
      "We staff Unity engineers across iOS and Android mobile games, Meta Quest and Apple Vision Pro AR/VR work, Steam and PC builds, and WebGL deployments. Tell us your platform; we match an engineer who has shipped to it.",
  },
  {
    title: "Store delivery experience, not just builds",
    description:
      "Asset Store, App Store, Google Play, Steam, Meta Quest Store. Our engineers have shipped through each of these review processes, including the rejections, and know how to handle build size, IAP review, and platform-specific compliance.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "Unity projects fail in subtle ways: a draw-call regression, a memory spike on a low-end device, a multiplayer desync that only shows up at scale. SethAI screens for engineers with the incident response habits to catch these before release, not after.",
  },
];

const responsibilities = [
  "Architecting Unity 6 projects with clean scene structure, prefab discipline, addressables for asset management, and reproducible build pipelines",
  "Writing production C# with async/await for I/O, generics for reusable systems, ScriptableObjects for designer-driven configuration, and custom editor tools where they save real time",
  "Designing gameplay systems: input handling, camera rigs (Cinemachine), character controllers, state machines, AI behaviour trees",
  "Optimizing render pipeline (URP or HDRP) for the target platform: draw call batching, GPU profiling, shader complexity budgets, mobile-specific lighting choices",
  "Implementing multiplayer netcode with Mirror, Photon, or Unity Netcode for GameObjects, including authoritative server patterns and lag compensation",
  "Building AR experiences with AR Foundation (iOS ARKit + Android ARCore) and VR with the XR Interaction Toolkit (Quest, Vision Pro, PCVR)",
  "Writing shaders in Shader Graph and HLSL when the visual target requires it",
  "Setting up CI/CD with Unity Cloud Build, GitHub Actions, or Bitrise; managing addressables build pipelines across environments",
  "Owning platform submissions: Apple App Store, Google Play, Steam, Meta Quest Store, including review responses and phased rollouts",
  "Integrating IAP, ad mediation (Unity Ads, AdMob), analytics, and crash reporting (Unity Cloud Diagnostics, Crashlytics)",
];

const whenToHire = [
  {
    scenario: "You are building a mobile or PC game from scratch",
    recommendation: "Hire a senior Unity developer",
    reason:
      "First-release architectural decisions compound. Scene structure, addressables setup, render pipeline choice, and CI all get baked into every later choice. A senior Unity engineer sets the foundation cleanly so the next two years of feature work do not fight the framework.",
  },
  {
    scenario: "You have a Unity prototype and need production polish",
    recommendation: "Hire a senior with shipped-game experience",
    reason:
      "Polishing a prototype to ship is a different skill set from building one. You need an engineer who has been through App Store review rejections, optimized for low-end Android devices, and built a stable release pipeline. Resume scars beat clean portfolio links.",
  },
  {
    scenario: "Your project is AR/VR specific",
    recommendation: "Hire a specialist with Quest, Vision Pro, or HoloLens experience",
    reason:
      "AR/VR work has its own performance budgets, comfort considerations (motion sickness, frame pacing), and platform SDK quirks. A general Unity engineer can ship a flat-screen game; an XR specialist ships an experience that survives 30-minute sessions on real users.",
  },
  {
    scenario: "You are deciding between Unity and Unreal",
    recommendation: "Decide first, then hire. Unity and Unreal engineers are not interchangeable",
    reason:
      "Unity wins for mobile, AR/VR, and small-team PC. Unreal wins for AAA visual fidelity, high-end PC, and console. Each has its own toolchain and language (C# for Unity, C++ and Blueprints for Unreal). Pick the engine first based on your platform and visual target; we can staff either.",
  },
];

const screeningSignals = [
  {
    signal: "Real shipped game on at least one major platform",
    detail:
      "We ask candidates to walk through a game they shipped to App Store, Google Play, Steam, or Meta Quest. Strong candidates have a specific story: review rejections, performance fixes, post-launch crash triage. Weak ones link to a portfolio of game-jam prototypes.",
  },
  {
    signal: "Render pipeline fluency",
    detail:
      "We ask candidates how they would optimize a Unity scene with 200 draw calls on a mid-range Android device. Strong candidates reach for batching, atlasing, GPU instancing, and URP-specific tools. Weak ones suggest reducing the number of objects.",
  },
  {
    signal: "Advanced C# patterns",
    detail:
      "We give candidates a coroutine-heavy script and ask them to refactor it to async/await with proper cancellation. Strong candidates produce idiomatic Unity-aware async code. Weak ones either freeze or convert without handling Unity main-thread constraints.",
  },
  {
    signal: "Multiplayer netcode",
    detail:
      "If the role needs it, we screen for engineers who have shipped multiplayer in production. Strong candidates explain authoritative server patterns, client prediction, and lag compensation. Weak ones describe the Unity tutorial they followed.",
  },
  {
    signal: "Platform store experience",
    detail:
      "We screen for engineers who have shipped multiple titles through App Store, Google Play, Steam, or Meta Quest review. Production scars (what got rejected, why, how they fixed it) beat clean portfolio links every time.",
  },
  {
    signal: "Optimization track record",
    detail:
      "We ask candidates to walk through a specific FPS improvement they made. Strong candidates name the bottleneck (draw calls, GC alloc, shader complexity, physics), the tool used to find it (Unity Profiler, Frame Debugger, RenderDoc), and the measured improvement.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for indie projects, small teams, or maintenance work on a shipped Unity game.",
    includes:
      "Dedicated Unity engineer, weekly sync, code review for in-house contributors, store submission support.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for game studios shipping continuously, mid-game pivots, or polish-to-launch sprints.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, store submission and live-ops ownership.",
  },
  {
    name: "Game pod",
    hours: "3 to 5 engineers plus tech artist",
    best: "Best for full game projects, large feature additions, or platform expansions (mobile to PC, flat to VR).",
    includes:
      "Tech lead plus engineers plus optional tech artist, shared context docs, CI/CD setup, coordinated platform releases.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your game context",
    description:
      "Tell us about the platform, target hardware, genre, multiplayer needs, and current dev stack.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for shipped-game experience, render pipeline fluency, and platform store track record. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview the shortlist",
    description:
      "Talk to candidates directly. Walk through your prototype or design specs and see how they think.",
  },
  {
    step: "04",
    title: "Start with a paid trial week",
    description:
      "Real work on your actual project. If the engineer is the right fit, the engagement continues. If not, we rematch.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a Unity developer in India in 2026?",
    answer:
      "Mid-level Unity developers in India typically cost between USD 4,000 and 6,500 per month all-in. Senior Unity engineers with shipped games on App Store, Google Play, or Steam range from USD 6,500 to 9,500 per month. Tech leads who have run a 5+ engineer Unity team cost USD 9,000 to 12,500 per month. Pricing at Workforce Next includes an engineering manager and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does it cost to hire a Unity game developer in the US compared to India?",
    answer:
      "A US senior Unity developer fully loaded costs roughly USD 220,000 to 320,000 per year (base salary plus benefits, payroll tax, equity, office). The Indian equivalent runs USD 78,000 to 114,000 per year all-in to the customer. The annual gap of roughly USD 150,000 per engineer is the primary driver of US studios hiring Unity offshore.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Unity developers ship to App Store, Google Play, Steam, and Meta Quest?",
    answer:
      "Yes. Platform store delivery is part of the role. Our engineers have shipped through App Store and Google Play review, Steam page setup and depot uploads, and Meta Quest Store submission. They handle rejections, build-size optimization, IAP review, and phased rollouts. The expectation is shipped, not just built.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your Unity developers handle multiplayer netcode?",
    answer:
      "Yes, on a per-engagement basis. Multiplayer is a specialty inside Unity development. We staff engineers who have shipped multiplayer with Mirror, Photon (PUN and Fusion), or Unity Netcode for GameObjects in production. Tell us your scale and authority model (peer-to-peer, dedicated server, hybrid) and we match accordingly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should I hire Unity or Unreal developers? They both build games.",
    answer:
      "Decide based on your platform and visual target, then hire. Unity wins for mobile, AR/VR, and small-team PC games. Unreal wins for AAA visual fidelity, high-end PC, and console. Each has its own toolchain and primary language (C# for Unity, C++ and Blueprints for Unreal). The engineers are not interchangeable; we staff Unity engineers specifically. For Unreal, we can recommend specialist studios.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you have Unity developers with AR/VR experience?",
    answer:
      "Yes. Our XR-focused Unity engineers have shipped on Meta Quest 2 and 3, Apple Vision Pro, and PCVR (HTC Vive, Valve Index). They work fluently with AR Foundation (iOS ARKit and Android ARCore) and the XR Interaction Toolkit. AR/VR projects are quoted as specialist engagements; let us know your headset target and reference titles for context.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I hire dedicated Unity developers in India for a long-term project?",
    answer:
      "Yes. Long-term dedicated engagements (6 to 18+ months) are the most common shape we run for game studios. Engineers embed in your team, attend daily standups, own clear feature areas, and ship under your branding. Short-term project engagements (3 to 4 months) work for fixed-scope launches; long-term works better for ongoing live-ops or multi-title studios.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can you place a Unity developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For pod engagements (multiple engineers plus tech artist) the timeline is similar because we maintain a pre-screened Unity bench. Most delays come from interview scheduling on the customer side.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireUnityDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Unity Developers from India",
    "Hire pre-vetted Unity developers from India. C#, Unity 6, mobile games, AR/VR, multiplayer netcode, WebGL, Asset Store delivery. SethAI-screened for skills and longevity.",
    `${siteMetadata.url}/hire/unity-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "Unity Developers",
      url: `${siteMetadata.url}/hire/unity-developers/`,
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
            HIRE UNITY DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire Unity Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted Unity engineers across mobile games, AR/VR, PC, and
            WebGL. Asset Store, App Store, Google Play, Steam, and Meta Quest
            delivery experience. Screened by SethAI for shipped-game track
            record.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work/" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What separates a real Unity developer from a tutorial-only one
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Almost any developer can ship a single Unity scene to a game jam.
              The gap between that and a developer who can take a Unity project
              from prototype to launched, monetized, and live-ops-supported
              title is enormous. Hiring the wrong Unity engineer is how teams
              end up with games that work in the editor and crash on real
              devices.
            </p>
            <p>
              A real Unity developer thinks in render pipelines, memory, and
              platform review. They know why a draw-call spike kills FPS on a
              mid-range Android device, why an addressables setup matters
              before launch, and why an App Store rejection on privacy
              disclosure can be predicted before submission. They have shipped
              titles, debugged production crashes, and survived multiple
              Unity major version upgrades.
            </p>
            <p>
              Every engineer we place is screened by SethAI for these
              instincts. The shortlist is filtered on shipped games, render
              pipeline depth, platform store experience, and the signals that
              predict whether the engineer will still be shipping cleanly for
              you in eighteen months.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire Unity developers from Workforce Next
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
            What a Unity developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire a
            Unity developer through Workforce Next, here is the work they take
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
            Unity, Unreal, or cross-platform: what does your project actually need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every project needs a Unity specialist. Here is how we help
            customers decide before they hire the wrong profile.
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
            Three ways to work with our Unity engineers. Every engagement
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
            Common questions about hiring Unity developers
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
            Ready to ship your Unity project?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your platform target, genre, and current dev stack.
            We will match you with a senior Unity developer within 48 hours.
          </p>
          <Button href="/contact/" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
