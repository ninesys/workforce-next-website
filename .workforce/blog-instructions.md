# Blog post writing instructions

The voice, structure, and pre-publish checklist used on every
workforcenext.in blog post. The data model is `BlogPost` defined in
`src/data/blog/types.ts`.

## Voice

- **Clear, topic-direct, no abstract thought-piece drift.** Match the
  voice of the expanded `/hire/*` pages (e.g. `/hire/cloud-cost-engineer/`).
- **First sentence states the answer.** Then the post justifies it.
- **No em-dashes (`—`) and no en-dashes (`–`) anywhere.** Universal
  rule. Use comma, hyphen, or rephrase. The publishing routine greps
  for these before committing; failures block the deploy.
- **Use "to" for numeric ranges**, not en-dashes. Write "5 to 8 years",
  "USD 6,500 to 9,500", not "5–8 years" or "USD 6,500–9,500".
- **Plain English over corporate.** Write the way a senior engineer
  explains a tradeoff to a peer.
- **Specific over abstract.** "USD 6,500 to 9,500 per month all-in"
  beats "competitive rates."
- **Concede where competitors win.** Honest comparison content
  performs better than self-promotion in 2026 AI Overviews.

## Structure (every post)

Every `BlogPost` must have these fields. The data type is enforced by
TypeScript; a missing required field will fail the build.

