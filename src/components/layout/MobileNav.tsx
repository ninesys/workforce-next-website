"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white dark:bg-dark-800 shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-dark-50 dark:border-dark-700">
          <Image
            src="/images/logo.webp"
            alt="Workforce Next"
            width={130}
            height={32}
            className="h-7 w-auto dark:brightness-0 dark:invert"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-dark-400 dark:text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {mainNavItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setExpandedMenu(expandedMenu === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-dark-700 dark:text-dark-200 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 text-dark-300 dark:text-dark-400 transition-transform duration-200 ${expandedMenu === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedMenu === item.label && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary-200 dark:border-primary-500/30 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2.5 text-sm text-dark-400 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 rounded-lg transition-colors"
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
                onClick={onClose}
                className="block px-4 py-3 text-dark-700 dark:text-dark-200 font-medium hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="p-5 border-t border-dark-50 dark:border-dark-700">
          <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
            Build my team
          </Button>
        </div>
      </div>
    </div>
  );
}
