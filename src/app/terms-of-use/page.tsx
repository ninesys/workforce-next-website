import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Workforce Next",
  description:
    "Terms of Use for Workforce Next website and services. Read our terms governing the use of workforcenext.in.",
  alternates: {
    canonical: "https://workforcenext.in/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Terms of Use
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Last updated: February 24, 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-0">
              Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using the Workforce Next website
              (workforcenext.in), you agree to be bound by these Terms of Use.
              If you do not agree with any part of these terms, please do not
              use our website.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Use of Website
            </h2>
            <p className="text-slate-600 leading-relaxed">
              This website is provided for informational purposes about
              Workforce Next&apos;s services, including AI agents, workflow
              automation, and IoT cloud platform solutions. You agree to use
              this website only for lawful purposes and in a manner that does
              not infringe upon the rights of others.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Workforce Next and is
              protected by applicable intellectual property laws. You may not
              reproduce, distribute, modify, or create derivative works from any
              content on this website without our prior written consent.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Services Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The information provided on this website about our services is for
              general informational purposes only. While we strive to keep the
              information accurate and up to date, we make no guarantees about
              the completeness, reliability, or accuracy of the content.
              Specific service terms, deliverables, and pricing are determined
              through individual client agreements.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Contact Form Submissions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              When you submit information through our contact form, you agree
              that the information provided is accurate and that you consent to
              us contacting you regarding your inquiry. We will handle your data
              in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="text-accent-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Workforce Next shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use of this website. This includes, but is not limited to, damages
              for loss of profits, data, or other intangible losses.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Third-Party Links
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. We have no control over
              the content of these websites and accept no responsibility for
              them or any loss or damage that may arise from your use of them.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Modifications to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms of Use at any time.
              Changes will be effective immediately upon posting on this page.
              Your continued use of the website after any changes constitutes
              acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Governing Law
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Use are governed by and construed in accordance
              with the laws of India. Any disputes arising from these terms
              shall be subject to the exclusive jurisdiction of the courts in
              Noida, Uttar Pradesh, India.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms of Use, please contact
              us at{" "}
              <a
                href="mailto:hello@workforcenext.in"
                className="text-accent-600 hover:underline"
              >
                hello@workforcenext.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
