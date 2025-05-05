
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Link, MoreHorizontal, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContentScheduler = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Content Scheduler</h1>
        <p className="text-muted-foreground">
          Plan, schedule, and manage your content publishing calendar
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="glass-card border-white/10 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>Schedule overview for May 2025</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <CalendarIcon className="h-4 w-4 mr-1" />
                Month
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-1" />
                Week
              </Button>
              <Button size="sm">
                <Link className="h-4 w-4 mr-1" />
                List
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md border-white/10 overflow-hidden">
              <div className="grid grid-cols-7 text-center border-b border-white/10 bg-white/5">
                <div className="py-2 border-r border-white/10">Sun</div>
                <div className="py-2 border-r border-white/10">Mon</div>
                <div className="py-2 border-r border-white/10">Tue</div>
                <div className="py-2 border-r border-white/10">Wed</div>
                <div className="py-2 border-r border-white/10">Thu</div>
                <div className="py-2 border-r border-white/10">Fri</div>
                <div className="py-2">Sat</div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {/* Row 1 */}
                {[...Array(7)].map((_, i) => (
                  <div key={`week1-${i}`} className="h-24 p-1 border-r border-b border-white/10 last:border-r-0 relative">
                    <div className="text-xs text-muted-foreground absolute top-1 left-1">
                      {i - 2 > 0 ? i - 2 : 30 + i - 2}
                    </div>
                    {i === 3 && (
                      <div className="bg-blue-500/20 text-xs p-1 rounded mt-5 text-blue-300 border border-blue-500/30">
                        Blog post
                      </div>
                    )}
                  </div>
                ))}

                {/* Row 2 */}
                {[...Array(7)].map((_, i) => (
                  <div key={`week2-${i}`} className="h-24 p-1 border-r border-b border-white/10 last:border-r-0 relative">
                    <div className="text-xs text-muted-foreground absolute top-1 left-1">{i + 5}</div>
                    {i === 0 && (
                      <div className="bg-pink-500/20 text-xs p-1 rounded mt-5 text-pink-300 border border-pink-500/30">
                        Instagram
                      </div>
                    )}
                    {i === 2 && (
                      <div className="bg-green-500/20 text-xs p-1 rounded mt-5 text-green-300 border border-green-500/30">
                        Newsletter
                      </div>
                    )}
                  </div>
                ))}

                {/* Row 3 - Today Highlighted */}
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={`week3-${i}`} 
                    className={`h-24 p-1 border-r border-b border-white/10 last:border-r-0 relative ${i === 3 ? 'bg-primary/10' : ''}`}
                  >
                    <div className={`text-xs ${i === 3 ? 'text-primary font-bold' : 'text-muted-foreground'} absolute top-1 left-1`}>
                      {i + 12}
                      {i === 3 && <span className="ml-1 text-[10px] bg-primary text-primary-foreground rounded-full px-1">Today</span>}
                    </div>
                    {i === 1 && (
                      <div className="bg-blue-500/20 text-xs p-1 rounded mt-5 text-blue-300 border border-blue-500/30">
                        Twitter
                      </div>
                    )}
                    {i === 3 && (
                      <div className="bg-amber-500/20 text-xs p-1 rounded mt-5 text-amber-300 border border-amber-500/30">
                        LinkedIn
                      </div>
                    )}
                    {i === 5 && (
                      <div className="bg-purple-500/20 text-xs p-1 rounded mt-5 text-purple-300 border border-purple-500/30">
                        Case Study
                      </div>
                    )}
                  </div>
                ))}

                {/* Row 4 */}
                {[...Array(7)].map((_, i) => (
                  <div key={`week4-${i}`} className="h-24 p-1 border-r border-b border-white/10 last:border-r-0 relative">
                    <div className="text-xs text-muted-foreground absolute top-1 left-1">{i + 19}</div>
                    {i === 2 && (
                      <div className="bg-blue-500/20 text-xs p-1 rounded mt-5 text-blue-300 border border-blue-500/30">
                        Twitter
                      </div>
                    )}
                    {i === 4 && (
                      <div className="bg-green-500/20 text-xs p-1 rounded mt-5 text-green-300 border border-green-500/30">
                        Blog post
                      </div>
                    )}
                  </div>
                ))}

                {/* Row 5 (partial) */}
                {[...Array(7)].map((_, i) => (
                  <div key={`week5-${i}`} className="h-24 p-1 border-r border-white/10 last:border-r-0 relative">
                    <div className="text-xs text-muted-foreground absolute top-1 left-1">
                      {i + 26 <= 31 ? i + 26 : i - 5}
                    </div>
                    {i === 0 && (
                      <div className="bg-pink-500/20 text-xs p-1 rounded mt-5 text-pink-300 border border-pink-500/30">
                        Instagram
                      </div>
                    )}
                    {i === 5 && (
                      <div className="bg-amber-500/20 text-xs p-1 rounded mt-5 text-amber-300 border border-amber-500/30">
                        Facebook
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Form & Upcoming */}
        <div className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Schedule Content</CardTitle>
              <CardDescription>Plan your upcoming posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Type</label>
                  <select className="glass-button border w-full rounded-md px-3 py-1.5 bg-transparent">
                    <option value="blog">Blog Post</option>
                    <option value="social">Social Media Post</option>
                    <option value="email">Email Newsletter</option>
                    <option value="case">Case Study</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Platform</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="cursor-pointer bg-blue-600">Twitter</Badge>
                    <Badge className="cursor-pointer bg-blue-800">Facebook</Badge>
                    <Badge className="cursor-pointer bg-pink-600">Instagram</Badge>
                    <Badge className="cursor-pointer bg-blue-500">LinkedIn</Badge>
                    <Badge className="cursor-pointer bg-white/20" variant="outline">Website</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date & Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="date" 
                      className="glass-button border rounded-md px-3 py-1.5 bg-transparent"
                      defaultValue="2025-05-15"
                    />
                    <input 
                      type="time" 
                      className="glass-button border rounded-md px-3 py-1.5 bg-transparent"
                      defaultValue="10:00"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Repeat</label>
                  <select className="glass-button border w-full rounded-md px-3 py-1.5 bg-transparent">
                    <option value="none">None</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="notify" 
                      className="mr-2"
                    />
                    <label htmlFor="notify" className="text-sm">
                      Set reminder notification
                    </label>
                  </div>
                </div>
                
                <Button className="w-full">Schedule Content</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
              <CardDescription>Next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary">Today</Badge>
                        <h4 className="font-medium">LinkedIn Post</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">02:30 PM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">May 15</Badge>
                        <h4 className="font-medium">Blog Post</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">10:00 AM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">May 17</Badge>
                        <h4 className="font-medium">Twitter Thread</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">09:15 AM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">May 19</Badge>
                        <h4 className="font-medium">Newsletter</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">11:30 AM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Calendar Integration Card */}
        <Card className="glass-card border-white/10 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Calendar Integrations</CardTitle>
              <CardDescription>Connect your content schedule with other calendars</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Google Calendar</h4>
                    <p className="text-xs text-muted-foreground">Sync content schedule</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              
              <div className="bg-white/5 p-4 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Microsoft Outlook</h4>
                    <p className="text-xs text-muted-foreground">Sync content schedule</p>
                  </div>
                </div>
                <Button size="sm">Connected</Button>
              </div>
              
              <div className="bg-white/5 p-4 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Apple Calendar</h4>
                    <p className="text-xs text-muted-foreground">Sync content schedule</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 pt-6">
        <Button className="px-8">Create Content Batch</Button>
        <Button variant="outline">Import from Content Hub</Button>
      </div>
    </div>
  );
};

export default ContentScheduler;
