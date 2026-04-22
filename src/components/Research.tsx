import { Reveal } from "./Reveal";
import { useDataStore } from "../hooks/useDataStore";
import { defaultResearch } from "../data";

const typeLabels: Record<string, string> = {
  conferência: "Conferência",
  periódico: "Periódico",
};

const typeIcons: Record<string, string> = {
  conferência: "🎤",
  periódico: "📄",
};

export function Research() {
  const { items: papers } = useDataStore("research", defaultResearch);

  return (
    <section className="research" id="research">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Pesquisa Acadêmica</span>
          <h2 className="section-title">
            Inovação com
            <br />
            <em>base científica.</em>
          </h2>
          <p className="section-desc">
            Nossos membros participam ativamente de pesquisas científicas e
            publicações acadêmicas, contribuindo para o avanço da engenharia de
            software.
          </p>
        </Reveal>

        <div className="research__grid">
          {papers.map((paper, index) => (
            <Reveal key={paper.id}>
              <article className="research-card">
                <div className="research-card__header">
                  <span className="research-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="research-card__meta">
                    <span className="research-card__type">
                      {typeIcons[paper.type]}{" "}
                      {typeLabels[paper.type] || paper.type}
                    </span>
                    <span className="research-card__year">{paper.year}</span>
                  </div>
                </div>

                <h3 className="research-card__title">{paper.title}</h3>

                <p className="research-card__authors">
                  {paper.authors.join(", ")}
                </p>

                <p className="research-card__venue">{paper.venue}</p>

                <p className="research-card__abstract">{paper.abstract}</p>

                <div className="research-card__tags">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="research-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {paper.doi && (
                  <a
                    className="research-card__doi"
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`DOI: ${paper.doi}`}
                  >
                    DOI ↗
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
