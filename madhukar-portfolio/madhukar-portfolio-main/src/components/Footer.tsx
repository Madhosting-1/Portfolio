
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-xl sm:text-2xl font-bold text-white">
              M<span className="text-[#4361ee]">M</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">
              Passionate Computer Science Engineering student specializing in AI & ML, 
              dedicated to creating intelligent solutions and pushing the boundaries of technology.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:madhukar@example.com"
                className="text-gray-400 dark:text-gray-500 hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 dark:text-gray-500 hover:text-[#4361ee] dark:hover:text-[#4361ee] transition-colors duration-300 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400 dark:text-gray-500">
                📧 madhukar@example.com
              </p>
              <p className="text-gray-400 dark:text-gray-500">
                📱 +91 98765 43210
              </p>
              <p className="text-gray-400 dark:text-gray-500">
                📍 Bangalore, India
              </p>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Available for internships, collaborations, and exciting AI/ML projects!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
              © {currentYear} M Madhukar. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
