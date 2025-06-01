
import React from 'react';

const CompetitorAnalysisPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Competitor Analysis</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Tracked Competitors</h2>
            <p className="text-sm text-muted-foreground">Last updated: May 20, 2025</p>
          </div>
          
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
            Add Competitor
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Competitor</th>
                <th className="text-left py-3 px-4 font-medium">Domain Authority</th>
                <th className="text-left py-3 px-4 font-medium">Backlinks</th>
                <th className="text-left py-3 px-4 font-medium">Organic Keywords</th>
                <th className="text-left py-3 px-4 font-medium">Traffic Estimate</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor1.com</td>
                <td className="py-3 px-4">52</td>
                <td className="py-3 px-4">3,245</td>
                <td className="py-3 px-4">1,845</td>
                <td className="py-3 px-4">42.5K / month</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor2.com</td>
                <td className="py-3 px-4">48</td>
                <td className="py-3 px-4">2,780</td>
                <td className="py-3 px-4">1,425</td>
                <td className="py-3 px-4">38.2K / month</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor3.com</td>
                <td className="py-3 px-4">62</td>
                <td className="py-3 px-4">5,120</td>
                <td className="py-3 px-4">2,340</td>
                <td className="py-3 px-4">57.8K / month</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Top Performing Keywords</h2>
          <p className="text-sm text-muted-foreground mb-4">Keywords your competitors rank for in the top 10</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>ai content tools</span>
                <span className="text-green-400">Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor1.com: #3</span>
                <span>You: Not ranking</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Keywords</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>marketing automation platforms</span>
                <span className="text-green-400">Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor3.com: #1</span>
                <span>You: #18</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Keywords</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>seo strategy 2025</span>
                <span className="text-green-400">Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor2.com: #2</span>
                <span>You: #25</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Keywords</button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Content Gaps</h2>
          <p className="text-sm text-muted-foreground mb-4">Topics your competitors cover that you don't</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>AI for E-commerce</span>
                <span className="text-yellow-400">Medium Priority</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor1.com: 5 articles</span>
                <span>competitor3.com: 3 articles</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content Plan</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>SEO for Voice Search</span>
                <span className="text-red-400">High Priority</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor2.com: 8 articles</span>
                <span>competitor3.com: 4 articles</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content Plan</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>Marketing Budget Optimization</span>
                <span className="text-yellow-400">Medium Priority</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>competitor1.com: 3 articles</span>
                <span>competitor2.com: 2 articles</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content Plan</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Backlink Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Domain</th>
                <th className="text-left py-3 px-4 font-medium">Total Backlinks</th>
                <th className="text-left py-3 px-4 font-medium">Referring Domains</th>
                <th className="text-left py-3 px-4 font-medium">New Backlinks (30d)</th>
                <th className="text-left py-3 px-4 font-medium">Lost Backlinks (30d)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Your Website</td>
                <td className="py-3 px-4">1,845</td>
                <td className="py-3 px-4">325</td>
                <td className="py-3 px-4 text-green-400">+42</td>
                <td className="py-3 px-4 text-red-400">-18</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor1.com</td>
                <td className="py-3 px-4">3,245</td>
                <td className="py-3 px-4">520</td>
                <td className="py-3 px-4 text-green-400">+65</td>
                <td className="py-3 px-4 text-red-400">-23</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor2.com</td>
                <td className="py-3 px-4">2,780</td>
                <td className="py-3 px-4">480</td>
                <td className="py-3 px-4 text-green-400">+37</td>
                <td className="py-3 px-4 text-red-400">-15</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">competitor3.com</td>
                <td className="py-3 px-4">5,120</td>
                <td className="py-3 px-4">740</td>
                <td className="py-3 px-4 text-green-400">+89</td>
                <td className="py-3 px-4 text-red-400">-32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalysisPage;
