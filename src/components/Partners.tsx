import { useDataStore } from "../hooks/useDataStore";
import { defaultPartners } from "../data";

export function Partners() {
  const { items: partners } = useDataStore("partners", defaultPartners);

  // Duplicate the list so the marquee loops seamlessly
  const track = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="container">
        <p className="partners__label">Tecnologias &amp; Parceiros</p>
      </div>
      <div className="partners__marquee">
        <div className="partners__track">
          {track.map((p, i) => (
            <div className="partners__item" key={`${p.id}-${i}`}>
              <img src={p.logo} alt={p.name} loading="lazy" />
              <span className="partners__name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
