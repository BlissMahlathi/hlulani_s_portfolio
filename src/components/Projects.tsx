import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Passion Mogale Borehole Drilling',
      description: 'Professional website for a borehole drilling company showcasing services, projects and contact information.',
      tech: ['HTML/CSS', 'JavaScript', 'Netlify'],
      image: 'bg-gradient-to-br from-blue-600/20 to-blue-900/20',
      link: 'https://passionmogale.netlify.app',
      featured: true
    },
    {
      title: 'Health Center Service Portal',
      description: 'Healthcare service booking system with appointment management and patient portal.',
      tech: ['Django', 'Python', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20',
      link: 'https://test-tau-green-64.vercel.app/'
    },
    {
      title: 'OGT Student Residence',
      description: 'Modern website for student accommodation with booking system and virtual tours.',
      tech: ['React', 'CSS3', 'Netlify'],
      image: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20',
      link: 'https://ogtresidence.netlify.app'
    },
    {
      title: 'Student Social Network',
      description: 'Platform connecting students for collaboration, resource sharing, and community building.',
      tech: ['MERN Stack', 'Socket.io', 'AWS'],
      image: 'bg-gradient-to-br from-green-500/20 to-teal-600/20',
      link: 'https://univensocials.vercel.app/',
      featured: true
    },
    {
      title: 'Retema Student Accommodation',
      description: 'Elegant website for student housing with gallery, amenities showcase and contact form.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20',
      link: 'https://retema.netlify.app'
    },
    {
      title: 'Pizza Delivery WebApp',
      description: 'Order system with WhatsApp integration for seamless food ordering and delivery tracking.',
      tech: ['JavaScript', 'HTML/CSS', 'WhatsApp API'],
      image: 'bg-gradient-to-br from-red-500/20 to-pink-600/20',
      link: 'https://danalphluja.vercel.app/'
    },
    {
      title: 'Hacking Alert Prank',
      description: 'Fun cybersecurity prank page that simulates a system breach with realistic effects.',
      tech: ['JavaScript', 'HTML/CSS', 'Animations'],
      image: 'bg-gradient-to-br from-gray-700/20 to-black/20',
      link: 'https://delicate-concha-2e8ec5.netlify.app',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Small-scale e-commerce solution for artisanal products with payment processing.',
      tech: ['Flask', 'SQLite', 'Stripe API'],
      image: 'bg-gradient-to-br from-yellow-500/20 to-amber-600/20',
      link: 'https://phenomenal-torte-764818.netlify.app/'
    },
    {
      title: 'HotelY Services Platform',
      description: 'Comprehensive showcase platform for hotel services with booking features and virtual tours.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'bg-gradient-to-br from-blue-500/20 to-purple-600/20',
      link: 'https://bnb-hotely.onrender.com/'
    },
    {
      title: 'Campus Eats Online Store',
      description: 'Food delivery platform for campus students with menu customization and payment integration.',
      tech: ['React', 'Node.js', 'Supabase', 'TypeScript'],
      image: 'bg-gradient-to-br from-emerald-500/20 to-green-600/20',
      link: 'https://campus-eats-five.vercel.app/'
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
    <section id="projects" className="py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-space-accent rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
              Project <span className="text-space-accent">Showcase</span>
              <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A curated collection of my diverse work, from commercial websites to innovative web applications.
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`appear-animation ${project.featured ? 'w-full' : 'w-full md:w-2/3 lg:w-1/2'} ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`glass-card overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-space-accent/20 ${project.featured ? 'border-2 border-space-accent/30' : 'border border-white/10'}`}>
                <div className={`h-64 ${project.image} flex items-center justify-center p-6 relative group`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white relative z-10 text-center">
                    {project.title}
                    {project.featured && (
                      <span className="block text-sm font-normal mt-2 text-space-accent">Featured Project</span>
                    )}
                  </h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="inline-block px-3 py-1 text-xs bg-space-accent/10 text-space-accent rounded-full hover:bg-space-accent/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-space-accent hover:text-white transition-colors duration-300 group"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2 group-hover:underline">Live Demo</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2 text-sm group-hover:underline">Code</span>
                        <Github size={16} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
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
