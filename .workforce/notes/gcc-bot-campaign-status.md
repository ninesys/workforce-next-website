# GCC / BOT Campaign — Status (as of 2026-10-29)

## Shipped and pushed today
- `/for/gcc-india/` landing page (Build/Operate/Transfer breakdown, why-India, 5-step timeline, what-transfers vs what-stays-separate, FAQ, embedded lead form). Nav entries added, sitemap entry added.
- New `gcc-bot` form type on `/api/submit-form` (internal notification + ack email).
- Hero + BOT-phases images on the landing page.
- Blog post 1: `gcc-build-operate-transfer-vs-own-entity-india` — BOT vs building your own India entity from scratch vs staying on staff aug. Image added.
- Blog post 2: `gcc-vs-staff-augmentation-india-decision-guide` — headcount/control/timeline decision framework, transition risk. Image added.
- IndexNow submitted (126 URLs, 200/200/200) after this batch.

All of the above is committed and pushed to `main`.

## Shipped 2026-11-05
- Blog post 3: `what-transfers-when-gcc-ownership-moves-to-you` — deep dive on the Transfer phase: entity, IP, employee novation, infrastructure. Cross-linked with posts 1 and 2. Image added. Passed li-human check (fingerprint 100, overall PASS).

## Shipped 2026-11-05 (part 2)
- Blog post 4: `gcc-bot-vendor-vetting-checklist` — what to ask a GCC partner before signing.
- Blog post 5: `how-long-does-it-take-to-build-a-gcc-in-india` — Build/Operate/Transfer phase timeline.
Both cross-linked with all 3 existing posts, images added, li-human checked (PASS on body text).

## Campaign status: core 5-post queue complete
All originally planned GCC/BOT posts are shipped and cross-linked: BOT vs own-entity, GCC vs staff aug, what transfers, vendor vetting checklist, build timeline. No further posts queued for this campaign unless the user requests more. IndexNow should be run after this batch if not already done.

Keep following the same mechanics as posts 1-2: no em-dashes, no pricing/anchor digits, ≥5 H2s as questions, FAQ schema, author Gaurav / Founder & Solution Architect, Gemini image prompt per post (navy #1a1a2e + electric blue #146EF5, flat isometric, no stock humans/clip-art), register in `blogPosts.ts`, tsc/lint/build before any push, cross-link the new post with the existing two GCC posts and `/for/gcc-india/`.

## Separate, not yet started
The "remote developer benefits" 4-pillar campaign (backlog clearance / team capability extension / tech expertise / fractional cost vs US-UK payscale) is a **different**, already-approved plan saved separately at `.workforce/notes/remote-developer-benefits-campaign-plan.md`. Do not conflate the two campaigns — GCC/BOT is enterprise-buyer content, the remote-developer campaign targets the existing dedicated-hire funnel. Resume whichever one the user names explicitly.
