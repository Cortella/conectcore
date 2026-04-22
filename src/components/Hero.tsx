import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { defaultHero } from "../data";
import { navigate } from "../App";

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
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient" ref={gradientRef}></div>
        <div className="hero__grid-lines"></div>
      </div>
      <div className="hero__content">
        <Reveal>
          <div className="hero__badge">{defaultHero.badge}</div>
        </Reveal>
        <Reveal>
          <h1 className="hero__title">
            {defaultHero.titleLine1}
            <span className="hero__title-accent">
              {defaultHero.titleAccent}
            </span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="hero__subtitle">{defaultHero.subtitle}</p>
        </Reveal>
        <Reveal>
          <div className="hero__actions">
            <a
              href={defaultHero.primaryAction.href}
              className="btn btn--primary"
              onClick={(e) => handleAction(e, defaultHero.primaryAction.href)}
            >
              {defaultHero.primaryAction.label}
            </a>
            <a
              href={defaultHero.secondaryAction.href}
              className="btn btn--ghost"
              onClick={(e) => handleAction(e, defaultHero.secondaryAction.href)}
            >
              {defaultHero.secondaryAction.label}
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
