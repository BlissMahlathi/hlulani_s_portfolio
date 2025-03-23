
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="appear-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                About <span className="text-space-accent">Me</span>
                <span className="block h-1 w-1/3 bg-space-accent mt-2"></span>
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Hlulani Bliss Mahlathi, a passionate software developer with a focus on creating 
                elegant, user-centric applications. My journey in tech is driven by a desire to solve 
                real-world problems through innovative digital solutions.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                With expertise across multiple programming languages and frameworks, I enjoy the 
                challenge of learning new technologies and applying them to create seamless user 
                experiences. I believe in clean code, thoughtful architecture, and the power of 
                technology to transform ideas into reality.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you might find me exploring new tech trends, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="appear-animation relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-space-accent/10 animate-pulse-glow"></div>
              <div className="absolute inset-2 rounded-full glass cosmic-border overflow-hidden flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full bg-space-dark flex items-center justify-center text-4xl font-bold text-space-accent">
                  HM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
