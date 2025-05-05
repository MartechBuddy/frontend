
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Calendar, BarChart, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const SocialMedia = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Social Media</h1>
        <p className="text-muted-foreground">
          Manage your social media content, scheduling, and analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post Creator Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Post Creator</CardTitle>
              <CardDescription>Create and schedule social media posts</CardDescription>
            </div>
            <PenTool className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between mb-2">
                  <p className="font-medium">New Post</p>
                  <div className="flex gap-1">
                    <Badge className="bg-blue-600">Twitter</Badge>
                    <Badge className="bg-blue-800">Facebook</Badge>
                    <Badge className="bg-pink-600">Instagram</Badge>
                  </div>
                </div>
                <Textarea 
                  placeholder="What's on your mind?" 
                  className="bg-background border-white/20 mb-3"
                  rows={4}
                />
                <div className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule
                  </Button>
                  <Button size="sm">Create Post</Button>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">AI Post Generator</p>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 mb-1">
                    <Badge variant="outline" className="hover:bg-white/10 cursor-pointer">Product Launch</Badge>
                    <Badge variant="outline" className="hover:bg-white/10 cursor-pointer">Industry News</Badge>
                    <Badge variant="outline" className="hover:bg-white/10 cursor-pointer">Educational</Badge>
                    <Badge variant="outline" className="hover:bg-white/10 cursor-pointer">Testimonial</Badge>
                  </div>
                  <Button className="w-full">Generate Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Optimizer Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Content Optimizer</CardTitle>
              <CardDescription>Improve engagement and readability</CardDescription>
            </div>
            <MessageSquare className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Post Analysis</p>
                <Textarea 
                  placeholder="Paste your post text to analyze..." 
                  className="bg-background border-white/20 mb-3"
                  rows={3}
                />
                <Button className="w-full">Analyze Post</Button>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Optimization Tips</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="block font-medium">Add hashtags</span>
                    <span className="text-muted-foreground">Increase reach with relevant hashtags</span>
                  </li>
                  <li>
                    <span className="block font-medium">Include a question</span>
                    <span className="text-muted-foreground">Boost engagement with questions</span>
                  </li>
                  <li>
                    <span className="block font-medium">Shorten sentences</span>
                    <span className="text-muted-foreground">Keep content concise and readable</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Posts Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Scheduled Posts</CardTitle>
              <CardDescription>Upcoming social media content</CardDescription>
            </div>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="block font-medium">Product Feature Highlight</span>
                    <span className="text-xs text-muted-foreground">May 5, 2025 • 10:00 AM</span>
                  </div>
                  <Badge className="bg-blue-600">Twitter</Badge>
                </div>
                <p className="text-sm">Check out our latest AI content generator feature! Create engaging posts in seconds. #AIMarketing #ContentCreation</p>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="block font-medium">Customer Success Story</span>
                    <span className="text-xs text-muted-foreground">May 6, 2025 • 2:00 PM</span>
                  </div>
                  <div className="flex gap-1">
                    <Badge className="bg-blue-800">Facebook</Badge>
                    <Badge className="bg-pink-600">Instagram</Badge>
                  </div>
                </div>
                <p className="text-sm">See how Company X increased their organic traffic by 200% using our SEO tools!</p>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="block font-medium">Weekly SEO Tip</span>
                    <span className="text-xs text-muted-foreground">May 7, 2025 • 11:30 AM</span>
                  </div>
                  <div className="flex gap-1">
                    <Badge className="bg-blue-600">Twitter</Badge>
                    <Badge className="bg-blue-800">Facebook</Badge>
                  </div>
                </div>
                <p className="text-sm">Pro Tip: Update your meta descriptions regularly to improve CTR. Here's how to do it efficiently...</p>
              </div>

              <Button variant="outline" className="w-full">View All Scheduled Posts</Button>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Social media engagement metrics</CardDescription>
            </div>
            <BarChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">Impressions</p>
                  <p className="text-2xl font-bold mt-1">12.4K</p>
                  <p className="text-xs text-green-400">↑ 15% from last week</p>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-2xl font-bold mt-1">3.2K</p>
                  <p className="text-xs text-green-400">↑ 8% from last week</p>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">Link Clicks</p>
                  <p className="text-2xl font-bold mt-1">845</p>
                  <p className="text-xs text-green-400">↑ 12% from last week</p>
                </div>
                <div className="bg-white/5 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">New Followers</p>
                  <p className="text-2xl font-bold mt-1">126</p>
                  <p className="text-xs text-amber-400">↓ 3% from last week</p>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Top Performing Post</p>
                <p className="text-sm mb-2">Our guide to AI-driven content creation is live! Check it out to boost your marketing efficiency.</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>2,340 impressions</span>
                  <span>518 engagements</span>
                  <span>22.1% rate</span>
                </div>
              </div>

              <Button className="w-full">View Full Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Create Campaign</Button>
        <Button variant="outline">Social Media Report</Button>
      </div>
    </div>
  );
};

export default SocialMedia;
