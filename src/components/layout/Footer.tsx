import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { siteMetadata } from "@/data/siteMetadata";

export default function Footer() {
  return (
    <footer className="bg-dark-900 dark:bg-dark-900 text-dark-200 border-t border-dark-800 dark:border-dark-700/50">
      <div className="container-custom py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="Workforce Next"
                width={160}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm text-dark-300 leading-relaxed max-w-xs">
              Building dedicated AI-era remote engineering teams, matched for longevity and retained by design.
            </p>
            <a
              href="https://www.linkedin.com/company/workforce-next"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-dark-300 hover:text-primary-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Hire Developers */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Hire Developers
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-dark-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-dark-400 space-y-1">
              <p>&copy; {new Date().getFullYear()} {siteMetadata.legalName} All rights reserved.</p>
              <p className="text-xs">{siteMetadata.address}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-400">
              <a href={`mailto:${siteMetadata.email}`} className="hover:text-primary-400 transition-colors">
                {siteMetadata.email}
              </a>
              <a href={`tel:${siteMetadata.phone}`} className="hover:text-primary-400 transition-colors">
                {siteMetadata.phone}
              </a>
              <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-use" className="hover:text-primary-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
