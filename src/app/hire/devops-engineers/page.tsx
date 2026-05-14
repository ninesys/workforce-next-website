import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire DevOps Engineers from India (AWS, Kubernetes, Terraform)",
  description:
    "Hire pre-vetted DevOps and platform engineers from India. AWS, Azure, GCP, Kubernetes, Terraform, CI/CD, and 24/7 SRE coverage on Follow-the-Sun model.",
  keywords: [
    "hire devops engineer India",
    "kubernetes engineer offshore",
    "terraform engineer India",
    "site reliability engineer India",
    "follow the sun SRE",
    "platform engineer India",
    "cloud devops India",
    "hire AWS engineer",
  ],
  openGraph: {
    ...ogDefaults("/hire/devops-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire DevOps Engineers from India",
    description:
      "Pre-vetted DevOps, SRE, and platform engineers. AWS, Kubernetes, Terraform. Follow-the-Sun coverage for US night shifts. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/devops-engineers/`,
  },
};

const skills = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Terraform",
  "Helm",
  "Argo CD",
  "GitHub Actions",
  "GitLab CI",
  "Datadog",
  "Grafana",
  "Prometheus",
  "OpenTelemetry",
  "Ansible",
  "Pulumi",
  "Docker",
];

const whyPoints = [
  {
    title: "24/7 Follow-the-Sun coverage",
    description:
      "An India-based pod handles your night shift so US engineers do not get paged at 3 a.m. Two pods on opposite hemispheres is cheaper and saner than one US team running themselves into the ground.",
  },
  {
    title: "Multi-cloud platform fluency",
    description:
      "AWS dominates our pipeline, with strong Azure and GCP depth where customers need it. We match engineers to your primary cloud rather than forcing breadth you do not need.",
  },
  {
    title: "Infrastructure as code by default",
    description:
      "Terraform, Pulumi, and GitOps patterns are first-class. No click-ops drift, no untracked production changes. Every change is reviewable and reversible by design.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "SethAI evaluates incident response history, on-call discipline, and cross-team communication. Platform work breaks at the worst time. You need someone who shows up calm and stays calm.",
  },
];

const responsibilities = [
  "Designing and operating production Kubernetes clusters on EKS, GKE, or AKS, including upgrades, networking, and multi-tenant patterns",
  "Writing and maintaining Terraform modules for reproducible infrastructure across environments and accounts",
  "Setting up CI/CD pipelines in GitHub Actions or GitLab CI with caching, parallelism, and proper secrets handling",
  "Managing on-call rotations, incident response, and post-incident reviews with PagerDuty or Opsgenie",
  "Building observability stacks: Datadog, Grafana, Prometheus, OpenTelemetry tracing, structured logging, and SLO dashboards",
  "Hardening cloud accounts: IAM least-privilege, VPC and network policy design, secrets management, audit logging",
  "Implementing GitOps with Argo CD or Flux for safe, declarative production deploys",
  "Running database operations: backups, restores, replication topology, point-in-time recovery, schema migration safety",
  "Setting up disaster recovery and tested runbooks rather than aspirational ones",
  "Owning the deployment platform end to end so product engineers ship without filing tickets",
];

const whenToHire = [
  {
    scenario: "You spend more than 30 hours of senior engineering time on infrastructure every month",
    recommendation: "Hire a dedicated DevOps engineer",
    reason:
      "At that level, infra is silently eating your most expensive engineer. A dedicated DevOps hire returns those 30 hours to product work and usually catches reliability issues before they become outages.",
  },
  {
    scenario: "Your team is on call but no one owns the platform",
    recommendation: "Hire an SRE on the Follow-the-Sun model",
    reason:
      "On-call without a clear platform owner is how teams burn out. A Follow-the-Sun SRE pod gives you 24/7 coverage and a single accountable owner for incident review and platform improvements.",
  },
  {
    scenario: "You have fewer than five services and a single AWS account",
    recommendation: "A senior backend engineer with infra fluency is enough",
    reason:
      "At that size, hiring a dedicated DevOps engineer is overkill. A senior backend engineer who can operate Terraform and read CloudWatch is usually the right call until complexity grows.",
  },
  {
    scenario: "You are preparing for SOC 2, ISO 27001, or HIPAA",
    recommendation: "Hire a DevOps engineer with compliance experience",
    reason:
      "Compliance is mostly a platform problem: audit trails, access control, change management, encryption, backup discipline. A DevOps engineer who has been through an audit before saves months of remediation.",
  },
];

