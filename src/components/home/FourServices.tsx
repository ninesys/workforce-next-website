import Link from "next/link";

const services = [
  {
    num: "01",
    tag: "CONSULTING",
    title: "Product Development Consulting",
    line: "Architecture, stack, scope. We help you decide what to build and how.",
    href: "/consulting/it-consulting/",
    cta: "Talk to a consultant",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc1-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <rect x="8" y="14" width="48" height="36" rx="4" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <path d="M14 24h36M14 32h24M14 40h28" stroke="#146EF5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="40" r="8" fill="url(#svc1-g)" />
        <path d="M45 40l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "AUTOMATION",
    title: "AI Agents for Operations",
    line: "Workflows and AI agents that take repetitive ops off your team.",
    href: "/hire/automation-consultants/",
    cta: "Automate operations",
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
    num: "03",
    tag: "TALENT",
    title: "Dedicated Developers & QA",
    line: "Senior engineers and QA testers, embedded with your team in your timezone.",
    href: "/hire/fullstack-developers/",
    cta: "Build my team",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc3-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="24" r="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <circle cx="42" cy="24" r="6" fill="#E0EDFF" stroke="#022E5E" strokeWidth="2" />
        <circle cx="32" cy="36" r="6" fill="url(#svc3-g)" />
        <path d="M10 50c0-6 6-10 12-10s12 4 12 10M30 50c0-6 6-10 12-10s12 4 12 10" stroke="#022E5E" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "GROWTH",
    title: "AEO + GEO for Organic Growth",
    line: "Get cited by ChatGPT, Perplexity, Gemini. We make AI recommend your SaaS.",
    href: "/aeo-seo-for-saas/",
    cta: "Get cited by AI",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-full h-full">
        <defs>
          <linearGradient id="svc4-g" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#146EF5" />
            <stop offset="100%" stopColor="#022E5E" />
          </linearGradient>
        </defs>
        <path d="M10 50l14-14 8 8 18-18" stroke="#022E5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M40 26h10v10" stroke="#022E5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="32" cy="14" r="6" fill="url(#svc4-g)" />
        <path d="M30 14h4M32 12v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="36" r="3" fill="#146EF5" />
        <circle cx="50" cy="26" r="3" fill="#146EF5" />
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
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            What we do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Four services. One partner.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dark-400 dark:text-dark-300">
            Everything a SaaS needs to ship, scale, and get found.
          </p>
        </div>

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
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {s.title}
                  </h3>
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
