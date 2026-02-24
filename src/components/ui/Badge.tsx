import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "success" | "white";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary-100 text-primary-700",
  accent: "bg-accent-100 text-accent-700",
  success: "bg-success-50 text-success-600",
  white: "bg-white/20 text-white",
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
