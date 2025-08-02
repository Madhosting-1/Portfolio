
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation with AI",
      description: "IoT-based smart home system with AI-powered voice recognition and automated device control using machine learning algorithms.",
      tech: ["Python", "TensorFlow", "Raspberry Pi", "Arduino", "Flask"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Data visualization platform with predictive modeling capabilities for business intelligence and decision making.",
      tech: ["React", "Python", "Scikit-learn", "D3.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO algorithm with custom trained models for specific use cases.",
      tech: ["Python", "OpenCV", "YOLO", "PyTorch", "Flask"],
      github: "https://github.com",
      demo: null,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Chatbot with NLP",
      description: "Intelligent chatbot with natural language processing capabilities, context understanding, and sentiment analysis.",
      tech: ["Python", "NLTK", "Transformers", "FastAPI", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Stock Price Prediction Model",
      description: "Machine learning model for stock price prediction using historical data and technical indicators with LSTM networks.",
      tech: ["Python", "TensorFlow", "Pandas", "NumPy", "Streamlit"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "photo-1470071459604-3b5ec3a7fe05"
    },
    {
      title: "E-Learning Platform",
      description: "Full-stack web application for online learning with video streaming, quizzes, and progress tracking features.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4361ee] to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills in AI, ML, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 dark:bg-gray-800 border-gray-700 dark:border-gray-600 hover:border-[#4361ee] dark:hover:border-[#4361ee] transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white group-hover:text-[#4361ee] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#4361ee]/20 text-[#4361ee] text-xs rounded-full border border-[#4361ee]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 dark:border-gray-500 text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="bg-[#4361ee] hover:bg-[#3730a3] text-white flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
