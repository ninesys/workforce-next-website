import Link from "next/link";

const proofPoints = [
  {
    date: "Since 2020",
    title: "Running dedicated engineering teams",
    description:
      "We started Workforce Next in Gurugram in 2020, matching founders and startups with dedicated developers, data engineers, and QA testers who stay on a product for the long haul.",
  },
  {
    date: "August 2026",
    title: "Published our vibe-code hardening checklist",
    description:
      "After auditing founder codebases built with Cursor, Claude Code, and similar tools, we wrote up the exact production checklist we run: rate limiting, bot protection, and scalable architecture.",
    link: { href: "/blog/vibe-code-security-hardening-production-ready-2026/", label: "Read the checklist" },
  },
  {
    date: "This year",
    title: "Added a dedicated vibe-code engineering role",
    description:
      "We built out a Vibe-Code Optimisation Engineer specialism because founders kept showing up with the same gap: a working app that was never hardened or architected to scale.",
    link: { href: "/hire/vibe-code-engineer/", label: "See the role" },
  },
];

export default function ProofPoints() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-primary-50/50 dark:bg-dark-800/60 border-y border-primary-100 dark:border-dark-700">
      <div className="container-custom">
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300 text-xs font-bold uppercase tracking-wide rounded-full mb-4">
            What we&apos;ve actually shipped
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Not a pitch deck. A running practice.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-primary-500">
                {point.date}
              </span>
              <h3 className="mt-2 font-bold text-dark-900 dark:text-dark-50 leading-snug">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed flex-1">
                {point.description}
              </p>
              {point.link && (
                <Link
                  href={point.link.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-500 hover:underline"
                >
                  {point.link.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
