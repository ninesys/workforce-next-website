import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-3xl",
            centered && "mx-auto",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
