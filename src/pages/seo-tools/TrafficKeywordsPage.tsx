
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, TrendingUp, RefreshCcw } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const TrafficKeywordsPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Traffic Keywords</h1>
            <p className="text-muted-foreground mt-2">
              Analyze keywords driving traffic to your site
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Traffic Analysis</CardTitle>
            <CardDescription>Keywords from Google Search Console</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-center py-20">
              <LineChart className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No traffic data available</h3>
              <p className="text-muted-foreground mb-4">
                Connect Google Search Console to analyze keywords driving traffic
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Connect GSC</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Traffic Keywords"
        description="Our traffic analysis and keyword insights tool is currently under development and will be available soon."
      />
    </>
  );
};

export default TrafficKeywordsPage;
