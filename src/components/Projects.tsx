
import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
 
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Health Center Service Portal',
      description: 'Healthcare service booking system with appointment management and patient portal.',
      tech: ['Django', 'Python', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-cyan-500/30 to-blue-600/30',
      link: 'https://test-tau-green-64.vercel.app/'
    },
    {
      title: 'Student Social Network',
      description: 'Platform connecting students for collaboration, resource sharing, and community building.',
      tech: ['MERN Stack', 'Socket.io', 'AWS'],
      image: 'bg-gradient-to-br from-green-500/30 to-teal-600/30',
      link: 'https://univensocials.vercel.app/'
    },
    {
      title: 'Pizza Delivery WebApp',
      description: 'Order system with WhatsApp integration for seamless food ordering and delivery tracking.',
      tech: ['JavaScript', 'HTML/CSS', 'WhatsApp API'],
      image: 'bg-gradient-to-br from-red-500/30 to-orange-600/30',
      link: 'https://danalphluja.vercel.app/'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Small-scale e-commerce solution for artisanal products with payment processing.',
      tech: ['Flask', 'SQLite', 'Stripe API'],
      image: 'bg-gradient-to-br from-yellow-500/30 to-amber-600/30',
      link: 'https://phenomenal-torte-764818.netlify.app/'
    },
    {
      title: 'HotelY Services Platform',
      description: 'A comprehensive showcase platform for hotel services with booking features and virtual tours.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'bg-gradient-to-br from-blue-500/30 to-purple-600/30',
      link: '#'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              My <span className="text-space-accent">Projects</span>
              <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work, spanning web applications, platforms, and digital experiences.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="appear-animation glass-card overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center p-6`}>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="inline-block px-3 py-1 text-xs bg-space-accent/10 text-space-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-space-accent hover:text-white transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
