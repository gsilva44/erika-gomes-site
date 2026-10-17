import { BookOpen, UserRound } from "lucide-react";

type Props = { kind: "portrait" | "book"; file: string; className?: string };

/** Espaço reservado elegante. Some automaticamente quando a imagem real é adicionada em /public/images. */
export function PhotoPlaceholder({ kind, file, className = "" }: Props) {
  const Icon = kind === "book" ? BookOpen : UserRound;
  const label = kind === "book" ? "Capa oficial do livro" : "Retrato profissional";
  return (
    <div
      role="img"
      aria-label={`${label} (imagem a ser adicionada)`}
      className={`flex flex-col items-center justify-center gap-3 border border-dashed border-terracotta-300/70 bg-sand-200/70 p-6 text-center ${className}`}
    >
      <Icon className="h-10 w-10 text-terracotta-500" strokeWidth={1.2} aria-hidden="true" />
      <p className="font-display text-lg text-brown-800">{label}</p>
      <p className="text-xs text-ink/80">
        Adicionar arquivo
        <br />
        <code className="mt-1 inline-block rounded bg-cream-50/80 px-2 py-0.5 text-[0.7rem]">public{file}</code>
      </p>
    </div>
  );
}
