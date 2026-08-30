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
  title: "Hire AWS Developers from India",
  description:
    "Hire pre-vetted AWS developers from India. ECS, EKS, Lambda, RDS, S3, IaC with Terraform/CDK, observability, FinOps. AWS Solutions Architect certified. SethAI-screened.",
  keywords: [
    "hire AWS developers",
    "hire AWS developers India",
    "AWS engineers India",
    "AWS Solutions Architect",
    "AWS Lambda developers",
    "AWS Terraform CDK engineers",
    "AWS cloud engineer India",
    "AWS DevOps engineers",
    "AWS staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/aws-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire AWS Developers from India",
    description:
      "Pre-vetted AWS engineers for ECS, EKS, Lambda, IaC, and FinOps. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/aws-developers/`,
  },
};

const skills = [
  "ECS / Fargate",
  "EKS / Kubernetes",
  "Lambda",
  "API Gateway",
  "Step Functions",
  "RDS / Aurora",
  "DynamoDB",
  "S3 / CloudFront",
  "Terraform",
  "AWS CDK",
  "CloudWatch / X-Ray",
  "IAM / SCP",
  "EventBridge",
  "Kinesis / MSK",
];

const whyPoints = [
  {
    title: "Certified AWS engineers, not cloud generalists",
    description:
      "Our engineers hold AWS Solutions Architect, DevOps Engineer, or Specialty certifications and have shipped production workloads at scale. Not generic devs with one Lambda function on their resume.",
  },
  {
    title: "IaC discipline (Terraform or CDK)",
    description:
      "Every resource defined in code, reviewed in PRs, state managed in S3 with locking. We do not click in the console for production. Drift detection, modular composition, and proper environment separation.",
  },
  {
    title: "Cost engineering built in",
    description:
      "Right-sizing, Savings Plans, Reserved Instances, Compute Optimizer, Cost Explorer, and FinOps tagging. We have helped customers cut AWS bills by 30 to 50% without losing capacity.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership, communication, and career fit. You get AWS engineers who stay long enough to own the architecture, not consultants who churn at the end of the migration.",
  },
];

const responsibilities = [
  "Architecting workloads on ECS Fargate, EKS, or Lambda based on the actual scaling and concurrency profile, not preference",
  "Writing Terraform or CDK modules for VPCs, IAM, ECS clusters, RDS, S3, CloudFront, and the dozens of services a real workload uses",
  "Designing IAM least-privilege policies, SCPs at the Organization level, and identity federation with SSO providers",
  "Building event-driven flows with EventBridge, SQS, SNS, Kinesis, and Step Functions for orchestration",
  "Setting up CI/CD with CodePipeline, GitHub Actions, or GitLab; blue/green or canary deployments with CodeDeploy",
  "Instrumenting services with CloudWatch metrics/logs, X-Ray traces, and structured JSON logging; building dashboards and alarms tied to SLOs",
  "Securing AWS estates: GuardDuty, Security Hub, Config rules, Macie for sensitive data, encryption at rest with KMS, TLS everywhere",
  "Running cost engineering: right-sizing recommendations, Savings Plan coverage, Reserved Instance utilization, Compute Optimizer, idle resource cleanup",
  "Handling migrations: lift-and-shift with MGN, re-platforming to managed services, modernization to serverless or containers",
  "Building disaster recovery: cross-region replication, automated backups with AWS Backup, runbook-driven failover drills",
];

const whenToHire = [
  {
    scenario: "Building a new product on AWS from scratch",
    recommendation: "Hire an AWS specialist with IaC and architecture depth",
    reason:
      "Greenfield AWS is where bad decisions get baked into the foundation. Account structure, VPC design, IAM, IaC tool choice all need someone who has done this before.",
  },
  {
    scenario: "Migrating from on-prem or another cloud to AWS",
    recommendation: "Hire an AWS specialist with migration experience",
    reason:
      "Migrations need landing-zone setup, account vending, network connectivity (DX, VPN, TGW), and a phased cutover plan. A generalist will spend months chasing edge cases.",
  },
  {
    scenario: "Cutting an out-of-control AWS bill",
    recommendation: "Hire a Cloud Cost Engineer (see /hire/cloud-cost-engineer/)",
    reason:
      "Cost engineering is its own discipline. FinOps tagging, Savings Plans modeling, right-sizing, idle cleanup. A general AWS engineer can help but a specialist will find 30-50% savings faster.",
  },
  {
    scenario: "Occasional AWS work next to a strong DevOps team",
    recommendation: "A general DevOps engineer may be enough",
    reason:
      "If your team already has strong DevOps and only needs occasional AWS expertise, a generalist with AWS exposure is enough. Reserve specialist budget for net-new architecture.",
  },
];

