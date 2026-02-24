import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServicePainPoint from "@/components/services/ServicePainPoint";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessSteps from "@/components/services/ProcessSteps";
import UseCases from "@/components/services/UseCases";
import TechStack from "@/components/services/TechStack";
import ServiceCTA from "@/components/services/ServiceCTA";

const service = services.find((s) => s.slug === "iot")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
};

export default function IoTPage() {
  return (
    <>
      <ServiceHero
        badge="CLOUDIQ PLATFORM"
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
        title="Launch Your IoT Platform"
        description="From pilot to production with CloudIQ. Vendor-agnostic, real-time analytics, enterprise security — built to scale with your business."
      />
    </>
  );
}
