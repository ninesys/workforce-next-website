import Button from "@/components/ui/Button";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export default function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="gradient-primary py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="white" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
