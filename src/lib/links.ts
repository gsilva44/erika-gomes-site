import { siteConfig } from "@/config/site";

export function whatsappLink(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const instagramUrl = `https://www.instagram.com/${siteConfig.contact.instagramHandle}/`;

export const bookHref =
  siteConfig.book.url || whatsappLink(siteConfig.contact.whatsappBookMessage);
