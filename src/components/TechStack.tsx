
import React, { useEffect, useState } from 'react';

interface TechItem {
  name: string;
  icon: string;
  orbitClass: string;
  delay: string;
  size: string;
}

const TechStack: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const techItems: TechItem[] = [
    { name: 'Python', icon: '🐍', orbitClass: 'animate-orbit-1', delay: '0s', size: 'w-12 h-12' },
    { name: 'JavaScript', icon: 'JS', orbitClass: 'animate-orbit-1', delay: '4s', size: 'w-10 h-10' },
    { name: 'TypeScript', icon: 'TS', orbitClass: 'animate-orbit-2', delay: '0s', size: 'w-11 h-11' },
    { name: 'C++', icon: 'C++', orbitClass: 'animate-orbit-2', delay: '3s', size: 'w-12 h-12' },
    { name: 'C#', icon: 'C#', orbitClass: 'animate-orbit-3', delay: '1s', size: 'w-10 h-10' },
    { name: 'SQL', icon: 'SQL', orbitClass: 'animate-orbit-3', delay: '5s', size: 'w-11 h-11' },
    { name: 'React', icon: '⚛️', orbitClass: 'animate-orbit-4', delay: '2s', size: 'w-12 h-12' },
    { name: 'Node.js', icon: 'N', orbitClass: 'animate-orbit-4', delay: '7s', size: 'w-10 h-10' },
    { name: 'Flask', icon: '🧪', orbitClass: 'animate-orbit-5', delay: '0s', size: 'w-10 h-10' },
    { name: 'Django', icon: 'D', orbitClass: 'animate-orbit-5', delay: '4s', size: 'w-11 h-11' },
  ];
  
  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.appear-animation').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              Technical <span className="text-space-accent">Skills</span>
              <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My technical universe — a constellation of languages, frameworks, and tools that I've mastered on my development journey.
            </p>
          </div>
        </div>
        
        <div className="appear-animation relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          {/* Solar system visualization */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Inner glow */}
            <div className="absolute w-20 h-20 rounded-full bg-space-accent animate-pulse-glow"></div>
            
            {/* Sun - core skills */}
            <div className="relative w-16 h-16 bg-space-accent rounded-full z-20 flex items-center justify-center text-sm font-bold animate-float">
              CORE
            </div>
            
            {/* Orbit paths */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={`orbit-${i}`}
                className={`absolute rounded-full border border-white/5 opacity-70`}
                style={{ 
                  width: `${i * 100 + 50}px`, 
                  height: `${i * 100 + 50}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
            
            {/* Tech items on orbit */}
            {isMounted && techItems.map((tech, index) => (
              <div
                key={tech.name}
                className={`absolute ${tech.orbitClass}`}
                style={{ 
                  '--orbit-radius': `${Math.floor(index / 2) * 100 + 100}px`,
                  animationDelay: tech.delay
                } as React.CSSProperties}
              >
                <div 
                  className={`${tech.size} glass cosmic-border rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-space-accent/10 cursor-pointer transition-transform duration-300 hover:scale-110`}
                  title={tech.name}
                >
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
