# SEO Implementation Skill for Next.js Websites

> Drop this file into any Next.js project as `CLAUDE.md` or import it to apply production-grade SEO across the entire site. Every technique here has been tested and deployed on a live site indexed by Google, Bing, and AI search engines.

---

## 1. Metadata Strategy

### Global Layout Metadata (`app/layout.tsx`)

Every Next.js site must have a global metadata configuration in the root layout:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    template: '%s | Brand Name',
    default: 'Brand Name | Primary Value Proposition',
  },
  description: 'Comprehensive description with primary keywords naturally included.',
  keywords: ['keyword1', 'keyword2', 'keyword3'], // 8-12 terms
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://yourdomain.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Brand Name',
  },
  twitter: { card: 'summary_large_image' },
}
```

### Per-Page Metadata

Every page must have its own `export const metadata: Metadata` with:
- **title**: Unique, under 60 characters, includes primary keyword
- **description**: Unique, 150-160 characters, includes primary and secondary keywords
- **keywords**: Array of 8-14 long-tail keywords specific to that page
- **openGraph**: title, description, type, url
- **twitter**: card type

### Blog Post Dynamic Metadata

Blog posts generate metadata dynamically from a data source:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://yourdomain.com/blog/${post.slug}`,
      publishedTime: post.date,
    },
  }
}
```

---

## 2. JSON-LD Structured Data

Add JSON-LD scripts to pages using `dangerouslySetInnerHTML` with `JSON.stringify`. Never use Product/Offer schemas unless you actually sell products with prices and shipping. Google will flag merchant listing errors.

### Schema Types by Page

| Page | Schema Type | When to Use |
|------|------------|-------------|
| Home | `Organization` | Always. Include name, url, contactPoint, description, knowsAbout |
| Home | `HowTo` | If you have a step-by-step process (boosts AI Overview eligibility) |
| Platform/Product | `SoftwareApplication` | For software platforms. Include featureList, applicationCategory, provider |
| Services | `Organization` + `knowsAbout` | List service categories. Do NOT use OfferCatalog unless actual pricing |
| Solutions | `Service` | For industry-specific pages. Include serviceType, provider, areaServed |
| Solutions | `FAQPage` | If page has FAQ section |
| Blog Posts | `BlogPosting` | Always. Include headline, description, datePublished, author, publisher |
| Blog Posts | `FAQPage` | If post has FAQ items. Enables FAQ rich results in Google |

### Template: Organization Schema (Home Page)

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brand Name',
  url: 'https://yourdomain.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-xxx-xxx-xxxx',
    email: 'hello@yourdomain.com',
  },
  description: 'What your company does in one sentence.',
  knowsAbout: ['Topic 1', 'Topic 2', 'Topic 3'],
}
```

### Template: HowTo Schema (Home Page)

This is a key schema for appearing in Google AI Overviews:

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to [achieve outcome] with [Brand]',
  description: 'Short description of the process.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Step name', text: 'Step description.' },
    { '@type': 'HowToStep', position: 2, name: 'Step name', text: 'Step description.' },
    { '@type': 'HowToStep', position: 3, name: 'Step name', text: 'Step description.' },
  ],
}
```

### Template: BlogPosting + FAQPage (Blog Posts)

```typescript
// BlogPosting - always present
{
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  author: { '@type': 'Organization', name: 'Brand Name' },
  publisher: { '@type': 'Organization', name: 'Brand Name' },
}

// FAQPage - only if post has FAQ items
{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: post.faq.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}
```

### Schemas to AVOID for non-ecommerce sites

- `Product` + `Offer` (triggers merchant listing validation in Google Search Console)
- `OfferCatalog` (same problem)
- Any schema with `price`, `priceCurrency`, `shippingDetails`, `hasMerchantReturnPolicy`

---

## 3. IndexNow Protocol (Instant Indexing)

IndexNow pings search engines the moment you deploy, getting pages crawled in minutes instead of days.

### Setup Steps

1. **Generate an API key**: `openssl rand -hex 16`
2. **Create verification file**: Save key as `public/{key}.txt` containing just the key
3. **Create API route** (`app/api/indexnow/route.ts`):

```typescript
import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'your-key-here'
const HOST = 'https://yourdomain.com'

export async function POST(request: NextRequest) {
  const { urls } = await request.json() as { urls?: string[] }
  if (!urls || urls.length === 0) {
    return NextResponse.json({ error: 'No URLs provided' }, { status: 400 })
  }

  const fullUrls = urls.map((u: string) => u.startsWith('http') ? u : `${HOST}${u}`)
  const payload = {
    host: 'yourdomain.com',
    key: INDEXNOW_KEY,
    keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: fullUrls,
  }

  const results = await Promise.allSettled([
    fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
    fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  ])

  const summary = results.map((r, i) => {
    const engine = ['IndexNow', 'Bing'][i]
    if (r.status === 'fulfilled') return { engine, status: r.value.status, ok: r.value.ok }
    return { engine, status: 'error', ok: false }
  })

  return NextResponse.json({ submitted: fullUrls, results: summary })
}
```

4. **Create postbuild script** (`scripts/indexnow-submit.mjs`):

```javascript
const INDEXNOW_KEY = 'your-key-here'
const HOST = 'https://yourdomain.com'

