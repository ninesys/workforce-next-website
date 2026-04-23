import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { generateContactPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Contact Workforce Next - Build Your Remote Team",
  description:
    "Get in touch with Workforce Next to build your dedicated remote engineering team. AI developers, data engineers, frontend and backend specialists. We respond within an hour.",
  keywords: [
    "contact workforce next",
    "hire AI developers",
    "hire remote developers India",
    "dedicated development team",
    "staff augmentation India",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "Contact Workforce Next - Build Your Remote Team",
    description:
      "Get in touch with Workforce Next to build your dedicated remote engineering team.",
  },
  alternates: {
    canonical: "https://workforcenext.in/contact/",
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
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50">
            Let&apos;s talk about your team
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Whether you need one specialist or an entire engineering pod, tell us
            what you&apos;re building and we&apos;ll figure out the right fit together.
          </p>
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
