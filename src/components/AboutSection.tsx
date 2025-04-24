import React from 'react';
import { Brain, Microscope, Heart, Activity } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I'm a dedicated Data Analyst with expertise in medical device data, 
            passionate about transforming complex healthcare datasets into actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Driving Healthcare Innovation Through Data</h3>
            <p className="text-gray-700 mb-6">
              With over 7 years of experience analyzing complex medical data, I specialize in translating
              technical insights into strategic decisions that improve patient care and medical device efficacy.
              My approach combines statistical rigor with clear communication to bridge the gap between 
              data science and healthcare professionals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md mr-4">
                  <Brain className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Advanced Statistical Analysis</h4>
                  <p className="text-gray-600">Applying sophisticated statistical methods to uncover patterns in medical device data.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md mr-4">
                  <Microscope className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Medical Research Support</h4>
                  <p className="text-gray-600">Collaborating with research teams to ensure data-driven medical advancements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md mr-4">
                  <Heart className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Patient Outcome Analysis</h4>
                  <p className="text-gray-600">Focusing on metrics that directly correlate with improved patient care and outcomes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-md mr-4">
                  <Activity className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Real-time Monitoring Solutions</h4>
                  <p className="text-gray-600">Developing dashboards and tools for real-time medical device performance tracking.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#experience" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              View my experience
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-white shadow-xl rounded-lg p-6 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <h4 className="text-4xl font-bold text-primary-600 mb-1">7+</h4>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <h4 className="text-4xl font-bold text-primary-600 mb-1">24</h4>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <h4 className="text-4xl font-bold text-primary-600 mb-1">12</h4>
                    <p className="text-gray-600">Publications</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg text-center">
                    <h4 className="text-4xl font-bold text-primary-600 mb-1">8</h4>
                    <p className="text-gray-600">Medical Partners</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 -right-4 h-24 w-24 bg-accent-400 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-primary-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;