import { Reveal } from "./Reveal";
import { defaultCta } from "../data";
import { navigate } from "../App";

export function CtaSection() {
  const handleAction = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      window.scrollTo({
        top:
          target.getBoundingClientRect().top + window.pageYOffset - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-section__inner">
          <h2
            dangerouslySetInnerHTML={{
              __html: defaultCta.title.replace(/\n/g, "<br />"),
            }}
          />
          <p>{defaultCta.subtitle}</p>
          <div className="cta-section__actions">
            <a
              href={defaultCta.primaryAction.href}
              className="btn btn--primary btn--large"
              onClick={(e) => handleAction(e, defaultCta.primaryAction.href)}
            >
              {defaultCta.primaryAction.label}
            </a>
            <a
              href={defaultCta.whatsappAction.href}
              target="_blank"
              rel="noopener"
              className="btn btn--whatsapp btn--large"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.104 1.514 5.834L0 24l6.335-1.463C8.077 23.478 9.987 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.632-.502-5.148-1.378l-.37-.218-3.83.885.965-3.524-.242-.385C2.408 15.447 1.875 13.768 1.875 12 1.875 6.418 6.418 1.875 12 1.875S22.125 6.418 22.125 12 17.582 21.75 12 21.75z" />
              </svg>
              {defaultCta.whatsappAction.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
