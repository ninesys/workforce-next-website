# SEO and content rules — what to do, what not to do

Consolidated from project memory. These rules apply to every page,
post, and copy edit on workforcenext.in. Read before drafting or
editing anything user-facing.

## Brand positioning

Workforce Next is **an IT consulting and IT engineering company** that
helps growing businesses hire pre-vetted developers and teams from
India. The framing was shifted to this on 2026-05-04 and is reflected
in `siteMetadata.description`, `EntityDefinition.tsx`, `llms.txt`,
and `llms-full.txt`. Do not use older framings like "remote
engineering staffing company" or "developer placement agency."

Approved phrasings:

- "IT consulting and IT engineering company"
- "Hire dedicated remote developers from India"
- "Pre-vetted by SethAI"
- "Managed offshore development team"
- "B2B services contract; no entity, no EOR, no payroll burden"

## Do-not list (hard rules)

### 1. No em-dashes or en-dashes anywhere

The character `—` (em-dash, U+2014) and `–` (en-dash, U+2013) are
**banned** in every user-facing string on the site, including blog
post bodies, FAQ answers, page metadata, and component copy. Use a
comma, a colon, a hyphen, or rephrase.

For numeric ranges, use the word "to":

- ✅ "5 to 8 years"
- ✅ "USD 6,500 to 9,500 per month"
- ❌ "5–8 years"
- ❌ "USD 6,500—9,500"

The publishing routine greps for these characters. Failures block
deploy.

### 2. No employee monitoring product

Workforce Next no longer sells the Productivity Intelligence /
employee monitoring software. Confirmed by the user on 2026-05-08.

**Do not** propose or generate content for any of these query
clusters:

- "employee monitoring software" / "best employee monitoring software in india"
- "screen monitoring" / "monitoring screen" / "what is screen monitoring"
- "stealth employee monitoring" / "stealth mode meaning" / "stealth tracking"
- "workforce monitoring software"
- "employee tracking tools"
- "productivity monitoring"
- "spy software"
- Any AI-agent-style "evaluate the workforce analytics company X on employee monitoring" queries

The page `/products/employee-productivity-intelligence/` exists in
the codebase but is treated as legacy. **Do not** propose to keep it
actively SEO-optimized. If the user asks how to handle it, the
options are: leave it alone (rankings decay), redirect it to
`/products/seth-ai-recruiter/` or `/contact/`, or replace its
content with a redirect-style notice. **Do not** propose "rewrite
for better CTR."

### 3. No promises of unbuilt pages

Never write copy that says "page X is coming," "page X is on the
build list," or links to a `/hire/<role>/` URL that does not exist.
Either build the page or do not mention it. Pre-publish grep for the
phrases "coming soon," "on the build list," "will launch" to catch
slips.

### 4. No referring to deprecated tooling as current

Tools like RxJava, AsyncTask, kapt (for Android) and class components,
HOCs, Redux without RTK (for React) are **maintenance technology** in
2026, not the modern default. When mentioning them, frame them as
legacy or maintenance scope. Do not list them as preferred tools in
job descriptions or product copy.

## Voice and tone

- Match the voice of the expanded `/hire/*` pages.
- Use plain English, not corporate marketing language.
- Be specific over abstract. Quote real numbers.
- Concede where competitors win. Honesty out-performs self-promotion
  in 2026 AI Overviews.
- Default to "we" for the company, "you" for the reader.

## Author and identity defaults

- **Author**: Gaurav
- **Author role**: Founder & Solution Architect
- **LinkedIn**: https://linkedin.com/in/post2seth
  - Used in: AuthorBio component, Person JSON-LD `sameAs`, footer or
    contact social links. Do not invent a different handle.
- **Company legal name**: Workforce Next Pvt. Ltd.
- **Company short name**: Workforce Next
- **Company tagline**: "Your remote team. Built to stay."
- **Company address**: DLF Cyber City, Gurugram, Haryana, India
- **Tech office**: NPX Urbtech, Sector 153, Noida, U.P., India

## Product / page scope

