# Workforce Next Cold Outreach Plan (2026)

90-day plan to drive paying queries via cold email + cold LinkedIn. Two tracks running in parallel. Solo operator, ~3-4 hours/day on outbound, starting from zero tooling. Optimized for small fast wins (USD 2-10k projects, 2-4 week close).

---

## TL;DR — What you should expect

If you execute the plan as written for 90 days:

- **Track A (SaaS, AI dev support):** ~750 emails/mo + ~125 LI requests/mo → realistic 6-15 booked discovery calls/mo → 2-5 paying projects/mo at USD 3-8k average → USD 8-32k MRR-equivalent in project revenue.
- **Track B (US SMB, web dev staff aug):** ~750 emails/mo + ~125 LI requests/mo → realistic 4-10 booked discovery calls/mo → 1-3 paying engagements/mo at USD 4-10k average → USD 5-25k MRR-equivalent.

Combined realistic outcome at steady state (month 2 onward): **3-8 paying customers per month, USD 15-55k of new revenue per month**, with month 1 being mostly setup + warmup + learning.

These are 25th-to-75th percentile ranges based on B2B cold-outreach industry benchmarks for technical service offerings (positive reply rate 4-8%, qualified meeting rate 1-2% of sent, close rate 15-30% of meetings).

If your numbers come in under the 25th percentile range after 30 days, the problem is almost always ICP definition or messaging — not volume. Do not scale volume to compensate; fix the targeting first.

---

## The cold outreach funnel math (so you can sanity-check expectations)

Per 1,000 cold emails sent to a well-defined ICP (technical B2B services):

| Stage | Rate | Outcome |
|---|---|---|
| Delivered (inbox, not spam) | 90-95% | 900-950 |
| Opened | 35-55% | ~400 |
| Positive reply | 4-8% | 40-80 |
| Qualified (right ICP, real budget, real pain) | 1.5-3% | 15-30 |
| Booked discovery call | 1-2% | 10-20 |
| Paying project | 0.2-0.5% | 2-5 |

Per 100 cold LinkedIn connection requests to ICP:

| Stage | Rate | Outcome |
|---|---|---|
| Accepted | 25-40% | 25-40 |
| Replied to follow-up | 8-15% | 8-15 |
| Booked discovery call | 2-4% | 2-4 |
| Paying project | 0.5-1% | 0.5-1 |

**Sanity check:** if your reply rate after 2 weeks is under 2%, your targeting or subject line is wrong. If your reply rate is great (>10%) but no calls book, your CTA or positioning is wrong. If calls book but nothing closes, your offer or pricing is wrong. Diagnose by stage, do not just send more volume.

---

## Track A: SaaS companies → AI development support

### ICP

**Company shape:**
- Series A or Series B SaaS (USD 5M-50M ARR)
- 20-150 employees
- Already shipped a v1, now actively building AI features into the product
- US, Canada, UK, Australia primary (English-speaking, USD-paying, accepts remote vendors)

**Why this ICP:** Funded enough to spend USD 5-10k/month on dev support without procurement hoops. Big enough to have an AI feature backlog. Small enough that the CEO/CTO can say yes in one call.

**Title targets (who to email):**
- Founder / CEO (at <50 employee shops, they buy)
- CTO / VP Engineering
- Head of AI / Director of AI Engineering (at 50-150 shops)
- Head of Product (if AI is a product-led motion)

**Avoid:** Series C+ enterprise SaaS (procurement, MSAs, takes 90+ days), pre-seed (no budget), vertical SaaS in regulated industries (compliance friction).

### Hook / offer angle

You are NOT selling "hire AI developers from India." You are selling **a senior AI engineer who ships in a 2-week sprint, fixed-price, embedded with your team**.

Specific offers that work for this ICP:

1. **"Two-week RAG fix"** — flat USD 4,500. We audit your current RAG setup, fix the top 3 retrieval/quality issues, ship a measurable improvement.
2. **"Agent prototype in 3 weeks"** — flat USD 7,500. We build a working agent for one customer-facing workflow, deployable on your stack.
3. **"AI feature sprint"** — USD 6k for a 2-week sprint, USD 11k for 4 weeks. You bring the spec, we ship to your repo. No commitment beyond the sprint.
4. **"Fractional AI engineer, 20 hrs/week"** — USD 4,800/month. Cheaper than a fractional CTO, more hands-on than a consultant.

