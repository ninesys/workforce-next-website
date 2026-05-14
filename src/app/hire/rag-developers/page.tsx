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
  title: "Hire RAG Pipeline Developers from India",
  description:
    "Hire pre-vetted RAG pipeline developers from India. Vector databases, embedding models, chunking strategies, hybrid search, re-ranking, and evaluation. SethAI-screened.",
  keywords: [
    "hire RAG developers India",
    "RAG pipeline developers",
    "vector database developers",
    "Pinecone developers",
    "Weaviate developers",
    "embedding models",
    "retrieval augmented generation",
    "RAG evaluation",
  ],
  openGraph: {
    ...ogDefaults("/hire/rag-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire RAG Pipeline Developers from India",
    description:
      "Hire pre-vetted RAG pipeline developers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/rag-developers/`,
  },
};

const skills = [
  "Pinecone",
  "Weaviate",
  "Qdrant",
  "pgvector",
  "Embedding Models",
  "Chunking Strategies",
  "Hybrid Search",
  "Re-ranking",
  "Evaluation",
  "LlamaIndex",
];

const whyPoints = [
  {
    title: "RAG is harder than it looks",
    description:
      "Getting a demo working takes a day. Getting RAG to work reliably in production with good retrieval quality, low hallucination, and fast response times takes real engineering. Our developers know the difference.",
  },
  {
    title: "Vector database expertise across providers",
    description:
      "Pinecone, Weaviate, Qdrant, Chroma, pgvector. Our engineers have production experience with multiple vector stores and know the tradeoffs of each. They will recommend the right one for your scale and budget.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. RAG systems need ongoing tuning. You need someone who stays and owns the retrieval quality curve.",
  },
  {
    title: "End-to-end retrieval pipeline ownership",
    description:
      "Document ingestion, chunking, embedding, indexing, retrieval, re-ranking, and evaluation. Our engineers own the full pipeline, not just the retrieval call.",
  },
];

const responsibilities = [
  "Designing document ingestion pipelines with loaders, cleaners, deduplication, and metadata extraction at scale",
  "Choosing chunking strategies (fixed, semantic, recursive, parent-child) based on document structure and downstream retrieval quality",
  "Selecting and tuning embedding models (OpenAI, Cohere, Voyage, open-source) for accuracy vs. cost tradeoffs",
  "Building vector database indexes in Pinecone, Weaviate, Qdrant, pgvector, or Chroma with proper partitioning and metadata filtering",
  "Implementing hybrid search combining dense vectors with BM25 or keyword search for robust retrieval across query types",
  "Adding re-ranking layers (Cohere Rerank, cross-encoders, LLM-as-judge) to lift precision on top results",
  "Designing evaluation harnesses that measure retrieval recall, precision, mean reciprocal rank, and end-to-end answer quality",
  "Building ingestion incremental updates, backfills, and versioning so indexes stay fresh without downtime",
  "Managing cost at scale: embedding batching, index sizing, caching strategies, and provider choice",
  "Debugging retrieval failures by inspecting embeddings, query rewriting, and exposing retrieval traces in LangSmith or custom logs",
];

const whenToHire = [
  {
    scenario: "You are building a knowledge-grounded chat or search product",
    recommendation: "Hire a RAG specialist",
    reason:
      "Chat that answers from your docs is the default RAG use case, and the default place teams underestimate how hard retrieval quality is. A specialist knows the difference between a working demo and a system that actually answers accurately.",
  },
  {
    scenario: "Your existing RAG system is returning irrelevant or shallow answers",
    recommendation: "Hire a RAG specialist with evaluation depth",
    reason:
      "Poor answers almost always mean poor retrieval, not bad prompting. A specialist will set up evaluation, identify whether the problem is chunking, embeddings, or re-ranking, and fix the root cause rather than tuning prompts forever.",
  },
  {
    scenario: "You are adding retrieval to a small internal tool",
    recommendation: "A general AI engineer is usually fine",
    reason:
      "For small-scale internal tools where approximate answers are acceptable, a general AI engineer with a week of docs will ship a working system. You do not need a specialist until retrieval quality becomes mission-critical.",
  },
  {
    scenario: "You are scaling RAG across millions of documents or tenants",
    recommendation: "Hire a RAG specialist with infrastructure depth",
    reason:
      "Scale breaks assumptions. Index sizing, query latency, multi-tenant isolation, and cost all become real problems above a certain volume. A specialist has shipped at this scale and will save you months of firefighting.",
  },
];

