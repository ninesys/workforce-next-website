import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "Gaurav - Founder and Solution Architect",
  description:
    "Gaurav is the founder of Workforce Next and a solution architect with 20 years of experience in enterprise software. Based in Noida, India. He built SethAI to fix how teams are hired.",
  keywords: [
    "Gaurav Workforce Next",
    "Workforce Next founder",
    "solution architect India",
    "SethAI creator",
    "Workforce Next leadership",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Gaurav - Founder and Solution Architect",
    description:
      "Gaurav is the founder of Workforce Next with 20 years in solution architecture and enterprise software.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/about/gaurav/`,
  },
};

export default function GauravPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "About", url: `${siteMetadata.url}/about/` },
    { name: "Gaurav", url: `${siteMetadata.url}/about/gaurav/` },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaurav",
    jobTitle: "Founder and Solution Architect",
    worksFor: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
    },
    url: `${siteMetadata.url}/about/gaurav/`,
    sameAs: [
      "https://www.linkedin.com/in/post2seth",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="shrink-0">
              <Image
                src="/images/gaurav.jpeg"
                alt="Gaurav, Founder and Solution Architect at Workforce Next"
                width={180}
                height={180}
                className="rounded-2xl object-cover w-36 h-36 md:w-44 md:h-44 shadow-card"
                priority
              />
            </div>
            <div>
              <Badge variant="primary" className="mb-4">
                FOUNDER
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
                Gaurav
              </h1>
              <p className="mt-2 text-lg text-primary-500 font-semibold">
                Founder and Solution Architect
              </p>
              <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
                20 years in solution architecture and enterprise software. Based in
                Noida, India. Building Workforce Next to solve the retention problem
                that nobody else wants to talk about.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="https://www.linkedin.com/in/post2seth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn profile
            </Link>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Background
          </h2>
          <div className="space-y-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            <p>
              Gaurav has spent two decades building enterprise software systems
              and leading engineering teams. His career spans solution
              architecture, technical consulting, and hands-on development across
              industries including fintech, logistics, and healthcare.
            </p>
            <p>
              Before founding Workforce Next, he worked with companies that
              struggled to keep their remote teams intact. Developers would
              leave, context would evaporate, and projects would stall. The
              hiring process was always the same: screen for skills, ignore
              everything else, and hope for the best.
            </p>
            <p>
              That experience shaped how Workforce Next operates today. Every
              process, from screening to onboarding to retention, is designed to
              solve the problems Gaurav saw firsthand over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* Why I built SethAI */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why I built SethAI
          </h2>
          <div className="space-y-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            <p>
              Traditional hiring screens for skills. A developer passes a coding
              test, answers some system design questions, and gets hired. Three
              months later, they leave for a slightly higher offer. The cycle
              repeats.
            </p>
            <p>
              The problem is not skills. The problem is fit. Does this person
              actually want to work on your kind of product? Do they care about
              the domain? Will they stick around when the work gets hard and
              unglamorous?
            </p>
            <p>
              I built SethAI to answer those questions before the first
              interview. SethAI screens for ownership mindset, career alignment,
              and communication reliability. It looks at patterns that predict
              whether someone will stay for two years, not just two months.
            </p>
            <p>
              The result is a one-page match report that tells hiring managers
              what they actually need to know. Not just &ldquo;can this person code&rdquo;
              but &ldquo;will this person care about your product.&rdquo;
            </p>
            <p>
              It is not perfect. No screening process is. But our retention
              numbers are significantly better than the industry average, and
              that is the only metric that matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Want to talk?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            If you are building a product and need engineers who will stay,
            Gaurav would be happy to discuss how Workforce Next can help.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
