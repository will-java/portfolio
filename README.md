# Portfólio — William dos Santos Machado

Landing page pessoal desenvolvida em **Angular 21** com foco em apresentação profissional, conteúdo em português, tema dark/light, animações e carrossel de certificações.

## Preview do projeto

O site apresenta as seções:

- Navbar com navegação por âncoras e menu mobile
- Hero com CTA e links sociais
- Sobre mim
- Experiência (timeline em cards)
- Skills por categoria
- Projetos (placeholders prontos para substituir)
- Certificações em carrossel com Swiper
- Contato com links e formulário visual
- Footer com frase pessoal

> Imagem de perfil atual: `public/assets/img/profile-placeholder.svg` (substituir pela foto real depois).

## Stack

- Angular 21 (Standalone Components)
- TypeScript
- SCSS
- Angular Router
- Swiper (`swiper`)

## Como rodar localmente

```bash
npm install
npm start
```

Aplicação disponível em `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Saída de build:

- `dist/portfolio/browser`

## Deploy na Vercel

1. Faça import do repositório na Vercel.
2. Configure:
   - **Framework Preset:** Angular
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/portfolio/browser`
3. O arquivo `vercel.json` já está configurado para rewrite de SPA.

## Estrutura principal

```text
src/app/
  components/
    navbar/
    hero/
    about/
    experience/
    skills/
    projects/
    certifications/
    contact/
    footer/
    theme-toggle/
  pages/
    home/
  models/
    project.model.ts
    experience.model.ts
    certificate.model.ts
    skill.model.ts
  services/
    theme.service.ts
    portfolio-data.service.ts
```

## Créditos

Conteúdo profissional e identidade baseados na trajetória de **William dos Santos Machado**.
