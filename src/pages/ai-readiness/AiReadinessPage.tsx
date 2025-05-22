
import React from 'react';

const AiReadinessPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">AI Readiness</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">85</span>
                </div>
                <svg className="h-40 w-40 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-700 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  <circle
                    className="text-primary stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="37.68"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Last checked: May 22, 2025
              </p>
              <button className="mt-6 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                Run New Check
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Breakdown</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>SEO Content</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Technical SEO</span>
                  <span className="text-yellow-500">75%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>AI Visibility</span>
                  <span className="text-green-500">88%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">Recommended Fixes</h2>
        
        <div className="space-y-4">
          <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
            <div className="flex justify-between">
              <h3 className="font-medium">Implement Schema Markup on Product Pages</h3>
              <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">High Impact</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Adding structured data will improve how AI search engines understand and display your products.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Apply Fix</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Mark as Done</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Dismiss</button>
            </div>
          </div>
          
          <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
            <div className="flex justify-between">
              <h3 className="font-medium">Improve Header Structure on Blog Posts</h3>
              <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Medium Impact</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Proper H1, H2, H3 usage helps AI models understand content hierarchy and importance.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Apply Fix</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Mark as Done</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Dismiss</button>
            </div>
          </div>
          
          <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
            <div className="flex justify-between">
              <h3 className="font-medium">Add Descriptive Alt Text to Images</h3>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Low Impact</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Alt text enhances image understanding for AI models and improves accessibility.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Apply Fix</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Mark as Done</button>
              <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiReadinessPage;
