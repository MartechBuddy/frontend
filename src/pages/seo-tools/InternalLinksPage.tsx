
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link2, ExternalLink, AlertCircle } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const InternalLinksPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Internal Links</h1>
            <p className="text-muted-foreground mt-2">
              Visualize and optimize your internal link structure
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <Link2 className="h-4 w-4 mr-2" />
            Analyze Links
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Internal Link Analysis</CardTitle>
            <CardDescription>Map your site's internal link structure and find opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-20">
              <Link2 className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No link analysis available</h3>
              <p className="text-muted-foreground mb-4">
                Run an analysis to visualize your internal link structure
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Start Link Analysis</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Internal Link Analyzer"
        description="Our AI-powered internal link analysis tool is currently under development and will be available soon."
      />
    </>
  );
};

export default InternalLinksPage;
