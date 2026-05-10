# Prompt template — Gemini / Imagen 3 OG image

This is the prompt template for generating the 1200×630 OG image for
a new blog post. The brand visual style is consistent across every
post; only the central subject changes per topic.

## Output spec

- **Dimensions**: 1200×630 pixels (aspect ratio 1.91:1, standard OG)
- **Format**: PNG (will be converted to WebP via `cwebp -q 85` in
  the post-deploy step)
- **No text in the image.** The post title is rendered separately by
  social platforms using OG metadata.

## Brand palette (every image)

- **Navy** (`#0f172a`, `#1e293b`) — dominant dark base
- **Electric blue** (`#3b82f6`, `#60a5fa`) — accent, glow, highlights, active connectors
- **Slate gray** (`#cbd5e1`) — secondary structure, neutral elements
- **Warm green** (`#10b981`) — small accents only (success indicators, "active" pulses)
- **Off-white background** with a faint pale-blue radial glow centered behind the main subject

## Style (every image)

- Flat vector illustration with subtle depth
- Clean linework
- Isometric tilt
- Soft gradients
- No photorealism
- Faint hexagonal grid pattern in the background suggesting the
  larger ecosystem the subject lives in

## Universal "avoid" list

Always include in the prompt:

```
Avoid: text, labels, captions, watermarks, photorealistic faces or
hands, generic stock photo aesthetic, cartoonish characters,
cluttered composition, heavy ornamentation, the trademarked
[platform] logo or [mascot] (use abstract or generic shapes
instead), heavy national flag imagery (use abstract dot clusters
or stylised anchors instead).
```

Replace `[platform]` and `[mascot]` with the specific trademarks
relevant to the post topic (e.g. Android robot for Android posts,
React logo for React posts).

## Per-topic prompt template

```
A clean, modern editorial illustration for a B2B blog header about
[POST_TOPIC_ONE_LINE]. Aspect ratio 1.91:1 (1200x630 pixels), wide
horizontal composition.

Subject: [PRIMARY_VISUAL_CONCEPT].

[Describe the central subject in detail. 2 to 4 sentences. Include
where elements sit (left, right, center, upper, lower) and the
relationships between them. Specify any glowing connectors, flow
arrows, or geometric markers.]

A faint hexagonal grid pattern in the background suggests the
larger [DOMAIN] ecosystem.

Style: flat vector illustration with subtle depth, clean linework,
isometric tilt, soft gradients. No photorealism. No actual text or
labels in the image.

Color palette: navy (#0f172a, #1e293b) as the dominant dark base,
electric blue (#3b82f6, #60a5fa) for [ACTIVE_ELEMENT_DESCRIPTION]
and active highlights, soft slate gray (#cbd5e1) for
[SECONDARY_ELEMENT_DESCRIPTION] and secondary structure, warm green
(#10b981) on a small "[SUCCESS_ELEMENT]" indicator. Background:
mostly off-white with a faint pale-blue radial glow centered behind
[FOCAL_POINT].

Tone: corporate, professional, [TOPIC_SPECIFIC_TONE]. Plenty of
clean negative space. Suitable for [INTENDED_AUDIENCE].

Avoid: text, labels, captions, watermarks, photorealistic faces,
generic stock photo aesthetic, cartoonish characters, cluttered
composition, ornament, [TOPIC_SPECIFIC_TRADEMARKS].
```

## Visual concept patterns

When designing the central subject for a new post, pick a pattern
that matches the post's framing:

| Post framing | Visual pattern |
|---|---|
| Comparison (X vs Y) | Two streams converging on a central device, one stream visually weighted dominant |
| Decision matrix | Three to four cards side by side at increasing complexity |
| Hiring guide / job description | Document on the left feeding into a target device on the right via a glowing connector |
| Pillar role page | Tool-stack iconography surrounding a central engineer figure or device |
| Region or geographic | Stylised geographic anchors connected by a glowing arc, with a clock motif at the midpoint showing timezone overlap |
| Pipeline or process | Horizontal flow of connected stages with progress markers |
| Architecture / system | Layered diagram with electric-blue connectors between layers |

## Examples (already shipped)

For reference, these prompts produced approved OG images for the
existing posts. Pattern-match against them when writing a new prompt.

### "Most outsourced developers from US companies in 2026"

Pattern: pipeline. Four-stage CI pipeline with engineer pod nodes
feeding stages.

### "MCP Explained: How to Hire MCP Server Developers"

Pattern: handshake. Central server hub on the right, multiple LLM
clients arcing around the left, all connecting to a single
universal port.

### "Kotlin vs Java for Android in 2026"

Pattern: comparison. Two language streams (Kotlin dominant, Java
maintenance) flowing into a central Android device with a Compose UI
on screen.

### "How to Hire a Software Testing Team in 2026"

Pattern: pipeline. Horizontal CI pipeline with four engineer pod
nodes positioned around the pipeline, each connector glowing with
test activity. A floating test results panel showing 8 horizontal
bars (mostly green, one yellow, one with a flake indicator).

### "Short-term Indian Developers for European Projects"

Pattern: region. Horizontal calendar timeline showing 4 monthly
segments, India and Europe geographic anchors connected by a glowing
arc with a clock motif at the midpoint.

### "Android App Developer Hiring Guide 2026"

Pattern: hiring guide. JD document on the left feeding a stylised
generic smartphone on the right via a glowing connector. Floating
screening signal markers between them.

## Workflow

1. Read the new post's body to identify the topic angle (comparison,
   pipeline, region, etc.).
2. Pick the matching visual pattern from the table above.
3. Adapt the per-topic template above with concrete subject details.
4. Generate with Imagen 3 (or whichever current model). Save as PNG
   at `public/images/blog/<slug>.png`.
5. Convert to WebP using the command in
   [`../post-deploy.md`](../post-deploy.md) section "Convert OG image
   PNG to WebP."
6. The post's `image` field already references
   `/images/blog/<slug>.webp` so no code change is needed once the
   WebP is at the path.

## Quality bar

The image should:

- Be instantly readable as the post topic at thumbnail size (LinkedIn,
  Twitter / X, Slack unfurl)
- Not contain any specific text that could become outdated (no dates,
  no versioned product names visible as text)
- Look like part of a series with the existing OG images on the site
- Feel corporate-professional, not playful or cartoonish

If the generated image fails any of these, regenerate or pick a
simpler variation pattern.
