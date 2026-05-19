import Link from "next/link";
import { ReactNode } from "react";

type Tone = "deep" | "blue" | "white" | "pale";

type SubLink = { label: string; href: string };

type Service = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  cta: string;
  span: string;
  tone: Tone;
  links: SubLink[];
  illustration: ReactNode;
};

const Arrow = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ---------- Illustrations ----------
// Designed to read on BOTH solid-blue and white tile backgrounds:
// - navy strokes (#022E5E) for outlines (always visible)
// - light-blue fills (#E0EDFF) for surfaces (visible on blue and white)
// - primary-500 (#146EF5) accents for highlights

const AIIllustration = () => (
  <svg viewBox="0 0 320 260" fill="none" className="w-full h-full" aria-hidden="true">
    <defs>
      <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#5B9AFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#5B9AFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="180" cy="140" r="120" fill="url(#ai-glow)" />
    <path
      d="M120 110c0-30 24-52 56-52s56 22 56 52c0 14-6 26-15 35v20a12 12 0 0 1-12 12h-58a12 12 0 0 1-12-12v-20c-9-9-15-21-15-35z"
      fill="#E0EDFF"
      stroke="#022E5E"
      strokeWidth="3"
    />
    <path
      d="M144 122c12-10 26-12 36-5M176 104v26M198 122c-10 7-19 9-26 5"
      stroke="#146EF5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="166" cy="100" r="3.5" fill="#146EF5" />
    <circle cx="190" cy="130" r="3.5" fill="#146EF5" />
    <circle cx="148" cy="130" r="3.5" fill="#146EF5" />
    <path d="M50 70l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#146EF5" />
    <path d="M40 180l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#5B9AFF" />
    <path d="M80 235h200" stroke="#022E5E" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const MobileIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
    <rect x="62" y="22" width="86" height="156" rx="14" fill="#E0EDFF" stroke="#022E5E" strokeWidth="3" />
    <rect x="74" y="42" width="62" height="96" rx="4" fill="#FFFFFF" stroke="#146EF5" strokeWidth="1.5" />
    <circle cx="105" cy="158" r="6" fill="#146EF5" />
    <path
      d="M82 62h46M82 78h36M82 94h46M82 110h28"
      stroke="#146EF5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="18" y="42" width="50" height="22" rx="6" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
    <circle cx="28" cy="53" r="3" fill="#FFFFFF" />
    <path d="M38 53h22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ITOutsourcingIllustration = () => (
  <svg viewBox="0 0 240 200" fill="none" className="w-full h-full" aria-hidden="true">
    <circle cx="80" cy="110" r="56" fill="#E0EDFF" stroke="#022E5E" strokeWidth="3" />
    <ellipse cx="80" cy="110" rx="56" ry="22" stroke="#146EF5" strokeWidth="2.5" fill="none" />
    <path d="M80 54v112M30 110h100" stroke="#146EF5" strokeWidth="2.5" />
    <circle cx="180" cy="60" r="14" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
    <circle cx="200" cy="140" r="14" fill="#022E5E" />
    <circle cx="160" cy="160" r="11" fill="#5B9AFF" stroke="#022E5E" strokeWidth="2.5" />
    <path
      d="M128 90L168 64M132 122L188 138M118 142L154 158"
      stroke="#022E5E"
      strokeWidth="2.5"
      strokeDasharray="4 4"
    />
    <circle cx="180" cy="60" r="4" fill="#FFFFFF" />
    <circle cx="200" cy="140" r="4" fill="#FFFFFF" />
  </svg>
);

