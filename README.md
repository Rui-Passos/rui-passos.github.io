# Rui Passos — Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Vite** — build tool
- **React 18** — UI framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **Framer Motion** — animations

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Adicionar / editar projectos

Edita apenas o ficheiro `src/data/projects.ts` — toda a página de projectos é gerada automaticamente a partir desse array.

## Deploy (GitHub Pages)

1. Cria um repositório chamado `rui-passos.github.io`
2. Faz push do código para o branch `main`
3. Nas settings do repositório → Pages → Source: **GitHub Actions**
4. O workflow em `.github/workflows/deploy.yml` trata do resto automaticamente

O site fica disponível em `https://rui-passos.github.io`
