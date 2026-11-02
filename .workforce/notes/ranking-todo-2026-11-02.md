# Ranking To-Do — Morning of Nov 2, 2026

Everything below came from today's keyword research, site audit, and AI visibility audit sessions. Ordered by speed-to-impact. Do the quick wins first — they take 30 minutes and have the clearest path to page 1.

---

## TIER 1 — Quick wins (do these first, each under 1 hour)

### 1. Fix /hire/react-native-developers/ title + H1
**Why:** "hire react native developer" (320/mo, KD 18, CPC $54) is at position 19.8 in Search Console with 56 impressions. One title fix = page 1.
- Change title to: `Hire React Native Developer — India-based Team | Workforce Next`
- Change H1 to: `Hire a React Native developer from India.`
- Add the phrase "hire react native developer" into the first paragraph
- Run `npx tsc --noEmit && npx next lint --quiet` then commit + push

### 2. Audit /hire/python-developers/ title
**Why:** "hire python developers" (320/mo, KD 10, CPC $58) — high CPC on low KD = underserved buyer demand.
- Check if current title includes the exact phrase "hire python developers"
- If not, update to: `Hire Python Developers from India | Workforce Next`
- Add a use-case paragraph: automation scripts, data pipelines, FastAPI services, ML model serving
- Commit + push

### 3. Fix /hire/ai-developers/ — already done this session
- Title changed to "Hire AI Developers in India" — targeting "hire ai developers in india" (position 11.2 in Search Console)
- Already deployed

---

## TIER 2 — New pages to build (1-2 days each)

### 4. /hire/mobile-app-developers/ — mobile hub page
**Why:** "mobile app development company india" (880/mo, KD 41, CPC $47). Highest-volume mobile term. Needs a hub page that links to React Native, Flutter, iOS, Android hire pages.
- Target phrase: "mobile app development company india"
- Sections: hero, what we build (React Native / Flutter / iOS / Android cards), why India, how we work, FAQ, CTA
- Link to: /hire/react-native-developers/, /hire/flutter-developers/, /hire/ios-developers/, /hire/android-developers/
- Add to sitemap at priority 0.9

### 5. Blog post: T&M vs Fixed Price vs Dedicated Team
**Why:** Working model comparison — no direct search volume but high decision-stage intent. Positions all 3 Workforce Next engagement models in one post.
- Title: "Time and Materials vs Fixed Price vs Dedicated Team: How to Choose Your Software Development Model"
- Sections: what each model means, when to use each, risks of each, how Workforce Next structures each
- Internal links: /for/startups/ (dedicated pod), /for/gcc-india/ (long-term dedicated), /contact/ (CTA)
- Length: 1,200-1,500 words, follow blog post workflow from memory

---

## TIER 3 — AI Visibility outreach (30 min each, do after Tier 1)

From the AI Visibility Audit (0/41 citations across ChatGPT, Perplexity, Google AI Overview):

### 6. Get listed on wisemonk.io
- Pages to target: their GCC India directory and staff augmentation comparison pages
- Workforce Next angle: GCC Build-Operate-Transfer model
- Action: find submission form or contact on wisemonk.io and submit listing

### 7. Get listed on aiagencyradar.com
- AI automation agency directory
- Workforce Next angle: AI agents, workflow automation, agentic development
- Action: submit via their listing form

### 8. Get listed on hestur.co and/or prizmstack.io
- AI automation list articles that ChatGPT cites
- Action: find author/editor contact and pitch inclusion

---

## TIER 4 — GBP / Local SEO fixes (for Noida local visibility)

From the Local SEO Audit (0/9 grid points for "software development company Noida"):

### 9. Google reviews push
- Target: 50 reviews (currently at 9; Grepix at 41 ranks #2)
- Action: send review request links to past and current clients after project milestones

### 10. Fix Google Business Profile
- Update GBP website URL to workforcenext.in (currently may point to wrong domain)
- Add business hours
- Rewrite GBP description to lead with "AI automation and offshore software development" and mention Noida, India
- Add secondary categories: "Software company", "App developer", "AI company"
- Upload 10+ photos of office, team

---

## TIER 5 — Content additions (15-30 min each, no new pages needed)

### 11. Add vertical expertise bullets to service pages
On /hire/fullstack-developers/ or /for/startups/, add a "domains we have built for" section:
- GIS and location-aware applications
- Fleet telematics and real-time data dashboards
- IoT web infrastructure and device management platforms
- Time-series data pipelines (InfluxDB, TimescaleDB)

### 12. Add "offshore development center" synonym to /for/gcc-india/
Mention ODC as a synonym for GCC in the opening copy. "Offshore development center" searches map to the same buyer intent as GCC setup.

---

## Pages already live from today

| Page | Target keyword | Status |
|---|---|---|
| /ai-automation-agency/ | ai automation agency (4,400/mo, KD 19) | Live |
| /qa-testing-services/ | software quality assurance services (210/mo, KD 17, CPC $86) | Live |
| /nearshore-software-development/ | nearshore software development companies (880/mo, KD 1, CPC $100) | Live |
| /hire/ai-developers/ | hire ai developers in india (pos 11.2) | Updated + live |

---

## Reference — full reports in OpenSEO

- Keyword Research (AI automation, hire dev India, QA, ODC): report d68bdb16
- Keyword Research (mobile, MERN, Python, GIS, IoT, telematics): report 79947b20
- AI Visibility Audit (0/41 citations): report e1a27cbf
- Local SEO Audit (0/9 grid points Noida): report 60459a6f
- Site Audit (clean, homepage title fix needed): report bfb519f8

Project context: https://app.openseo.so/p/c8e3c03b-9d9d-4258-86b9-6b723c0241e5/context