const screeningSignals = [
  {
    signal: "Chunking strategy judgment",
    detail:
      "We give candidates a set of documents (structured, unstructured, legal, scientific) and ask them to recommend chunking strategies. Strong answers explain tradeoffs between fixed, semantic, and parent-child chunking. Weak answers default to 500-token fixed chunks for everything.",
  },
  {
    signal: "Evaluation discipline",
    detail:
      "Vibes are not retrieval quality. We screen for engineers who build eval sets, measure recall and precision, and regression-test on every pipeline change. Engineers who skip this step ship silent quality regressions.",
  },
  {
    signal: "Vector database tradeoff awareness",
    detail:
      "We ask candidates to recommend a vector store for a specific workload (10M docs, multi-tenant, strict latency) and explain why. Strong candidates know when to use Pinecone, Qdrant, pgvector, or Weaviate. Weak ones default to whatever they used last time.",
  },
  {
    signal: "Hybrid search and re-ranking fluency",
    detail:
      "Pure vector search leaves quality on the table. We test whether candidates know how to combine BM25 with dense retrieval, where to insert rerankers, and how to measure the lift honestly.",
  },
  {
    signal: "Cost and latency instincts",
    detail:
      "Embedding costs, index memory, query latency, provider bills. We ask candidates to estimate monthly cost for a given scale. Strong answers include batching, caching, and provider choice. Weak answers suggest running everything through the most expensive embedding API.",
  },
  {
    signal: "Failure mode diagnosis",
    detail:
      "We give candidates a RAG system that returns wrong answers and ask them to diagnose it. The good ones look at the retrieval step first, inspect actual vectors, and check evaluation data. The weak ones jump straight to prompt engineering.",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for teams adding their first RAG system and needing senior guidance on retrieval architecture.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for AI products where retrieval quality is a core competitive advantage and needs continuous tuning.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "RAG pod",
    hours: "2 to 4 engineers",
    best: "Best for a large-scale retrieval platform that needs a self-contained squad across ingestion, indexing, and serving.",
    includes:
      "Tech lead plus 1 to 3 engineers, shared context docs, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your requirements",
    description:
      "Tell us about your data sources, retrieval quality goals, and what kind of RAG system you are building.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for retrieval engineering depth, evaluation mindset, and communication fit. You get a shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview your picks",
    description:
      "Talk to the candidates directly. Assess their understanding of chunking strategies, retrieval quality, and evaluation methods.",
  },
  {
    step: "04",
    title: "1-week trial, then commit",
    description:
      "Start with a paid trial week. If the developer is the right fit, continue. If not, we find another match at no extra cost.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a RAG developer in India?",
    answer:
      "Mid-level RAG developers in India typically cost between 4,500 and 7,000 USD per month for full-time engagement. Senior engineers with production retrieval experience and evaluation depth range from 7,000 to 10,500 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Which vector database should I use for my RAG system?",
    answer:
      "It depends on scale, cost sensitivity, and operational preference. Pinecone is the simplest managed option but costs more at scale. pgvector works well if you already run PostgreSQL and your scale is below 10M vectors. Qdrant and Weaviate are strong self-hosted choices with richer filtering. Chroma is good for prototypes but usually not production. Our RAG developers will recommend based on your specific constraints, not framework loyalty.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "What is hybrid search and do I need it?",
    answer:
      "Hybrid search combines dense vector retrieval with keyword search (usually BM25). You need it if your queries include specific terms, product names, error codes, or other exact-match signals that embeddings blur. For general semantic search, dense-only often works fine. We usually recommend starting with dense and adding hybrid only when evaluation shows quality gaps.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How do you measure RAG quality?",
    answer:
      "We measure retrieval metrics (recall at k, precision at k, MRR) separately from end-to-end answer quality. Retrieval metrics tell you if the right documents are coming back. Answer-quality metrics (faithfulness, relevance, grounding) tell you if the model is using them correctly. We use frameworks like RAGAS, custom eval sets, and LLM-as-judge scoring. Good engineers build these eval pipelines before tuning anything else.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "Can your RAG developers build ingestion pipelines for our specific data?",
    answer:
      "Yes. Our engineers have built ingestion pipelines for PDF document repositories, legal contracts, scientific papers, customer support tickets, internal wikis, source code, and multi-language text. Each data type has its own chunking and metadata quirks. We match engineers whose past projects align with your data shape rather than forcing generic pipelines.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How long does it take to hire a RAG developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Most delays come from the customer side during interview scheduling. If you need someone faster, we maintain a bench of pre-screened RAG engineers who can start within 3 to 5 days.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireRAGDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire RAG Pipeline Developers from India",
    "Hire pre-vetted RAG pipeline developers from India. Vector databases, embedding models, chunking strategies, hybrid search, re-ranking. SethAI-screened.",
    `${siteMetadata.url}/hire/rag-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "RAG Developers",
      url: `${siteMetadata.url}/hire/rag-developers/`,
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
            HIRE RAG DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire RAG Pipeline Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build production retrieval-augmented
            generation systems. Vector databases, embedding models, hybrid
            search, and evaluation. Screened by SethAI for technical depth and
            long-term fit.
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
            Why production RAG is a specialist discipline
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Anyone can wire up a RAG demo in an afternoon. Pinecone,
              embeddings, a single retrieval call, done. What nobody tells you
              is that the demo version works on 20 curated documents and falls
              apart the moment you point it at a real knowledge base. Hiring
              the wrong RAG developer is how teams end up with systems that
              look smart in the pitch deck and hallucinate in the product.
            </p>
            <p>
              A genuine RAG engineer thinks in evaluation metrics, retrieval
              recall, and failure modes. They know when chunking is wrong,
              when embeddings are underperforming, when re-ranking will help,
              and when the honest answer is that the data is not
              retrievable yet. They have shipped RAG systems that survive
              real queries from real users across real document corpora.
            </p>
            <p>
              Every engineer we place is screened by SethAI specifically for
              these instincts. The shortlist you receive is not filtered on
              buzzwords like Pinecone or LlamaIndex. It is evaluated on
              end-to-end retrieval depth, evaluation discipline, and the
              signals that predict whether someone will tune retrieval
              quality month after month instead of shipping once and walking
              away.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire RAG developers from Workforce Next
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

      {/* What a RAG developer does */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a RAG developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a RAG developer through Workforce Next, here is the work they take
            ownership of on a production retrieval system:
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

      {/* When to hire a specialist vs generalist */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            RAG specialist or general AI engineer: which do you need?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every retrieval project needs a specialist. Here is how we
            help customers decide before they spend on the wrong profile.
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

      {/* Pricing and engagement models */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Engagement models
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our RAG engineers. Every engagement
            includes an engineering manager, shared context documentation, and
            PTO backup coverage at no extra cost.
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
            Common questions about hiring RAG developers
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
            Ready to hire RAG developers?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us about your retrieval system and we will match you with the
            right developers within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
