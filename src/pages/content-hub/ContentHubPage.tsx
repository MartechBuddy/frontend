
import React from 'react';

const ContentHubPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Content Hub Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Total Content</h3>
          <div className="text-4xl font-bold">24</div>
          <p className="text-sm text-muted-foreground mt-2">3 items need optimization</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Active Campaigns</h3>
          <div className="text-4xl font-bold">3</div>
          <p className="text-sm text-muted-foreground mt-2">1 scheduled for next week</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Media Items</h3>
          <div className="text-4xl font-bold">47</div>
          <p className="text-sm text-muted-foreground mt-2">12 images, 35 videos</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Keywords</h3>
          <div className="text-4xl font-bold">85</div>
          <p className="text-sm text-muted-foreground mt-2">15 high-value targets</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-2/3 glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Content</h2>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Create Content
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div>
                <p className="font-medium">AI in Modern Marketing</p>
                <p className="text-sm text-muted-foreground">Blog Post • May 20, 2025</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div>
                <p className="font-medium">SEO Best Practices for 2025</p>
                <p className="text-sm text-muted-foreground">Article • May 18, 2025</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-3">
              <div>
                <p className="font-medium">Product Launch Announcement</p>
                <p className="text-sm text-muted-foreground">Social Post • May 15, 2025</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button className="p-1 rounded hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Media</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Media item" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
            View All Media
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentHubPage;
