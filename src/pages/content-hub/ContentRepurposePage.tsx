
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RefreshCw, FileText, MessageSquare, Video, Image, Mic, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'post' | 'script';
  wordCount: number;
  project: string;
  createdAt: string;
}

const mockContent: ContentItem[] = [
  { id: '1', title: 'AI Readiness Guide for Businesses', type: 'blog', wordCount: 1500, project: 'Main Website', createdAt: '2024-01-15' },
  { id: '2', title: 'Social Media Marketing Tips', type: 'post', wordCount: 300, project: 'Social Campaign', createdAt: '2024-01-14' },
  { id: '3', title: 'SEO Best Practices Video Script', type: 'script', wordCount: 800, project: 'Video Series', createdAt: '2024-01-13' },
];

const formatOptions = [
  { id: 'social-posts', name: 'Social Media Posts', icon: MessageSquare, description: 'Break content into social-friendly posts' },
  { id: 'email-series', name: 'Email Series', icon: FileText, description: 'Convert to email newsletter series' },
  { id: 'video-script', name: 'Video Script', icon: Video, description: 'Transform into video script format' },
  { id: 'infographic', name: 'Infographic Text', icon: Image, description: 'Extract key points for infographic' },
  { id: 'podcast-script', name: 'Podcast Script', icon: Mic, description: 'Adapt for podcast conversation' },
  { id: 'carousel', name: 'Carousel Slides', icon: RefreshCw, description: 'Break into carousel slides' },
];

const ContentRepurposePage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string>('');
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [isRepurposing, setIsRepurposing] = useState(false);

  const handleFormatToggle = (formatId: string) => {
    setSelectedFormats(prev => 
      prev.includes(formatId) 
        ? prev.filter(id => id !== formatId)
        : [...prev, formatId]
    );
  };

  const handleRepurpose = async () => {
    if (!selectedContent || selectedFormats.length === 0) return;
    
    setIsRepurposing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsRepurposing(false);
    
    // Reset form
    setSelectedContent('');
    setSelectedFormats([]);
  };

  const selectedContentItem = mockContent.find(item => item.id === selectedContent);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Repurpose Content</h1>
          <p className="text-muted-foreground">
            Transform your existing content into new formats with AI
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Selection */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Select Content to Repurpose</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockContent.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedContent === item.id
                    ? 'border-primary bg-primary/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setSelectedContent(item.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{item.type}</Badge>
                      <span>{item.wordCount} words</span>
                      <span>•</span>
                      <span>{item.project}</span>
                    </div>
                  </div>
                  {selectedContent === item.id && (
                    <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Format Selection */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Choose New Formats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formatOptions.map((format) => (
              <div
                key={format.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedFormats.includes(format.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => handleFormatToggle(format.id)}
              >
                <div className="flex items-start gap-3">
                  <format.icon className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-medium">{format.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {format.description}
                    </p>
                  </div>
                  {selectedFormats.includes(format.id) && (
                    <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Repurpose Summary */}
      {selectedContent && selectedFormats.length > 0 && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Repurpose Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <h3 className="font-medium">{selectedContentItem?.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedContentItem?.wordCount} words • {selectedContentItem?.type}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <div className="font-medium">{selectedFormats.length} new formats</div>
                <p className="text-sm text-muted-foreground">
                  {formatOptions
                    .filter(f => selectedFormats.includes(f.id))
                    .map(f => f.name)
                    .join(', ')}
                </p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                AI Calls required: {selectedFormats.length}
              </div>
              <Button 
                onClick={handleRepurpose}
                disabled={isRepurposing}
                className="glass-button"
              >
                {isRepurposing ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Repurposing...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Repurpose Now
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentRepurposePage;
