import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Automation", href: "/services/automation" },
      { label: "IoT - CloudIQ", href: "/services/iot" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "Workflow Automation", href: "/services/automation" },
    { label: "IoT - CloudIQ", href: "/services/iot" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Contact", href: "/contact" },
  ],
};
