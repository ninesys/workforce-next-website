import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Hero from "@/components/home/Hero";
import EntityDefinition from "@/components/home/EntityDefinition";
import StatBlock from "@/components/home/StatBlock";
import PullQuote from "@/components/home/PullQuote";
import PainVoices from "@/components/home/PainVoices";
import Specialisms from "@/components/home/Specialisms";
import RetentionMechanisms from "@/components/home/RetentionMechanisms";
import ServicesBento from "@/components/home/ServicesBento";
import CTASection from "@/components/home/CTASection";
import { generateHomepageHowToSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "AI, Automation & Workflow Experts | Consulting + Dedicated Developers | Workforce Next",
  description:
    "AI automation, n8n workflows, data pipelines, and dedicated AI developers from India. Consulting and delivery from one partner. 48-hour matching, zero recruitment fees.",
  keywords: [
    "AI automation services",
    "AI automation agency",
    "AI and automation consulting",
    "workflow automation consulting",
    "AI workflow automation company",
    "hire AI automation experts",
    "n8n automation consultants",
    "hire dedicated AI developers",
    "AI agents development",
    "data engineering services India",
    "hire MLOps engineers",
    "AI consulting services India",
    "dedicated remote AI team",
  ],
  alternates: {
    canonical: "https://workforcenext.in",
  },
  openGraph: {
    ...ogDefaults("/"),
    images: ["/images/og-default.png"],
    title: "AI, Automation & Workflow Experts | Consulting + Dedicated Developers",
    description:
      "AI automation, n8n workflows, data pipelines, and dedicated AI developers from India. Consulting and delivery from one partner.",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHomepageHowToSchema()),
        }}
      />
      <Hero />
      <EntityDefinition />
      <StatBlock />
      <PullQuote />
      <PainVoices />
      <Specialisms />
      <RetentionMechanisms />
      <ServicesBento />
      <CTASection />
    </>
  );
}
