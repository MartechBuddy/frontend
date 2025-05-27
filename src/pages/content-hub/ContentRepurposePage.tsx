
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Repeat, FileText } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const ContentRepurposePage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Content Repurposing</h1>
            <p className="text-muted-foreground mt-2">
              Convert existing content into different formats with AI
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <Repeat className="h-4 w-4 mr-2" />
            Repurpose Content
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Content Transformation</CardTitle>
            <CardDescription>Turn blog posts into various content formats</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-center py-20">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No repurposed content yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first repurposed content by selecting an article to transform
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Start Repurposing</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Content Repurposing"
        description="Our AI-powered content repurposing tool is currently under development and will be available soon."
      />
    </>
  );
};

export default ContentRepurposePage;
