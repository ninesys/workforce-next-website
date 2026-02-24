import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServicePainPoint from "@/components/services/ServicePainPoint";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessSteps from "@/components/services/ProcessSteps";
import UseCases from "@/components/services/UseCases";
import TechStack from "@/components/services/TechStack";
import ServiceCTA from "@/components/services/ServiceCTA";

const service = services.find((s) => s.slug === "automation")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
};

export default function AutomationPage() {
  return (
    <>
      <ServiceHero
        badge="AUTOMATION"
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
        title="Automate Your Workflows Today"
        description="Stop wasting time on manual processes. We'll map your workflows, build the automation, and integrate with your existing stack."
      />
    </>
  );
}