const staticUrls = ['/', '/about', '/services', '/contact', '/blog']

async function getBlogSlugs() {
  try {
    const { readFileSync } = await import('fs')
    const { resolve } = await import('path')
    const dataFile = readFileSync(resolve('src/data/blog-posts.ts'), 'utf-8')
    const slugMatches = [...dataFile.matchAll(/slug:\s*'([^']+)'/g)]
    return slugMatches.map((m) => `/blog/${m[1]}`)
  } catch {
    return []
  }
}

async function submit() {
  const blogUrls = await getBlogSlugs()
  const allUrls = [...staticUrls, ...blogUrls].map((u) => `${HOST}${u}`)
  const payload = { host: 'yourdomain.com', key: INDEXNOW_KEY, keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`, urlList: allUrls }

  console.log(`[IndexNow] Submitting ${allUrls.length} URLs...`)
  const engines = [
    { name: 'IndexNow', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Bing', url: 'https://www.bing.com/indexnow' },
  ]
  for (const engine of engines) {
    try {
      const res = await fetch(engine.url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      console.log(`[IndexNow] ${engine.name}: ${res.status} ${res.ok ? 'OK' : res.statusText}`)
    } catch (err) { console.log(`[IndexNow] ${engine.name}: failed`) }
  }
}

submit()
```

5. **Add to package.json**:
```json
"postbuild": "node scripts/indexnow-submit.mjs"
```

No registration needed. IndexNow is an open protocol. Bing accepts pings immediately. Bing also powers DuckDuckGo, Yahoo, and Ecosia.

---

## 4. Sitemap Configuration

### File: `app/sitemap.ts`

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // ... static pages with priority 0.7-0.9
    // ... blog posts with priority 0.6, changeFrequency: 'monthly'
  ]
}
```

### Rules
- Home page: priority 1, changeFrequency weekly
- Core pages (product, solutions): priority 0.8-0.9, weekly
- Support pages (contact, services): priority 0.7-0.8, weekly
- Blog posts: priority 0.6, monthly
- Update sitemap every time a new page or blog post is added

---

## 5. robots.txt Configuration

### File: `app/robots.ts`

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
    host: 'https://yourdomain.com',
  }
}
```

### Key Points
- Explicitly allow AI search bots (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot)
- Block /api/ and /_next/ from crawlers
- Always include sitemap URL and canonical host

---

## 6. Blog System SEO Architecture

### Data Structure (Single Source of Truth)

All blog posts live in one TypeScript file (`src/data/blog-posts.ts`):

```typescript
export interface BlogPost {
  slug: string          // URL-safe identifier
  title: string         // Under 60 chars, includes primary keyword
  description: string   // 150-160 chars meta description
  image: string         // WebP image path
  date: string          // Human-readable date
  tag: string           // Category label
  keywords: string[]    // 8-14 long-tail keywords
  content: string[]     // Array of paragraphs and headings
  faq: { q: string; a: string }[]  // 5 FAQ items per post
}
```

### Content Format Rules
- Content is an array of strings. Each string is a paragraph.
- Lines starting with `## ` are h2 headings (used for TOC generation)
- Inline links use markdown: `[link text](/path)` parsed by `renderInlineLinks()`
- New posts added at TOP of array (reverse chronological)
- Both blog list and detail pages import from the same data file

### Table of Contents (Auto-generated)

Extract h2 headings from content, generate anchor IDs, render as numbered links:

```typescript
function toAnchor(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const headings = post.content
  .filter(line => line.startsWith('## '))
  .map(line => line.replace('## ', ''))
```

Render as `<nav aria-label="Table of contents">` with anchor links. Google uses these for jump links in search results.

### FAQ Section

Every blog post should have 5 FAQs. These:
- Appear as styled cards below the article content
- Generate FAQPage JSON-LD schema for rich results
- Target "People Also Ask" queries in Google
- Use natural question phrasing that matches how people search

### Blog Post SEO Checklist
- [ ] Title under 60 characters with primary keyword
- [ ] Description 150-160 characters with primary + secondary keywords
- [ ] 8-14 long-tail keywords in keywords array
- [ ] 5+ h2 headings in content (generates TOC)
- [ ] 5 FAQ items targeting "People Also Ask" queries
- [ ] 3+ internal links to other blog posts
- [ ] 2+ internal links to product/service pages
- [ ] 1 CTA link to /contact
- [ ] Unique WebP image (under 200KB)
- [ ] BlogPosting + FAQPage JSON-LD schemas
- [ ] Added to sitemap.ts

---

## 7. Image Optimization

### Format
- All images must be WebP format
- Convert using: `cwebp -q 80 input.png -o output.webp`
- Target size: under 200KB per image
- Dimensions: 1376x768 (16:9 landscape) for blog and hero images

