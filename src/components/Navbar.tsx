import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <motion.nav
      animate={{ backgroundColor: scrolled ? "rgba(17, 20, 18, 0.94)" : "rgba(17, 20, 18, 0)" }}
      transition={{ duration: reduceMotion ? 0 : 0.25 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex h-[68px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 text-foreground"
          aria-label="Hlulani Mahlathi, home"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-space-accent/70 font-display text-lg text-space-accent transition-colors group-hover:bg-space-accent group-hover:text-space-dark">
            H
          </span>
          <span className="hidden text-xs font-semibold uppercase sm:inline">Hlulani Mahlathi</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-space-accent"
            >
              <span className="mr-1.5 text-[9px] text-space-warm">0{index + 1}</span>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 border border-foreground/20 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-space-accent hover:text-space-accent"
          >
            Let&apos;s talk <ArrowUpRight size={13} />
          </a>
        </div>

        <Button
          ref={menuButtonRef}
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((open) => !open)}
          className="text-foreground hover:bg-foreground/10 hover:text-space-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="overflow-hidden border-t border-foreground/10 bg-background md:hidden"
          >
            <div className="container mx-auto flex flex-col px-5 pb-5 pt-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center border-b border-foreground/10 py-3.5 text-sm font-medium text-foreground"
                >
                  <span className="mr-4 font-mono text-[10px] text-space-warm">0{index + 1}</span>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-space-accent"
              >
                Start a conversation <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;