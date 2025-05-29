
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Users, Plus, Edit, Trash2, Crown, UserCheck, User } from "lucide-react";

const RolesPermissionsPage: React.FC = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const roles = [
    {
      id: 1,
      name: "Owner",
      description: "Full access to all features and settings",
      users: 1,
      color: "bg-yellow-500",
      icon: <Crown className="h-4 w-4" />,
      permissions: {
        projects: { create: true, edit: true, delete: true, view: true },
        content: { create: true, edit: true, delete: true, publish: true },
        seoTools: { access: true, configure: true },
        workflows: { create: true, edit: true, delete: true, run: true },
        billing: { view: true, manage: true },
        team: { invite: true, manage: true, remove: true },
        integrations: { connect: true, configure: true, disconnect: true }
      }
    },
    {
      id: 2,
      name: "Admin",
      description: "Manage projects and team members",
      users: 2,
      color: "bg-red-500",
      icon: <UserCheck className="h-4 w-4" />,
      permissions: {
        projects: { create: true, edit: true, delete: false, view: true },
        content: { create: true, edit: true, delete: true, publish: true },
        seoTools: { access: true, configure: false },
        workflows: { create: true, edit: true, delete: false, run: true },
        billing: { view: true, manage: false },
        team: { invite: true, manage: true, remove: false },
        integrations: { connect: true, configure: false, disconnect: false }
      }
    },
    {
      id: 3,
      name: "Editor",
      description: "Create and edit content, run SEO tools",
      users: 5,
      color: "bg-blue-500",
      icon: <User className="h-4 w-4" />,
      permissions: {
        projects: { create: false, edit: true, delete: false, view: true },
        content: { create: true, edit: true, delete: false, publish: true },
        seoTools: { access: true, configure: false },
        workflows: { create: false, edit: false, delete: false, run: true },
        billing: { view: false, manage: false },
        team: { invite: false, manage: false, remove: false },
        integrations: { connect: false, configure: false, disconnect: false }
      }
    },
    {
      id: 4,
      name: "Viewer",
      description: "Read-only access to projects and reports",
      users: 3,
      color: "bg-gray-500",
      icon: <User className="h-4 w-4" />,
      permissions: {
        projects: { create: false, edit: false, delete: false, view: true },
        content: { create: false, edit: false, delete: false, publish: false },
        seoTools: { access: true, configure: false },
        workflows: { create: false, edit: false, delete: false, run: false },
        billing: { view: false, manage: false },
        team: { invite: false, manage: false, remove: false },
        integrations: { connect: false, configure: false, disconnect: false }
      }
    }
  ];

  const permissionCategories = [
    { key: 'projects', label: 'Projects', description: 'Manage website projects' },
    { key: 'content', label: 'Content Hub', description: 'Create and manage content' },
    { key: 'seoTools', label: 'SEO Tools', description: 'Access SEO analysis tools' },
    { key: 'workflows', label: 'Workflows', description: 'AI automation workflows' },
    { key: 'billing', label: 'Billing', description: 'View and manage billing' },
    { key: 'team', label: 'Team Management', description: 'Manage team members' },
    { key: 'integrations', label: 'Integrations', description: 'Connect external services' }
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Roles & Permissions</h1>
          <p className="text-muted-foreground">Manage user roles and access permissions</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Role
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>Define a new role with specific permissions</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="roleName">Role Name</Label>
                <Input id="roleName" placeholder="e.g., Content Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleDesc">Description</Label>
                <Textarea id="roleDesc" placeholder="Brief description of this role..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Create Role</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Roles Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role) => (
          <Card key={role.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${role.color} flex items-center justify-center text-white`}>
                    {role.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{role.name}</CardTitle>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">
                  <Users className="h-3 w-3 mr-1" />
                  {role.users} users
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Permissions Matrix */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <CardTitle>Permissions Matrix</CardTitle>
          </div>
          <CardDescription>Detailed view of role permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Permission</th>
                  {roles.map((role) => (
                    <th key={role.id} className="text-center p-2 min-w-[100px]">
                      <div className="flex items-center justify-center gap-1">
                        <div className={`w-4 h-4 rounded-full ${role.color}`} />
                        {role.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissionCategories.map((category) => (
                  <React.Fragment key={category.key}>
                    <tr className="bg-muted/30">
                      <td className="p-2 font-medium" colSpan={roles.length + 1}>
                        {category.label}
                      </td>
                    </tr>
                    {Object.keys(roles[0].permissions[category.key as keyof typeof roles[0].permissions]).map((action) => (
                      <tr key={`${category.key}-${action}`} className="border-b">
                        <td className="p-2 pl-6 text-sm">
                          {action.charAt(0).toUpperCase() + action.slice(1)}
                        </td>
                        {roles.map((role) => (
                          <td key={role.id} className="text-center p-2">
                            <Switch
                              checked={role.permissions[category.key as keyof typeof role.permissions][action as keyof typeof role.permissions.projects]}
                              disabled={role.name === 'Owner'}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Role Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Role Templates</CardTitle>
          <CardDescription>Quick setup with predefined role templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Content Creator</h4>
              <p className="text-sm text-muted-foreground mb-3">Perfect for writers and content managers</p>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">SEO Specialist</h4>
              <p className="text-sm text-muted-foreground mb-3">Access to all SEO tools and analysis</p>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Client Manager</h4>
              <p className="text-sm text-muted-foreground mb-3">View reports and manage client projects</p>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RolesPermissionsPage;
