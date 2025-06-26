import React, { useEffect, useState } from "react";
import { Code, Database, Server, Cpu, GitBranch, Layers, Terminal, Zap } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tool';
  orbitClass: string;
  delay: string;
  size: string;
  color: string;
}

const TechStack: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [orbitSpeed, setOrbitSpeed] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techItems: TechItem[] = [
    {
      name: "Python",
      icon: <span className="text-lg">🐍</span>,
      category: 'language',
      orbitClass: "animate-orbit-1",
      delay: "0s",
      size: "w-10 h-10 md:w-14 md:h-14",
      color: "bg-[#3776AB]/20 border-[#3776AB]/50"
    },
    // ... (keep other tech items the same but adjust sizes)
  ];

  useEffect(() => {
    setIsMounted(true);
    // ... (keep existing intersection observer logic)
  }, []);

  const getCategoryColor = (category: string) => {
    // ... (keep existing category color logic)
  };

  const handleTechInteraction = (techName: string) => {
    if (isMobile) {
      setActiveTech(activeTech === techName ? null : techName);
    } else {
      setActiveTech(techName);
    }
  };

  return (
    <section id="skills" className="py-12 md:py-24 overflow-hidden relative">
      {/* Mobile background elements are simpler */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-float-slower"></div>
        </div>
      )}

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-16">
          <div className="appear-animation">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 inline-block relative">
              Technical <span className="text-space-accent">Universe</span>
              <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Explore my orbiting skills — tap/click on any technology
            </p>
          </div>
        </div>

        {/* Simplified controls for mobile */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="glass p-1 md:p-2 rounded-full flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
            <button 
              onClick={() => setOrbitSpeed(Math.max(0.5, orbitSpeed - 0.5))}
              className="px-2 md:px-3 py-0 md:py-1 rounded-full hover:bg-white/10 transition"
            >
              -
            </button>
            <span className="w-12 md:w-16 text-center">Speed: {orbitSpeed}x</span>
            <button 
              onClick={() => setOrbitSpeed(Math.min(3, orbitSpeed + 0.5))}
              className="px-2 md:px-3 py-0 md:py-1 rounded-full hover:bg-white/10 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Mobile alternative layout */}
        {isMobile ? (
          <div className="relative h-auto">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {techItems.slice(0, 6).map((tech) => (
                <div
                  key={tech.name}
                  className={`${tech.size} ${tech.color} rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer transition-all duration-300 active:scale-90`}
                  onClick={() => handleTechInteraction(tech.name)}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            
            {activeTech && (
              <div className="glass cosmic-border p-4 rounded-lg mb-8 animate-fade-in">
                {techItems.filter(t => t.name === activeTech).map(tech => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <div className={`${tech.size} ${tech.color} rounded-full flex items-center justify-center`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{tech.name}</h3>
                      <span className={`text-xs ${getCategoryColor(tech.category)}`}>
                        {tech.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-3 gap-4">
              {techItems.slice(6).map((tech) => (
                <div
                  key={tech.name}
                  className={`${tech.size} ${tech.color} rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer transition-all duration-300 active:scale-90`}
                  onClick={() => handleTechInteraction(tech.name)}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop orbit layout
          <div className="appear-animation relative h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
            {/* ... (keep desktop orbit layout from previous version) */}
          </div>
        )}

        {/* Legend - simplified for mobile */}
        <div className="mt-8 md:mt-16 flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
          {Array.from(new Set(techItems.map(t => t.category))).map(category => (
            <div key={category} className="flex items-center">
              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mr-1 md:mr-2 ${getCategoryColor(category)}`}></div>
              <span className="text-gray-300">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .animate-orbit-1, .animate-orbit-2, .animate-orbit-3,
          .animate-orbit-4, .animate-orbit-5, .animate-orbit-6 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