const CloudIllustration = () => (
  <svg viewBox="0 0 220 180" fill="none" className="w-full h-full" aria-hidden="true">
    <path
      d="M50 110a28 28 0 0 1 26-28 36 36 0 0 1 70 6 22 22 0 0 1-4 44H76a26 26 0 0 1-26-22z"
      fill="#E0EDFF"
      stroke="#022E5E"
      strokeWidth="3"
    />
    <circle cx="90" cy="130" r="14" fill="#146EF5" stroke="#022E5E" strokeWidth="2" />
    <circle cx="90" cy="130" r="5" fill="#FFFFFF" />
    <path
      d="M90 110v6M90 144v6M70 130h6M104 130h6M76 116l4 4M104 144l-4-4M76 144l4-4M104 116l-4 4"
      stroke="#146EF5"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="130" cy="120" r="9" fill="#5B9AFF" stroke="#022E5E" strokeWidth="2" />
    <circle cx="130" cy="120" r="3" fill="#FFFFFF" />
  </svg>
);

const DigitalMarketingIllustration = () => (
  <svg viewBox="0 0 220 180" fill="none" className="w-full h-full" aria-hidden="true">
    <rect x="30" y="120" width="20" height="40" fill="#5B9AFF" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="60" y="90" width="20" height="70" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="90" y="60" width="20" height="100" fill="#022E5E" stroke="#022E5E" strokeWidth="2.5" />
    <path
      d="M30 110l40-30 30 16 50-46"
      stroke="#146EF5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M140 64h20v-20"
      stroke="#146EF5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M140 110l38-14v50l-38-14z" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="130" y="116" width="14" height="18" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
  </svg>
);

const AutomationIllustration = () => (
  <svg viewBox="0 0 240 180" fill="none" className="w-full h-full" aria-hidden="true">
    {/* workflow nodes connected by lines, evoking n8n / Zapier */}
    <rect x="20" y="32" width="56" height="32" rx="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="92" y="76" width="56" height="32" rx="6" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="164" y="32" width="56" height="32" rx="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="20" y="120" width="56" height="32" rx="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2.5" />
    <rect x="164" y="120" width="56" height="32" rx="6" fill="#5B9AFF" stroke="#022E5E" strokeWidth="2.5" />
    {/* connectors */}
    <path d="M76 48l16 28M148 76l16-28M76 136l16-28M148 92l16 28" stroke="#146EF5" strokeWidth="2.5" strokeLinecap="round" />
    {/* sparkle inside center node = AI */}
    <path d="M120 86l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#FFFFFF" />
    {/* small icons inside outer nodes */}
    <circle cx="48" cy="48" r="5" fill="#146EF5" />
    <circle cx="192" cy="48" r="5" fill="#146EF5" />
    <circle cx="48" cy="136" r="5" fill="#146EF5" />
    <circle cx="192" cy="136" r="5" fill="#FFFFFF" />
  </svg>
);

