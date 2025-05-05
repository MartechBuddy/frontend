
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Plug, Check, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const IntegrationsSettings = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Integrations</h1>
        <p className="text-muted-foreground">
          Connect your accounts and external services
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plug className="mr-2 h-5 w-5 text-primary" />
            Social Media Accounts
          </CardTitle>
          <CardDescription>
            Connect your social media accounts to enable publishing and analytics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Twitter</h4>
                  <p className="text-xs text-muted-foreground">Publish tweets and analyze engagement</p>
                </div>
              </div>
              <Badge className="bg-green-500">Connected</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Facebook</h4>
                  <p className="text-xs text-muted-foreground">Publish posts and manage pages</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-xs text-muted-foreground">Schedule posts and stories</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-xs text-muted-foreground">Publish professional content</p>
                </div>
              </div>
              <Badge className="bg-green-500">Connected</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Refresh completed",
              description: "All account connections have been refreshed.",
            });
          }}>Refresh Connections</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your social media integration settings have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plug className="mr-2 h-5 w-5 text-primary" />
            WordPress Integration
          </CardTitle>
          <CardDescription>
            Connect your WordPress site to publish content directly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="site_url">WordPress Site URL</Label>
              <Input 
                id="site_url" 
                placeholder="https://example.com" 
                className="glass-button border"
                defaultValue="https://myblog.example.com"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="WordPress username" 
                  className="glass-button border"
                  defaultValue="admin"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api_key">API Key</Label>
                <Input 
                  id="api_key" 
                  type="password" 
                  placeholder="••••••••••••••••" 
                  className="glass-button border"
                  defaultValue="api_key_123456"
                />
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-md flex items-center">
              <Check className="text-green-500 h-5 w-5 mr-2" />
              <div>
                <p className="text-sm font-medium text-green-500">Connection successful</p>
                <p className="text-xs text-green-500/70">WordPress v6.2 detected</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Connection tested",
              description: "WordPress connection is working properly.",
            });
          }}>Test Connection</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your WordPress integration settings have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plug className="mr-2 h-5 w-5 text-primary" />
            Analytics Integrations
          </CardTitle>
          <CardDescription>
            Connect analytics platforms to track performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Google Analytics</h4>
                  <p className="text-xs text-muted-foreground">Track website traffic and behavior</p>
                </div>
              </div>
              <Badge className="bg-green-500">Connected</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Google Search Console</h4>
                  <p className="text-xs text-muted-foreground">Monitor search performance</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Mixpanel</h4>
                  <p className="text-xs text-muted-foreground">Product analytics and user behavior</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-md flex items-center">
              <AlertCircle className="text-amber-500 h-5 w-5 mr-2" />
              <div>
                <p className="text-sm font-medium text-amber-500">Analytics Connection Note</p>
                <p className="text-xs text-amber-500/70">For optimal performance, update your tracking codes every 6 months</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Connections refreshed",
              description: "Analytics integrations have been refreshed.",
            });
          }}>Refresh Connections</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your analytics integration settings have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default IntegrationsSettings;
