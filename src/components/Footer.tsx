
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              <span className="text-space-accent">H</span>lulani<span className="text-space-accent">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© {currentYear} Hlulani Bliss Mahlathi. All rights reserved.</p>
            <p className="mt-1">Software Developer | Web Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
