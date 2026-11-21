import React, { useEffect, useRef } from "react";
import { Code2, Laptop, ShieldCheck, Waves } from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Web development",
    desc: "Business websites, online stores and practical web platforms.",
  },
  {
    icon: Laptop,
    title: "Desktop & OS setup",
    desc: "Operating-system installations, updates and application setup.",
  },
  {
    icon: ShieldCheck,
    title: "Security & networking",
    desc: "Cybersecurity, networking and ethical-hacking foundations.",
  },
  {
    icon: Waves,
    title: "A wider perspective",
    desc: "Physics and hydrology studies bring a systems-minded approach.",
  },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section?.querySelectorAll(".reveal-on-scroll").forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    section.querySelectorAll(".reveal-on-scroll").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-24 md:py-28" aria-label="About me">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="reveal-on-scroll mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase text-space-warm">
              <span className="h-px w-8 bg-space-warm" /> 01 / A little about me
            </p>
            <h2 className="reveal-on-scroll font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Curious by nature.<br />
              <span className="text-space-accent">Practical by design.</span>
            </h2>
            <div className="reveal-on-scroll mt-7 max-w-xl space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                I&apos;m <strong className="font-semibold text-foreground">Hlulani Bliss Mahlathi</strong>, a software and web developer who enjoys turning real needs into clear, useful digital products.
              </p>
              <p>
                My work includes business websites, food ordering, student communities, health-service portals and e-commerce. I care about thoughtful interfaces, dependable implementation and making technology feel straightforward to use.
              </p>
              <p>
                Beyond coding, I have a background in physics, I&apos;m currently studying hydrology, and I play bass guitar. I also enjoy helping people with computer setup and everyday technical support.
              </p>
            </div>
            <p className="reveal-on-scroll mt-8 max-w-lg border-l-2 border-space-accent pl-4 font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
              “A useful product should feel as good as it works.”
            </p>
          </div>

          <aside className="reveal-on-scroll pt-1 lg:pt-12" aria-label="Areas of work">
            <p className="mb-5 text-[10px] font-semibold uppercase text-muted-foreground">Where I can help</p>
            <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4 py-5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-space-accent/30 text-space-accent">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                        <span className="font-mono text-[10px] text-space-warm">0{index + 1}</span>
                      </div>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground sm:text-sm">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Also: cybersecurity, networking, ethical hacking, financial accounting and plenty of bass guitar practice.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;