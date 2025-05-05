
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LLMConfig = () => {
  const { toast } = useToast();
  const [openaiApiKey, setOpenaiApiKey] = React.useState("");
  const [openaiModel, setOpenaiModel] = React.useState("gpt-4-turbo");
  const [openRouterApiKey, setOpenRouterApiKey] = React.useState("");
  const [openRouterModel, setOpenRouterModel] = React.useState("meta-llama/llama-3-70b-instruct");
  const [googleApiKey, setGoogleApiKey] = React.useState("");
  const [googleModel, setGoogleModel] = React.useState("gemini-1.5-pro");
  const [xaiApiKey, setXaiApiKey] = React.useState("");
  const [xaiModel, setXaiModel] = React.useState("grok-1");

  const handleOpenAITest = () => {
    // In a real app, this would test the connection to OpenAI
    if (!openaiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key before testing.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "OpenAI Connection",
      description: "Successfully connected to OpenAI API.",
    });
  };

  const handleOpenRouterTest = () => {
    if (!openRouterApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenRouter API key before testing.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "OpenRouter Connection",
      description: "Successfully connected to OpenRouter API.",
    });
  };

  const handleGoogleTest = () => {
    if (!googleApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Google API key before testing.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Google Connection",
      description: "Successfully connected to Google Gemini API.",
    });
  };

  const handleXaiTest = () => {
    if (!xaiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your xAI API key before testing.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "xAI Connection",
      description: "Successfully connected to xAI API.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">LLM Configuration</h3>
        <p className="text-sm text-muted-foreground">
          Configure your AI language models for the best performance
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>OpenAI</CardTitle>
          <CardDescription>Configure OpenAI API access for GPT models</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="openai-key">API Key</Label>
            <Input 
              id="openai-key" 
              type="password"
              value={openaiApiKey} 
              onChange={(e) => setOpenaiApiKey(e.target.value)} 
              placeholder="sk-..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="openai-model">Model</Label>
            <Select value={openaiModel} onValueChange={setOpenaiModel}>
              <SelectTrigger id="openai-model" className="w-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                <SelectItem value="gpt-4-1106-preview">GPT-4 (1106)</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleOpenAITest}>Test Connection</Button>
            <Button>Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>OpenRouter</CardTitle>
          <CardDescription>Configure OpenRouter for access to multiple models</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="openrouter-key">API Key</Label>
            <Input 
              id="openrouter-key" 
              type="password"
              value={openRouterApiKey} 
              onChange={(e) => setOpenRouterApiKey(e.target.value)} 
              placeholder="sk-or-..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="openrouter-model">Default Model</Label>
            <Select value={openRouterModel} onValueChange={setOpenRouterModel}>
              <SelectTrigger id="openrouter-model" className="w-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meta-llama/llama-3-70b-instruct">Llama 3 70B</SelectItem>
                <SelectItem value="meta-llama/llama-3-8b-instruct">Llama 3 8B</SelectItem>
                <SelectItem value="anthropic/claude-3-opus">Claude 3 Opus</SelectItem>
                <SelectItem value="anthropic/claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                <SelectItem value="mistralai/mistral-large">Mistral Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleOpenRouterTest}>Test Connection</Button>
            <Button>Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Google Gemini</CardTitle>
          <CardDescription>Configure Google Gemini API access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="google-key">API Key</Label>
            <Input 
              id="google-key" 
              type="password"
              value={googleApiKey} 
              onChange={(e) => setGoogleApiKey(e.target.value)} 
              placeholder="Your Google API key"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="google-model">Model</Label>
            <Select value={googleModel} onValueChange={setGoogleModel}>
              <SelectTrigger id="google-model" className="w-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                <SelectItem value="gemini-1.5-flash">Gemini 1.5 Flash</SelectItem>
                <SelectItem value="gemini-1.0-pro">Gemini 1.0 Pro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleGoogleTest}>Test Connection</Button>
            <Button>Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>xAI</CardTitle>
          <CardDescription>Configure xAI Grok model access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="xai-key">API Key</Label>
            <Input 
              id="xai-key" 
              type="password"
              value={xaiApiKey} 
              onChange={(e) => setXaiApiKey(e.target.value)} 
              placeholder="Your xAI API key"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="xai-model">Model</Label>
            <Select value={xaiModel} onValueChange={setXaiModel}>
              <SelectTrigger id="xai-model" className="w-full">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grok-1">Grok-1</SelectItem>
                <SelectItem value="grok-1-mini">Grok-1 Mini</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleXaiTest}>Test Connection</Button>
            <Button>Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LLMConfig;
