
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF4EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@100..900&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

