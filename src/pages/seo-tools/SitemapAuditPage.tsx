
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Search, AlertTriangle } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const SitemapAuditPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Sitemap Audit</h1>
            <p className="text-muted-foreground mt-2">
              Analyze your XML sitemaps for issues and optimization opportunities
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <Search className="h-4 w-4 mr-2" />
            Audit Sitemap
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Sitemap Analysis</CardTitle>
            <CardDescription>Check your XML sitemaps for errors and indexing issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-20">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No sitemap audit available</h3>
              <p className="text-muted-foreground mb-4">
                Run an audit to analyze your XML sitemaps
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Start Sitemap Audit</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Sitemap Audit"
        description="Our sitemap analysis tool is currently under development and will be available soon."
      />
    </>
  );
};

export default SitemapAuditPage;
