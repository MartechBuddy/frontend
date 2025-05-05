
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Search, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LocalSeo = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Local SEO</h1>
        <p className="text-muted-foreground">
          Optimize your business presence for local search visibility
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hub Overview Card */}
        <Card className="glass-card border-white/10 col-span-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Local Presence Overview</CardTitle>
              <CardDescription>Business listings and local rankings</CardDescription>
            </div>
            <MapPin className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Business Listings</p>
                <h3 className="text-2xl font-bold mt-1">12 / 20</h3>
                <p className="text-xs text-amber-400">8 listings missing</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Local Rankings</p>
                <h3 className="text-2xl font-bold mt-1">Top 3</h3>
                <p className="text-xs text-green-400">+2 spots this month</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Reviews</p>
                <h3 className="text-2xl font-bold mt-1">4.7 / 5</h3>
                <p className="text-xs">Based on 142 reviews</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Voice Search</p>
                <h3 className="text-2xl font-bold mt-1">82%</h3>
                <p className="text-xs">Voice search readiness</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Directory Listings Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Business Listings</CardTitle>
              <CardDescription>Directory presence and completeness</CardDescription>
            </div>
            <Building className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">G</span>
                    </div>
                    <span className="font-medium">Google Business</span>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profile Completeness</span>
                    <span>100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews</span>
                    <span>87</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center">
                      <span className="mr-1">4.8</span>
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-3 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">Y</span>
                    </div>
                    <span className="font-medium">Yelp</span>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profile Completeness</span>
                    <span>85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews</span>
                    <span>24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center">
                      <span className="mr-1">4.5</span>
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Update All Listings</Button>
            </div>
          </CardContent>
        </Card>

        {/* Local Rank Tracker Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Local Rank Tracker</CardTitle>
              <CardDescription>Track local search positions</CardDescription>
            </div>
            <Search className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Top Local Keywords</p>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span>SEO agency near me</span>
                    <Badge className="bg-green-500">Rank: 1</Badge>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Digital marketing services</span>
                    <Badge className="bg-green-500">Rank: 2</Badge>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Web design company</span>
                    <Badge className="bg-amber-500">Rank: 6</Badge>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>PPC management</span>
                    <Badge className="bg-red-500">Rank: 12</Badge>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Button variant="link">View all 15 tracked keywords</Button>
              </div>
              <Button variant="outline" className="w-full">Track New Keyword</Button>
            </div>
          </CardContent>
        </Card>

        {/* Voice Optimization Card */}
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Voice Optimization</CardTitle>
              <CardDescription>Enhance voice search readiness</CardDescription>
            </div>
            <Globe className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Voice Readiness Score</p>
                  <p className="text-sm text-muted-foreground">3 suggestions available</p>
                </div>
                <div className="text-2xl font-bold">82%</div>
              </div>
              <div className="bg-white/5 p-3 rounded-md">
                <p className="font-medium mb-2">Improvement Suggestions</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Add FAQ schema markup</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Apply</Button>
                  </li>
                  <li className="flex justify-between">
                    <span>Add more question keywords</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Apply</Button>
                  </li>
                  <li className="flex justify-between">
                    <span>Improve response times</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">Apply</Button>
                  </li>
                </ul>
              </div>
              <Button className="w-full">Generate Voice SEO Report</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Update All Listings</Button>
        <Button variant="outline">Add New Location</Button>
      </div>
    </div>
  );
};

export default LocalSeo;
