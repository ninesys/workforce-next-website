# .workforce — publishing automation playbook

Hidden in-repo folder containing everything an external automation
(n8n, GitHub Actions, a long-running agent, or a human operator) needs
to ship a blog post on workforcenext.in with consistent voice, SEO,
and post-deploy verification. Mirrors the planning memory the Claude
Code skill uses internally, but lives in the repo so non-Claude
tooling can read the same source.

This folder is committed to git on purpose so it travels with the
codebase. It is excluded from the Next.js public build (nothing in it
is shipped to the static output).

## Folder map

| File | Purpose | Audience |
|---|---|---|
| [`daily-routine.md`](daily-routine.md) | The operational sequence: pick → draft → image → commit → deploy → IndexNow → verify | n8n / agent / human |
| [`blog-queue.json`](blog-queue.json) | Machine-readable list of pending posts and shipped log | n8n / agent |
| [`blog-instructions.md`](blog-instructions.md) | How to write a post: voice, structure, FAQ shape, internal links, FAQ schema, pre-publish checklist | LLM / human writer |
| [`seo-rules.md`](seo-rules.md) | Do / do-not list. Includes brand positioning, writing style rules (no em-dashes), product scope (no employee monitoring), author / LinkedIn defaults | LLM / human writer |
| [`post-deploy.md`](post-deploy.md) | Shell commands for PNG to WebP conversion, IndexNow submission, verification curls | n8n / shell automation |
| [`prompts/draft-post.md`](prompts/draft-post.md) | Full prompt to hand to an LLM when drafting a new post (assembles context from this folder) | LLM caller |
| [`prompts/og-image.md`](prompts/og-image.md) | Gemini / Imagen 3 prompt template for the 1200x630 OG image | LLM image caller |

## How to use this folder

**For a daily n8n job:**
1. Open `daily-routine.md` and follow the sequence. Each step references the file containing the detail it needs.
2. Use `blog-queue.json` as the source of truth for what to publish next.
3. Use `prompts/draft-post.md` as the prompt to the writing LLM.
4. Use `prompts/og-image.md` as the prompt to the image LLM.
5. After deploy, follow `post-deploy.md` to convert the image, run IndexNow, and verify.

**For a human operator:**
- Same sequence, same files. The instructions are written to be read top-to-bottom.

**For Claude Code in this repo:**
- These files are derivatives of the project memory. The Claude Code memory at
  `~/.claude/projects/-Users-studio-Projects-workforce-website/memory/`
  remains the working memory during a session. The repo files are for
  external automation; keep them in sync when the strategy changes.

## Maintenance

When something changes in publishing strategy (new keyword target, new
do-not rule, new template structure, voice update), update **both** the
matching memory file under `~/.claude/projects/.../memory/` **and** the
matching file in this folder. The two are intentional duplicates: the
memory file is for Claude Code sessions, the repo file is for
automation outside Claude Code.

Last sync date: 2026-05-08.
