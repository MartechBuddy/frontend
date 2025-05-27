
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Search, FileText, Target, Cog } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const QuickActions: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('');

  const actions = [
    {
      title: 'Create New Project',
      description: 'Add a new website to optimize',
      icon: <Plus className="h-5 w-5" />,
      color: 'bg-primary',
      action: () => handleComingSoon('Create New Project')
    },
    {
      title: 'Run Site Audit',
      description: 'Analyze current project for issues',
      icon: <Search className="h-5 w-5" />,
      color: 'bg-blue-500',
      action: () => handleComingSoon('Site Audit')
    },
    {
      title: 'Generate Content',
      description: 'Create AI-optimized blog posts',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-green-500',
      action: () => handleComingSoon('AI Content Generator')
    },
    {
      title: 'Discover Keywords',
      description: 'Find new keyword opportunities',
      icon: <Target className="h-5 w-5" />,
      color: 'bg-purple-500',
      action: () => handleComingSoon('Keyword Discovery')
    }
  ];

  const handleComingSoon = (feature: string) => {
    setSelectedFeature(feature);
    setShowComingSoon(true);
  };

  return (
    <>
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <Cog className="h-4 w-4 text-primary" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="glass-button p-4 h-auto flex flex-col items-start space-y-2"
              onClick={action.action}
            >
              <div className="flex items-center space-x-3 w-full">
                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                  {action.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName={selectedFeature}
        description={`${selectedFeature} is currently under development and will be available in the next update.`}
      />
    </>
  );
};

export default QuickActions;
