import { useEffect, useCallback } from "react";

interface LightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (src) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [src, handleKeyDown]);

  return (
    <div
      className={`lightbox${src ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lightbox__close" aria-label="Fechar" onClick={onClose}>
        ✕
      </button>
      <img src={src || ""} alt={alt} />
    </div>
  );
}
