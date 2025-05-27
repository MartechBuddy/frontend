
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialAccountsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Social Media Accounts</h1>
          <p className="text-muted-foreground mt-2">
            Connect and manage your social media accounts
          </p>
        </div>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Connect Account
        </Button>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>Social media profiles linked to your MartechEngine account</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="text-center py-20">
            <div className="flex justify-center space-x-4 mb-6">
              <Facebook className="h-8 w-8 text-muted-foreground" />
              <Twitter className="h-8 w-8 text-muted-foreground" />
              <Instagram className="h-8 w-8 text-muted-foreground" />
              <Linkedin className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No accounts connected</h3>
            <p className="text-muted-foreground mb-4">
              Connect your social media accounts to schedule and analyze posts
            </p>
            <Button>Connect Your First Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialAccountsPage;
