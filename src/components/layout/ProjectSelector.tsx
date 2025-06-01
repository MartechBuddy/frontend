
import React, { useState } from 'react';
import { ChevronDown, Plus, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Project {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'processing' | 'archived';
}

interface ProjectSelectorProps {
  onProjectSelect: (projectId: string) => void;
  onCreateProject: () => void;
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ 
  onProjectSelect, 
  onCreateProject 
}) => {
  const [currentProject] = useState<Project>({
    id: '1',
    name: 'My Website',
    domain: 'example.com',
    status: 'active'
  });

  // Mock projects data - would come from API
  const projects: Project[] = [
    { id: '1', name: 'My Website', domain: 'example.com', status: 'active' },
    { id: '2', name: 'E-commerce Store', domain: 'mystore.com', status: 'active' },
    { id: '3', name: 'Blog Site', domain: 'myblog.net', status: 'processing' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 h-auto hover:bg-gray-700 text-gray-300">
          <Globe size={16} className="text-cyan-400" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-gray-100">{currentProject.name}</span>
            <span className="text-xs text-gray-400">{currentProject.domain}</span>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700 w-64 shadow-lg z-50">
        <DropdownMenuLabel className="text-gray-100">Your Projects</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        
        {projects.map((project) => (
          <DropdownMenuItem 
            key={project.id}
            onClick={() => onProjectSelect(project.id)}
            className="flex items-center justify-between p-3 hover:bg-gray-700 text-gray-100"
          >
            <div className="flex items-center space-x-2">
              <Globe size={14} className="text-gray-400" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-xs text-gray-400">{project.domain}</span>
              </div>
            </div>
            {project.status === 'processing' && (
              <span className="text-xs bg-yellow-800 text-yellow-300 px-2 py-1 rounded border border-yellow-600">
                Processing
              </span>
            )}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem onClick={onCreateProject} className="p-3 hover:bg-gray-700 text-gray-100">
          <Plus size={14} className="mr-2 text-gray-400" />
          <span>Create New Project</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectSelector;
