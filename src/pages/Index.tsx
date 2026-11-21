import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      root.querySelectorAll<HTMLElement>("section:not(#home) h2").forEach((heading) => {
        gsap.fromTo(
          heading,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("#projects .project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            delay: (index % 3) * 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      gsap.to(".hero-art-stage", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef} className="portfolio-shell min-h-screen bg-space-dark text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
