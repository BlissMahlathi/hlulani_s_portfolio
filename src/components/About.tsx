import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
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
                I’m Hlulani Bliss Mahlathi — a Full-stack Web Systems Engineer
                who builds secure, scalable products for startups and small
                teams. My path to tech started in science, where systems
                thinking and a deep appreciation for data shaped how I approach
                engineering.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I focus on shipping reliable systems: fast frontend interfaces
                that connect with resilient backend APIs and infrastructure that
                survives real-world pressure. I care about measurable outcomes —
                increasing conversions, reducing operating costs, and making
                systems easier to maintain.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My approach blends an engineer's discipline and a scientist's
                curiosity. I thrive on tackling ambiguous problems and turning
                them into products that users and businesses rely on.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="appear-animation relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-space-accent/10 animate-pulse-glow"></div>
              <div className="absolute inset-2 rounded-full glass cosmic-border overflow-hidden flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full bg-space-dark flex items-center justify-center text-4xl font-bold text-space-accent">
                  HM
                </div>
              </div>
            </div>
            <div className="mt-6 glass p-4 rounded-lg cosmic-border w-full max-w-sm text-left">
              <h4 className="font-semibold text-space-accent mb-2">
                Impact highlights
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  • Delivered products used by{" "}
                  <span className="text-white font-medium">— add metric —</span>{" "}
                  users/month
                </li>
                <li>
                  • Helped teams increase online conversions by{" "}
                  <span className="text-white font-medium">— add % —</span>
                </li>
                <li>
                  • Reduced operations or dev time by{" "}
                  <span className="text-white font-medium">— add hours —</span>{" "}
                  per month
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Add real metrics to build trust — even estimates are powerful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
