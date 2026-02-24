import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { companyStats } from "@/data/stats";

export default function StatsCounter() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {companyStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
