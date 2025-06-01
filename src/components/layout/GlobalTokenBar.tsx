
import React from 'react';
import { Zap, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const GlobalTokenBar: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data - would come from user context/API
  const tokensUsed = 45;
  const tokensTotal = 100;
  const tokensRemaining = tokensTotal - tokensUsed;
  const usagePercentage = (tokensUsed / tokensTotal) * 100;

  const handleTopUp = () => {
    navigate('/settings/billing');
  };

  return (
    <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
      <Zap size={16} className="text-blue-600" />
      <div className="flex flex-col min-w-[120px]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-700">Martech Tokens</span>
          <span className="text-xs text-gray-600">{tokensRemaining}/{tokensTotal}</span>
        </div>
        <Progress value={usagePercentage} className="h-1.5 mt-1" />
      </div>
      <Button 
        size="sm" 
        variant="outline" 
        onClick={handleTopUp}
        className="text-xs px-2 py-1 h-auto border-gray-200 text-gray-700 hover:bg-gray-100"
      >
        <Plus size={12} className="mr-1" />
        Top-up
      </Button>
    </div>
  );
};

export default GlobalTokenBar;
