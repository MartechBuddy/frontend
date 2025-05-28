
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const ProjectSettingsPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Project Settings</h1>
        <p className="text-muted-foreground">Manage your project configuration and integrations</p>
      </div>

      {/* General Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input id="projectName" placeholder="My Website" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Domain URL</Label>
            <Input id="domain" placeholder="https://example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Brief description of your project" />
          </div>
        </div>
      </Card>

      {/* Google Search Console */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Google Search Console</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">GSC Integration</p>
              <p className="text-sm text-muted-foreground">Connect to import search performance data</p>
            </div>
            <Button variant="outline">Connect GSC</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-refresh Data</p>
              <p className="text-sm text-muted-foreground">Automatically update GSC data daily</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* WordPress Integration */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">WordPress Integration</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">WordPress Connection</p>
              <p className="text-sm text-muted-foreground">Connect to push optimizations directly to your site</p>
            </div>
            <Button variant="outline">Connect WordPress</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="wpUrl">WordPress URL</Label>
            <Input id="wpUrl" placeholder="https://yoursite.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input id="apiKey" type="password" placeholder="Enter your WordPress API key" />
          </div>
        </div>
      </Card>

      {/* Crawl Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Crawl Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Deep Crawl</p>
              <p className="text-sm text-muted-foreground">Crawl all pages or limit depth</p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="crawlDepth">Max Crawl Depth</Label>
            <Input id="crawlDepth" type="number" placeholder="5" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excludeUrls">Exclude URLs (one per line)</Label>
            <textarea 
              id="excludeUrls" 
              className="w-full p-2 border rounded-md bg-background"
              rows={4}
              placeholder="/admin/&#10;/private/&#10;/test/"
            />
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-destructive">
        <h2 className="text-xl font-semibold mb-4 text-destructive">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Archive Project</p>
              <p className="text-sm text-muted-foreground">Archive this project (can be restored later)</p>
            </div>
            <Button variant="outline">Archive</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete Project</p>
              <p className="text-sm text-muted-foreground">Permanently delete this project and all its data</p>
            </div>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default ProjectSettingsPage;
