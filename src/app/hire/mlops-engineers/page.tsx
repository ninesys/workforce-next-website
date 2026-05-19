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
  title: "Hire MLOps Engineers from India",
  description:
    "Hire pre-vetted MLOps engineers from India. Model serving, feature stores, vector DBs, monitoring, training infra, evals, LLMOps. SethAI-screened.",
  keywords: [
    "hire MLOps engineers",
    "hire MLOps engineers India",
    "machine learning operations",
    "ML platform engineers",
    "LLMOps engineers",
    "model serving engineers",
    "ML observability India",
    "MLOps staff augmentation",
    "ML infra engineers",
  ],
  openGraph: {
    ...ogDefaults("/hire/mlops-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire MLOps Engineers from India",
    description:
      "Pre-vetted MLOps engineers for model serving, training infra, observability, and LLMOps. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/mlops-engineers/`,
  },
};

const skills = [
  "Kubernetes / GPU scheduling",
  "Ray / Ray Serve",
  "vLLM / TGI / SGLang",
  "MLflow / Weights & Biases",
  "Feast / Tecton",
  "Pinecone / Weaviate / pgvector",
  "Triton Inference Server",
  "Argo / Prefect / Dagster",
  "Helm / Terraform",
  "OpenTelemetry / Arize",
  "DVC / LakeFS",
  "AWS SageMaker / Vertex AI",
];

const whyPoints = [
  {
    title: "MLOps specialists who run real ML systems",
    description:
      "Our engineers operate production ML: training pipelines, model serving, feature stores, observability, on-call rotations. They have shipped systems with thousands of inference requests per second.",
  },
  {
    title: "Classical ML and LLMOps both",
    description:
      "MLOps in 2026 is half traditional ML and half LLMOps (vLLM, embeddings infra, agent platforms, prompt versioning, eval pipelines). We staff engineers comfortable in both.",
  },
  {
    title: "Cost engineering for ML",
    description:
      "GPU bills get out of control fast. Our engineers right-size training jobs, optimize inference batching, use spot capacity, and tune model serving for the actual traffic shape.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership and communication. You get MLOps engineers who stay long enough to own the platform, not contractors who set up MLflow and disappear.",
  },
];

const responsibilities = [
  "Designing and running model serving infrastructure: Triton, vLLM, TGI, SGLang, or custom FastAPI services with proper async and batching",
  "Building training pipelines: data versioning with DVC, experiment tracking with MLflow or W&B, distributed training with Ray or Horovod",
  "Setting up feature stores (Feast, Tecton) for shared online and offline features across ML teams",
  "Operating vector databases (Pinecone, Weaviate, pgvector, Qdrant) with proper sharding, replication, and reindexing playbooks",
  "Implementing ML observability: latency, throughput, drift detection, accuracy regression, cost tracking, model registry",
  "GPU cluster operations: scheduling on Kubernetes with NVIDIA GPU operator, mixed GPU types, spot/on-demand strategy, MIG slicing",
  "Building LLMOps pipelines: prompt versioning, eval automation, A/B testing of prompts and models, cost dashboards per feature",
  "Setting up CI/CD for ML: model packaging, canary rollouts, automated eval gates, rollback on quality regression",
  "Integrating with data platforms: Snowflake, Databricks, BigQuery, S3 for training data; Kafka, Kinesis for online features",
  "Hardening ML systems against prompt injection, model abuse, PII leakage, and supply-chain risks in model providers",
];

const whenToHire = [
  {
    scenario: "Productionizing an ML team that has been shipping notebooks",
    recommendation: "Hire an MLOps engineer as your first ML platform hire",
    reason:
      "ML teams shipping notebooks hit a wall when they try to scale. An MLOps engineer builds the platform that makes the ML team 5x more productive: serving, monitoring, training infra, evals.",
  },
  {
    scenario: "Operating LLM-heavy systems at production scale",
    recommendation: "Hire an MLOps engineer with LLMOps experience",
    reason:
      "LLM systems need different ops than classical ML: vLLM serving, prompt versioning, eval automation, cost dashboards per feature. We screen for LLMOps specifically when the role demands.",
  },
  {
    scenario: "Cutting an out-of-control GPU bill",
    recommendation: "Hire an MLOps engineer with cost engineering focus",
    reason:
      "GPU costs are where ML teams bleed money. Right-sizing, spot capacity, batching, MIG slicing, and idle cleanup can cut bills 40-60% without sacrificing performance.",
  },
  {
    scenario: "Small ML team with one model and low traffic",
    recommendation: "A general DevOps engineer may be enough",
    reason:
      "If you have one model serving low traffic and no growth plans, a general DevOps engineer can keep it running. Reserve MLOps budget for teams running multiple models or training pipelines.",
  },
];

