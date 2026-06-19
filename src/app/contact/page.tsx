import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { generateContactPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Contact | AI Automation Agency for Founders | Workforce Next",
  description:
    "Book a discovery call. Scoped proposal in 48 hours across consulting, AI agents and workflow automation, dedicated developers and QA, and AEO/GEO growth.",
  keywords: [
    "contact workforce next",
    "book discovery call AI agency",
    "AI automation agency contact",
    "hire AI agency founders",
    "scope AI automation sprint",
  ],
  openGraph: {
    ...ogDefaults("/contact/"),
    images: ["/images/og-default.png"],
    title: "Contact | AI Automation Agency for Founders",
    description:
      "Book a discovery call. Scoped proposal in 48 hours across all four services.",
  },
  alternates: {
    canonical: "https://wfnext.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateContactPageSchema()),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 dark:text-dark-50 leading-[1.05]">
            Tell us what
            <br />
            <span className="text-primary-500">you are shipping.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-dark-500 dark:text-dark-300 max-w-2xl">
            One discovery call. Scoped proposal in 48 hours. Across consulting, automation, talent, or growth.
          </p>

          {/* Forte ribbon */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-2xl bg-dark-900 border border-primary-500/30">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">Our forte</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary-400" />
            <span className="text-base sm:text-lg font-extrabold text-white">
              Ownership <span className="text-primary-400">·</span> Automation <span className="text-primary-400">·</span> Engineering
            </span>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
                Contact information
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
