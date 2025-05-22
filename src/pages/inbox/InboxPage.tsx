
import React from 'react';

const InboxPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Social Inbox</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 border-r border-white/10 pr-6">
            <div className="mb-4 relative">
              <input 
                type="text" 
                placeholder="Search messages..."
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary pr-8"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-3 text-muted-foreground">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <div className="mb-4">
              <div className="flex gap-2">
                <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm">
                  All
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                  Unread
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                  Mentions
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                  DMs
                </button>
              </div>
            </div>
            
            <div className="space-y-2 max-h-[calc(100vh-320px)] overflow-y-auto">
              <div className="p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/15 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/40" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">Sarah Johnson</p>
                      <span className="text-xs text-primary">2m</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      I'd like to learn more about your AI solutions for our marketing team...
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">Twitter DM</span>
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/15 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/40" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">Michael Chen</p>
                      <span className="text-xs text-muted-foreground">1h</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      Thanks for the quick response. I'm interested in scheduling a demo...
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="px-2 py-0.5 text-xs bg-blue-600/20 text-blue-400 rounded-full">LinkedIn</span>
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/15 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/40" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">Marketing Today</p>
                      <span className="text-xs text-muted-foreground">3h</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      @YourCompany Great insights on AI readiness! Would you like to share more...
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="px-2 py-0.5 text-xs bg-blue-400/20 text-blue-400 rounded-full">Twitter Mention</span>
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/15 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/40" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">Emily Williams</p>
                      <span className="text-xs text-muted-foreground">5h</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      Hello, I saw your post about AI marketing tools. I was wondering...
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="px-2 py-0.5 text-xs bg-purple-400/20 text-purple-400 rounded-full">Instagram DM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Online on Twitter</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="p-1.5 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
                <button className="p-1.5 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="M9 22h6"></path><path d="M12 18v4"></path></svg>
                </button>
                <button className="p-1.5 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </div>
            </div>
            
            <div className="border-t border-b border-white/10 py-4 mb-4 h-[calc(100vh-400px)] overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-[70%] bg-white/5 rounded-lg p-3">
                    <p className="text-sm">Hello! I saw your post about AI marketing tools. I'd like to learn more about your AI solutions for our marketing team.</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">10:25 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="max-w-[70%] bg-primary/20 rounded-lg p-3">
                    <p className="text-sm">Hi Sarah! Thanks for reaching out. I'd be happy to tell you more about our AI marketing solutions. What specific challenges is your team facing?</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">10:27 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="max-w-[70%] bg-white/5 rounded-lg p-3">
                    <p className="text-sm">We're struggling with content creation at scale and optimizing for AI search readiness. Our team is small but we need to produce a lot of content.</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="max-w-[70%] bg-primary/20 rounded-lg p-3">
                    <p className="text-sm">That's exactly what our AI Content Hub is designed for! It can help you generate content at scale while ensuring it's optimized for AI readiness. Would you be interested in a quick demo?</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">10:32 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="max-w-[70%] bg-white/5 rounded-lg p-3">
                    <p className="text-sm">That sounds perfect! Yes, I'd love to see a demo. When would be a good time?</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">10:35 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea 
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button className="p-1 rounded hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 8A6.5 6.5 0 1 0 9 14.5c0 .97.23 1.85.65 2.64L9 21l3.86-.66c.79.42 1.67.66 2.64.66a6.5 6.5 0 0 0 0-13Z"></path></svg>
                  </button>
                  <button className="p-1 rounded hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                </div>
              </div>
              
              <div>
                <button className="h-full bg-primary hover:bg-primary/90 text-white px-4 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                <span>Generate AI Reply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