const screeningSignals = [
  {
    signal: "Real production Kubernetes experience",
    detail:
      "We ask candidates to walk through a Kubernetes cluster upgrade they actually executed, including rollback plans and the surprises they hit. Strong candidates have stories. Weak ones quote the documentation.",
  },
  {
    signal: "Terraform module design instinct",
    detail:
      "We give candidates an existing Terraform layout and ask what they would refactor. Strong candidates spot brittle interfaces and missing variables before we mention them. Weak ones rearrange formatting.",
  },
  {
    signal: "Incident response track record",
    detail:
      "We ask about the last incident the candidate led. Strong candidates describe scope, blast radius, mitigation, and the post-incident change they shipped. Weak ones describe what someone else did.",
  },
  {
    signal: "IAM and security judgment",
    detail:
      "We screen for engineers who think in terms of blast radius and least privilege rather than wide-open service accounts. Single dimension: do they reduce permissions when they do not need them?",
  },
  {
    signal: "CI/CD design under cost and speed pressure",
    detail:
      "We ask candidates how they would speed up a slow CI pipeline without spending more on runners. Strong candidates think about caching, parallelism, and selective test execution. Weak ones suggest bigger machines.",
  },
  {
    signal: "Cross-team unblocking communication",
    detail:
      "DevOps work fails when engineers cannot explain tradeoffs to product or executives. We screen for clear writing and the ability to translate platform issues into business impact.",
  },
];

