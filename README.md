# Site Erika Gomes — Neuropsicopedagoga e Escritora

Next.js (App Router) + TypeScript + Tailwind CSS + Lucide React. Site estático, sem banco de dados e sem backend.

## Rodar localmente
Requer Node.js 18.18 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # testa a versão de produção
```

## Onde editar tudo
- **Textos, WhatsApp, Instagram, região, link do livro, nomes das imagens:** `src/config/site.ts`
- **Imagens:** pasta `public/images/` (leia `public/images/LEIA-ME.txt`)
  - `erika-hero.jpg` retrato principal
  - `erika-sobre.jpg` retrato da seção Sobre (opcional)
  - `livro-capa.png` capa real do livro
- **Cores e fontes:** `tailwind.config.ts` e `src/app/layout.tsx`

## Publicar
1. Crie um repositório vazio no GitHub.
2. Na pasta do projeto:
   ```bash
   git init && git add . && git commit -m "Site Erika Gomes"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. Em vercel.com: **Add New → Project → Import** o repositório. Nenhuma configuração extra é necessária (a Vercel detecta Next.js). Clique em **Deploy**.
4. Opcional: em Settings → Environment Variables, defina `NEXT_PUBLIC_SITE_URL` com o endereço final (ex.: `https://www.seudominio.com.br`) para o link de compartilhamento (Open Graph) ficar correto.

## Editar depois de publicado
Altere o arquivo no GitHub (ou localmente) e faça commit na branch `main`: a Vercel republica sozinha em cerca de 1 minuto. Para trocar imagens, substitua o arquivo em `public/images/` mantendo o mesmo nome.
