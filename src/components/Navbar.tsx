import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const socialLinks = {
  github: "https://github.com/BlissMahlathi",
  linkedin: "https://linkedin.com/in/hlulani-mahlathi",
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const memoizedNavLinks = useMemo(() => navLinks, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-lg" : "py-6 bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded"
          >
            <span className="text-space-accent">H</span>lulani
            <span className="text-space-accent">.</span>
          </a>
          <span className="hidden md:inline-block text-xs ml-3 text-gray-400">
            Full-stack Web Systems Engineer
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {memoizedNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-space-accent focus:text-space-accent focus:outline-none focus:ring-2 focus:ring-space-accent rounded px-1 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/10">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              className="ml-3 cosmic-border glass px-4 py-2 rounded-md text-white text-sm hover:bg-space-accent/90 focus:outline-none focus:ring-2 focus:ring-space-accent focus:ring-offset-2 focus:ring-offset-space-dark transition"
            >
              Book a free consultation
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded p-1 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-1">
          {memoizedNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-300 hover:text-white hover:bg-white/5 focus:text-white focus:bg-white/5 focus:outline-none rounded-lg px-3 py-3 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded p-1 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded p-1 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={closeMenu}
              className="cosmic-border glass px-4 py-2 rounded-md text-white text-sm hover:bg-space-accent/90 transition"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
