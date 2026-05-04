"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-soft py-2"
            : "bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm py-3 md:py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Workforce Next — AI-era remote engineering teams"
                width={160}
                height={40}
                className="h-8 sm:h-9 md:h-10 w-auto dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => {
                const hasGroups = !!item.groups && item.groups.length > 0;
                const hasFlatChildren = !!item.children && item.children.length > 0;
                if (hasGroups || hasFlatChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className="px-4 py-2.5 text-[15px] font-medium text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1.5 rounded-lg">
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && hasGroups && (() => {
                        const groups = item.groups!;
                        const currentGroupTitle =
                          activeGroup && groups.find((g) => g.title === activeGroup)
                            ? activeGroup
                            : groups[0].title;
                        const currentGroup = groups.find((g) => g.title === currentGroupTitle)!;
                        const itemCount = currentGroup.items.length;
                        return (
                          <div className="absolute top-full left-0 pt-3">
                            <div className="w-[820px] max-w-[calc(100vw-2rem)]">
                              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft border border-dark-50 dark:border-dark-700 animate-fade-in grid grid-cols-12 overflow-hidden">
                                {/* Left tab rail */}
                                <div className="col-span-5 bg-primary-50/40 dark:bg-dark-900/60 border-r border-dark-50 dark:border-dark-700 p-4">
                                  <ul className="space-y-1">
                                    {groups.map((group) => {
                                      const isActive = group.title === currentGroupTitle;
                                      return (
                                        <li key={group.title}>
                                          <button
                                            type="button"
                                            onMouseEnter={() => setActiveGroup(group.title)}
                                            onFocus={() => setActiveGroup(group.title)}
                                            onClick={() => setActiveGroup(group.title)}
                                            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                              isActive
                                                ? "bg-white dark:bg-dark-800 text-primary-600 dark:text-primary-400 shadow-sm"
                                                : "text-dark-600 dark:text-dark-300 hover:bg-white/60 dark:hover:bg-dark-800/60 hover:text-primary-500 dark:hover:text-primary-400"
                                            }`}
                                          >
                                            <span className="block">{group.title}</span>
                                            {group.description && (
                                              <span className="block mt-0.5 text-[11px] font-normal text-dark-400 dark:text-dark-400 leading-snug">
                                                {group.description}
                                              </span>
                                            )}
                                          </button>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* Right content */}
                                <div className="col-span-7 p-5">
                                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                                    {currentGroup.title}
                                  </p>
                                  <ul
                                    className={`grid gap-x-3 gap-y-1 ${
                                      itemCount > 6
                                        ? "grid-cols-2"
                                        : "grid-cols-1"
                                    }`}
                                  >
                                    {currentGroup.items.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          className="block px-2.5 py-2 rounded-md text-sm text-dark-600 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors whitespace-nowrap"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                      {openDropdown === item.label && !hasGroups && hasFlatChildren && (
                        <div className="absolute top-full left-0 pt-3 w-72">
                          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-soft border border-dark-50 dark:border-dark-700 py-3 animate-fade-in">
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-5 py-3 text-[15px] text-dark-500 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2.5 text-[15px] font-medium text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors rounded-lg"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ThemeToggle className="text-dark-500 dark:text-dark-300" />
              <div className="ml-2">
                <Button href="/contact" variant="primary" size="sm">
                  Build my team
                </Button>
              </div>
            </nav>

            {/* Mobile right side */}
            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle className="text-dark-500 dark:text-dark-300" />
              <button
                className="p-2 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6 text-dark-700 dark:text-dark-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
