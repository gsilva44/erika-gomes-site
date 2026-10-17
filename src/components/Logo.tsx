import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" aria-label={`${siteConfig.name}, ${siteConfig.role} — ir ao início`} className={`inline-block leading-none ${className}`}>
      <span className="block font-display text-[1.45rem] font-semibold uppercase tracking-tight text-brown-800">
        {siteConfig.name}
      </span>
      <span className="-mt-0.5 block font-script text-xl text-brown-700">{siteConfig.role}</span>
    </a>
  );
}
