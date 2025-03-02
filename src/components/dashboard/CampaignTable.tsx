
import React from "react";
import { ChevronRight, MoreHorizontal, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Mock data for campaigns
const campaigns = [
  {
    id: 1,
    name: "Q1 Lead Generation",
    status: "Active",
    agents: 3,
    leads: 258,
    conversionRate: 24,
    lastUpdated: "2h ago",
  },
  {
    id: 2,
    name: "Product Launch Campaign",
    status: "Paused",
    agents: 5,
    leads: 1024,
    conversionRate: 18,
    lastUpdated: "1d ago",
  },
  {
    id: 3,
    name: "Email Workflow",
    status: "Active",
    agents: 2,
    leads: 532,
    conversionRate: 32,
    lastUpdated: "3h ago",
  },
  {
    id: 4,
    name: "Social Media Campaign",
    status: "Completed",
    agents: 4,
    leads: 1285,
    conversionRate: 41,
    lastUpdated: "1w ago",
  },
];

const CampaignTable = () => {
  return (
    <div className="glass-card rounded-xl animate-fade-in">
      <div className="p-5 border-b border-white/5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Recent Campaigns</h3>
          <Button
            variant="outline"
            size="sm"
            className="glass-button border-0 text-xs flex items-center gap-1"
          >
            View All <ChevronRight size={14} />
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-muted-foreground text-xs font-medium">Name</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium">Status</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium">AI Agents</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium">Leads</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium">Conversion</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium">Last Updated</TableHead>
              <TableHead className="text-muted-foreground text-xs font-medium text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id} className="border-white/5 hover:bg-white/5 transition duration-150">
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      campaign.status === "Active" && "bg-green-500/20 text-green-400",
                      campaign.status === "Paused" && "bg-amber-500/20 text-amber-400",
                      campaign.status === "Completed" && "bg-blue-500/20 text-blue-400"
                    )}
                  >
                    {campaign.status}
                  </span>
                </TableCell>
                <TableCell>{campaign.agents}</TableCell>
                <TableCell>{campaign.leads.toLocaleString()}</TableCell>
                <TableCell className="text-gradient-success">{campaign.conversionRate}%</TableCell>
                <TableCell className="text-sm text-muted-foreground">{campaign.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 glass-button rounded-full"
                    >
                      {campaign.status === "Active" ? (
                        <Square size={14} />
                      ) : (
                        <Play size={14} />
                      )}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 glass-button rounded-full"
                        >
                          <MoreHorizontal size={14} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-card border-white/10 p-2 rounded-xl">
                        <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer text-sm">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer text-sm">Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="glass-button rounded-lg my-1 cursor-pointer text-red-400 text-sm">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CampaignTable;
