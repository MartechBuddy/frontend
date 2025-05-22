
import React from 'react';

const SiteAuditPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Site Audit</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Site Health</h2>
            <p className="text-sm text-muted-foreground">Last crawl: May 22, 2025 (42 pages analyzed)</p>
          </div>
          
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
            Run New Audit
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Overall Health</h3>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-green-400">85</div>
              <div className="text-sm text-muted-foreground ml-2">/100</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+5 points since last audit</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Critical Issues</h3>
            <div className="text-3xl font-bold text-red-400">3</div>
            <p className="text-xs text-muted-foreground mt-1">-2 since last audit</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Warnings</h3>
            <div className="text-3xl font-bold text-yellow-400">12</div>
            <p className="text-xs text-muted-foreground mt-1">-5 since last audit</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Healthy Pages</h3>
            <div className="text-3xl font-bold text-green-400">27</div>
            <p className="text-xs text-muted-foreground mt-1">+7 since last audit</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Critical Issues</h3>
          
          <div className="space-y-4">
            <div className="border border-red-500/20 rounded-lg p-4 hover:bg-white/5 transition">
              <div className="flex justify-between">
                <h4 className="font-medium text-red-400">3 Pages with Broken Links</h4>
                <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">Critical</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Broken links hurt user experience and SEO. Fix these links to improve site health.
              </p>
              <div className="mt-3 text-sm">
                <p className="text-muted-foreground">Affected pages:</p>
                <ul className="mt-1 space-y-1 ml-4 list-disc">
                  <li>/blog/ai-trends-2025</li>
                  <li>/products/enterprise-solutions</li>
                  <li>/resources/case-studies</li>
                </ul>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Fix Now</button>
                <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">View Details</button>
              </div>
            </div>
            
            <div className="border border-red-500/20 rounded-lg p-4 hover:bg-white/5 transition">
              <div className="flex justify-between">
                <h4 className="font-medium text-red-400">Missing Meta Descriptions (5 pages)</h4>
                <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">Critical</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Meta descriptions are crucial for SEO and click-through rates from search results.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Generate Descriptions</button>
                <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">View Details</button>
              </div>
            </div>
            
            <div className="border border-red-500/20 rounded-lg p-4 hover:bg-white/5 transition">
              <div className="flex justify-between">
                <h4 className="font-medium text-red-400">Slow Page Speed (4 pages)</h4>
                <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full">Critical</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pages taking longer than 3 seconds to load may have high bounce rates and poor rankings.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">View Optimization Tips</button>
                <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">View Details</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Warnings</h3>
          
          <div className="space-y-4">
            <div className="border border-yellow-500/20 rounded-lg p-4 hover:bg-white/5 transition">
              <div className="flex justify-between">
                <h4 className="font-medium text-yellow-400">Missing Alt Text on Images (8 pages)</h4>
                <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Warning</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Alt text improves accessibility and helps search engines understand your images.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Generate Alt Text</button>
                <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">View Details</button>
              </div>
            </div>
            
            <div className="border border-yellow-500/20 rounded-lg p-4 hover:bg-white/5 transition">
              <div className="flex justify-between">
                <h4 className="font-medium text-yellow-400">Low Word Count (7 pages)</h4>
                <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Warning</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pages with less than 300 words may be considered thin content by search engines.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-md hover:bg-primary/30">Enhance Content</button>
                <button className="px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteAuditPage;
