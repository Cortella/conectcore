import { Reveal } from "./Reveal";

const services = [
  {
    number: "01",
    title: "Engenharia de Software",
    desc: "Desenvolvimento de software sob medida com arquitetura robusta, código limpo e performance otimizada. Do backend ao frontend.",
    tags: ["Backend", "Frontend", "APIs", "Microserviços"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <path d="M16 20l4 4-4 4M24 28h8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Produtos Digitais & Apps",
    desc: "Construção de produtos digitais completos — apps mobile, plataformas web e SaaS — com foco em UX excepcional e escalabilidade.",
    tags: ["iOS", "Android", "SaaS", "PWA"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="12" y="4" width="24" height="40" rx="4" />
        <circle cx="24" cy="38" r="2" />
        <path d="M18 8h12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Infraestrutura & Cloud",
    desc: "Integração e otimização de infraestrutura: cloud-native, DevOps, CI/CD pipelines e arquiteturas que escalam automaticamente.",
    tags: ["AWS", "Azure", "GCP", "DevOps"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        <circle cx="24" cy="24" r="8" />
        <path d="M10 10l6 6M32 32l6 6M10 38l6-6M32 16l6-6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Otimização de Performance",
    desc: "Análise e otimização de sistemas existentes: refatoração, melhoria de latência, redução de custos e eliminação de gargalos.",
    tags: ["Profiling", "Refactoring", "Caching", "Scaling"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 16l16-8 16 8v16l-16 8-16-8z" />
        <path d="M8 16l16 8 16-8M24 24v16" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Integrações & APIs",
    desc: "Conectamos sistemas, plataformas e serviços com APIs robustas, integrações em tempo real e orquestrações inteligentes.",
    tags: ["REST", "GraphQL", "Webhooks", "gRPC"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="14" cy="14" r="6" />
        <circle cx="34" cy="14" r="6" />
        <circle cx="14" cy="34" r="6" />
        <circle cx="34" cy="34" r="6" />
        <path d="M20 14h8M14 20v8M34 20v8M20 34h8" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Consultoria Técnica",
    desc: "Consultoria estratégica em arquitetura de software, modernização de legado, stack tecnológica e cultura de engenharia.",
    tags: ["Arquitetura", "Legado", "Strategy", "Mentoria"],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" />
        <path d="M4 24h40M24 4c5.523 0 10 8.954 10 20s-4.477 20-10 20S14 35.046 14 24 18.477 4 24 4z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Soluções</span>
          <h2 className="section-title">
            O que
            <br />
            <em>construímos.</em>
          </h2>
        </Reveal>
        <div className="services__grid">
          {services.map((s) => (
            <Reveal className="service-card" key={s.number}>
              <div className="service-card__number">{s.number}</div>
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-card__tags">
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
