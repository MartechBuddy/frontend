
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Check, X, User, Users, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ContentCollaboration = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Content Collaboration</h1>
        <p className="text-muted-foreground">
          Invite team members and manage content approval workflows
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Team Members Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Invite and manage collaborators</CardDescription>
            </div>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Invite New Member</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Email address" 
                      className="glass-button border flex-1"
                    />
                    <select className="glass-button border rounded-md px-3 bg-transparent min-w-[120px]">
                      <option value="editor">Editor</option>
                      <option value="approver">Approver</option>
                      <option value="viewer">Viewer</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Send Invitation
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-xs text-muted-foreground">sarah@example.com</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-500">Editor</Badge>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Michael Chen</h4>
                        <p className="text-xs text-muted-foreground">michael@example.com</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">Approver</Badge>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Alex Rodriguez</h4>
                        <p className="text-xs text-muted-foreground">alex@example.com</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Viewer</Badge>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-md border border-dashed border-white/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <UserPlus className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium">Pending Invitation</h4>
                        <p className="text-xs text-muted-foreground">jessica@example.com</p>
                      </div>
                    </div>
                    <Badge variant="outline">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Approval Queue Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Content Approval Queue</CardTitle>
              <CardDescription>Review and approve content</CardDescription>
            </div>
            <Check className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">SEO Guide 2025 Update</h4>
                    <p className="text-xs text-muted-foreground">Blog post • 2,450 words</p>
                  </div>
                  <Badge className="bg-amber-500">Awaiting Review</Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2 mb-3">
                  <span>Created by: Sarah Johnson</span>
                  <span>May 2, 2025</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View</Button>
                  <Button size="sm" className="flex-1">
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">Social Media Strategy</h4>
                    <p className="text-xs text-muted-foreground">Twitter campaign • 5 posts</p>
                  </div>
                  <Badge className="bg-amber-500">Awaiting Review</Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2 mb-3">
                  <span>Created by: Alex Rodriguez</span>
                  <span>May 3, 2025</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View</Button>
                  <Button size="sm" className="flex-1">
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">May Newsletter</h4>
                    <p className="text-xs text-muted-foreground">Email • Monthly update</p>
                  </div>
                  <Badge className="bg-green-500">Approved</Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2 mb-3">
                  <span>Created by: Sarah Johnson</span>
                  <span>April 28, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-green-400 text-sm">
                    <Check className="h-4 w-4 mr-1" />
                    Approved by Michael Chen on May 1
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">Product Feature Highlight</h4>
                    <p className="text-xs text-muted-foreground">LinkedIn post • Product update</p>
                  </div>
                  <Badge className="bg-red-500">Rejected</Badge>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2 mb-3">
                  <span>Created by: Alex Rodriguez</span>
                  <span>April 30, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-red-400 text-sm">
                    <X className="h-4 w-4 mr-1" />
                    Rejected by Michael Chen on May 1
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments & Feedback Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Comments & Feedback</CardTitle>
              <CardDescription>Collaboration notes and discussions</CardDescription>
            </div>
            <MessageSquare className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Chen</h4>
                      <p className="text-xs text-muted-foreground">10:45 AM • Today</p>
                    </div>
                  </div>
                  <Badge variant="outline">SEO Guide</Badge>
                </div>
                <p className="text-sm">The section on meta descriptions needs more examples and practical tips. Also, please update the statistics to reflect 2025 data instead of 2024.</p>
                <div className="mt-3 flex justify-end">
                  <Button variant="link" size="sm" className="p-0 h-auto">Reply</Button>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-xs text-muted-foreground">9:15 AM • Today</p>
                    </div>
                  </div>
                  <Badge variant="outline">Social Strategy</Badge>
                </div>
                <p className="text-sm">I've updated all the Twitter post drafts with the new hashtags and made them more concise. Please review when you have a chance.</p>
                <div className="mt-3 flex justify-end">
                  <Button variant="link" size="sm" className="p-0 h-auto">Reply</Button>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-md">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Alex Rodriguez</h4>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                  <Badge variant="outline">Newsletter</Badge>
                </div>
                <p className="text-sm">The newsletter looks great! Could we add one more section on the upcoming webinar? I think our subscribers would be interested.</p>
                <div className="mt-3 flex justify-end">
                  <Button variant="link" size="sm" className="p-0 h-auto">Reply</Button>
                </div>
              </div>

              <div className="relative">
                <Input 
                  placeholder="Add a comment or feedback..." 
                  className="glass-button border pr-24"
                />
                <Button size="sm" className="absolute right-1 top-1">
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Status Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Workflow Status</CardTitle>
              <CardDescription>Content production pipeline</CardDescription>
            </div>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <h4 className="font-medium mb-3">Content Pipeline</h4>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white/10 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Draft</p>
                    <p className="text-lg font-bold">5</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Review</p>
                    <p className="text-lg font-bold">2</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Approved</p>
                    <p className="text-lg font-bold">3</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Published</p>
                    <p className="text-lg font-bold">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <h4 className="font-medium mb-2">Recent Activities</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>Sarah submitted SEO Guide</span>
                    <span className="text-xs text-muted-foreground">Today</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Michael approved Newsletter</span>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Alex edited Social Strategy</span>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Michael rejected Product Feature post</span>
                    <span className="text-xs text-muted-foreground">May 1</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <h4 className="font-medium mb-2">Upcoming Deadlines</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>Q2 Marketing Report</span>
                    <Badge className="bg-red-500">Tomorrow</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Product Launch Content</span>
                    <Badge className="bg-amber-500">May 10</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>SEO Review Meeting</span>
                    <Badge variant="outline">May 15</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Create Workflow</Button>
        <Button variant="outline">Team Settings</Button>
      </div>
    </div>
  );
};

export default ContentCollaboration;
