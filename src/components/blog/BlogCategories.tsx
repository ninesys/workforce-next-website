"use client";

import { cn } from "@/lib/utils";

interface BlogCategoriesProps {
  active: string;
  onChange: (category: string) => void;
}

const categories = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI & Agents" },
  { value: "automation", label: "Automation" },
  { value: "iot", label: "IoT" },
  { value: "insights", label: "Industry Insights" },
];

export default function BlogCategories({ active, onChange }: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all",
            active === cat.value
              ? "bg-primary-500 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
