
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Search, Upload } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const ContentOptimizerPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Content Optimizer</h1>
            <p className="text-muted-foreground mt-2">
              Optimize your content for search engines with AI
            </p>
          </div>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Optimize Content</CardTitle>
            <CardDescription>Improve your existing content for better search rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Button 
                variant="outline" 
                className="glass-button p-4 h-auto flex flex-col items-center space-y-3"
                onClick={() => setShowComingSoon(true)}
              >
                <Search className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <div className="font-medium">Analyze URL</div>
                  <div className="text-xs text-muted-foreground">Optimize a published page</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="glass-button p-4 h-auto flex flex-col items-center space-y-3"
                onClick={() => setShowComingSoon(true)}
              >
                <Upload className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <div className="font-medium">Upload Content</div>
                  <div className="text-xs text-muted-foreground">Optimize a draft or document</div>
                </div>
              </Button>
            </div>

            <div className="text-center py-16">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Ready to optimize content</h3>
              <p className="text-muted-foreground mb-4">
                Choose one of the options above to start optimizing
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Content Optimizer"
        description="Our AI-powered content optimization tool is currently under development and will be available soon."
      />
    </>
  );
};

export default ContentOptimizerPage;
