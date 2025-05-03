
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart, FileText, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContentPerformance = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Content Performance</h1>
        <p className="text-muted-foreground">
          Track engagement, traffic, and conversion metrics for your content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Real-Time Stats Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Real-Time Stats</CardTitle>
              <CardDescription>Live performance data</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500">Live</Badge>
              <span className="text-xs text-muted-foreground">
                Updated 2 minutes ago
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Active Users</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
                <div className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 
                  <span>5 from last hour</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Most Active Page</p>
                <h3 className="text-lg font-bold mt-1 truncate">SEO Guide</h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>12 active users</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Social Engagement</p>
                <h3 className="text-2xl font-bold mt-1">128</h3>
                <div className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 
                  <span>23% from yesterday</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Conversions Today</p>
                <h3 className="text-2xl font-bold mt-1">8</h3>
                <div className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> 
                  <span>2 from yesterday</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Trends Card */}
        <Card className="glass-card border-white/10 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Traffic Trends</CardTitle>
              <CardDescription>Content views over time</CardDescription>
            </div>
            <AreaChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <div className="space-y-1">
                    <p className="font-medium">Traffic by Source</p>
                    <p className="text-xs text-muted-foreground">Last 30 days comparison</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7">Daily</Button>
                    <Button size="sm" variant="outline" className="h-7">Weekly</Button>
                    <Button size="sm" className="h-7">Monthly</Button>
                  </div>
                </div>
                
                {/* Placeholder for traffic chart */}
                <div className="h-48 bg-white/5 rounded flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Traffic trends visualization</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 mt-3">
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-1"></div>
                    <p className="text-xs">Organic</p>
                    <p className="text-sm font-medium">60%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-1"></div>
                    <p className="text-xs">Social</p>
                    <p className="text-sm font-medium">25%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mx-auto mb-1"></div>
                    <p className="text-xs">Direct</p>
                    <p className="text-sm font-medium">10%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mx-auto mb-1"></div>
                    <p className="text-xs">Referral</p>
                    <p className="text-sm font-medium">5%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predictions Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>AI Predictions</CardTitle>
              <CardDescription>Content performance forecasts</CardDescription>
            </div>
            <Star className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Traffic Predictions</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>Next 7 days</span>
                    <span className="font-medium">~4,200 visits</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>30-day forecast</span>
                    <span className="font-medium">~18,500 visits</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Growth trend</span>
                    <span className="font-medium text-green-400">+12%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Content Recommendations</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <span>Update SEO Guide</span>
                    <Badge className="bg-green-500">High Impact</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Add video to Blog Post #12</span>
                    <Badge className="bg-amber-500">Medium Impact</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Create related content</span>
                    <Badge className="bg-amber-500">Medium Impact</Badge>
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="w-full">View All Predictions</Button>
            </div>
          </CardContent>
        </Card>

        {/* Top Content Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Most engaging pages</CardDescription>
            </div>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">SEO Guide 2025</h4>
                    <Badge variant="outline">Guide</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Published: Mar 15, 2025</span>
                    <span>Updated: Apr 28, 2025</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Page Views</p>
                      <p className="font-medium">2,845</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Avg. Time</p>
                      <p className="font-medium">4:32</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Bounce Rate</p>
                      <p className="font-medium">32%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                      <p className="font-medium">48</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">Social Media Strategy</h4>
                    <Badge variant="outline">Blog</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Published: Apr 02, 2025</span>
                    <span>Updated: Apr 02, 2025</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Page Views</p>
                      <p className="font-medium">1,876</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Avg. Time</p>
                      <p className="font-medium">5:15</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Bounce Rate</p>
                      <p className="font-medium">28%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                      <p className="font-medium">32</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">View All Content</Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Performance Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Social Performance</CardTitle>
              <CardDescription>Content engagement on social platforms</CardDescription>
            </div>
            <BarChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-3">Platform Engagement</p>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                        <span>Twitter</span>
                      </div>
                      <span>2,458 engagements</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-800 mr-2"></div>
                        <span>Facebook</span>
                      </div>
                      <span>1,842 engagements</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-blue-800 h-2 rounded-full" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-pink-600 mr-2"></div>
                        <span>Instagram</span>
                      </div>
                      <span>3,215 engagements</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-pink-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>LinkedIn</span>
                      </div>
                      <span>914 engagements</span>
                    </div>
                    <div className="bg-white/10 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">View Social Media Report</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Action Items Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>Content optimization opportunities</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-md">
                <h4 className="font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-primary" />
                  Update SEO Guide Content
                </h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Some information is outdated and keyword opportunities exist.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Update</Button>
                  <Button size="sm" variant="outline" className="flex-1">Details</Button>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-md">
                <h4 className="font-medium flex items-center">
                  <AreaChart className="h-4 w-4 mr-2 text-primary" />
                  Improve Social Sharing
                </h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Top-performing content needs better social share buttons and previews.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Optimize</Button>
                  <Button size="sm" variant="outline" className="flex-1">Details</Button>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-md">
                <h4 className="font-medium flex items-center">
                  <BarChart className="h-4 w-4 mr-2 text-primary" />
                  Create Related Content
                </h4>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  High-performing topics show demand for additional related content.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Create</Button>
                  <Button size="sm" variant="outline" className="flex-1">Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Export Performance Report</Button>
        <Button variant="outline">Schedule Content Review</Button>
      </div>
    </div>
  );
};

export default ContentPerformance;
