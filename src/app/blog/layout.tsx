import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Hiring, Engineering & Remote Team Insights",
  description:
    "Practical insights on hiring dedicated developers from India, vibe coding, context-first matching, offshore team retention, and building remote engineering teams that stay.",
  keywords: [
    "hire developers India blog",
    "remote engineering team insights",
    "offshore developer retention tips",
    "vibe coding guide",
    "context-first matching explained",
    "dedicated developer vs freelancer",
    "AI developer hiring guide",
    "offshore development best practices",
  ],
  openGraph: {
    title: "Blog - Workforce Next",
    description:
      "Practical insights on hiring developers, building remote teams, and engineering leadership.",
  },
  alternates: {
    canonical: "https://workforcenext.in/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
