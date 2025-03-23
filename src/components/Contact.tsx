
import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="appear-animation text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Get In <span className="text-space-accent">Touch</span>
            <span className="block h-1 w-1/3 bg-space-accent mt-2 mx-auto"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="appear-animation lg:w-1/2 glass p-8 rounded-xl cosmic-border">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-accent/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-accent/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-accent/50 transition-all duration-300"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-accent/50 transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="cosmic-border glass px-6 py-3 text-white rounded-lg hover:bg-space-accent/20 transition-all duration-300 inline-flex items-center"
              >
                <Mail size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="appear-animation lg:w-1/2">
            <div className="glass p-8 rounded-xl cosmic-border h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of the channels below. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-space-accent mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:blissmahlathi37@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                      blissmahlathi37@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <span className="text-space-accent mr-4 flex-shrink-0">📱</span>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone/WhatsApp</h4>
                    <a href="tel:+27715231720" className="text-gray-300 hover:text-white transition-colors duration-300">
                      +27 71 523 1720
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Available on WhatsApp for quick chats</p>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <span className="text-space-accent mr-4 flex-shrink-0">💻</span>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Services</h4>
                    <p className="text-gray-300">
                      OS installations, system updates, desktop application setups, and software development
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-space-accent/20 transition-all duration-300"
                    >
                      <Github size={22} />
                    </a>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-space-accent/20 transition-all duration-300"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a 
                      href="https://www.facebook.com/bliss.mahlathi.9/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-space-accent/20 transition-all duration-300"
                    >
                      <Facebook size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
