
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus } from 'lucide-react';

const SocialPostsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Social Media Posts</h1>
          <p className="text-muted-foreground mt-2">
            Create, manage and schedule social media content
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Your Posts</CardTitle>
          <CardDescription>All your social media content in one place</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="text-center py-20">
            <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No posts created yet</h3>
            <p className="text-muted-foreground mb-4">
              Start creating social media posts with AI assistance
            </p>
            <Button>Create Your First Post</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialPostsPage;
