
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus } from 'lucide-react';
import ComingSoonPopup from '@/components/feedback/ComingSoonPopup';

const ContentSchedulerPage: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Content Scheduler</h1>
            <p className="text-muted-foreground mt-2">
              Schedule content publication to WordPress and social media
            </p>
          </div>
          <Button onClick={() => setShowComingSoon(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Content
          </Button>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Publishing Calendar</CardTitle>
            <CardDescription>Scheduled content publications</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-center py-20">
              <Calendar className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No scheduled content</h3>
              <p className="text-muted-foreground mb-4">
                Schedule your first content publication by selecting an article to publish
              </p>
              <Button onClick={() => setShowComingSoon(true)}>Schedule Content</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        featureName="Content Scheduler"
        description="Our content scheduling and publication system is currently under development and will be available soon."
      />
    </>
  );
};

export default ContentSchedulerPage;
