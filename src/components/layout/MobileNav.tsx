"use client";

import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Image
            src="/images/logo.png"
            alt="Workforce Next"
            width={130}
            height={32}
            className="h-7 w-auto"
          />
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {mainNavItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="block px-3 py-2.5 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <Button href="/contact" variant="primary" size="md" className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
