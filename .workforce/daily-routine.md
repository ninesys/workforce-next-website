# Daily routine — publish one blog post

The n8n / agent / human-operator sequence. Each step is self-contained
and references the file or command it needs. Follow top to bottom.

## Step 1: Pick the next post

**Source of truth:** [`blog-queue.json`](blog-queue.json).

Open the file, find the first item in `queue` with `status: "pending"`
and the lowest `priority` number. Use that item's `slug`, `title`,
`primaryKeyword`, and `pairsWith` for the rest of the routine.

If `queue` is empty (every item shipped), stop here and notify the
human operator. Do not invent topics.

## Step 2: Draft the post

**Prompt:** [`prompts/draft-post.md`](prompts/draft-post.md).

Hand the prompt to the writing LLM (Claude, GPT, Gemini, etc.). The
prompt assembles full context including:

- The post entry from `blog-queue.json` (title, primary keyword, paired page)
- Voice rules from [`seo-rules.md`](seo-rules.md)
- Template structure from [`blog-instructions.md`](blog-instructions.md)

The LLM returns a JSON object matching the `BlogPost` shape used by
the site's data layer (see `src/data/blog/types.ts`). Save the output
as a TypeScript module at:

```
src/data/blog/<slug>.ts
```

Following the pattern of recent posts (e.g.
`src/data/blog/kotlin-vs-java-android-2026.ts`).

## Step 3: Validate the draft

Run the pre-publish checklist from
[`blog-instructions.md`](blog-instructions.md) section "Pre-publish
checklist." Specifically:

- [ ] Title 50 to 60 chars
- [ ] Description 140 to 160 chars
- [ ] No em-dashes (`—`) or en-dashes (`–`) anywhere in the body, FAQ, or metadata
- [ ] TL;DR is 2 to 4 sentences and leads with the answer
- [ ] At least 4 H2s phrased as questions
- [ ] At least 3 outbound citations to authoritative sources
- [ ] At least 5 internal links to existing pages on the site
- [ ] FAQ has 6 to 8 questions
- [ ] All FAQ items have `category: "hiring" | "ai" | "automation"` (only those three are valid in the type system)

Verification commands:

```bash
# Em / en dash check
grep -nE "—|–" src/data/blog/<slug>.ts

# Type-check the whole project
npx tsc --noEmit
```

If either fails, fix the draft and re-check.

## Step 4: Register the post

Open `src/data/blogPosts.ts` and:

1. Import the new module at the top:
   ```ts
   import <camelCaseSlug> from "./blog/<slug>";
   ```
2. Add `<camelCaseSlug>` to the `blogPosts` array at the end.

This automatically wires the post into the sitemap, the blog listing,
related posts, and the markdown alternate route at
`/blog/<slug>.md`.

## Step 5: Add the URL to IndexNow

Open `scripts/indexnow-submit.sh` and append the new URL to the
`URLS` array:

```bash
"https://${HOST}/blog/<slug>/"
```

## Step 6: Generate the OG image

**Prompt:** [`prompts/og-image.md`](prompts/og-image.md).

Generate with Imagen 3 (or whichever image model is current). Save the
PNG to:

```
public/images/blog/<slug>.png
```

Then convert to WebP and remove the PNG using the command in
[`post-deploy.md`](post-deploy.md) section "Convert OG image PNG to
WebP."

## Step 7: Commit and push

```bash
cd /Users/studio/Projects/workforce/website
git add -A
git commit -m "Blog: <short title>

<one or two paragraph commit message describing the post,
its primary keyword target, and its paired pillar page>

Co-Authored-By: <agent or human handle>
"
git push origin main
```

This triggers the Vercel auto-deploy. Vercel needs ~60 to 120 seconds
to SSG the new route plus its markdown alternate.

## Step 8: Wait for deploy, then run IndexNow

**Wait at least 120 seconds** before pinging IndexNow so the new URL
is live (not 404).

```bash
bash /Users/studio/Projects/workforce/website/scripts/indexnow-submit.sh
```

Expected output:

```
[IndexNow] Submitting NN URLs...
[IndexNow] https://api.indexnow.org/indexnow... HTTP 200
[IndexNow] https://www.bing.com/indexnow... HTTP 200
[IndexNow] https://yandex.com/indexnow... HTTP 202
[IndexNow] Done. NN URLs submitted to 3 engines.
```

Bing occasionally returns HTTP 000 (timeout). Yandex sometimes returns
HTTP 200 instead of 202. Both are fine. The api.indexnow.org central
endpoint is the most important; if that returns 200, all three search
engines receive the submission via the central hop.

## Step 9: Verify

Run all three checks from [`post-deploy.md`](post-deploy.md) section
"Verification curls" against the new URL. Specifically:

1. `.md` content-type header → `text/markdown; charset=utf-8`
2. Markdown body renders cleanly (starts with `# Title`, has TL;DR, etc.)
3. HTML page advertises the markdown alternate via
   `<link rel="alternate" type="text/markdown">`

If any verification fails, the deploy did not complete or the route
handler errored. Investigate before declaring the routine done.

## Step 10: Update the queue

Move the published item from `queue` to `shipped` in
[`blog-queue.json`](blog-queue.json). Stamp it with:

```json
{
  "id": "...",
  "slug": "...",
  "shippedAt": "<YYYY-MM-DD>",
  "commit": "<short SHA>",
  "imageWebp": true
}
```

Commit the queue update:

```bash
git add .workforce/blog-queue.json
git commit -m "Queue: mark <slug> as shipped"
git push origin main
```

This second commit is intentional. It makes the publishing log
auditable from git history.

## Step 11: Optional — schedule next-day post

If the queue still has pending items, the next run of this routine
picks up where this one left off. No additional action needed.

## Failure modes and recovery

- **Type-check fails after draft.** Common cause: invalid FAQ category
  string. Fix to `"hiring"`, `"ai"`, or `"automation"`. Re-run.
- **Em / en dash grep returns matches.** The LLM emitted dashes in
  spite of instructions. Replace `—` with " — " (literal hyphen) or
  rephrase. Re-run grep until clean.
- **IndexNow returns 404 from Bing.** The deploy is not yet live. Wait
  another 60 seconds and retry the script.
- **Vercel deploy fails.** Check `vercel logs --prod` or the dashboard.
  Most common cause is a TypeScript error that slipped past local
  `npx tsc --noEmit`. Fix on a new commit and push.

## Source of automation

When n8n, GitHub Actions, or another agent runs this routine, it needs
permission to:

- Read this folder (`.workforce/`)
- Write to `src/data/blog/`, `src/data/blogPosts.ts`, `scripts/indexnow-submit.sh`, and `public/images/blog/`
- Execute `git add`, `git commit`, `git push`
- Execute `npx tsc --noEmit`, `cwebp`, and `bash scripts/indexnow-submit.sh`
- Call an LLM (writing) and an image model (OG image)

If any of those is missing, route the failing step to a human.
