import { SiteMetadata } from "@/types";

export const siteMetadata: SiteMetadata = {
  name: "Workforce Next",
  legalName: "Workforce Next Pvt. Ltd.",
  tagline: "Your remote team. Built to stay.",
  description:
    "AI automation agency for founders. Four services from one partner: product development consulting, AI agents and workflows, dedicated developers and QA, and AEO/GEO organic growth.",
  url: "https://wfnext.com",
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
