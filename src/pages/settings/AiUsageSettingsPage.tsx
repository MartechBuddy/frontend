
import React from 'react';

const AiUsageSettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">AI Usage & Status</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">AI Calls Usage</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">95/100</span>
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
                    strokeDashoffset="12.56"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Daily AI Calls Remaining
              </p>
              <p className="text-center text-xs text-muted-foreground">
                Resets at midnight UTC
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Your Plan Details</h3>
                <div className="bg-white/5 rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <span>Current Plan</span>
                    <span className="font-medium">Pro Plan ($49/month)</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>AI Calls Limit</span>
                    <span className="font-medium">100 per day</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Next Billing Date</span>
                    <span className="font-medium">June 22, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium">Visa ending in 4242</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                    Upgrade Plan
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">AI Usage History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Feature</th>
                <th className="text-left py-3 px-4 font-medium">AI Calls Used</th>
                <th className="text-left py-3 px-4 font-medium">Project</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 22, 2025 - 10:25 AM</td>
                <td className="py-3 px-4">Content Generation</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Marketing Campaign</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 22, 2025 - 09:45 AM</td>
                <td className="py-3 px-4">AI Readiness Check</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">E-Commerce Site</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 22, 2025 - 09:15 AM</td>
                <td className="py-3 px-4">Keyword Generation</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Marketing Campaign</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 21, 2025 - 03:45 PM</td>
                <td className="py-3 px-4">Social Media Reply</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Marketing Campaign</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">May 21, 2025 - 02:30 PM</td>
                <td className="py-3 px-4">Content Optimization</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">E-Commerce Site</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">AI Feature Allocation</h2>
        
        <p className="text-sm text-muted-foreground mb-4">
          Configure how your daily AI calls are allocated across different features.
        </p>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <span>Content Generation</span>
              <span>40%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>AI Readiness Checks</span>
              <span>20%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>SEO Tools</span>
              <span>20%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span>Social Media Tools</span>
              <span>20%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
            Save Allocation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiUsageSettingsPage;
