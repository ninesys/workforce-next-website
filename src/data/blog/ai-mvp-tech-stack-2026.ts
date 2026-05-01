import type { BlogPost } from "./types";

const post: BlogPost = {
  body: `<p>The shortest answer: pick boring, battle-tested services for everything except the AI feature itself. Use Clerk for auth, Resend for email, Stripe for payments, Supabase or Neon for Postgres, pgvector for retrieval, Vercel or Railway for hosting, and the Anthropic or OpenAI SDK directly without a framework. That stack ships a working AI MVP in 4 weeks for roughly $25 to $250 a month of infra and third-party fees, leaving all your engineering time for the thing that actually makes your product different.</p>

<p>This post is the tool-by-tool guide we actually use when building 4-week AI MVPs for clients. If you have not yet read the week-by-week breakdown, see <a href="/blog/how-to-build-ai-mvp-4-weeks-offshore-developer">how to build an AI MVP in 4 weeks with one offshore developer</a> first. This post is the companion stack reference.</p>

<h2>What belongs in an AI MVP stack, and what does not?</h2>
<p>Three principles govern every stack choice:</p>
<p><strong>1. Do not build anything a $20/month SaaS solves.</strong> Auth, payments, email, file uploads, logs. If you can rent it for under $50 a month in month one, rent it. You can build your own later when you have revenue and time.</p>
<p><strong>2. Own the AI layer.</strong> This is the only place in the stack where custom engineering earns its keep. Prompts, retrieval logic, eval sets, and model selection are where your product differentiates. Do not rent your way out of the thing users are paying for.</p>
<p><strong>3. Pick tools that scale 10x without migration.</strong> You will outgrow some pieces eventually, but an MVP should not force a rewrite in month four. Favor tools with a paid tier that covers the first year of likely growth.</p>
<p>Everything below follows from these three rules.</p>

<h2>Which LLM provider do you pick for an MVP?</h2>
<p>Three serious options in 2026: Claude (Anthropic), GPT-class (OpenAI), and Gemini (Google). Honest tradeoffs:</p>
<p><strong>Claude.</strong> Best out-of-the-box instruction following, strongest for long-form reasoning and document work, clean tool use, generous context windows. Our default for most MVP work unless there is a reason to pick otherwise.</p>
<p><strong>OpenAI.</strong> Largest ecosystem of tooling and community examples, strong structured output, cheapest at the small-model tier. Pick when your team has existing GPT experience or you need the breadth of third-party integrations.</p>
<p><strong>Gemini.</strong> Best native multimodal support (image, video, audio), strong for long-context retrieval, competitive pricing at scale. Pick when multimodal is central to your product.</p>
<p>Pragmatic MVP move: build against an abstraction layer (the OpenAI SDK shape works for most providers, or use an AI gateway like Vercel AI Gateway or OpenRouter) so switching providers is a config change, not a rewrite. Do not spend week one agonizing over the choice.</p>

<h2>LangChain, LlamaIndex, or no framework at all?</h2>
<p>For an MVP, default to no framework. Write against the provider SDK directly (Anthropic SDK or OpenAI SDK). Tool calling, structured output, and streaming are native in every major model API now. You will ship faster and debug faster without the indirection.</p>
<p>Reach for LangChain/LangGraph when your workflow has real multi-step state or you need the broad integration ecosystem. Reach for LlamaIndex when retrieval is the dominant workload and default chunking and search quality matters more than the rest of the stack. Full decision framework in our guide on <a href="/blog/how-to-choose-ai-agent-framework">how to choose an AI agent framework</a>.</p>
<p>The one scenario where a framework is obviously right at MVP stage: a research-assistant or multi-specialist pipeline that maps cleanly to CrewAI-style agent teams. Most MVPs are not this.</p>

<h2>What do you use for retrieval and vector search?</h2>
<p>Default at MVP scale: <strong>pgvector</strong> on your existing Postgres. If you already have Supabase or Neon, you already have pgvector. One less service to manage, good enough to 100k+ embedded chunks with decent indexing, and you can migrate to a dedicated vector DB later if retrieval becomes the real bottleneck.</p>
<p>Pick a dedicated vector DB (Pinecone, Qdrant, Weaviate) when:</p>
<ul>
<li>Your corpus is already above 1M embedded chunks in week one.</li>
<li>You need advanced features like hybrid search with built-in reranking.</li>
<li>You are running multi-tenant retrieval with strict namespacing.</li>
</ul>
<p>Qdrant self-hosted on a $20/month VPS is our pick when pgvector is not enough but Pinecone's minimum bill feels premature. See our <a href="/blog/rag-vs-fine-tuning-when-to-use-which">RAG vs fine-tuning</a> guide if you are not sure retrieval is the right approach at all.</p>

<h2>What about the backend, frontend, and hosting?</h2>
<p>Opinionated defaults that ship fast:</p>
<p><strong>Backend.</strong> FastAPI (Python) if your team is Python-heavy or your AI pipeline is Python-native. Next.js API routes or Hono (TypeScript) if your team is TypeScript-heavy and you want one repo for everything. Both ship 4-week MVPs fine.</p>
<p><strong>Frontend.</strong> Next.js is the default. App Router, Server Components, Tailwind, shadcn/ui. It covers auth, SEO, streaming AI responses, and hosting on Vercel in one coherent stack. Vite plus React is a fine alternative for SPA-style apps without SSR needs.</p>
<p><strong>Hosting.</strong> Vercel for Next.js apps (zero-config deploys, great DX, cost-effective up to roughly $100 a month). Railway or Fly for FastAPI backends (Dockerized, $5 to $30 a month, no vendor lock). AWS or GCP only if you have a compliance or existing-infra reason to. For the workflow-automation layer, our <a href="/blog/best-workflow-automation-tools-2026">2026 comparison of n8n, Zapier, Step Functions, and others</a> covers that decision separately.</p>
<p>Our <a href="/hire/fullstack-developers">fullstack developers</a> ship this shape of stack in 4-week sprints routinely. The key is not fighting the stack: pick the defaults and ship the product.</p>

<h2>How do you skip building auth, payments, and email?</h2>
<p>Three SaaS categories that should never be custom in an MVP:</p>
<p><strong>Auth.</strong> Clerk is the fastest by a wide margin. Drop-in UI, social logins, multi-factor, org support, and reasonable pricing up to 10k monthly active users. Supabase Auth is a fine alternative if you are already on Supabase. Auth.js (next-auth) for more control, but it will cost you a day or two of setup you probably do not have.</p>
<p><strong>Payments.</strong> Stripe for subscription and usage billing. Paddle or Lemon Squeezy if you want a merchant-of-record setup (they handle VAT and sales tax globally). Integrating any of these takes under a day, building your own is weeks of PCI-adjacent pain.</p>
<p><strong>Transactional email.</strong> Resend is our default: clean API, React email templates, generous free tier. Postmark for deliverability-critical use cases (password resets, receipts). AWS SES if you already run AWS heavily and want the lowest per-email cost.</p>
<p>Combined cost at MVP stage: under $50 a month for all three, probably under $20 if you are on free tiers.</p>

<h2>What observability is worth the setup time at MVP stage?</h2>
<p>Most observability tools are overkill for an MVP. The three that are worth the setup time on day one:</p>
<p><strong>LLM observability.</strong> Langfuse (open source, self-hosted or cloud) or Helicone. Both let you see every prompt, response, latency, and cost per request without custom instrumentation. Setup takes 15 minutes and pays for itself the first time a prompt misbehaves in production.</p>
<p><strong>Application errors.</strong> Sentry free tier. Ten minutes of setup, covers frontend and backend, catches what users would have otherwise silently rage-quit over.</p>
<p><strong>Basic analytics.</strong> Vercel Analytics if you are on Vercel, PostHog if you want product analytics (event tracking, funnels) on the free tier.</p>
<p>Skip: OpenTelemetry (too much setup work for MVP), Datadog (too expensive), custom dashboards (you will not look at them).</p>

<h2>How do costs add up for a typical 4-week MVP?</h2>
<p>Rough month-one total for a typical AI MVP on the stack above:</p>
<table>
  <thead>
    <tr><th>Category</th><th>Tool</th><th>Typical MVP cost/month</th></tr>
  </thead>
  <tbody>
    <tr><td>LLM provider</td><td>Claude or GPT-class</td><td>$20 to $150 (eval + early user volume)</td></tr>
    <tr><td>Backend hosting</td><td>Railway or Fly</td><td>$5 to $30</td></tr>
    <tr><td>Frontend hosting</td><td>Vercel</td><td>$0 to $20 (Hobby or Pro start)</td></tr>
    <tr><td>Database</td><td>Supabase or Neon</td><td>$0 to $25</td></tr>
    <tr><td>Vector DB</td><td>pgvector (in Postgres) or Qdrant VPS</td><td>$0 (included) or $20</td></tr>
    <tr><td>Auth</td><td>Clerk</td><td>$0 (free tier covers MVP)</td></tr>
    <tr><td>Payments</td><td>Stripe</td><td>$0 + 2.9% per txn</td></tr>
    <tr><td>Email</td><td>Resend</td><td>$0 (free 3k emails/mo)</td></tr>
    <tr><td>LLM observability</td><td>Langfuse Cloud</td><td>$0 (free tier)</td></tr>
    <tr><td>Error tracking</td><td>Sentry free</td><td>$0</td></tr>
    <tr><td><strong>Total</strong></td><td></td><td><strong>~$25 to $250/mo</strong></td></tr>
  </tbody>
</table>
<p>LLM spend is the only line that scales unpredictably with usage. The rest is effectively fixed-cost through the first 1,000 users. Build the product, then optimize.</p>

<h2>What should you skip entirely at MVP stage?</h2>
<p>Common traps that add weeks with no product benefit:</p>
<ul>
<li><strong>Custom auth.</strong> Seriously, never.</li>
<li><strong>Fine-tuning a model.</strong> Start with prompt engineering and retrieval. See our <a href="/blog/rag-vs-fine-tuning-when-to-use-which">RAG vs fine-tuning</a> decision tree.</li>
<li><strong>Building your own observability or eval platform.</strong> Langfuse gets you 90 percent of what you need.</li>
<li><strong>Kubernetes.</strong> Vercel, Railway, and Fly handle all the container and orchestration work. You do not need K8s for an MVP.</li>
<li><strong>Microservices.</strong> One service, one database, one repo. Split later if you actually need to.</li>
<li><strong>A CI/CD pipeline beyond "git push".</strong> Vercel and Railway both auto-deploy on push. Add GitHub Actions only when tests are slow enough to need it.</li>
<li><strong>Custom admin panel.</strong> Retool or Supabase's built-in dashboard cover 90 percent of ops needs in month one.</li>
<li><strong>A dedicated prompt engineer on day one.</strong> See our guide on <a href="/blog/do-you-still-need-a-prompt-engineer-in-2026">whether you still need a prompt engineer in 2026</a>. For an MVP, one AI developer who prompt-engineers as part of the job is the right shape.</li>
</ul>

<h2>The shortest version</h2>
<p>Pick boring for everything except the AI feature. Clerk for auth, Stripe for payments, Resend for email, Supabase or Neon for Postgres, pgvector for retrieval, Vercel or Railway for hosting, the Anthropic or OpenAI SDK directly (no framework), Langfuse for LLM observability, Sentry for errors. Total infra under $250 a month for a typical MVP through the first thousand users. If you want a developer who already ships this stack in 4-week sprints, our <a href="/hire/fullstack-developers">fullstack engineers</a> and <a href="/hire/ai-developers">AI developers</a> have done this across dozens of MVPs. <a href="/contact">Get in touch</a> and we will scope your build.</p>`,
  "slug": "ai-mvp-tech-stack-2026",
  "image": "/images/blog/ai-mvp-tech-stack-2026.webp",
  "title": "The AI MVP Tech Stack in 2026: What We Actually Ship With (and What We Skip)",
  "excerpt": "The exact tool-by-tool stack we use to ship an AI MVP in 4 weeks. Clerk for auth, Stripe for payments, Resend for email, Supabase or Neon for Postgres, pgvector for retrieval, Vercel or Railway for hosting, Anthropic or OpenAI SDK direct. Total infra under $250 a month through the first 1,000 users.",
  "tldr": "Pick boring, battle-tested services for everything except the AI feature: Clerk for auth, Resend for email, Stripe for payments, Supabase or Neon for Postgres, pgvector for retrieval, Vercel or Railway for hosting, and the Anthropic or OpenAI SDK directly without a framework. That stack ships a working AI MVP in 4 weeks for 25 to 250 dollars a month of infra, leaving engineering time for the actual differentiation.",
  "category": "engineering",
  "categoryLabel": "Engineering",
  "author": "Gaurav",
  "authorRole": "Founder & Solution Architect",
  "publishedAt": "2026-04-24",
  "readTime": 10,
  "metaDescription": "A tool-by-tool guide to the AI MVP tech stack we ship with in 2026. LLM provider, framework (or none), vector DB, backend, frontend, hosting, auth, payments, email, and observability, with monthly cost breakdown under $250.",
  "ogTitle": "The AI MVP Tech Stack in 2026 (and What We Skip)",
  "ogDescription": "The exact tool-by-tool stack we use to ship AI MVPs in 4 weeks. Total infra under $250 a month through the first 1,000 users.",
  "keywords": [
    "ai mvp tech stack 2026",
    "best tools for ai mvp",
    "ai mvp architecture",
    "llm provider for mvp",
    "vector database for mvp",
    "nextjs ai mvp stack",
    "ai startup tech stack",
    "how to build ai mvp tools",
    "ai mvp cost breakdown",
    "pgvector vs pinecone mvp"
  ],
  "faq": [
    {
      "q": "What is the best LLM provider for an AI MVP in 2026?",
      "a": "Default to Claude (Anthropic) for most MVP work thanks to strong instruction following, long context, and clean tool use. Pick OpenAI when you need the largest ecosystem or cheapest small-model tier. Pick Gemini when multimodal (image, video, audio) is central to the product. Build against an abstraction so switching is a config change."
    },
    {
      "q": "Should I use LangChain or LlamaIndex for an AI MVP?",
      "a": "Default to neither. For an MVP, write against the Anthropic or OpenAI SDK directly. Tool calling, structured output, and streaming are native in the provider APIs. Reach for LangGraph if your workflow has real multi-step state or LlamaIndex if retrieval quality is your dominant workload."
    },
    {
      "q": "What vector database should I use for an AI MVP?",
      "a": "pgvector on your existing Postgres (Supabase or Neon both ship it). Good enough to 100k+ embedded chunks, one less service to manage, and you can migrate later. Switch to Pinecone, Qdrant, or Weaviate only if you are above 1M chunks, need advanced hybrid search, or require multi-tenant namespacing."
    },
    {
      "q": "How much does an AI MVP cost per month to run?",
      "a": "Typically $25 to $250 a month for all infra and third-party services through the first 1,000 users. LLM API cost is the only line that scales unpredictably. Everything else (hosting, database, auth, payments, email, observability) is effectively fixed-cost on free or cheap tiers at MVP stage."
    },
    {
      "q": "Should I build my own auth for an AI MVP?",
      "a": "No. Use Clerk if you want fastest setup with drop-in UI, social logins, and org support. Use Supabase Auth if you are already on Supabase. Auth.js (next-auth) if you need deep customization. Building your own auth is days to weeks of risk and cost you will not recover on an MVP."
    },
    {
      "q": "Is pgvector good enough for MVP retrieval?",
      "a": "Yes, for the vast majority of MVPs. It handles up to a few hundred thousand embedded chunks with decent indexing, and it lives inside the Postgres you already have. Migrate to Pinecone or Qdrant only when measured retrieval quality, latency, or scale forces it."
    },
    {
      "q": "What observability do I actually need at MVP stage?",
      "a": "Three tools, total setup under an hour: Langfuse or Helicone for LLM calls (prompt, response, latency, cost per request), Sentry for application errors, and Vercel Analytics or PostHog for product analytics. Skip OpenTelemetry, Datadog, and custom dashboards until you have real usage to observe."
    },
    {
      "q": "What should I skip entirely when building an AI MVP?",
      "a": "Custom auth, fine-tuning (start with RAG and prompts), custom observability, Kubernetes, microservices, complex CI/CD beyond git push, and a custom admin panel. Each one adds days or weeks of work that do not make the product better for early users."
    }
  ]
};

export default post;
