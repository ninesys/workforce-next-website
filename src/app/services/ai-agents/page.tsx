import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServicePainPoint from "@/components/services/ServicePainPoint";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessSteps from "@/components/services/ProcessSteps";
import UseCases from "@/components/services/UseCases";
import TechStack from "@/components/services/TechStack";
import ServiceCTA from "@/components/services/ServiceCTA";
import { generateServiceSchema } from "@/lib/jsonLd";

const service = services.find((s) => s.slug === "ai-agents")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
  alternates: {
    canonical: `https://workforcenext.in/services/${service.slug}`,
  },
};

export default function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />
      <ServiceHero
        badge="AI AGENTS"
        title={service.heroTitle}
        description={service.heroDescription}
      />
      <ServicePainPoint
        stat={service.painPointStat}
        description={service.painPointDescription}
      />
      <FeatureGrid features={service.features} />
      <ProcessSteps steps={service.processSteps} />
      <UseCases useCases={service.useCases} />
      <TechStack technologies={service.techStack} />
      <ServiceCTA
        title="Start Your AI Agent Journey"
        description="From assessment to production in 90 days. Let us show you how AI agents can transform your operations with measurable ROI."
      />
    </>
  );
}
