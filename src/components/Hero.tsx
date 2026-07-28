import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const socialLinks = {
  github: "https://github.com/BlissMahlathi",
  linkedin: "https://linkedin.com/in/yourusername",
};

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      aria-label="Introduction"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="glass p-8 md:p-12 rounded-2xl max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-700 ease-out ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Hlulani Bliss <span className="text-space-accent">Mahlathi</span>
            </h1>

            <div
              className={`mb-4 transition-all duration-700 ease-out delay-200 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block text-xs text-space-accent font-semibold px-3 py-1 rounded-full bg-space-accent/10">
                Full-stack Web Systems Engineer
              </span>
            </div>

            <p
              className={`text-lg md:text-xl text-gray-300 max-w-2xl mb-6 transition-all duration-700 ease-out delay-[400ms] ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              I help startups and product teams build secure, scalable web
              platforms that increase revenue and reduce operational overhead.
            </p>

            <div
              className={`mt-8 transition-all duration-700 ease-out delay-[600ms] ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="#contact"
                  className="cosmic-border glass inline-flex items-center px-6 py-3 text-white rounded-xl bg-space-accent hover:bg-space-accent/90 focus:ring-2 focus:ring-space-accent focus:ring-offset-2 focus:ring-offset-space-dark transition-all duration-300 font-semibold"
                >
                  Book a free consultation
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 text-white/90 rounded-xl border border-white/10 hover:bg-white/5 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-space-dark transition-all duration-300"
                >
                  View my work
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-space-accent rounded-full p-1 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
