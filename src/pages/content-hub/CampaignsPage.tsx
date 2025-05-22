
import React from 'react';

const CampaignsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Campaigns</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Campaigns</h2>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
            Create Campaign
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Platforms</th>
                <th className="text-left py-3 px-4 font-medium">Content Items</th>
                <th className="text-left py-3 px-4 font-medium">Schedule</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Summer Marketing Campaign</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Twitter</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">LinkedIn</span>
                  </div>
                </td>
                <td className="py-3 px-4">5 items</td>
                <td className="py-3 px-4">May 25 - Jun 15</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Product Launch</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Instagram</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Facebook</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Twitter</span>
                  </div>
                </td>
                <td className="py-3 px-4">3 items</td>
                <td className="py-3 px-4">Jun 10 - Jun 20</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
                    Draft
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Monthly Newsletter</td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Email</span>
                  </div>
                </td>
                <td className="py-3 px-4">1 item</td>
                <td className="py-3 px-4">Jun 1</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                    Scheduled
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Campaign Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Total Reach</h3>
            <div className="text-3xl font-bold">12.4K</div>
            <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Engagement Rate</h3>
            <div className="text-3xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground mt-1">+0.5% from last month</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Conversions</h3>
            <div className="text-3xl font-bold">342</div>
            <p className="text-xs text-muted-foreground mt-1">+22% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
