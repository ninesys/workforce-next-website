import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "Hire RAG Pipeline Developers from India | Workforce Next",
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
    title: "Hire RAG Pipeline Developers from India | Workforce Next",
    description:
      "Hire pre-vetted RAG pipeline developers from India. SethAI-screened for skills and longevity.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/rag-developers`,
  },
};

const skills = [
  "Pinecone",
  "Weaviate",
  "Qdrant",
  "Embedding Models",
  "Chunking Strategies",
  "Hybrid Search",
  "Re-ranking",
  "Evaluation",
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
      "Pinecone, Weaviate, Qdrant, Chroma, pgvector. Our engineers have production experience with multiple vector stores and know the tradeoffs of each.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership mindset, career alignment, and communication reliability. RAG systems need ongoing tuning. You need developers who stay.",
  },
  {
    title: "End-to-end retrieval pipeline ownership",
    description:
      "Document ingestion, chunking, embedding, indexing, retrieval, re-ranking, and evaluation. Our engineers own the full pipeline, not just the retrieval step.",
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

export default function HireRAGDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire RAG Pipeline Developers from India",
    "Hire pre-vetted RAG pipeline developers from India. Vector databases, embedding models, chunking strategies, hybrid search, re-ranking. SethAI-screened.",
    `${siteMetadata.url}/hire/rag-developers`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire` },
    {
      name: "RAG Developers",
      url: `${siteMetadata.url}/hire/rag-developers`,
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
            HIRE RAG DEVELOPERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire RAG Pipeline Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
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

      {/* Why hire from us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire RAG developers from Workforce Next
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
