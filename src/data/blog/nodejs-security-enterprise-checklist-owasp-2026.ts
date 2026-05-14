import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "nodejs-security-enterprise-checklist-owasp-2026",
  image: "/images/blog/nodejs-security-enterprise-checklist-owasp-2026.webp",
  title: "Node.js Security Checklist for Enterprise Teams (OWASP-Aligned, 2026)",
  excerpt:
    "OWASP-aligned Node.js security checklist for enterprise teams. Input validation, JWT pitfalls, prototype pollution, SSRF, npm supply chain, and the controls that actually matter.",
  tldr: "Most Node.js security incidents in 2026 trace back to a small set of causes: missing input validation, JWT misuse, prototype pollution, SSRF in webhook handlers, and supply-chain compromise via npm. The fix is layered: validate everything with zod or class-validator, treat JWTs as session tokens not bearer truth, lock down dependencies with lockfiles and SCA, and run dependency and container scans on every build. None of this is exotic. Most teams skip it.",
  body: `<p>Node.js security in production is a discipline, not a feature. The runtime itself is reasonable. The npm ecosystem, the patterns engineers learn from tutorials, and the speed at which teams ship are what create most incidents. This checklist is OWASP-aligned and built from the actual incidents we have seen across enterprise Node.js codebases in 2025 and 2026.</p>

<p>If you need engineers who already work this way, see <a href="/hire/nodejs-developers/">our Node.js hiring page</a>. For our broader AI-era security work, read our <a href="/blog/owasp-llm-top-10-implementation-checklist-2026/">OWASP LLM Top 10 implementation checklist</a> and <a href="/blog/prompt-injection-defense-production-llm-apps-2026/">prompt injection defense guide</a>.</p>

<h2>What is the actual threat model for an enterprise Node.js service?</h2>

<p>Before any control, name the threats:</p>

<ul>
<li><strong>External attackers</strong> hitting your public APIs, abusing weak validation or auth.</li>
<li><strong>Compromised dependencies</strong> shipped via npm, executed at install or runtime.</li>
<li><strong>Insider threats</strong> with legitimate access using over-broad permissions.</li>
<li><strong>Lateral movement</strong> from one compromised service to others sharing networks or secrets.</li>
<li><strong>Data exfiltration</strong> via SSRF, log leakage, or backup misconfiguration.</li>
</ul>

<p>Different controls address different threats. Listing the threats first stops you from adding controls that solve nothing.</p>

<h2>How do you validate input properly?</h2>

<p>Every endpoint that accepts a request body, query string, header, or path parameter validates it. No exceptions. The patterns:</p>

<ul>
<li><strong>Schema validation at the framework boundary.</strong> zod, class-validator, or Fastify's JSON schema. Reject invalid input before it touches your domain code.</li>
<li><strong>Allowlist, not denylist.</strong> Specify exactly what shapes are valid. Anything else is rejected.</li>
<li><strong>Strict types after validation.</strong> Once validated, the rest of the code uses TypeScript types from the schema. No <code>any</code>.</li>
<li><strong>Size limits.</strong> body-parser or framework defaults often allow megabytes. Cap to what you actually need.</li>
<li><strong>Content-type enforcement.</strong> Reject unexpected content types instead of trying to parse them.</li>
</ul>

<p>The single most common Node.js vulnerability we find on audit is an endpoint that trusts the request body shape because the TypeScript interface "looks right." TypeScript types do not exist at runtime. Validation does.</p>

<h2>How do you avoid prototype pollution?</h2>

<p>Prototype pollution is uniquely Node.js-shaped. An attacker mutates Object.prototype via a JSON payload, then your code reads a polluted property and behaves wrongly. Defenses:</p>

<ul>
<li><strong>Use validation libraries that reject __proto__ and constructor keys.</strong> zod and Joi do this. Hand-rolled parsers often do not.</li>
<li><strong>Use Object.create(null) or Map for user-controlled key spaces.</strong> No prototype to pollute.</li>
<li><strong>Avoid recursive merge utilities on untrusted input.</strong> lodash.merge had this exact CVE. Use safer alternatives or write the merge yourself.</li>
<li><strong>Run npm audit and Snyk on every build.</strong> Most prototype pollution CVEs land in transitive dependencies.</li>
</ul>

<h2>What are the JWT pitfalls and how do you avoid them?</h2>

<p>JWTs are misused more than any other auth primitive in Node.js. The recurring problems:</p>

<ol>
<li><strong>Treating JWTs as bearer truth without revocation.</strong> Once issued, you cannot un-issue. Use short TTLs (5 to 15 minutes) and refresh tokens with revocable sessions.</li>
<li><strong>Accepting alg: none or weak algorithms.</strong> Pin the algorithm explicitly when verifying. Never trust the header.</li>
<li><strong>Missing audience and issuer checks.</strong> A token issued for service A should not be accepted by service B.</li>
<li><strong>Storing secrets in JWTs.</strong> JWTs are signed, not encrypted. Anyone with the token reads the payload.</li>
<li><strong>Long-lived JWTs as session cookies.</strong> Use a real session store (Redis) with a session ID cookie. JWTs do not give you what cookies give you for free.</li>
</ol>

<p>For most enterprise cases, treat JWTs as access tokens with very short TTLs and back them with a revocable refresh token model. If you cannot revoke a credential, you cannot recover from a leak.</p>

<h2>How do you prevent SSRF in webhook and integration handlers?</h2>

<p>Server-Side Request Forgery is the most underrated Node.js vulnerability. Any time your service makes an outbound HTTP request to a URL the user can influence, the user can potentially:</p>

<ul>
<li>Hit internal-only services (cloud metadata, private databases, internal admin endpoints)</li>
<li>Scan your internal network</li>
<li>Steal cloud credentials from instance metadata (169.254.169.254)</li>
</ul>

<p>Defenses:</p>

<ul>
<li><strong>Allowlist destination hosts.</strong> Webhook and import endpoints should only call hosts you explicitly trust.</li>
<li><strong>Resolve and validate the IP after DNS lookup.</strong> Block private and link-local ranges. Beware DNS rebinding (validate twice or pin the resolved IP).</li>
<li><strong>Run integrations from a network with no access to internal services.</strong> Defense in depth at the infra layer.</li>
<li><strong>Set timeouts and response size limits.</strong> An attacker-controlled URL can hang or stream forever.</li>
</ul>

<h2>How do you secure the npm supply chain?</h2>

<p>Your code is a small fraction of what runs in production. The rest is npm. Treat dependencies like third-party code that wants to break in.</p>

<ul>
<li><strong>Lockfiles always.</strong> package-lock.json or pnpm-lock.yaml committed. CI installs from lockfile only.</li>
<li><strong>Dependency review.</strong> Every new dependency gets reviewed: who maintains it, how often, what permissions does it need.</li>
<li><strong>SCA on every build.</strong> npm audit, Snyk, Socket, or GitHub Dependabot. Block PRs with high or critical issues.</li>
<li><strong>Pin or scope automatic updates.</strong> Renovate or Dependabot with grouped weekly updates is better than auto-merge.</li>
<li><strong>Disable lifecycle scripts where possible.</strong> <code>npm install --ignore-scripts</code> in CI for known-good dependencies. Many supply-chain attacks fire at install time.</li>
<li><strong>Use a private registry mirror.</strong> Verdaccio, JFrog, or AWS CodeArtifact. Cache and scan packages before they hit your build.</li>
<li><strong>Watch for typosquats.</strong> express-form vs express_form is exactly how a real-world incident lands.</li>
</ul>

<p>If a dependency disappears (left-pad, color, etc.), your build breaks. If a dependency is compromised, your build runs attacker code as root. Both are real outcomes from the last few years.</p>

<h2>How do you handle secrets and credentials?</h2>

<ul>
<li><strong>No secrets in env vars in code.</strong> Use a secret manager (AWS Secrets Manager, Vault, Doppler).</li>
<li><strong>No secrets in logs.</strong> Structured logger with redaction, plus a CI test that catches obvious leaks.</li>
<li><strong>No secrets in git.</strong> git-secrets, gitleaks, or trufflehog in pre-commit and CI.</li>
<li><strong>Short-lived credentials.</strong> IAM roles for AWS, workload identity in Kubernetes, no long-lived API keys where avoidable.</li>
<li><strong>Per-service credentials.</strong> Service A and service B do not share a database password. Compromise of one stays contained.</li>
</ul>

<h2>What about authentication and authorization?</h2>

<ul>
<li><strong>Use a battle-tested library.</strong> Passport, Clerk, Auth0, or your platform's built-in. Do not build auth from scratch.</li>
<li><strong>Multi-factor for any privileged user.</strong> Engineers, admins, finance roles.</li>
<li><strong>Authorization on every endpoint.</strong> Even internal endpoints. Default deny.</li>
<li><strong>Centralize permission decisions.</strong> A single policy service or library so you can audit and change rules in one place.</li>
<li><strong>Audit logs for sensitive actions.</strong> Who did what, when, from where. Tamper-evident storage.</li>
</ul>

<h2>How do you secure Node.js services at the network and runtime layer?</h2>

<ul>
<li><strong>Run as non-root in containers.</strong> USER directive in Dockerfile. Most npm exploits fail without root.</li>
<li><strong>Read-only root filesystem where possible.</strong> Reduces attacker mobility post-exploit.</li>
<li><strong>mTLS between internal services.</strong> Service mesh or framework-level mTLS.</li>
<li><strong>Network policies in Kubernetes.</strong> Default deny ingress and egress, allowlist what each service needs.</li>
<li><strong>Egress filtering.</strong> Especially for services that should never call the public internet.</li>
<li><strong>Container scanning in CI.</strong> Trivy, Grype, or your registry's built-in scanner.</li>
</ul>

<h2>How do you respond when something goes wrong?</h2>

<p>Even with every control, you will have incidents. The minimum incident readiness:</p>

<ol>
<li><strong>Detection.</strong> Log aggregation with anomaly alerting. Failed-auth spikes, unusual outbound traffic, unexpected error patterns.</li>
<li><strong>Runbooks.</strong> Top five incident classes with explicit steps, including how to revoke tokens, rotate credentials, and isolate a service.</li>
<li><strong>Tabletop exercises.</strong> Walk through a credential leak or compromised dependency once a quarter. The first real run is not the time to learn.</li>
<li><strong>Post-mortems with actions.</strong> Every incident produces concrete follow-ups with owners and dates. Track them to done.</li>
</ol>

<h2>Where does Workforce Next help?</h2>

<p>We place Node.js engineers who treat security as part of their job, not as a separate team's problem. Most have shipped production code with input validation, JWT and session design, dependency hygiene, and SSRF defenses already wired in. If you want help raising the security baseline of your Node.js estate, see <a href="/hire/nodejs-developers/">our Node.js hiring page</a> or <a href="/contact/">talk to us about your stack</a>.</p>`,
  category: "engineering",
  categoryLabel: "Engineering",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-05-14",
  readTime: 14,
  metaDescription:
    "OWASP-aligned Node.js security checklist for enterprise teams. Input validation, JWT pitfalls, prototype pollution, SSRF, npm supply chain, and the controls that matter.",
  ogTitle: "Node.js Security Checklist for Enterprise Teams (OWASP, 2026)",
  ogDescription:
    "Practical Node.js security controls: input validation, JWT, prototype pollution, SSRF, npm supply chain, secrets, and incident response.",
  keywords: [
    "node.js security",
    "node.js security checklist",
    "node.js owasp",
    "node.js security best practices",
    "node.js jwt security",
    "node.js prototype pollution",
    "node.js ssrf",
    "npm supply chain security",
    "enterprise node.js security",
  ],
  faq: [
    {
      q: "What are the most common Node.js security issues in production?",
      a: "Missing input validation, JWT misuse without revocation, prototype pollution from untrusted JSON, SSRF in webhook handlers, and supply-chain compromise via npm. None of these are exotic. Most teams know about them and ship the bug anyway because the basics get skipped under deadline pressure.",
    },
    {
      q: "How should we validate input in a Node.js service?",
      a: "Use schema validation at the framework boundary with zod, class-validator, or Fastify JSON schema. Allowlist what is valid and reject everything else. Enforce size limits and content types. After validation, use the schema's TypeScript types for the rest of the code. Never trust that an interface matches runtime data.",
    },
    {
      q: "What is prototype pollution and how do we prevent it?",
      a: "An attacker mutates Object.prototype via a JSON payload, then your code reads a polluted property and behaves wrongly. Prevent it by using validation libraries that reject __proto__ and constructor keys, using Object.create(null) or Map for user-controlled key spaces, and avoiding recursive merge utilities on untrusted input.",
    },
    {
      q: "What are the most common JWT mistakes in Node.js?",
      a: "Treating JWTs as bearer truth without revocation, accepting weak algorithms or alg: none, missing audience and issuer checks, storing secrets in JWT payloads (which are signed but not encrypted), and using long-lived JWTs as session cookies. Use short TTLs with revocable refresh tokens for most enterprise cases.",
    },
    {
      q: "How do we prevent SSRF in webhook and integration handlers?",
      a: "Allowlist destination hosts, resolve and validate the IP after DNS lookup to block private and link-local ranges, run integrations from a network with no access to internal services, and set strict timeouts and response size limits. Beware DNS rebinding by validating the resolved IP twice or pinning it.",
    },
    {
      q: "How do we secure the npm supply chain?",
      a: "Always commit lockfiles. Run SCA tools like npm audit, Snyk, or Socket on every build and block high or critical issues. Review every new dependency before adding it. Use a private registry mirror, disable lifecycle scripts where possible, and watch for typosquatted package names.",
    },
    {
      q: "Where should secrets live in a Node.js application?",
      a: "Never in code or hard-coded env vars. Use AWS Secrets Manager, HashiCorp Vault, or Doppler. Use short-lived credentials via IAM roles or workload identity. Per-service credentials so compromise of one service does not expose another. Run gitleaks or trufflehog in pre-commit and CI to catch leaks.",
    },
    {
      q: "Should we build authentication ourselves in Node.js?",
      a: "No. Use a battle-tested library or service like Passport, Clerk, or Auth0. Build authorization on top with default deny on every endpoint, multi-factor for privileged users, centralized permission decisions, and audit logs for sensitive actions in tamper-evident storage.",
    },
  ],
};

export default post;
