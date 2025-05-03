
import React from "react";
import { ArrowRight, LucideIcon, Plus, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WorkflowCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass?: string;
  agents: number;
  lastModified: string;
}

const workflowTemplates: WorkflowCardProps[] = [
  {
    title: "Email Sequence",
    description: "Automated email outreach with follow-ups",
    icon: Workflow,
    iconClass: "bg-blue-500/20 text-blue-400",
    agents: 3,
    lastModified: "2 days ago",
  },
  {
    title: "Lead Qualification",
    description: "Qualify and score leads based on criteria",
    icon: Workflow,
    iconClass: "bg-green-500/20 text-green-400",
    agents: 2,
    lastModified: "1 week ago",
  },
  {
    title: "Content Generation",
    description: "Create and publish content on a schedule",
    icon: Workflow,
    iconClass: "bg-purple-500/20 text-purple-400",
    agents: 4,
    lastModified: "3 days ago",
  },
  {
    title: "Social Media",
    description: "Post and engage across social platforms",
    icon: Workflow,
    iconClass: "bg-amber-500/20 text-amber-400",
    agents: 5,
    lastModified: "Yesterday",
  },
];

const WorkflowCard: React.FC<WorkflowCardProps> = ({
  title,
  description,
  icon: Icon,
  iconClass,
  agents,
  lastModified,
}) => {
  return (
    <div className="glass-card rounded-xl p-5 animate-scale-in">
      <div className="flex justify-between">
        <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", iconClass)}>
          <Icon size={18} />
        </div>
        <p className="text-xs text-muted-foreground">{lastModified}</p>
      </div>
      <h3 className="text-lg font-medium mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{agents} AI agents</p>
        <Button variant="ghost" className="h-8 w-8 glass-button rounded-full p-0">
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
};

const Workflows = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Workflows</h1>
          <p className="text-muted-foreground mt-1">
            Create, edit and manage your automated AI agent workflows
          </p>
        </div>
        <Button>
          <Plus size={16} className="mr-2" /> New Workflow
        </Button>
      </div>
      
      <div className="animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">Workflow Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {workflowTemplates.map((workflow, i) => (
            <WorkflowCard
              key={i}
              title={workflow.title}
              description={workflow.description}
              icon={workflow.icon}
              iconClass={workflow.iconClass}
              agents={workflow.agents}
              lastModified={workflow.lastModified}
            />
          ))}
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-8 animate-fade-in text-center">
        <h3 className="text-xl font-medium mb-2">Create Custom Workflow</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Build a workflow from scratch with our visual AI workflow builder
        </p>
        <Button variant="outline">
          <Plus size={16} className="mr-2" /> Start Building
        </Button>
      </div>
    </div>
  );
};

export default Workflows;
