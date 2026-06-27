import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Hero from "@/components/home/Hero";
import EntityDefinition from "@/components/home/EntityDefinition";
import FourServices from "@/components/home/FourServices";
import HowWeFit from "@/components/home/HowWeFit";
import StatBlock from "@/components/home/StatBlock";
import PullQuote from "@/components/home/PullQuote";
import RetentionMechanisms from "@/components/home/RetentionMechanisms";
import CTASection from "@/components/home/CTASection";
import { generateHomepageHowToSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Hire AI Agents or Expert Talent for Your Projects",
  description:
    "Done-for-you AI agents or human talent: consulting, AI SDR outreach, AI developers, data engineers, and HR agents for US and Canada founders.",
  keywords: [
    "AI automation agency for founders",
    "AI automation agency for SaaS",
    "AI automation agency",
    "AI agents and workflow automation",
    "product development consulting",
    "AI agents for operations",
    "hire dedicated developers",
    "QA testing team India",
    "AEO services",
    "GEO services",
    "SEO for SaaS startups",
    "AI development services SaaS",
    "workflow automation consultants",
  ],
  alternates: {
    canonical: "https://wfnext.com",
  },
  openGraph: {
    ...ogDefaults("/"),
    images: ["/images/og-default.png"],
    title: "Hire AI Agents or Expert Talent for Your Projects",
    description:
      "Done-for-you AI agents and remote experts: product consulting, AI SDR outreach, AI development, data engineering, and HR agents.",
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
      <FourServices />
      <HowWeFit />
      <StatBlock />
      <PullQuote />
      <RetentionMechanisms />
      <CTASection />
    </>
  );
}
