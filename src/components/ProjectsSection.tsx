import React, { useState } from 'react';
import { FileBarChart2, ExternalLink, Tag, Clock } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'medical', name: 'Medical Devices' },
    { id: 'clinical', name: 'Clinical Trials' },
    { id: 'predictive', name: 'Predictive Analysis' },
    { id: 'dashboard', name: 'Dashboards' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Cardiac Device Performance Analysis',
      description: 'Statistical analysis of 50,000+ cardiac implantable devices, identifying performance patterns and battery life optimization opportunities.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['medical', 'predictive'],
      tags: ['Python', 'Statistical Analysis', 'Time Series'],
      duration: '4 months'
    },
    {
      id: 2,
      title: 'Patient Monitoring Dashboard',
      description: 'Real-time visualization dashboard for hospital staff to monitor patient vitals from connected medical devices, featuring alert systems and trend analysis.',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['medical', 'dashboard'],
      tags: ['Tableau', 'SQL', 'Real-time Analytics'],
      duration: '3 months'
    },
    {
      id: 3,
      title: 'Clinical Trial Data Pipeline',
      description: 'Automated data processing system for multi-center clinical trials, ensuring data quality, consistency, and regulatory compliance.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['clinical'],
      tags: ['R', 'Data Pipeline', 'Validation'],
      duration: '6 months'
    },
    {
      id: 4,
      title: 'Medical Device Signal Analysis',
      description: 'Advanced signal processing algorithms to improve accuracy of diagnostic devices, reducing false positives by 34%.',
      image: 'https://images.pexels.com/photos/8879307/pexels-photo-8879307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['medical', 'predictive'],
      tags: ['Signal Processing', 'Python', 'Machine Learning'],
      duration: '5 months'
    },
    {
      id: 5,
      title: 'Healthcare Resource Optimization Model',
      description: 'Predictive model to optimize medical device allocation across hospital departments based on historical usage patterns.',
      image: 'https://images.pexels.com/photos/7089389/pexels-photo-7089389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['predictive', 'dashboard'],
      tags: ['Predictive Modeling', 'Resource Allocation', 'Optimization'],
      duration: '3 months'
    },
    {
      id: 6,
      title: 'Patient Readmission Prediction',
      description: 'Machine learning model to predict patient readmission risk based on medical device data and patient history.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['clinical', 'predictive'],
      tags: ['Machine Learning', 'Python', 'Healthcare Analytics'],
      duration: '4 months'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects Portfolio</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore my data analysis projects focused on medical devices and healthcare outcomes.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                  
                  <a 
                    href="#demo" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-md"
          >
            <FileBarChart2 className="w-5 h-5 mr-2" />
            Discuss Your Data Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;