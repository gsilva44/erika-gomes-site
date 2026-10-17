import Image from "next/image";
import { siteConfig } from "@/config/site";
import { bookHref } from "@/lib/links";
import { resolveImage } from "@/lib/images";
import { Branch } from "./Botanical";
import { Button } from "./Button";

/** Espaço reservado neutro: não imita nem inventa uma capa. */
function CoverPlaceholder({ file }: { file: string }) {
  return (
    <div
      role="img"
      aria-label="Capa oficial do livro (imagem a ser adicionada)"
      className="relative flex aspect-[3/4] w-56 items-center justify-center rounded-r-md rounded-l-sm bg-sand-300 shadow-card sm:w-64"
    >
      <span className="absolute inset-y-0 left-0 w-3 rounded-l-sm bg-brown-700/30" aria-hidden="true" />
      <div className="px-6 text-center">
        <p className="font-display text-lg text-brown-800">Capa oficial do livro</p>
        <p className="mt-2 text-xs text-ink">
          Adicionar arquivo
          <br />
          <code className="mt-1 inline-block rounded bg-cream-50/80 px-2 py-0.5 text-[0.7rem]">public{file}</code>
        </p>
      </div>
    </div>
  );
}

export function Book() {
  const { book, images } = siteConfig;
  const cover = resolveImage(images.bookCover);

  return (
    <section id="livro" className="relative overflow-x-clip bg-cream-100">
      <Branch className="absolute -left-10 bottom-0 hidden h-64 w-24 rotate-[10deg] text-sand-300/80 lg:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:pb-24">
        <div className="relative z-10 flex justify-center pt-0 lg:-mt-20 lg:justify-start lg:pl-8">
          {cover ? (
            <Image
              src={cover}
              alt={images.bookCoverAlt}
              width={856}
              height={1008}
              sizes="(min-width: 1024px) 320px, 70vw"
              className="h-auto w-64 drop-shadow-[0_24px_28px_rgba(71,32,20,0.28)] sm:w-72 lg:w-80"
            />
          ) : (
            <CoverPlaceholder file={images.bookCover} />
          )}
        </div>

        <div className="reveal pt-4 lg:pt-16">
          <p className="text-xs uppercase tracking-[0.28em] text-ink">{book.eyebrow}</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-brown-800 sm:text-4xl lg:text-[2.6rem]">
            {book.title}
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-brown-600">{book.subtitle}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink">{book.description}</p>
          <Button href={bookHref} className="mt-7" arrow>
            {book.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
