
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const ProjectSelector: React.FC = () => {
  const projects = [
    { id: '1', name: 'My Website', domain: 'mywebsite.com', isActive: true },
    { id: '2', name: 'E-commerce Store', domain: 'store.com', isActive: false },
    { id: '3', name: 'Blog Site', domain: 'blog.com', isActive: false }
  ];

  return (
    <div className="glass-card p-4 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Current Project</h3>
        <Globe className="h-4 w-4 text-primary" />
      </div>
      
      <Select defaultValue="1">
        <SelectTrigger className="glass-button border-white/10">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent className="glass-card border-white/10">
          {projects.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              <div className="flex flex-col">
                <span className="font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">{project.domain}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectSelector;
