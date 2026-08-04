import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "how-to-build-an-mcp-server",
  image: "/images/blog/how-to-build-an-mcp-server.webp",
  title: "How to Build an MCP Server: Step-by-Step Guide for Any LLM Client",
  excerpt:
    "A practical walkthrough for building your first MCP server: defining tools, choosing a transport, running it locally against Claude Desktop, then connecting the same server to Cursor, a custom agent, and other LLM clients without rewriting anything.",
  tldr:
    "Building an MCP server has five steps: pick the smallest useful set of tools (three to five), define each one with a strict input schema and typed output, choose a transport (stdio for local testing, streamable HTTP for anything hosted), wire the tool handlers to your existing API or database, then test against two different clients before calling it done. The official TypeScript and Python SDKs handle the protocol plumbing, so most of the work is tool design and auth, not implementing MCP itself. Once it runs, the same server works from Claude Desktop, Cursor, Windsurf, and any framework with an MCP adapter, with no per-client rewrite.",
  body: `<p>You have read about what MCP is and decided you need one. This post is the part that comes after that decision: an actual walkthrough of building a working MCP server, from an empty project to something Claude Desktop and a second client can both call. If you have not yet decided whether you need MCP at all, start with <a href="/blog/mcp-server-architecture-vs-rest-api/">MCP server architecture explained</a>, which covers the three transport types and how MCP differs from a REST API.</p>

<h2>What do you need before you start building?</h2>

<p>Three things, decided before you write code:</p>

<ul>
  <li><strong>The smallest useful set of tools.</strong> Three to five tools that solve one real workflow. Not a mirror of your entire API surface. If you cannot describe the workflow in one sentence ("let the model search our docs and open a support ticket"), you are scoping too wide.</li>
  <li><strong>A transport decision.</strong> Stdio for local testing and desktop-only tools, streamable HTTP if this will ever be hosted and called by more than one user. Start with stdio even for a server headed to production, since it is the fastest way to iterate, then move to streamable HTTP once the tools are stable.</li>
  <li><strong>What backend the tools actually call.</strong> Almost every MCP server is a thin layer over something that already exists, your REST API, your database, or a third-party API you already integrate with. Decide this upfront so tool handlers are not doing new business logic, just translating.</li>
</ul>

<h2>How do you set up the project?</h2>

<p>Anthropic maintains official SDKs for <a href="https://github.com/modelcontextprotocol/typescript-sdk" rel="noopener">TypeScript</a> and <a href="https://github.com/modelcontextprotocol/python-sdk" rel="noopener">Python</a> that implement the protocol handshake, message framing, and transport handling for you. Use one of these rather than implementing the wire protocol yourself, almost nobody hand-rolls this layer.</p>

<p>A minimal TypeScript server looks like this:</p>

<pre><code>import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "docs-search-server",
  version: "1.0.0",
});

server.tool(
  "search_docs",
  "Search the internal documentation for a query",
  { query: z.string().describe("The search query") },
  async ({ query }) => {
    const results = await searchInternalDocs(query);
    return {
      content: [{ type: "text", text: JSON.stringify(results) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);</code></pre>

<p>That is a complete, working MCP server with one tool. The SDK handles discovery (the client asks "what tools do you have," the SDK answers from your registered tools), input validation against the schema, and error formatting. Your job is the tool logic inside the handler, in this case a single call to <code>searchInternalDocs</code>, which is ordinary application code that could just as easily sit behind a REST endpoint.</p>

<h2>How do you design good tool definitions?</h2>

<p>This is where most first attempts go wrong, and it has nothing to do with the protocol. The failure mode is building one enormous tool that tries to do everything ("manage_documents" that creates, reads, updates, deletes, and searches) instead of several small, deterministic tools.</p>

<ul>
  <li><strong>One tool, one action.</strong> <code>search_docs</code>, <code>create_ticket</code>, <code>get_order_status</code>. Not <code>manage_support</code>.</li>
  <li><strong>Strict input schemas.</strong> Use the schema library your SDK expects (Zod for TypeScript, Pydantic for Python) to constrain inputs tightly. A loose schema means the model can call your tool with garbage and your handler has to defend against it instead of trusting the contract.</li>
  <li><strong>Descriptions written for the model, not for a human reading docs.</strong> The tool description is what the model uses to decide when to call it. "Search the internal documentation for a query" is clearer to a model deciding whether this tool answers the current question than a terse label like "docs search."</li>
  <li><strong>Typed, minimal output.</strong> Return exactly what the model needs to answer the user, not your full database row. Every extra field is tokens the model has to read and potentially expose back to the user.</li>
  <li><strong>Predictable errors.</strong> When something goes wrong, return a clear error message in the tool response rather than throwing an unhandled exception. The model can recover from "no documents matched that query," it cannot recover from a stack trace.</li>
</ul>

<h2>How do you test it locally against Claude Desktop?</h2>

<p>Claude Desktop can launch your stdio server directly, which makes it the fastest local test loop. Add your server to Claude Desktop's config file:</p>

<pre><code>{
  "mcpServers": {
    "docs-search-server": {
      "command": "node",
      "args": ["/path/to/your/server/index.js"]
    }
  }
}</code></pre>

<p>Restart Claude Desktop, and your tools show up in a running conversation. Ask a question that should trigger the tool ("search our docs for the refund policy") and confirm the model calls it, reads the result correctly, and answers using it. This loop, edit code, restart Claude Desktop, ask a triggering question, is the fastest way to iterate on tool design before you add auth or move to a hosted transport.</p>

<h2>How do you move from stdio to a hosted server?</h2>

<p>Once the tools work locally, wrap the same handlers in a streamable HTTP transport instead of stdio. The SDKs make this a transport swap, not a rewrite, the tool definitions and handler logic stay the same:</p>

<ul>
  <li>Deploy behind a standard HTTP server (Express, Fastify, FastAPI depending on your SDK language).</li>
  <li>Add authentication at this layer. Bearer tokens are the simplest starting point; move to OAuth-issued session tokens if you need per-user scoping, or mTLS for server-to-server deployments where you control both ends.</li>
  <li>Add rate limiting and per-tenant quotas if more than one customer will call this server. This is the same discipline you already apply to your REST API, applied to the MCP endpoint instead.</li>
  <li>Log every tool call with enough context to debug a bad model decision after the fact, what tool was called, what arguments, what it returned. This is what actually shows up as an incident later, not the protocol layer itself.</li>
</ul>

<p>The full breakdown of which transport fits which deployment shape, and how auth typically gets implemented at this layer, is in <a href="/blog/mcp-server-architecture-vs-rest-api/">MCP server architecture explained</a>.</p>

<h2>How do you connect the same server to a second LLM client?</h2>

<p>This is the actual payoff. Once your server runs over streamable HTTP with proper auth, connect it to a second client without touching the server code:</p>

<ul>
  <li><strong>Cursor and Windsurf</strong> take an MCP server URL and bearer token in their settings, the same server you built for Claude Desktop works immediately.</li>
  <li><strong>A custom agent on LangChain or LangGraph</strong> uses an MCP adapter that treats your server's tools as entries in the agent's normal tool inventory, alongside anything else it calls.</li>
  <li><strong>GPT-based tooling</strong> is adding direct MCP support, and in the meantime a thin adapter layer can translate your MCP tool schemas into OpenAI function-calling format if you need it today.</li>
</ul>

<p>Test against at least two clients before calling the server done. Single-client testing hides bugs where you accidentally relied on one client's specific behavior, a particular way it formats tool arguments, or an assumption about response timing that only holds for that one implementation.</p>

<h2>What should you check before shipping to production?</h2>

<p>A short list that catches most of what goes wrong after launch:</p>

<ol>
  <li><strong>Eval suite.</strong> A set of test conversations that exercise each tool and check the model calls it correctly and handles the response. Run this whenever you change a tool definition or a client library updates, model behavior around tool calling shifts more than people expect.</li>
  <li><strong>Auth review.</strong> Confirm token scoping actually prevents one tenant's agent from calling another tenant's data, not just that a token is required.</li>
  <li><strong>Prompt injection defense.</strong> If any tool returns content the model will read (search results, document contents, ticket text), that content can contain instructions aimed at the model, not the user. Treat retrieved content as untrusted input, the same way you would treat user-submitted HTML on a web page.</li>
  <li><strong>Version negotiation.</strong> The MCP spec evolves. Make sure your server handles a client that speaks an older or newer protocol version gracefully instead of failing the connection outright.</li>
  <li><strong>Observability.</strong> Trace every tool call the way you would trace an API request. When a user reports the agent "did the wrong thing," you need the tool call log to debug it, not a guess.</li>
</ol>

<h2>Should you build this yourself or bring in someone who has shipped one before?</h2>

<p>A first MCP server following this guide is a reasonable weekend-to-two-week build for a team with solid backend experience. Where teams lose time is not the SDK, it is tool design (the mega-tool trap), auth for multi-tenant cases, and eval discipline, none of which the SDK documentation covers well because they are judgment calls specific to your product. If you want a second set of eyes on the design before you build, or want the first server delivered as a fixed-scope engagement, our <a href="/hire/mcp-developers/">MCP developers</a> ship a production server, eval suite, and documentation in a 4 to 8 week build. The screening signals we use to tell a developer who has actually shipped one of these from someone who has only read the spec are in <a href="/blog/mcp-explained-how-to-hire-mcp-developers/">MCP explained: how to hire MCP server developers in 2026</a>.</p>

<h2>Final word</h2>

<p>The protocol part of building an MCP server is the easy part, the official SDKs handle it in a few dozen lines. The work that determines whether the server is actually good is tool design, auth, and testing against more than one client before you call it shipped. Start with three tools, stdio, and Claude Desktop. Add a transport, auth, and a second client once the first loop works. That order keeps you from debugging deployment and tool design at the same time. <a href="/contact/">Talk to us</a> if you want a build partner for the parts that are not the protocol.</p>`,
  category: "engineering",
  categoryLabel: "Engineering",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-08-04",
  readTime: 11,
  metaDescription:
    "Step-by-step guide to building an MCP server: defining tools, choosing a transport, testing against Claude Desktop, then connecting the same server to Cursor, custom agents, and other LLM clients.",
  ogTitle: "How to Build an MCP Server: Step-by-Step Guide",
  ogDescription:
    "A practical walkthrough for building an MCP server that works across Claude, Cursor, and any LLM client, from tool design to production checks.",
  keywords: [
    "how to build an MCP server",
    "MCP server tutorial",
    "build MCP server step by step",
    "MCP server for Claude Desktop",
    "MCP server tool design",
    "connect MCP server to multiple LLMs",
    "MCP server TypeScript Python SDK",
    "MCP server authentication tutorial",
    "how to test MCP server",
  ],
  faq: [
    {
      q: "What do I need before I start building an MCP server?",
      a: "Three decisions made upfront: the smallest useful set of tools (three to five, solving one real workflow), a transport choice (stdio for local testing, streamable HTTP for hosted multi-user servers), and what existing backend the tools will call. Most MCP servers are a thin layer over an API or database you already have, not new business logic.",
    },
    {
      q: "Do I need to implement the MCP protocol myself?",
      a: "No. Anthropic maintains official TypeScript and Python SDKs that handle the protocol handshake, tool discovery, input validation, and message framing. Your work is defining tools and writing the handler logic inside them, not implementing the wire protocol.",
    },
    {
      q: "What is the most common mistake when building a first MCP server?",
      a: "Building one large tool that tries to do everything, instead of several small, deterministic tools. A tool like manage_documents that creates, reads, updates, deletes, and searches gives the model an ambiguous surface to reason over. Separate tools with strict input schemas and clear, single-purpose descriptions perform far better in practice.",
    },
    {
      q: "How do I test an MCP server locally before deploying it?",
      a: "Claude Desktop can launch a stdio server directly from its config file, which makes it the fastest local test loop. Add the server, restart Claude Desktop, and ask a question that should trigger your tool. Confirm the model calls the right tool, reads the result correctly, and answers using it before adding auth or moving to a hosted transport.",
    },
    {
      q: "How do I connect the same MCP server to Claude, Cursor, and other clients?",
      a: "Once the server runs over streamable HTTP with authentication, no server code changes are needed per client. Cursor and Windsurf take a server URL and token in their settings. Custom agents on LangChain or LangGraph use an MCP adapter that treats your tools as part of the agent's normal tool inventory. Test against at least two clients before considering the server done.",
    },
    {
      q: "What should I check before putting an MCP server in production?",
      a: "An eval suite that exercises each tool, an auth review confirming token scoping actually isolates tenants, prompt injection defenses for any tool that returns model-readable content, graceful handling of protocol version differences between clients, and tracing on every tool call so you can debug unexpected agent behavior after the fact.",
    },
    {
      q: "How long does it take to build a first MCP server?",
      a: "A weekend to two weeks for a team with solid backend experience, following the tool design and testing steps in order: define tools, test locally over stdio against Claude Desktop, add a hosted transport and auth, then test against a second client. Teams usually lose time on tool design and auth decisions, not the protocol implementation itself.",
    },
  ],
};

export default post;
