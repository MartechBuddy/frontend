
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users, BookOpen, Zap } from "lucide-react";

const CommunityPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with SEO professionals, share insights, get help, and stay updated with the latest SEO trends and MartechEngine features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="glass-card border-white/10 p-8">
          <MessageCircle className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">Discord Community</h3>
          <p className="text-muted-foreground mb-6">
            Join our active Discord server to chat with other users, get real-time help, and participate in discussions.
          </p>
          <Button>Join Discord</Button>
        </Card>
        
        <Card className="glass-card border-white/10 p-8">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-3">User Forum</h3>
          <p className="text-muted-foreground mb-6">
            Browse our community forum for in-depth discussions, feature requests, and user-generated content.
          </p>
          <Button variant="outline">Visit Forum</Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card border-white/10 p-6 text-center">
          <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Knowledge Sharing</h4>
          <p className="text-sm text-muted-foreground">
            Share your SEO strategies and learn from experienced professionals.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6 text-center">
          <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Feature Updates</h4>
          <p className="text-sm text-muted-foreground">
            Be the first to know about new features and product updates.
          </p>
        </Card>
        
        <Card className="glass-card border-white/10 p-6 text-center">
          <Users className="h-8 w-8 text-primary mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Networking</h4>
          <p className="text-sm text-muted-foreground">
            Connect with like-minded SEO professionals and grow your network.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CommunityPage;
