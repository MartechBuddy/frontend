
import React from "react";
import { Bot, Check, Lock, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AgentCardProps {
  title: string;
  description: string;
  capabilities: string[];
  isPremium?: boolean;
  isActive?: boolean;
  rating?: number;
}

const agents: AgentCardProps[] = [
  {
    title: "Email AI Agent",
    description: "Handles email outreach and follow-ups",
    capabilities: ["Personalized emails", "A/B testing", "Response handling"],
    isActive: true,
    rating: 4.8,
  },
  {
    title: "Content Creator",
    description: "Creates blog posts, social media content",
    capabilities: ["SEO optimized", "Topic research", "Readability scoring"],
    isActive: true,
    rating: 4.5,
  },
  {
    title: "Lead Qualifier",
    description: "Qualifies leads based on criteria",
    capabilities: ["Score calculation", "Criterion matching", "Prioritization"],
    isActive: false,
    rating: 4.2,
  },
  {
    title: "Voice Assistant",
    description: "Makes calls and handles voice interaction",
    capabilities: ["Natural voice", "Call scheduling", "Transcription"],
    isPremium: true,
    isActive: false,
    rating: 4.7,
  },
  {
    title: "Social Media Agent",
    description: "Manages social media accounts",
    capabilities: ["Content posting", "Engagement", "Analytics"],
    isActive: true,
    rating: 4.1,
  },
  {
    title: "Analytics AI",
    description: "Analyzes campaign data and provides insights",
    capabilities: ["Data visualization", "Trend spotting", "Recommendations"],
    isPremium: true,
    isActive: false,
    rating: 4.9,
  },
];

const AgentCard: React.FC<AgentCardProps> = ({
  title,
  description,
  capabilities,
  isPremium,
  isActive,
  rating,
}) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-5 animate-scale-in relative",
      isActive ? "border-primary/20" : ""
    )}>
      {isPremium && (
        <Badge className="absolute top-3 right-3 bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">
          <Lock size={10} className="mr-1" /> Premium
        </Badge>
      )}
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/20 text-primary">
          <Bot size={18} />
        </div>
        {rating && (
          <div className="ml-auto flex items-center text-xs">
            <Star size={12} className="text-amber-400 mr-1" fill="currentColor" />
            {rating}
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        {capabilities.map((capability, i) => (
          <div key={i} className="flex items-center text-xs text-muted-foreground">
            <Check size={12} className="mr-2 text-primary" />
            {capability}
          </div>
        ))}
      </div>
      <Button 
        variant={isActive ? "outline" : "default"}
        size="sm"
        className={cn(
          "w-full mt-2",
          isActive 
            ? "glass-button border border-primary/20 text-primary-foreground" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        {isActive ? "Configured" : "Configure"}
      </Button>
    </div>
  );
};

const Agents = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
          <p className="text-muted-foreground mt-1">
            Configure and manage specialized AI agents for your campaigns
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus size={16} className="mr-2" /> Custom Agent
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, i) => (
          <AgentCard
            key={i}
            title={agent.title}
            description={agent.description}
            capabilities={agent.capabilities}
            isPremium={agent.isPremium}
            isActive={agent.isActive}
            rating={agent.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Agents;
