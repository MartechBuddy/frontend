
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Target, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const KeywordGeneratorPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Keyword Generator</h1>
            <p className="text-muted-foreground mt-2">
              Discover new keyword opportunities with AI
            </p>
          </div>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Generate Keywords</CardTitle>
            <CardDescription>Enter a seed keyword to generate related keyword ideas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Input placeholder="Enter a seed keyword (e.g. digital marketing)" />
              </div>
              <Button onClick={() => setShowComingSoon(true)}>
                <Search className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>

            <div className="text-center py-16">
              <Target className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Ready to discover keywords</h3>
              <p className="text-muted-foreground mb-4">
                Enter a seed keyword above to generate ideas and opportunities
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="AI Keyword Generator"
        description="Our AI-powered keyword discovery tool is currently under development and will be available soon."
      />
    </>
  );
};

export default KeywordGeneratorPage;
