"use client";

import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "@/data/heroSlides";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function AIAgentGraphic() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central brain/node */}
      <circle cx="250" cy="220" r="60" stroke="rgba(79,180,255,0.6)" strokeWidth="2" fill="rgba(79,180,255,0.08)" />
      <circle cx="250" cy="220" r="40" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.12)" />
      <circle cx="250" cy="220" r="8" fill="rgba(79,180,255,0.8)" />

      {/* Neural network nodes */}
      <circle cx="120" cy="140" r="20" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <circle cx="120" cy="140" r="5" fill="rgba(79,180,255,0.6)" />
      <circle cx="380" cy="140" r="20" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <circle cx="380" cy="140" r="5" fill="rgba(79,180,255,0.6)" />
      <circle cx="120" cy="300" r="20" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <circle cx="120" cy="300" r="5" fill="rgba(79,180,255,0.6)" />
      <circle cx="380" cy="300" r="20" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <circle cx="380" cy="300" r="5" fill="rgba(79,180,255,0.6)" />
      <circle cx="250" cy="380" r="20" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <circle cx="250" cy="380" r="5" fill="rgba(79,180,255,0.6)" />
      <circle cx="170" cy="80" r="12" stroke="rgba(79,180,255,0.3)" strokeWidth="1" fill="rgba(79,180,255,0.04)" />
      <circle cx="330" cy="80" r="12" stroke="rgba(79,180,255,0.3)" strokeWidth="1" fill="rgba(79,180,255,0.04)" />

      {/* Connections */}
      <line x1="140" y1="148" x2="210" y2="200" stroke="rgba(79,180,255,0.25)" strokeWidth="1.5" />
      <line x1="360" y1="148" x2="290" y2="200" stroke="rgba(79,180,255,0.25)" strokeWidth="1.5" />
      <line x1="140" y1="292" x2="210" y2="240" stroke="rgba(79,180,255,0.25)" strokeWidth="1.5" />
      <line x1="360" y1="292" x2="290" y2="240" stroke="rgba(79,180,255,0.25)" strokeWidth="1.5" />
      <line x1="250" y1="280" x2="250" y2="360" stroke="rgba(79,180,255,0.25)" strokeWidth="1.5" />
      <line x1="130" y1="156" x2="130" y2="284" stroke="rgba(79,180,255,0.15)" strokeWidth="1" />
      <line x1="370" y1="156" x2="370" y2="284" stroke="rgba(79,180,255,0.15)" strokeWidth="1" />
      <line x1="178" y1="86" x2="230" y2="170" stroke="rgba(79,180,255,0.15)" strokeWidth="1" />
      <line x1="322" y1="86" x2="270" y2="170" stroke="rgba(79,180,255,0.15)" strokeWidth="1" />

      {/* Animated pulse rings */}
      <circle cx="250" cy="220" r="80" stroke="rgba(79,180,255,0.15)" strokeWidth="1" fill="none">
        <animate attributeName="r" from="60" to="100" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="220" r="100" stroke="rgba(79,180,255,0.1)" strokeWidth="1" fill="none">
        <animate attributeName="r" from="80" to="130" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.2" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Data flow dots */}
      <circle r="3" fill="rgba(79,180,255,0.8)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M140,148 L210,200 L290,200 L360,148" />
      </circle>
      <circle r="3" fill="rgba(79,180,255,0.8)">
        <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M250,280 L250,360 L250,280 L210,240 L140,292" />
      </circle>
    </svg>
  );
}

function AutomationGraphic() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Workflow boxes */}
      <rect x="60" y="100" width="100" height="60" rx="8" stroke="rgba(13,148,136,0.5)" strokeWidth="1.5" fill="rgba(13,148,136,0.08)" />
      <text x="110" y="135" textAnchor="middle" fill="rgba(13,148,136,0.7)" fontSize="11" fontWeight="500">Input</text>

      <rect x="200" y="100" width="100" height="60" rx="8" stroke="rgba(79,180,255,0.5)" strokeWidth="1.5" fill="rgba(79,180,255,0.08)" />
      <text x="250" y="135" textAnchor="middle" fill="rgba(79,180,255,0.7)" fontSize="11" fontWeight="500">Process</text>

      <rect x="340" y="100" width="100" height="60" rx="8" stroke="rgba(13,148,136,0.5)" strokeWidth="1.5" fill="rgba(13,148,136,0.08)" />
      <text x="390" y="135" textAnchor="middle" fill="rgba(13,148,136,0.7)" fontSize="11" fontWeight="500">Output</text>

      {/* Arrows between boxes */}
      <path d="M160 130 L200 130" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <path d="M300 130 L340 130" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      {/* Gear icons */}
      <circle cx="150" cy="260" r="40" stroke="rgba(79,180,255,0.3)" strokeWidth="1.5" fill="rgba(79,180,255,0.05)">
        <animateTransform attributeName="transform" type="rotate" from="0 150 260" to="360 150 260" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="260" r="25" stroke="rgba(79,180,255,0.2)" strokeWidth="8" fill="none" strokeDasharray="12 8">
        <animateTransform attributeName="transform" type="rotate" from="0 150 260" to="360 150 260" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="260" r="8" fill="rgba(79,180,255,0.4)" />

      <circle cx="230" cy="310" r="30" stroke="rgba(13,148,136,0.3)" strokeWidth="1.5" fill="rgba(13,148,136,0.05)">
        <animateTransform attributeName="transform" type="rotate" from="360 230 310" to="0 230 310" dur="15s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="310" r="18" stroke="rgba(13,148,136,0.2)" strokeWidth="6" fill="none" strokeDasharray="8 6">
        <animateTransform attributeName="transform" type="rotate" from="360 230 310" to="0 230 310" dur="15s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="310" r="6" fill="rgba(13,148,136,0.4)" />

      {/* Connected flow lines */}
      <path d="M320 200 Q350 230 380 260 Q410 290 380 320 Q350 350 320 370" stroke="rgba(79,180,255,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M60 200 Q90 250 100 300 Q110 350 150 380" stroke="rgba(13,148,136,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="6 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Dashboard mockup */}
      <rect x="300" y="230" width="140" height="100" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
      <rect x="310" y="245" width="50" height="6" rx="2" fill="rgba(79,180,255,0.3)" />
      <rect x="310" y="260" width="120" height="1" fill="rgba(255,255,255,0.1)" />
      <rect x="310" y="272" width="30" height="40" rx="2" fill="rgba(13,148,136,0.2)" />
      <rect x="346" y="282" width="30" height="30" rx="2" fill="rgba(79,180,255,0.2)" />
      <rect x="382" y="268" width="30" height="44" rx="2" fill="rgba(13,148,136,0.15)" />

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="rgba(255,255,255,0.3)" />
        </marker>
      </defs>
    </svg>
  );
}

