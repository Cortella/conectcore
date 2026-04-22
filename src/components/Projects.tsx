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

        <div className="project-modal__topbar">
          <span className="project-card__sector">{project.sector}</span>
          <button className="project-modal__close" aria-label="Fechar" onClick={onClose}>✕</button>
        </div>

        <div className="project-modal__scroll">

          <div className="project-modal__header">
            <h2 className="project-modal__title">{project.client}</h2>
            {project.product && <p className="project-modal__product">{project.product}</p>}
            <p className="project-modal__meta">
              {project.period}
              {project.partner && <> · Parceria com <strong>{project.partner}</strong></>}
            </p>
          </div>

          <div className="project-modal__body">

            <div className="project-modal__section">
              <p className="project-modal__label">Desafio</p>
              <p>{project.details.challenge}</p>
            </div>

            <div className="project-modal__section">
              <p className="project-modal__label">Solução</p>
              <p>{project.details.solution}</p>
            </div>

            <div className="project-modal__section">
              <p className="project-modal__label">Destaques</p>
              <ul className="project-modal__highlights">
                {project.details.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>

            <div className="project-modal__section">
              <p className="project-modal__label">Resultado</p>
              <p>{project.details.outcome}</p>
            </div>

            <div className="project-modal__section">
              <p className="project-modal__label">Stack</p>
              <div className="project-modal__stack">
                {project.stack.map((s) => <span key={s} className="project-card__tag">{s}</span>)}
              </div>
            </div>

          </div>

          {project.clientUrl && (
            <div className="project-modal__footer">
              <a href={project.clientUrl} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                Visitar site do cliente
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            </div>
          )}

        </div>
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
              {project.product && (
                <span className="project-card__product">{project.product}</span>
              )}
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
