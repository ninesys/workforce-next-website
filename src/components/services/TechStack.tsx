import SectionHeading from "@/components/ui/SectionHeading";

interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <section id="tech" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          title="Technology Stack"
          subtitle="We build on proven, industry-leading platforms and frameworks."
        />
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-5 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-accent-300 hover:text-accent-600 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
