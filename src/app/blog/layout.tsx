import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI, Automation & IoT Insights",
  description:
    "Expert insights on agentic AI, workflow automation, and IoT cloud platforms. Practical guides, industry analysis, and case studies from the Workforce Next team.",
  keywords: [
    "AI automation blog",
    "agentic AI insights",
    "workflow automation guides",
    "IoT cloud platform articles",
  ],
  openGraph: {
    title: "Blog - AI, Automation & IoT Insights",
    description:
      "Expert insights on agentic AI, workflow automation, and IoT cloud platforms.",
  },
  alternates: {
    canonical: "https://workforcenext.in/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
