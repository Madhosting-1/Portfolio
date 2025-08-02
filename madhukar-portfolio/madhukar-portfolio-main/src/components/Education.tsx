
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering (B.E)",
    major: "Computer Science Engineering (AI & ML)",
    institution: "XYZ Institute of Technology",
    location: "City, State",
    duration: "2022 - 2026",
    gpa: "8.5/10",
    status: "Currently Pursuing"
  };

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera - Stanford University",
      date: "2023",
      credential: "#ML2023STAN"
    },
    {
      title: "Deep Learning with TensorFlow",
      provider: "Udemy",
      date: "2023",
      credential: "#DL2023UDEMY"
    },
    {
      title: "Python for Data Science",
      provider: "NPTEL",
      date: "2022",
      credential: "#PY2022NPTEL"
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2023",
      credential: "#AWS2023CP"
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (2023)",
    "Best Project Award - AI Hackathon 2023",
    "Top 10% in Data Structures & Algorithms",
    "Active Member of IEEE Computer Society",
    "Participated in Google Code-in Competition",
    "Research Paper Published in Conference Proceedings"
  ];

  return (
    <section id="education" className="py-20 bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4361ee] to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and continuous learning in the field of technology
          </p>
        </div>

        {/* Main Education */}
        <div className="mb-12">
          <Card className="bg-gray-900 dark:bg-gray-800 border-gray-700 dark:border-gray-600 hover:border-[#4361ee] dark:hover:border-[#4361ee] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#4361ee] rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-xl text-[#4361ee] font-semibold">
                      {education.major}
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-600 hover:bg-green-700 text-white">
                  {education.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                  <MapPin className="h-4 w-4 text-[#4361ee]" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                  <Award className="h-4 w-4 text-green-400" />
                  <span>CGPA: {education.gpa}</span>
                </div>
              </div>
              
              <p className="text-gray-300 dark:text-gray-400 mt-4">
                Specializing in Artificial Intelligence and Machine Learning with focus on 
                deep learning, computer vision, and data science applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-yellow-400" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gray-900 dark:bg-gray-800 border-gray-700 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {cert.title}
                      </h4>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {cert.date}
                      </Badge>
                    </div>
                    <p className="text-gray-300 dark:text-gray-400 mb-2">{cert.provider}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">ID: {cert.credential}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-[#4361ee]" />
              Achievements & Activities
            </h3>
            
            <Card className="bg-gray-900 dark:bg-gray-800 border-gray-700 dark:border-gray-600">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#4361ee] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 dark:text-gray-400">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
