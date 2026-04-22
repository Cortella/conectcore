# ConectCore — Contexto do Projeto para Claude

## O que é este projeto

Site institucional da **ConectCore**, empresa de engenharia de software baseada em Belo Horizonte/MG. O site serve como portfólio, vitrine de serviços e canal de contato com clientes.

## Stack

- **React 19** + **TypeScript 5.7** + **Vite 6.2**
- **CSS puro** com custom properties — sem Tailwind, sem Styled Components, sem UI libraries
- **Deploy**: Vercel (auto-deploy no push para `master`)
- **Sem backend**: dados em JSON, estado em localStorage via hooks customizados

## Estrutura de arquivos

```
src/
├── components/     # 17 componentes React
├── data/           # JSONs com conteúdo do site (fonte da verdade)
│   └── index.ts    # barrel exports com tipos
├── hooks/          # useDataStore + hooks tipados por entidade
├── types/          # index.ts com todas as interfaces TypeScript
├── styles/         # index.css (~2000 linhas, sistema de design completo)
└── App.tsx         # roteamento client-side + composição das seções
```

## Seções do site (ordem no App.tsx)

1. Navbar — navegação fixa, frosted glass
2. Hero — parallax, orbs animados, gradiente escuro
3. Metrics — contadores animados (28 projetos, 8 anos, 15+ clientes, 99% uptime)
4. Partners — marquee infinito com logos
5. About — missão / visão / valores
6. Services — 6 cards de serviços
7. Cases — 5 estudos de caso com mockups
8. Research — 6 publicações acadêmicas
9. Blog — 4 artigos técnicos
10. CtaSection — call-to-action
11. Contact — formulário + info de contato
12. Footer

**Rotas**: `/` (home), `/privacidade`, `/blog/:slug`

## Sistema de design (CSS custom properties)

```css
--accent: #6366F1          /* indigo — cor primária */
--accent-light: #22D3EE    /* cyan */
--accent-dark: #7C3AED     /* roxo */
--font-primary: Inter
--font-display: Space Grotesk
--section-padding: clamp(80px, 12vw, 160px)
--container-max: 1200px
```

Breakpoints: `1024px`, `768px`, `480px`  
Convenção de classes: BEM-like (`.component__element--modifier`)

## Como o conteúdo funciona

Todo conteúdo está em `src/data/*.json`. Para editar textos, métricas, serviços, cases, blog ou pesquisas, edite os JSONs — não os componentes.

Os hooks em `src/hooks/` fazem CRUD com persistência em localStorage:
```ts
const { items, add, update, remove } = useServices()
```

## Tarefas comuns

**Adicionar novo serviço**: edite `src/data/services.json` seguindo a interface `Service` em `src/types/index.ts`

**Adicionar artigo no blog**: edite `src/data/blog.json` com slug único; a rota `/blog/:slug` funciona automaticamente

**Alterar cores/espaçamentos**: edite as variáveis no topo de `src/styles/index.css`

**Novo componente**: crie em `src/components/`, importe em `App.tsx`, adicione dados em `src/data/`

**Ver localmente**:
```bash
npm run dev
```

## Estado atual do desenvolvimento

- Site funcional e responsivo
- Animações de scroll-reveal e parallax implementadas
- Formulário de contato: **frontend pronto, sem backend** (emails não são enviados)
- Sem suite de testes
- Conteúdo em português (pt-BR) apenas

## O que ainda falta / backlog provável

- [ ] Backend para formulário de contato (envio de email)
- [ ] Analytics (Google Analytics / Plausible)
- [ ] Otimização de imagens / lazy loading
- [ ] SEO: sitemap.xml, robots.txt
- [ ] i18n (inglês como segunda língua)
- [ ] CMS headless para gestão de conteúdo

## Convenções do projeto

- Não usar bibliotecas de UI externas — manter CSS puro
- Conteúdo em JSON, lógica em hooks, apresentação em componentes
- Animações via CSS + IntersectionObserver (sem GSAP, Framer Motion, etc.)
- Sem comentários desnecessários no código
- TypeScript estrito — interfaces em `src/types/index.ts`

## Informações da empresa

- **Nome**: ConectCore
- **Email**: contato@conectcore.com.br
- **Localização**: Belo Horizonte, MG
- **Serviços**: Engenharia de Software, Apps, Cloud, Performance, APIs, Consultoria Técnica