The fixed-price small offer is the wedge. The fractional/dedicated engagement is the expansion.

### Where to source leads

Starting from zero, the fastest stack:

- **Apollo.io** — USD 99/mo Pro plan. Filter: SaaS, USD 5M-50M ARR (use "tech: hiring AI roles in last 6 months" as a proxy for AI-active companies), 20-150 employees, US/Canada/UK/AU.
- **Crunchbase** — Series A and B SaaS announced in last 12 months. Cross-reference against Apollo for the title-level contacts.
- **BuiltWith / Wappalyzer** — find companies using OpenAI, Anthropic, Pinecone, Weaviate, LangChain in production. Heavy AI-buyer signal.
- **AngelList / Y Combinator company list** — recent batches that mention AI in their description.

Refresh the lead list every 2 weeks. Do not re-email the same person if they did not respond in 4 weeks; come back in 90 days with a new angle.

### Sequence (cold email, 4-touch over 14 days)

**Touch 1 — Day 0 — Specific observation + tiny ask**

> Subject: {{trigger observation about their AI feature}}
>
> Hi {{first_name}},
>
> Saw {{company}} shipped {{specific AI feature}} last month — the {{specific thing about it}} was the part that caught my eye, that is hard to get right.
>
> We do exactly this kind of work for SaaS teams: 2-week sprints where we embed a senior AI engineer with your team and ship one feature, fixed price, no commitment beyond the sprint.
>
> Worth a 15-min call to see if there is a fit?
>
> Gaurav
> Workforce Next
> https://workforcenext.in

Length: under 80 words. The trigger observation (specific AI feature they shipped, hiring an AI role, recent funding round) is what separates this from a templated blast.

**Touch 2 — Day 3 — Proof + alternative CTA**

> Subject: Re: {{thread}}
>
> Quick follow-up — here is a 2-week RAG fix we did for {{anonymized comparable customer}}: cut hallucinations from {{X}}% to {{Y}}%, fixed-price USD 4,500.
>
> If a call is too much, would a short Loom walking through how we would scope your {{feature}} work? Reply with "Loom" and I will send one over.

**Touch 3 — Day 7 — Different angle, drop the ask**

> Subject: One thought on your {{feature}}
>
> No ask today — just one observation: {{specific technical insight about their feature, e.g. "if you are using gpt-4o-mini for the classification step, swapping to Claude Haiku 4.5 usually cuts cost ~40% without quality loss for this workload"}}.
>
> Hope that is useful either way. Happy to share more if it would help.

This is the email that converts skeptics. No CTA, pure value, signals you actually understand their stack.

**Touch 4 — Day 14 — Polite breakup**

> Subject: Closing the loop
>
> Last note — I will stop following up. If AI engineering support becomes a priority later, my calendar is here: {{calendly}}. Otherwise, good luck with {{feature}}.

After this, drop from the sequence. Re-add in 90 days with a new trigger.

### LinkedIn parallel motion

For every cold email contact at director-level or above, send a LinkedIn connection request the same day with a personalized note (NOT a pitch):

> Hi {{first_name}}, saw {{specific thing}} you posted/shipped — would love to connect.

Once accepted, wait 3 days. Then send a follow-up message that mirrors Touch 2 of the email sequence. Do not pitch in the connection note itself; it kills acceptance rates.

### Volume targets — Track A

| Week | Emails sent | LI requests | Discovery calls booked (realistic) |
|---|---|---|---|
| 1 (setup + warmup) | 50 | 25 | 0-1 |
| 2 | 100 | 30 | 1-2 |
| 3 | 150 | 30 | 2-3 |
| 4 onwards (steady) | 200/wk | 30/wk | 2-4/wk |

Monthly steady-state: **~750 emails + ~125 LI requests = 6-15 booked calls**. Close 30-40% of calls → **2-5 paying projects/month**.

---

