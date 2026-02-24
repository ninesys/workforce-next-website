import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-slate-200 p-6 md:p-8",
        hover && "hover:shadow-lg hover:border-slate-300 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
