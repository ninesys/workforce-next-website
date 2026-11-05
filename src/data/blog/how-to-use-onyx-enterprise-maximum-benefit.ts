import type { BlogPost } from "./types";

const post: BlogPost = {
  body: `<p>Most teams that deploy Onyx get a working chat interface over their documents in the first week, then stop there and leave most of the actual value on the table. The platform does a lot more than a single search box once it is configured properly: scoped connectors, permission-aware retrieval, and purpose-built assistants for different teams. Here is how to actually get the full benefit out of an Onyx deployment, not just the default setup.</p>

<figure style="margin:32px 0">
  <img src="/images/blog/how-to-use-onyx-enterprise-maximum-benefit.webp" alt="Onyx chat interface showing different enterprise use cases including IT support, HR policy search, and engineering documentation" style="width:100%;height:auto;border-radius:12px" />
  <figcaption style="margin-top:8px;font-size:13px;color:#64748b;text-align:center">Source: <a href="https://github.com/onyx-dot-app/onyx" target="_blank" rel="noopener noreferrer">Onyx (open source, GitHub)</a></figcaption>
</figure>

<h2>What does Onyx actually do beyond basic document search?</h2>
<p>Onyx is an open-source, self-hostable platform that connects to your existing tools, Slack, Confluence, Google Drive, Jira, GitHub, and more, indexes the content with permission awareness intact, and serves it through a chat interface backed by retrieval-augmented generation. The basic setup gets you a working search box. The full value comes from connecting every source your teams actually use, not just one or two, and from building separate assistants scoped to specific teams and use cases instead of one generic bot for the whole company.</p>

<h2>How many connectors should you actually set up?</h2>
<p>More than most teams start with, and in a specific order. Start with the two or three sources that answer the most repeated questions today, usually a wiki or Confluence space and whatever ticketing or Slack history holds tribal knowledge. Add HR and policy documentation next, since policy questions are high-volume and low-risk to automate. Engineering docs, codebases, and CRM data come after, once the core knowledge base is proven out. Connecting everything on day one usually means a messy index and noisy answers before anyone trusts the system. Narrow and useful first, broad later.</p>

<h2>How do you keep sensitive documents from leaking into answers they should not reach?</h2>
<p>Onyx respects the permission structure of each connected source by default, so a document a user cannot open in Google Drive will not surface in their Onyx answers either. The part teams miss is auditing that this actually maps correctly after setup, especially for sources with inconsistent permission hygiene like an old wiki where half the pages were never properly restricted. Run a permission audit on your source systems before connecting them, not after, since fixing access control after an AI search tool has already indexed everything is a much bigger cleanup than fixing it first.</p>

<h2>Should every team use the same assistant, or separate ones?</h2>
<p>Separate ones, almost always. A single company-wide assistant tends to default to generic, hedged answers because it is trying to be useful to everyone at once. Purpose-built assistants, one scoped to IT and access questions, one to HR policy, one to engineering documentation, each with its own prompt and its own document set, give sharper and more specific answers because the assistant is not guessing which audience is asking. Onyx supports this natively through its assistant configuration. Most of the "the AI gives vague answers" complaints we see trace back to one generic assistant trying to cover every use case instead of a few focused ones.</p>

<h2>What is the realistic maintenance load once it is live?</h2>
<p>Lower than running the equivalent system from scratch, but not zero. Expect ongoing work in three areas: connector health (sources change their API or auth setup and need reconnecting), index freshness (new documents and deprecated ones need regular re-syncing), and assistant tuning (prompts and document scoping drift as teams change how they work). None of this requires a dedicated full-time hire for a typical mid-size deployment, but it does need someone who owns it, not an "everyone and no one" arrangement where connector failures go unnoticed for weeks.</p>

<h2>When does self-hosting Onyx matter more than using a SaaS alternative?</h2>
<p>When the data involved, HR records, legal documents, financial data, cannot legally or contractually leave your own infrastructure. Self-hosting also matters if you want to avoid per-seat SaaS pricing that scales awkwardly as headcount grows, or if your security team requires an on-prem or VPC deployment as a hard requirement rather than a preference. If none of those apply and speed to value matters more than infrastructure control, a hosted alternative might get you running faster. We cover this tradeoff in more depth in <a href="/blog/self-hosted-vs-saas-ai-search-enterprise-hr-data/">self-hosted vs SaaS AI search for internal knowledge</a>.</p>

<h2>What should you fix first if your current Onyx deployment is underperforming?</h2>
<p>Check connector count and permission accuracy first, since a thin index with permission gaps is the most common cause of both "it does not know anything" and "it surfaced something it should not have" complaints. Check assistant scoping second, since one generic assistant trying to serve every team is the most common cause of vague, low-trust answers. Maintenance ownership is third: a system with no clear owner degrades quietly until someone notices connectors have been broken for a month.</p>

<p>If you want help deploying, expanding, or maintaining an Onyx instance for your company, including connector setup, permission auditing, and assistant configuration for IT, HR, and engineering separately, <a href="/contact/">talk to us</a>. We run this as an ongoing service, an extended engineering team for the project, rather than a one-time setup and walk away.</p>`,
  slug: "how-to-use-onyx-enterprise-maximum-benefit",
  image: "/images/blog/how-to-use-onyx-enterprise-maximum-benefit.webp",
  title: "How to Use Onyx in the Enterprise to Get Maximum Benefit",
  seoTitle: "How to Use Onyx in the Enterprise",
  excerpt:
    "Most Onyx deployments stop at a single working search box and leave most of the value on the table. Here is how to actually get the full benefit: connector sequencing, permission auditing, separate assistants per team, and realistic ongoing maintenance.",
  tldr:
    "Getting the most out of Onyx means going beyond the default single-assistant setup: sequence connectors from highest-value sources first, audit source permissions before connecting (not after), build separate scoped assistants per team instead of one generic bot, and assign clear ownership for ongoing connector health and index freshness.",
  category: "engineering",
  categoryLabel: "Engineering",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-11-03",
  readTime: 9,
  metaDescription:
    "How to use Onyx in the enterprise to get maximum benefit: connector sequencing, permission auditing, separate assistants per team, and realistic ongoing maintenance for a self-hosted RAG deployment.",
  ogTitle: "How to Use Onyx in the Enterprise to Get Maximum Benefit",
  ogDescription:
    "Most Onyx deployments stop at a single search box. Here is how to actually get the full value: connectors, permissions, scoped assistants, and maintenance.",
  keywords: [
    "how to use Onyx",
    "Onyx enterprise deployment",
    "Onyx AI setup guide",
    "Onyx connectors",
    "Onyx assistants configuration",
    "self-hosted RAG maintenance",
    "Onyx permission aware search",
  ],
  faq: [
    {
      q: "What is Onyx?",
      a: "Onyx is an open-source, self-hostable platform that connects to your existing tools (Slack, Confluence, Google Drive, Jira, GitHub, and more), indexes the content with permission awareness intact, and serves it through a chat interface backed by retrieval-augmented generation.",
    },
    {
      q: "How many connectors should I set up when deploying Onyx?",
      a: "Start with two or three sources that answer the most repeated questions today, usually a wiki and ticketing or Slack history. Add HR and policy documentation next. Engineering docs and CRM data come after the core knowledge base is proven. Connecting everything at once usually produces a noisy, low-trust index.",
    },
    {
      q: "Does Onyx respect existing document permissions?",
      a: "Yes, it inherits the permission structure of each connected source by default. The common gap is source systems with inconsistent permission hygiene, so auditing access control before connecting a source is important, not optional.",
    },
    {
      q: "Should I use one Onyx assistant for the whole company or multiple?",
      a: "Multiple, scoped to specific teams and use cases (IT, HR, engineering). A single company-wide assistant tends to default to generic, hedged answers. Purpose-built assistants with their own prompt and document scope give sharper, more specific answers.",
    },
    {
      q: "How much ongoing maintenance does an Onyx deployment need?",
      a: "Less than building the equivalent system from scratch, but not zero. Expect ongoing work in connector health, index freshness, and assistant tuning. It does not usually require a dedicated full-time hire, but it does need a clear owner.",
    },
    {
      q: "When should a company self-host Onyx instead of using a SaaS AI search tool?",
      a: "When the data involved (HR records, legal documents, financial data) cannot legally or contractually leave your own infrastructure, when per-seat SaaS pricing scales awkwardly with headcount, or when a security team requires an on-prem or VPC deployment.",
    },
  ],
};

export default post;
