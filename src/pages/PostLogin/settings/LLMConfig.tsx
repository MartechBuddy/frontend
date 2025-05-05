
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Bot, Check, AlertCircle, RefreshCw, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface LLMModel {
  id: string;
  name: string;
  description: string;
  provider: string;
}

const LlmConfig = () => {
  const [llmProvider, setLlmProvider] = useState("openai");
  const [apiStatus, setApiStatus] = useState<"connected" | "disconnected" | "testing">("connected");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState("api");
  const [showModelSelector, setShowModelSelector] = useState(false);
  
  // Available models based on provider
  const models: Record<string, LLMModel[]> = {
    openrouter: [
      { id: "gpt-4", name: "OpenAI GPT-4", description: "Advanced model with strong reasoning abilities", provider: "OpenAI" },
      { id: "llama-3", name: "Meta Llama 3", description: "Open foundation model, excellent balance of capabilities", provider: "Meta" },
      { id: "claude-3", name: "Anthropic Claude 3", description: "Advanced reasoning and instruction following", provider: "Anthropic" },
      { id: "mistral", name: "Mistral AI", description: "Efficient and powerful open model", provider: "Mistral AI" }
    ],
    openai: [
      { id: "gpt-4o", name: "GPT-4o", description: "Latest model with optimal balance", provider: "OpenAI" },
      { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast version of GPT-4", provider: "OpenAI" },
      { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Fast, cost-effective model", provider: "OpenAI" }
    ],
    google: [
      { id: "gemini-pro", name: "Gemini Pro", description: "Google's advanced multimodal model", provider: "Google" },
      { id: "gemini-1.5", name: "Gemini 1.5", description: "Google's latest reasoning model", provider: "Google" }
    ],
    xai: [
      { id: "grok-1", name: "Grok-1", description: "xAI's current model with real-time knowledge", provider: "xAI" }
    ]
  };

  const handleTestConnection = () => {
    setApiStatus("testing");
    
    // Simulate API connection test
    setTimeout(() => {
      setApiStatus("connected");
      toast({
        title: "Connection successful",
        description: "Your LLM API connection is working properly.",
      });
      
      // After successful connection, show model selector
      setShowModelSelector(true);
    }, 1500);
  };

  const handleSaveConfiguration = () => {
    if (!selectedModel && showModelSelector) {
      toast({
        title: "Model selection required",
        description: "Please select a model before saving.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Settings saved",
      description: "Your LLM configuration has been updated.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="w-full flex justify-start border-b mb-6">
          <TabsTrigger value="api" className="flex-1 max-w-[200px]">API Configuration</TabsTrigger>
          <TabsTrigger value="usage" className="flex-1 max-w-[200px]">Usage & Limits</TabsTrigger>
          <TabsTrigger value="advanced" className="flex-1 max-w-[200px]">Advanced Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Set up your preferred language model provider
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="llm_provider">LLM Provider</Label>
                  <select 
                    id="llm_provider" 
                    className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
                    value={llmProvider}
                    onChange={(e) => {
                      setLlmProvider(e.target.value);
                      setShowModelSelector(false);
                      setSelectedModel("");
                    }}
                  >
                    <option value="openrouter">Openrouter</option>
                    <option value="openai">OpenAI</option>
                    <option value="google">Google AI</option>
                    <option value="xai">xAI</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="api_key">API Key</Label>
                  <div className="relative">
                    <Input 
                      id="api_key" 
                      type="password" 
                      placeholder="Enter your API key" 
                      className="glass-button border pr-24"
                      defaultValue="sk-••••••••••••••••••••••••••••••••"
                    />
                    <Button variant="link" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs">
                      Update
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <Info size={12} className="mr-1" /> Your API key is encrypted and stored securely.
                  </p>
                </div>

                {showModelSelector && (
                  <div className="space-y-2">
                    <Label htmlFor="model_selection">Model Selection</Label>
                    <select 
                      id="model_selection" 
                      className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="">Select a model</option>
                      {models[llmProvider].map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))}
                    </select>
                    
                    {selectedModel && (
                      <div className="mt-2 bg-white/5 p-3 rounded-md text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{models[llmProvider].find(m => m.id === selectedModel)?.name}</span>
                          <Badge variant="outline">{models[llmProvider].find(m => m.id === selectedModel)?.provider}</Badge>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {models[llmProvider].find(m => m.id === selectedModel)?.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-1 pt-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable_fallback" className="flex items-center text-sm">
                      Enable Fallback Chain
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={14} className="ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">If enabled, the system will try the next available provider if the current one fails.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Switch id="enable_fallback" defaultChecked />
                  </div>
                </div>

                {apiStatus === "connected" ? (
                  <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-md flex items-center">
                    <Check className="text-green-500 h-5 w-5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-green-500">API connection successful</p>
                      <p className="text-xs text-green-500/70">Last verified: Today at 10:34 AM</p>
                    </div>
                  </div>
                ) : apiStatus === "disconnected" ? (
                  <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-md flex items-center">
                    <AlertCircle className="text-red-500 h-5 w-5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-red-500">API connection failed</p>
                      <p className="text-xs text-red-500/70">Please check your API key and try again</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-md flex items-center">
                    <RefreshCw className="text-blue-500 h-5 w-5 mr-2 animate-spin" />
                    <div>
                      <p className="text-sm font-medium text-blue-500">Testing connection...</p>
                      <p className="text-xs text-blue-500/70">This may take a few seconds</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleTestConnection} disabled={apiStatus === "testing"}>
                  {apiStatus === "testing" ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Testing...
                    </>
                  ) : (
                    <>Test Connection</>
                  )}
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View API Documentation</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>API Documentation</DialogTitle>
                      <DialogDescription>
                        Learn how to obtain and use API keys for different providers
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">OpenAI</h4>
                        <p className="text-sm">Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">platform.openai.com/api-keys</a> to generate your API key.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Google AI</h4>
                        <p className="text-sm">Visit <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary underline">makersuite.google.com</a> to get your API key.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Openrouter</h4>
                        <p className="text-sm">Visit <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="text-primary underline">openrouter.ai/keys</a> to create your API key.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <Button onClick={handleSaveConfiguration}>Save Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                Usage & Limits
              </CardTitle>
              <CardDescription>
                Monitor your API usage and set limits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Monthly Usage</h4>
                    <Badge className="bg-primary">Pro Plan</Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>API Requests</span>
                        <span>12,458 / 50,000</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full mt-1">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Tokens Used</span>
                        <span>1.2M / 5M</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full mt-1">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "24%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Usage Alerts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="usage_75" className="mr-2" defaultChecked />
                      <Label htmlFor="usage_75" className="text-sm">Alert at 75% usage</Label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="usage_90" className="mr-2" defaultChecked />
                      <Label htmlFor="usage_90" className="text-sm">Alert at 90% usage</Label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="usage_limit" className="mr-2" />
                      <Label htmlFor="usage_limit" className="text-sm">Automatically pause at limit</Label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Current Billing Cycle</h4>
                    <p className="text-xs text-muted-foreground">May 1 - May 31, 2025</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-md">
                    <h4 className="font-medium text-sm mb-1">Next Renewal</h4>
                    <p className="text-xs text-muted-foreground">June 1, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
              <Button variant="outline" onClick={() => {
                toast({
                  title: "Usage report generated",
                  description: "Detailed usage report has been sent to your email.",
                });
              }}>Usage Report</Button>
              <Button onClick={() => {
                toast({
                  title: "Settings saved",
                  description: "Your usage alert settings have been updated.",
                });
              }}>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                Advanced Settings
              </CardTitle>
              <CardDescription>
                Configure advanced parameters for the language model
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature" className="flex items-center">
                    Temperature
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={14} className="ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Controls randomness. Lower values produce more deterministic responses.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <div className="flex items-center gap-2">
                    <input 
                      id="temperature"
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      defaultValue="0.7"
                      className="w-full accent-primary"
                    />
                    <span className="text-xs w-8">0.7</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max_tokens" className="flex items-center">
                    Max Tokens
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={14} className="ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Maximum number of tokens to generate in the response.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input 
                    id="max_tokens" 
                    type="number" 
                    className="glass-button border"
                    defaultValue="4000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="top_p" className="flex items-center">
                    Top P
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={14} className="ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Nucleus sampling. Controls diversity via cumulative probability.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <div className="flex items-center gap-2">
                    <input 
                      id="top_p"
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.05" 
                      defaultValue="0.9"
                      className="w-full accent-primary"
                    />
                    <span className="text-xs w-8">0.9</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="frequency_penalty" className="flex items-center">
                    Frequency Penalty
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info size={14} className="ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Reduces repetition by penalizing tokens that have already appeared.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <div className="flex items-center gap-2">
                    <input 
                      id="frequency_penalty"
                      type="range" 
                      min="0" 
                      max="2" 
                      step="0.1" 
                      defaultValue="0.5"
                      className="w-full accent-primary"
                    />
                    <span className="text-xs w-8">0.5</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 pt-2">
                <Label>Advanced Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="streaming" className="flex items-center text-sm">
                      Enable Streaming Responses
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={14} className="ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">Stream tokens as they're generated instead of waiting for the complete response.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Switch id="streaming" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system_prompt" className="flex items-center text-sm">
                      Custom System Prompt
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={14} className="ml-1 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px] text-xs">Define default instructions that guide the AI's behavior for all interactions.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">Edit</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Custom System Prompt</DialogTitle>
                          <DialogDescription>
                            This prompt will guide the AI's behavior across all interactions.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <textarea 
                            className="w-full h-40 p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="You are a helpful marketing assistant for MartechEngine.ai..."
                            defaultValue="You are a helpful, expert marketing assistant for MartechEngine.ai. You provide concise, accurate information about SEO, content marketing, and digital advertising. When analyzing data, you focus on actionable insights. You maintain a professional tone while being friendly and approachable."
                          />
                        </div>
                        <div className="flex justify-end">
                          <Button type="button">Save Prompt</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="w-full">Reset to Default Settings</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will reset all LLM settings to their default values. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => {
                        toast({
                          title: "Settings reset",
                          description: "All LLM settings have been reset to default values.",
                        });
                      }}>Reset Settings</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-6 flex justify-end">
              <Button onClick={() => {
                toast({
                  title: "Advanced settings saved",
                  description: "Your advanced LLM parameters have been updated.",
                });
              }}>Save Advanced Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LlmConfig;
