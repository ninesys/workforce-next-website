export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  badge: string;
  headline: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  gradientClass: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface UseCase {
  industry: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  features: ServiceFeature[];
  processSteps: ProcessStep[];
  useCases: UseCase[];
  techStack: string[];
  painPointStat: string;
  painPointDescription: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface CaseStudy {
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: "ai" | "automation" | "iot" | "insights";
  categoryLabel: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number;
  metaDescription: string;
  keywords: string[];
}

export type FAQCategory = "ai" | "automation" | "iot";

export interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
  categoryLabel: string;
}

export interface SiteMetadata {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}