Currently active pages and offerings:

- All `/hire/*` role pillars (full list: see `src/data/navigation.ts`)
- `/for/*` audience and region pages (founders, startups, enterprise,
  europe, usa-canada, australia, dubai)
- `/products/seth-ai-recruiter/` — active product
- `/products/employee-productivity-intelligence/` — **legacy, do not
  promote**
- Long-form content pages: `/india-handled/`, `/ai-native-india/`,
  `/cost-of-switching/`, `/not-another-body-shop/`,
  `/context-continuity-guarantee/`, `/why-teams-stay/`,
  `/how-we-work/`

## SEO standards (every page)

### On-page metadata

- **Title**: 50 to 60 characters, ends with " | Workforce Next" if
  fits, primary keyword near the front.
- **Description**: 140 to 160 characters, includes the primary
  keyword, ends with a soft call-to-action.
- **OG image**: 1200×630 WebP at `/images/og-default.png` site-wide,
  per-page at `/images/blog/<slug>.webp` for blog posts.
- **Canonical**: always set to the absolute URL of the page.
- **Markdown alternate**: blog posts automatically get
  `alternates.types["text/markdown"]` via the `app/md/blog/[slug]`
  route handler. Other content types are on the backlog.

### Structured data (every page should have)

- `BreadcrumbList` JSON-LD (helper: `generateBreadcrumbSchema`)
- For blog posts: `BlogPosting` + `Person` + (optional) `FAQPage`
- For role pillars: `Service` + `BreadcrumbList` + `FAQPage`
- For region pages: `Service` with `areaServed` array of `Country` types
- For long-form content pages: `Article` (helper: `generateArticleSchema`)
- For the SethAI product page: `SoftwareApplication`

### AEO / GEO (Answer Engine Optimisation)

Apply on every long-form page and every blog post:

1. Lead with the answer (TL;DR or first paragraph)
2. Question-style H2s
3. One definition sentence per major concept
4. FAQ block with 6 to 8 questions plus FAQPage schema
5. Outbound citations to authoritative sources
6. Visible author byline plus Person JSON-LD
7. Scannable structure: short paragraphs, bullets, tables

## Internal linking discipline

- Every blog post has at least 5 internal links.
- Every `/hire/*` page links to `/products/seth-ai-recruiter/` and
  `/contact/`.
- Cross-link related blog posts (companion posts in the same topic
  cluster).
- Use descriptive anchor text. Avoid "click here," "learn more."

## Markdown alternates

Every blog post is automatically served at `/blog/<slug>.md` with
`Content-Type: text/markdown; charset=utf-8` via the route handler at
`src/app/md/blog/[slug]/route.ts`. AI tools (Cursor, Windsurf,
Perplexity, ChatGPT custom GPTs) discover this via the
`<link rel="alternate" type="text/markdown">` tag in the HTML head.

Do not link to `.md` URLs from human-facing UI. They are bot
endpoints.

Backlog: `/hire/<role>.md`, `/for/<region>.md`, long-form, home,
products, about, faq, contact. Each requires either a data refactor
or a build-time HTML scrape step. Track in
`project_markdown_alternates.md` memory.

## Sitemap and IndexNow

- Every new page or blog post must be added to `src/app/sitemap.ts`
  (static routes only; blog posts auto-include via the `blogPosts`
  array).
- Every new page URL must be added to the `URLS` array in
  `scripts/indexnow-submit.sh`.
- Run `./scripts/indexnow-submit.sh` after every deploy that adds or
  changes a URL. Wait at least 120 seconds after `git push` before
  running so Vercel has finished SSG.

## Robots.txt

Generated programmatically by `src/app/robots.ts`. Allows all major
search engines and AI crawlers (Googlebot, Bingbot, GPTBot,
ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, Amazonbot,
Applebot-Extended). Each per-bot block has its own
`Disallow: /api/` because RFC 9309 says specific bot groups override
the wildcard.

The deprecated Yandex `Host:` directive was removed on 2026-05-04
because it was flagged as invalid syntax.
