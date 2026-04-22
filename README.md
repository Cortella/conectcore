# Conectcore — Site Institucional

Site institucional da **Conectcore**, empresa de engenharia de software focada em construções inteligentes de produtos digitais, apps, infraestrutura e software otimizado.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tool)
- **CSS puro** com Custom Properties (design system)
- **Vercel** (deploy)

## Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build local
npm run preview
```

## Estrutura do Projeto

```
conectcore/
├── public/
│   └── assets/
│       └── certificados/          # Imagens dos certificados (cert-01 a cert-10)
├── src/
│   ├── components/
│   │   ├── Reveal.tsx             # Componente de scroll reveal
│   │   ├── Lightbox.tsx           # Modal para certificados
│   │   ├── Navbar.tsx             # Navegação com frosted glass
│   │   ├── Hero.tsx               # Hero com parallax
│   │   ├── Metrics.tsx            # Contadores animados
│   │   ├── About.tsx              # Quem Somos
│   │   ├── Services.tsx           # 6 soluções/serviços
│   │   ├── Cases.tsx              # Portfolio/cases
│   │   ├── Certificates.tsx       # Carousel de certificados
│   │   ├── Blog.tsx               # Insights/artigos
│   │   ├── CtaSection.tsx         # Call-to-action
│   │   ├── Contact.tsx            # Formulário de contato
│   │   └── Footer.tsx             # Rodapé
│   ├── styles/
│   │   └── index.css              # Design system completo
│   ├── App.tsx                    # Composição principal
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts              # Tipos Vite
├── index.html                     # HTML entry point (Vite)
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json                    # Configuração Vercel
├── eslint.config.js
└── .github/
    └── copilot-instructions.md    # Instruções para o Copilot
```

## Design

- **Tipografia**: Inter + Space Grotesk (Google Fonts)
- **Inspiração**: Apple/Jony Ive — clean, espaçoso, minimalista
- **Animações**: Scroll reveal, parallax suave, hover states, carousel touch/drag
- **Responsivo**: Breakpoints em 480px, 768px, 1024px

## Seções

| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Hero | `Hero.tsx` | Apresentação com gradiente animado e parallax |
| Métricas | `Metrics.tsx` | Números da empresa com contagem animada |
| Quem Somos | `About.tsx` | Missão, visão e valores |
| Soluções | `Services.tsx` | 6 serviços com ícones SVG |
| Cases | `Cases.tsx` | Portfólio com mockups visuais |
| Certificados | `Certificates.tsx` | Carousel com drag/touch + lightbox |
| Insights | `Blog.tsx` | Blog/artigos técnicos |
| CTA | `CtaSection.tsx` | Call-to-action com WhatsApp |
| Contato | `Contact.tsx` | Formulário controlado + dados de contato |
| Footer | `Footer.tsx` | Links, social e copyright |

## Deploy na Vercel

### Configuração (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Deploy Automático

1. Conecte o repositório GitHub ao [Vercel](https://vercel.com)
2. A Vercel detecta automaticamente o framework Vite
3. Cada push para `master` faz deploy automático
4. Preview deploys são criados para cada PR

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o build padrão. Caso precise adicionar:

- Acesse **Project Settings > Environment Variables** na dashboard da Vercel
- Prefixe com `VITE_` para expor ao client-side (ex: `VITE_API_URL`)

### Domínio Customizado

1. Vá em **Project Settings > Domains**
2. Adicione seu domínio (ex: `conectcore.com`)
3. Configure os DNS conforme instruções da Vercel

## Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `vite` | Servidor de desenvolvimento com HMR |
| `build` | `tsc -b && vite build` | Type-check + build para produção |
| `preview` | `vite preview` | Preview local do build |
| `lint` | `eslint .` | Lint do código |

## SEO

- Meta tags Open Graph configuradas no `index.html`
- Estrutura semântica (nav, section, article, footer)
- Imagens com lazy loading
- Fontes com `preconnect` para performance

---

© 2026 Conectcore. Todos os direitos reservados.
