
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Target } from 'lucide-react';

const ContentKeywordsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Content Keywords</h1>
          <p className="text-muted-foreground mt-2">
            Organize and manage keywords for your content strategy
          </p>
        </div>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Find Keywords
        </Button>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Keyword Clusters</CardTitle>
          <CardDescription>Group related keywords into content clusters</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="text-center py-20">
            <Target className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No keyword clusters yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by searching for keywords or importing from your SEO tools
            </p>
            <Button>Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentKeywordsPage;
