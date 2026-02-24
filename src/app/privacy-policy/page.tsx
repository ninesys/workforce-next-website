import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Workforce Next",
  description:
    "Privacy Policy for Workforce Next. Learn how we handle your data. We do not use cookies or share data with third parties.",
  alternates: {
    canonical: "https://workforcenext.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Privacy Policy
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
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Workforce Next (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              operates the website{" "}
              <strong>workforcenext.in</strong>. This Privacy
              Policy explains how we collect, use, and protect your information
              when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We only collect information that you voluntarily provide to us
              through our contact form. This may include:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Your full name</li>
              <li>Work email address</li>
              <li>WhatsApp number (optional)</li>
              <li>Company name (optional)</li>
              <li>Service interest</li>
              <li>Your message</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The information you provide through our contact form is used solely
              to:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Respond to your inquiry</li>
              <li>Provide information about our services</li>
              <li>Communicate with you about potential projects</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              No Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website does not use cookies or any similar tracking
              technologies. We do not track your browsing behavior, and no data
              is stored on your device when you visit our website.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              No Third-Party Data Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, trade, or share your personal information with any
              third-party services, advertisers, or external organizations. Your
              data stays with us and is used exclusively for the purposes stated
              above.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Data Storage & Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Form submissions are securely processed through our hosting
              provider (Netlify). We take reasonable measures to protect your
              information from unauthorized access, alteration, or destruction.
              However, no method of electronic transmission or storage is 100%
              secure.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="text-slate-600 space-y-2">
              <li>Request access to any personal data we hold about you</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for us to contact you</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:hello@workforcenext.in"
                className="text-accent-600 hover:underline"
              >
                hello@workforcenext.in
              </a>
              .
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Changes to This Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this page periodically.
            </p>

            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
