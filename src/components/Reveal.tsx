import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  tag?: "div" | "article" | "section" | "span";
  style?: CSSProperties;
}

export function Reveal({
  children,
  className = "",
  tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = tag;
  const classes = `reveal${isRevealed ? " revealed" : ""}${className ? ` ${className}` : ""}`;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={classes} style={style}>
      {children}
    </Tag>
  );
}
