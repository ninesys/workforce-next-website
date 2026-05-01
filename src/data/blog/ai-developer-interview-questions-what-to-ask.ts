import type { BlogPost } from "./types";

const post: BlogPost = {
  body: `<p>Hiring an AI developer in 2026 is harder than hiring a regular backend engineer. The field moves faster than the interview process can keep up with. Most question banks you find online are either stale (asking about RNNs in a transformer-native world) or pointlessly abstract (derive the attention equation by hand). Neither tells you whether the candidate can actually build something that works in production.</p>
<p>At Workforce Next we screen AI developers every week, both for our own <a href="/hire/ai-developers">AI developer engagements</a> and for dedicated <a href="/hire/rag-developers">RAG</a> and <a href="/hire/langchain-developers">LangChain</a> roles. Here is the question framework we actually use and why each layer matters.</p>

<h2>Skip these first</h2>
<p>Before getting into what to ask, here is what to stop asking:</p>
<p><strong>"Explain how a transformer works."</strong> Every AI developer has read the Illustrated Transformer. Memorized answers tell you nothing about judgment.</p>
<p><strong>"Implement backpropagation from scratch."</strong> Unless they are building a training framework, they will never do this on your product.</p>
<p><strong>"What is the difference between GPT-4 and Claude?"</strong> This changes every quarter. A better signal is how they think about <a href="/blog/how-to-choose-ai-agent-framework">choosing models and agent frameworks</a>, not which one they used last.</p>

<h2>Layer 1: Can they reason about problem shape?</h2>
<p>The single highest-signal question we ask: <em>"Here is a business problem. Walk me through whether it needs an LLM, a classical ML model, or just plain software."</em></p>
<p>Give them something like: "Our support team categorizes incoming tickets into 12 tags. They process 500 per day. Would you use an LLM?" A weak candidate jumps straight to "I would use GPT-4 with few-shot prompting." A strong candidate asks about accuracy requirements, cost per ticket, latency, and whether a fine-tuned classifier would beat an LLM on both cost and accuracy at that volume.</p>
<p>This is the same instinct behind <a href="/blog/context-first-matching-why-tech-stack-is-not-enough">context-first matching</a>. Tech stack is easy. Judgment is what actually ships.</p>

<h2>Layer 2: Have they shipped something that survived real users?</h2>
<p>Ask: <em>"Tell me about an AI feature you shipped to real users. What broke first?"</em></p>
<p>The answer reveals whether they have operated an AI system in production, or just built demos. Real answers sound like: "Our RAG system worked great in eval but users started asking questions outside the indexed corpus and the model hallucinated confidently. We added a retrieval confidence threshold and a fallback." Demo answers sound like: "It worked on the test set."</p>
<p>Follow up with: "How did you know it was broken?" You want to hear about eval sets, user feedback loops, or observability. If they only noticed when a user complained, they have not built production AI.</p>

<h2>Layer 3: Can they debug an AI system?</h2>
<p>Present a failure scenario: <em>"Your RAG chatbot is giving wrong answers 20% of the time in production. Walk me through how you would diagnose it."</em></p>
<p>Listen for a structured debugging process: is it the retrieval (wrong chunks pulled), the chunking strategy (context split mid-concept), the embedding model (semantically similar but topically wrong), the prompt (ambiguous instructions), or the model itself (weak reasoning on the domain)? A strong AI developer has a mental model for each failure mode and knows which logs or evals to pull to isolate the layer.</p>
<p>Bonus signal: they mention they would run an eval set before changing anything, rather than guessing at fixes and re-deploying.</p>

<h2>Layer 4: How do they think about cost?</h2>
<p>Ask: <em>"This feature costs us $0.12 per query. We have 1 million queries a month. How would you cut the cost in half without hurting quality?"</em></p>
<p>Good answers include: route simpler queries to a smaller model, cache embeddings and semantically similar queries, shorten prompts by trimming retrieved context, batch requests where possible, move metadata filtering out of the LLM into retrieval. If they only say "use a cheaper model," they have not operated a real AI product.</p>

<h2>Layer 5: Do they have taste?</h2>
<p>Taste is the hardest thing to screen for, but the most important. Ask: <em>"Show me a prompt you are proud of and walk me through why you wrote it that way."</em></p>
<p>A good prompt engineer can explain tradeoffs: why they used XML tags vs markdown, why they put examples before or after the instructions, why they structured output one way vs another. A weak one will say "I just iterated until it worked." Both can ship, but the first one will ship faster and debug faster. If you are weighing whether to hire a dedicated prompt engineer at all, see our guide on <a href="/blog/do-you-still-need-a-prompt-engineer-in-2026">when the role still makes sense in 2026</a>.</p>

<h2>What this looks like end-to-end</h2>
<p>A full AI developer interview at our scale takes about 90 minutes: 20 minutes on problem-shape reasoning, 20 minutes on a real shipped feature, 30 minutes on a live debugging exercise, and 20 minutes on cost and taste. We skip the whiteboard algorithm round entirely for AI roles. It tests nothing the job requires.</p>
<p>If you are hiring your first AI developer, the highest-leverage thing you can do is design the interview around judgment and production experience, not model trivia. That is the same approach we take when matching dedicated AI developers into client teams. If you want help, <a href="/contact">reach out</a> and we will walk you through our screening loop.</p>`,
  "slug": "ai-developer-interview-questions-what-to-ask",
  "image": "/images/blog/ai-developer-interview-questions-what-to-ask.webp",
  "title": "AI Developer Interview Questions: What to Actually Ask (and What to Skip)",
  "excerpt": "Most AI developer interviews test memorized trivia. Here are the questions that actually reveal whether a candidate can ship a working product.",
  "tldr": "Most AI interview banks online ask the wrong things: transformer trivia, backprop derivations, GPT vs Claude. The framework that actually predicts production-ready hires has four layers: practical model judgment, retrieval and eval design, production hardening, and architecture decisions under cost and latency constraints. Each layer has 3 to 5 concrete questions in this post.",
  "category": "hiring",
  "categoryLabel": "Hiring & Teams",
  "author": "Gaurav",
  "authorRole": "Founder & Solution Architect",
  "publishedAt": "2026-04-20",
  "readTime": 8,
  "metaDescription": "A practical interview framework for hiring AI developers in 2026. Skip the transformer trivia and test for problem-shape reasoning, production experience, debugging, and cost judgment.",
  "ogTitle": "AI Developer Interview Questions That Actually Matter",
  "ogDescription": "Skip the transformer trivia. Test for problem-shape reasoning, production experience, debugging, and cost judgment.",
  "keywords": [
    "ai developer interview questions",
    "how to interview ai engineers",
    "llm engineer interview",
    "hire ai developer",
    "rag developer interview",
    "machine learning engineer interview",
    "ai hiring guide",
    "ai developer screening"
  ],
  "faq": [
    {
      "q": "What questions should I ask when interviewing an AI developer?",
      "a": "Focus on problem-shape reasoning (does this problem need an LLM?), production experience (what broke first in something you shipped?), debugging process for AI systems, cost optimization, and prompt engineering taste. Skip memorized trivia about transformer internals."
    },
    {
      "q": "Should I ask an AI developer to implement backpropagation on a whiteboard?",
      "a": "Only if they will be building training frameworks. For 95% of AI roles, the candidate will never do this on the job. Replace the algorithm round with a live debugging exercise on a realistic failure."
    },
    {
      "q": "How do I know if an AI developer has real production experience?",
      "a": "Ask them to describe a feature they shipped and what broke first. Real answers mention eval sets, retrieval tuning, hallucination mitigation, or observability. Demo-only candidates say 'it worked on the test set.'"
    },
    {
      "q": "What does good debugging look like for an AI system?",
      "a": "A strong AI developer isolates failures by layer: retrieval, chunking, embedding model, prompt, or the model itself. They run evals before changing anything and know which logs to inspect to narrow the cause."
    },
    {
      "q": "How long should an AI developer interview be?",
      "a": "About 90 minutes, split across problem-shape reasoning, a shipped feature deep-dive, a live debugging exercise, and cost and taste questions. Skip the traditional algorithm whiteboard round for AI roles."
    }
  ]
};

export default post;
