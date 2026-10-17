import fs from "node:fs";
import path from "node:path";

/** Retorna o primeiro caminho de imagem que existe em /public (ou null). Roda no servidor/build. */
export function resolveImage(...candidates: string[]): string | null {
  for (const src of candidates) {
    const file = path.join(process.cwd(), "public", src.replace(/^\//, ""));
    if (fs.existsSync(file)) return src;
  }
  return null;
}
