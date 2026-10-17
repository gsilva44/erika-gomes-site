import Image from "next/image";
import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/links";
import { resolveImage } from "@/lib/images";
import { Branch } from "./Botanical";
import { Button } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { WhatsAppIcon } from "./icons";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  const { hero, images } = siteConfig;
  const photo = resolveImage(images.heroPortrait);

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream-100">
      <Branch className="absolute -left-8 top-4 hidden h-72 w-28 -rotate-[14deg] text-sand-300/80 sm:block" />

      <div className="mx-auto grid max-w-7xl items-center lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="relative z-10 px-6 pb-4 pt-12 sm:px-12 lg:py-20 lg:pl-20 lg:pr-0">
          <p className="enter text-sm uppercase tracking-[0.3em] text-ink" style={step(0)}>
            {hero.eyebrow}
          </p>
          <h1 className="enter mt-4 font-display text-[clamp(4rem,9vw,7rem)] font-bold uppercase leading-[0.88] tracking-tight text-brown-800" style={step(1)}>
            <span className="block">{hero.firstName}</span>
            <span className="block">{hero.lastName}</span>
          </h1>
          <p className="enter mt-3 font-script text-4xl text-brown-700 sm:text-5xl" style={step(2)}>
            {hero.tagline}
          </p>
          <p className="enter mt-6 max-w-md text-base leading-relaxed text-ink" style={step(3)}>
            {hero.description}
          </p>
          <div className="enter mt-8 flex flex-wrap gap-3" style={step(4)}>
            <Button href={whatsappLink()} icon={<WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />}>
              {hero.primaryCta}
            </Button>
            <Button href={hero.secondaryHref} variant="outline" arrow>
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="enter relative h-[440px] sm:h-[560px] lg:h-full lg:min-h-[640px]" style={step(2)}>
          {photo ? (
            <Image
              src={photo}
              alt={`Retrato de ${siteConfig.name}, ${siteConfig.roleFull}`}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="photo-fade object-cover object-[42%_15%]"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-8 lg:pl-24">
              <PhotoPlaceholder kind="portrait" file={images.heroPortrait} className="h-full max-h-[480px] w-full max-w-md rounded-[2rem]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
