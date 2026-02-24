import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Workforce Next - AI & IoT Consulting",
  description:
    "Get in touch with Workforce Next for AI automation, agentic AI, workflow automation, or IoT cloud platform consulting. We respond within an hour.",
  openGraph: {
    title: "Contact Workforce Next - AI & IoT Consulting",
    description:
      "Get in touch with Workforce Next for AI automation, agentic AI, workflow automation, or IoT cloud platform consulting.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Let&apos;s Build Something Intelligent Together
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Whether you need AI agents, workflow automation, or an IoT platform,
            our team is ready to help. Tell us about your challenge and we&apos;ll
            show you a path forward.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
