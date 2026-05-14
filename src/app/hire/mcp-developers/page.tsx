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
  title: "Hire MCP Developers from India (Model Context Protocol)",
  description:
    "Hire pre-vetted MCP developers from India who build Model Context Protocol servers, agent integrations, and LLM tooling for production AI products.",
  keywords: [
    "hire MCP developer",
    "Model Context Protocol developer",
    "MCP server developer India",
    "Anthropic MCP engineer",
    "agent integration engineer",
    "LLM tooling developer",
    "Claude tool developer",
    "AI agent developer India",
  ],
  openGraph: {
    ...ogDefaults("/hire/mcp-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire MCP Developers from India",
    description:
      "Pre-vetted MCP server developers who build Model Context Protocol servers, agent integrations, and LLM tooling. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/mcp-developers/`,
  },
};

const skills = [
  "MCP (Model Context Protocol)",
  "TypeScript",
  "Python",
  "Anthropic SDK",
  "OpenAI SDK",
  "FastAPI",
  "Node.js",
  "JSON-RPC",
  "OAuth 2.0",
  "Server-Sent Events",
  "WebSockets",
  "OpenAPI",
  "Postgres",
  "pgvector",
  "OpenTelemetry",
];

const whyPoints = [
  {
    title: "Built on the standard, not the framework of the month",
    description:
      "MCP is the open protocol that Claude, Cursor, Windsurf, and a growing list of clients speak. Our engineers build to the spec so your tools work across every MCP-aware client without rewrites.",
  },
  {
    title: "Production patterns from day one",
    description:
      "Auth, rate limiting, observability, schema versioning, prompt-injection defenses. We treat MCP servers as production services, not demo scripts. The difference shows up in month two.",
  },
  {
    title: "Pairs cleanly with LangChain and RAG engineers",
    description:
      "MCP servers expose tools and data. Agent loops and retrieval pipelines consume them. We staff full agent stacks by pairing MCP developers with our LangChain and RAG engineers when the work calls for both.",
  },
  {
    title: "Screened by SethAI for ownership",
    description:
      "MCP work fails quietly. A bad tool definition, a leaky auth boundary, a flaky transport. SethAI screens for engineers who care about the protocol-level details, not just the demo.",
  },
];

const responsibilities = [
  "Designing and building MCP servers that expose internal APIs, databases, and tools to LLM clients including Claude, Cursor, and Windsurf",
  "Writing MCP tool definitions, prompt templates, and resource handlers that follow the spec and behave deterministically",
  "Implementing authentication and authorization for MCP servers: OAuth 2.0, API keys, mTLS, and per-tenant access controls",
  "Choosing and implementing the right MCP transport per deployment context: stdio for desktop integrations, HTTP and SSE for hosted servers",
  "Wiring MCP servers to internal data sources: REST APIs, GraphQL endpoints, Postgres, vector stores like pgvector, Pinecone, or Weaviate",
  "Integrating MCP servers with agent frameworks (LangChain, LangGraph, AutoGen) and with custom agent loops where frameworks would get in the way",
  "Hardening MCP servers against prompt injection, untrusted tool calls, and data exfiltration through structured input validation and output filtering",
  "Implementing observability: tracing every tool call, capturing prompt and response artifacts, defining error budgets and SLOs",
  "Writing eval suites that exercise MCP tools and verify behavior over time as models, prompts, and protocols evolve",
  "Maintaining version compatibility as the MCP spec evolves, including capability negotiation and graceful client downgrade paths",
];

