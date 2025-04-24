import React, { useState, useEffect } from 'react';
import { ChevronDown, Activity, Database, FileBarChart } from 'lucide-react';

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const targetCount = 85; // Percentage to count up to

  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 z-0"></div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">Medical Data Specialist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Healthcare <br className="hidden md:block" />
              Through <span className="text-accent-400">Data Analysis</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Specialized in extracting actionable insights from complex medical device datasets to drive innovation and improve patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="bg-white text-primary-700 hover:bg-accent-400 hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-lg"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-full max-w-md">
              <div className="absolute -top-4 -left-4 bg-accent-500 p-3 rounded-xl shadow-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-white text-xl font-semibold mb-4 mt-2">Data Analysis Dashboard</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/70 text-sm mb-1">Accuracy</p>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">{count}%</span>
                    <Activity className="h-5 w-5 text-accent-400 mb-1" />
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white/70 text-sm mb-1">Projects</p>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">24+</span>
                    <FileBarChart className="h-5 w-5 text-accent-400 mb-1" />
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg col-span-2">
                  <p className="text-white/70 text-sm mb-1">Data Processed</p>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-white">3.8TB</span>
                    <span className="text-white/70 text-sm mb-1">lifetime</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3">
                <div className="h-24 relative overflow-hidden">
                  {/* Simplified chart visualization */}
                  <div className="absolute bottom-0 w-full flex items-end h-full">
                    {[35, 65, 45, 70, 55, 80, 60, 90, 75, 85, 65, 95].map((height, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-accent-400/80 mx-0.5 rounded-t-sm" 
                        style={{ 
                          height: `${height}%`,
                          animation: `growUp 1.5s ease-out ${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors duration-300"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
      
      <style jsx>{`
        @keyframes growUp {
          from { height: 0; }
          to { height: var(--height); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;