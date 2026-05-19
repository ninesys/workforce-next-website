import { SiteMetadata } from "@/types";

export const siteMetadata: SiteMetadata = {
  name: "Workforce Next",
  legalName: "Workforce Next Pvt. Ltd.",
  tagline: "Your remote team. Built to stay.",
  description:
    "Workforce Next is an IT consulting and IT services company that offers remote developers and QA engineers from India for startups to enterprises. Hire dedicated, fractional, or full-time engineers with flexible hours and flexible timezone coverage. Matched by SethAI, our AI recruiter.",
  url: "https://workforcenext.in",
  email: "hello@workforcenext.in",
  phone: "+91-9582595166",
  address: "DLF Cyber City, Gurugram, Haryana, India",
  techOffice: "NPX Urbtech, Sector 153, Noida, U.P., India",
};

/**
 * Base OpenGraph fields every page should include. siteName/url/type/locale do
 * NOT inherit from the root layout when a child page defines its own
 * openGraph object. Next.js replaces the whole object instead of field-merging.
 * Spread this into every page's openGraph block:
 *   openGraph: { ...ogDefaults("/hire/foo/"), title, description, images }
 */
export function ogDefaults(path: string) {
  return {
    siteName: siteMetadata.name,
    url: `${siteMetadata.url}${path}`,
    type: "website" as const,
    locale: "en_US",
  };
}
