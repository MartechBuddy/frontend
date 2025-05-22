
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, ImageIcon, VideoIcon, MusicIcon, Download, Check, Undo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';

const MediaGeneratePage: React.FC = () => {
  const navigate = useNavigate();
  const [mediaType, setMediaType] = useState<string>('image');
  const [prompt, setPrompt] = useState<string>('');
  const [generating, setGenerating] = useState<boolean>(false);
  const [generatedResults, setGeneratedResults] = useState<any[]>([]);
  const [aiCallsRemaining, setAiCallsRemaining] = useState<number>(98);
  
  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt for generation");
      return;
    }
    
    setGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockResults = [];
      
      if (mediaType === 'image') {
        mockResults.push(
          { id: 1, url: 'https://via.placeholder.com/512x512?text=AI+Generated+Image+1' },
          { id: 2, url: 'https://via.placeholder.com/512x512?text=AI+Generated+Image+2' },
          { id: 3, url: 'https://via.placeholder.com/512x512?text=AI+Generated+Image+3' },
          { id: 4, url: 'https://via.placeholder.com/512x512?text=AI+Generated+Image+4' }
        );
      } else if (mediaType === 'video') {
        mockResults.push(
          { id: 1, url: 'https://via.placeholder.com/640x360?text=AI+Generated+Video', thumbnail: 'https://via.placeholder.com/640x360?text=AI+Generated+Video' }
        );
      } else if (mediaType === 'audio') {
        mockResults.push(
          { id: 1, url: '#', name: 'AI Generated Audio.mp3' }
        );
      }
      
      setGeneratedResults(mockResults);
      setGenerating(false);
      setAiCallsRemaining(prev => prev - 1);
      toast.success("Media generated successfully!");
    }, 3000);
  };
  
  const handleSaveToLibrary = () => {
    toast.success("Media saved to library");
    navigate('/content-hub/media/library');
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Generate Media</h1>
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground">
            AI Calls: <span className="font-medium text-foreground">{aiCallsRemaining}/100</span>
          </div>
          <Button variant="outline" onClick={() => navigate('/content-hub/media/library')}>
            Back to Library
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Generation Options</h2>
            
            <Tabs defaultValue="image" className="mb-6" onValueChange={setMediaType}>
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="image" className="flex items-center gap-2">
                  <ImageIcon size={16} />
                  Image
                </TabsTrigger>
                <TabsTrigger value="video" className="flex items-center gap-2">
                  <VideoIcon size={16} />
                  Video
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center gap-2">
                  <MusicIcon size={16} />
                  Audio
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="image" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="image-size">Size</Label>
                  <Select defaultValue="square">
                    <SelectTrigger id="image-size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="square">Square (1:1)</SelectItem>
                      <SelectItem value="portrait">Portrait (3:4)</SelectItem>
                      <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                      <SelectItem value="social">Social Media (4:5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="image-style">Style</Label>
                  <Select defaultValue="realistic">
                    <SelectTrigger id="image-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realistic">Realistic</SelectItem>
                      <SelectItem value="cartoon">Cartoon</SelectItem>
                      <SelectItem value="3d">3D Render</SelectItem>
                      <SelectItem value="sketch">Sketch</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="image-variations">Variations</Label>
                  <Select defaultValue="4">
                    <SelectTrigger id="image-variations">
                      <SelectValue placeholder="Number of variations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Image</SelectItem>
                      <SelectItem value="2">2 Images</SelectItem>
                      <SelectItem value="4">4 Images</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
              
              <TabsContent value="video" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="video-duration">Duration</Label>
                  <Select defaultValue="short">
                    <SelectTrigger id="video-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (5-10 sec)</SelectItem>
                      <SelectItem value="medium">Medium (10-30 sec)</SelectItem>
                      <SelectItem value="long">Long (30-60 sec)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="video-style">Style</Label>
                  <Select defaultValue="cinematic">
                    <SelectTrigger id="video-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="animation">Animation</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="video-resolution">Resolution</Label>
                  <Select defaultValue="hd">
                    <SelectTrigger id="video-resolution">
                      <SelectValue placeholder="Select resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sd">SD (480p)</SelectItem>
                      <SelectItem value="hd">HD (720p)</SelectItem>
                      <SelectItem value="fullhd">Full HD (1080p)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
              
              <TabsContent value="audio" className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="audio-type">Type</Label>
                  <Select defaultValue="voice">
                    <SelectTrigger id="audio-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voice">Voice</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="sfx">Sound Effects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="audio-duration">Duration</Label>
                  <Select defaultValue="short">
                    <SelectTrigger id="audio-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (10-30 sec)</SelectItem>
                      <SelectItem value="medium">Medium (30-60 sec)</SelectItem>
                      <SelectItem value="long">Long (1-3 min)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="audio-voice">Voice (for voice type)</Label>
                  <Select defaultValue="neutral">
                    <SelectTrigger id="audio-voice">
                      <SelectValue placeholder="Select voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="energetic">Energetic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="project">Project</Label>
                <Select defaultValue="default">
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Project</SelectItem>
                    <SelectItem value="marketing">Marketing Campaign</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce Site</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="prompt">Generation Prompt</Label>
                <Textarea 
                  id="prompt" 
                  placeholder={`Describe what you want to ${mediaType === 'image' ? 'see' : mediaType === 'video' ? 'watch' : 'hear'}...`}
                  className="min-h-[150px]"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Be specific about style, mood, colors, and content.
                </p>
              </div>
              
              <Button 
                className="w-full flex items-center gap-2"
                onClick={handleGenerate}
                disabled={generating || !prompt.trim()}
              >
                {generating ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 size={16} />
                    Generate {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                This will use 1 AI call from your daily limit.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="glass-card p-6 rounded-xl h-full">
            {generatedResults.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Generated Results</h2>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setGeneratedResults([])}
                    >
                      <Undo size={14} />
                      Try Again
                    </Button>
                    <Button 
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={handleSaveToLibrary}
                    >
                      <Check size={14} />
                      Save to Library
                    </Button>
                  </div>
                </div>
                
                {mediaType === 'image' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {generatedResults.map((result) => (
                      <div key={result.id} className="group relative aspect-square rounded-md overflow-hidden bg-muted">
                        <img 
                          src={result.url} 
                          alt="AI Generated" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button variant="secondary" size="sm" className="flex items-center gap-1">
                            <Download size={14} />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {mediaType === 'video' && generatedResults.map((result) => (
                  <div key={result.id} className="relative rounded-md overflow-hidden bg-muted aspect-video">
                    <img 
                      src={result.thumbnail} 
                      alt="AI Generated Video" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="secondary" className="flex items-center gap-2">
                        <VideoIcon size={16} />
                        Preview Video
                      </Button>
                    </div>
                  </div>
                ))}
                
                {mediaType === 'audio' && generatedResults.map((result) => (
                  <div key={result.id} className="bg-muted rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <MusicIcon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{result.name}</h3>
                        <p className="text-sm text-muted-foreground">AI generated audio</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button variant="secondary" size="sm" className="flex items-center gap-1">
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Wand2 size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Generate AI Media</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  {generating 
                    ? "Creating your media. This might take a moment..."
                    : "Fill in the options and provide a detailed prompt to generate AI media."
                  }
                </p>
                
                {generating && (
                  <div className="w-full max-w-md bg-muted rounded-full h-2.5 mb-6">
                    <div className="bg-primary h-2.5 rounded-full animate-progress" style={{width: '70%'}}></div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-2 text-sm bg-muted/50 rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>High Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-muted/50 rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>AI Generated</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-muted/50 rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Royalty Free</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGeneratePage;
