import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { UseCase } from "@/types";

interface UseCasesProps {
  useCases: UseCase[];
}

export default function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Use Cases"
          subtitle="Real-world applications across industries. See how organizations like yours are driving results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index}>
              <Badge variant="primary" className="mb-3">
                {useCase.industry}
              </Badge>
              <h3 className="text-lg font-heading font-semibold text-slate-900">
                {useCase.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
