
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  name: string;
  website: string;
  socialAccounts: string[];
  createdAt: string;
  status: "active" | "inactive" | "pending";
}

const ProjectList = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "Main Website",
      website: "https://example.com",
      socialAccounts: ["Twitter", "LinkedIn"],
      createdAt: "2023-01-15",
      status: "active",
    },
    {
      id: "2",
      name: "Blog",
      website: "https://blog.example.com",
      socialAccounts: ["Twitter", "Facebook"],
      createdAt: "2023-02-20",
      status: "active",
    },
    {
      id: "3",
      name: "Landing Page",
      website: "https://landing.example.com",
      socialAccounts: ["Instagram"],
      createdAt: "2023-03-10",
      status: "inactive",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button>Create Project</Button>
      </div>
      
      <div className="glass-card border border-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Social Accounts</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    {project.website.replace(/^https?:\/\//, '')}
                    <ExternalLink size={14} />
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {project.socialAccounts.map((account, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {account}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <span 
                    className={`px-2 py-1 rounded text-xs ${
                      project.status === "active" 
                        ? "bg-green-500/10 text-green-500" 
                        : project.status === "inactive"
                        ? "bg-red-500/10 text-red-500"
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                      <Trash2 size={16} />
                    </Button>
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

export default ProjectList;
