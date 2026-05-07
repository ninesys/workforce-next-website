import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    label: "Hire",
    href: "/hire",
    groups: [
      {
        title: "By skill",
        description: "Match by stack and role.",
        items: [
          { label: "Full Stack Developers", href: "/hire/fullstack-developers" },
          { label: "AI & Agentic Developers", href: "/hire/ai-developers" },
          { label: "MCP Developers", href: "/hire/mcp-developers" },
          { label: "Data Engineers", href: "/hire/data-engineers" },
          { label: "Frontend Engineers", href: "/hire/frontend-engineers" },
          { label: "Backend Engineers", href: "/hire/backend-engineers" },
          { label: "FastAPI Developers", href: "/hire/fastapi-developers" },
          { label: "iOS Application Developers", href: "/hire/ios-developers" },
          { label: "Android Developers", href: "/hire/android-developers" },
          { label: "DevOps & SRE Engineers", href: "/hire/devops-engineers" },
          { label: "Cloud Cost Engineer", href: "/hire/cloud-cost-engineer" },
          { label: "Product Engineers", href: "/hire/product-engineers" },
          { label: "Vibe-Code Engineer", href: "/hire/vibe-code-engineer" },
          { label: "QA Engineers & Testers", href: "/hire/qa-testers" },
          { label: "Fractional Project Manager", href: "/hire/fractional-project-manager" },
        ],
      },
      {
        title: "By company stage",
        description: "Tailored offers by funding stage and team size.",
        items: [
          { label: "For Founders (MVP Sprint)", href: "/for/founders" },
          { label: "For Funded Startups", href: "/for/startups" },
          { label: "For Enterprise", href: "/for/enterprise" },
        ],
      },
      {
        title: "By region",
        description: "Engagements shaped for your timezone.",
        items: [
          { label: "For European Companies", href: "/for/europe" },
          { label: "For USA & Canada", href: "/for/usa-canada" },
          { label: "For Australia", href: "/for/australia" },
          { label: "For Dubai & UAE", href: "/for/dubai" },
        ],
      },
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
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const footerLinks = {
  services: [
    { label: "Full Stack Developers", href: "/hire/fullstack-developers" },
    { label: "AI & Agentic Developers", href: "/hire/ai-developers" },
    { label: "MCP Developers", href: "/hire/mcp-developers" },
    { label: "Data Engineers", href: "/hire/data-engineers" },
    { label: "Frontend Engineers", href: "/hire/frontend-engineers" },
    { label: "Backend Engineers", href: "/hire/backend-engineers" },
    { label: "FastAPI Developers", href: "/hire/fastapi-developers" },
    { label: "iOS Application Developers", href: "/hire/ios-developers" },
    { label: "Android Developers", href: "/hire/android-developers" },
    { label: "DevOps & SRE Engineers", href: "/hire/devops-engineers" },
    { label: "Cloud Cost Engineer", href: "/hire/cloud-cost-engineer" },
    { label: "Product Engineers", href: "/hire/product-engineers" },
    { label: "Vibe-Code Engineer", href: "/hire/vibe-code-engineer" },
    { label: "QA Engineers & Testers", href: "/hire/qa-testers" },
    { label: "Fractional Project Manager", href: "/hire/fractional-project-manager" },
  ],
  byRegion: [
    { label: "For European Companies", href: "/for/europe" },
    { label: "For USA & Canada", href: "/for/usa-canada" },
    { label: "For Australia", href: "/for/australia" },
    { label: "For Dubai & UAE", href: "/for/dubai" },
    { label: "For Founders", href: "/for/founders" },
    { label: "For Funded Startups", href: "/for/startups" },
    { label: "For Enterprise", href: "/for/enterprise" },
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
