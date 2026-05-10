# Post-deploy operational commands

Shell-ready commands the publishing routine runs after a draft is
ready. Copy-paste safe; assumes the working directory is the repo
root (`/Users/studio/Projects/workforce/website` on the maintainer's
machine; replace with your path).

## Convert OG image PNG to WebP

After generating the OG image (see `prompts/og-image.md`) and saving
it as PNG to `public/images/blog/<slug>.png`, convert and remove the
PNG:

```bash
SLUG="<slug>"
cd public/images/blog && \
  cwebp -quiet -q 85 "${SLUG}.png" -o "${SLUG}.webp" && \
  rm "${SLUG}.png" && \
  ls -la "${SLUG}.webp"
```

Expected outcome: a ~30 to 60 KB WebP file replaces the ~1 to 1.5 MB
PNG. Compression ratio ~96 to 97 percent at quality 85.

If `cwebp` is not installed on the machine running the routine:

```bash
# macOS
brew install webp

# Debian / Ubuntu
sudo apt-get install -y webp

# Inside Vercel build environment (not needed; we never build images during deploy)
# These are committed pre-converted to the repo.
```

## Type-check before commit

```bash
npx tsc --noEmit 2>&1 | head -20
```

Empty output = clean. Any output = fix before committing.

## Em / en dash check

```bash
SLUG="<slug>"
grep -nE "—|–" "src/data/blog/${SLUG}.ts"
```

Empty output = clean. Any output = replace those characters before
committing.

For a full-tree sweep across all session changes:

```bash
git diff --name-only HEAD | xargs grep -nE "—|–" 2>/dev/null
```

## Commit and push

```bash
git add -A
git commit -m "Blog: <short title>

<one or two paragraph commit message describing the post,
its primary keyword target, and its paired pillar page>

Co-Authored-By: <agent or human handle>
"
git push origin main
```

This triggers the Vercel auto-deploy.

## Wait for Vercel deploy

The Vercel deploy needs **60 to 120 seconds** to:

- Run `next build` and SSG every static route
- Generate the new blog post route plus its `/blog/<slug>.md` markdown alternate
- Promote to the production deployment

Do not run IndexNow submission before the deploy is live; it will
return 404s.

For an automated wait, use a Vercel deployment status check. Manually:
just wait two minutes.

## Run IndexNow submission

```bash
bash scripts/indexnow-submit.sh
```

Expected output:

```
[IndexNow] Submitting NN URLs...
[IndexNow] https://api.indexnow.org/indexnow... HTTP 200
[IndexNow] https://www.bing.com/indexnow... HTTP 200
[IndexNow] https://yandex.com/indexnow... HTTP 202
[IndexNow] Done. NN URLs submitted to 3 engines.
```

Acceptance criteria:

- `api.indexnow.org` must return HTTP 200. This is the central
  endpoint that propagates to all participating search engines.
- `bing.com/indexnow` returns HTTP 200 most of the time, occasionally
  HTTP 000 (timeout). HTTP 000 is non-fatal because the central
  endpoint also notifies Bing.
- `yandex.com/indexnow` returns HTTP 202 (accepted for processing) or
  HTTP 200. Both are fine.

## Verification curls

Run all three after deploy to confirm the post is live and the
markdown alternate is wired correctly.

### 1. Markdown content-type

```bash
SLUG="<slug>"
curl -sI "https://workforcenext.in/blog/${SLUG}.md" | grep -i content-type
```

Expected:

```
content-type: text/markdown; charset=utf-8
```

### 2. Markdown body renders

```bash
SLUG="<slug>"
curl -s "https://workforcenext.in/blog/${SLUG}.md" | head -30
```

Expected: starts with `# <Post Title>`, then an author line, then
`## TL;DR`, then a blockquote with the TL;DR, then the body.

### 3. HTML page advertises the markdown alternate

```bash
SLUG="<slug>"
curl -s "https://workforcenext.in/blog/${SLUG}/" \
  | grep -o '<link[^>]*alternate[^>]*type="text/markdown"[^>]*>' \
  | head -3
```

Expected:

```html
<link rel="alternate" type="text/markdown" href="https://workforcenext.in/blog/<slug>.md"/>
```

### 4. (Optional) Sitemap includes the new URL

```bash
SLUG="<slug>"
curl -s "https://workforcenext.in/sitemap.xml" | grep "${SLUG}"
```

Expected: a `<loc>` entry for the new URL. Blog posts are
auto-included via the `blogPosts` array, so this should always pass.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Vercel deploy fails | TypeScript error not caught locally | Read Vercel build log, fix the error, push a new commit |
| IndexNow returns 404 from Bing | Deploy not yet live | Wait 60 more seconds, retry |
| `.md` URL returns 404 | Middleware rewrite not firing or route handler not built | Check `src/middleware.ts` matcher; check `src/app/md/blog/[slug]/route.ts` |
| `.md` URL returns the HTML page | Middleware excluded `.md` from the matcher | Verify `pathname.endsWith(".md")` rewrite in middleware.ts |
| HTML page does not have `<link rel="alternate">` | `generateMetadata` did not include `alternates.types` | Open `src/app/blog/[slug]/page.tsx` and verify the metadata block includes `alternates.types["text/markdown"]` |
| Type-check fails on FAQ category | Used a string outside the FAQCategory union | Change to `"hiring"`, `"ai"`, or `"automation"` |
