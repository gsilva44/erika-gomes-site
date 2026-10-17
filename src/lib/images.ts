import fs from "node:fs";
import path from "node:path";

/** Retorna o primeiro caminho de imagem que existe em /public (ou null). Roda no servidor/build. */

export function resolveImage(...candidates: string[]): string | null {
  return candidates[0] ?? null;
}


