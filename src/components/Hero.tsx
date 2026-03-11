import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function Hero() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const gradient = gradientRef.current;
    if (!hero || !gradient || window.innerWidth < 768) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroHeight = hero.offsetHeight;
          if (scrolled < heroHeight) {
            gradient.style.transform = `translateY(${scrolled * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        gradient.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient" ref={gradientRef}></div>
        <div className="hero__grid-lines"></div>
      </div>
      <div className="hero__content">
        <Reveal>
          <div className="hero__badge">Engenharia de Software Inteligente</div>
        </Reveal>
        <Reveal>
          <h1 className="hero__title">
            Construímos o
            <span className="hero__title-accent">futuro digital.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="hero__subtitle">
            Software otimizado. Produtos inteligentes. Infraestrutura que
            escala. Transformamos ideias complexas em soluções elegantes.
          </p>
        </Reveal>
        <Reveal>
          <div className="hero__actions">
            <a
              href="#services"
              className="btn btn--primary"
              onClick={(e) => scrollTo(e, "#services")}
            >
              Nossas Soluções
            </a>
            <a
              href="#contact"
              className="btn btn--ghost"
              onClick={(e) => scrollTo(e, "#contact")}
            >
              Fale Conosco
            </a>
          </div>
        </Reveal>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
