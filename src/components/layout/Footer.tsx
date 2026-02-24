import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { siteMetadata } from "@/data/siteMetadata";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Workforce Next"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Enterprise AI automation services, agentic AI solutions, workflow
              automation, and IoT cloud platform. Transforming operations with
              measurable ROI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteMetadata.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.phone}
                </a>
              </li>
              <li>{siteMetadata.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Workforce Next. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
