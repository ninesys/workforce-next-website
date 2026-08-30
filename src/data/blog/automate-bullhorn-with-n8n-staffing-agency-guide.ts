import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "automate-bullhorn-with-n8n-staffing-agency-guide",
  image: "/images/blog/automate-bullhorn-with-n8n-staffing-agency-guide.webp",
  title: "How to Automate Bullhorn with n8n: A Staffing Agency Playbook (2026)",
  seoTitle: "How to Automate Bullhorn with n8n",
  excerpt:
    "Step-by-step n8n + Bullhorn automation playbook for US/Canada staffing agencies. API auth, top 5 workflows, rate limits, and the mistakes that break Bullhorn integrations.",
  tldr: "Bullhorn has a documented REST API that n8n connects to via OAuth. Once auth is wired, the top 5 workflows to ship are: offer letter generation, candidate intake enrichment, follow-up sequences, recruiter daily digest, and client status updates. Rate limits (10 requests/sec per token) need exponential backoff. Common mistakes: missing the corporation context header, stale OAuth tokens, no batching for bulk updates, and using REST when the new GraphQL endpoint would be faster. Total build cost for the 5-workflow cluster: USD 2,500 to 4,000. Build time: 8 to 12 weeks.",
  body: `<p>Bullhorn is the most common ATS for US and Canada staffing agencies in the 10 to 500 person range. It has a documented REST API, a newer GraphQL endpoint, and an active developer community. For n8n automation for staffing agencies built on Bullhorn, this stack is the cheapest and most flexible path to real production workflows at scale. This playbook is the technical guide for how to wire the two together.</p>

<p>If you want the business context first, read our <a href="/blog/automate-staffing-agency-with-n8n-case-study-2026/">case study of a 50-person US staffing firm</a> that shipped exactly this stack. For broader automation tooling context, see our <a href="/blog/best-workflow-automation-tools-2026/">best workflow automation tools 2026</a> post. If you want us to build it for you, see our <a href="/hire/automation-consultants/">automation consultants page</a>.</p>

<h2>Why n8n automation for staffing agencies is the right pick on top of Bullhorn</h2>

<p>Three reasons we consistently recommend n8n over Zapier or Make for Bullhorn-heavy workflows:</p>

<ul>
<li><strong>Cost predictability.</strong> Bullhorn workflows fire frequently (hundreds of executions/day at a 50-recruiter firm). Zapier task pricing scales painfully past 5,000 tasks/month. n8n self-hosted on Hetzner runs USD 8 to 30/month regardless of execution count.</li>
<li><strong>Custom code nodes.</strong> Bullhorn's data model has edge cases (multi-corporation context, nested entity relationships) that the native Bullhorn integrations in Zapier and Make do not fully handle. n8n's Code node (JavaScript) gives you the escape hatch you need.</li>
<li><strong>Branching and error handling.</strong> Complex flows like offer letter generation need multi-step conditional logic, retries, and human-in-the-loop approval. n8n handles this natively; Zapier's filter steps get unwieldy past 3 conditions.</li>
</ul>

<h2>How do you authenticate Bullhorn with n8n?</h2>

<p>Bullhorn uses OAuth 2.0 with an authorization-code flow. Two-step process:</p>

<ol>
<li><strong>Register an API client in Bullhorn.</strong> Contact your Bullhorn account rep (or your customer support contact). They create an API client and give you a Client ID, Client Secret, Username, and Password for service-account authentication. The Username and Password are for a dedicated service account, not a real user.</li>
<li><strong>Configure OAuth in n8n.</strong> Use the HTTP Request node with OAuth2 authentication. Authorization URL: <code>https://auth-{region}.bullhornstaffing.com/oauth/authorize</code>. Token URL: <code>https://auth-{region}.bullhornstaffing.com/oauth/token</code>. Scope: leave blank for default. Your region is usually <code>west</code>, <code>east</code>, or <code>uk</code>; check your Bullhorn login URL.</li>
</ol>

<p>Once OAuth is wired, you need two additional steps before making API calls:</p>

<ul>
<li><strong>Login to get a BhRestToken.</strong> POST to <code>https://rest-{region}.bullhornstaffing.com/rest-services/login</code> with the access token. The response gives you a BhRestToken and the REST URL for your corporation.</li>
<li><strong>Use the BhRestToken in subsequent requests</strong> via the <code>BhRestToken</code> header. The token expires after 60 minutes of inactivity; refresh by re-logging when needed.</li>
</ul>

<p>Wrap this in an n8n sub-workflow that other workflows call to get a fresh BhRestToken on demand. Reuse the token across calls within the same execution context.</p>

<h2>What are the top 5 Bullhorn workflows to automate?</h2>

<h3>Workflow 1: Offer letter generation + DocuSign + Bullhorn sync</h3>

<p><strong>Trigger:</strong> Bullhorn webhook on Placement entity creation, OR webhook on Candidate stage change to "Verbal Accepted".</p>

<p><strong>n8n flow:</strong></p>

<ol>
<li>HTTP Request: Get fresh BhRestToken via login sub-workflow</li>
<li>HTTP Request: GET <code>/entity/Placement/{id}</code> with fields <code>candidate, clientCorporation, jobOrder, dateBegin, salary, employmentType, customText1-5</code></li>
<li>Switch node: Route to correct offer template based on <code>employmentType</code> (perm vs contract W-2 vs contract 1099)</li>
<li>OpenAI/Anthropic node: Run Claude to populate the template variables and produce final letter text</li>
<li>HTML to PDF node: Generate PDF</li>
<li>HTTP Request: POST to DocuSign API to create envelope with both signers (candidate + client contact)</li>
<li>HTTP Request: PUT <code>/entity/Placement/{id}</code> to write DocuSign envelope ID to a custom field</li>
<li>HTTP Request: POST to Slack with the offer summary and DocuSign tracking link for the recruiter</li>
</ol>

<p><strong>Common gotcha:</strong> Bullhorn placement records sometimes have <code>employmentType</code> blank for new placements. Add a validation step that pauses the workflow and posts to Slack for manual completion if critical fields are missing.</p>

<h3>Workflow 2: Candidate intake enrichment</h3>

<p><strong>Trigger:</strong> Bullhorn webhook on Candidate entity creation OR n8n cron polling for new candidates added in the last 15 minutes.</p>

<p><strong>n8n flow:</strong></p>

<ol>
<li>GET candidate record with fields <code>firstName, lastName, primarySkills, email, customText1 (LinkedIn URL), category</code></li>
<li>If LinkedIn URL is present, call a LinkedIn scraping service (Bright Data, ScraperAPI, or your own) to enrich</li>
<li>If candidate is technical (category contains "Engineer" or "Developer"), check for GitHub URL and pull contribution stats</li>
<li>Claude node: Summarize the enriched profile into a 1-paragraph Recruiter Notes entry</li>
<li>GET open JobOrder records in the same primarySkills category</li>
<li>Claude node: Run LLM-as-judge to score the candidate against the top 5 open JobOrders (return JSON with score and reasoning)</li>
<li>PUT to update candidate's Recruiter Notes field with the summary + top match suggestions</li>
<li>Optional: Auto-tag with the top 1-2 matching JobOrders via the Candidate-Order association endpoint</li>
</ol>

<p><strong>Common gotcha:</strong> The Bullhorn primarySkills field is a free-text array, not a controlled vocabulary. Normalize it with Claude before matching against JobOrders.</p>

<h3>Workflow 3: Candidate follow-up sequences with AI personalization</h3>

<p><strong>Trigger:</strong> n8n cron every weekday at 9 AM local time.</p>

<p><strong>n8n flow:</strong></p>

<ol>
<li>GET candidates in stages [Submitted, Interview Scheduled, Offer Pending] with <code>dateLastModified</code> older than 3, 7, or 14 days respectively</li>
<li>For each candidate, GET their most recent Note records to pull conversation context</li>
<li>GET the associated JobOrder for context on the role they are up for</li>
<li>Claude node: Draft a personalized follow-up email using the conversation context and role context</li>
<li>Post the draft to the recruiter's Slack DM with approve/edit/kill buttons</li>
<li>On approval: Send via Gmail or Outlook integration, then PUT a Note record back to Bullhorn logging the follow-up</li>
</ol>

<p><strong>Common gotcha:</strong> Notes endpoint expects <code>personReference</code> as an entity reference, not just an ID. The exact format is <code>{"id": 12345, "_subtype": "Candidate"}</code>.</p>

<h3>Workflow 4: Recruiter daily digest</h3>

<p><strong>Trigger:</strong> n8n cron every weekday at 7:30 AM local time.</p>

<p><strong>n8n flow:</strong></p>

<ol>
<li>For each active recruiter (filter Users by isDeleted=false and recruiterRole=true):
   <ul>
   <li>GET their Candidates with stage IN motion (custom filter set)</li>
   <li>GET their Placements with status="Approved" but no signed offer yet</li>
   <li>GET interviews scheduled for today</li>
   <li>GET their JobOrders with no submissions in the last 7 days</li>
   </ul>
</li>
<li>Claude node: Synthesize a 5-bullet personalized daily brief with a priority callout</li>
<li>Post to the recruiter's Slack DM</li>
</ol>

<p><strong>Common gotcha:</strong> Bullhorn's Custom Filter ID (savedSearch) is the easiest way to define "candidates in motion" without re-implementing the query logic in n8n. Have the recruiting team save a Custom Filter once, reference it from n8n.</p>

<h3>Workflow 5: Client status update auto-emails</h3>

<p><strong>Trigger:</strong> n8n cron every Friday at 4 PM local time.</p>

<p><strong>n8n flow:</strong></p>

<ol>
<li>GET all ClientCorporation records with active JobOrders (status=Active)</li>
<li>For each client, GET active JobOrders + Submissions in the last 7 days + Placements in progress</li>
<li>Claude node: Synthesize a client-facing status email per account, with next steps and a candidate pipeline summary</li>
<li>Queue each email in the account manager's Slack with approve/edit/kill buttons (group by account manager)</li>
<li>On approval: Send via Gmail or Outlook, log a Note record back to the client account in Bullhorn</li>
</ol>

<p><strong>Common gotcha:</strong> ClientCorporation records often have multiple ClientContact records (the actual people you email). Pick the primary or use the contact most recently associated with the open JobOrders.</p>

<h2>What about Bullhorn rate limits?</h2>

<p>Bullhorn imposes a rate limit of roughly 10 requests/second per access token. For batch operations or workflows running concurrently you will hit this. Standard mitigations:</p>

<ul>
<li><strong>Exponential backoff in n8n HTTP Request nodes.</strong> Settings → Retry On Fail → enable, with 5 retries and exponential interval starting at 1 second.</li>
<li><strong>Stagger workflows that hit Bullhorn simultaneously.</strong> If your daily digest and intake enrichment both run at 7:30 AM, push the digest to 7:35 AM to avoid the simultaneous burst.</li>
<li><strong>Batch entity fetches where possible.</strong> Use <code>/query/Candidate</code> to fetch multiple candidates in one request instead of N <code>/entity/Candidate/{id}</code> calls.</li>
<li><strong>Cache the BhRestToken</strong> for its 60-minute TTL so you are not logging in for every workflow execution.</li>
</ul>

<h2>Should you use REST or GraphQL?</h2>

<p>Bullhorn launched a GraphQL endpoint in 2024. As of 2026 it is stable but not feature-complete. Use GraphQL when:</p>

<ul>
<li>You need to fetch multiple related entities in one round-trip (e.g., Candidate + their Notes + associated JobOrders)</li>
<li>You want to reduce API calls and stay under rate limits</li>
<li>The entities you need are supported in GraphQL (most common ones are; some custom fields and edge entities are REST-only)</li>
</ul>

<p>Use REST when:</p>

<ul>
<li>You need to write data (GraphQL is still primarily read-focused in Bullhorn)</li>
<li>You need a specific entity type or custom field not yet in GraphQL</li>
<li>You want maximum documentation coverage; REST has more community examples</li>
</ul>

<p>Most production workflows use a hybrid: GraphQL for complex reads, REST for writes.</p>

<h2>What are the most common mistakes that break Bullhorn integrations?</h2>

<ol>
<li><strong>Forgetting the corporation context.</strong> Multi-corporation Bullhorn instances need the <code>corporationId</code> header in every request. Single-corporation instances do not. Missing it on a multi-corp instance returns mysterious 401s.</li>
<li><strong>Stale BhRestToken.</strong> The token expires after 60 minutes of inactivity. Long-running workflows or cron jobs that fire infrequently will hit this. Always refresh on a 401 response, then retry.</li>
<li><strong>Bulk updates that hit rate limits.</strong> Updating 500 candidates in a tight loop without batching or backoff will get throttled. Use <code>/query</code> with batched POSTs or add Sleep nodes in n8n.</li>
<li><strong>Webhook signature verification skipped.</strong> Bullhorn webhooks include a signature header. Verify it server-side or risk processing spoofed webhooks. n8n's Webhook node makes this easy if you remember to enable it.</li>
<li><strong>Custom field IDs vs labels.</strong> Bullhorn custom fields are <code>customText1</code>, <code>customText2</code>, etc internally. The labels users see are configured per-instance. Map labels to field IDs in one place in n8n; do not hardcode field IDs across 5 workflows.</li>
<li><strong>Webhook URLs without authentication.</strong> n8n webhook URLs are public by default. Use n8n's webhook authentication (header or basic auth) so Bullhorn cannot be impersonated.</li>
<li><strong>Timezone confusion.</strong> Bullhorn dates are typically UTC. Recruiters see them in local time in the UI. Be explicit about timezone conversion in n8n flows.</li>
</ol>

<h2>How do you handle Bullhorn API downtime?</h2>

<p>Bullhorn has rare but real downtime. Three patterns we use:</p>

<ul>
<li><strong>Sentry on every Bullhorn HTTP node.</strong> Errors get surfaced to a dedicated Slack channel within seconds.</li>
<li><strong>Dead-letter queue.</strong> Failed workflow executions go to an n8n error workflow that writes the payload to a Postgres table for later replay.</li>
<li><strong>Status page check before critical workflows.</strong> Workflows that send outbound (offer letters, client emails) check Bullhorn status before firing. If down, pause and alert.</li>
</ul>

<h2>What does this cost to build and run?</h2>

<table>
<thead>
<tr>
<th>Item</th>
<th>Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td>5-workflow cluster build (scoping + dev + handover)</td>
<td>USD 2,500 to 4,000 (8 to 12 weeks)</td>
</tr>
<tr>
<td>n8n self-hosted on Hetzner CPX21</td>
<td>USD 8/month</td>
</tr>
<tr>
<td>Claude Sonnet API (1,500 to 3,000 calls/day)</td>
<td>USD 80 to 200/month</td>
</tr>
<tr>
<td>Sentry observability</td>
<td>USD 30/month (or free tier for small teams)</td>
</tr>
<tr>
<td>Maintenance retainer (optional)</td>
<td>USD 800 to 2,000/month</td>
</tr>
</tbody>
</table>

<p>Total first-year cost for a 5-workflow Bullhorn automation: roughly <strong>USD 5,000 to 9,000</strong> including ongoing infra and AI API. Compare against USD 412K to USD 2M of annual recruiter admin cost (depending on team size); the math is uncomfortable to look at.</p>

<h2>How do you get started?</h2>

<p>If you want to build this yourself, start with one workflow (Daily Digest is the lowest-stakes) to debug the n8n + Bullhorn OAuth + Claude stack. Once that ships, you have the auth and API patterns; each subsequent workflow takes half the time.</p>

<p>If you want us to build it for you, send a 20-minute Loom or book a call. We will scope a project with fixed price within 48 hours. Most Bullhorn + n8n builds we ship are 5-workflow clusters delivered in 8 to 12 weeks for USD 2,500 to 4,000.</p>

<p>For broader context: <a href="/hire/automation-consultants/">automation consultants page</a>, <a href="/blog/automate-staffing-agency-with-n8n-case-study-2026/">50-person staffing firm case study</a>, <a href="/blog/10-workflows-every-staffing-agency-should-automate-2026/">10 workflows every staffing agency should automate</a>, and the upcoming <a href="/blog/bullhorn-jobadder-crelate-automation-comparison-2026/">Bullhorn vs JobAdder vs Crelate comparison</a> for ATS choice.</p>`,
  category: "engineering",
  categoryLabel: "Engineering",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-05-19",
  readTime: 13,
  metaDescription:
    "Step-by-step Bullhorn + n8n automation playbook: OAuth setup, top 5 workflows for staffing agencies, rate limits, common gotchas. USD 2,500-4,000 to build.",
  ogTitle: "How to Automate Bullhorn with n8n: A Staffing Agency Playbook (2026)",
  ogDescription:
    "Technical playbook: OAuth setup, 5 production workflows, rate limits, gotchas, cost breakdown. For US/Canada staffing firms 10-150 recruiters.",
  keywords: [
    "Bullhorn automation",
    "automate Bullhorn",
    "Bullhorn n8n integration",
    "Bullhorn API automation",
    "Bullhorn workflow automation",
    "staffing agency Bullhorn automation",
    "Bullhorn offer letter automation",
    "Bullhorn candidate automation",
    "Bullhorn AI integration",
  ],
  faq: [
    {
      q: "Can n8n actually connect to Bullhorn?",
      a: "Yes. Bullhorn has a documented REST API and a newer GraphQL endpoint. n8n connects via OAuth 2.0 with a registered API client (request one from your Bullhorn account rep). After OAuth, login to get a BhRestToken which you use in subsequent requests. Standard pattern; takes 2 to 4 hours to wire up auth properly the first time.",
    },
    {
      q: "What are Bullhorn API rate limits?",
      a: "Roughly 10 requests/second per access token. Workflows running concurrently or batch jobs will hit this. Standard mitigations: exponential backoff with retry, stagger concurrent workflows, batch entity fetches via /query endpoint instead of N individual GETs, cache BhRestToken for its 60-minute TTL.",
    },
    {
      q: "Should we use Bullhorn REST or the newer GraphQL endpoint?",
      a: "Hybrid. Use GraphQL for complex reads where you need related entities in one round-trip and fewer API calls. Use REST for writes (GraphQL is still read-focused) and for entities or custom fields not yet supported in GraphQL. Most production workflows use both.",
    },
    {
      q: "What's the most common mistake in Bullhorn automation builds?",
      a: "Hardcoding custom field IDs (customText1, customText3, etc) across multiple workflows. Bullhorn instances have different custom field configurations per customer; the labels users see are configured per-instance. Map labels to field IDs in one place in n8n and reference that map from all workflows. Avoids weeks of rework when field configurations change.",
    },
    {
      q: "How much does it cost to automate Bullhorn with n8n?",
      a: "Build cost for a 5-workflow cluster: USD 2,500 to 4,000, 8 to 12 weeks. Ongoing: USD 8/month for n8n hosting (Hetzner), USD 80 to 200/month for Claude API calls (1,500 to 3,000 LLM calls/day), USD 30/month for Sentry. Total first-year cost: USD 5,000 to 9,000. Compare to USD 412K to USD 2M of annual recruiter admin cost depending on team size.",
    },
    {
      q: "Do Bullhorn webhooks work reliably for n8n triggers?",
      a: "Yes, but enable signature verification on n8n's webhook node to prevent spoofing. Also build a polling fallback for critical workflows (offer letter sync) because Bullhorn webhooks occasionally drop or arrive late. Polling once every 5 minutes as a backup catches anything the webhook missed.",
    },
    {
      q: "Can we use Zapier or Make instead of n8n for Bullhorn?",
      a: "Yes. Zapier has a native Bullhorn integration that's simpler to set up but expensive at staffing-agency volume (USD 600/month vs USD 30/month for self-hosted n8n on equivalent workflow load). Make sits in between. Use Zapier when volume is low (under 5,000 tasks/month) and business users need to maintain workflows. Use n8n at scale or when complex logic, custom code, or self-hosted data is needed.",
    },
    {
      q: "How long does it take to ship our first Bullhorn workflow?",
      a: "First workflow: 2 to 3 weeks (a lot of that is OAuth setup, learning Bullhorn's data model, building the BhRestToken sub-workflow, error handling patterns). Subsequent workflows: 1 to 2 weeks each because the auth and patterns are already in place. A 5-workflow cluster typically ships end-to-end in 8 to 12 weeks.",
    },
  ],
};

export default post;
