import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { generateContactPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Contact | AI Automation Agency for Founders",
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

      {/* What happens next */}
      <section className="py-10 sm:py-12 bg-white dark:bg-dark-900 border-b border-dark-50 dark:border-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "We read what you sent",
                description: "A real person reviews your message the same day and routes it to whoever fits your situation, not a queue.",
              },
              {
                step: "02",
                title: "We ask what we actually need to know",
                description: "A short call or a few questions by email, whichever gets us to a real answer faster.",
              },
              {
                step: "03",
                title: "You get a scoped proposal",
                description: "Clear next steps within 48 hours: what we would do, who would do it, and how we would start.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="text-2xl font-extrabold text-primary-200 dark:text-primary-500/30 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50 text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
