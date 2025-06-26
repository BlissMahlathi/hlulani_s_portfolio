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

  const techItems: TechItem[] = [
    {
      name: "Python",
      icon: <span className="text-lg">🐍</span>,
      category: 'language',
      orbitClass: "animate-orbit-1",
      delay: "0s",
      size: "w-14 h-14",
      color: "bg-[#3776AB]/20 border-[#3776AB]/50"
    },
    {
      name: "JavaScript",
      icon: <span className="text-sm font-bold">JS</span>,
      category: 'language',
      orbitClass: "animate-orbit-1",
      delay: "4s",
      size: "w-12 h-12",
      color: "bg-[#F7DF1E]/20 border-[#F7DF1E]/50"
    },
    {
      name: "TypeScript",
      icon: <span className="text-sm font-bold">TS</span>,
      category: 'language',
      orbitClass: "animate-orbit-2",
      delay: "0s",
      size: "w-12 h-12",
      color: "bg-[#3178C6]/20 border-[#3178C6]/50"
    },
    {
      name: "C++",
      icon: <span className="text-sm font-bold">C++</span>,
      category: 'language',
      orbitClass: "animate-orbit-2",
      delay: "3s",
      size: "w-14 h-14",
      color: "bg-[#00599C]/20 border-[#00599C]/50"
    },
    {
      name: "C#",
      icon: <span className="text-sm font-bold">C#</span>,
      category: 'language',
      orbitClass: "animate-orbit-3",
      delay: "1s",
      size: "w-12 h-12",
      color: "bg-[#239120]/20 border-[#239120]/50"
    },
    {
      name: "SQL",
      icon: <Database size={20} />,
      category: 'database',
      orbitClass: "animate-orbit-3",
      delay: "5s",
      size: "w-12 h-12",
      color: "bg-[#FFA500]/20 border-[#FFA500]/50"
    },
    {
      name: "React",
      icon: <span>⚛️</span>,
      category: 'frontend',
      orbitClass: "animate-orbit-4",
      delay: "2s",
      size: "w-14 h-14",
      color: "bg-[#61DAFB]/20 border-[#61DAFB]/50"
    },
    {
      name: "Node.js",
      icon: <Server size={20} />,
      category: 'backend',
      orbitClass: "animate-orbit-4",
      delay: "7s",
      size: "w-12 h-12",
      color: "bg-[#68A063]/20 border-[#68A063]/50"
    },
    {
      name: "Flask",
      icon: <span>🧪</span>,
      category: 'backend',
      orbitClass: "animate-orbit-5",
      delay: "0s",
      size: "w-12 h-12",
      color: "bg-[#000000]/20 border-[#000000]/50"
    },
    {
      name: "Django",
      icon: <Layers size={20} />,
      category: 'backend',
      orbitClass: "animate-orbit-5",
      delay: "4s",
      size: "w-12 h-12",
      color: "bg-[#092E20]/20 border-[#092E20]/50"
    },
    {
      name: "Git",
      icon: <GitBranch size={20} />,
      category: 'tool',
      orbitClass: "animate-orbit-6",
      delay: "1s",
      size: "w-12 h-12",
      color: "bg-[#F05032]/20 border-[#F05032]/50"
    },
    {
      name: "Bash",
      icon: <Terminal size={20} />,
      category: 'tool',
      orbitClass: "animate-orbit-6",
      delay: "5s",
      size: "w-12 h-12",
      color: "bg-[#4EAA25]/20 border-[#4EAA25]/50"
    },
  ];

  useEffect(() => {
    setIsMounted(true);

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
      default: return 'text-space-accent';
    }
  };

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-float-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              Technical <span className="text-space-accent">Universe</span>
              <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my orbiting skills — each planet represents a technology I've mastered.
            </p>
          </div>
        </div>

        {/* Orbit speed controls */}
        <div className="flex justify-center mb-8">
          <div className="glass p-2 rounded-full flex items-center space-x-2">
            <button 
              onClick={() => setOrbitSpeed(Math.max(0.5, orbitSpeed - 0.5))}
              className="px-3 py-1 rounded-full hover:bg-white/10 transition"
            >
              -
            </button>
            <span className="text-sm w-16 text-center">Speed: {orbitSpeed}x</span>
            <button 
              onClick={() => setOrbitSpeed(Math.min(3, orbitSpeed + 0.5))}
              className="px-3 py-1 rounded-full hover:bg-white/10 transition"
            >
              +
            </button>
          </div>
        </div>

        <div className="appear-animation relative h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Core planet */}
            <div 
              className="relative w-20 h-20 bg-gradient-to-br from-space-accent to-purple-600 rounded-full z-20 flex items-center justify-center text-white font-bold shadow-xl shadow-space-accent/30 animate-pulse-glow"
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
                  animation: `spin ${20/orbitSpeed}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

            {/* Tech planets */}
            {isMounted &&
              techItems.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.orbitClass}`}
                  style={
                    {
                      "--orbit-radius": `${Math.floor(index / 2) * 100 + 100}px`,
                      "--animation-speed": `${orbitSpeed}`,
                      animationDelay: tech.delay,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`${tech.size} ${tech.color} rounded-full flex items-center justify-center font-bold shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl`}
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
                  <h3 className="text-xl font-bold text-space-accent mb-2">Core Skills</h3>
                  <p className="text-gray-300">The foundation of my technical expertise</p>
                </div>
              ) : (
                <>
                  {techItems.filter(t => t.name === activeTech).map(tech => (
                    <div key={tech.name} className="flex items-center space-x-4">
                      <div className={`${tech.size} ${tech.color} rounded-full flex items-center justify-center`}>
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

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {Array.from(new Set(techItems.map(t => t.category))).map(category => (
            <div key={category} className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${getCategoryColor(category)}`}></div>
              <span className="text-sm text-gray-300">{category}</span>
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
          animation: orbit ${20 / orbitSpeed}s linear infinite;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-orbit-2 {
          animation: orbit ${25 / orbitSpeed}s linear infinite reverse;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-orbit-3 {
          animation: orbit ${30 / orbitSpeed}s linear infinite;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-orbit-4 {
          animation: orbit ${35 / orbitSpeed}s linear infinite reverse;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-orbit-5 {
          animation: orbit ${40 / orbitSpeed}s linear infinite;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-orbit-6 {
          animation: orbit ${45 / orbitSpeed}s linear infinite reverse;
          animation-delay: var(--animation-delay, 0s);
        }
      `}</style>
    </section>
  );
};

export default TechStack;
