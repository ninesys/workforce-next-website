import { siteMetadata } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    legalName: siteMetadata.legalName,
    url: siteMetadata.url,
    logo: `${siteMetadata.url}/images/logo.webp`,
    description: siteMetadata.description,
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phone,
      contactType: "sales",
      email: siteMetadata.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/workforce-next",
      "https://www.clutch.co/profile/workforce-next",
    ],
    knowsAbout: [
      "AI Developer Staffing",
      "Remote Engineering Teams",
      "Staff Augmentation India",
      "Agentic AI Development",
      "LangChain and RAG Pipelines",
      "Vibe Coding and AI-Assisted Development",
      "Cloud Cost Optimisation",
      "Product Engineering",
      "Context-First Developer Matching",
      "Offshore Development Team Management",
    ],
  };
}

export function generateHomepageHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to hire dedicated remote developers from India with Workforce Next",
    description:
      "A step-by-step process to build your dedicated remote engineering team, matched for longevity by SethAI.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Share your role and team context",
        text: "Tell us the role, stack, product stage, and industry. The more context, the better SethAI's match.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "SethAI screens for skills and longevity",
        text: "SethAI evaluates technical depth, ownership mindset, and career alignment. You receive a 1-page match report per candidate.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "You interview the shortlist",
        text: "2 to 3 candidates. Direct interviews. You choose the best fit for your team.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Start with a one-week paid trial",
        text: "Real work on your actual codebase. If it is not right, we rematch at no cost.",
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.name,
    url: siteMetadata.url,
    description: siteMetadata.description,
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
    },
    serviceType: "Staff Augmentation",
    areaServed: "Worldwide",
    url,
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SethAI Recruiter",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Seth is an AI recruiter that screens software developers for technical skills and longevity signals -ownership mindset, career alignment, and communication reliability -and delivers a 1-page match report to hiring managers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available for waitlist members",
    },
    creator: {
      "@type": "Organization",
      name: siteMetadata.name,
    },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Workforce Next",
    description:
      "Get in touch with Workforce Next to build your dedicated remote engineering team.",
    url: `${siteMetadata.url}/contact/`,
    mainEntity: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteMetadata.phone,
        email: siteMetadata.email,
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };
}

export function generateJobPostingSchema(
  roles: {
    title: string;
    value: string;
    minSalary: number;
    maxSalary: number;
  }[]
) {
  const datePosted = "2026-04-01";
  const validThrough = "2027-04-01";
  return roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `Join Workforce Next as a ${role.title}. Work on cutting-edge AI and engineering projects for global clients. Remote-first culture with ownership-driven engineering.`,
    datePosted,
    validThrough,
    hiringOrganization: {
      "@type": "Organization",
      name: siteMetadata.name,
      sameAs: siteMetadata.url,
      logo: `${siteMetadata.url}/images/logo.webp`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    employmentType: "FULL_TIME",
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: role.minSalary,
        maxValue: role.maxSalary,
        unitText: "YEAR",
      },
    },
  }));
}

export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
    },
  };
}

export function generateFAQPageSchema(faqItems: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
