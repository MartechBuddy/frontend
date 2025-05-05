
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, AreaChart, Link, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const SiteOptimization = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Site Optimization</h1>
        <p className="text-muted-foreground">
          Enhance your website's performance, visibility, and user experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hub Overview Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Site Overview</CardTitle>
              <CardDescription>Performance summary and key metrics</CardDescription>
            </div>
            <Globe className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Domain Authority</p>
                <h3 className="text-2xl font-bold mt-1">45</h3>
                <p className="text-xs text-green-400">↑ 2 this month</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Site Health</p>
                <h3 className="text-2xl font-bold mt-1">78%</h3>
                <p className="text-xs text-amber-400">15 issues found</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Traffic</p>
                <h3 className="text-2xl font-bold mt-1">1,342</h3>
                <p className="text-xs text-green-400">↑ 15% from last month</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Top Keywords</p>
                <h3 className="text-2xl font-bold mt-1">5</h3>
                <p className="text-xs text-muted-foreground">in top 10 positions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competitor Insights Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Competitor Insights</CardTitle>
              <CardDescription>Compare website metrics</CardDescription>
            </div>
            <AreaChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Site</span>
                  <span>DA: 45</span>
                </div>
                <div className="bg-white/10 h-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Competitor A</span>
                  <span>DA: 52</span>
                </div>
                <div className="bg-white/10 h-2 rounded-full">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: "52%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Competitor B</span>
                  <span>DA: 38</span>
                </div>
                <div className="bg-white/10 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Add Competitor</Button>
            </div>
          </CardContent>
        </Card>

        {/* Keyword Explorer Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Keyword Explorer</CardTitle>
              <CardDescription>Search volume and metrics</CardDescription>
            </div>
            <Link className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search keywords..." 
                  className="w-full glass-button border p-2 rounded-md pl-3" 
                />
                <Button size="sm" className="absolute right-1 top-1">
                  Search
                </Button>
              </div>
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium">Top Performing Keywords</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between text-sm">
                    <span>SEO software</span>
                    <span className="text-green-400">Rank: 3</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>AI marketing tools</span>
                    <span className="text-green-400">Rank: 5</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Content optimization</span>
                    <span className="text-amber-400">Rank: 12</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Generate Ideas
                </Button>
                <Button variant="outline" className="flex-1">
                  See All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical SEO Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Technical SEO</CardTitle>
              <CardDescription>Health check and fixes</CardDescription>
            </div>
            <CheckSquare className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Site Health Score</p>
                  <p className="text-sm text-muted-foreground">15 issues found</p>
                </div>
                <div className="text-2xl font-bold">78%</div>
              </div>
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Critical Issues</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-red-400">3 broken links</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Fix Now</Button>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-amber-400">5 missing alt texts</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Fix Now</Button>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-amber-400">2 duplicate meta descriptions</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Fix Now</Button>
                  </li>
                </ul>
              </div>
              <Button className="w-full">Run Full Health Check</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Generate SEO Report</Button>
        <Button variant="outline">Schedule Optimization</Button>
      </div>
    </div>
  );
};

export default SiteOptimization;