## Track B: US small businesses → Indian web dev staff augmentation

### ICP

**Company shape:**
- US-based small businesses, 10-100 employees
- Industries where custom web dev is core: digital agencies, e-commerce brands, SaaS startups too small for Track A, B2B service businesses with a custom internal app
- Already pay developers (so they understand the value), not first-time tech buyers
- Owner/founder/CTO buys directly, no procurement

**Why this ICP:** US SMBs are price-sensitive and quality-conscious. They are the natural buyer for "senior dev from India at 40% of the US loaded cost." Larger US companies use HR-backed offshore vendors (Cognizant, Infosys); smaller ones use Upwork freelancers and get burned. You sit in the gap.

**Title targets:**
- Owner / Founder (digital agencies, e-commerce, B2B services)
- CTO / VP Engineering (SaaS under USD 5M ARR)
- Head of Product (smaller companies, hands-on)
- Operations Director (B2B services with internal apps)

**Sub-segments to focus on first (highest fit):**
- Digital agencies (Webflow, WordPress, Shopify shops) needing white-label dev capacity
- E-commerce brands on Shopify Plus needing custom theme + app dev
- B2B SaaS at USD 1-5M ARR needing a second dev for backlog
- Marketing agencies needing developers to build client landing pages

**Avoid:** companies that have been burned by offshore (will not buy again for 12-24 months), regulated industries (HIPAA, FedRAMP), enterprise vendors.

### Hook / offer angle

You are NOT selling "hire developers from India." Every cheap offshore agency on Upwork is selling that. You are selling **a senior developer who works your timezone hours, embeds with your team, and stays for the engagement**.

The specific offers that work:

1. **"Two-week trial sprint"** — USD 1,800-2,400. Pick one stuck feature on your backlog. Our developer ships it in 2 weeks. If you do not love the work, we eat the cost.
2. **"Dedicated developer, 4 weeks"** — USD 3,800-4,800/month, full-time, your timezone, your stack, your Slack. Cancel anytime after week 1.
3. **"Project sprint"** — USD 4,500-9,500 for a fixed-scope build (Shopify app, custom WordPress feature, internal tool, etc.). Fixed price, 4-6 weeks.
4. **"White-label dev capacity for agencies"** — pre-negotiated rate card for agencies, monthly retainer USD 2,800-5,500 per developer.

The trial sprint is the unlock. SMB buyers do not want to commit to a multi-month engagement to a vendor they have not worked with.

### Where to source leads

Starting from zero, the fastest stack for SMB:

- **Apollo.io** — same plan as Track A. Filter: US, 10-100 employees, digital agency / e-commerce / SaaS industries.
- **Clutch.co** — digital agencies actively listing services. Find agencies under 50 staff (they outsource to keep margins).
- **Shopify partner directory** — Shopify-focused agencies and brands needing custom dev.
- **LinkedIn Sales Navigator** — USD 100/mo. Filter US SMBs by industry + headcount, save the search, work fresh leads weekly.

For e-commerce: cross-reference Shopify Plus stores via BuiltWith. They have budget and constant custom dev needs.

### Sequence (cold email, 4-touch over 14 days)

**Touch 1 — Day 0 — Pain-led specificity**

> Subject: {{specific thing about their site/product}}
>
> Hi {{first_name}},
>
> Was looking at {{company}}'s {{specific thing — Shopify store, marketing site, product}} and noticed {{specific observation, e.g. "you are running the {{feature}} feature, looks like it could use {{specific improvement}}"}}.
>
> We do two-week trial sprints where one of our senior developers from India works your hours and ships one stuck feature. USD 1,800 flat, if you do not love it we eat the cost.
>
> Worth a quick look?
>
> Gaurav
> Workforce Next
> https://workforcenext.in

The specific observation matters more than for Track A — SMB buyers get hundreds of generic "hire dev from India" emails per week. Pattern-matching against generic offshore email is the #1 reason for spam classification.

**Touch 2 — Day 3 — Address the offshore objection**

