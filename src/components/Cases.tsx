import { Reveal } from "./Reveal";
import { useDataStore } from "../hooks/useDataStore";
import { defaultCases } from "../data";
import type { CaseStudy, MockupType } from "../types";

/* ── Mockup visual por tipo ───────────────────────────────── */
function Mockup({ type }: { type: MockupType }) {
  switch (type) {
    case "phone":
      return (
        <div className="case-card__mockup case-card__mockup--phone">
          <div className="mockup-phone">
            <div className="mockup-phone__notch"></div>
            <div className="mockup-phone__content">
              <div className="mockup-line w60"></div>
              <div className="mockup-circle"></div>
              <div className="mockup-line w80"></div>
            </div>
          </div>
        </div>
      );
    case "desktop-dark":
      return (
        <div className="case-card__mockup">
          <div className="mockup-screen mockup-screen--dark">
            <div className="mockup-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mockup-content">
              <div className="mockup-chart">
                <div className="chart-bar" style={{ height: "40%" }}></div>
                <div className="chart-bar" style={{ height: "65%" }}></div>
                <div className="chart-bar" style={{ height: "85%" }}></div>
                <div className="chart-bar" style={{ height: "55%" }}></div>
                <div className="chart-bar" style={{ height: "95%" }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    case "desktop-nodes":
      return (
        <div className="case-card__mockup">
          <div className="mockup-screen">
            <div className="mockup-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mockup-content">
              <div className="mockup-nodes">
                <div className="node"></div>
                <div className="node"></div>
                <div className="node"></div>
                <div className="node-line"></div>
                <div className="node-line node-line--2"></div>
              </div>
            </div>
          </div>
        </div>
      );
    default: // "desktop"
      return (
        <div className="case-card__mockup">
          <div className="mockup-screen">
            <div className="mockup-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mockup-content">
              <div className="mockup-line w80"></div>
              <div className="mockup-line w60"></div>
              <div className="mockup-blocks">
                <div className="mockup-block"></div>
                <div className="mockup-block"></div>
                <div className="mockup-block"></div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Reveal
      tag="article"
      className={`case-card${c.featured ? " case-card--featured" : ""}`}
    >
      <div className="case-card__visual">
        <Mockup type={c.mockupType} />
      </div>
      <div className="case-card__info">
        <span className="case-card__tag">{c.tag}</span>
        <h3>{c.title}</h3>
        <p>{c.desc}</p>
        <div className="case-card__metrics">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Cases() {
  const { items: cases } = useDataStore("cases", defaultCases);

  return (
    <section className="cases" id="cases">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Cases</span>
          <h2 className="section-title">
            Resultados que
            <br />
            <em>falam por si.</em>
          </h2>
        </Reveal>
        <div className="cases__grid">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
