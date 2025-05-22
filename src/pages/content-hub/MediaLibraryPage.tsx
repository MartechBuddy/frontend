
import React from 'react';

const MediaLibraryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Media Library</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Your Media</h2>
            <div className="flex gap-2">
              <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm">
                All
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Images
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Videos
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-3 py-1 rounded-md text-sm">
                Audio
              </button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
              Upload Media
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Generate Media
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className="group relative aspect-square bg-gray-800 rounded-md overflow-hidden">
              <img 
                src={`https://via.placeholder.com/150?text=Image${index + 1}`} 
                alt={`Media item ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </button>
                <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaLibraryPage;
