export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: "hiring" | "engineering" | "leadership" | "product";
  categoryLabel: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number;
  metaDescription: string;
  keywords: string[];
  faq: BlogFAQ[];
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  tldr?: string;
  updatedAt?: string;
}
