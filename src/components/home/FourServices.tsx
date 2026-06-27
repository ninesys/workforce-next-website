import Link from "next/link";

const consulting = {
  tag: "01 · CONSULTING",
  title: "Product Development Consulting",
  line: "Shape what to build, the stack, and the scope before you spend. Fractional CTO, architecture review, MVP scoping.",
  href: "/consulting/it-consulting/",
  cta: "Talk to a consultant",
};

const services = [
  {
    num: "02",
    tag: "OUTBOUND",
    title: "AI SDR for Outreach",
    line: "An AI agent that researches accounts, writes outbound, books meetings, and learns from replies. You keep the qualified pipeline.",
    href: "/ai-sdr-outreach/",
    cta: "Hire an AI SDR",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc1-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <path d="M8 14h36l8 8v28H8z" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M44 14v8h8" stroke="#022E5E" strokeWidth="2" fill="none" />
        <path d="M14 30h24M14 36h20M14 42h22" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="42" r="8" fill="url(#svc1-g)" />
        <path d="M45 42l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "ENGINEERING",
    title: "AI Developers and Data Engineers",
    line: "Senior engineers who build production AI: models, RAG systems, agents, and the data pipelines feeding them. In your timezone.",
    href: "/ai-developers-who-build-ai/",
    cta: "Hire AI developers",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc2-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="22" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path
          d="M32 18v8M32 38v8M18 32h8M38 32h8M22 22l5.5 5.5M36.5 36.5l5.5 5.5M22 42l5.5-5.5M36.5 27.5l5.5-5.5"
          stroke="#146EF5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="6" fill="url(#svc2-g)" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "ANALYTICS",
    title: "Data Analytics and Engineering",
    line: "Analysts who turn messy data into dashboards, models, and decisions you can act on. Snowflake, dbt, Looker, Python.",
    href: "/hire-data-analysts-engineers/",
    cta: "Hire a data team",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc3-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <rect x="10" y="14" width="44" height="36" rx="4" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <rect x="18" y="32" width="6" height="12" fill="url(#svc3-g)" />
        <rect x="28" y="24" width="6" height="20" fill="url(#svc3-g)" />
        <rect x="38" y="18" width="6" height="26" fill="url(#svc3-g)" />
        <path d="M14 28l6-2 8-6 10 4 12-6" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "HR & RECRUITING",
    title: "AI Agent for HR and Recruiting",
    line: "An AI agent that screens resumes, runs first-round interviews, drafts offers, and keeps your ATS clean. Humans approve, AI executes.",
    href: "/ai-agent-hr-recruiting/",
    cta: "Hire the agent",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc4-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M10 44c0-7 5-12 12-12s12 5 12 12" stroke="#022E5E" strokeWidth="2" fill="none" />
        <circle cx="46" cy="38" r="10" fill="url(#svc4-g)" />
        <path d="M43 38l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FourServices() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30"
      />
      <div className="container-custom relative">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            What we do
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Five ways to put AI agents or human talent on your work.
          </p>
          <p className="mt-4 text-base sm:text-lg text-dark-400 dark:text-dark-300">
            Start with consulting. Add the offerings you need. One partner.
          </p>
        </div>

        {/* Consulting banner: lead offering */}
        <Link
          href={consulting.href}
          className="group relative block mb-6 md:mb-8 p-7 md:p-9 rounded-2xl bg-gradient-to-br from-primary-50 to-white dark:from-primary-500/10 dark:to-dark-800 border-2 border-primary-300 dark:border-primary-500/40 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-0.5 transition-all overflow-hidden"
        >
          <span
            aria-hidden
            className="absolute -top-4 -right-2 text-[140px] font-extrabold text-primary-100 dark:text-primary-500/10 leading-none select-none"
          >
            01
          </span>
          <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-primary-500 dark:text-primary-400 uppercase tracking-widest">
                {consulting.tag}
              </p>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {consulting.title}
              </h2>
              <p className="mt-3 text-base text-dark-500 dark:text-dark-300 leading-relaxed max-w-2xl">
                {consulting.line}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-500 dark:text-primary-400 whitespace-nowrap">
              {consulting.cta}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group relative p-7 md:p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Big background number */}
              <span
                aria-hidden
                className="absolute -top-4 -right-2 text-[140px] font-extrabold text-primary-50 dark:text-primary-500/5 leading-none select-none"
              >
                {s.num}
              </span>

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-500/10 p-3 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>

                {/* Copy */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-primary-500 dark:text-primary-400 uppercase tracking-widest">
                    {s.tag}
                  </p>
                  <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-dark-500 dark:text-dark-300 leading-relaxed">
                    {s.line}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary-500 dark:text-primary-400">
                    {s.cta}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
