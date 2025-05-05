
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Switch } from "../../../components/ui/switch";
import { Shield, Plus } from "lucide-react";

const RolesPermissions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Roles & Permissions</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage team roles and access permissions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Role
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Roles</CardTitle>
          <CardDescription>
            Define who can access what in your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role Name</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Admin
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">3 users</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  Full access to all system features and settings
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    Editor
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">8 users</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  Can create and edit content, but cannot manage users or billing
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Viewer
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">12 users</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  Can view content and reports, but cannot make changes
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permission Settings</CardTitle>
          <CardDescription>
            Configure detailed access controls for each role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">Content Management</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Permission</TableHead>
                    <TableHead className="w-[100px] text-center">Admin</TableHead>
                    <TableHead className="w-[100px] text-center">Editor</TableHead>
                    <TableHead className="w-[100px] text-center">Viewer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Create content</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Edit content</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Delete content</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium">User Management</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Permission</TableHead>
                    <TableHead className="w-[100px] text-center">Admin</TableHead>
                    <TableHead className="w-[100px] text-center">Editor</TableHead>
                    <TableHead className="w-[100px] text-center">Viewer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Invite users</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Assign roles</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Remove users</TableCell>
                    <TableCell className="text-center"><Switch checked disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                    <TableCell className="text-center"><Switch disabled /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RolesPermissions;
