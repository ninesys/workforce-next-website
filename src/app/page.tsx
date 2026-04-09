import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatBlock from "@/components/home/StatBlock";
import PullQuote from "@/components/home/PullQuote";
import PainVoices from "@/components/home/PainVoices";
import Specialisms from "@/components/home/Specialisms";
import RetentionMechanisms from "@/components/home/RetentionMechanisms";
import ProductsRow from "@/components/home/ProductsRow";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  keywords: [
    "hire AI developers India",
    "dedicated remote engineering team",
    "offshore developer retention",
    "hire LangChain developers",
    "AI staff augmentation",
    "remote development team India",
    "vibe code engineer",
    "cloud cost optimisation engineer",
    "SethAI recruiter",
    "Workforce Next",
  ],
  alternates: {
    canonical: "https://workforcenext.in",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatBlock />
      <PullQuote />
      <PainVoices />
      <Specialisms />
      <RetentionMechanisms />
      <ProductsRow />
      <CTASection />
    </>
  );
}
