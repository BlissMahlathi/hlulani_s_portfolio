
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Facebook, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
=======
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, Facebook } from 'lucide-react';
>>>>>>> 5b183c5 (Added draggable feature for tech stack)

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
    phone: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Save form data to local storage (as a backup)
  const saveToLocalStorage = () => {
    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  // Send email function
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    try {
      // Save a copy to local storage
      saveToLocalStorage();
      
      // Send via EmailJS
      await emailjs.send(
        "service_aj6gldg", // Your Service ID
        "template_2hrl3bb", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "jwAocflEQAnOt0cJQ" // Your Public Key
      );

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
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
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    className="bg-white/5 border-white/10 text-white focus:ring-space-accent/50"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-white/5 border-white/10 text-white focus:ring-space-accent/50"
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  className="bg-white/5 border-white/10 text-white focus:ring-space-accent/50"
                  placeholder="+27 XX XXX XXXX"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  className="bg-white/5 border-white/10 text-white focus:ring-space-accent/50"
                  placeholder="What is this regarding?"
                  onChange={handleChange}
                  value={formData.subject}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-white/5 border-white/10 text-white focus:ring-space-accent/50"
                  placeholder="Your message here..."
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </div>

              <Button
                type="submit"
                className="cosmic-border glass text-white hover:bg-space-accent/20"
                disabled={isSending}
              >
                <Mail size={18} className="mr-2" />
                {isSending ? 'Sending...' : 'Send Message'}
              </Button>

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
                <div className="flex items-start">
                  <Phone className="text-space-accent mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+27715231720" className="text-gray-300 hover:text-white transition-colors duration-300">
                      +27 71 523 1720
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
