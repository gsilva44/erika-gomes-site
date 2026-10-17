import { Heart, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { instagramUrl, whatsappLink } from "@/lib/links";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const itemClass =
  "flex items-center gap-3 text-sm text-ink transition-colors hover:text-brown-800";

export function Footer() {
  const { contact, nav, footer } = siteConfig;
  return (
    <footer className="bg-cream-50 px-6 pb-8 pt-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-0">
          <Logo className="lg:pr-10" />

          <ul className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-[auto_auto_1fr] lg:gap-0">
            <li className="lg:border-l lg:border-sand-300 lg:px-10">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={itemClass}>
                <WhatsAppIcon className="h-6 w-6 text-brown-700" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="lg:border-l lg:border-sand-300 lg:px-10">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={itemClass}>
                <InstagramIcon className="h-6 w-6 text-brown-700" />
                @{contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink sm:col-span-2 lg:col-span-1 lg:border-l lg:border-sand-300 lg:pl-10">
              <MapPin className="h-6 w-6 shrink-0 text-brown-700" strokeWidth={1.5} aria-hidden="true" />
              <span>
                <span className="block text-xs">Atendimento na região:</span>
                {contact.region}
              </span>
            </li>
          </ul>
        </div>

        <nav aria-label="Rodapé" className="mt-10 border-t border-sand-300/70 pt-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink transition-colors hover:text-brown-800">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <Heart className="h-4 w-4 text-terracotta-500" aria-hidden="true" />
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink/80">
            {footer.specialties.join("  ·  ")}
          </p>
          <p className="text-xs text-ink/70">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
