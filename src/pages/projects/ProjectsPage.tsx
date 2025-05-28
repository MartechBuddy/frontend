
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Settings, Trash2 } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gradient">Projects</h1>
      
      <Card className="glass-card border-white/10 mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Your Projects</CardTitle>
              <CardDescription>Manage your SEO projects and campaigns</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Project
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-left py-3 px-4 font-medium">URL</th>
                  <th className="text-left py-3 px-4 font-medium">Owner</th>
                  <th className="text-left py-3 px-4 font-medium">Date Created</th>
                  <th className="text-left py-3 px-4 font-medium">AI Readiness</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4 font-medium">Marketing Campaign</td>
                  <td className="py-3 px-4 text-muted-foreground">example.com</td>
                  <td className="py-3 px-4">You</td>
                  <td className="py-3 px-4 text-muted-foreground">May 20, 2025</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-primary">85</span>
                      <span className="text-xs text-muted-foreground ml-1">/100</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4 font-medium">E-Commerce Site</td>
                  <td className="py-3 px-4 text-muted-foreground">store.example.com</td>
                  <td className="py-3 px-4">You</td>
                  <td className="py-3 px-4 text-muted-foreground">May 15, 2025</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-medium text-yellow-500">72</span>
                      <span className="text-xs text-muted-foreground ml-1">/100</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;
