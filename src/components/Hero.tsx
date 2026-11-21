import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "./HeroScene";

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="home"
      className="relative isolate min-h-[790px] overflow-hidden px-0 pb-24 pt-28 sm:min-h-[820px] md:min-h-[850px] md:pt-32"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-20 left-[7%] top-28 hidden w-px bg-foreground/10 md:block" />
        <div className="absolute right-[7%] top-28 hidden h-16 w-px bg-foreground/10 md:block" />
        <div className="absolute bottom-24 right-[7%] hidden h-px w-16 bg-space-accent/70 md:block" />
      </div>

      <HeroScene />

      <div className="container relative z-10 mx-auto flex min-h-[640px] items-center px-5 sm:px-8 md:min-h-[690px] lg:px-10">
        <div className="max-w-[650px] pb-20 md:pb-8">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-space-accent"
          >
            <span className="h-px w-9 bg-space-accent" />
            Software &amp; web developer
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="max-w-[650px] font-display text-5xl font-medium leading-[0.98] text-foreground sm:text-6xl md:text-7xl lg:text-[82px]"
          >
            Hlulani Bliss
            <br />
            <span className="text-space-accent">Mahlathi</span>
            <span className="text-space-warm">.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
            className="mt-6 max-w-[440px] text-base leading-7 text-muted-foreground sm:text-lg"
          >
            I build thoughtful digital products — from polished business websites to practical platforms that solve real problems.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.28 }}
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-space-accent px-5 text-space-dark hover:bg-space-accent/90"
            >
              <a href="#projects">
                Explore my work <ArrowRight size={16} />
              </a>
            </Button>
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-foreground/25 pb-1 text-sm font-medium text-foreground transition-colors hover:border-space-warm hover:text-space-warm"
            >
              Start a conversation <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.5 }}
            className="mt-12 flex items-center gap-5 border-t border-foreground/10 pt-5 text-[10px] font-semibold uppercase text-muted-foreground sm:mt-16"
          >
            <span>Web development</span>
            <span className="h-1 w-1 rounded-full bg-space-warm" />
            <span>Systems &amp; support</span>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={14} />
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;