> Subject: Re: {{thread}}
>
> Quick note — I know "dev from India" is loaded for a lot of SMB owners.
>
> Our model is different: senior devs only (5+ years), working your timezone (Slack 9am-5pm your time), embedded with your team, English-fluent video calls, monthly cancel.
>
> Here is a customer who switched to us from Upwork: {{anonymized example, 1-2 lines, real number}}.

**Touch 3 — Day 7 — Free value drop**

> Subject: A short note on {{their stack}}
>
> No ask today. Just one observation about {{specific technical thing on their stack}}: {{specific actionable tip}}.
>
> Hope it is useful. Happy to share more if helpful.

Same principle as Track A — pure value, no CTA, signals competence.

**Touch 4 — Day 14 — Polite breakup**

> Subject: Closing the loop
>
> Last note — I will stop following up. If you ever need a senior dev for a fixed-price sprint, the trial offer (USD 1,800, 2 weeks, money back if you do not love it) stands. Otherwise, good luck with {{their thing}}.

### LinkedIn parallel motion — Track B

Same approach as Track A. The connection note is light:

> Hi {{first_name}}, building Workforce Next — we help US small businesses extend dev capacity with senior India-based engineers. Would love to connect.

Follow-up after acceptance mirrors Touch 2 of the email sequence.

### Volume targets — Track B

| Week | Emails sent | LI requests | Discovery calls booked (realistic) |
|---|---|---|---|
| 1 (setup + warmup) | 50 | 25 | 0-1 |
| 2 | 100 | 30 | 1-2 |
| 3 | 150 | 30 | 1-3 |
| 4 onwards (steady) | 200/wk | 30/wk | 1-3/wk |

Monthly steady-state: **~750 emails + ~125 LI requests = 4-10 booked calls**. Close 20-30% of calls (SMB closes slower than SaaS) → **1-3 paying engagements/month**.

---

## Tooling stack (starting from zero)

This is the minimum stack to run both tracks for the first 90 days.

| Tool | Purpose | Cost (USD/mo) | Setup time |
|---|---|---|---|
| Apollo.io Pro | Lead data + email finder | 99 | 1 hour |
| Instantly.ai or Smartlead | Cold email send + warmup | 97-117 | 4-8 hours (warmup needs 2 weeks) |
| Google Workspace on workforcenext.co.in (2 inboxes to start) | Sending infrastructure | 24 | 1 hour |
| LinkedIn Sales Navigator | LI lead search | 100 | 30 minutes |
| Calendly | Meeting booking | 12 | 15 minutes |
| Notion or Airtable | Reply tracking + pipeline | 0-20 | 1 hour |
| **Total** | - | **~350/mo** | ~10 hrs initial setup |

**Critical setup steps the first 2 weeks (DO NOT SKIP):**

1. **Use workforcenext.co.in as the sending domain.** Already owned, brand-consistent, and isolates cold-send risk away from workforcenext.in (which keeps handling transactional + marketing email + SEO authority). Set up fresh Google Workspace on workforcenext.co.in dedicated to outbound only. Signature CTAs in cold email still link to workforcenext.in for the real site.
2. **Set up SPF, DKIM, DMARC properly on workforcenext.co.in.** Without these you go straight to spam. Set DMARC policy to p=none for the first 30 days while you build reputation, then move to p=quarantine.
3. **Warm workforcenext.co.in for 14 days** via Instantly's built-in warmup before sending any real cold email. Even though the domain is owned, it has zero sending reputation. Cold sends on day 1 from a never-sent domain get you blacklisted.
4. **Cap sends per inbox at 30-40/day.** Going past 50/day per inbox kills deliverability. Create one inbox per track to start (gaurav@workforcenext.co.in for Track A, a second persona-named inbox like outreach@ or your name@ for Track B). To hit 100/day per track at steady state, add a second inbox per track (3-4 total, USD 48/mo extra).

**Steady-state at ~1,500 emails/mo total:** 2 inboxes per track, 4 total, USD 48/mo extra. Build into the budget.

---

## Week-by-week calendar (first 30 days)

