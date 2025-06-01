
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
        <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 h-auto hover:bg-gray-100">
          <Globe size={16} className="text-blue-600" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-gray-900">{currentProject.name}</span>
            <span className="text-xs text-gray-600">{currentProject.domain}</span>
          </div>
          <ChevronDown size={14} className="text-gray-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white border border-gray-200 w-64 shadow-lg">
        <DropdownMenuLabel className="text-gray-900">Your Projects</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {projects.map((project) => (
          <DropdownMenuItem 
            key={project.id}
            onClick={() => onProjectSelect(project.id)}
            className="flex items-center justify-between p-3 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <Globe size={14} className="text-gray-500" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{project.name}</span>
                <span className="text-xs text-gray-600">{project.domain}</span>
              </div>
            </div>
            {project.status === 'processing' && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded border border-yellow-200">
                Processing
              </span>
            )}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onCreateProject} className="p-3 hover:bg-gray-50">
          <Plus size={14} className="mr-2 text-gray-500" />
          <span className="text-gray-900">Create New Project</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectSelector;
