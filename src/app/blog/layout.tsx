import { Metadata } from "next";

import { ogDefaults } from "@/data/siteMetadata";
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
    ...ogDefaults("/blog/"),
    images: ["/images/og-default.png"],
    title: "Blog - Workforce Next",
    description:
      "Practical insights on hiring developers, building remote teams, and engineering leadership.",
  },
  alternates: {
    canonical: "https://workforcenext.in/blog/",
  },
};

const blogIndexFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a senior developer from India cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Indian developers cost USD 5,000 to 8,500 per month all-in (salary, benefits, equipment, and partner team management). Fully loaded equivalent in the US runs USD 14,000 to 19,000 per month, or USD 220,000 to 290,000 per year. The 60 to 70% cost delta is geography, not a quality gap.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to hire a dedicated developer from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a vetted partner, expect three to five matched profiles within 5 business days, paid trials starting in week 2, and a confirmed hire by week 3 or 4. Going direct on LinkedIn or job boards typically takes 8 to 12 weeks, most of which is filtering noise.",
      },
    },
    {
      "@type": "Question",
      name: "What time zones do Indian developers work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India Standard Time is UTC+5:30. That gives a 4 to 5 hour overlap with the UK and continental Europe, a 2 to 3 hour overlap with the US East Coast morning, and a 5 hour overlap with Sydney afternoon. Most teams run a daily standup at 9 AM your time and let engineers async the rest of the day.",
      },
    },
    {
      "@type": "Question",
      name: "Dedicated developer or freelancer for ongoing product work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For continuous product work, dedicated developers beat freelancers on quality, accountability, and continuity. Freelancers fit short fixed-scope projects. The total-cost-of-ownership comparison (including ramp-up, churn, and rework) usually puts a dedicated India developer at lower true cost than a US freelancer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire developers from India for a short-term project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Useful engagements start at four to eight weeks; below that, ramp-up overhead outweighs throughput. We run short-term engagements regularly for European clients on production deadlines, where the timezone overlap with India makes async delivery practical.",
      },
    },
    {
      "@type": "Question",
      name: "What roles do you most commonly staff from India in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Backend (Node.js, Python, Go), frontend (React.js, Next.js, TypeScript), mobile (React Native, Flutter, native iOS, native Android), AI engineering (RAG, LangChain, MCP, vector databases), DevOps and SRE, and QA automation (Playwright, Cypress, Appium, Maestro). Each role has its own pillar page and most have a hiring guide blog post.",
      },
    },
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexFaqLd) }}
      />
      {children}
    </>
  );
}
