
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Download, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsightsReports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Insights & Reports</h1>
        <p className="text-muted-foreground">
          Monitor performance metrics and generate detailed reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Overview Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Analytics Overview</CardTitle>
              <CardDescription>Key performance indicators</CardDescription>
            </div>
            <BarChart className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Traffic</p>
                <h3 className="text-2xl font-bold mt-1">12,845</h3>
                <p className="text-xs text-green-400">↑ 18% from last month</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <h3 className="text-2xl font-bold mt-1">3.2%</h3>
                <p className="text-xs text-green-400">↑ 0.5% from last month</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Keyword Rankings</p>
                <h3 className="text-2xl font-bold mt-1">142</h3>
                <p className="text-xs text-green-400">↑ 12 new keywords</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Social Engagement</p>
                <h3 className="text-2xl font-bold mt-1">8,429</h3>
                <p className="text-xs text-amber-400">↓ 3% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Insights Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Traffic Insights</CardTitle>
              <CardDescription>Visitor data and trends</CardDescription>
            </div>
            <TrendingUp className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between">
                  <p className="font-medium">Monthly Traffic</p>
                  <div className="text-sm">
                    <select className="bg-transparent text-sm">
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last year</option>
                    </select>
                  </div>
                </div>
                
                {/* Placeholder for traffic chart */}
                <div className="mt-3 h-32 bg-white/5 rounded flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Traffic trend visualization</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Organic Traffic</p>
                    <p className="text-lg font-bold">8,245</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Direct Traffic</p>
                    <p className="text-lg font-bold">2,156</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Referral Traffic</p>
                    <p className="text-lg font-bold">1,892</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Social Traffic</p>
                    <p className="text-lg font-bold">552</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">View Detailed Traffic Report</Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Exports Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Data Exports</CardTitle>
              <CardDescription>Download reports and data</CardDescription>
            </div>
            <Download className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <p className="font-medium">SEO Performance</p>
                    <p className="text-xs text-muted-foreground">Keyword rankings, traffic, backlinks</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">PDF</Button>
                    <Button size="sm" variant="outline">CSV</Button>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <p className="font-medium">Social Media Analytics</p>
                    <p className="text-xs text-muted-foreground">Engagement, followers, clicks</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">PDF</Button>
                    <Button size="sm" variant="outline">CSV</Button>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <p className="font-medium">Content Performance</p>
                    <p className="text-xs text-muted-foreground">Page views, time on page</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">PDF</Button>
                    <Button size="sm" variant="outline">CSV</Button>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">Schedule Automated Reports</Button>
            </div>
          </CardContent>
        </Card>

        {/* Report Cards */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Pre-built analysis reports</CardDescription>
            </div>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/dashboard/insights-reports/seo-report">
                  <div className="bg-white/5 p-3 rounded-md h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <BarChart className="h-4 w-4 text-primary" />
                      </div>
                      <p className="font-medium">SEO Report</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Comprehensive SEO performance analysis</p>
                  </div>
                </Link>
                
                <Link to="/dashboard/insights-reports/social-report">
                  <div className="bg-white/5 p-3 rounded-md h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <BarChart className="h-4 w-4 text-blue-500" />
                      </div>
                      <p className="font-medium">Social Report</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Social media performance metrics</p>
                  </div>
                </Link>
                
                <Link to="/dashboard/insights-reports/content-performance">
                  <div className="bg-white/5 p-3 rounded-md h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-green-500" />
                      </div>
                      <p className="font-medium">Content Performance</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Content engagement and traffic analysis</p>
                  </div>
                </Link>
                
                <Link to="/dashboard/insights-reports/trends">
                  <div className="bg-white/5 p-3 rounded-md h-full hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-purple-500" />
                      </div>
                      <p className="font-medium">Trends Report</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Performance trends over time</p>
                  </div>
                </Link>
              </div>
              
              <Button variant="outline" className="w-full">Create Custom Report</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Content Performance Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Most viewed and engaged pages</CardDescription>
            </div>
            <Button variant="link" size="sm" className="text-primary">
              <Link to="/dashboard/insights-reports/content-performance">
                View All
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left pb-2">Page</th>
                    <th className="text-left pb-2">Views</th>
                    <th className="text-left pb-2">Avg. Time</th>
                    <th className="text-left pb-2">Bounce Rate</th>
                    <th className="text-left pb-2">Conversions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">How to Set Up Google Analytics 4</td>
                    <td>2,453</td>
                    <td>4:32</td>
                    <td>32%</td>
                    <td>48</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">SEO Guide for Beginners</td>
                    <td>1,876</td>
                    <td>5:15</td>
                    <td>28%</td>
                    <td>32</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Social Media Calendar Template</td>
                    <td>1,254</td>
                    <td>2:48</td>
                    <td>45%</td>
                    <td>124</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Content Marketing Strategy 2025</td>
                    <td>987</td>
                    <td>6:07</td>
                    <td>25%</td>
                    <td>29</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Generate Executive Summary</Button>
        <Button variant="outline">Schedule Weekly Reports</Button>
      </div>
    </div>
  );
};

export default InsightsReports;
