"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += 1;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (current >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary-500">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-slate-600 text-sm md:text-base">{label}</p>
    </div>
  );
}
