import React, { useEffect, useState } from "react";
import { Code, Database, Server, Cpu, GitBranch, Layers, Terminal, Zap } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tool';
  color: string;
}

const TechStack: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const techItems: TechItem[] = [
    {
      name: "Python",
      icon: <span className="text-lg">🐍</span>,
      category: 'language',
      color: "bg-[#3776AB]/20 border-[#3776AB]/50"
    },
    {
      name: "JavaScript",
      icon: <span className="text-sm font-bold">JS</span>,
      category: 'language',
      color: "bg-[#F7DF1E]/20 border-[#F7DF1E]/50"
    },
    {
      name: "TypeScript",
      icon: <span className="text-sm font-bold">TS</span>,
      category: 'language',
      color: "bg-[#3178C6]/20 border-[#3178C6]/50"
    },
    {
      name: "C++",
      icon: <span className="text-sm font-bold">C++</span>,
      category: 'language',
      color: "bg-[#00599C]/20 border-[#00599C]/50"
    },
    {
      name: "C#",
      icon: <span className="text-sm font-bold">C#</span>,
      category: 'language',
      color: "bg-[#239120]/20 border-[#239120]/50"
    },
    {
      name: "SQL",
      icon: <Database size={20} />,
      category: 'database',
      color: "bg-[#FFA500]/20 border-[#FFA500]/50"
    },
    {
      name: "React",
      icon: <span>⚛️</span>,
      category: 'frontend',
      color: "bg-[#61DAFB]/20 border-[#61DAFB]/50"
    },
    {
      name: "Node.js",
      icon: <Server size={20} />,
      category: 'backend',
      color: "bg-[#68A063]/20 border-[#68A063]/50"
    },
    {
      name: "Flask",
      icon: <span>🧪</span>,
      category: 'backend',
      color: "bg-[#000000]/20 border-[#000000]/50"
    },
    {
      name: "Django",
      icon: <Layers size={20} />,
      category: 'backend',
      color: "bg-[#092E20]/20 border-[#092E20]/50"
    },
    {
      name: "Git",
      icon: <GitBranch size={20} />,
      category: 'tool',
      color: "bg-[#F05032]/20 border-[#F05032]/50"
    },
    {
      name: "Bash",
      icon: <Terminal size={20} />,
      category: 'tool',
      color: "bg-[#4EAA25]/20 border-[#4EAA25]/50"
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".appear-animation").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'language': return 'text-blue-400';
      case 'frontend': return 'text-purple-400';
      case 'backend': return 'text-green-400';
      case 'database': return 'text-orange-400';
      case 'tool': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <section id="skills" className="py-12 md:py-24 relative">
      {/* Background elements - only show on desktop */}
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
              Technical <span className="text-blue-500">Skills</span>
              <span className="block h-1 w-1/3 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              {isMobile ? "Tap on any technology to learn more" : "Explore my orbiting skills — each planet represents a technology I've mastered"}
            </p>
          </div>
        </div>

        {isMobile ? (
          <div className="appear-animation">
            {/* Mobile Grid Layout */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {techItems.slice(0, 6).map((tech) => (
                <div
                  key={tech.name}
                  className={`w-full aspect-square ${tech.color} rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105`}
                  onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            
            {/* Active Tech Info for Mobile */}
            {activeTech && (
              <div className="glass cosmic-border p-4 rounded-lg mb-8 animate-fade-in">
                {techItems.filter(t => t.name === activeTech).map(tech => (
                  <div key={tech.name} className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center`}>
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
                  className={`w-full aspect-square ${tech.color} rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105`}
                  onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Orbit Layout */}
            <div className="appear-animation relative h-[400px] md:h-[600px] flex items-center justify-center overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Core planet */}
                <div 
                  className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full z-20 flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/30 animate-pulse-glow"
                  onMouseEnter={() => setActiveTech('CORE')}
                  onMouseLeave={() => setActiveTech(null)}
                >
                  <Zap size={24} className="animate-pulse" />
                </div>

                {/* Orbits */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={`orbit-${i}`}
                    className={`absolute rounded-full border border-white/10 opacity-50`}
                    style={{
                      width: `${i * 100 + 50}px`,
                      height: `${i * 100 + 50}px`,
                      animation: `spin ${20}s linear infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}

                {/* Tech planets */}
                {techItems.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`absolute animate-orbit-${Math.floor(index/2)+1}`}
                    style={
                      {
                        "--orbit-radius": `${Math.floor(index / 2) * 100 + 100}px`,
                        animationDelay: `${index % 2 === 0 ? '0s' : '3s'}`,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className={`w-14 h-14 ${tech.color} rounded-full flex items-center justify-center font-bold shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl`}
                      title={tech.name}
                      onMouseEnter={() => setActiveTech(tech.name)}
                      onMouseLeave={() => setActiveTech(null)}
                    >
                      {tech.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Active tech info panel */}
              {activeTech && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 glass cosmic-border p-4 rounded-lg w-full max-w-md animate-fade-in">
                  {activeTech === 'CORE' ? (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-blue-500 mb-2">Core Skills</h3>
                      <p className="text-gray-300">The foundation of my technical expertise</p>
                    </div>
                  ) : (
                    <>
                      {techItems.filter(t => t.name === activeTech).map(tech => (
                        <div key={tech.name} className="flex items-center space-x-4">
                          <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center`}>
                            {tech.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{tech.name}</h3>
                            <span className={`text-sm ${getCategoryColor(tech.category)}`}>
                              {tech.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        {/* Legend */}
        <div className="mt-8 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {Array.from(new Set(techItems.map(t => t.category))).map(category => (
            <div key={category} className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${getCategoryColor(category)}`}></div>
              <span className="text-xs md:text-sm text-gray-300">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit-1 {
          animation: orbit 20s linear infinite;
        }
        .animate-orbit-2 {
          animation: orbit 25s linear infinite reverse;
        }
        .animate-orbit-3 {
          animation: orbit 30s linear infinite;
        }
        .animate-orbit-4 {
          animation: orbit 35s linear infinite reverse;
        }
        .animate-orbit-5 {
          animation: orbit 40s linear infinite;
        }
        .animate-orbit-6 {
          animation: orbit 45s linear infinite reverse;
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
