
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, AlertCircle, Target, ExternalLink } from 'lucide-react';

const TopOpportunities: React.FC = () => {
  const opportunities = [
    {
      id: 1,
      type: 'critical',
      title: 'Fix 15 Broken Internal Links',
      description: 'AI detected broken links affecting user experience and SEO',
      impact: 'High',
      effort: 'Low',
      icon: <AlertCircle className="h-4 w-4 text-red-500" />
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'Optimize "Digital Marketing" Keywords',
      description: 'Page ranking #8, AI suggests content improvements to reach top 3',
      impact: 'Medium',
      effort: 'Medium',
      icon: <Target className="h-4 w-4 text-yellow-500" />
    },
    {
      id: 3,
      type: 'growth',
      title: 'Create Content for "AI Tools" Cluster',
      description: 'High-volume keyword cluster with low competition detected',
      impact: 'High',
      effort: 'High',
      icon: <TrendingUp className="h-4 w-4 text-green-500" />
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Top Opportunities</h3>
        <TrendingUp className="h-4 w-4 text-primary" />
      </div>
      
      <div className="space-y-4">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                {opportunity.icon}
                <h4 className="font-medium text-sm">{opportunity.title}</h4>
              </div>
              <div className="flex space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  opportunity.impact === 'High' 
                    ? 'bg-red-500/10 text-red-500'
                    : opportunity.impact === 'Medium'
                    ? 'bg-yellow-500/10 text-yellow-500'
                    : 'bg-blue-500/10 text-blue-500'
                }`}>
                  {opportunity.impact} Impact
                </span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3">
              {opportunity.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                Effort: {opportunity.effort}
              </span>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="glass-button text-xs">
                  View Details
                </Button>
                <Button size="sm" className="text-xs">
                  Apply Fix
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <Button variant="outline" className="w-full glass-button">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All Opportunities
        </Button>
      </div>
    </div>
  );
};

export default TopOpportunities;
