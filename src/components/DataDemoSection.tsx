import React, { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, Activity } from 'lucide-react';

const DataDemoSection = () => {
  const [activeTab, setActiveTab] = useState('visualization');
  const [chartData, setChartData] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Generate random data for charts on tab change
    setIsAnimating(true);
    const generateData = () => {
      const newData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 70) + 30);
      setChartData(newData);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    };
    
    generateData();
  }, [activeTab]);

  const tabs = [
    { id: 'visualization', label: 'Data Visualization', icon: <BarChart className="w-5 h-5" /> },
    { id: 'analysis', label: 'Statistical Analysis', icon: <Activity className="w-5 h-5" /> },
    { id: 'interpretation', label: 'Clinical Interpretation', icon: <LineChart className="w-5 h-5" /> }
  ];

  // Visualization demo content
  const renderVisualizationDemo = () => (
    <div>
      <p className="text-gray-700 mb-6">
        Effective data visualization transforms complex medical device data into actionable insights.
        Below are examples of visualization techniques I use to communicate patterns and trends.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Signal Strength Over Time</h4>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end">
              {chartData.map((value, index) => (
                <div 
                  key={index} 
                  className="flex-1 mx-0.5 bg-primary-600 rounded-t transition-all duration-1000 ease-out"
                  style={{ 
                    height: isAnimating ? '0%' : `${value}%`,
                    opacity: 0.7 + (index / 24),
                    transitionDelay: `${index * 50}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Patient Outcomes by Device Type</h4>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {[65, 25, 10].map((percentage, i) => {
                const colors = ['#0F52BA', '#38BEC9', '#94A3B8'];
                const previousPercentages = [65, 25, 10].slice(0, i).reduce((a, b) => a + b, 0);
                return (
                  <div 
                    key={i}
                    className="absolute top-0 left-0 w-full h-full transition-all duration-1000"
                    style={{
                      background: `conic-gradient(transparent ${previousPercentages * 3.6}deg, ${colors[i]} ${previousPercentages * 3.6}deg, ${colors[i]} ${(previousPercentages + (isAnimating ? 0 : percentage)) * 3.6}deg, transparent ${(previousPercentages + (isAnimating ? 0 : percentage)) * 3.6}deg)`,
                      borderRadius: '50%',
                      opacity: 0.9
                    }}
                  ></div>
                );
              })}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-center mt-2 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Type A (65%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Type B (25%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Type C (10%)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Visualization Strategy</h4>
        <p className="text-gray-700">
          My approach to data visualization focuses on clarity, context, and actionable insights. For medical device data, 
          I emphasize time-series visualizations, comparative analyses, and outcome correlations to support clinical decision-making.
        </p>
      </div>
    </div>
  );

  // Statistical analysis demo content
  const renderAnalysisDemo = () => (
    <div>
      <p className="text-gray-700 mb-6">
        Rigorous statistical methodologies are essential for extracting meaningful insights from medical device data.
        Below are key statistical approaches I apply to healthcare datasets.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Hypothesis Testing</h4>
          <p className="text-gray-700 mb-4">
            Applied to determine statistical significance in device performance metrics.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <code className="block text-sm text-gray-800 font-mono whitespace-pre-wrap">
              {`# Python code sample
import scipy.stats as stats

# Comparing two device performance datasets
t_stat, p_value = stats.ttest_ind(
    device_a_data, 
    device_b_data,
    equal_var=False
)

# Determine significance
alpha = 0.05
if p_value < alpha:
    result = "Statistically significant difference"
else:
    result = "No significant difference"`}
            </code>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Regression Analysis</h4>
          <p className="text-gray-700 mb-4">
            Used to model relationships between variables and predict outcomes.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <code className="block text-sm text-gray-800 font-mono whitespace-pre-wrap">
              {`# R code sample
# Multiple regression for device longevity
model <- lm(
  device_lifetime ~ temperature + 
  usage_frequency + battery_type + 
  firmware_version,
  data = device_data
)

# View model summary
summary(model)

# Calculate predicted values
predicted_lifetime <- predict(model, newdata)`}
            </code>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Statistical Methods</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h5 className="font-medium text-gray-900 mb-2">Survival Analysis</h5>
            <p className="text-gray-700 text-sm">
              Applied to medical device failure rates and longevity predictions using Kaplan-Meier curves and Cox proportional hazards models.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h5 className="font-medium text-gray-900 mb-2">Time Series Analysis</h5>
            <p className="text-gray-700 text-sm">
              Used for identifying patterns, seasonality, and trends in continuous monitoring data from implantable devices.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h5 className="font-medium text-gray-900 mb-2">Multivariate Analysis</h5>
            <p className="text-gray-700 text-sm">
              Applied to understand complex relationships between multiple variables in patient outcome datasets.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
        <h4 className="text-lg font-semibold text-primary-800 mb-2">Statistical Rigor</h4>
        <p className="text-primary-700">
          All analyses follow strict statistical protocols, including appropriate sample size calculations, power analysis, 
          and validation techniques to ensure reliability and reproducibility of results.
        </p>
      </div>
    </div>
  );

  // Clinical interpretation demo content
  const renderInterpretationDemo = () => (
    <div>
      <p className="text-gray-700 mb-6">
        Translating data analysis into actionable clinical insights is a critical skill for medical device data analysts.
        Here's how I bridge the gap between statistical findings and practical applications.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Case Study: Cardiac Monitor Alerts</h4>
          
          <div className="mb-4">
            <h5 className="font-medium text-gray-800 mb-2">Data Finding:</h5>
            <p className="text-gray-700 bg-gray-50 p-3 rounded">
              Statistical analysis revealed a 34% false positive rate in arrhythmia detection across 12,000 monitoring sessions.
            </p>
          </div>
          
          <div className="mb-4">
            <h5 className="font-medium text-gray-800 mb-2">Clinical Interpretation:</h5>
            <p className="text-gray-700 bg-gray-50 p-3 rounded">
              False positives were creating alert fatigue among clinical staff, potentially leading to missed true events.
              Pattern analysis showed higher false positive rates during patient movement and specific daily activities.
            </p>
          </div>
          
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Actionable Insight:</h5>
            <p className="text-gray-700 bg-gray-50 p-3 rounded">
              Implemented machine learning algorithm to filter alerts based on contextual data (patient position, activity level),
              reducing false positives by 62% while maintaining 99.7% sensitivity for clinically relevant events.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Performance Interpretation</h4>
          
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Statistical Finding</th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Clinical Relevance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-800">Battery Longevity</td>
                <td className="px-4 py-3 text-sm text-gray-700">15% variance across devices</td>
                <td className="px-4 py-3 text-sm text-gray-700">Impacts replacement scheduling and patient convenience</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-800">Signal Quality</td>
                <td className="px-4 py-3 text-sm text-gray-700">Degradation after 14 months</td>
                <td className="px-4 py-3 text-sm text-gray-700">Affects diagnostic accuracy and treatment decisions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-800">Data Transmission</td>
                <td className="px-4 py-3 text-sm text-gray-700">8.3% packet loss during transfers</td>
                <td className="px-4 py-3 text-sm text-gray-700">Creates data gaps for continuous monitoring patients</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">From Analysis to Action</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-primary-700">1</span>
              </div>
              <h5 className="font-medium text-gray-900">Data Analysis</h5>
            </div>
            <p className="text-gray-700 text-sm">
              Rigorous statistical methods applied to device performance metrics and patient outcome data.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-primary-700">2</span>
              </div>
              <h5 className="font-medium text-gray-900">Clinical Context</h5>
            </div>
            <p className="text-gray-700 text-sm">
              Findings interpreted within healthcare workflows, considering medical necessity and patient impact.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-primary-700">3</span>
              </div>
              <h5 className="font-medium text-gray-900">Implementation</h5>
            </div>
            <p className="text-gray-700 text-sm">
              Actionable recommendations provided to engineering, clinical, and management teams for practical application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTabContent = () => {
    switch(activeTab) {
      case 'visualization':
        return renderVisualizationDemo();
      case 'analysis':
        return renderAnalysisDemo();
      case 'interpretation':
        return renderInterpretationDemo();
      default:
        return renderVisualizationDemo();
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data Analysis in Action</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore my methodologies and approaches to medical device data analysis.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-300
                  ${activeTab === tab.id 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {renderActiveTabContent()}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 max-w-2xl mx-auto bg-primary-50 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-primary-800 mb-4">
            Need expert data analysis for your medical project?
          </h3>
          <p className="text-primary-700 mb-6">
            Let's discuss how my data analysis expertise can drive insights for your healthcare initiative.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-md"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataDemoSection;