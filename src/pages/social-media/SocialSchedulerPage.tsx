
import React from 'react';

const SocialSchedulerPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Social Media Scheduler</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Scheduled Posts</h2>
            <p className="text-sm text-muted-foreground">Plan and schedule your social media content</p>
          </div>
          
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
            Schedule New Post
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Content</th>
                <th className="text-left py-3 px-4 font-medium">Platforms</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Time</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/48" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">New Product Announcement</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        Excited to announce our new AI-powered marketing automation platform...
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Twitter</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">LinkedIn</span>
                  </div>
                </td>
                <td className="py-3 px-4">May 25, 2025</td>
                <td className="py-3 px-4">10:30 AM</td>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/48" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">Weekly SEO Tips</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        This week's top SEO tip: Focus on AI readiness to improve your content visibility...
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Twitter</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Facebook</span>
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">Instagram</span>
                  </div>
                </td>
                <td className="py-3 px-4">May 27, 2025</td>
                <td className="py-3 px-4">2:00 PM</td>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-md overflow-hidden">
                      <img src="https://via.placeholder.com/48" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">Case Study: AI Success</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        How our client achieved 250% ROI with our AI marketing solutions...
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">LinkedIn</span>
                  </div>
                </td>
                <td className="py-3 px-4">June 1, 2025</td>
                <td className="py-3 px-4">9:00 AM</td>
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
        <h2 className="text-xl font-semibold mb-6">Calendar View</h2>
        
        <div className="grid grid-cols-7 gap-2">
          <div className="text-center font-medium text-sm p-2">Sun</div>
          <div className="text-center font-medium text-sm p-2">Mon</div>
          <div className="text-center font-medium text-sm p-2">Tue</div>
          <div className="text-center font-medium text-sm p-2">Wed</div>
          <div className="text-center font-medium text-sm p-2">Thu</div>
          <div className="text-center font-medium text-sm p-2">Fri</div>
          <div className="text-center font-medium text-sm p-2">Sat</div>
          
          {/* Sample calendar days - would be dynamically generated */}
          {Array.from({ length: 35 }).map((_, index) => {
            const day = index - 3; // Adjust to start with previous month days
            const isCurrentMonth = day > 0 && day <= 31;
            const hasPost = [5, 12, 15, 22, 25, 27].includes(day);
            
            return (
              <div 
                key={index}
                className={`rounded-md p-2 h-24 ${
                  isCurrentMonth ? 'bg-white/5' : 'bg-transparent text-gray-500'
                } border border-white/5 hover:bg-white/10 transition cursor-pointer flex flex-col`}
              >
                <div className="text-right text-sm">{isCurrentMonth ? day : (day <= 0 ? 30 + day : day - 31)}</div>
                {hasPost && (
                  <div className="mt-auto">
                    <div className="mt-1 bg-primary/20 p-1 rounded text-xs truncate">
                      {day === 25 && "Product Announcement"}
                      {day === 27 && "Weekly SEO Tips"}
                      {day === 5 && "June Newsletter"}
                      {day === 12 && "Team Update"}
                      {day === 15 && "Product Demo"}
                      {day === 22 && "Industry News"}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialSchedulerPage;
