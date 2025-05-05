
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Bot, Check, AlertCircle, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LlmConfig = () => {
  const [llmProvider, setLlmProvider] = useState("openai");
  const [apiStatus, setApiStatus] = useState<"connected" | "disconnected" | "testing">("connected");
  
  const handleTestConnection = () => {
    setApiStatus("testing");
    
    // Simulate API connection test
    setTimeout(() => {
      setApiStatus("connected");
      toast({
        title: "Connection successful",
        description: "Your LLM API connection is working properly.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">LLM Configuration</h1>
        <p className="text-muted-foreground">
          Connect and configure your AI language model providers
        </p>
      </div>

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
                onChange={(e) => setLlmProvider(e.target.value)}
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
              <p className="text-xs text-muted-foreground mt-1">Your API key is encrypted and stored securely.</p>
            </div>

            {llmProvider === "openrouter" && (
              <div className="space-y-2">
                <Label htmlFor="model_selection">Model Selection</Label>
                <select 
                  id="model_selection" 
                  className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
                >
                  <option value="gpt-4">OpenAI GPT-4</option>
                  <option value="llama-3">Meta Llama 3</option>
                  <option value="claude-3">Anthropic Claude 3</option>
                  <option value="mistral">Mistral AI</option>
                </select>
              </div>
            )}

            <div className="flex flex-col gap-2 mt-2">
              <Label>Advanced Settings</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="temperature" className="text-xs">Temperature</Label>
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
                
                <div className="space-y-1">
                  <Label htmlFor="max_tokens" className="text-xs">Max Tokens</Label>
                  <Input 
                    id="max_tokens" 
                    type="number" 
                    className="glass-button border h-8"
                    defaultValue="4000"
                  />
                </div>
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
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your LLM configuration has been updated.",
            });
          }}>Save Configuration</Button>
        </CardFooter>
      </Card>

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
    </div>
  );
};

export default LlmConfig;
