
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  CheckCircle, 
  Brain, 
  Zap,
  Copy,
  Upload,
  Eye
} from 'lucide-react';

const SchemaMetaPage: React.FC = () => {
  const [schemaType, setSchemaType] = useState('Article');
  const [generatedSchema, setGeneratedSchema] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const handleGenerateSchema = () => {
    // Mock schema generation
    const mockSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "headline": "Sample Article Title",
      "description": "Sample article description",
      "author": {
        "@type": "Person",
        "name": "Author Name"
      }
    };
    setGeneratedSchema(JSON.stringify(mockSchema, null, 2));
  };

  const handleOptimizeMeta = () => {
    // Mock meta optimization
    setMetaTitle("Optimized Meta Title - Your Brand");
    setMetaDescription("AI-optimized meta description that includes target keywords and compelling copy to improve click-through rates.");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Schema & Meta Generator</h1>
          <p className="text-muted-foreground mt-2">
            Generate structured data and optimize meta tags with AI assistance
          </p>
        </div>
        <Badge variant="outline">AI-Powered</Badge>
      </div>

      <Tabs defaultValue="schema" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="schema">Schema Markup</TabsTrigger>
          <TabsTrigger value="meta">Meta Optimizer</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="schema" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Schema Markup Generator
              </CardTitle>
              <CardDescription>
                Generate JSON-LD structured data for better search visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Schema Type</Label>
                  <Select value={schemaType} onValueChange={setSchemaType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Article">Article</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                      <SelectItem value="Organization">Organization</SelectItem>
                      <SelectItem value="Person">Person</SelectItem>
                      <SelectItem value="LocalBusiness">Local Business</SelectItem>
                      <SelectItem value="FAQ">FAQ</SelectItem>
                      <SelectItem value="Recipe">Recipe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Page URL</Label>
                  <Input placeholder="https://example.com/page" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="Enter the main title" />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Enter description" rows={3} />
              </div>

              <Button onClick={handleGenerateSchema} className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Generate Schema (5 tokens)
              </Button>

              {generatedSchema && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Generated Schema</Label>
                    <Button size="sm" variant="outline">
                      <Copy className="mr-2 h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                  <Textarea
                    value={generatedSchema}
                    readOnly
                    rows={10}
                    className="font-mono text-sm"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meta" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Meta Tag Optimizer
              </CardTitle>
              <CardDescription>
                AI-powered meta title and description optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Meta Title</Label>
                <Input 
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Enter current meta title" 
                />
                <div className="text-sm text-muted-foreground">
                  Length: {metaTitle.length}/60 characters
                </div>
              </div>

              <div className="space-y-2">
                <Label>Current Meta Description</Label>
                <Textarea 
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Enter current meta description" 
                  rows={3}
                />
                <div className="text-sm text-muted-foreground">
                  Length: {metaDescription.length}/160 characters
                </div>
              </div>

              <div className="space-y-2">
                <Label>Target Keywords</Label>
                <Input placeholder="Enter target keywords (comma-separated)" />
              </div>

              <Button onClick={handleOptimizeMeta} className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Optimize Meta Tags (5 tokens)
              </Button>

              {/* Preview */}
              {metaTitle && metaDescription && (
                <Card className="border border-blue-500/20 bg-blue-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Search Result Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                        {metaTitle || "Your optimized title will appear here"}
                      </div>
                      <div className="text-green-700 text-sm">
                        https://example.com/your-page
                      </div>
                      <div className="text-gray-600 text-sm">
                        {metaDescription || "Your optimized description will appear here..."}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Schema Validation
              </CardTitle>
              <CardDescription>
                Validate your schema markup and check for errors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Schema JSON-LD</Label>
                <Textarea 
                  placeholder="Paste your schema markup here for validation" 
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <Button className="w-full">
                <CheckCircle className="mr-2 h-4 w-4" />
                Validate Schema
              </Button>

              {/* Validation Results */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">Valid Schema Structure</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">All Required Properties Present</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">Google Rich Results Compatible</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SchemaMetaPage;
