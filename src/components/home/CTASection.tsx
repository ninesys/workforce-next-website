import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 py-16 sm:py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-900 to-dark-900" />
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="container-custom relative text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-100">
          Build the team you keep.
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-dark-300 max-w-xl mx-auto">
          One-week paid trial. No recruitment fee. 48-hour matching.
        </p>
        <div className="mt-6 sm:mt-8">
          <Button href="/contact" variant="primary" size="lg">
            Start building
          </Button>
        </div>
      </div>
    </section>
  );
}
