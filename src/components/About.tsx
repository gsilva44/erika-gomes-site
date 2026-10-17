import Image from "next/image";
import { siteConfig } from "@/config/site";
import { resolveImage } from "@/lib/images";
import { Branch } from "./Botanical";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function About() {
  const { about, images } = siteConfig;
  const photo = resolveImage(images.aboutPortrait, images.heroPortrait);

  return (
    <section id="sobre" className="relative px-4 py-4 sm:px-8">
      <div className="reveal relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-cream-50 p-5 shadow-card sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14 lg:p-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand-200 md:aspect-[5/4]">
          {photo ? (
            <Image
              src={photo}
              alt={`${siteConfig.name} sorrindo, em retrato profissional`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[40%_20%]"
            />
          ) : (
            <PhotoPlaceholder kind="portrait" file={images.aboutPortrait} className="absolute inset-0 rounded-3xl" />
          )}
        </div>

        <div className="relative z-10 md:pr-16">
          <p className="text-xs uppercase tracking-[0.28em] text-ink">{about.eyebrow}</p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-brown-800 sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-ink">{about.text}</p>
        </div>

        <Branch className="absolute -right-4 top-1/2 hidden h-64 w-24 -translate-y-1/2 rotate-[18deg] text-sand-300/80 md:block" />
      </div>
    </section>
  );
}
