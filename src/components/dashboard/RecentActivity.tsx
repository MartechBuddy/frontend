
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, FileText, Search, Link, CheckCircle } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'content',
      title: 'Blog post "AI SEO Guide" generated',
      time: '2 minutes ago',
      status: 'completed',
      icon: <FileText className="h-4 w-4 text-green-500" />
    },
    {
      id: 2,
      type: 'audit',
      title: 'Site audit completed for mywebsite.com',
      time: '15 minutes ago', 
      status: 'completed',
      icon: <Search className="h-4 w-4 text-blue-500" />
    },
    {
      id: 3,
      type: 'links',
      title: 'Internal link suggestions generated',
      time: '1 hour ago',
      status: 'pending',
      icon: <Link className="h-4 w-4 text-yellow-500" />
    },
    {
      id: 4,
      type: 'fix',
      title: 'Meta descriptions updated',
      time: '2 hours ago',
      status: 'completed',
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent AI Activity</h3>
        <Clock className="h-4 w-4 text-primary" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex-shrink-0 mt-0.5">
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <div className="flex-shrink-0">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                activity.status === 'completed' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-yellow-500/10 text-yellow-500'
              }`}>
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <Button variant="outline" className="w-full glass-button">
          View All Activity
        </Button>
      </div>
    </div>
  );
};

export default RecentActivity;
