
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Inbox = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Inbox</h1>
        <p className="text-muted-foreground">
          Manage and respond to social media messages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Message List */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Social media interactions</CardDescription>
            </div>
            <div className="relative w-36">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-8 glass-button border h-8"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-white/5">
              <div className="p-3 hover:bg-white/5 cursor-pointer bg-white/10">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                      <span className="text-xs text-white font-bold">TW</span>
                    </div>
                    <span className="font-medium">@user123</span>
                  </div>
                  <div className="text-xs text-muted-foreground">10:45 AM</div>
                </div>
                <p className="text-sm ml-10">Your blog post about AI tools was super helpful! Do you have any recommendations...</p>
                <div className="ml-10 mt-1 flex items-center">
                  <Badge className="bg-blue-600 text-xs">Twitter</Badge>
                  <Badge className="ml-1 bg-green-500 text-xs">Positive</Badge>
                </div>
              </div>

              <div className="p-3 hover:bg-white/5 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center mr-2">
                      <span className="text-xs text-white font-bold">FB</span>
                    </div>
                    <span className="font-medium">Jane Smith</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Yesterday</div>
                </div>
                <p className="text-sm ml-10">I've been trying to access your SEO guide but the link seems to be broken...</p>
                <div className="ml-10 mt-1 flex items-center">
                  <Badge className="bg-blue-800 text-xs">Facebook</Badge>
                  <Badge className="ml-1 bg-amber-500 text-xs">Neutral</Badge>
                </div>
              </div>

              <div className="p-3 hover:bg-white/5 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center mr-2">
                      <span className="text-xs text-white font-bold">IG</span>
                    </div>
                    <span className="font-medium">marketing_pro</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Yesterday</div>
                </div>
                <p className="text-sm ml-10">Great content as always! Would love to collaborate on a project sometime...</p>
                <div className="ml-10 mt-1 flex items-center">
                  <Badge className="bg-pink-600 text-xs">Instagram</Badge>
                  <Badge className="ml-1 bg-green-500 text-xs">Positive</Badge>
                </div>
              </div>

              <div className="p-3 hover:bg-white/5 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                      <span className="text-xs text-white font-bold">LI</span>
                    </div>
                    <span className="font-medium">Michael Chen</span>
                  </div>
                  <div className="text-xs text-muted-foreground">2 days ago</div>
                </div>
                <p className="text-sm ml-10">I disagree with your assessment of Google's new algorithm update. It actually...</p>
                <div className="ml-10 mt-1 flex items-center">
                  <Badge className="bg-blue-500 text-xs">LinkedIn</Badge>
                  <Badge className="ml-1 bg-red-500 text-xs">Negative</Badge>
                </div>
              </div>

              <div className="p-3 hover:bg-white/5 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                      <span className="text-xs text-white font-bold">TW</span>
                    </div>
                    <span className="font-medium">@seo_expert</span>
                  </div>
                  <div className="text-xs text-muted-foreground">3 days ago</div>
                </div>
                <p className="text-sm ml-10">Just shared your content optimization guide with my network. Great stuff!</p>
                <div className="ml-10 mt-1 flex items-center">
                  <Badge className="bg-blue-600 text-xs">Twitter</Badge>
                  <Badge className="ml-1 bg-green-500 text-xs">Positive</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message View */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                <span className="text-xs text-white font-bold">TW</span>
              </div>
              <div>
                <CardTitle>@user123</CardTitle>
                <CardDescription>Twitter • 10:45 AM</CardDescription>
              </div>
            </div>
            <Badge className="bg-green-500">Positive</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-bold">TW</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">@user123</span>
                      <span className="text-xs text-muted-foreground">10:45 AM</span>
                    </div>
                    <p className="text-sm">Your blog post about AI tools was super helpful! Do you have any recommendations for content generation tools that work well with SEO? Looking to upgrade our workflow.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-3 rounded-md ml-auto max-w-[90%]">
                <div className="flex gap-2 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                      <span className="font-medium">You</span>
                      <span className="text-xs text-muted-foreground">10:52 AM</span>
                    </div>
                    <p className="text-sm">Thanks for reaching out! For content generation with SEO in mind, I'd recommend trying ContentPilot AI or SEO Writer Pro. Both have excellent keyword integration and readability analysis.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Textarea 
                  placeholder="Type your reply..." 
                  className="glass-button border min-h-[100px]"
                />
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">AI Suggest</Button>
                    <Button variant="outline" size="sm">Templates</Button>
                  </div>
                  <Button>
                    <Send className="h-4 w-4 mr-1" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sentiment Analysis & AI Suggestions */}
        <div className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
              <CardDescription>Message tone and intent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/5 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Message Sentiment</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-sm">85%</span>
                  </div>
                  <p className="text-sm">This message has a positive sentiment with appreciation for your content and a specific question seeking advice.</p>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Customer Intent</h4>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Seeking information</span>
                    <span>85%</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Potential lead</span>
                    <span>65%</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer support</span>
                    <span>20%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Complaint</span>
                    <span>5%</span>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Topic Detection</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge className="bg-primary/20 text-primary">AI Tools</Badge>
                    <Badge className="bg-primary/20 text-primary">Content Creation</Badge>
                    <Badge className="bg-primary/20 text-primary">SEO</Badge>
                    <Badge className="bg-primary/20 text-primary">Workflow</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>AI Reply Suggestions</CardTitle>
              <CardDescription>Generated response options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md hover:bg-white/10 cursor-pointer">
                  <p className="text-sm">Thanks for your kind words! For SEO-friendly content generation, I'd recommend trying MarketMuse, Frase, or Clearscope. They all offer excellent keyword optimization and content analysis features.</p>
                  <Button variant="link" size="sm" className="p-0 mt-1">Use Reply</Button>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md hover:bg-white/10 cursor-pointer">
                  <p className="text-sm">Glad you found the post helpful! For content generation that works well with SEO, check out Jasper AI, Surfer SEO, or ContentPilot. Each has its strengths depending on your specific needs.</p>
                  <Button variant="link" size="sm" className="p-0 mt-1">Use Reply</Button>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md hover:bg-white/10 cursor-pointer">
                  <p className="text-sm">Thank you! For upgrading your SEO workflow, I'd suggest tools like Clearscope or Frase for content generation, combined with Surfer SEO for optimization. Happy to provide more specific recommendations if you share more about your needs.</p>
                  <Button variant="link" size="sm" className="p-0 mt-1">Use Reply</Button>
                </div>
                
                <Button variant="outline" className="w-full">
                  Generate More Suggestions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Message Analytics</Button>
        <Button variant="outline">Team Inbox Settings</Button>
      </div>
    </div>
  );
};

export default Inbox;