### Next.js Image Component
- Always use `next/image` with `fill` layout or explicit dimensions
- Always include `sizes` prop for responsive loading
- Use `priority` prop on above-the-fold images (hero, first blog image)
- Use `object-cover` for consistent aspect ratios

```tsx
<Image
  src="/blog/article-image.webp"
  alt="Descriptive alt text with keywords"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 768px"
  priority  // only for above-the-fold images
/>
```

### Image Naming
- Use descriptive, hyphenated names: `ev-scooter-diagnostics.webp`
- Never use generic names like `image1.webp` or `photo.webp`
- Include relevant keywords in the filename

---

## 8. Internal Linking Strategy

### Rules
- Every page links to at least 2 other pages on the site
- Solution pages cross-link to each other (3-way linking)
- All pages have at least one CTA linking to /contact
- Product/platform page is linked from every solution page
- Blog posts link to 3+ other blog posts (interlinking)
- Blog posts link to 2+ product/service/solution pages

### Implementation in Blog Content

Use markdown-style inline links in blog content strings:

```typescript
content: [
  'Our [cognitive IoT platform](/platform) handles device management at scale.',
  'This is similar to how [edge computing reduces latency](/blog/what-is-edge-cloud-computing).',
  '[Contact our team](/contact) to get started.',
]
```

Parse with a `renderInlineLinks()` function that converts `[text](url)` to `<a>` tags.

### Cross-linking Map

```
Home → Platform, Solutions (all), Services, Blog
Platform → Solutions (all), Services, Contact
Solution A ↔ Solution B ↔ Solution C (bidirectional)
Services → Solutions (relevant), Platform
Blog Post → 3+ other posts, 2+ product pages, Contact
```

---

## 9. OpenGraph Image Generation

### File: `app/opengraph-image.tsx`

Create a dynamic OG image (1200x630) using Next.js ImageResponse:

```typescript
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Brand Name - Your tagline'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ /* branded design */ }}>
        <h1>Brand Name</h1>
        <p>Your value proposition</p>
      </div>
    ),
    { ...size }
  )
}
```

---

## 10. Font Optimization

- Use `next/font` for Google Fonts or local fonts
- Always set `display: 'swap'` for LCP optimization
- Limit to Latin subset unless targeting other languages
- Maximum 2 font families (body + code/accent)

```typescript
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

---

## 11. Analytics Setup

Include both for performance monitoring that feeds SEO decisions:

```typescript
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// In root layout body:
<Analytics />
<SpeedInsights />
```

---

## 12. Content Writing Rules for SEO

### Tone
- Simple, humanistic, conversational
- No emdashes (use commas or periods instead)
- Short paragraphs (2-3 sentences max)
- Use "you" and "we" to address the reader directly

### Article Structure (Problem-Solution Blueprint)
1. **Hook**: Address a specific pain point the reader is searching for
2. **Problem section**: Quantify the cost/impact of the problem
3. **Solution walkthrough**: Step-by-step with specific details (hardware, code, numbers)
4. **Practical examples**: Case studies or realistic scenarios with real numbers
5. **Business case**: ROI calculation with actual figures
6. **How we help**: Brief pitch for your product/service
7. **CTA**: "Contact us" or "Get started"
8. **FAQ**: 5 questions targeting "People Also Ask"

### Keyword Strategy
- Target long-tail keywords (4-8 words) with low/medium competition
- Include the exact keyword phrase in: title, description, first paragraph, one h2 heading
- Use semantic variations throughout the content
- Each article targets one primary keyword and 2-3 secondary keywords

---

## 13. PWA Manifest

### File: `app/manifest.ts`

```typescript
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brand Name',
    short_name: 'Brand',
    description: 'What you do in one sentence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#3C3C3C',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
```

---

## Quick Start Checklist for New Projects

1. [ ] Set up global metadata in `app/layout.tsx` with robots, OG, Twitter, alternates
2. [ ] Create `app/sitemap.ts` with all pages
3. [ ] Create `app/robots.ts` allowing all major bots including AI crawlers
4. [ ] Add Organization JSON-LD to home page
5. [ ] Add HowTo JSON-LD to home page (for AI Overviews)
6. [ ] Add appropriate schemas to every other page
7. [ ] Generate IndexNow key and create verification file
8. [ ] Create IndexNow API route and postbuild script
9. [ ] Set up blog system with single data source, TOC, FAQ, schemas
10. [ ] Convert all images to WebP, use next/image everywhere
11. [ ] Implement internal cross-linking across all pages
12. [ ] Create dynamic OG image
13. [ ] Add PWA manifest
14. [ ] Set up Vercel Analytics + Speed Insights
15. [ ] Register in Google Search Console and Bing Webmaster Tools

---

*This skill file is based on a production implementation that achieved Google indexing within 24 hours of deployment and rich results (FAQ snippets, jump links) within 2 weeks.*
