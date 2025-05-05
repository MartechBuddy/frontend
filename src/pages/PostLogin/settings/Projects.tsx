
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { LayoutGrid, Plus } from "lucide-react";

const ProjectsSettings = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Blog Site", website: "https://blog.example.com", created: "2025-04-15" },
    { id: 2, name: "E-commerce", website: "https://shop.example.com", created: "2025-05-01" },
  ]);

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Projects</h1>
        <p className="text-muted-foreground">
          Manage your content projects and websites
        </p>
      </div>

      <div className="flex justify-end">
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Project
        </Button>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <LayoutGrid className="mr-2 h-5 w-5 text-primary" />
            My Projects
          </CardTitle>
          <CardDescription>
            View and manage your existing projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left font-medium py-2 px-3">Name</th>
                  <th className="text-left font-medium py-2 px-3">Website</th>
                  <th className="text-left font-medium py-2 px-3">Created</th>
                  <th className="text-right font-medium py-2 px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-3">{project.name}</td>
                    <td className="py-3 px-3">
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {project.website}
                      </a>
                    </td>
                    <td className="py-3 px-3">{project.created}</td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <Button variant="outline" size="sm" onClick={() => {
                        toast({
                          title: "Editing project",
                          description: `Opening editor for ${project.name}`,
                        });
                      }}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => {
                        toast({
                          title: "Project deleted",
                          description: `${project.name} has been deleted`,
                        });
                        setProjects(projects.filter(p => p.id !== project.id));
                      }}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {projects.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-4 text-center text-muted-foreground">
                      No projects found. Create your first project to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <p className="text-sm text-muted-foreground">
            Total projects: {projects.length}
          </p>
          <Button onClick={() => {
            toast({
              title: "Projects refreshed",
              description: "Your project list has been updated.",
            });
          }}>Refresh List</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectsSettings;
