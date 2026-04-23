export interface TocEntry {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function generateTocAndInjectIds(body: string): {
  body: string;
  toc: TocEntry[];
} {
  const toc: TocEntry[] = [];
  const usedIds = new Set<string>();

  const newBody = body.replace(
    /<h2(?![^>]*\bid=)([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_match, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      let id = slugify(text) || `section-${toc.length + 1}`;
      let suffix = 2;
      while (usedIds.has(id)) {
        id = `${slugify(text)}-${suffix++}`;
      }
      usedIds.add(id);
      toc.push({ id, text });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    }
  );

  return { body: newBody, toc };
}
