
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Image, Video, Send, Edit, Trash2, Eye, Twitter, Linkedin, Facebook } from 'lucide-react';

interface SocialPost {
  id: string;
  content: string;
  platforms: string[];
  scheduledDate: string;
  status: 'draft' | 'scheduled' | 'published';
  media?: string;
  engagement?: {
    likes: number;
    shares: number;
    comments: number;
  };
}

const SocialPostsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [newPost, setNewPost] = useState({
    content: '',
    platforms: [] as string[],
    scheduledDate: ''
  });

  const mockPosts: SocialPost[] = [
    {
      id: '1',
      content: '🚀 Excited to share our latest AI-powered marketing insights! Check out how automation is transforming content creation. #AIMarketing #ContentStrategy',
      platforms: ['Twitter', 'LinkedIn'],
      scheduledDate: '2024-01-20T10:00:00',
      status: 'scheduled'
    },
    {
      id: '2',
      content: 'Just published a comprehensive guide on SEO optimization for 2024. What trends are you seeing in your industry?',
      platforms: ['LinkedIn', 'Facebook'],
      scheduledDate: '2024-01-18T14:30:00',
      status: 'published',
      engagement: { likes: 45, shares: 12, comments: 8 }
    },
    {
      id: '3',
      content: 'Working on some exciting new features for our platform. Can\'t wait to share them with you all! 🎯',
      platforms: ['Twitter'],
      scheduledDate: '',
      status: 'draft'
    }
  ];

  const platforms = [
    { name: 'Twitter', icon: <Twitter className="h-4 w-4" />, color: 'bg-blue-500' },
    { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, color: 'bg-blue-700' },
    { name: 'Facebook', icon: <Facebook className="h-4 w-4" />, color: 'bg-blue-600' }
  ];

  const togglePlatform = (platform: string) => {
    setNewPost(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'scheduled': return 'bg-blue-500';
      case 'draft': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlatformIcon = (platform: string) => {
    const p = platforms.find(p => p.name === platform);
    return p ? p.icon : null;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Social Posts</h1>
          <p className="text-muted-foreground">
            Create, schedule and manage your social media content
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Post</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
        </TabsList>

        {/* Create Post Tab */}
        <TabsContent value="create" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Create New Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  placeholder="What's happening?"
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                />
                <div className="text-xs text-muted-foreground text-right">
                  {newPost.content.length}/280 characters
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Platforms</label>
                <div className="flex gap-2">
                  {platforms.map((platform) => (
                    <Button
                      key={platform.name}
                      variant={newPost.platforms.includes(platform.name) ? "default" : "outline"}
                      onClick={() => togglePlatform(platform.name)}
                      className="flex items-center gap-2"
                    >
                      {platform.icon}
                      {platform.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Schedule Date</label>
                  <Input
                    type="datetime-local"
                    value={newPost.scheduledDate}
                    onChange={(e) => setNewPost(prev => ({ ...prev, scheduledDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Add Media</label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="glass-button">
                      <Image className="h-4 w-4 mr-2" />
                      Image
                    </Button>
                    <Button variant="outline" className="glass-button">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="glass-button">
                  <Send className="h-4 w-4 mr-2" />
                  {newPost.scheduledDate ? 'Schedule Post' : 'Post Now'}
                </Button>
                <Button variant="outline" className="glass-button">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scheduled Posts Tab */}
        <TabsContent value="scheduled" className="space-y-4">
          {mockPosts.filter(post => post.status === 'scheduled').map((post) => (
            <Card key={post.id} className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <p className="mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.scheduledDate).toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        {post.platforms.map((platform, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            {getPlatformIcon(platform)}
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`${getStatusColor(post.status)} text-white`}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="glass-button">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="glass-button">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="glass-button text-red-500">
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Published Posts Tab */}
        <TabsContent value="published" className="space-y-4">
          {mockPosts.filter(post => post.status === 'published').map((post) => (
            <Card key={post.id} className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <p className="mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.scheduledDate).toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        {post.platforms.map((platform, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            {getPlatformIcon(platform)}
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(post.status)} text-white`}>
                    {post.status}
                  </Badge>
                </div>
                
                {post.engagement && (
                  <div className="flex gap-6 mb-4 text-sm">
                    <span>{post.engagement.likes} likes</span>
                    <span>{post.engagement.shares} shares</span>
                    <span>{post.engagement.comments} comments</span>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="glass-button">
                    <Eye className="h-3 w-3 mr-1" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SocialPostsPage;
