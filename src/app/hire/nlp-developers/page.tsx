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
  title: "Hire NLP Developers from India",
  description:
    "Hire pre-vetted NLP developers from India. LLM fine-tuning, classification, NER, summarization, structured extraction, multilingual, embeddings. SethAI-screened.",
  keywords: [
    "hire NLP developers",
    "hire NLP engineers India",
    "natural language processing developers",
    "LLM fine tuning engineers",
    "NER classification developers",
    "text classification India",
    "structured extraction NLP",
    "multilingual NLP developers",
    "NLP staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/nlp-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire NLP Developers from India",
    description:
      "Pre-vetted NLP engineers for LLM fine-tuning, NER, classification, extraction, multilingual. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/nlp-developers/`,
  },
};

const skills = [
  "spaCy",
  "Hugging Face Transformers",
  "PyTorch",
  "LLM Fine-tuning (LoRA, QLoRA)",
  "Named Entity Recognition (NER)",
  "Text Classification",
  "Structured Extraction",
  "Embeddings (BERT, E5, BGE)",
  "Multilingual Models",
  "Topic Modeling",
  "Tokenizers",
  "ONNX / vLLM",
];

const whyPoints = [
  {
    title: "NLP specialists, not generic ML devs",
    description:
      "Our engineers ship production NLP: classifiers, NER systems, structured extractors, summarizers. They know when LLMs win vs when fine-tuned encoders are faster and cheaper.",
  },
  {
    title: "LLM-aware but not LLM-only",
    description:
      "Modern NLP is a mix of LLM API calls and traditional fine-tuned transformer encoders. Our engineers pick the right tool based on accuracy, latency, and cost, not by hype.",
  },
  {
    title: "Multilingual and domain-specific depth",
    description:
      "Indian languages, European languages, code, medical, legal, financial domains. We have shipped NLP systems across all of these and know what works per domain.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI scores ownership and communication. You get NLP engineers who iterate the system based on production data, not researchers who hand off a notebook.",
  },
];

const responsibilities = [
  "Designing NLP pipelines: data collection, cleaning, labeling strategy, model selection, eval, deployment",
  "Fine-tuning encoder models (BERT family, DeBERTa, ModernBERT) for classification, NER, and extraction tasks",
  "Building structured extraction with LLMs (function calling, JSON mode) or with fine-tuned encoders for higher accuracy and lower cost",
  "Designing embedding pipelines with text-embedding-3, BGE, or fine-tuned domain embeddings for search and RAG",
  "Shipping multilingual systems: tokenizer choice, language detection, per-language fine-tuning, translation fallback",
  "Building summarization systems with extractive and abstractive approaches, eval against ROUGE, BERTScore, and LLM-as-judge",
  "Implementing topic modeling, clustering, and unsupervised exploration on large text corpora",
  "Setting up MLOps: dataset versioning, experiment tracking (MLflow, Weights & Biases), model registries, A/B testing",
  "Deploying NLP models with FastAPI, ONNX Runtime, vLLM, or cloud inference services with proper async and batching",
  "Hardening NLP systems against adversarial inputs, PII leakage, and prompt injection when LLMs are in the loop",
];

const whenToHire = [
  {
    scenario: "Building structured extraction from documents at scale",
    recommendation: "Hire an NLP specialist",
    reason:
      "High-accuracy structured extraction (invoices, contracts, medical records) needs custom-tuned models or carefully-engineered LLM pipelines with evals. Specialists deliver, generalists hallucinate.",
  },
  {
    scenario: "Classifying or routing user messages or tickets",
    recommendation: "Hire an NLP specialist with fine-tuning experience",
    reason:
      "For high-volume classification, a fine-tuned encoder (BERT-class model) is often faster and cheaper than calling an LLM. NLP specialists make this tradeoff explicitly.",
  },
  {
    scenario: "Multilingual support across 10+ languages",
    recommendation: "Hire an NLP specialist with multilingual depth",
    reason:
      "Multilingual NLP needs tokenizer selection, per-language eval, and translation fallback decisions. We screen specifically for multilingual experience when the role demands it.",
  },
  {
    scenario: "Simple sentiment or keyword extraction from a small corpus",
    recommendation: "A multi-modal LLM API may be enough",
    reason:
      "For small-scale, simple NLP tasks, GPT-4 or Claude via API is fast to ship and accurate enough. NLP specialists matter when you scale, customize, or need lower cost per call.",
  },
];

