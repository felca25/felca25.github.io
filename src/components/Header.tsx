import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const Header = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  return (
    <nav className="border-b border-gray-200 fixed top-0 left-0 w-full z-50 bg-white bg-opacity-95 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
        <div className="flex flex-row items-center gap-1 sm:flex-row sm:items-center sm:gap-0">
          <div className="text-xl font-semibold tracking-tight flex-1" style={{fontWeight: 700, color: siteConfig.primaryColor}}>
            <span className="block sm:hidden">{siteConfig.name}</span>
            <span className="hidden sm:block">{siteConfig.name}</span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 sm:ml-auto mt-0 sm:mt-0">
            {/* Only show nav and social links on sm and up */}
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-500 hover:text-[#182E6F] transition-colors">Portfolio</a>
              <a href="#blog" className="text-gray-500 hover:text-[#182E6F] transition-colors">Blog</a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#182E6F] transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#182E6F] transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <Button
              style={{
                backgroundColor: siteConfig.ctaColor,
                color: '#fff',
                border: 'none',
                '--tw-ring-color': siteConfig.ctaColor
              } as React.CSSProperties}
              className="ml-2 hover:brightness-110 focus:ring-2 focus:ring-offset-2 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded transition-colors"
              size="sm"
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