const screeningSignals = [
  {
    signal: "Model serving fluency",
    detail:
      "Triton, vLLM, TGI, SGLang, KServe, BentoML, or custom serving. Batching strategies, async patterns, GPU memory management. We test whether they have run serving at scale or only in a tutorial.",
  },
  {
    signal: "Training infra discipline",
    detail:
      "Data versioning, experiment tracking, distributed training (Ray, Horovod, DeepSpeed), checkpoint management. Reproducibility from data through model. We test the full pipeline, not just the model code.",
  },
  {
    signal: "GPU operations",
    detail:
      "Kubernetes with NVIDIA GPU operator, mixed instance types, spot strategy, MIG slicing, fractional GPU. Cost-aware scheduling. Capacity planning for training and inference separately.",
  },
  {
    signal: "Observability and drift",
    detail:
      "Latency, throughput, model drift (data and concept), accuracy regression, cost per inference. Tools like Arize, Fiddler, WhyLabs, or custom. We test whether they treat ML as production infra.",
  },
  {
    signal: "LLMOps depth",
    detail:
      "Prompt versioning, eval pipelines, A/B testing prompts and models, token cost dashboards, vector DB ops, embedding pipelines. We screen for LLMOps as a distinct skill from classical MLOps.",
  },
  {
    signal: "Cost engineering",
    detail:
      "GPU cost per training run, GPU cost per million tokens served, spot capacity usage, idle resource cleanup. We test whether they look at the bill or just at architectural elegance.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage ML teams needing platform input without a full-time hire.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for teams running production ML continuously and needing integrated platform ownership.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 3 engineers", best: "Best for a major MLOps platform build or migration (e.g., on-prem to cloud).", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your ML stack, scale, GPU footprint, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for MLOps depth, LLMOps experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test platform design, GPU ops, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire an MLOps engineer from India?",
    answer:
      "Mid-level MLOps engineers from India cost USD 5,500 to 8,000 per month for full-time engagement. Senior engineers with LLMOps, GPU operations, or large-scale platform experience range from USD 7,500 to 11,000 per month. Pricing reflects specialist scarcity.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Should we hire MLOps or DevOps for our ML system?",
    answer:
      "DevOps if you have one or two simple models and traffic is low. MLOps when you have multiple models, training pipelines, drift to monitor, GPU costs to optimize, or LLM systems. The crossover point is usually when ML becomes a real budget line.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Do your MLOps engineers handle LLM serving and LLMOps?",
    answer:
      "Yes. vLLM, TGI, SGLang for LLM serving. Prompt versioning, eval pipelines, A/B testing, cost dashboards per feature, vector DB operations, embedding pipelines. LLMOps is a first-class skill we screen for.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your MLOps engineers cut our GPU bill?",
    answer:
      "Yes. GPU cost engineering: right-sizing training jobs, spot capacity usage, MIG slicing for inference, batching strategies, idle cleanup, and model quantization for cheaper serving. We have cut GPU bills 40-60% on customer workloads without losing performance.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What platforms do your MLOps engineers work on?",
    answer:
      "AWS SageMaker, GCP Vertex AI, Azure ML, plus open-source stacks (Kubernetes with KServe, Ray, MLflow, Feast, vLLM). We are platform-agnostic and match the engineer to your existing stack rather than forcing a migration.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your MLOps engineers set up our first feature store?",
    answer:
      "Yes. Feast (open source) and Tecton (managed) are the most common. We design the online/offline split, handle feature freshness, integrate with your data warehouse, and build the developer experience for the data scientists who consume features.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your MLOps engineers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap. For on-call rotations we structure follow-the-sun coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireMLOpsEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire MLOps Engineers from India",
    "Hire pre-vetted MLOps engineers from India. Model serving, training infra, observability, LLMOps. SethAI-screened.",
    `${siteMetadata.url}/hire/mlops-engineers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "MLOps Engineers", url: `${siteMetadata.url}/hire/mlops-engineers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE MLOPS ENGINEERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire MLOps Engineers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted MLOps engineers who run production ML systems. Model
            serving, training infra, observability, LLMOps, and GPU cost
            engineering. Screened by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">MLOps in 2026: half classical ML, half LLMOps</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              MLOps used to mean training pipelines, model registries, and
              monitoring drift on tabular models. In 2026 it is also vLLM
              serving, prompt versioning, eval automation, vector DB
              operations, and GPU cost engineering for both training and
              inference. The role doubled in surface area in two years.
            </p>
            <p>
              An MLOps engineer worth hiring in 2026 operates both worlds.
              They run training infra, build model serving, instrument
              drift, version prompts, monitor token cost, and treat ML as
              production infrastructure. They have been on-call when an
              inference service hits OOM at 3am.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For the GenAI side specifically, see our{" "}
              <a href="/hire/generative-ai-developers/" className="text-primary-600 hover:underline">generative AI developers</a>{" "}
              page. For cloud infra fundamentals, our{" "}
              <a href="/hire/aws-developers/" className="text-primary-600 hover:underline">AWS developers</a> or{" "}
              <a href="/hire/devops-engineers/" className="text-primary-600 hover:underline">DevOps engineers</a>{" "}
              pages may be the right pair.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire MLOps engineers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an MLOps engineer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire an MLOps engineer through Workforce Next, here is the work they take ownership of:</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">MLOps or DevOps: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every ML system needs a dedicated MLOps hire. Here is how we help customers decide.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our MLOps engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring MLOps engineers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire MLOps engineers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your ML stack and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
