
import React from 'react';

const ContentLibraryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Content Library</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Your Content</h2>
            <div className="flex gap-2">
              <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm">
                All
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Blog Posts
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Social Media
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Articles
              </button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Create Content
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Title</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Project</th>
                <th className="text-left py-3 px-4 font-medium">Created</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">AI in Modern Marketing</td>
                <td className="py-3 px-4">Blog Post</td>
                <td className="py-3 px-4">Marketing Campaign</td>
                <td className="py-3 px-4">May 20, 2025</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                    Published
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19l-5-5 5-5"></path><path d="M4 14h10.3a4 4 0 0 0 3.9-3.1l.5-2.9a2 2 0 0 1 2-1.7H20"></path><path d="M17 6v3"></path><path d="M14 3v6"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">SEO Best Practices for 2025</td>
                <td className="py-3 px-4">Article</td>
                <td className="py-3 px-4">Marketing Campaign</td>
                <td className="py-3 px-4">May 18, 2025</td>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19l-5-5 5-5"></path><path d="M4 14h10.3a4 4 0 0 0 3.9-3.1l.5-2.9a2 2 0 0 1 2-1.7H20"></path><path d="M17 6v3"></path><path d="M14 3v6"></path></svg>
                    </button>
                    <button className="p-1 rounded hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">Product Launch Announcement</td>
                <td className="py-3 px-4">Social Post</td>
                <td className="py-3 px-4">E-Commerce Site</td>
                <td className="py-3 px-4">May 15, 2025</td>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19l-5-5 5-5"></path><path d="M4 14h10.3a4 4 0 0 0 3.9-3.1l.5-2.9a2 2 0 0 1 2-1.7H20"></path><path d="M17 6v3"></path><path d="M14 3v6"></path></svg>
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
    </div>
  );
};

export default ContentLibraryPage;
