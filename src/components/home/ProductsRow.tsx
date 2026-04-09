import Link from "next/link";

export default function ProductsRow() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Our products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* SethAI Recruiter */}
          <Link
            href="/products/seth-ai-recruiter"
            className="group relative overflow-hidden p-6 sm:p-8 md:p-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-xs font-bold bg-white/20 rounded-full backdrop-blur-sm">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                SethAI Recruiter
              </h3>
              <p className="mt-3 text-white/80 leading-relaxed text-sm sm:text-base">
                Find and vet AI-era developers in 24 hours. No recruiters, no
                padded resumes, no one who&apos;ll leave in 3 months. SethAI screens
                for skills and longevity signals.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Join the waitlist
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Employee Productivity Intelligence */}
          <Link
            href="/products/employee-productivity-intelligence"
            className="group p-6 sm:p-8 md:p-10 rounded-xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-500/15 flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              Employee Productivity Intelligence
            </h3>
            <p className="mt-3 text-dark-400 dark:text-dark-300 leading-relaxed text-sm sm:text-base">
              Not surveillance. Clarity. See how your team works and help them
              work better. AI-driven productivity insights built for employee
              growth, not suspicion.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 dark:text-primary-400">
              Learn more
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
