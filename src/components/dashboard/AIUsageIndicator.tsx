
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const AIUsageIndicator: React.FC = () => {
  const currentUsage = 85;
  const totalCalls = 100;
  const usedCalls = 85;

  return (
    <div className="glass-card p-4 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">AI Usage</h3>
        <Zap className="h-4 w-4 text-primary" />
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Daily Calls Used</span>
          <span className="font-medium">{usedCalls}/{totalCalls}</span>
        </div>
        
        <Progress value={currentUsage} className="h-2" />
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Resets in 4 hours
          </span>
          <Button size="sm" variant="outline" className="glass-button text-xs">
            Top-up AI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIUsageIndicator;
