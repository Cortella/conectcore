import { Reveal } from "./Reveal";
import { useDataStore } from "../hooks/useDataStore";
import { defaultBlog } from "../data";

export function Blog() {
  const { items: articles } = useDataStore("blog", defaultBlog);

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
            <Reveal tag="article" className="blog-card" key={a.id}>
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
