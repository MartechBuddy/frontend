
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layout, Target, Plus } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const KeywordPlannerPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Keyword Planner</h1>
            <p className="text-muted-foreground mt-2">
              Plan your content strategy with clustered keywords
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Keyword Plan
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Keyword Clusters</CardTitle>
            <CardDescription>Organize keywords into content clusters for strategic planning</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-center py-20">
              <Layout className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No keyword plans created</h3>
              <p className="text-muted-foreground mb-4">
                Create your first keyword plan to organize your content strategy
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Create Keyword Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Keyword Planner"
        description="Our AI-powered keyword clustering and planning tool is currently under development and will be available soon."
      />
    </>
  );
};

export default KeywordPlannerPage;
