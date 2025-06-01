
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Brain, Zap, Settings, TestTube } from "lucide-react";

const LlmConfigurationPage: React.FC = () => {
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([2048]);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">LLM Configuration</h1>
        <p className="text-muted-foreground">Configure AI models and parameters for optimal performance</p>
      </div>

      {/* Model Selection */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            <CardTitle>Model Selection</CardTitle>
          </div>
          <CardDescription>Choose the AI models for different tasks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Content Generation Model</Label>
              <Select defaultValue="gpt-4">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
                  <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude 3 Sonnet</SelectItem>
                  <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>SEO Analysis Model</Label>
              <Select defaultValue="gpt-4">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude 3 Sonnet</SelectItem>
                  <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Keyword Research Model</Label>
              <Select defaultValue="gpt-3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
                  <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude 3 Haiku</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Visual Analysis Model</Label>
              <Select defaultValue="gemini-vision">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gemini-vision">Gemini Vision Pro</SelectItem>
                  <SelectItem value="gpt-4v">GPT-4 Vision</SelectItem>
                  <SelectItem value="claude-3v">Claude 3 Vision</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            <CardTitle>Model Parameters</CardTitle>
          </div>
          <CardDescription>Fine-tune AI behavior and output quality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Temperature</Label>
                <Badge variant="outline">{temperature[0]}</Badge>
              </div>
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                max={2}
                min={0}
                step={0.1}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                Controls randomness. Lower values = more focused, higher values = more creative
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Max Tokens</Label>
                <Badge variant="outline">{maxTokens[0]}</Badge>
              </div>
              <Slider
                value={maxTokens}
                onValueChange={setMaxTokens}
                max={4096}
                min={256}
                step={256}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                Maximum length of generated content
              </p>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="topP">Top P</Label>
              <Input id="topP" defaultValue="0.9" type="number" step="0.1" min="0" max="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="frequencyPenalty">Frequency Penalty</Label>
              <Input id="frequencyPenalty" defaultValue="0" type="number" step="0.1" min="-2" max="2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Prompts */}
      <Card>
        <CardHeader>
          <CardTitle>Custom System Prompts</CardTitle>
          <CardDescription>Customize AI behavior with custom prompts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contentPrompt">Content Generation Prompt</Label>
            <Textarea
              id="contentPrompt"
              placeholder="You are an expert SEO content writer..."
              rows={4}
              defaultValue="You are an expert SEO content writer. Create engaging, informative content that ranks well in search engines while providing genuine value to readers."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="seoPrompt">SEO Analysis Prompt</Label>
            <Textarea
              id="seoPrompt"
              placeholder="You are an SEO expert analyzing websites..."
              rows={4}
              defaultValue="You are an SEO expert. Analyze websites for technical issues, content optimization opportunities, and provide actionable recommendations to improve search rankings."
            />
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            <CardTitle>API Configuration</CardTitle>
          </div>
          <CardDescription>Configure API endpoints and rate limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="apiEndpoint">Custom API Endpoint</Label>
              <Input id="apiEndpoint" placeholder="https://api.openai.com/v1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rateLimit">Rate Limit (requests/minute)</Label>
              <Input id="rateLimit" type="number" defaultValue="60" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label>Use Custom Endpoint</Label>
              <p className="text-sm text-muted-foreground">Route requests through your own API endpoint</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Test Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TestTube className="h-5 w-5" />
            <CardTitle>Test Configuration</CardTitle>
          </div>
          <CardDescription>Test your AI configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="testPrompt">Test Prompt</Label>
            <Textarea
              id="testPrompt"
              placeholder="Write a short SEO-optimized paragraph about digital marketing..."
              rows={3}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Test Content Generation</Button>
            <Button variant="outline">Test SEO Analysis</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Configuration</Button>
      </div>
    </div>
  );
};

export default LlmConfigurationPage;
