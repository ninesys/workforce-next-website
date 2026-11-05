import type { BlogPost } from "./types";

const post: BlogPost = {
  body: `<p>When a GCC Build-Operate-Transfer engagement reaches its Transfer date, three things move to you: the legal entity (or a clean novation into your own entity), every employee's contract, and the infrastructure the center runs on. If any of those three is vague in your agreement, you'll find out exactly how vague at the worst possible time: during the transfer itself.</p>

<h2>What exactly transfers on the Transfer date?</h2>
<p>Three categories. A real BOT agreement names all three specifically rather than describing them in general terms.</p>
<p>First, the legal entity itself. Either the India subsidiary changes hands directly, or, if it was structured as a vendor-held entity, there's a clean asset and liability transfer into an entity you control. Second, every employee's contract is novated directly to you, meaning the employment relationship becomes yours, not a sub-contracted arrangement that keeps running through the original partner. Third, the infrastructure: office lease, hardware, software licenses, domain and DNS records, GitHub or GitLab organization ownership, and any internally built tooling the center depends on day to day.</p>

<h2>Who owns the IP that was built before the transfer happened?</h2>
<p>You should, from the very first line of code, not starting on the transfer date. This is the single most important detail to verify before signing anything, not after.</p>
<p>IP assignment terms belong in the original Build-Operate-Transfer agreement, assigning everything the center produces to you as it's created. A partner who frames IP assignment as something that gets resolved "at transfer" is telling you, whether they mean to or not, that your ownership is conditional until that point. Ask to see the exact IP assignment clause before the center is built. A vague answer here isn't a minor gap, it's the whole deal falling apart in slow motion.</p>

<h2>What happens to each employee's tenure, benefits, and statutory dues?</h2>
<p>In a properly structured novation, nothing resets. Tenure, accrued leave, gratuity eligibility under the Payment of Gratuity Act, leave entitlements under the Shops and Establishments Act, and Provident Fund contributions tracked under the employee's existing EPFO account (the UAN)  all carry forward as though the employee had always been employed by the entity they're moving into. That continuity is the legal point of a novation, as opposed to a termination and rehire.</p>
<p>A transfer that quietly restarts everyone's tenure clock, resets probation, or issues a brand-new offer letter as if day one just happened again isn't a real transfer. It's a relaunch with different paperwork, and it costs you retention exactly when you can least afford it.</p>

<h2>Does the infrastructure actually transfer, or does it stay dependent on the vendor?</h2>
<p>This is where a lot of "transfers" quietly fail.</p>
<p>Office leases, software licenses, and cloud accounts (AWS, GCP, Azure, whichever you run on) need to be either held in your name from day one or assignable to you without requiring the original partner's continued involvement. Internally built tooling, deployment scripts, Terraform or CDK infrastructure code, monitoring dashboards in Datadog or Grafana, CI/CD pipelines, needs documentation in Confluence or Notion good enough that your own engineers can run it without calling the old partner for help. If any piece of infrastructure still needs the vendor's account, license, or tribal knowledge to keep functioning after transfer, that's a dependency nobody told you about. And it defeats the point of transferring at all.</p>

<h2>What should be in writing before the center is even built, not negotiated at transfer time?</h2>
<p>Four things, specifically.</p>
<p>The transfer date or the criteria that trigger it, so neither side is guessing when the clock starts. The IP assignment terms, covering everything produced from day one, not just what exists at transfer. The novation mechanics for every employee, so tenure and benefits are explicitly preserved. And a named list of what infrastructure transfers versus what gets freshly licensed in your name at transfer, so there's no ambiguity about which systems you actually own afterward. If a partner can't produce draft language for all four before you sign, the "transfer" part of their BOT offering is marketing, not a structured commitment.</p>

<h2>What should you check in the weeks immediately before transfer?</h2>
<p>Run a dry audit roughly 60 to 90 days out, and plan for a 30-day handover window once the audit clears.</p>
<p>Confirm every employee's contract is ready to novate, with no gaps in their service record and their Form 16 and PF history intact. Confirm every software license and cloud account is either already in your name or has a documented, tested path to move into it. Confirm the IP assignment chain is complete for everything built, not just the headline product. And confirm there's a named person on your side who will own the center operationally the day after transfer, because a transfer without a receiving owner on your team is a transfer into a vacuum.</p>
<p>For the fuller picture of how we structure this against building your own entity from scratch, see <a href="/blog/gcc-build-operate-transfer-vs-own-entity-india/">our BOT vs own-entity comparison</a>, and if you're still deciding whether a GCC is the right move at all, read <a href="/blog/gcc-vs-staff-augmentation-india-decision-guide/">our GCC vs staff augmentation decision guide</a>.</p>

<p>If you're evaluating a GCC and want to see exactly how we write the transfer terms into the agreement before a single person is hired, <a href="/for/gcc-india/">see our GCC India page</a> or <a href="/contact/">talk to us directly</a>.</p>`,
  slug: "what-transfers-when-gcc-ownership-moves-to-you",
  image: "/images/blog/what-transfers-when-gcc-ownership-moves-to-you.webp",
  title: "What Actually Transfers When Your GCC Ownership Moves to You",
  seoTitle: "What Transfers in a GCC Ownership Transfer",
  excerpt:
    "The entity, the contracts, and the infrastructure are supposed to move to you when a GCC Build-Operate-Transfer engagement reaches its Transfer date. Here is exactly what that should include, and the warning signs that a transfer is marketing rather than a structured commitment.",
  tldr:
    "A real GCC transfer moves three things to you: the legal entity (or a clean novation), every employee's contract with tenure and benefits intact, and infrastructure that doesn't depend on the original partner afterward. IP assignment should cover everything built from day one, not just what exists at transfer. Verify all of this in the original agreement, not during the transfer itself.",
  category: "hiring",
  categoryLabel: "Hiring & Teams",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "2026-11-05",
  readTime: 9,
  metaDescription:
    "What actually transfers when a GCC Build-Operate-Transfer engagement reaches its Transfer date: entity, employee contracts, IP, and infrastructure, plus what to verify before signing.",
  ogTitle: "What Actually Transfers When Your GCC Ownership Moves to You",
  ogDescription:
    "The entity, contracts, and infrastructure are supposed to move to you at GCC transfer. Here is what that should include and the warning signs it will not.",
  keywords: [
    "GCC transfer checklist",
    "what transfers in BOT model",
    "GCC ownership transfer India",
    "IP assignment GCC transfer",
    "offshore entity transfer process",
    "GCC employee novation",
  ],
  faq: [
    {
      q: "What exactly transfers when a GCC Build-Operate-Transfer engagement completes?",
      a: "Three things: the legal entity (or a clean novation into your own entity), every employee's contract novated directly to you, and the infrastructure the center runs on, including leases, licenses, and internally built tooling.",
    },
    {
      q: "Who owns IP built during the Build and Operate phases, before the transfer date?",
      a: "You should, from the moment it's created, not starting on the transfer date. IP assignment terms belong in the original agreement. A partner who treats IP assignment as something resolved at transfer rather than from day one is a warning sign.",
    },
    {
      q: "Do employees lose tenure or benefits when their contract transfers to a new entity?",
      a: "They shouldn't, in a properly structured novation. Tenure, accrued leave, gratuity eligibility, and Provident Fund contributions carry forward as continuous employment. If a transfer resets any of this, it's a relaunch with new paperwork, not a real transfer, and it damages retention.",
    },
    {
      q: "Does infrastructure like cloud accounts and software licenses actually transfer?",
      a: "It should, either held in your name from the start or assignable without requiring the original partner's continued involvement afterward. If any system still depends on the vendor's account or knowledge after transfer, that dependency defeats the purpose of transferring at all.",
    },
    {
      q: "What should be written into the agreement before the GCC is even built?",
      a: "The transfer date or triggering criteria, IP assignment terms covering everything produced from day one, the novation mechanics for every employee, and a named list of what infrastructure transfers versus what gets newly licensed in your name.",
    },
    {
      q: "How far ahead of the actual transfer date should we start verifying readiness?",
      a: "Roughly 60 to 90 days out. Confirm every employee contract is ready to novate without gaps, every license and account has a tested path into your name, the IP chain is complete, and someone on your team is named to own the center operationally the day after transfer.",
    },
  ],
};

export default post;
