
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCode, Check, AlertTriangle } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const RobotsTxtPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Robots.txt</h1>
            <p className="text-muted-foreground mt-2">
              Analyze and optimize your robots.txt file
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <FileCode className="h-4 w-4 mr-2" />
            Analyze Robots.txt
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Robots.txt Analysis</CardTitle>
            <CardDescription>Check your robots.txt file for issues and optimization opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-20">
              <FileCode className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No robots.txt analysis available</h3>
              <p className="text-muted-foreground mb-4">
                Analyze your robots.txt file to ensure proper crawling directives
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Start Analysis</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Robots.txt Analyzer"
        description="Our robots.txt analysis tool is currently under development and will be available soon."
      />
    </>
  );
};

export default RobotsTxtPage;
