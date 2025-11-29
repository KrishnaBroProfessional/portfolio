import React from 'react';
import { Linkedin, MessageCircle, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/krishna-g-2000786',
      color: 'hover:text-blue-500',
      bgHover: 'hover:bg-blue-500/10'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/your-number',
      color: 'hover:text-green-500',
      bgHover: 'hover:bg-green-500/10'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:krishna2gupta2000@gmail.com',
      color: 'hover:text-red-500',
      bgHover: 'hover:bg-red-500/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/KrishnaBroProfessional',
      color: 'hover:text-purple-500',
      bgHover: 'hover:bg-purple-500/10'
    }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 border-t border-blue-500/20 overflow-hidden opacity-40 hover:opacity-100 transition-opacity duration-500 ease-in-out">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Animated gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full px-6 py-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-3 text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Made with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span className="text-sm">by Krishna Gupta</span>
            </div>
            <div className="hidden md:block w-px h-3 bg-gray-600"></div>
            <div className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </div>
          </div>

          {/* Center - Social Media Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color} ${social.bgHover}`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  title={social.name}
                >
                  <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-current transition-colors duration-300" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-50 transition-all duration-300 animate-pulse"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right side - Tech stack and thank you */}
          <div className="flex items-center space-x-3 text-gray-400 text-xs">
            <div className="hidden lg:block">
              Built with React • Tailwind • Vite
            </div>
            <div className="hidden md:block w-px h-3 bg-gray-600"></div>
            <div className="animate-fade-in">
              Thank you for visiting! 🚀
            </div>
          </div>
        </div>
      </div>

      {/* Bottom animated line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50">
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
