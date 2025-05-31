import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  Wand2, 
  Target, 
  Clock, 
  FileText,
  Lightbulb,
  Zap,
  ArrowRight,
  Users,
  TrendingUp
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type UserTier = 'Test' | 'Starter' | 'Pro' | 'Entrepreneur' | 'Enterprise';

const CreateContentPage: React.FC = () => {
  const { projectId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: '',
    targetAudience: '',
    contentLength: '',
    tone: '',
    keywords: '',
    briefDescription: ''
  });

  // Mock data - would come from API based on user tier
  const userTier: UserTier = 'Starter';
  const contentGenerationsRemaining = 2;
  const maxGenerations = 3;

  const getTierLimits = () => {
    const tierConfig: Record<UserTier, { max: number; description: string }> = {
      'Test': { max: 1, description: '1 blog generation per month' },
      'Starter': { max: 3, description: '3 blog generations per month' },
      'Pro': { max: 10, description: '10 blog generations per month' },
      'Entrepreneur': { max: 40, description: '40 blog generations per month' },
      'Enterprise': { max: -1, description: 'Unlimited blog generations' }
    };
    return tierConfig[userTier];
  };

  const tierLimits = getTierLimits();
  const canGenerate = tierLimits.max === -1 || contentGenerationsRemaining > 0;

  const projectKeywords = [
    'AI marketing', 'SEO optimization', 'Content strategy', 'Digital marketing', 'AI tools'
  ];

  const contentIdeas = [
    { title: 'Top 10 AI tools for marketers in 2025', difficulty: 'Medium', potential: 'High' },
    { title: 'How AI is revolutionizing content creation', difficulty: 'Low', potential: 'High' },
    { title: 'Complete guide to SEO optimization', difficulty: 'High', potential: 'Very High' }
  ];

  const siteIssues = [
    { title: 'Content lacks clarity in product descriptions', action: 'Address in content' },
    { title: 'Missing H2 headings on blog pages', action: 'Include proper structure' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGenerateContent = () => {
    console.log('Generating content with:', formData);
    // Would trigger API call
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Create Content</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered content creation wizard
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {tierLimits.max === -1 ? 'Unlimited' : `${contentGenerationsRemaining}/${tierLimits.max} remaining`}
        </Badge>
      </div>

      {/* Progress Steps */}
      <Card className="glass-card border-white/10">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step}
                </div>
                <span className={`ml-2 text-sm ${
                  step <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step === 1 ? 'Topic & Brief' : step === 2 ? 'Outline' : 'Generate'}
                </span>
                {step < 3 && (
                  <ArrowRight className="mx-4 h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {currentStep === 1 && (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-primary" />
                  Step 1: Topic & Content Brief
                </CardTitle>
                <CardDescription>
                  Tell us what you want to write about
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Content Topic *</label>
                  <Input
                    placeholder="e.g., Complete guide to AI marketing tools"
                    value={formData.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Content Length</label>
                    <Select value={formData.contentLength} onValueChange={(value) => handleInputChange('contentLength', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (500-800 words)</SelectItem>
                        <SelectItem value="medium">Medium (800-1500 words)</SelectItem>
                        <SelectItem value="long">Long (1500+ words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tone & Style</label>
                    <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual & Friendly</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                        <SelectItem value="conversational">Conversational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <Input
                    placeholder="e.g., Small business owners, Marketing professionals"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Keywords (Optional)</label>
                  <Input
                    placeholder="e.g., AI marketing, content automation, SEO tools"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Brief Description</label>
                  <Textarea
                    placeholder="Provide any additional context, key points to cover, or specific requirements..."
                    value={formData.briefDescription}
                    onChange={(e) => handleInputChange('briefDescription', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button onClick={handleNextStep} disabled={!formData.topic} className="w-full">
                  <Wand2 size={16} className="mr-2" />
                  Generate Outline
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Step 2: Review & Customize Outline
                </CardTitle>
                <CardDescription>
                  AI-generated content outline based on your brief
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass-card p-4 rounded-lg bg-primary/5">
                  <h3 className="font-semibold mb-3">Generated Outline: {formData.topic}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <div>
                        <h4 className="font-medium">Introduction to AI Marketing</h4>
                        <p className="text-sm text-muted-foreground">Definition, importance, and current trends</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <div>
                        <h4 className="font-medium">Top AI Marketing Tools Overview</h4>
                        <p className="text-sm text-muted-foreground">Categories and selection criteria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <div>
                        <h4 className="font-medium">Detailed Tool Analysis</h4>
                        <p className="text-sm text-muted-foreground">Features, pricing, and use cases for each tool</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <div>
                        <h4 className="font-medium">Implementation Best Practices</h4>
                        <p className="text-sm text-muted-foreground">How to integrate AI tools into your marketing workflow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <div>
                        <h4 className="font-medium">Conclusion & Next Steps</h4>
                        <p className="text-sm text-muted-foreground">Key takeaways and action items</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back to Edit
                  </Button>
                  <Button onClick={handleNextStep} className="flex-1">
                    <ArrowRight size={16} className="mr-2" />
                    Approve Outline
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  Step 3: Generate Full Content
                </CardTitle>
                <CardDescription>
                  Ready to create your AI-powered article
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass-card p-6 rounded-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Wand2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ready to Generate</h3>
                  <p className="text-muted-foreground mb-4">
                    Your AI-powered article will be created based on the approved outline and brief
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Zap size={16} />
                    <span>This will use 25 Martech Tokens</span>
                  </div>
                  {canGenerate ? (
                    <Button onClick={handleGenerateContent} size="lg" className="w-full">
                      <Wand2 size={16} className="mr-2" />
                      Generate Full Article
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-yellow-600">
                        You've reached your content generation limit for this month
                      </p>
                      <Button variant="outline" size="lg">
                        Upgrade Plan
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Keywords */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-primary" />
                Project Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {projectKeywords.map((keyword) => (
                  <Badge key={keyword} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <TrendingUp size={14} className="mr-1" />
                Generate More Keywords
              </Button>
            </CardContent>
          </Card>

          {/* Content Ideas */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-primary" />
                Content Ideas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contentIdeas.map((idea, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/5">
                  <h4 className="font-medium text-sm mb-2">{idea.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {idea.difficulty}
                      </Badge>
                      <Badge className="text-xs bg-green-500/20 text-green-500">
                        {idea.potential}
                      </Badge>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Use Idea
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Site Issues */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-primary" />
                Address Site Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {siteIssues.map((issue, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/5">
                  <p className="font-medium text-sm mb-1">{issue.title}</p>
                  <Button size="sm" variant="outline" className="text-xs">
                    {issue.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Token Usage */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Token Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Content Generation:</span>
                  <span className="font-medium">25 tokens</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Remaining Today:</span>
                  <span className="font-medium text-green-500">85 tokens</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateContentPage;
