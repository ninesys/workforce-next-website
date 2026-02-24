"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavItems } from "@/data/navigation";
import Button from "@/components/ui/Button";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={`font-heading font-bold text-xl md:text-2xl transition-colors ${scrolled ? "text-primary-500" : "text-white"}`}>
                <span>Workforce</span>
                <span className="text-accent-500"> Next</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {mainNavItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                        scrolled
                          ? "text-slate-700 hover:text-primary-500"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-slate-700 hover:text-primary-500"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button
                href="/contact"
                variant={scrolled ? "primary" : "white"}
                size="sm"
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 ${scrolled ? "text-slate-900" : "text-white"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
