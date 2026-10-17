import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Book } from "@/components/Book";
import { ContactBanner } from "@/components/ContactBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brown-700 focus:px-5 focus:py-2 focus:text-sm focus:text-cream-50"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Book />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
