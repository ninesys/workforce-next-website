import { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { generateFAQPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "FAQ - AI Agents, Workflow Automation & IoT Cloud Platform",
  description:
    "Get answers to frequently asked questions about agentic AI, enterprise AI agents, workflow automation, RPA, IoT cloud platforms, edge computing, and predictive maintenance.",
  keywords: [
    "agentic AI FAQ",
    "workflow automation FAQ",
    "IoT cloud platform FAQ",
    "enterprise AI questions",
    "business process automation questions",
  ],
  openGraph: {
    title: "FAQ - AI Agents, Workflow Automation & IoT Cloud Platform",
    description:
      "Get answers to frequently asked questions about agentic AI, workflow automation, and IoT cloud platforms.",
  },
  alternates: {
    canonical: "https://workforcenext.in/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQPageSchema(faqs)),
        }}
      />
      {children}
    </>
  );
}
