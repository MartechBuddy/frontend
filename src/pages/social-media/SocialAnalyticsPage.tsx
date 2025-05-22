
import React from 'react';

const SocialAnalyticsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Social Media Analytics</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Performance Overview</h2>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </div>
          
          <div className="flex gap-2">
            <select className="bg-white/10 border border-white/10 rounded-md px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option selected>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-md text-sm">
              Export Report
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Total Reach</h3>
            <div className="text-3xl font-bold">52.8K</div>
            <p className="text-xs text-green-400 mt-1">+12.5% from last period</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Engagement Rate</h3>
            <div className="text-3xl font-bold">4.7%</div>
            <p className="text-xs text-green-400 mt-1">+0.8% from last period</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Link Clicks</h3>
            <div className="text-3xl font-bold">3,245</div>
            <p className="text-xs text-green-400 mt-1">+22.3% from last period</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Follower Growth</h3>
            <div className="text-3xl font-bold">+742</div>
            <p className="text-xs text-green-400 mt-1">+5.2% from last period</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Engagement by Platform</h3>
          
          <div className="h-64 w-full bg-white/5 rounded-lg p-4 flex items-end justify-between">
            {/* Simulating a bar chart */}
            <div className="flex flex-col items-center">
              <div className="w-16 bg-blue-500 rounded-t-md" style={{ height: '65%' }}></div>
              <span className="mt-2 text-xs">Twitter</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 bg-purple-500 rounded-t-md" style={{ height: '80%' }}></div>
              <span className="mt-2 text-xs">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 bg-blue-600 rounded-t-md" style={{ height: '90%' }}></div>
              <span className="mt-2 text-xs">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 bg-blue-400 rounded-t-md" style={{ height: '75%' }}></div>
              <span className="mt-2 text-xs">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 bg-red-500 rounded-t-md" style={{ height: '40%' }}></div>
              <span className="mt-2 text-xs">YouTube</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Audience Demographics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium mb-3">Age Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>18-24</span>
                    <span>15%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>25-34</span>
                    <span>42%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>35-44</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>45-54</span>
                    <span>12%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>55+</span>
                    <span>6%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '6%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Location</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>United States</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>United Kingdom</span>
                    <span>15%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Canada</span>
                    <span>12%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Australia</span>
                    <span>8%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Other</span>
                    <span>20%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Top Performing Posts</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/64" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">LinkedIn</span>
                  <span className="text-xs text-muted-foreground">May 15, 2025</span>
                </div>
                <p className="text-sm mb-2">
                  Our new guide on AI Readiness is live! Learn how to optimize your content for the new era of search...
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    <span>352 Likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span>48 Comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="M7 22l-4-4 4-4"></path>
                      <path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
                    <span>124 Shares</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">8.5%</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
                <img src="https://via.placeholder.com/64" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-1 text-xs bg-blue-400/20 text-blue-400 rounded-full">Twitter</span>
                  <span className="text-xs text-muted-foreground">May 18, 2025</span>
                </div>
                <p className="text-sm mb-2">
                  "AI isn't replacing marketers. It's replacing marketers who don't use AI." - Our CEO's keynote at #MarTechConf...
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    <span>485 Likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span>72 Replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="M7 22l-4-4 4-4"></path>
                      <path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
                    <span>245 Retweets</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">7.2%</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAnalyticsPage;
