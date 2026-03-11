import { Reveal } from "./Reveal";

const articles = [
  {
    day: "08",
    month: "MAR",
    category: "Engenharia",
    title: "Como Reduzimos a Latência em 80% com Event-Driven Architecture",
    desc: "Um deep dive na migração de uma arquitetura monolítica para event-driven, e os ganhos reais de performance.",
  },
  {
    day: "02",
    month: "MAR",
    category: "Infraestrutura",
    title: "O Guia Definitivo para Multi-Cloud em 2026",
    desc: "Estratégias práticas para otimizar custos e performance distribuindo workloads entre AWS, Azure e GCP.",
  },
  {
    day: "24",
    month: "FEV",
    category: "Produto",
    title: "Design Systems que Escalam: Nossa Abordagem",
    desc: "Como construímos design systems modulares que aceleram o desenvolvimento e mantêm a consistência.",
  },
  {
    day: "18",
    month: "FEV",
    category: "DevOps",
    title: "CI/CD Pipeline Zero-Downtime: Da Teoria à Prática",
    desc: "Implementando deploys contínuos com zero downtime usando blue-green deployments e feature flags.",
  },
];

export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">
            Pensamento
            <br />
            <em>técnico.</em>
          </h2>
        </Reveal>
        <div className="blog__grid">
          {articles.map((a) => (
            <Reveal tag="article" className="blog-card" key={a.title}>
              <div className="blog-card__date">
                <span className="day">{a.day}</span>
                <span className="month">{a.month}</span>
              </div>
              <div className="blog-card__content">
                <span className="blog-card__category">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a href="#" className="blog-card__link">
                  Ler artigo →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
