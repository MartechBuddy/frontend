
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const LLMConfigPage = () => {
  const [apiKey, setApiKey] = useState("");
  const [provider, setProvider] = useState("openai");
  const [model, setModel] = useState("gpt-4");
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "testing" | "success" | "error">("idle");

  const handleSave = () => {
    // In a real app, this would save the API key securely
    if (!apiKey) {
      toast({
        title: "API key required",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "API key saved",
      description: `${provider.toUpperCase()} API key has been saved successfully.`,
    });
  };

  const handleTestConnection = () => {
    if (!apiKey) {
      toast({
        title: "API key required",
        description: "Please enter an API key before testing the connection",
        variant: "destructive",
      });
      return;
    }
    
    setConnectionStatus("testing");
    
    // Simulate API test
    setTimeout(() => {
      setConnectionStatus("success");
      toast({
        title: "Connection successful",
        description: `Successfully connected to ${provider.toUpperCase()}.`,
      });
    }, 1500);
  };

  const handleDeleteKey = () => {
    setApiKey("");
    setConnectionStatus("idle");
    toast({
      title: "API key deleted",
      description: "Your API key has been removed.",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">LLM Configuration</h2>
      <p className="text-muted-foreground mt-2 mb-6">Configure your language model settings for AI-powered features.</p>
      
      <div className="space-y-6 max-w-lg glass-card p-6 border border-white/10 rounded-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="provider">Provider</Label>
            <Select value={provider} onValueChange={setProvider}>
              <SelectTrigger>
                <SelectValue placeholder="Select a provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openai">OpenAI</SelectItem>
                <SelectItem value="xai">xAI</SelectItem>
                <SelectItem value="google">Google AI</SelectItem>
                <SelectItem value="openrouter">Openrouter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {provider === "openrouter" && (
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="llama-3">Llama 3</SelectItem>
                  <SelectItem value="claude-3">Claude 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input 
              id="api-key" 
              type="password" 
              placeholder="sk-..." 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored securely and never shared.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button onClick={handleSave}>
            Save API Key
          </Button>
          <Button 
            variant="outline" 
            onClick={handleTestConnection}
            disabled={connectionStatus === "testing"}
          >
            {connectionStatus === "testing" ? "Testing..." : "Test Connection"}
          </Button>
          {apiKey && (
            <Button 
              variant="outline" 
              className="text-destructive hover:text-destructive"
              onClick={handleDeleteKey}
            >
              Delete API Key
            </Button>
          )}
        </div>
        
        {connectionStatus === "success" && (
          <div className="flex items-center gap-2 p-3 rounded-md bg-green-500/10 text-green-400 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Connection successful</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LLMConfigPage;
