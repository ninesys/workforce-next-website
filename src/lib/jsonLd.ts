import { siteMetadata } from "@/data/siteMetadata";
import { BlogPost, Service, FAQ } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
    logo: `${siteMetadata.url}/images/logo.png`,
    description: siteMetadata.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      contactType: "sales",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "B307, Logix Technova",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
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
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.url}/images/logo.png`,
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

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.heroDescription,
    provider: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url,
    },
    serviceType: service.name,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: `${siteMetadata.url}/services/${service.slug}`,
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
