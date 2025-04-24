import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "MedTech Innovations",
      period: "2022 - Present",
      location: "Boston, MA",
      description: "Lead data analyst for cardiac monitoring devices team, analyzing performance metrics and patient outcomes data to optimize device efficacy.",
      achievements: [
        "Developed predictive model that improved device alert accuracy by 27%",
        "Designed custom dashboard for real-time monitoring of 10,000+ active devices",
        "Led cross-functional team in analyzing clinical trial data for FDA submission"
      ]
    },
    {
      title: "Healthcare Data Analyst",
      company: "BioStat Medical Systems",
      period: "2019 - 2022",
      location: "San Francisco, CA",
      description: "Analyzed large-scale datasets from implantable medical devices, focusing on battery longevity and signal quality metrics.",
      achievements: [
        "Created analytical pipeline that processed 2TB+ of device telemetry data monthly",
        "Identified signal degradation pattern that led to critical firmware update",
        "Collaborated with research team on two published papers on device performance"
      ]
    },
    {
      title: "Clinical Data Specialist",
      company: "Northeast Medical Center",
      period: "2016 - 2019",
      location: "New York, NY",
      description: "Managed and analyzed patient monitoring data from hospital's cardiac unit, creating reports for clinical staff and administration.",
      achievements: [
        "Streamlined data collection process, reducing reporting time by 40%",
        "Implemented new visualization approach for cardiac telemetry data",
        "Developed statistical model to predict patient readmission risk"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Biostatistics",
      institution: "Harvard University",
      year: "2016",
      description: "Specialized in clinical data analysis with thesis on predictive modeling of medical device performance."
    },
    {
      degree: "Bachelor of Science in Data Science",
      institution: "University of California, Berkeley",
      year: "2014",
      description: "Minor in Healthcare Management. Graduated with honors (magna cum laude)."
    }
  ];

  const certifications = [
    "Certified Data Analyst (CDA) - Data Science Council of America",
    "Healthcare Data Analyst Certification - American Health Information Management Association",
    "Advanced SQL for Data Analysis - Stanford Online",
    "Machine Learning for Healthcare - MIT Professional Education"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            My professional journey through healthcare data analysis and medical device research.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center md:text-left">
            Professional Experience
          </h3>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-12 w-0.5 h-[calc(100%-3rem)] bg-gray-200 md:left-1/2 md:ml-0"></div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Time period - Mobile view appears on top, desktop on left */}
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
                    <div className="inline-flex items-center md:justify-end">
                      <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center md:justify-end mt-2 ml-7 md:ml-0">
                      <MapPin className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 flex justify-center order-2">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center border-4 border-white shadow-md">
                      <div className="w-8 h-8 rounded-full bg-primary-600"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <h5 className="text-lg font-medium text-primary-600 mb-3">{exp.company}</h5>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-medium text-gray-900 mb-2">Key Achievements:</h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications - Two column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                  <div className="flex items-center text-primary-600 mb-3">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <Award className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Languages</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 font-medium">English</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 font-medium">Spanish</span>
                    <span className="text-gray-600">Professional</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 font-medium">French</span>
                    <span className="text-gray-600">Conversational</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-primary-600 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;