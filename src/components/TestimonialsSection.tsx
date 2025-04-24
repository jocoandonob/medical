import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Sarah's analysis of our cardiac monitoring data revealed critical patterns that our internal team had missed for months. Her insights directly contributed to a 28% improvement in device reliability.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer, CardioTech Innovations",
      avatar: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "Working with this data analyst was game-changing for our clinical trials. The statistical rigor and attention to detail in analyzing our medical device performance metrics gave us confidence in our FDA submission.",
      author: "Dr. Rebecca Johnson",
      position: "VP of Clinical Research, MediSense Devices",
      avatar: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "The dashboard created to visualize our patient monitoring data transformed how our clinical team makes decisions. Complex patterns became immediately obvious, and the predictive models have proven remarkably accurate.",
      author: "James Wilson",
      position: "Director of Data Science, Healthcare Analytics Partners",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      content: "What sets this analyst apart is the ability to translate complex statistical findings into actionable insights our medical team can understand and implement. The impact on our patient care protocols has been substantial.",
      author: "Dr. Sophia Martinez",
      position: "Chief of Cardiology, Northeast Medical Center",
      avatar: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            What healthcare professionals say about my data analysis work.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute top-0 -left-4 md:-left-10 text-primary-200">
            <Quote className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          <div className="absolute bottom-0 -right-4 md:-right-10 text-primary-200 transform rotate-180">
            <Quote className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          
          {/* Testimonial slider */}
          <div 
            className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative z-10">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <p className="text-gray-700 italic text-lg md:text-xl mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary-600 w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional testimonials in cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              content: "The predictive models developed for our glucose monitoring devices helped us reduce false alarms by 42%, significantly improving patient experience.",
              author: "Laura Kim, Product Manager, DiabTech"
            },
            {
              content: "Exceptional ability to work with our cross-functional teams, translating complex data insights into language everyone could understand and act upon.",
              author: "David Thompson, CTO, MedData Systems"
            },
            {
              content: "The data analysis provided for our medical device trials was instrumental in securing our Series B funding. Investors were impressed by the depth of insights.",
              author: "Alex Foster, CEO, NeuraMed Devices"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4 text-sm">"{item.content}"</p>
              <p className="text-gray-900 font-medium text-sm">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;