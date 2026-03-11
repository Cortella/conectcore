import { useState, useEffect, useCallback } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Quem Somos" },
  { href: "#services", label: "Soluções" },
  { href: "#cases", label: "Cases" },
  { href: "#certificates", label: "Certificados" },
  { href: "#blog", label: "Insights" },
  { href: "#contact", label: "Contato", cta: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.getElementById("nav")?.offsetHeight || 72;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
      setIsMobileOpen(false);
      document.body.style.overflow = "";
    },
    [],
  );

  const toggleMobile = () => {
    setIsMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <nav className={`nav${isScrolled ? " nav--scrolled" : ""}`} id="nav">
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">Conectcore</span>
        </a>
        <div className={`nav__links${isMobileOpen ? " open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav__link${link.cta ? " nav__link--cta" : ""}${
                activeSection === link.href.slice(1) ? " active" : ""
              }`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={`nav__toggle${isMobileOpen ? " active" : ""}`}
          aria-label="Abrir menu"
          onClick={toggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
