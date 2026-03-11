import { Reveal } from "./Reveal";

export function Cases() {
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
          {/* Featured Case */}
          <Reveal tag="article" className="case-card case-card--featured">
            <div className="case-card__visual">
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
            </div>
            <div className="case-card__info">
              <span className="case-card__tag">Plataforma SaaS</span>
              <h3>FinTrack Pro</h3>
              <p>
                Plataforma de gestão financeira para fintechs com processamento
                em tempo real de +1M transações/dia. Redução de 70% no tempo de
                resposta.
              </p>
              <div className="case-card__metrics">
                <div>
                  <strong>70%</strong>
                  <span>Mais rápido</span>
                </div>
                <div>
                  <strong>1M+</strong>
                  <span>Transações/dia</span>
                </div>
                <div>
                  <strong>99.9%</strong>
                  <span>Uptime</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* LogiMove */}
          <Reveal tag="article" className="case-card">
            <div className="case-card__visual">
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
            </div>
            <div className="case-card__info">
              <span className="case-card__tag">App Mobile</span>
              <h3>LogiMove</h3>
              <p>
                App de logística inteligente com rastreamento GPS em tempo real,
                otimização de rotas via IA e integração com 15+ transportadoras.
              </p>
              <div className="case-card__metrics">
                <div>
                  <strong>500K</strong>
                  <span>Downloads</span>
                </div>
                <div>
                  <strong>4.8★</strong>
                  <span>App Store</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CloudScale */}
          <Reveal tag="article" className="case-card">
            <div className="case-card__visual">
              <div className="case-card__mockup">
                <div className="mockup-screen mockup-screen--dark">
                  <div className="mockup-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-chart">
                      <div
                        className="chart-bar"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "65%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "85%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "55%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-card__info">
              <span className="case-card__tag">Infraestrutura</span>
              <h3>CloudScale</h3>
              <p>
                Migração e otimização de infraestrutura on-premise para
                multi-cloud. Redução de 45% nos custos operacionais.
              </p>
              <div className="case-card__metrics">
                <div>
                  <strong>45%</strong>
                  <span>Redução custos</span>
                </div>
                <div>
                  <strong>3x</strong>
                  <span>Performance</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* DataBridge */}
          <Reveal tag="article" className="case-card">
            <div className="case-card__visual">
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
            </div>
            <div className="case-card__info">
              <span className="case-card__tag">Integração</span>
              <h3>DataBridge</h3>
              <p>
                Hub de integrações conectando 20+ sistemas corporativos com
                processamento de eventos em tempo real e zero downtime.
              </p>
              <div className="case-card__metrics">
                <div>
                  <strong>20+</strong>
                  <span>Sistemas</span>
                </div>
                <div>
                  <strong>0</strong>
                  <span>Downtime</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