const engagementModels = [
  {
    name: "Audit and hardening",
    hours: "4 to 6 weeks",
    best: "Best for one-time platform reviews, security hardening, or pre-audit remediation. Ends with a clear roadmap and quick-win fixes.",
    includes:
      "Full platform audit, Terraform refactor, CI/CD review, incident response gap analysis, executive-ready summary.",
  },
  {
    name: "Follow-the-Sun SRE pod",
    hours: "24/7 coverage",
    best: "Best for US-based teams with on-call burnout. India-based engineers handle the night shift so your team sleeps.",
    includes:
      "Dedicated SRE pod, on-call rotation, runbook ownership, incident response, post-incident reviews, monthly platform reports.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams with a real platform footprint and ongoing reliability work that needs a single accountable owner.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, quarterly executive summaries.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your platform context",
    description:
      "Tell us about your cloud footprint, team size, current pain points, and whether you need full-time, audit, or Follow-the-Sun.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for production platform depth, incident track record, and communication. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview the shortlist",
    description:
      "Talk to candidates directly. Walk through your existing infrastructure and see how they think about it in real time.",
  },
  {
    step: "04",
    title: "Start with a paid trial week",
    description:
      "Real work on your actual platform. If the engineer is the right fit, the engagement continues. If not, we rematch.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a DevOps engineer from India?",
    answer:
      "Full-time senior DevOps and SRE engineers in India typically cost between 6,000 and 11,000 USD per month, all-in to the client. Pricing depends on stack depth, multi-cloud requirements, and whether the engagement includes on-call coverage. Follow-the-Sun pods are quoted separately because they involve at least two engineers per timezone block. The full pricing breakdown for senior India hires is in our senior Indian developer salary 2026 post.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What is the difference between DevOps, SRE, and platform engineering?",
    answer:
      "DevOps engineers focus on the build, deploy, and infrastructure-as-code pipeline. SREs focus on production reliability: SLOs, incident response, capacity planning, and on-call. Platform engineers build the internal platform that other engineers use to ship without filing tickets. The day-to-day overlap is real, especially at smaller companies where one engineer wears all three hats. We match engineers to whichever framing fits your org.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How does the Follow-the-Sun SRE model actually work?",
    answer:
      "Two pods on opposite sides of the world share on-call coverage. The US pod runs the day shift in US time, the India pod runs the night shift, and a documented handover happens at the boundary every day. Incident ownership stays with whichever pod is on shift, with the other pod available for escalation if the incident grows. The economics are simple: two pods cost less than one US team running 24/7, and on-call burnout drops sharply.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your engineers work across AWS, Azure, and GCP?",
    answer:
      "Yes. Most of our DevOps engineers have production experience on at least two major clouds. AWS is the most common primary, with Azure strong in regulated and enterprise customers and GCP common in data and ML-heavy workloads. We match engineers to your primary cloud rather than insisting on artificial multi-cloud breadth.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can a DevOps engineer help with SOC 2, ISO 27001, or HIPAA?",
    answer:
      "Yes. Compliance is mostly a platform problem: audit trails, access control, change management, encryption at rest and in transit, backup and restore discipline. We have engineers who have been through SOC 2 Type II audits, ISO 27001, and HIPAA-aligned environments. They know what auditors actually ask for and what shortcuts get flagged.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How fast can you place a DevOps engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. For Follow-the-Sun pods, the timeline is similar because we maintain a pre-screened SRE bench. Audit engagements can often start within 3 to 5 business days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireDevOpsEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire DevOps Engineers from India",
    "Hire pre-vetted DevOps, SRE, and platform engineers from India. AWS, Azure, GCP, Kubernetes, Terraform, CI/CD, and 24/7 Follow-the-Sun coverage. SethAI-screened.",
    `${siteMetadata.url}/hire/devops-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "DevOps Engineers",
      url: `${siteMetadata.url}/hire/devops-engineers/`,
    },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            HIRE DEVOPS ENGINEER
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire DevOps Engineers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted DevOps, SRE, and platform engineers across AWS, Azure,
            GCP, Kubernetes, and Terraform. Follow-the-Sun pods give US teams
            24/7 coverage without burnout. Screened by SethAI for technical
            depth and incident response track record.
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

      {/* Intro */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why US companies are outsourcing DevOps in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              The fully loaded cost of a senior US DevOps lead now runs
              $220,000 to $300,000 a year. For most mid-market companies, that
              is more than they can justify for a single hire, especially when
              the role often involves quiet weeks punctuated by 3 a.m. pages.
              The math has been pushing platform work offshore for two years,
              and 2026 is the year it became the default play rather than the
              exception.
            </p>
            <p>
              The other driver is on-call burnout. A US-only team carrying 24/7
              coverage for a critical platform burns out predictably. The
              Follow-the-Sun model splits the day across two hemispheres so
              every engineer sleeps in their own bed. The savings are real but
              the retention story is bigger: teams that adopt Follow-the-Sun
              hold on to senior engineers significantly longer than teams that
              do not.
            </p>
            <p>
              Every engineer we place is screened by SethAI for production
              platform depth, incident track record, and the ability to
              communicate platform tradeoffs to product and executive
              stakeholders. The shortlist you receive is not filtered on
              certification keywords. It is evaluated on real production
              experience and the signals that predict whether someone can keep
              your platform calm.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire DevOps engineers from Workforce Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a DevOps engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire a
            DevOps or SRE engineer through Workforce Next, here is the work
            they take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to hire */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Do you actually need a DevOps engineer yet?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every team is ready for a dedicated platform hire. Here is how
            we help customers decide.
          </p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div
                key={item.scenario}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">
                  {item.scenario}
                </h3>
                <p className="text-sm font-bold text-primary-500 mb-3">
                  {item.recommendation}
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">
            Skills we screen for
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-800 dark:text-dark-100 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div
                key={item.signal}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.signal}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our DevOps and SRE engineers. Most
            customers start with an audit, then move to a Follow-the-Sun pod
            or full-time hire based on what the audit surfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col"
              >
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">
                  {model.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary-500">
                  {model.hours}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {model.best}
                </p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">
                  {model.includes}
                </p>
              </div>
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
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring DevOps engineers
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.answer}
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
            Ready to fix your platform?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your stack and on-call pain. We will match you with a
            DevOps or SRE engineer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
