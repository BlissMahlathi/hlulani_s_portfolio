import React, { useEffect, useMemo, useState } from "react";
import { Database, Minus, Plus, Zap } from "lucide-react";
import {
  SiCplusplus,
  SiCsharp,
  SiDjango,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

type TechCategory = "language" | "frontend" | "backend" | "database" | "tool";

interface TechItem {
  name: string;
  icon: IconType | typeof Database;
  category: TechCategory;
  ring: number;
}

const techItems: TechItem[] = [
  { name: "Python", icon: SiPython, category: "language", ring: 0 },
  { name: "JavaScript", icon: SiJavascript, category: "language", ring: 0 },
  { name: "TypeScript", icon: SiTypescript, category: "language", ring: 1 },
  { name: "C++", icon: SiCplusplus, category: "language", ring: 1 },
  { name: "C#", icon: SiCsharp, category: "language", ring: 2 },
  { name: "HTML", icon: SiHtml5, category: "frontend", ring: 2 },
  { name: "SQL", icon: Database, category: "database", ring: 3 },
  { name: "React", icon: SiReact, category: "frontend", ring: 3 },
  { name: "Node.js", icon: SiNodedotjs, category: "backend", ring: 4 },
  { name: "MongoDB", icon: SiMongodb, category: "database", ring: 4 },
  { name: "Flask", icon: SiFlask, category: "backend", ring: 5 },
  { name: "Django", icon: SiDjango, category: "backend", ring: 5 },
  { name: "Express", icon: SiExpress, category: "backend", ring: 5 },
];

const rings = [
  { radius: 52, duration: 18 },
  { radius: 88, duration: 22 },
  { radius: 124, duration: 26 },
  { radius: 160, duration: 30 },
  { radius: 196, duration: 34 },
  { radius: 232, duration: 38 },
];

const categoryConfig: Record<
  TechCategory,
  { label: string; classes: string; dot: string }
> = {
  language: {
    label: "Languages",
    classes: "border-space-accent/35 bg-space-accent/10 text-space-accent",
    dot: "bg-space-accent",
  },
  frontend: {
    label: "Frontend",
    classes: "border-space-warm/35 bg-space-warm/10 text-space-warm",
    dot: "bg-space-warm",
  },
  backend: {
    label: "Backend",
    classes: "border-border bg-secondary/60 text-foreground",
    dot: "bg-foreground/75",
  },
  database: {
    label: "Data",
    classes: "border-space-blue/45 bg-space-blue/15 text-foreground",
    dot: "bg-space-blue",
  },
  tool: {
    label: "Tools",
    classes: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
  },
};

const TechStack: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [orbitSpeed, setOrbitSpeed] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const orbitItems = useMemo(() => {
    const counts = new Map<number, number>();
    const positions = new Map<number, number>();
    techItems.forEach((item) => counts.set(item.ring, (counts.get(item.ring) ?? 0) + 1));
    return techItems.map((item) => {
      const position = positions.get(item.ring) ?? 0;
      positions.set(item.ring, position + 1);
      return {
        ...item,
        orbit: rings[item.ring],
        delay: position * (rings[item.ring].duration / (counts.get(item.ring) ?? 1)),
      };
    });
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 md:py-28" aria-label="Technical skills">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase text-space-warm">
              <span className="h-px w-8 bg-space-warm" /> 02 / Technical range
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Tools for ideas that <span className="text-space-accent">move.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Languages, frameworks and data tools I use to shape dependable web products — arranged around the work, not just the buzzwords.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <span key={key} className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
                  {config.label}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 border-y border-foreground/10 py-3">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Slow down technology orbits"
                onClick={() => setOrbitSpeed((speed) => Math.max(0.5, +(speed - 0.5).toFixed(1)))}
                className="h-8 w-8 text-muted-foreground hover:text-space-accent"
              >
                <Minus size={14} />
              </Button>
              <span className="min-w-28 text-center text-xs text-muted-foreground">
                Orbit speed <strong className="ml-1 font-mono text-foreground">{orbitSpeed.toFixed(1)}×</strong>
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Speed up technology orbits"
                onClick={() => setOrbitSpeed((speed) => Math.min(3, +(speed + 0.5).toFixed(1)))}
                className="h-8 w-8 text-muted-foreground hover:text-space-accent"
              >
                <Plus size={14} />
              </Button>
            </div>
          </div>

          {prefersReducedMotion ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {techItems.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className={`flex items-center gap-3 border px-3 py-3 ${categoryConfig[tech.category].classes}`}>
                    <Icon size={18} aria-hidden="true" />
                    <span className="text-xs font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="relative mx-auto flex h-[390px] w-full max-w-[560px] items-center justify-center sm:h-[510px] md:h-[560px]" aria-label="Animated technology orbit">
              <div className="absolute inset-0 flex scale-[0.55] items-center justify-center sm:scale-[0.75] md:scale-[0.88] lg:scale-100">
                {rings.map((ring, index) => (
                  <div
                    key={ring.radius}
                    className="absolute rounded-full border border-foreground/10"
                    style={{ width: ring.radius * 2, height: ring.radius * 2, opacity: 0.9 - index * 0.08 }}
                  />
                ))}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-space-accent/70 bg-space-dark text-space-accent shadow-[0_0_0_8px_hsl(var(--space-accent)/0.06)]">
                  <Zap size={22} aria-hidden="true" />
                </div>

                {orbitItems.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-orbit-${tech.ring + 1}`}
                      style={{
                        "--orbit-radius": `${tech.orbit.radius}px`,
                        animationDuration: `${tech.orbit.duration / orbitSpeed}s`,
                        animationDelay: `${tech.delay}s`,
                        animationPlayState: prefersReducedMotion ? "paused" : "running",
                      } as React.CSSProperties}
                    >
                      <button
                        type="button"
                        title={tech.name}
                        aria-label={`${tech.name}, ${categoryConfig[tech.category].label}`}
                        aria-pressed={activeTech === tech.name}
                        onFocus={() => setActiveTech(tech.name)}
                        onBlur={() => setActiveTech(null)}
                        onMouseEnter={() => setActiveTech(tech.name)}
                        onMouseLeave={() => setActiveTech(null)}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-space-accent ${categoryConfig[tech.category].classes}`}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute bottom-2 left-1/2 min-h-11 w-full max-w-[260px] -translate-x-1/2 text-center" aria-live="polite">
                {activeTech ? (
                  <p className="border-t border-foreground/10 pt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{activeTech}</span>
                    <span className="mx-2 text-space-warm">/</span>
                    {categoryConfig[techItems.find((tech) => tech.name === activeTech)?.category ?? "tool"].label}
                  </p>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;