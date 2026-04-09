export default function PullQuote() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 py-16 sm:py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-primary-900/20" />
      <div className="container-custom relative">
        <blockquote className="max-w-4xl mx-auto text-center px-2">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-500/10 mb-6 sm:mb-8">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark-100 leading-snug">
            A developer who&apos;s been on your product for 12 months is worth
            three times a fresh hire of equal skill.{" "}
            <span className="text-primary-400">Not because of code. Because of context.</span>
          </p>
          <footer className="mt-6 sm:mt-8 text-dark-300 text-sm font-medium">
            The thinking behind every team we build.
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
