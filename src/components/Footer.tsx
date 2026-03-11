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
              <span className="logo-icon">◈</span>
              <span className="logo-text">Conectcore</span>
            </a>
            <p>
              Engenharia de Software Inteligente.
              <br />
              Construindo o futuro digital.
            </p>
          </div>
          <div className="footer__col">
            <h4>Soluções</h4>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Engenharia de Software
            </a>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Produtos &amp; Apps
            </a>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Infraestrutura
            </a>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Otimização
            </a>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Integrações
            </a>
            <a href="#services" onClick={(e) => scrollTo(e, "#services")}>
              Consultoria
            </a>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <a href="#about" onClick={(e) => scrollTo(e, "#about")}>
              Quem Somos
            </a>
            <a href="#cases" onClick={(e) => scrollTo(e, "#cases")}>
              Cases
            </a>
            <a
              href="#certificates"
              onClick={(e) => scrollTo(e, "#certificates")}
            >
              Certificados
            </a>
            <a href="#blog" onClick={(e) => scrollTo(e, "#blog")}>
              Insights
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, "#contact")}>
              Contato
            </a>
          </div>
          <div className="footer__col">
            <h4>Social</h4>
            <a href="#" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener">
              X (Twitter)
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Conectcore. Todos os direitos reservados.</p>
          <div className="footer__legal">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