const screeningSignals = [
  {
    signal: "IaC fluency",
    detail:
      "Terraform: modules, workspaces, state backend, drift detection. CDK: constructs, aspects, escape hatches. We test whether candidates write production IaC or copy console actions into HCL.",
  },
  {
    signal: "IAM and security depth",
    detail:
      "Least-privilege policy design, SCPs at Organization level, identity federation, AssumeRole patterns, encryption with KMS, GuardDuty triage. Real production scars, not just certification trivia.",
  },
  {
    signal: "Service selection judgment",
    detail:
      "ECS vs EKS vs Lambda for a given workload. RDS vs Aurora vs DynamoDB. SQS vs Kinesis vs MSK. Strong candidates defend their pick with the actual scaling and consistency requirements.",
  },
  {
    signal: "Cost engineering instinct",
    detail:
      "Right-sizing, Savings Plans vs Reserved Instances, Compute Optimizer, Cost Explorer tagging strategy, NAT Gateway and data-transfer cost awareness. We test whether they look at the bill or just the architecture.",
  },
  {
    signal: "Observability",
    detail:
      "CloudWatch Metrics vs Logs Insights vs X-Ray, structured logging, custom metrics, alarm composition, SLO tracking. Dashboards that operators actually use during incidents.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a misconfigured Lambda with cold start issues, an ECS service hitting throttling, or a leaking RDS connection pool and ask them to find it. This filters out engineers who only ship demos.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior AWS guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated pod members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a migration, modernization, or platform-engineering buildout.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your AWS estate, workload shape, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for AWS depth, certification, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architecture, IaC, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire an AWS developer from India?",
    answer:
      "Mid-level AWS developers from India cost USD 4,500 to 7,000 per month for full-time engagement. Senior engineers with Solutions Architect certification, IaC depth, or platform-engineering experience range from USD 6,500 to 10,000 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your AWS engineers certified?",
    answer:
      "Yes. Senior engineers we place hold at least one Associate-level certification (Solutions Architect, Developer, or SysOps) and often a Professional or Specialty (DevOps Engineer Pro, Security Specialty, Database Specialty). Certifications are screened as one input alongside production experience.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your AWS engineers write IaC (Terraform or CDK)?",
    answer:
      "Yes. Every engineer we place writes Terraform or AWS CDK in production. We test IaC fluency explicitly: modular composition, state backend strategy, drift detection, environment separation, and PR-based review workflows.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your AWS engineers help cut our AWS bill?",
    answer:
      "Yes. Cost engineering is a standard engagement: right-sizing, Savings Plans coverage analysis, Reserved Instance modeling, Compute Optimizer execution, idle resource cleanup, NAT Gateway and data-transfer audits, and FinOps tagging. We have cut customer bills by 30-50% on real workloads. See also our dedicated Cloud Cost Engineer page.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your AWS engineers handle migrations from on-prem or other clouds?",
    answer:
      "Yes. Lift-and-shift via MGN, re-platforming to managed services, and modernization to containers or serverless are standard work. We have migrated workloads from on-prem VMware, GCP, and Azure to AWS with documented landing-zone setup and phased cutover plans.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you handle multi-account AWS Organization setups?",
    answer:
      "Yes. Landing Zone, Control Tower, Organizations and OUs, SCPs, IAM Identity Center (SSO), account vending, centralized logging to a security account, and Transit Gateway hub-and-spoke networking are core competencies.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your AWS developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap. For on-call rotations we structure follow-the-sun coverage with your existing team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireAWSDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire AWS Developers from India",
    "Hire pre-vetted AWS developers from India. ECS, EKS, Lambda, IaC, FinOps, certified. SethAI-screened.",
    `${siteMetadata.url}/hire/aws-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "AWS Developers", url: `${siteMetadata.url}/hire/aws-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE AWS DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire AWS Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted AWS engineers who ship production workloads. ECS, EKS,
            Lambda, IaC with Terraform or CDK, observability, and cost
            engineering. Screened by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why AWS still anchors most production estates in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              AWS remains the deepest cloud by service surface, regional
              coverage, and ecosystem. For most enterprise estates, AWS is the
              default and the marginal cost of being on AWS is moving into the
              real spend conversation rather than the strategic one. The
              engineering work has shifted from &ldquo;should we use AWS&rdquo; to &ldquo;are we
              using AWS well.&rdquo;
            </p>
            <p>
              An AWS engineer worth hiring in 2026 holds at least an
              Associate-level certification, writes production IaC,
              instruments with CloudWatch and X-Ray, and looks at Cost
              Explorer as often as the architecture diagram. They know
              least-privilege IAM, account-level controls (SCPs), and the
              difference between a Savings Plan and a Reserved Instance.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For cost-specific work see our{" "}
              <a href="/hire/cloud-cost-engineer/" className="text-primary-600 hover:underline">Cloud Cost Engineer</a>{" "}
              page. For broader DevOps see{" "}
              <a href="/hire/devops-engineers/" className="text-primary-600 hover:underline">DevOps Engineers</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire AWS developers from Workforce Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an AWS developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire an AWS developer through Workforce Next, here is the
            work they take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Specialist or generalist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every cloud role needs an AWS specialist. Here is how we help customers decide.</p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div key={item.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">{item.scenario}</h3>
                <p className="text-sm font-bold text-primary-500 mb-3">{item.recommendation}</p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our AWS engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.name} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col">
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">{model.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary-500">{model.hours}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{model.best}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">{model.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring AWS developers</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire AWS developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your AWS estate and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
