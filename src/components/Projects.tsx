import { useState, useEffect, useCallback } from "react";
import { Reveal } from "./Reveal";
import { useProjects } from "../hooks";
import type { Project } from "../types";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="project-modal"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="project-modal__content">
        <button className="project-modal__close" aria-label="Fechar" onClick={onClose}>✕</button>

        <div className="project-modal__header">
          <div className="project-modal__meta">
            <span className="project-card__sector">{project.sector}</span>
            <span className="project-modal__period">{project.period} · {project.duration}</span>
          </div>
          <h2 className="project-modal__title">{project.client}</h2>
          {project.partner && (
            <p className="project-modal__partner">Em parceria com <strong>{project.partner}</strong></p>
          )}
          <div className="project-card__stack">
            {project.stack.map((s) => <span key={s} className="project-card__tag">{s}</span>)}
          </div>
        </div>

        <div className="project-modal__body">
          <div className="project-modal__section">
            <h3>Desafio</h3>
            <p>{project.details.challenge}</p>
          </div>

          <div className="project-modal__section">
            <h3>Solução</h3>
            <p>{project.details.solution}</p>
          </div>

          <div className="project-modal__section">
            <h3>Destaques</h3>
            <ul className="project-modal__highlights">
              {project.details.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal__section">
            <h3>Resultado</h3>
            <p>{project.details.outcome}</p>
          </div>

          {project.team && project.team.length > 0 && (
            <div className="project-modal__section">
              <h3>Time</h3>
              <div className="project-modal__team">
                {project.team.map((member) => (
                  <div key={member.name} className="project-modal__member">
                    <div className="project-modal__member-info">
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                    </div>
                    <p>{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.clientUrl && (
          <div className="project-modal__footer">
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Visitar site do cliente ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const { items: projects } = useProjects();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Onde Já Atuamos</span>
          <h2 className="section-title">
            Projetos que
            <br />
            <em>geraram impacto.</em>
          </h2>
        </Reveal>

        <Reveal className="projects__grid">
          {projects.map((project) => (
            <button
              key={project.id}
              className="project-card"
              onClick={() => setActive(project)}
              aria-label={`Ver detalhes do projeto ${project.client}`}
            >
              <div className="project-card__header">
                <span className="project-card__sector">{project.sector}</span>
                <span className="project-card__period">{project.period}</span>
              </div>

              <h3 className="project-card__client">{project.client}</h3>
              <p className="project-card__summary">{project.summary}</p>

              {project.partner && (
                <p className="project-card__partner">Parceria: <strong>{project.partner}</strong></p>
              )}

              <div className="project-card__stack">
                {project.stack.map((s) => (
                  <span key={s} className="project-card__tag">{s}</span>
                ))}
              </div>

              <span className="project-card__cta">Ver detalhes →</span>
            </button>
          ))}
        </Reveal>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