**Week 1 — Setup**
- Set up Google Workspace on workforcenext.co.in, create 2 inboxes (one per track), configure SPF/DKIM/DMARC
- Sign up for Apollo, Instantly, Sales Navigator, Calendly
- Pull first 500 leads for each track into Apollo lists
- Connect both workforcenext.co.in inboxes to Instantly, start warmup (will run automatically for 14 days)
- Draft Track A and Track B sequences in Instantly (do not send yet)
- Set up Calendly with 2 call types: "AI sprint scope (30 min)" for Track A, "Dev capacity intro (30 min)" for Track B

**Week 2 — Soft launch**
- Domain warmup still running, but you can start sending at 20-30 emails/day per inbox
- Begin LinkedIn outreach — 30 connection requests total across both tracks
- Track replies in Notion. Aim for 5+ replies this week
- Personalize Touch 1 for the first 50 leads on each track manually — do not blast templated

**Week 3 — Ramp**
- Move to 40-50 emails/day per inbox (warmup complete)
- LinkedIn: 50 connection requests this week
- Aim: 6-10 replies, 2-4 booked calls
- Run first 2-3 discovery calls. Take notes on objections, repeat language, and what made them say yes.

**Week 4 — Steady state**
- Full volume: 50 emails/day per inbox = 200/wk per track
- LinkedIn: 30/week per track
- Aim: 10+ replies/week, 3-6 calls booked
- Revise sequences based on what worked in weeks 2-3

---

## What to do when reply rates are low

If after 2 weeks at volume you are seeing:

- **<2% positive reply rate** → ICP is wrong, or subject line is wrong. Do not increase volume. Re-pick 50 leads with tighter targeting, rewrite Touch 1 to be more specific.
- **3-5% reply rate but no calls booking** → CTA is wrong, or pricing is misaligned with ICP. Try removing the call ask and offering a Loom or short doc instead. Lower the first offer (USD 1,500 trial instead of USD 4,500).
- **Calls book but none close** → discovery call is misdiagnosing or pricing is wrong. Send first-call follow-up within 4 hours, include 1-page scoped proposal with fixed price. SMB buyers ghost when they have to wait for a custom quote.

---

## What to NOT do

- Do not send to generic role emails (info@, hello@, contact@). Always personal inboxes.
- Do not use stock B2B subject lines ("Quick question," "Saw your post," "Helping companies like yours"). They are pattern-matched to spam.
- Do not pitch in the LinkedIn connection note.
- Do not follow up more than 4 times. After Touch 4, you are noise.
- Do not buy email lists. Apollo + your own enrichment only.
- Do not send from workforcenext.in. Use workforcenext.co.in exclusively for cold outbound. The main domain stays clean for transactional + marketing email + SEO.
- Do not promise things on first email you cannot ship. "We can build this in 2 weeks" sets the bar — if you cannot, drop the offer.
- Do not run more than 2 tracks at once for the first 90 days. Get these two working before adding a third.

---

## Reporting — what to measure weekly

Track these in Notion or a Google Sheet. Review every Friday.

| Metric | Target (steady state) | Why it matters |
|---|---|---|
| Emails sent | 200/wk per track | Volume baseline |
| Delivery rate | >95% | Deliverability health check |
| Open rate | >40% | Subject line + sender reputation |
| Positive reply rate | 4-8% | Targeting + Touch 1 quality |
| Booked calls | 3-6/wk total | Mid-funnel health |
| Close rate from call | 20-40% | Offer + pricing quality |
| Pipeline created (USD) | USD 30-80k/mo | Forward-looking signal |
| New revenue closed (USD) | USD 15-55k/mo | Trailing signal |

---

## 90-day exit criteria

After 90 days, you should have enough data to answer:

1. **Which track has lower CAC?** (Track A or Track B)
2. **Which offer in each track converts best?** (trial sprint vs project vs fractional)
3. **Is this scalable to USD 50k+/mo of new revenue?** If yes, hire an SDR or VA in month 4 to scale volume. If no, the issue is offer-market fit — work on the offer before adding volume.
4. **Is the LinkedIn motion or email motion driving more revenue?** Double down on the winner.

If month 3 ends below USD 15k of new revenue, the issue is almost certainly ICP definition or offer. Do not extend the experiment past 120 days without changing one of those two.
