import { siteConfig } from "@/config/site";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const { services } = siteConfig;
  return (
    <section id="atuacao" className="bg-sand-100 px-6 pb-28 pt-16 sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-ink">{services.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brown-800 sm:text-4xl">{services.title}</h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => (
            <li key={item.title}>
              <ServiceCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
