# Copilot Instructions — Conectcore

## Projeto

Site institucional da **Conectcore**, empresa de engenharia de software. Construído com **React 19 + TypeScript + Vite**, preparado para deploy na **Vercel**.

## Stack Técnica

- **Framework**: React 19 com Vite 6
- **Linguagem**: TypeScript (strict mode)
- **Estilos**: CSS puro com Custom Properties (design system próprio)
- **Fonts**: Inter + Space Grotesk (Google Fonts)
- **Deploy**: Vercel (SPA com rewrite para `/`)
- **Linting**: ESLint 9 com flat config + react-hooks + react-refresh

## Estrutura do Projeto

```
src/
├── components/      # Componentes React (um por seção do site)
│   ├── Reveal.tsx   # HOC de scroll reveal com IntersectionObserver
│   ├── Lightbox.tsx # Modal de visualização de certificados
│   ├── Navbar.tsx   # Navegação fixa com frosted glass e menu mobile
│   ├── Hero.tsx     # Hero section com parallax e gradiente animado
│   ├── Metrics.tsx  # Contadores animados (IntersectionObserver)
│   ├── About.tsx    # Seção institucional (missão, visão, valores)
│   ├── Services.tsx # 6 cards de serviços com ícones SVG inline
│   ├── Cases.tsx    # Portfolio com mockups visuais
│   ├── Certificates.tsx # Carousel com drag/touch + lightbox
│   ├── Blog.tsx     # Cards de artigos/insights
│   ├── CtaSection.tsx   # Call-to-action com WhatsApp
│   ├── Contact.tsx  # Formulário controlado + dados de contato
│   └── Footer.tsx   # Footer com links e social
├── styles/
│   └── index.css    # Design system completo (CSS Custom Properties)
├── App.tsx          # Composição de todos os componentes
├── main.tsx         # Entry point (React 19 createRoot)
└── vite-env.d.ts    # Tipos do Vite
```

## Convenções de Código

### Componentes

- Componentes funcionais com `export function NomeComponente()`
- Um componente principal por arquivo
- Componentes auxiliares (ex: `Counter` em `Metrics.tsx`) podem ficar no mesmo arquivo
- Props definidas com interfaces TypeScript
- Hooks customizados extraídos quando reutilizáveis

### Estilos

- **NÃO usar CSS Modules ou Styled Components** — manter CSS puro com BEM-like naming
- Variáveis CSS definidas em `:root` no `src/styles/index.css`
- Responsividade: breakpoints em 480px, 768px, 1024px
- Design inspirado em Apple/Jony Ive: clean, espaçoso, minimalista

### TypeScript

- `strict: true` habilitado
- Evitar `any` — usar tipos explícitos
- Preferir interfaces sobre types para props

### Scroll & Animações

- Scroll reveal via componente `<Reveal>` (IntersectionObserver)
- Parallax apenas em desktop (> 768px)
- Contadores com `requestAnimationFrame` e easing `easeOutQuart`
- Carousel com suporte a mouse drag e touch events

## Assets

- Certificados em `public/assets/certificados/cert-01.png` a `cert-10.png`
- Referenciados como `/assets/certificados/cert-XX.png` no código

## Deploy

- Vercel detecta Vite automaticamente
- `vercel.json` configura SPA rewrite
- Build: `npm run build` → output em `dist/`

## SEO

- Meta tags OG no `index.html` raiz
- Estrutura semântica (section, article, nav, footer)
- Lazy loading em imagens de certificados

## Ao fazer alterações

1. Manter o design system consistente (usar variáveis CSS existentes)
2. Novos componentes devem usar `<Reveal>` para scroll animations
3. Testar responsividade nos 3 breakpoints
4. Manter acessibilidade (aria-labels, semântica HTML)
5. Rodar `npm run build` antes de commit para verificar tipos
