"use client";

import { useState } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const VISIBLE_COUNT = 8;

export default function FooterSkillsList({ links }: { links: FooterLink[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? links : links.slice(0, VISIBLE_COUNT);
  const remaining = links.length - VISIBLE_COUNT;

  return (
    <ul className="space-y-3">
      {visible.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-dark-300 hover:text-primary-400 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
      {remaining > 0 && (
        <li>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1"
          >
            {expanded ? "Show less" : `Show ${remaining} more`}
            <svg
              className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </li>
      )}
    </ul>
  );
}
