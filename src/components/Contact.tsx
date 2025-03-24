
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

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

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send email function
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_aj6gldg", // Your Service ID
        "template_2hrl3bb", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "jwAocflEQAnOt0cJQ" // Your Public Key
      );

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: "Message failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSending(false);
  };

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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
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
                    onChange={handleChange}
                    value={formData.name}
                    required
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
                    onChange={handleChange}
                    value={formData.email}
                    required
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
                  onChange={handleChange}
                  value={formData.subject}
                  required
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
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </div>

              <button
                type="submit"
                className="cosmic-border glass px-6 py-3 text-white rounded-lg hover:bg-space-accent/20 transition-all duration-300 inline-flex items-center"
                disabled={isSending}
              >
                <Mail size={18} className="mr-2" />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
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
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github size={22} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://www.facebook.com/bliss.mahlathi.9/" target="_blank" rel="noopener noreferrer">
                    <Facebook size={22} />
                  </a>
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
