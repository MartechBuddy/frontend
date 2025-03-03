
import React from "react";
import { ChevronRight, Copy, ExternalLink, MoreHorizontal, Play, Square } from "lucide-react";
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
    name: "Q2 Product Launch",
    status: "Active",
    agents: 5,
    leads: 348,
    conversionRate: 28.4,
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    name: "Enterprise Outreach",
    status: "Active",
    agents: 8,
    leads: 526,
    conversionRate: 17.2,
    lastUpdated: "4 hours ago",
  },
  {
    id: 3,
    name: "Customer Retention",
    status: "Paused",
    agents: 3,
    leads: 210,
    conversionRate: 32.1,
    lastUpdated: "1 day ago",
  },
  {
    id: 4,
    name: "New Market Research",
    status: "Active",
    agents: 12,
    leads: 168,
    conversionRate: 14.8,
    lastUpdated: "6 hours ago",
  },
];

const CampaignTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-white/5 hover:bg-transparent">
            <TableHead className="text-muted-foreground text-xs font-medium">Campaign Name</TableHead>
            <TableHead className="text-muted-foreground text-xs font-medium">Status</TableHead>
            <TableHead className="text-muted-foreground text-xs font-medium">AI Agents</TableHead>
            <TableHead className="text-muted-foreground text-xs font-medium">Leads</TableHead>
            <TableHead className="text-muted-foreground text-xs font-medium">Conversion %</TableHead>
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
                    <ExternalLink size={14} />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 glass-button rounded-full"
                  >
                    <Copy size={14} />
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
  );
};

export default CampaignTable;
