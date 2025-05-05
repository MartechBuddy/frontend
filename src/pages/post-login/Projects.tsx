
import React, { useState } from "react";
import { 
  Plus, 
  Edit, 
  Trash, 
  Image as ImageIcon,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Mock data for projects
const mockProjects = [
  { id: 1, name: "Main Website", website: "example.com", social: ["Twitter", "Facebook"], wordpress: "Yes", created: "2024-04-01" },
  { id: 2, name: "Blog", website: "blog.example.com", social: ["Instagram"], wordpress: "No", created: "2024-04-15" },
  { id: 3, name: "Landing Page", website: "landing.example.com", social: ["LinkedIn"], wordpress: "Yes", created: "2024-05-01" },
];

interface Project {
  id: number;
  name: string;
  website: string;
  social: string[];
  wordpress: string;
  created: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  
  // Form state
  const [newProject, setNewProject] = useState({
    name: "",
    website: "",
    description: "",
    social: "",
    wordpress: false
  });

  const handleCreateProject = () => {
    const project: Project = {
      id: projects.length ? Math.max(...projects.map(p => p.id)) + 1 : 1,
      name: newProject.name,
      website: newProject.website,
      social: newProject.social.split(',').map(s => s.trim()),
      wordpress: newProject.wordpress ? "Yes" : "No",
      created: new Date().toISOString().split('T')[0]
    };
    
    setProjects([...projects, project]);
    setIsCreateOpen(false);
    resetForm();
    toast({
      title: "Project created",
      description: `${project.name} has been created successfully.`,
    });
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
    setIsDeleteOpen(false);
    toast({
      title: "Project deleted",
      description: `Project has been deleted successfully.`,
    });
  };

  const resetForm = () => {
    setNewProject({
      name: "",
      website: "",
      description: "",
      social: "",
      wordpress: false
    });
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus size={16} /> Create Project
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card border-white/10">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Add details for your new marketing project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="col-span-3 glass-button border"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input
                  id="website"
                  value={newProject.website}
                  onChange={(e) => setNewProject({ ...newProject, website: e.target.value })}
                  className="col-span-3 glass-button border"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="col-span-3 glass-button border"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="social" className="text-right">
                  Social Accounts
                </Label>
                <Input
                  id="social"
                  placeholder="Twitter, Facebook, LinkedIn"
                  value={newProject.social}
                  onChange={(e) => setNewProject({ ...newProject, social: e.target.value })}
                  className="col-span-3 glass-button border"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="wordpress" className="text-right">
                  WordPress Site
                </Label>
                <div className="flex items-center col-span-3">
                  <input
                    type="checkbox"
                    id="wordpress"
                    checked={newProject.wordpress}
                    onChange={(e) => setNewProject({ ...newProject, wordpress: e.target.checked })}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor="wordpress">Has WordPress site</label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
              <Button onClick={handleCreateProject}>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/5">
          <CardTitle className="text-xl">Project List</CardTitle>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search projects..."
              className="w-64 glass-button border"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/5">
                <TableHead>Name</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Social Accounts</TableHead>
                <TableHead>WordPress Site</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="border-white/5 hover:bg-white/5">
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {project.website}
                      <ExternalLink size={12} className="opacity-50" />
                    </div>
                  </TableCell>
                  <TableCell>{project.social.join(", ")}</TableCell>
                  <TableCell>{project.wordpress}</TableCell>
                  <TableCell>{project.created}</TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8" asChild>
                      <a href={`/projects/${project.id}/media`}>
                        <ImageIcon size={14} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8">
                      <Edit size={14} />
                    </Button>
                    <Dialog open={isDeleteOpen && currentProject?.id === project.id} onOpenChange={(open) => {
                      setIsDeleteOpen(open);
                      if (!open) setCurrentProject(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 text-destructive" 
                          onClick={() => setCurrentProject(project)}
                        >
                          <Trash size={14} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-card border-white/10">
                        <DialogHeader>
                          <DialogTitle>Delete Project</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this project? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
                          <Button 
                            variant="destructive" 
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Project Media</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Select a project to view its media or click the image icon in the actions column.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-md flex items-center justify-center">
                <ImageIcon className="text-white/30" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
