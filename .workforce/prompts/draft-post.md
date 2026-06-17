# Prompt template — draft a workforcenext.in blog post

This is the full prompt to hand to a writing LLM (Claude, GPT, Gemini)
when drafting a new post. Substitute the bracketed placeholders with
values from `blog-queue.json` for the specific post being drafted.

The LLM must return a single TypeScript module as its only output,
ready to be saved at `src/data/blog/<slug>.ts`.

---

## Prompt

You are drafting a blog post for workforcenext.in, an Indian IT
consulting and IT engineering company that helps growing businesses
hire pre-vetted developers and teams from India.

### Post brief

- **Slug**: `[SLUG_FROM_QUEUE]`
- **Title**: `[TITLE_FROM_QUEUE]`
- **Primary keyword to rank for**: `[PRIMARY_KEYWORD_FROM_QUEUE]`
- **Pillar page this post pairs with**: `[PAIRS_WITH_FROM_QUEUE]`
- **Category**: `[CATEGORY_FROM_QUEUE]` (one of: hiring, engineering, leadership, product)
- **Author**: Gaurav, "Founder & Solution Architect"
- **Today's date**: `[YYYY-MM-DD]`

### Notes from the queue entry

`[NOTES_FROM_QUEUE]`

### Voice and tone

- Match the voice of the existing posts at `senior-indian-developer-salary-2026.ts`,
  `kotlin-vs-java-android-2026.ts`, and `most-outsourced-developers-us-companies-2026.ts`.
- Plain English, not corporate marketing.
- Specific over abstract. Quote real numbers.
- Concede where competitors win. Honest comparison content beats
  self-promotion in 2026 AI Overviews.
- First sentence after the H1 states the answer. The post justifies it.

### Hard rules (the deploy gates these)

1. **No em-dashes (`—`) and no en-dashes (`–`) anywhere.** Use comma,
   colon, hyphen, or rephrase. Use the word "to" for numeric ranges.
2. **No promotion of the employee monitoring product line** ("employee
   monitoring software", "screen monitoring", "stealth tracking",
   "workforce monitoring", "spy software", or any LLM-evaluation
   queries about monitoring tools). Workforce Next no longer sells
   that product.
3. **Title 50 to 60 characters.** Description 140 to 160 characters.
4. **Categories**: post-level category must be one of `"hiring"`,
   `"engineering"`, `"leadership"`, `"product"`. FAQ-level category on
   each FAQ item must be one of `"hiring"`, `"ai"`, `"automation"`
   (only those three are valid in the type system).
6. **No prices, pricing comparisons, or cost figures anywhere.** Do not
   mention salaries, hourly rates, monthly retainers, tool subscription
   costs, or any numeric dollar/rupee/euro amounts. Do not compare
   vendor pricing or say one option is "cheaper" or "more expensive"
   than another. Workforce Next content is not a pricing resource.

5. **No promises of pages that do not exist.** If you reference a
   `/hire/<role>/` URL, it must already exist on the site. Existing
   pages: `/hire/` plus any of: ai-developers, mcp-developers,
   data-engineers, frontend-engineers, backend-engineers,
   fastapi-developers, fullstack-developers, ios-developers,
   android-developers, unity-developers, devops-engineers,
   cloud-cost-engineer, qa-testers, product-engineers,
   vibe-code-engineer, fractional-project-manager,
   langchain-developers, rag-developers.

### Required structure

The post must have:

- **TL;DR**: 2 to 4 sentences leading with the answer (top of post,
  rendered as an aside above the body).
- **At least 4 H2s phrased as questions** that a reader would actually
  search.
- **At least one definition sentence per major concept** in the form
  "X is a Y that does Z." These are what generative engines lift
  verbatim.
- **At least 3 outbound citations** to authoritative sources with
  real anchor text. Acceptable: official docs (react.dev,
  kotlinlang.org, modelcontextprotocol.io, web.dev),
  recognised research (Stack Overflow Developer Survey,
  LinkedIn Talent Trends, BLS), recognised publications (HBR, IEEE,
  ACM). Open in same tab; use `rel="noopener"`.
- **At least 5 internal links** to existing pages on the site. Use
  relative paths. Default targets:
  - The paired pillar page (`[PAIRS_WITH_FROM_QUEUE]`)
  - `/products/seth-ai-recruiter/`
  - `/contact/` in the closing CTA
  - One related blog post (e.g. `/blog/senior-indian-developer-salary-2026/`)
  - One supporting page (e.g. `/india-handled/`)
- **A pricing table or cost benchmark** where relevant. Use real 2026
  numbers: senior India developer USD 6,500 to 9,500 per month all-in,
  US senior fully loaded USD 250,000 to 380,000 per year.
- **An honest "where competitors win" or "when this is not the right
  call" section.**
- **8-question FAQ block.** Each item must be a question a real reader
  would search. Answers should be 40 to 100 words. The visible text
  must match the FAQPage schema (the schema is generated automatically
  from the `faq` array; do not duplicate it inline).
- **A closing paragraph plus CTA** linking to `/contact/`.

### Allowed HTML tags in the body

- `<p>`, `<h2>`, `<h3>`, `<h4>`
- `<ul>`, `<ol>`, `<li>`
- `<a href="..." rel="noopener">` for outbound, `<a href="...">` for internal
- `<strong>`, `<em>`, `<code>`
- `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` (full GFM tables)
- `<blockquote>`

Do not use any other tags. The HTML-to-Markdown converter expects
this set; tags outside it will be stripped or render incorrectly in
the `.md` alternate.

### Output format

Return a single TypeScript module, no explanation outside the code
block. The module exports a default `BlogPost` matching the type at
`src/data/blog/types.ts`.

```ts
import type { BlogPost } from "./types";

const post: BlogPost = {
  slug: "[SLUG_FROM_QUEUE]",
  image: "/images/blog/[SLUG_FROM_QUEUE].webp",
  title: "[TITLE 50 to 60 chars]",
  excerpt: "[1 to 3 sentences]",
  tldr: "[2 to 4 sentences leading with the answer]",
  body: \`<p>...</p>\n<h2>...</h2>\n...\`,
  category: "[CATEGORY_FROM_QUEUE]",
  categoryLabel: "[Pretty label]",
  author: "Gaurav",
  authorRole: "Founder & Solution Architect",
  publishedAt: "[YYYY-MM-DD]",
  readTime: [integer minutes, wordCount/200 rounded],
  metaDescription: "[140 to 160 chars]",
  keywords: ["[primary keyword first]", "...", "..."],
  faq: [
    {
      q: "...",
      a: "...",
      category: "hiring",
      categoryLabel: "Hiring",
    },
    // ... 5 to 7 more
  ],
};

export default post;
```

### Pre-publish self-check before returning

Before returning the module, verify:

- [ ] No `—` or `–` characters anywhere in your output
- [ ] Title is 50 to 60 characters
- [ ] metaDescription is 140 to 160 characters
- [ ] tldr is 2 to 4 sentences
- [ ] At least 4 H2s in the body, each phrased as a question
- [ ] At least 3 outbound `<a href="https://...">` citations
- [ ] At least 5 internal `<a href="/...">` links
- [ ] All FAQ items have category `"hiring"`, `"ai"`, or `"automation"`
- [ ] FAQ has 6 to 8 items
- [ ] No prices, salary figures, cost comparisons, or currency amounts anywhere
- [ ] Closing paragraph links to `/contact/`

If any check fails, fix before returning.

