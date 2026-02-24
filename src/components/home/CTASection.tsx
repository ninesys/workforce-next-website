import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="gradient-primary py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
          Ready to Transform Your Operations?
        </h2>
        <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          Join 150+ enterprises that have accelerated their business with
          intelligent AI agents, seamless automation, and scalable IoT. Let&apos;s
          talk about what we can build together.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Schedule a Consultation
          </Button>
          <Button href="/#services" variant="ghost" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
