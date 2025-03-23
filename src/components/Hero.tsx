
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation on load
    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
      }
    });
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full bg-space-accent/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            Hlulani Bliss <span className="text-space-accent">Mahlathi</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 opacity-0 transform translate-y-10 transition-all duration-700 delay-200"
          >
            Software Developer crafting elegant digital experiences with code
          </p>
          
          <div 
            ref={buttonRef}
            className="mt-8 opacity-0 transform translate-y-10 transition-all duration-700 delay-400"
          >
            <a 
              href="#projects" 
              className="cosmic-border glass inline-flex items-center px-6 py-3 text-white rounded-xl hover:bg-space-accent/20 transition-all duration-300"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
