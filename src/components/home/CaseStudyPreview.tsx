import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyPreview() {
  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Proven Results Across Industries"
          subtitle="Real outcomes from real enterprises. Here's how we've helped organizations transform their operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index}>
              <Badge variant="accent" className="mb-4">
                {study.industry}
              </Badge>
              <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                Challenge
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {study.challenge}
              </p>
              <h3 className="text-lg font-heading font-semibold text-slate-900 mt-4 mb-3">
                Solution
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {study.solution}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-2xl font-heading font-bold text-accent-500">
                  {study.metric}
                </div>
                <p className="text-slate-500 text-sm mt-1">{study.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
