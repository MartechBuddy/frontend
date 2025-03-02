
import React from "react";
import { ChevronDown, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import CampaignTable from "@/components/dashboard/CampaignTable";

const Campaigns = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your AI-powered marketing campaigns
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus size={16} className="mr-2" /> New Campaign
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
          <Input
            placeholder="Search campaigns..."
            className="pl-10 glass-button py-4 border-0 focus-visible:ring-primary/40 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="glass-button border-0 flex items-center gap-2">
                <Filter size={14} />
                Status <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">All</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Active</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Paused</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Completed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="glass-button border-0 flex items-center gap-2">
                Sort <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-card border-white/10 p-2 rounded-xl">
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Newest</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Oldest</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Highest Conversion</DropdownMenuItem>
              <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer">Most Leads</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CampaignTable />
    </div>
  );
};

export default Campaigns;
