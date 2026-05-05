/**
 * Minimal HTML to Markdown converter tuned to the tags used in blog bodies.
 * Handles: p, h2, h3, ul/li, ol/li, table/thead/tbody/tr/th/td, a, strong,
 * em, code, blockquote, br, and common HTML entities.
 *
 * Not a general-purpose converter. Bug reports welcome but the bar is "did
 * an existing blog post stop rendering correctly", not "does it handle
 * every HTML quirk a CMS could throw at it."
 */

const entityMap: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
  "&rsquo;": "'",
  "&lsquo;": "'",
  "&rdquo;": '"',
  "&ldquo;": '"',
  "&mdash;": "-",
  "&ndash;": "-",
  "&hellip;": "...",
  "&copy;": "(c)",
  "&reg;": "(R)",
  "&trade;": "(TM)",
  "&middot;": "·",
};

function decodeEntities(input: string): string {
  let out = input;
  for (const [entity, replacement] of Object.entries(entityMap)) {
    out = out.split(entity).join(replacement);
  }
  // Numeric entities &#NN; and &#xNN;
  out = out.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));
  out = out.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
  return out;
}

function stripTags(input: string): string {
  return input.replace(/<[^>]+>/g, "").trim();
}

function inline(html: string): string {
  let out = html;

  // Anchors first (so we don't mangle nested formatting inside them).
  out = out.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, href, text) => `[${stripTags(text)}](${href})`
  );

  // Strong / bold.
  out = out.replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `**${stripTags(text)}**`);

  // Emphasis / italic.
  out = out.replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `*${stripTags(text)}*`);

  // Inline code.
  out = out.replace(/<code>([\s\S]*?)<\/code>/gi, (_, text) => `\`${stripTags(text)}\``);

  // Hard breaks.
  out = out.replace(/<br\s*\/?>/gi, "  \n");

  // Strip any remaining inline tags.
  out = out.replace(/<\/?(span|font|small|sup|sub)[^>]*>/gi, "");

  return decodeEntities(out).replace(/\s+/g, " ").trim();
}

function convertList(html: string, ordered: boolean): string {
  const items: string[] = [];
  const re = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m: RegExpExecArray | null;
  let i = 1;
  while ((m = re.exec(html)) !== null) {
    const marker = ordered ? `${i}. ` : "- ";
    items.push(marker + inline(m[1]));
    i++;
  }
  return items.join("\n");
}

function convertTable(html: string): string {
  const headers: string[] = [];
  const rows: string[][] = [];

  const headRe = /<thead[^>]*>([\s\S]*?)<\/thead>/i.exec(html);
  if (headRe) {
    const thRe = /<th[^>]*>([\s\S]*?)<\/th>/gi;
    let h: RegExpExecArray | null;
    while ((h = thRe.exec(headRe[1])) !== null) {
      headers.push(inline(h[1]));
    }
  }

  const bodyRe = /<tbody[^>]*>([\s\S]*?)<\/tbody>/i.exec(html);
  const bodyHtml = bodyRe ? bodyRe[1] : html;
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let r: RegExpExecArray | null;
  while ((r = trRe.exec(bodyHtml)) !== null) {
    const tdRe = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    const cells: string[] = [];
    let c: RegExpExecArray | null;
    while ((c = tdRe.exec(r[1])) !== null) {
      cells.push(inline(c[1]));
    }
    if (cells.length > 0) rows.push(cells);
  }

  if (headers.length === 0 && rows.length > 0) {
    // Synthesize headers from the column count if the table omitted thead.
    for (let i = 0; i < rows[0].length; i++) headers.push(`Column ${i + 1}`);
  }
  if (headers.length === 0) return "";

  const sep = headers.map(() => "---");
  const lines = [
    `| ${headers.join(" | ")} |`,
    `| ${sep.join(" | ")} |`,
    ...rows.map((row) => `| ${row.join(" | ")} |`),
  ];
  return lines.join("\n");
}

export function htmlToMd(html: string): string {
  // Block-level conversion. We split on the major block tags and handle each.
  // This is order-sensitive: tables before paragraphs, lists before paragraphs.
  let work = html;

  // Tables.
  work = work.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    return `\n\n${convertTable(inner)}\n\n`;
  });

  // Unordered lists.
  work = work.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    return `\n\n${convertList(inner, false)}\n\n`;
  });

  // Ordered lists.
  work = work.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    return `\n\n${convertList(inner, true)}\n\n`;
  });

  // Headings.
  work = work.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${inline(t)}\n\n`);
  work = work.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${inline(t)}\n\n`);
  work = work.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${inline(t)}\n\n`);

  // Blockquotes.
  work = work.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t) => {
    return `\n\n> ${inline(t)}\n\n`;
  });

  // Preformatted code.
  work = work.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, t) => {
    const code = decodeEntities(stripTags(t));
    return `\n\n\`\`\`\n${code}\n\`\`\`\n\n`;
  });

  // Paragraphs.
  work = work.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${inline(t)}\n\n`);

  // Strip any remaining tags.
  work = work.replace(/<\/?(div|section|article|main|aside|header|footer)[^>]*>/gi, "");

  // Collapse runs of blank lines.
  return work.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
