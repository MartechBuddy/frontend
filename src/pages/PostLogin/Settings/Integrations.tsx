
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Link2 } from "lucide-react";

const IntegrationsSettings = () => {
  const { toast } = useToast();
  const [wordpressUrl, setWordpressUrl] = React.useState("");
  const [wordpressUser, setWordpressUser] = React.useState("");
  const [wordpressPass, setWordpressPass] = React.useState("");
  
  const [twitterConnected, setTwitterConnected] = React.useState(false);
  const [linkedinConnected, setLinkedinConnected] = React.useState(false);
  const [facebookConnected, setFacebookConnected] = React.useState(false);

  const handleWordpressConnect = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would attempt to connect to WordPress
    toast({
      title: "WordPress Connection",
      description: "Successfully connected to your WordPress site.",
    });
  };

  const handleSocialConnect = (platform: string) => {
    // In a real app, this would open OAuth flow for the platform
    toast({
      title: `${platform} Connection`,
      description: `Successfully connected to your ${platform} account.`,
    });
    
    // Toggle the connection state
    if (platform === 'Twitter') setTwitterConnected(true);
    if (platform === 'LinkedIn') setLinkedinConnected(true);
    if (platform === 'Facebook') setFacebookConnected(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Integrations</h3>
        <p className="text-sm text-muted-foreground">
          Connect external services to enhance your experience
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>WordPress</CardTitle>
          <CardDescription>Connect your WordPress site to sync content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleWordpressConnect} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="wordpress-url">WordPress Site URL</Label>
              <Input 
                id="wordpress-url" 
                value={wordpressUrl} 
                onChange={(e) => setWordpressUrl(e.target.value)} 
                placeholder="https://example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wordpress-user">Username</Label>
              <Input 
                id="wordpress-user" 
                value={wordpressUser} 
                onChange={(e) => setWordpressUser(e.target.value)} 
                placeholder="Your WordPress username"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wordpress-pass">Application Password</Label>
              <Input 
                id="wordpress-pass" 
                type="password" 
                value={wordpressPass} 
                onChange={(e) => setWordpressPass(e.target.value)} 
                placeholder="Your WordPress application password"
              />
            </div>
            <Button type="submit">Connect WordPress</Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Social Media</CardTitle>
          <CardDescription>Connect your social media accounts for posting and analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                <span>Twitter / X</span>
              </div>
              {twitterConnected ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-500">Connected</span>
                  <Switch checked={true} onCheckedChange={() => setTwitterConnected(false)} />
                </div>
              ) : (
                <Button onClick={() => handleSocialConnect('Twitter')} variant="outline" size="sm">Connect</Button>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                <span>LinkedIn</span>
              </div>
              {linkedinConnected ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-500">Connected</span>
                  <Switch checked={true} onCheckedChange={() => setLinkedinConnected(false)} />
                </div>
              ) : (
                <Button onClick={() => handleSocialConnect('LinkedIn')} variant="outline" size="sm">Connect</Button>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                <span>Facebook</span>
              </div>
              {facebookConnected ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-500">Connected</span>
                  <Switch checked={true} onCheckedChange={() => setFacebookConnected(false)} />
                </div>
              ) : (
                <Button onClick={() => handleSocialConnect('Facebook')} variant="outline" size="sm">Connect</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegrationsSettings;
