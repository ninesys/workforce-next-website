import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 min-h-screen flex items-center pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 lg:pb-0">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary-100/30 dark:bg-primary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Hero figure — bottom-anchored to section edge */}
      <div className="hidden lg:block absolute bottom-0 right-[8%] xl:right-[12%] 2xl:right-[16%] h-[88vh] max-h-[900px] pointer-events-none z-10">
        {/* Soft radial halo behind the model, centered on her head */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-15%] -translate-x-1/2 w-[200%] aspect-square rounded-full -z-10 bg-[radial-gradient(circle,rgba(186,230,253,0.65)_0%,rgba(186,230,253,0.38)_30%,rgba(186,230,253,0.15)_55%,rgba(186,230,253,0)_75%)] dark:bg-[radial-gradient(circle,rgba(125,211,252,0.32)_0%,rgba(125,211,252,0.18)_35%,rgba(125,211,252,0.07)_55%,rgba(125,211,252,0)_75%)] blur-3xl"
        />
        <Image
          src="/images/hero-image.png"
          alt="Workforce Next team member ready to plug into your engineering workflow"
          width={384}
          height={745}
          priority
          sizes="(max-width: 1024px) 0px, 45vh"
          className="relative h-full w-auto object-contain object-bottom"
        />
      </div>

      <div className="container-custom relative w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/60 dark:bg-primary-500/15 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Built for US &amp; Canada founders
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-dark-900 dark:text-dark-50">
              Hire AI Agents or Human Talent
              <br />
              <span className="block mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500">
                to Execute Your Projects.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-dark-400 dark:text-dark-300 leading-relaxed max-w-2xl">
              Done-for-you AI agents and remote experts that ship the work, not
              the slide deck. Start with product consulting, then hire an AI
              agent or remote expert: an AI SDR for outreach, AI developers and
              data engineers, or an AI agent for HR and recruiting.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Hire AI or talent
              </Button>
              <Button href="/how-we-work" variant="outline" size="lg">
                See how it works
              </Button>
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
        </div>
      </div>
    </section>
  );
}
