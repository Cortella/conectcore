import { defaultFooter } from "../data";

export function Footer() {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
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
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="nav__logo">
              <span className="logo-circle">
                <img
                  src={defaultFooter.brand.logoSrc}
                  alt={defaultFooter.brand.logoAlt}
                  className="logo-circle__img"
                />
              </span>
            </a>
            <p>
              {defaultFooter.brand.tagline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
          </div>
          {defaultFooter.columns.map((col) => (
            <div className="footer__col" key={col.id}>
              <h4>{col.title}</h4>
              {col.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>{defaultFooter.legal.copyright}</p>
          <div className="footer__legal">
            {defaultFooter.legal.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
