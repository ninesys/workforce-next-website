import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary-100/30 dark:bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container-custom relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/60 dark:bg-primary-500/15 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            AI-era engineering teams from India
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-dark-900 dark:text-dark-50">
            Your remote team.
            <br />
            <span className="text-primary-500">Built to stay.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-dark-400 dark:text-dark-300 leading-relaxed max-w-2xl">
            Stop switching tech partners every few months. We put together
            dedicated engineering teams that actually stick around, matched by
            SethAI for the right fit and kept together through compounding
            context.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Build my team
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>

        {/* Segment selector */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
          {[
            {
              href: "/for/founders",
              label: "Building your first AI product?",
              sublabel: "MVP Sprint: 4 weeks, fixed price",
            },
            {
              href: "/for/startups",
              label: "Scaling your engineering team?",
              sublabel: "Engineering Pod: 3 to 8 developers",
            },
            {
              href: "/for/enterprise",
              label: "Need a specialist or consultant?",
              sublabel: "Free 2-hour architecture assessment",
            },
          ].map((seg) => (
            <Link
              key={seg.href}
              href={seg.href}
              className="group p-4 sm:p-5 bg-white dark:bg-dark-800 rounded-xl border border-dark-100 dark:border-dark-700 shadow-card hover:shadow-hover hover:border-primary-300 dark:hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-sm font-semibold text-dark-700 dark:text-dark-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {seg.label}
              </p>
              <p className="mt-1.5 text-xs text-dark-300 dark:text-dark-400">
                {seg.sublabel}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
