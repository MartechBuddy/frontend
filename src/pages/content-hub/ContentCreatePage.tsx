
import React from 'react';

const ContentCreatePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create Content</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
              <input 
                type="text" 
                id="title" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter content title"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-2">Content Type</label>
                <select 
                  id="type" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="blog">Blog Post</option>
                  <option value="article">Article</option>
                  <option value="social">Social Media Post</option>
                  <option value="script">Video Script</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project</label>
                <select 
                  id="project" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="marketing">Marketing Campaign</option>
                  <option value="ecommerce">E-Commerce Site</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="length" className="block text-sm font-medium mb-2">Content Length</label>
              <select 
                id="length" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="short">Short (200-500 words)</option>
                <option value="medium">Medium (500-1000 words)</option>
                <option value="long">Long (1000+ words)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="prompt" className="block text-sm font-medium mb-2">Content Prompt</label>
              <textarea 
                id="prompt" 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe what you want the AI to write about..."
              ></textarea>
            </div>
            
            <div className="flex justify-end gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
                Save Draft
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                Generate Content
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3">
          <div className="glass-card p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Insights</h2>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Keywords for Marketing Campaign</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  AI marketing
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  SEO optimization
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  Content strategy
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  Digital marketing
                </span>
                <span className="px-2 py-1 text-xs bg-white/10 rounded-full">
                  AI tools
                </span>
              </div>
              <button className="mt-2 text-xs text-primary">Generate More Keywords</button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Relevant Site Issues</h3>
              <div className="space-y-2">
                <div className="p-2 bg-white/5 rounded-md text-xs">
                  <p className="font-medium">Content lacks clarity in product descriptions</p>
                  <button className="mt-1 text-primary">Address</button>
                </div>
                <div className="p-2 bg-white/5 rounded-md text-xs">
                  <p className="font-medium">Missing H2 headings on blog pages</p>
                  <button className="mt-1 text-primary">Address</button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Competitor Content Ideas</h3>
              <div className="space-y-2">
                <div className="p-2 bg-white/5 rounded-md text-xs">
                  <p className="font-medium">Top 10 AI tools for marketers in 2025</p>
                  <button className="mt-1 text-primary">Generate Content Idea</button>
                </div>
                <div className="p-2 bg-white/5 rounded-md text-xs">
                  <p className="font-medium">How AI is revolutionizing content creation</p>
                  <button className="mt-1 text-primary">Generate Content Idea</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">AI Calls</h2>
              <span className="text-sm text-green-400">95/100 remaining today</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Generating content costs 1 AI Call. Content optimizations cost 1 AI Call per optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatePage;