| Field | Required | Notes |
|---|---|---|
| `slug` | yes | URL slug, kebab-case, lowercase, includes year if relevant |
| `title` | yes | 50 to 60 characters |
| `excerpt` | yes | 1 to 3 sentences, used in blog listing card |
| `tldr` | optional but recommended | 2 to 4 sentences leading with the answer. Renders as a TL;DR aside above the body. |
| `body` | yes | HTML string. Allowed tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<a>`, `<strong>`, `<em>`, `<code>`, `<table>` (with `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`), `<blockquote>` |
| `category` | yes | One of: `"hiring"`, `"engineering"`, `"leadership"`, `"product"` |
| `categoryLabel` | yes | Pretty label matching the category |
| `author` | yes | Always `"Gaurav"` unless instructed otherwise |
| `authorRole` | yes | `"Founder & Solution Architect"` |
| `publishedAt` | yes | ISO date `YYYY-MM-DD` |
| `readTime` | yes | Integer minutes, calculated as `wordCount / 200` rounded |
| `metaDescription` | yes | 140 to 160 characters |
| `keywords` | yes | Array of 6 to 12 strings; primary keyword first |
| `faq` | yes | Array of 6 to 8 `{ q, a }` objects. Renders as `<details>` accordion plus FAQPage JSON-LD. |
| `image` | recommended | Path to OG image. Default `/images/blog/<slug>.webp`. File created by the OG image step. |
| `updatedAt` | optional | Use when the post is materially updated. Drives the `dateModified` in BlogPosting JSON-LD. |
| `ogTitle`, `ogDescription` | optional | Override the social preview title and description. Use only when you want different copy than the SERP title. |

## Body content rules

1. **Lead-with-the-answer.** The first paragraph after the H1 should
   answer the post's core question or state its core position.
2. **Question-style H2s.** At least 4 of the H2s in the post must be
   phrased as questions a reader would actually search. Examples:
   "What does X actually do?", "Why does Y matter in 2026?",
   "How much does Z cost?".
3. **One definition sentence per major concept.** Use the form
   "X is a Y that does Z." Generative engines lift these verbatim
   into AI Overviews.
4. **Tables for comparisons.** GFM-compatible tables. Two to four
   columns, no more. Mark up with `<table>`, `<thead>`, `<tbody>`,
   `<tr>`, `<th>`, `<td>`.
5. **At least 3 outbound citations** to authoritative sources. Use
   real anchor text (not "(source)"). Acceptable destinations:
   official docs (react.dev, kotlinlang.org, modelcontextprotocol.io),
   recognised research (Stack Overflow Developer Survey,
   LinkedIn Talent Trends, BLS), recognised publications (HBR, IEEE,
   ACM). Avoid: random blogs, content farms, AI-generated summary
   sites.
6. **At least 5 internal links** to other pages on the site. Use
   relative paths (e.g. `/hire/frontend-engineers/`). Default targets:
   - The paired pillar page (from `pairsWith` in the queue entry)
   - `/products/seth-ai-recruiter/` (the screening / matching product)
   - `/contact/` in the closing CTA
   - One related blog post (e.g. `/blog/senior-indian-developer-salary-2026/`)
   - One supporting page (e.g. `/india-handled/` for managed-team posts)
7. **FAQ block** with 6 to 8 questions. Each FAQ item must have
   `category` set to one of `"hiring"`, `"ai"`, or `"automation"`
   (the only three valid in `FAQCategory` from `src/types/index.ts`).
   Other categories will fail type-check.
8. **Closing paragraph + CTA** linking to `/contact/`. Match recent
   posts: "If you are about to ... talk to us. We will match a senior
   ... in 48 hours and start a paid trial week ..."

## Pre-publish checklist

Run all of these before committing. The daily routine references this
list.

```
[ ] Title length 50 to 60 characters
[ ] Description length 140 to 160 characters
[ ] No em-dashes or en-dashes anywhere in title, excerpt, tldr, body, faq, metaDescription, keywords
[ ] TL;DR is 2 to 4 sentences and leads with the answer
[ ] At least 4 H2s phrased as questions
[ ] At least 3 outbound citations with real anchor text
[ ] At least 5 internal links to existing pages on the site
[ ] FAQ has 6 to 8 questions
[ ] All FAQ items have category: "hiring", "ai", or "automation"
[ ] Image path follows /images/blog/<slug>.webp convention
[ ] Post is registered in src/data/blogPosts.ts (import + array entry)
[ ] URL added to scripts/indexnow-submit.sh
[ ] npx tsc --noEmit returns clean
[ ] grep -nE "—|–" returns no matches in the post file
```

## File-shape example

A minimal valid post file (`src/data/blog/<slug>.ts`):

```ts
import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "<slug>",
  image: "/images/blog/<slug>.webp",
  title: "<60 char or fewer title>",
  excerpt: "<1-3 sentence summary>",
  tldr: "<2-4 sentence answer>",
  body: \`<p>Lead-with-answer paragraph.</p>
<p>Setup paragraph.</p>
<h2>Question-style H2</h2>
<p>Body content with <a href="/internal/path/">internal link</a> and <a href="https://external.com/" rel="noopener">outbound citation</a>.</p>
... etc ...\`,
  category: "hiring",
  categoryLabel: "Hiring & Teams",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "<YYYY-MM-DD>",
  readTime: 12,
  metaDescription: "<140-160 char description>",
  keywords: ["primary keyword first", "..."],
  faq: [
    {
      q: "Question that a real reader would search?",
      a: "Direct, citable answer.",
      category: "hiring",
      categoryLabel: "Hiring",
    },
    // ... 5 to 7 more
  ],
};

export default post;
```

The post then needs to be registered in `src/data/blogPosts.ts`:

```ts
import myNewPost from "./blog/<slug>";

export const blogPosts: BlogPost[] = [
  // ... existing posts
  myNewPost,
];
```

## Voice references

Read these existing posts before drafting a new one. They are the
calibration set.

- `src/data/blog/senior-indian-developer-salary-2026.ts` — pricing
  post; benchmark for honest cost-data writing.
- `src/data/blog/kotlin-vs-java-android-2026.ts` — comparison post;
  benchmark for "X wins when, Y wins when" framing.
- `src/data/blog/most-outsourced-developers-us-companies-2026.ts` —
  trend / framing post; benchmark for AEO-friendly section structure.
- `src/data/blog/android-app-developer-hiring-guide-2026.ts` —
  hiring guide post; benchmark for JD template + screening loop posts.

When in doubt, mirror the voice and shape of these four. Do not drift
into thought-piece abstraction; do not slip into corporate marketing
voice.
