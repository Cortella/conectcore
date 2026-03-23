import { Reveal } from "./Reveal";
import { useDataStore } from "../hooks/useDataStore";
import { defaultAboutValues } from "../data";

export function About() {
  const { items: values } = useDataStore("aboutValues", defaultAboutValues);

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
              A Conectcore nasceu da convicção de que tecnologia de verdade é
              sobre <strong>resolver problemas reais</strong> com elegância e
              eficiência.
            </p>
            <p>
              Somos uma empresa de engenharia de software focada em construções
              inteligentes: desde a arquitetura de produtos digitais até a
              otimização de infraestruturas complexas. Cada linha de código que
              escrevemos é pensada para performar, escalar e durar.
            </p>
            <p>
              Unimos engenharia de alto nível a uma mentalidade centrada no
              usuário para criar soluções que geram impacto real — sistemas
              resilientes, experiências digitais que encantam e infraestruturas
              preparadas para o crescimento exponencial.
            </p>
            <p>
              Além do universo digital, atuamos na interseção entre hardware e
              software: desenvolvemos projetos elétricos, design de PCBs e
              sistemas embarcados sob medida — levando a mesma excelência
              técnica do código para o mundo físico, do protótipo à produção em
              escala.
            </p>
          </Reveal>
          <Reveal className="about__values">
            {values.map((v) => (
              <div className="value-card" key={v.id}>
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
