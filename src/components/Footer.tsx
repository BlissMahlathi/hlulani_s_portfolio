
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
            <p className="text-sm text-gray-400 mt-2">Developer | Musician | Tech Enthusiast</p>
            <p className="text-xs text-gray-500 mt-1">Bass Guitar Player & Coding Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© {currentYear} Hlulani Bliss Mahlathi. All rights reserved.</p>
            <p className="mt-1">
              <a href="tel:+27715231720" className="hover:text-white transition-colors duration-300">+27 71 523 1720</a> | 
              <a href="mailto:blissmahlathi37@gmail.com" className="ml-2 hover:text-white transition-colors duration-300">blissmahlathi37@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