const screeningSignals = [
  {
    signal: "Model selection judgment",
    detail:
      "Given a task, can the candidate choose between LLM, fine-tuned encoder, classical ML, or rules? Strong NLP engineers pick by accuracy, latency, and cost tradeoffs.",
  },
  {
    signal: "Fine-tuning depth",
    detail:
      "Dataset preparation, train/val/test splits without leakage, hyperparameter selection, eval design. LoRA vs full fine-tuning. We test whether they have shipped trained models or only used pre-trained.",
  },
  {
    signal: "Embeddings and retrieval",
    detail:
      "Embedding model selection, fine-tuning embeddings for domain, hybrid search (BM25 + dense), re-ranking. Most modern NLP work touches retrieval at some point.",
  },
  {
    signal: "Multilingual awareness",
    detail:
      "When does English-only fail. Tokenizer effects on non-Latin scripts. Per-language eval. Translation-then-process vs native-language models.",
  },
  {
    signal: "Production deployment",
    detail:
      "ONNX export, vLLM, batched inference, GPU utilization, latency targets. We test whether they have shipped to production or only run in notebooks.",
  },
  {
    signal: "Evaluation rigor",
    detail:
      "Beyond accuracy: F1, precision/recall tradeoffs, calibration, confusion matrix analysis, error categorization. LLM-as-judge for generative tasks. Production drift monitoring.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior NLP guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated NLP team members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for an NLP product launch or domain-specific extraction build.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your NLP use case, data, accuracy targets, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for NLP depth, production experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test model selection, fine-tuning, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire an NLP developer from India?",
    answer:
      "Mid-level NLP developers from India cost USD 5,000 to 7,500 per month for full-time engagement. Senior engineers with LLM fine-tuning, multilingual, or domain-specific production experience range from USD 7,000 to 10,000 per month.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Should we use an LLM or fine-tune a smaller model?",
    answer:
      "LLMs win for low-volume, varied, or complex tasks. Fine-tuned encoders win for high-volume classification, NER, or extraction where you need lower cost per call and faster latency. Our engineers help you scope this decision against your traffic and accuracy targets.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Do your NLP engineers handle multilingual systems?",
    answer:
      "Yes. Indian languages (Hindi, Tamil, Bengali, etc.), European languages, CJK, and code. Tokenizer selection, per-language eval, and translation fallback decisions are standard. We screen specifically for multilingual depth when the role demands it.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your NLP engineers do structured extraction from documents?",
    answer:
      "Yes. Invoice extraction, contract analysis, medical records, legal documents. We build either with LLM function calling and JSON mode, or with fine-tuned encoder models for higher accuracy and lower cost at scale. Eval pipelines are non-negotiable.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What about fine-tuning costs?",
    answer:
      "LoRA fine-tuning of open-weight models (Llama, Mistral) is affordable: USD 100 to 1,000 per training run depending on dataset size. Fine-tuning GPT-4 or Claude via API is more expensive per training run but eliminates inference deployment work. Our engineers help you pick.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your NLP engineers integrate with our existing data pipeline?",
    answer:
      "Yes. Snowflake, BigQuery, Databricks, Airflow, Prefect, Dagster, Kafka, S3. We deploy NLP models as services callable from your pipeline or as batch jobs running on your scheduler. Tell us your stack.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your NLP developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireNLPDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire NLP Developers from India",
    "Hire pre-vetted NLP developers from India. LLM fine-tuning, classification, NER, extraction, multilingual. SethAI-screened.",
    `${siteMetadata.url}/hire/nlp-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "NLP Developers", url: `${siteMetadata.url}/hire/nlp-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE NLP DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire NLP Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted NLP engineers who ship production text systems. LLM
            fine-tuning, classification, NER, extraction, multilingual. Screened
            by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">NLP in 2026: LLMs did not replace specialists, they raised the bar</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Two years ago everyone thought LLMs would absorb all of NLP.
              They did not. They absorbed the easy cases. The remaining
              NLP work (high-volume classification, structured extraction
              at accuracy, multilingual, domain-specific fine-tuning, cost-
              and latency-sensitive deployment) requires more specialist
              skill, not less.
            </p>
            <p>
              An NLP engineer worth hiring in 2026 picks pragmatically
              between LLM APIs and fine-tuned encoders, evaluates rigorously,
              ships to production with proper observability, and knows the
              cost economics of each approach. They are not LLM-only and
              they are not stuck in 2019 BERT-only patterns.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For deeper context, see our{" "}
              <a href="/blog/ai-enabled-remote-staffing-complete-guide-2026/" className="text-primary-600 hover:underline">AI-enabled remote staffing guide</a>{" "}
              or related{" "}
              <a href="/hire/generative-ai-developers/" className="text-primary-600 hover:underline">generative AI developers</a> page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire NLP developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What an NLP developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">When you hire an NLP developer through Workforce Next, here is the work they take ownership of:</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Not every text task needs an NLP specialist. Here is how we help customers decide.</p>
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our NLP engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring NLP developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire NLP developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your text use case and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