const whenToHire = [
  {
    scenario: "You have an internal AI agent that needs to call multiple tools or APIs",
    recommendation: "Hire an MCP developer",
    reason:
      "Without MCP, every agent integration is bespoke. With MCP, you build once and every MCP-aware client uses your tools. The protocol pays for itself the second time you onboard a new LLM client.",
  },
  {
    scenario: "You are integrating with Claude Desktop, Cursor, Windsurf, or any MCP-aware client",
    recommendation: "Hire an MCP developer",
    reason:
      "These clients only speak MCP for tool integration. If you want them to read your data or trigger your APIs, you need a server that follows the spec. Custom HTTP wrappers do not work.",
  },
  {
    scenario: "Your AI feature is a single LLM call with no tool use",
    recommendation: "An AI developer with prompt fluency is enough",
    reason:
      "MCP earns its weight when you have multiple tools, multiple data sources, or multiple clients. For a single text-in text-out feature, MCP is overhead. Hire an AI developer instead.",
  },
  {
    scenario: "You are building a SaaS product that exposes data to customer agents",
    recommendation: "Hire an MCP developer plus a security-aware reviewer",
    reason:
      "Customer-facing MCP servers are an attack surface. Multi-tenant access control, prompt-injection hardening, and audit logging matter from day one. Pair the MCP developer with someone who reviews from a security lens.",
  },
];

const screeningSignals = [
  {
    signal: "Real MCP shipping experience",
    detail:
      "We ask candidates to walk through an MCP server they actually built. Strong candidates explain transport choice, auth model, and what they would change. Weak ones quote the README.",
  },
  {
    signal: "Tool definition design instinct",
    detail:
      "We give candidates a feature spec and ask them to design the MCP tools for it. Strong candidates produce small, deterministic tools with clear errors. Weak ones produce a single mega-tool that does everything.",
  },
  {
    signal: "Auth and tenancy thinking",
    detail:
      "We ask candidates how they would build a multi-tenant MCP server. Strong candidates lead with token scoping, per-tenant quotas, and audit trails. Weak ones lead with the happy path.",
  },
  {
    signal: "Eval discipline",
    detail:
      "We ask whether they have shipped an MCP server and how they verify it still works as models change. Strong candidates have eval suites. Weak ones have manual smoke tests.",
  },
  {
    signal: "Cross-stack literacy",
    detail:
      "Good MCP developers understand the client side. We screen for engineers who have used MCP from Claude Desktop, Cursor, or a custom agent loop, not just built servers in isolation.",
  },
  {
    signal: "AI-specific security awareness",
    detail:
      "MCP servers face a new class of attacks: prompt injection, indirect injection through retrieved content, tool call abuse. We screen for engineers who think in terms of trust boundaries, not just standard input validation.",
  },
];

const engagementModels = [
  {
    name: "Build engagement",
    hours: "4 to 8 weeks",
    best: "Best for shipping a first MCP server. Defined scope, fixed timeline, clear handoff.",
    includes:
      "Server design, tool definitions, auth implementation, eval suite, deployment, and documentation handed to your team.",
  },
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for ongoing MCP work that does not justify a full-time hire yet. Most customers in this category have one or two servers and a steady evolution roadmap.",
    includes:
      "Dedicated engineer, weekly reviews, ongoing tool additions, eval maintenance, Slack coverage.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for AI-native products with multiple MCP servers, multiple client surfaces, and continuous evolution as the spec and clients change.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, quarterly architecture reviews.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your MCP context",
    description:
      "Tell us about the data and tools you want to expose, the clients you want to support, and your current AI stack.",
  },
  {
    step: "02",
    title: "SethAI matches candidates",
    description:
      "SethAI screens for production MCP experience, tool design instinct, auth literacy, and AI-specific security awareness. Shortlist in 48 hours.",
  },
  {
    step: "03",
    title: "You interview the shortlist",
    description:
      "Talk to candidates directly. Walk through your use case and see how they think about server design and security.",
  },
  {
    step: "04",
    title: "Start with a paid trial week",
    description:
      "Real work building a small MCP server or extending an existing one. If the engineer is the right fit, the engagement continues. If not, we rematch.",
  },
];

