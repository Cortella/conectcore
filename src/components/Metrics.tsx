import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useDataStore } from "../hooks/useDataStore";
import { defaultMetrics } from "../data";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function Counter({ target, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const startTime = performance.now();

    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(update);
  }, [started, target]);

  return (
    <Reveal className="metric">
      <div ref={ref}>
        <span className="metric__number">{count}</span>
        {suffix && <span className="metric__suffix">{suffix}</span>}
        <span className="metric__label">{label}</span>
      </div>
    </Reveal>
  );
}

export function Metrics() {
  const { items: metrics } = useDataStore("metrics", defaultMetrics);

  return (
    <section className="metrics">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((m) => (
            <Counter
              key={m.id}
              target={m.target}
              suffix={m.suffix}
              label={m.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
