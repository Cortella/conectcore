# Conectcore — Site Institucional

Site institucional da **Conectcore**, empresa de engenharia de software focada em construções inteligentes de produtos digitais, apps, infraestrutura e software otimizado.

## 🚀 Como Rodar

### Opção 1 — Live Server (recomendado)
```bash
# Instale a extensão Live Server no VS Code e clique em "Go Live"
# Ou use o npx:
npx serve .
```

### Opção 2 — Python
```bash
cd /Users/mymac/Desktop/conectcore-site
python3 -m http.server 8080
# Abra http://localhost:8080
```

### Opção 3 — Node.js
```bash
npx http-server . -p 8080 -o
```

## 📁 Estrutura

```
conectcore-site/
├── index.html                 # Página principal
├── styles.css                 # Estilos (design system completo)
├── main.js                    # Interações e animações
├── README.md                  # Este arquivo
└── assets/
    └── certificados/          # Imagens dos certificados
        ├── cert-01.png
        ├── cert-02.png
        └── ... (cert-10.png)
```

## 🎨 Design

- **Tipografia**: Inter + Space Grotesk (Google Fonts)
- **Inspiração**: Apple/Jony Ive — clean, espaçoso, minimalista
- **Animações**: Scroll reveal, parallax suave, hover states, carousel
- **Responsivo**: Mobile-first, breakpoints em 480px, 768px, 1024px

## 📝 Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com gradiente animado e CTA |
| **Métricas** | Números da empresa com contagem animada |
| **Quem Somos** | Missão, visão e valores |
| **Soluções** | 6 serviços com ícones SVG |
| **Cases** | Portfólio com mockups visuais |
| **Certificados** | Carousel com 10 certificados (lightbox) |
| **Insights** | Blog/artigos técnicos |
| **CTA** | Call-to-action com WhatsApp |
| **Contato** | Formulário + dados de contato |
| **Footer** | Links, social e copyright |

## ⚡ Tecnologias

- HTML5 semântico
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (IntersectionObserver, Touch Events)
- Sem dependências externas (exceto Google Fonts)

## 📱 SEO

- Meta tags Open Graph
- Estrutura semântica (header, nav, section, article, footer)
- Imagens com lazy loading
- Performance otimizada (sem frameworks pesados)

---

© 2026 Conectcore. Todos os direitos reservados.
