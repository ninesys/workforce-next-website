import { siteMetadata } from "@/data/siteMetadata";
import { BlogPost, FAQ } from "@/types";

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

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteMetadata.url}/about/gaurav/`,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: siteMetadata.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.url}/images/logo.webp`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.url}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
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
    url: `${siteMetadata.url}/contact`,
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
  roles: { title: string; value: string }[]
) {
  return roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `Join Workforce Next as a ${role.title}. Work on cutting-edge AI and engineering projects for global clients. Remote-first culture with ownership-driven engineering.`,
    datePosted: "2026-04-01",
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
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    jobLocationType: "TELECOMMUTE",
    employmentType: "FULL_TIME",
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
