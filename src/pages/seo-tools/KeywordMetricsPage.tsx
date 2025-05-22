
import React from 'react';

const KeywordMetricsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Keyword Metrics</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Your Keywords</h2>
            <p className="text-sm text-muted-foreground">Track performance and discover new opportunities</p>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
              Import Keywords
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Generate Keywords
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Keyword</th>
                <th className="text-left py-3 px-4 font-medium">Search Volume</th>
                <th className="text-left py-3 px-4 font-medium">Difficulty</th>
                <th className="text-left py-3 px-4 font-medium">CPC</th>
                <th className="text-left py-3 px-4 font-medium">Current Rank</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">ai marketing</td>
                <td className="py-3 px-4">8,100</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-2 w-20 bg-gray-700 rounded-full">
                      <div className="h-2 bg-yellow-500 rounded-full w-3/5"></div>
                    </div>
                    <span className="ml-2">60%</span>
                  </div>
                </td>
                <td className="py-3 px-4">$3.50</td>
                <td className="py-3 px-4">
                  <span className="text-green-400">#5</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">seo optimization</td>
                <td className="py-3 px-4">12,400</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-2 w-20 bg-gray-700 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full w-4/5"></div>
                    </div>
                    <span className="ml-2">80%</span>
                  </div>
                </td>
                <td className="py-3 px-4">$4.25</td>
                <td className="py-3 px-4">
                  <span className="text-yellow-400">#12</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">content strategy</td>
                <td className="py-3 px-4">5,800</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-2 w-20 bg-gray-700 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-2/5"></div>
                    </div>
                    <span className="ml-2">40%</span>
                  </div>
                </td>
                <td className="py-3 px-4">$2.75</td>
                <td className="py-3 px-4">
                  <span className="text-green-400">#3</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Keyword Opportunities</h2>
          <p className="text-sm text-muted-foreground mb-4">AI-suggested keywords based on your content and competitors</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>digital marketing strategy</span>
                <span className="text-green-400">Low Competition</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Volume: 4,800</span>
                <span>CPC: $3.25</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Tracking</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>ai content generation</span>
                <span className="text-yellow-400">Medium Competition</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Volume: 3,200</span>
                <span>CPC: $2.75</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Tracking</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>social media optimization</span>
                <span className="text-red-400">High Competition</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Volume: 7,500</span>
                <span>CPC: $4.50</span>
              </div>
              <button className="mt-2 text-xs text-primary">Add to Tracking</button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Content Gaps</h2>
          <p className="text-sm text-muted-foreground mb-4">Keywords you're not ranking for but competitors are</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>ai for small business</span>
                <span className="text-yellow-400">Medium Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Competitor Rank: #2</span>
                <span>Your Rank: Not ranking</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>marketing automation tools</span>
                <span className="text-green-400">High Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Competitor Rank: #1</span>
                <span>Your Rank: Not ranking</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content</button>
            </div>
            
            <div className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition">
              <div className="flex justify-between">
                <span>content roi measurement</span>
                <span className="text-green-400">High Opportunity</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Competitor Rank: #3</span>
                <span>Your Rank: Not ranking</span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate Content</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordMetricsPage;
