
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, Clock, Plus, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

interface ScheduledPost {
  id: string;
  title: string;
  content: string;
  platforms: string[];
  scheduledTime: Date;
  status: 'scheduled' | 'published' | 'failed';
}

const mockPosts: ScheduledPost[] = [
  {
    id: '1',
    title: 'AI Marketing Tips',
    content: 'Discover how AI is transforming digital marketing strategies...',
    platforms: ['twitter', 'linkedin'],
    scheduledTime: new Date(2024, 11, 25, 10, 0),
    status: 'scheduled'
  },
  {
    id: '2',
    title: 'SEO Best Practices',
    content: 'Essential SEO techniques every marketer should know...',
    platforms: ['linkedin', 'facebook'],
    scheduledTime: new Date(2024, 11, 26, 14, 30),
    status: 'scheduled'
  }
];

const platformIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram
};

const platformColors = {
  twitter: 'bg-blue-500',
  linkedin: 'bg-blue-700',
  facebook: 'bg-blue-600',
  instagram: 'bg-pink-500'
};

const SchedulerPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const getPostsForDate = (date: Date) => {
    return mockPosts.filter(post => isSameDay(post.scheduledTime, date));
  };

  const getWeekDays = () => {
    const start = startOfWeek(selectedDate);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-500';
      case 'published': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Scheduler</h1>
          <p className="text-muted-foreground">
            Plan and schedule your content across all platforms
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'calendar' ? 'default' : 'outline'}
            onClick={() => setViewMode('calendar')}
            className="glass-button"
          >
            <CalendarDays className="h-4 w-4 mr-2" />
            Calendar
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
            className="glass-button"
          >
            List
          </Button>
          <Dialog open={isScheduleModalOpen} onOpenChange={setIsScheduleModalOpen}>
            <DialogTrigger asChild>
              <Button className="glass-button">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Post
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card">
              <DialogHeader>
                <DialogTitle>Schedule New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input placeholder="Post title" />
                </div>
                <div>
                  <label className="text-sm font-medium">Content</label>
                  <Textarea placeholder="Write your post content..." rows={4} />
                </div>
                <div>
                  <label className="text-sm font-medium">Platforms</label>
                  <div className="flex gap-2 mt-2">
                    {Object.entries(platformIcons).map(([platform, Icon]) => (
                      <Button key={platform} variant="outline" size="sm" className="glass-button">
                        <Icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Time</label>
                    <Input type="time" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Schedule Post</Button>
                  <Button variant="outline" onClick={() => setIsScheduleModalOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>

          {/* Week View */}
          <div className="lg:col-span-3">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle>Week of {format(selectedDate, 'MMM d, yyyy')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-4">
                  {getWeekDays().map((day) => (
                    <div key={day.toISOString()} className="space-y-2">
                      <div className="text-center">
                        <div className="text-sm font-medium">
                          {format(day, 'EEE')}
                        </div>
                        <div className="text-lg font-bold">
                          {format(day, 'd')}
                        </div>
                      </div>
                      <div className="space-y-2 min-h-[200px]">
                        {getPostsForDate(day).map((post) => (
                          <div
                            key={post.id}
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs"
                          >
                            <div className="font-medium truncate">{post.title}</div>
                            <div className="flex items-center gap-1 mt-1">
                              <Clock className="h-3 w-3" />
                              {format(post.scheduledTime, 'HH:mm')}
                            </div>
                            <div className="flex gap-1 mt-1">
                              {post.platforms.map((platform) => {
                                const Icon = platformIcons[platform as keyof typeof platformIcons];
                                return (
                                  <div
                                    key={platform}
                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                      platformColors[platform as keyof typeof platformColors]
                                    }`}
                                  >
                                    <Icon className="h-2 w-2 text-white" />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* List View */
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 truncate">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={`${getStatusColor(post.status)} text-white`}>
                        {post.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(post.scheduledTime, 'MMM d, yyyy HH:mm')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.platforms.map((platform) => {
                      const Icon = platformIcons[platform as keyof typeof platformIcons];
                      return (
                        <div
                          key={platform}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            platformColors[platform as keyof typeof platformColors]
                          }`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                      );
                    })}
                    <Button variant="outline" size="sm" className="glass-button ml-2">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SchedulerPage;
