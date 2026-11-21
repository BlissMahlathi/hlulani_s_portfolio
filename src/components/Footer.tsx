import React from "react";
import { Facebook, Github, Linkedin, Mail, Music2, Phone, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 text-foreground" aria-label="Back to top">
              <span className="flex h-9 w-9 items-center justify-center border border-space-accent/70 font-display text-lg text-space-accent">H</span>
              <span className="text-sm font-semibold uppercase">Hlulani Mahlathi</span>
            </a>
            <p className="mt-4 max-w-2xl text-xs leading-6 text-muted-foreground sm:text-sm">
              Software &amp; web developer · Physics background · Hydrology student · Cybersecurity · Networking · Ethical hacking · Financial accounting
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs text-space-warm">
              <Music2 size={14} /> Bass guitar, code and curious ideas.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <div className="flex items-center gap-4">
              <a href="https://github.com/BlissMahlathi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted-foreground transition-colors hover:text-space-accent"><Github size={18} /></a>
              <a href="https://linkedin.com/in/hlulani-mahlathi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted-foreground transition-colors hover:text-space-accent"><Linkedin size={18} /></a>
              <a href="https://www.facebook.com/bliss.mahlathi.9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile" className="text-muted-foreground transition-colors hover:text-space-accent"><Facebook size={18} /></a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <a href="tel:+27715231720" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Phone size={13} /> +27 71 523 1720</a>
              <a href="mailto:blissmahlathi37@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Mail size={13} /> Email me <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-foreground/10 pt-4 text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Hlulani Bliss Mahlathi</p>
          <a href="#home" className="transition-colors hover:text-space-accent">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;