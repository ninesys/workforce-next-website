import HeroSlider from "@/components/home/HeroSlider";
import ClientLogos from "@/components/home/ClientLogos";
import PainPointsBanner from "@/components/home/PainPointsBanner";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsCounter from "@/components/home/StatsCounter";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ClientLogos />
      <PainPointsBanner />
      <ServicesOverview />
      <StatsCounter />
      <CaseStudyPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
