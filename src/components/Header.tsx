"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/links";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const elements = siteConfig.nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-300/40 bg-cream-100/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {siteConfig.nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`border-b pb-1 text-sm transition-colors ${
                      isActive
                        ? "border-brown-700 text-brown-800"
                        : "border-transparent text-ink hover:border-terracotta-300 hover:text-brown-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          href={whatsappLink()}
          icon={<WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />}
          className="hidden md:inline-flex !py-2.5"
        >
          Falar no WhatsApp
        </Button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brown-800 transition hover:bg-sand-200 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-sand-300/40 bg-cream-100 px-6 pb-6 pt-2 md:hidden"
      >
        <nav aria-label="Principal (celular)">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-sand-300/40 py-4 font-display text-lg text-brown-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          href={whatsappLink()}
          icon={<WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />}
          className="mt-5 w-full"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
