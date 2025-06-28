import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{siteConfig.name}</h3>
            <p className="text-sm text-gray-500">{siteConfig.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#182E6F] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#182E6F] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <Button
              style={{
                backgroundColor: siteConfig.primaryColor,
                color: '#fff',
                border: 'none',
                '--tw-ring-color': siteConfig.ctaColor
              } as React.CSSProperties}
              className="hover:brightness-110 focus:ring-2 focus:ring-offset-2 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded transition-colors"
              size="sm"
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
