
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar as CalendarIcon, Edit } from "lucide-react";

const ContentSchedulerPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Scheduler</h1>
        <p className="text-muted-foreground">Schedule and manage your content publication timeline</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Publication Calendar</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        {/* Scheduled Posts */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Scheduled Posts</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <CalendarIcon className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Ultimate SEO Guide for 2025</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Comprehensive guide covering latest SEO trends and best practices
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      March 15, 2025 at 9:00 AM
                    </span>
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">LinkedIn</Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <CalendarIcon className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Technical SEO Checklist</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Step-by-step guide to audit and optimize technical SEO elements
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      March 18, 2025 at 10:30 AM
                    </span>
                    <Badge variant="outline">WordPress</Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <CalendarIcon className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Content Marketing ROI Guide</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    How to measure and improve your content marketing return on investment
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      March 22, 2025 at 2:00 PM
                    </span>
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">Twitter</Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="h-auto p-4 flex flex-col gap-2">
                <CalendarIcon className="h-6 w-6" />
                <span>Schedule New Post</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Clock className="h-6 w-6" />
                <span>View Draft Queue</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentSchedulerPage;
