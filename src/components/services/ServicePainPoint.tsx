interface ServicePainPointProps {
  stat: string;
  description: string;
}

export default function ServicePainPoint({ stat, description }: ServicePainPointProps) {
  return (
    <section className="bg-primary-950 py-12 md:py-16">
      <div className="container-custom flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="text-5xl md:text-6xl font-heading font-bold text-accent-400 shrink-0">
          {stat}
        </div>
        <p className="text-lg text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
