
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

const IntegrationsPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Integrations</h1>
        <p className="text-muted-foreground">Connect MartechEngine with your favorite tools and platforms</p>
      </div>

      {/* Connected Integrations */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Connected Integrations</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-500 font-bold">GSC</span>
              </div>
              <div>
                <h3 className="font-semibold">Google Search Console</h3>
                <p className="text-sm text-muted-foreground">Import search performance data</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Connected
              </Badge>
              <Switch defaultChecked />
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-500 font-bold">WP</span>
              </div>
              <div>
                <h3 className="font-semibold">WordPress</h3>
                <p className="text-sm text-muted-foreground">Push content and optimizations directly</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-500">
                <CheckCircle className="h-3 w-3 mr-1" />
                Connected
              </Badge>
              <Switch defaultChecked />
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Available Integrations */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Available Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold">GA</span>
              </div>
              <div>
                <h3 className="font-semibold">Google Analytics</h3>
                <p className="text-sm text-muted-foreground">Track traffic and conversions</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">FB</span>
              </div>
              <div>
                <h3 className="font-semibold">Facebook</h3>
                <p className="text-sm text-muted-foreground">Share content to social media</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">X</span>
              </div>
              <div>
                <h3 className="font-semibold">X (Twitter)</h3>
                <p className="text-sm text-muted-foreground">Auto-post content updates</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-700/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-700 font-bold">LI</span>
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Share professional content</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </Card>

      {/* Custom Integration */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Custom API Integration</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiUrl">API Endpoint URL</Label>
            <Input id="apiUrl" placeholder="https://api.yourservice.com/webhook" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input id="apiKey" type="password" placeholder="Enter your API key" />
          </div>
          <div className="flex gap-2">
            <Button>Test Connection</Button>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              API Documentation
            </Button>
          </div>
        </div>
      </Card>

      {/* Integration Status */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Integration Health</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Google Search Console</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">Healthy</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>WordPress Connection</span>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-yellow-500">Needs Attention</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>API Rate Limits</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">Within Limits</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IntegrationsPage;
