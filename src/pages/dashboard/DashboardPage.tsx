
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">AI Readiness Score</h3>
          <div className="flex items-end">
            <span className="text-4xl font-bold text-primary">85</span>
            <span className="text-muted-foreground ml-2 mb-1">/100</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Last checked: Today</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Content Items</h3>
          <div className="text-4xl font-bold">12</div>
          <p className="text-sm text-muted-foreground mt-2">2 pending optimization</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Active Campaigns</h3>
          <div className="text-4xl font-bold">3</div>
          <p className="text-sm text-muted-foreground mt-2">1 requires attention</p>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <div>
              <p className="font-medium">Content updated</p>
              <p className="text-sm text-muted-foreground">SEO blog post optimized</p>
            </div>
            <span className="text-sm text-muted-foreground">2 hours ago</span>
          </div>
          
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <div>
              <p className="font-medium">AI Readiness Check</p>
              <p className="text-sm text-muted-foreground">Score improved by 5 points</p>
            </div>
            <span className="text-sm text-muted-foreground">Yesterday</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Campaign Started</p>
              <p className="text-sm text-muted-foreground">Summer Marketing Campaign</p>
            </div>
            <span className="text-sm text-muted-foreground">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
