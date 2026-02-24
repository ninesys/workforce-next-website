import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function ServiceHero({ badge, title, description }: ServiceHeroProps) {
  return (
    <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl">
          <Badge variant="white" className="mb-6">
            {badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="white" size="lg">
              Get Started
            </Button>
            <Button href="/#case-studies" variant="ghost" size="lg">
              See Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
