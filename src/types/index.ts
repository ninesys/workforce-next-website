export interface NavGroup {
  title: string;
  description?: string;
  items: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  groups?: NavGroup[];
}

export interface SiteMetadata {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  techOffice: string;
}

export interface Specialism {
  name: string;
  slug: string;
  description: string;
  isNew?: boolean;
}

export type FAQCategory = "ai" | "automation" | "hiring";

export interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
  categoryLabel: string;
}

export interface HirePageData {
  slug: string;
  badge: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  painPoints: { icon: string; title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  skills: string[];
  processSteps: { step: number; title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
}
