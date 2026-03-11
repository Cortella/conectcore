import { Reveal } from "./Reveal";

const values = [
  {
    icon: "◎",
    title: "Missão",
    text: "Construir software inteligente que transforma negócios e impulsiona a inovação tecnológica.",
  },
  {
    icon: "◇",
    title: "Visão",
    text: "Ser referência global em engenharia de software, reconhecida pela excelência e impacto.",
  },
  {
    icon: "△",
    title: "Valores",
    text: "Excelência técnica, transparência radical, inovação contínua e compromisso com resultados.",
  },
];

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Quem Somos</span>
          <h2 className="section-title">
            Engenharia com
            <br />
            <em>propósito.</em>
          </h2>
        </Reveal>
        <div className="about__grid">
          <Reveal className="about__text">
            <p className="about__lead">
              A Conectcore nasceu da convicção de que tecnologia de verdade não
              é sobre código — é sobre <strong>resolver problemas reais</strong>{" "}
              com elegância e eficiência.
            </p>
            <p>
              Somos uma empresa de engenharia de software focada em construções
              inteligentes: desde a arquitetura de produtos digitais até a
              otimização de infraestruturas complexas. Cada linha de código que
              escrevemos é pensada para performar, escalar e durar.
            </p>
            <p>
              Combinamos rigor técnico com design thinking para entregar
              soluções que fazem a diferença — software otimizado, apps que as
              pessoas amam usar e infraestruturas que sustentam o crescimento.
            </p>
          </Reveal>
          <Reveal className="about__values">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
