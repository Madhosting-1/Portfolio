
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C++", level: 75, icon: "⚡" },
        { name: "SQL", level: 85, icon: "🗃️" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "PyTorch", level: 80, icon: "🔥" },
        { name: "Scikit-learn", level: 90, icon: "📊" },
        { name: "OpenCV", level: 75, icon: "👁️" },
        { name: "Pandas", level: 90, icon: "🐼" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Node.js", level: 80, icon: "💚" },
        { name: "HTML/CSS", level: 90, icon: "🌐" },
        { name: "Express.js", level: 75, icon: "🚀" },
        { name: "MongoDB", level: 80, icon: "🍃" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85, icon: "🔧" },
        { name: "Docker", level: 70, icon: "🐋" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Jupyter", level: 90, icon: "📓" },
        { name: "Linux", level: 80, icon: "🐧" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#4361ee] to-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical expertise spans across various domains of computer science and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-lg sm:text-2xl">{skill.icon}</span>
                          <span className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className="text-[#4361ee] font-semibold text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-200 dark:bg-gray-700"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-[#4361ee] to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 lg:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
            Other Competencies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Machine Learning", "Deep Learning", "Data Analysis", "Algorithm Design",
              "Database Design", "API Development", "Agile Methodology", "Problem Solving",
              "Team Collaboration", "Project Management", "Technical Writing", "Research"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#4361ee] to-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
