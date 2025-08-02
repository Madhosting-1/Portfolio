
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Lightbulb } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#4361ee]" />,
      title: "Artificial Intelligence",
      description: "Passionate about machine learning algorithms and AI applications"
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-[#4361ee]" />,
      title: "Software Development",
      description: "Building robust applications with modern technologies"
    },
    {
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8 text-[#4361ee]" />,
      title: "Data Science",
      description: "Extracting insights from data to solve real-world problems"
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-[#4361ee]" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#4361ee] to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a passionate <span className="text-[#4361ee] font-semibold">Computer Science Engineering student</span> specializing in 
                <span className="text-[#4361ee] font-semibold"> Artificial Intelligence and Machine Learning</span>, currently pursuing my Bachelor of Engineering (B.E).
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mt-4 text-gray-600 dark:text-gray-400">
                My journey in technology is driven by curiosity and a desire to create intelligent solutions that can make a difference. 
                I'm particularly fascinated by the intersection of AI, data science, and software development.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mt-4 text-gray-600 dark:text-gray-400">
                When I'm not coding or studying algorithms, you'll find me exploring the latest research papers, 
                contributing to open-source projects, or brainstorming the next big idea in tech.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg border-l-4 border-[#4361ee] shadow-md transition-colors duration-300">
              <p className="text-base sm:text-lg italic text-gray-600 dark:text-gray-300">
                "The future belongs to those who understand both the art and science of artificial intelligence."
              </p>
              <p className="text-sm text-[#4361ee] mt-2 font-medium">- My Philosophy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-[#4361ee] dark:hover:border-[#4361ee] hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
