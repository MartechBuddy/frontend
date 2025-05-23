
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Wand2, Download, Plus, Target, TrendingUp, BarChart3, Sparkles } from 'lucide-react';

interface GeneratedKeyword {
  keyword: string;
  volume: number;
  difficulty: number;
  cluster: string;
  intent: string;
}

const mockGeneratedKeywords: GeneratedKeyword[] = [
  { keyword: 'AI content generation', volume: 2400, difficulty: 68, cluster: 'AI Tools', intent: 'Commercial' },
  { keyword: 'automated SEO optimization', volume: 1800, difficulty: 72, cluster: 'SEO Automation', intent: 'Informational' },
  { keyword: 'AI powered marketing', volume: 1500, difficulty: 65, cluster: 'AI Marketing', intent: 'Commercial' },
  { keyword: 'machine learning SEO', volume: 950, difficulty: 78, cluster: 'AI Tools', intent: 'Informational' },
  { keyword: 'content automation tools', volume: 1200, difficulty: 58, cluster: 'Content Tools', intent: 'Commercial' },
];

const KeywordGeneratorPage: React.FC = () => {
  const [seedKeyword, setSeedKeyword] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedKeywords, setGeneratedKeywords] = useState<GeneratedKeyword[]>([]);

  const handleGenerate = async () => {
    if (!seedKeyword.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setGeneratedKeywords(mockGeneratedKeywords);
    setIsGenerating(false);
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 40) return 'bg-green-500';
    if (difficulty < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case 'Commercial': return 'bg-blue-500';
      case 'Informational': return 'bg-purple-500';
      case 'Navigational': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keyword Generator</h1>
          <p className="text-muted-foreground">
            Generate AI-powered keyword ideas for your content strategy
          </p>
        </div>
      </div>

      {/* Generator Form */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            Generate Keywords
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Seed Keyword</label>
              <Input
                placeholder="e.g., AI marketing"
                value={seedKeyword}
                onChange={(e) => setSeedKeyword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Description (Optional)</label>
              <Textarea
                placeholder="Describe your business or target audience..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              AI Calls required: 1
            </div>
            <Button 
              onClick={handleGenerate}
              disabled={!seedKeyword.trim() || isGenerating}
              className="glass-button"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Generate Keywords
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Keywords */}
      {generatedKeywords.length > 0 && (
        <Card className="glass-card border-white/10">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Generated Keywords ({generatedKeywords.length})
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" className="glass-button">
                  <Plus className="h-4 w-4 mr-2" />
                  Add All to Project
                </Button>
                <Button variant="outline" className="glass-button">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {generatedKeywords.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div>
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={`${getIntentColor(keyword.intent)} text-white`}>
                          {keyword.intent}
                        </Badge>
                        <Badge variant="outline">{keyword.cluster}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <BarChart3 className="h-3 w-3" />
                        Volume
                      </div>
                      <div className="font-medium">{keyword.volume.toLocaleString()}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Difficulty</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getDifficultyColor(keyword.difficulty)}`}></div>
                        <span className="font-medium">{keyword.difficulty}%</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="glass-button">
                      <Plus className="h-3 w-3 mr-1" />
                      Add
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

export default KeywordGeneratorPage;
