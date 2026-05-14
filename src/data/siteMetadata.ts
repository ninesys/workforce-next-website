import { SiteMetadata } from "@/types";

export const siteMetadata: SiteMetadata = {
  name: "Workforce Next",
  legalName: "Workforce Next Pvt. Ltd.",
  tagline: "Your remote team. Built to stay.",
  description:
    "Workforce Next is an IT consulting and IT engineering company that gives growing businesses pre-vetted developers and teams matched by SethAI, our AI recruiter, to plug into their engineering, consulting, and management functions.",
  url: "https://workforcenext.in",
  email: "hello@workforcenext.in",
  phone: "+91-8929251081",
  whatsapp: "+918929251081",
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
