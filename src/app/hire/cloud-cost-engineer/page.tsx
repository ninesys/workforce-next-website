import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "Hire a Cloud Cost Optimisation Engineer | Workforce Next",
  description:
    "Hire a FinOps specialist who reduces your cloud spend. AWS Cost Explorer, Azure Advisor, GCP billing, Kubernetes rightsizing, spot instances, and Terraform cost estimation.",
  keywords: [
    "cloud cost optimisation engineer",
    "FinOps engineer India",
    "AWS cost reduction",
    "cloud cost optimization",
    "Kubernetes rightsizing",
    "cloud spend reduction",
    "reserved instances optimization",
    "Terraform cost estimation",
  ],
  openGraph: {
    title: "Hire a Cloud Cost Optimisation Engineer | Workforce Next",
    description:
      "Hire a FinOps specialist who reduces your cloud spend. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/cloud-cost-engineer`,
  },
};

const skills = [
  "AWS Cost Explorer",
  "Azure Advisor",
  "GCP Billing",
  "Kubernetes Rightsizing",
  "Spot Instances",
  "Reserved Instances",
  "Terraform Cost Estimation",
];

const whyPoints = [
  {
    title: "Engineers who pay for themselves",
    description:
      "A good cloud cost engineer saves 30-60% on your monthly cloud bill. The ROI is measurable from month one. This is not a nice-to-have role.",
  },
  {
    title: "Multi-cloud FinOps expertise",
    description:
      "AWS, Azure, GCP. Our engineers work across all major cloud providers and understand the pricing models, discount programs, and cost levers of each one.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. Cloud cost work requires deep context. You need someone who stays.",
  },
  {
    title: "Infrastructure and code-level optimization",
    description:
      "Our engineers go beyond dashboards. They rightsize Kubernetes clusters, optimize data transfer, refactor expensive queries, and implement cost-aware architecture patterns.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your cloud providers, monthly spend, and where you suspect waste.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for FinOps depth, infrastructure knowledge, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their approach to cost audits and their understanding of your cloud architecture.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the engineer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

export default function HireCloudCostEngineerPage() {
  const serviceSchema = generateServiceSchema(
    "Hire a Cloud Cost Optimisation Engineer",
    "Hire a FinOps specialist who reduces your cloud spend. AWS, Azure, GCP cost optimization, Kubernetes rightsizing, and Terraform cost estimation.",
    `${siteMetadata.url}/hire/cloud-cost-engineer`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire` },
    {
      name: "Cloud Cost Engineer",
      url: `${siteMetadata.url}/hire/cloud-cost-engineer`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            NEW ROLE
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire a Cloud Cost Optimisation Engineer
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Your cloud bill grows every month but nobody owns it. A dedicated
            FinOps engineer finds the waste, fixes the architecture, and keeps
            costs under control.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start hiring
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              How we work
            </Button>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why you need a cloud cost optimisation engineer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-dark-900 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Stop overpaying for cloud
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your cloud setup and we will match you with a FinOps
            engineer who pays for themselves within the first month.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
