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
              eficiência — e que a inteligência artificial é o maior acelerador
              dessa equação.
            </p>
            <p>
              Nosso principal produto hoje são as{" "}
              <strong>IAs especialistas</strong>: modelos treinados e ajustados
              para contextos empresariais específicos. Desenvolvemos, treinamos
              e implantamos agentes de IA que compreendem o vocabulário, os
              processos e as regras do seu negócio — automatizando decisões
              complexas, destravando eficiência operacional e gerando vantagem
              competitiva real.
            </p>
            <p>
              Essa expertise em IA se apoia em uma base sólida de engenharia de
              software: arquitetura de produtos digitais, infraestruturas
              escaláveis em nuvem e sistemas de alto desempenho. Cada solução é
              pensada para performar, escalar e durar.
            </p>
            <p>
              Atuamos ainda na automação industrial e de processos — programação
              de CLPs, análise de sinais, otimização de lógicas de controle e
              sistemas orientados a eventos. E quando o desafio vai além do
              software, desenvolvemos projetos elétricos, design de PCBs e
              sistemas embarcados sob medida: do protótipo à produção em escala.
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
