import React, { useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 300 + index * 200);
      }
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="glass p-8 md:p-12 rounded-2xl max-w-3xl">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 opacity-0 transform translate-y-10 transition-all duration-700"
            >
              Hlulani Bliss <span className="text-space-accent">Mahlathi</span>
            </h1>

            <div className="mb-4">
              <span className="inline-block text-xs text-space-accent font-semibold px-3 py-1 rounded-full bg-space-accent/10">
                Full-stack Web Systems Engineer
              </span>
            </div>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 opacity-0 transform translate-y-10 transition-all duration-700 delay-200"
            >
              I help startups and product teams build secure, scalable web
              platforms that increase revenue and reduce operational overhead.
            </p>

            <div
              ref={buttonRef}
              className="mt-8 opacity-0 transform translate-y-10 transition-all duration-700 delay-400"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="#contact"
                  className="cosmic-border glass inline-flex items-center px-6 py-3 text-white rounded-xl bg-space-accent hover:bg-space-accent/90 transition-all duration-300 font-semibold"
                >
                  Book a free consultation
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 text-white/90 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  View my work
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          title="Scroll to About"
          aria-label="Scroll to About"
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
