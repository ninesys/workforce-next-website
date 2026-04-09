import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    label: "Hire Developers",
    href: "/hire",
    children: [
      { label: "AI & Agentic Developers", href: "/hire/ai-developers" },
      { label: "Data Engineers", href: "/hire/data-engineers" },
      { label: "Frontend Engineers", href: "/hire/frontend-engineers" },
      { label: "Backend Engineers", href: "/hire/backend-engineers" },
      { label: "Product Engineers", href: "/hire/product-engineers" },
      { label: "Vibe-Code Engineer", href: "/hire/vibe-code-engineer" },
      { label: "Cloud Cost Engineer", href: "/hire/cloud-cost-engineer" },
      { label: "QA Engineers & Testers", href: "/hire/qa-testers" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "SethAI Recruiter", href: "/products/seth-ai-recruiter" },
      {
        label: "Productivity Intelligence",
        href: "/products/employee-productivity-intelligence",
      },
    ],
  },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const footerLinks = {
  services: [
    { label: "AI & Agentic Developers", href: "/hire/ai-developers" },
    { label: "Data Engineers", href: "/hire/data-engineers" },
    { label: "Frontend Engineers", href: "/hire/frontend-engineers" },
    { label: "Backend Engineers", href: "/hire/backend-engineers" },
    { label: "Product Engineers", href: "/hire/product-engineers" },
    { label: "Vibe-Code Engineer", href: "/hire/vibe-code-engineer" },
    { label: "Cloud Cost Engineer", href: "/hire/cloud-cost-engineer" },
    { label: "QA Engineers & Testers", href: "/hire/qa-testers" },
  ],
  products: [
    { label: "SethAI Recruiter", href: "/products/seth-ai-recruiter" },
    {
      label: "Productivity Intelligence",
      href: "/products/employee-productivity-intelligence",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Why Teams Stay", href: "/why-teams-stay" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