const QAIllustration = () => (
  <svg viewBox="0 0 220 180" fill="none" className="w-full h-full" aria-hidden="true">
    <rect x="40" y="28" width="100" height="132" rx="8" fill="#E0EDFF" stroke="#022E5E" strokeWidth="3" />
    <rect x="68" y="20" width="44" height="18" rx="4" fill="#146EF5" stroke="#022E5E" strokeWidth="2.5" />
    <path d="M56 68l8 8 16-16" stroke="#146EF5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M88 70h40" stroke="#022E5E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 98l8 8 16-16" stroke="#146EF5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M88 100h36" stroke="#022E5E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 128l8 8 16-16" stroke="#146EF5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M88 130h30" stroke="#022E5E" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="170" cy="120" r="22" fill="#FFFFFF" stroke="#022E5E" strokeWidth="3" />
    <path d="M186 136l14 14" stroke="#022E5E" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Alternating mix of solid blue and white tiles
const services: Service[] = [
  {
    title: "Artificial Intelligence",
    subtitle: "AI agents · RAG · LLM apps",
    description:
      "Build production AI: agentic workflows, RAG pipelines, fine-tuned models, and MCP integrations.",
    href: "/hire/ai-developers",
    cta: "Hire AI engineers",
    span: "md:col-span-3 md:row-span-2",
    tone: "deep",
    links: [
      { label: "LangChain", href: "/hire/langchain-developers" },
      { label: "RAG", href: "/hire/rag-developers" },
      { label: "MCP", href: "/hire/mcp-developers" },
    ],
    illustration: <AIIllustration />,
  },
  {
    title: "Mobile Apps",
    subtitle: "iOS · Android · Cross-platform",
    description:
      "Native iOS and Android, React Native, Flutter. Launch-ready apps with App Store experience.",
    href: "/hire/ios-developers",
    cta: "Build mobile apps",
    span: "md:col-span-3",
    tone: "white",
    links: [
      { label: "iOS", href: "/hire/ios-developers" },
      { label: "Android", href: "/hire/android-developers" },
      { label: "Unity", href: "/hire/unity-developers" },
    ],
    illustration: <MobileIllustration />,
  },
  {
    title: "Cloud & DevOps",
    subtitle: "AWS · GCP · Azure · Kubernetes",
    description:
      "DevOps, SRE, FinOps. CI/CD, rightsizing, observability, and cloud bills cut without cutting features.",
    href: "/hire/devops-engineers",
    cta: "Hire DevOps engineers",
    span: "md:col-span-3",
    tone: "blue",
    links: [
      { label: "DevOps & SRE", href: "/hire/devops-engineers" },
      { label: "Cloud Cost", href: "/hire/cloud-cost-engineer" },
      { label: "Backend", href: "/hire/backend-engineers" },
    ],
    illustration: <CloudIllustration />,
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO · Content · Performance",
    description:
      "Technical SEO, AEO/GEO, content engineering, and performance marketing for B2B SaaS.",
    href: "/contact?topic=digital-marketing",
    cta: "Talk to us",
    span: "md:col-span-2",
    tone: "blue",
    links: [
      { label: "Talk to us", href: "/contact?topic=digital-marketing" },
      { label: "Blog", href: "/blog" },
    ],
    illustration: <DigitalMarketingIllustration />,
  },
  {
    title: "Quality Assurance",
    subtitle: "Manual · Automation · SDET",
    description:
      "Test strategy, Playwright and Cypress automation, performance and security testing.",
    href: "/hire/qa-testers",
    cta: "Hire QA engineers",
    span: "md:col-span-4",
    tone: "white",
    links: [
      { label: "QA Testers", href: "/hire/qa-testers" },
      { label: "Product Engineers", href: "/hire/product-engineers" },
    ],
    illustration: <QAIllustration />,
  },
  {
    title: "IT Outsourcing",
    subtitle: "Managed offshore teams",
    description:
      "Dedicated developers and engineering pods from India. You direct the work, we handle the contracting and operations.",
    href: "/india-handled",
    cta: "See how it works",
    span: "md:col-span-3",
    tone: "white",
    links: [
      { label: "India Handled", href: "/india-handled" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Enterprise", href: "/for/enterprise" },
    ],
    illustration: <ITOutsourcingIllustration />,
  },
  {
    title: "Automation Consulting",
    subtitle: "n8n · Make · Zapier + AI",
    description:
      "Wire n8n, Make, or Zapier with Claude and GPT to automate real business workflows. Sales ops, support, finance, content, and internal tooling. Project-based pricing.",
    href: "/hire/automation-consultants",
    cta: "Automate a workflow",
    span: "md:col-span-3",
    tone: "blue",
    links: [
      { label: "n8n", href: "/hire/automation-consultants" },
      { label: "Make", href: "/hire/automation-consultants" },
      { label: "Zapier", href: "/hire/automation-consultants" },
      { label: "AI integrations", href: "/hire/automation-consultants" },
    ],
    illustration: <AutomationIllustration />,
  },
];

const toneClasses: Record<Tone, string> = {
  deep: "bg-primary-700 text-white",
  blue: "bg-primary-600 text-white",
  white:
    "bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 ring-1 ring-dark-50 dark:ring-dark-700",
  pale:
    "bg-primary-100 dark:bg-dark-800 text-dark-900 dark:text-dark-50 ring-1 ring-primary-200 dark:ring-dark-700",
};

const subtitleClasses: Record<Tone, string> = {
  deep: "text-primary-100",
  blue: "text-primary-100",
  white: "text-primary-600 dark:text-primary-300",
  pale: "text-primary-700 dark:text-primary-300",
};

const bodyClasses: Record<Tone, string> = {
  deep: "text-white/85",
  blue: "text-white/90",
  white: "text-dark-500 dark:text-dark-200",
  pale: "text-dark-600 dark:text-dark-200",
};

const chipClasses: Record<Tone, string> = {
  deep: "bg-white/15 hover:bg-white/25 text-white",
  blue: "bg-white/15 hover:bg-white/25 text-white",
  white:
    "bg-primary-50 hover:bg-primary-100 text-primary-700 dark:bg-dark-700 dark:hover:bg-dark-600 dark:text-primary-300",
  pale:
    "bg-white hover:bg-primary-50 text-primary-700 dark:bg-dark-700 dark:hover:bg-dark-600 dark:text-primary-300",
};

const ctaClasses: Record<Tone, string> = {
  deep: "text-white",
  blue: "text-white",
  white: "text-primary-600 dark:text-primary-300",
  pale: "text-primary-700 dark:text-primary-300",
};

const illuPanelClasses: Record<Tone, string> = {
  deep: "",
  blue: "",
  white: "bg-primary-50/70 dark:bg-dark-700 rounded-xl p-2",
  pale: "bg-white/70 dark:bg-dark-700 rounded-xl p-2",
};

export default function ServicesBento() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Services that you need
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 max-w-2xl mx-auto text-base sm:text-lg">
            End-to-end engineering services delivered by dedicated India-based
            teams. Pick a single role or a full pod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[300px] gap-4 sm:gap-6">
          {services.map((s) => {
            const isFeature = s.span.includes("row-span-2");
            return (
              <div
                key={s.title}
                className={`group relative overflow-hidden rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 ${s.span} ${toneClasses[s.tone]}`}
              >
                {isFeature ? (
                  // Featured tile: text left, illustration right
                  <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6">
                    <div className="flex flex-col md:w-1/2 min-w-0">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${subtitleClasses[s.tone]}`}>
                        {s.subtitle}
                      </span>
                      <Link
                        href={s.href}
                        className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight hover:underline underline-offset-4"
                      >
                        {s.title}
                      </Link>
                      <p className={`mt-3 text-sm sm:text-base leading-relaxed ${bodyClasses[s.tone]}`}>
                        {s.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${chipClasses[s.tone]}`}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={s.href}
                        className={`mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${ctaClasses[s.tone]}`}
                      >
                        {s.cta}
                        <Arrow />
                      </Link>
                    </div>
                    <div className="md:w-1/2 h-40 md:h-auto flex items-center justify-center md:justify-end">
                      <div className={`w-full h-full max-h-[320px] max-w-[360px] flex items-center justify-center ${illuPanelClasses[s.tone]}`}>
                        {s.illustration}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard tile: text left, illustration right
                  <div className="flex h-full gap-4">
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${subtitleClasses[s.tone]}`}>
                        {s.subtitle}
                      </span>
                      <Link
                        href={s.href}
                        className="mt-2 text-xl sm:text-2xl font-extrabold leading-tight hover:underline underline-offset-4"
                      >
                        {s.title}
                      </Link>
                      <p className={`mt-2 text-sm leading-relaxed ${bodyClasses[s.tone]}`}>
                        {s.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${chipClasses[s.tone]}`}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={s.href}
                        className={`mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${ctaClasses[s.tone]}`}
                      >
                        {s.cta}
                        <Arrow />
                      </Link>
                    </div>
                    <div className="hidden sm:flex w-32 md:w-36 lg:w-40 shrink-0 items-center justify-center">
                      <div className={`w-full h-full max-h-[180px] flex items-center justify-center ${illuPanelClasses[s.tone]}`}>
                        {s.illustration}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
