import React from 'react';
import { BarChart3, FileSpreadsheet, Database, LineChart, Lightbulb, Users, BookOpen, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Statistical Analysis', level: 95, icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Python/R Programming', level: 90, icon: <GitBranch className="w-5 h-5" /> },
    { name: 'SQL & Database Management', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'Data Visualization', level: 90, icon: <LineChart className="w-5 h-5" /> },
    { name: 'Excel/Spreadsheet Analysis', level: 92, icon: <FileSpreadsheet className="w-5 h-5" /> },
    { name: 'Machine Learning', level: 80, icon: <Lightbulb className="w-5 h-5" /> },
  ];

  const softSkills = [
    'Cross-functional Communication',
    'Project Management',
    'Research Methodology',
    'Medical Terminology',
    'Problem Solving',
    'Data Ethics & Privacy',
    'Stakeholder Management',
    'Technical Documentation',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Combining technical expertise with domain knowledge to extract valuable insights from medical device data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center md:text-left">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="mr-3 text-primary-600">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `growWidth 1.5s ease-out ${index * 0.2}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center md:text-left">Domain Expertise & Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-2 w-2 bg-accent-500 rounded-full mr-3"></div>
                  <span className="text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">Tools & Platforms</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel',
                'SPSS', 'SAS', 'TensorFlow', 'Scikit-learn', 'PostgreSQL', 'Git'
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-white text-center py-3 px-2 rounded-md shadow-sm border border-gray-100"
                >
                  <span className="text-gray-800 text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional skills section */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Healthcare Domain Knowledge</h3>
              </div>
              <p className="text-gray-700 mb-4">
                My experience in the medical and healthcare sector provides crucial context for meaningful data analysis.
                Understanding medical terminology, workflows, and regulatory requirements sets my analyses apart.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Medical device performance metrics and standards
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Healthcare regulatory compliance (HIPAA, FDA, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Clinical trial data analysis methodology
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cross-Functional Collaboration</h3>
              </div>
              <p className="text-gray-700 mb-4">
                I excel at bridging the gap between technical data analysis and practical clinical application,
                working effectively with diverse teams to drive data-informed decisions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Translating complex findings for non-technical stakeholders
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Collaborating with clinicians to ensure relevant analyses
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Supporting engineering teams with data-driven insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes growWidth {
          from { width: 0; }
          to { width: var(--width); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;