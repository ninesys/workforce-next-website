import SectionHeading from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Methodology"
          subtitle="A proven, structured approach that delivers results - not experiments."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-heading font-bold text-lg shrink-0">
                  {step.step}
                </div>
                {step.step < steps.length && (
                  <div className="hidden lg:block flex-1 h-px bg-primary-200" />
                )}
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
