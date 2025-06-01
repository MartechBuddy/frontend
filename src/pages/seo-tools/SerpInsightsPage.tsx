
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const SerpInsightsPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">SERP Insights</h1>
            <p className="text-muted-foreground mt-2">
              Analyze search engine results pages for your target keywords
            </p>
          </div>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>SERP Analysis</CardTitle>
            <CardDescription>Enter a keyword to analyze the search results page</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Input placeholder="Enter a keyword to analyze SERP" />
              </div>
              <Button onClick={() => setShowComingSoon(true)}>
                <Search className="h-4 w-4 mr-2" />
                Analyze SERP
              </Button>
            </div>

            <div className="text-center py-16">
              <Eye className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Ready to analyze SERPs</h3>
              <p className="text-muted-foreground mb-4">
                Enter a keyword above to see detailed SERP analysis
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="SERP Insights"
        description="Our SERP analysis tool is currently under development and will be available soon."
      />
    </>
  );
};

export default SerpInsightsPage;
