import { useState, useRef, useCallback, useEffect } from "react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { useDataStore } from "../hooks/useDataStore";
import { defaultCertificates } from "../data";

function getCardsVisible() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 1.2;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible);
  const { items: certificates } = useDataStore(
    "certificates",
    defaultCertificates,
  );

  const isDragging = useRef(false);
  const startX = useRef(0);

  const maxIndex = Math.max(0, certificates.length - Math.floor(cardsVisible));

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector(".cert-card") as HTMLElement;
    if (!card) return 0;
    const gap = parseInt(getComputedStyle(track).gap) || 24;
    return card.offsetWidth + gap;
  }, []);

  const updatePosition = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const cardWidth = getCardWidth();
      const clampedIndex = Math.max(0, Math.min(index, maxIndex));
      track.style.transform = `translateX(-${clampedIndex * cardWidth}px)`;
    },
    [getCardWidth, maxIndex],
  );

  useEffect(() => {
    updatePosition(currentIndex);
  }, [currentIndex, updatePosition]);

  useEffect(() => {
    const handleResize = () => setCardsVisible(getCardsVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const diff = e.pageX - startX.current;
    const cardWidth = getCardWidth();
    trackRef.current.style.transform = `translateX(${-(currentIndex * cardWidth) + diff}px)`;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.transition =
      "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    const diff = e.pageX - startX.current;
    if (diff < -80) next();
    else if (diff > 80) prev();
    else updatePosition(currentIndex);
  };

  const handleMouseLeave = () => {
    if (isDragging.current && trackRef.current) {
      isDragging.current = false;
      trackRef.current.style.transition =
        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
      updatePosition(currentIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const diff = e.touches[0].pageX - startX.current;
    const cardWidth = getCardWidth();
    trackRef.current.style.transform = `translateX(${-(currentIndex * cardWidth) + diff}px)`;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.transition =
      "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    const diff = e.changedTouches[0].pageX - startX.current;
    if (diff < -50) next();
    else if (diff > 50) prev();
    else updatePosition(currentIndex);
  };

  return (
    <>
      <section className="certificates" id="certificates">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-tag">Certificações</span>
            <h2 className="section-title">
              Excelência
              <br />
              <em>comprovada.</em>
            </h2>
            <p className="section-desc">
              Nossas certificações refletem o compromisso contínuo com as
              melhores práticas e padrões da indústria.
            </p>
          </Reveal>
          <Reveal className="certificates__carousel">
            <div
              className="certificates__track"
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {certificates.map((cert) => (
                <div className="cert-card" key={cert.id}>
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    loading="lazy"
                    onClick={() => setLightboxSrc(cert.src)}
                  />
                </div>
              ))}
            </div>
            <div className="certificates__controls">
              <button
                className="cert-btn cert-btn--prev"
                aria-label="Anterior"
                onClick={prev}
              >
                ←
              </button>
              <button
                className="cert-btn cert-btn--next"
                aria-label="Próximo"
                onClick={next}
              >
                →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
      <Lightbox
        src={lightboxSrc}
        alt="Certificado ampliado"
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
