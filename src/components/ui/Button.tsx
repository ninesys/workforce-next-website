import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25",
  ghost:
    "border-2 border-white text-white hover:bg-white/10",
  white:
    "bg-white text-primary-500 hover:bg-slate-50 shadow-lg",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
