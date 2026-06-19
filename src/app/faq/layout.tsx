import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import { faqs } from "@/data/faqs";
import { generateFAQPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "FAQ - Hire Developers India, SethAI, Vibe Coding, Remote Teams",
  description:
    "Answers to common questions about hiring dedicated developers from India, how SethAI matches candidates by context, vibe coding vs traditional engineering, engagement models like MVP Sprint and Engineering Pod, and how remote teams work at Workforce Next.",
  keywords: [
    "hire developers India FAQ",
    "SethAI AI recruiter FAQ",
    "dedicated developer cost India",
    "vibe coding explained",
    "offshore developer questions",
    "context-first matching",
    "remote engineering team FAQ",
    "MVP Sprint FAQ",
    "Engineering Pod FAQ",
  ],
  openGraph: {
    ...ogDefaults("/faq/"),
    images: ["/images/og-default.png"],
    title: "FAQ - Hire Developers, SethAI, Remote Teams",
    description:
      "Answers about hiring dedicated developers from India, SethAI matching, vibe coding, engagement models, and remote team management.",
  },
  alternates: {
    canonical: "https://wfnext.com/faq/",
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
