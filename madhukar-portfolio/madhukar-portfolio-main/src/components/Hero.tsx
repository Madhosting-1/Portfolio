
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      <ParticleBackground />
      
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-[#4361ee]/10 dark:bg-[#4361ee]/20 text-[#4361ee] rounded-full text-sm font-medium border border-[#4361ee]/20">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 text-shadow">
              M <span className="gradient-text">Madhukar</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-[#4361ee] font-semibold mb-4">
              CSE (AI & ML) Student | Aspiring AI Engineer
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-medium">"Crafting intelligent solutions with AI & algorithms"</span>
            </p>
            
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about building the future with artificial intelligence, machine learning, and innovative software development.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#4361ee] hover:bg-[#3730a3] text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="border-[#4361ee] text-[#4361ee] hover:bg-[#4361ee] hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 dark:border-[#4361ee] dark:text-[#4361ee]"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 p-2 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-8 w-8" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#4361ee] transition-all duration-300 p-2 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a 
                href="mailto:madhukar@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-[#4361ee] transition-all duration-300 p-2 hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#4361ee] shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
                  alt="M Madhukar - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4361ee] opacity-20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#4361ee] opacity-30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#4361ee] opacity-15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 dark:text-gray-400 hover:text-[#4361ee] transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
