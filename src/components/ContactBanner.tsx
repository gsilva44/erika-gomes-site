import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/links";
import { Branch } from "./Botanical";
import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";

export function ContactBanner() {
  const { cta } = siteConfig;
  return (
    <section id="contato" className="relative overflow-hidden bg-brown-700 text-cream-50">
      <Branch className="absolute -right-6 top-1/2 hidden h-56 w-20 -translate-y-1/2 rotate-[24deg] text-terracotta-300/40 md:block" />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex items-center gap-5">
          <WhatsAppIcon className="hidden h-12 w-12 shrink-0 text-cream-50/90 sm:block" />
          <div>
            <h2 className="font-display text-2xl font-medium leading-snug sm:text-[1.7rem]">{cta.title}</h2>
            <p className="mt-1 text-sm text-cream-50/85">{cta.text}</p>
          </div>
        </div>
        <Button
          href={whatsappLink()}
          variant="light"
          icon={<WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />}
          arrow
          className="relative z-10"
        >
          {cta.button}
        </Button>
      </div>
    </section>
  );
}
