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
  title: "Hire Remote Dedicated Developers from India | Workforce Next",
  description:
    "Hire dedicated AI, data, frontend and backend developers from India. Context-matched by SethAI. 48-hour matching, 1-week paid trial, zero recruitment fees.",
  keywords: [
    "hire remote dedicated developers",
    "hire AI developers India",
    "dedicated remote engineering team",
    "offshore developer retention",
    "hire LangChain developers",
    "AI staff augmentation India",
    "remote development team India",
    "vibe code engineer hire",
    "cloud cost optimisation engineer",
    "SethAI AI recruiter",
    "product engineers India",
    "context-first developer matching",
    "hire dedicated developers India",
  ],
  alternates: {
    canonical: "https://workforcenext.in",
  },
  openGraph: {
    ...ogDefaults("/"),
    images: ["/images/og-default.png"],
    title: "Hire Remote Dedicated Developers from India | Workforce Next",
    description:
      "Hire dedicated AI, data, frontend and backend developers from India. Context-matched by SethAI. 48-hour matching, zero recruitment fees.",
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