const faqItems: FAQ[] = [
  {
    question: "What is MCP and why does it matter?",
    answer:
      "MCP is the Model Context Protocol, an open standard introduced by Anthropic in late 2024 that defines how LLM clients (like Claude, Cursor, Windsurf, and custom agents) talk to external tools, data sources, and prompt templates. Before MCP, every LLM-to-tool integration was bespoke. With MCP, you build a server once and any MCP-aware client can use it. In 2026 it has become the default agent integration layer.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How is hiring an MCP developer different from hiring an AI developer?",
    answer:
      "An AI developer is a generalist who builds AI features end to end: prompts, retrieval, evals, deployment. An MCP developer specializes in the protocol layer between LLM clients and the tools, data, and APIs they call. The skill stack overlaps but the day-to-day work is different. If your bottleneck is integrating LLMs with internal systems and exposing them safely to multiple clients, you want an MCP developer.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can an MCP developer also build the agent or client side?",
    answer:
      "Most can. We favor MCP developers who have built both server and client because the design choices on each side affect the other. If your use case is heavy on the agent loop or on retrieval, we may pair the MCP developer with a LangChain or RAG engineer for full coverage. Tell us your shape and we will match accordingly.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does an MCP developer cost in India?",
    answer:
      "Full-time senior MCP developers in India typically cost between 7,000 and 12,000 USD per month, all-in to the client. The premium over a generalist AI developer reflects the relative scarcity of engineers who have shipped production MCP servers. Build engagements (4 to 8 weeks) are quoted as fixed-fee projects.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Which clients support MCP today?",
    answer:
      "Claude Desktop and the Claude API support MCP natively. Cursor, Windsurf, and an expanding list of agent frameworks (LangChain, LangGraph, AutoGen) have first-class support. The OpenAI ecosystem has begun adopting compatible patterns, and several major dev tools have added MCP integration in 2026. The exact compatibility list moves quarterly, which is part of why eval discipline matters.",
    category: "ai",
    categoryLabel: "AI",
  },
  {
    question: "How fast can you place an MCP developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Because MCP is a newer specialty, the bench is smaller than for generalist AI developers, so we sometimes recommend pairing with a LangChain or RAG engineer if MCP-only depth is the bottleneck.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireMcpDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire MCP Developers from India",
    "Hire pre-vetted MCP developers from India who build Model Context Protocol servers, agent integrations, and LLM tooling for production AI products. SethAI-screened.",
    `${siteMetadata.url}/hire/mcp-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    {
      name: "MCP Developers",
      url: `${siteMetadata.url}/hire/mcp-developers/`,
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
            HIRE MCP DEVELOPER
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire MCP Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-700 dark:text-dark-200 max-w-2xl">
            Pre-vetted developers who build Model Context Protocol servers,
            agent integrations, and LLM tooling for production AI products.
            Screened by SethAI for protocol-level depth and AI-specific
            security awareness.
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
            Why MCP became the agent integration layer in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Until late 2024, every integration between an LLM and an
              internal tool, database, or API was custom. Each agent framework
              had its own tool format. Each LLM client had its own way of
              calling tools. Engineers were rebuilding the same plumbing on
              every project, with subtly different security and observability
              choices each time.
            </p>
            <p>
              The Model Context Protocol fixed that. It is the open standard,
              introduced by Anthropic, that defines a single way for any LLM
              client to discover, authenticate against, and call tools exposed
              by any server. Build an MCP server once and Claude, Cursor,
              Windsurf, and a growing list of agent frameworks can use it
              without bespoke adapters. In 2026, MCP has become the default
              agent integration layer for serious production work.
            </p>
            <p>
              Every engineer we place is screened by SethAI for production MCP
              experience, tool design instinct, auth and tenancy thinking, and
              AI-specific security awareness. The shortlist is filtered on
              what they have actually shipped, not on whether they can quote
              the spec.
            </p>
          </div>
        </div>
      </section>

      {/* Why hire from us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            Why hire MCP developers from Workforce Next
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
            What an MCP developer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the title. When you hire an
            MCP developer through Workforce Next, here is the work they take
            ownership of:
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
            Do you actually need an MCP developer yet?
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            MCP is overkill for some AI projects and essential for others.
            Here is how we help customers decide.
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
            Three ways to work with our MCP developers. Most customers start
            with a build engagement, then move to fractional or full-time as
            their MCP surface area grows.
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
            Common questions about hiring MCP developers
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
            Ready to ship MCP into production?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Tell us your AI stack and the systems you want to expose. We will
            match you with an MCP developer within 48 hours.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Get started
          </Button>
        </div>
      </section>
    </>
  );
}
