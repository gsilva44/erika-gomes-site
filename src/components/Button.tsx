import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  icon?: ReactNode;
  arrow?: boolean;
  className?: string;
};

const variants = {
  solid: "bg-brown-700 text-cream-50 shadow-soft hover:bg-brown-800",
  outline: "border border-brown-700/60 bg-cream-50/60 text-brown-800 hover:bg-cream-50 hover:border-brown-700",
  light: "bg-cream-50 text-brown-800 shadow-soft hover:bg-white",
};

export function Button({ href, children, variant = "solid", icon, arrow, className = "" }: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </a>
  );
}
