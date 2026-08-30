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
            href="/products/seth-ai-recruiter/"
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

          {/* India Handled (managed offshore team) */}
          <Link
            href="/india-handled/"
            className="group p-6 sm:p-8 md:p-10 rounded-xl bg-white dark:bg-dark-800 border border-dark-50 dark:border-dark-700 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-500/15 flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              India Handled
            </h3>
            <p className="mt-3 text-dark-400 dark:text-dark-300 leading-relaxed text-sm sm:text-base">
              The operational model behind our IT services. Hire a managed
              offshore development team from India. You direct the engineering
              work. We handle contracting, employment, and operations so none
              of it sits on you.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 dark:text-primary-400">
              See how it works
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