function IoTGraphic() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central cloud */}
      <path d="M180 220 Q180 180 220 170 Q230 140 270 140 Q310 140 320 170 Q360 175 360 210 Q370 240 340 250 L200 250 Q170 245 180 220Z" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.06)" />
      <text x="270" y="215" textAnchor="middle" fill="rgba(79,180,255,0.6)" fontSize="12" fontWeight="600">CloudIQ</text>

      {/* Device nodes */}
      {/* Sensor 1 */}
      <rect x="60" y="340" width="50" height="40" rx="6" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.08)" />
      <circle cx="85" cy="355" r="4" fill="rgba(79,180,255,0.5)">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="70" y="368" width="30" height="3" rx="1" fill="rgba(79,180,255,0.2)" />

      {/* Sensor 2 */}
      <rect x="150" y="370" width="50" height="40" rx="6" stroke="rgba(13,148,136,0.4)" strokeWidth="1.5" fill="rgba(13,148,136,0.08)" />
      <circle cx="175" cy="385" r="4" fill="rgba(13,148,136,0.5)">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <rect x="160" y="398" width="30" height="3" rx="1" fill="rgba(13,148,136,0.2)" />

      {/* Sensor 3 */}
      <rect x="245" y="380" width="50" height="40" rx="6" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.08)" />
      <circle cx="270" cy="395" r="4" fill="rgba(79,180,255,0.5)">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <rect x="255" y="408" width="30" height="3" rx="1" fill="rgba(79,180,255,0.2)" />

      {/* Sensor 4 */}
      <rect x="340" y="360" width="50" height="40" rx="6" stroke="rgba(13,148,136,0.4)" strokeWidth="1.5" fill="rgba(13,148,136,0.08)" />
      <circle cx="365" cy="375" r="4" fill="rgba(13,148,136,0.5)">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <rect x="350" y="388" width="30" height="3" rx="1" fill="rgba(13,148,136,0.2)" />

      {/* Sensor 5 */}
      <rect x="420" y="320" width="50" height="40" rx="6" stroke="rgba(79,180,255,0.4)" strokeWidth="1.5" fill="rgba(79,180,255,0.08)" />
      <circle cx="445" cy="335" r="4" fill="rgba(79,180,255,0.5)">
        <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="430" y="348" width="30" height="3" rx="1" fill="rgba(79,180,255,0.2)" />

      {/* Connection lines from devices to cloud */}
      <line x1="85" y1="340" x2="210" y2="250" stroke="rgba(79,180,255,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="175" y1="370" x2="230" y2="250" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="270" y1="380" x2="270" y2="250" stroke="rgba(79,180,255,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="365" y1="360" x2="310" y2="250" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="445" y1="320" x2="340" y2="250" stroke="rgba(79,180,255,0.2)" strokeWidth="1" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Analytics panel top-right */}
      <rect x="380" y="100" width="100" height="80" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
      <rect x="390" y="112" width="40" height="4" rx="1" fill="rgba(79,180,255,0.3)" />
      <polyline points="390,155 405,140 420,148 435,130 450,138 465,125" stroke="rgba(13,148,136,0.5)" strokeWidth="1.5" fill="none" />
      <circle cx="465" cy="125" r="3" fill="rgba(13,148,136,0.6)">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Connection from cloud to analytics */}
      <path d="M340 200 Q370 180 380 150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />

      {/* Signal waves from cloud */}
      <circle cx="270" cy="195" r="30" stroke="rgba(79,180,255,0.1)" strokeWidth="1" fill="none">
        <animate attributeName="r" from="20" to="50" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const slideGraphics = [AIAgentGraphic, AutomationGraphic, IoTGraphic];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <section
      className="relative h-screen overflow-hidden bg-primary-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slider"
    >
      {heroSlides.map((slide, index) => {
        const Graphic = slideGraphics[index];
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== current}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradientClass}`} />

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-[0.07]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            {/* Content + Graphic */}
            <div className="relative z-10 container-custom h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                {/* Text */}
                <div className="pt-20 lg:pt-0">
                  <Badge variant="white" className="mb-6">
                    {slide.badge}
                  </Badge>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
                    {slide.headline}
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    {slide.subheading}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href={slide.ctaHref} variant="white" size="lg">
                      {slide.ctaText}
                    </Button>
                    <Button href={slide.secondaryCtaHref} variant="ghost" size="lg">
                      {slide.secondaryCtaText}
                    </Button>
                  </div>
                </div>

                {/* Graphic */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full max-w-[480px] aspect-square">
                    <Graphic />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
