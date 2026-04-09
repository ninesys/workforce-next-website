import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg",
  secondary:
    "bg-dark-900 dark:bg-dark-700 text-white hover:bg-dark-700 dark:hover:bg-dark-600 shadow-md hover:shadow-lg",
  outline:
    "bg-white dark:bg-transparent border-2 border-dark-200 dark:border-dark-600 text-dark-900 dark:text-dark-200 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400",
  white:
    "bg-white text-primary-500 hover:bg-primary-50 shadow-md hover:shadow-lg",
  ghost:
    "bg-transparent text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10",
};

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-3.5 text-base",
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
    "group inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] tracking-wide transition-all duration-300 ease-in-out",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  const arrow = (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
      {arrow}
    </button>
  );
}
