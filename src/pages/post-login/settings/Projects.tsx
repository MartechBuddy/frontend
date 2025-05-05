
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { LayoutGrid, Edit, Trash, Plus } from "lucide-react";

const ProjectsSettings = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Company Website", website: "https://example.com", created: "2025-01-15" },
    { id: 2, name: "Blog", website: "https://blog.example.com", created: "2025-02-20" },
    { id: 3, name: "E-commerce Store", website: "https://store.example.com", created: "2025-03-10" },
  ]);

  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(project => project.id !== id));
      toast({
        title: "Project deleted",
        description: "The project has been deleted successfully.",
      });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Projects</h1>
        <p className="text-muted-foreground">
          Manage your projects and connected websites
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center">
              <LayoutGrid className="mr-2 h-5 w-5 text-primary" />
              Your Projects
            </CardTitle>
            <CardDescription>
              All your connected websites and projects
            </CardDescription>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add Project
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium">Website</th>
                  <th className="text-left py-3 px-4 text-sm font-medium">Created</th>
                  <th className="text-right py-3 px-4 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-3 px-4">{project.name}</td>
                    <td className="py-3 px-4">
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {project.website}
                      </a>
                    </td>
                    <td className="py-3 px-4">{project.created}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsSettings;
