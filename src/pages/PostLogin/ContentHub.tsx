
import React, { useState } from "react";
import { 
  Calendar, 
  Edit, 
  Trash, 
  Clock, 
  Plus, 
  Tags,
  Search,
  History 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for content
const mockContent = [
  { 
    id: 1, 
    title: "10 SEO Tips for 2025", 
    type: "Blog post", 
    platforms: ["Website", "LinkedIn"],
    tags: ["SEO", "Marketing"],
    created: "2025-05-01",
    updated: "2025-05-01", 
    status: "Published"
  },
  { 
    id: 2, 
    title: "New Product Launch", 
    type: "Social post", 
    platforms: ["Twitter", "Facebook", "Instagram"],
    tags: ["Product", "Launch"],
    created: "2025-05-02",
    updated: "2025-05-02", 
    status: "Scheduled"
  },
  { 
    id: 3, 
    title: "Q2 Report Summary", 
    type: "Newsletter", 
    platforms: ["Email"],
    tags: ["Reports", "Finance"],
    created: "2025-05-03",
    updated: "2025-05-03", 
    status: "Draft"
  }
];

// Mock data for versions
const mockVersions = [
  { id: 1, contentId: 1, version: "1.0", changed: "2025-05-01", user: "John Doe" },
  { id: 2, contentId: 1, version: "1.1", changed: "2025-05-02", user: "John Doe" }
];

// Mock data for audit log
const mockAuditLog = [
  { id: 1, contentId: 1, action: "Created content", timestamp: "2025-05-01 09:30", user: "John Doe" },
  { id: 2, contentId: 1, action: "Edited title", timestamp: "2025-05-01 10:15", user: "John Doe" },
  { id: 3, contentId: 1, action: "Published content", timestamp: "2025-05-01 11:00", user: "John Doe" }
];

interface Content {
  id: number;
  title: string;
  type: string;
  platforms: string[];
  tags: string[];
  created: string;
  updated: string;
  status: string;
}

const ContentHub = () => {
  const [content, setContent] = useState<Content[]>(mockContent);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Form state
  const [newContent, setNewContent] = useState({
    title: "",
    type: "Blog post",
    text: "",
    platforms: "",
    tags: ""
  });

  const handleCreateContent = () => {
    const item: Content = {
      id: content.length ? Math.max(...content.map(c => c.id)) + 1 : 1,
      title: newContent.title,
      type: newContent.type,
      platforms: newContent.platforms.split(',').map(p => p.trim()),
      tags: newContent.tags.split(',').map(t => t.trim()),
      created: new Date().toISOString().split('T')[0],
      updated: new Date().toISOString().split('T')[0],
      status: "Draft"
    };
    
    setContent([...content, item]);
    setIsCreateOpen(false);
    resetForm();
    toast({
      title: "Content created",
      description: `${item.title} has been created successfully.`,
    });
  };

  const handleDeleteContent = (id: number) => {
    setContent(content.filter(item => item.id !== id));
    toast({
      title: "Content deleted",
      description: "Content has been deleted successfully.",
    });
  };

  const resetForm = () => {
    setNewContent({
      title: "",
      type: "Blog post",
      text: "",
      platforms: "",
      tags: ""
    });
  };

  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.platforms.some(platform => platform.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Content Hub</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <a href="/content-hub/scheduler">
              <Calendar size={16} className="mr-2" /> Go to Scheduler
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/content-hub/collaboration">
              <Calendar size={16} className="mr-2" /> Collaboration
            </a>
          </Button>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus size={16} /> Create Content
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Content</DialogTitle>
                <DialogDescription>
                  Add details for your new content piece.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newContent.title}
                    onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                    className="col-span-3 glass-button border"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Select
                    value={newContent.type}
                    onValueChange={(value) => setNewContent({ ...newContent, type: value })}
                  >
                    <SelectTrigger className="col-span-3 glass-button border">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Blog post">Blog post</SelectItem>
                      <SelectItem value="Social post">Social post</SelectItem>
                      <SelectItem value="Newsletter">Newsletter</SelectItem>
                      <SelectItem value="Landing page">Landing page</SelectItem>
                      <SelectItem value="Ad copy">Ad copy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="text" className="text-right">
                    Text
                  </Label>
                  <Textarea
                    id="text"
                    rows={5}
                    value={newContent.text}
                    onChange={(e) => setNewContent({ ...newContent, text: e.target.value })}
                    className="col-span-3 glass-button border"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="platforms" className="text-right">
                    Platforms
                  </Label>
                  <Input
                    id="platforms"
                    placeholder="Website, LinkedIn, Twitter"
                    value={newContent.platforms}
                    onChange={(e) => setNewContent({ ...newContent, platforms: e.target.value })}
                    className="col-span-3 glass-button border"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tags" className="text-right">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="SEO, Marketing, Product"
                    value={newContent.tags}
                    onChange={(e) => setNewContent({ ...newContent, tags: e.target.value })}
                    className="col-span-3 glass-button border"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                <Button onClick={handleCreateContent}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/5">
          <CardTitle className="text-xl">Content Library</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
            <Input
              placeholder="Search by keyword, tags..."
              className="pl-10 glass-button border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 glass-card mx-4 mt-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="versions">Version History</TabsTrigger>
              <TabsTrigger value="audit">Audit Log</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5">
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Platforms</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent.map((item) => (
                    <TableRow key={item.id} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {item.platforms.map((platform, i) => (
                            <Badge key={i} variant="outline" className="bg-white/10">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/20 text-primary-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{item.created}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={item.status === "Published" ? "default" : 
                                  item.status === "Scheduled" ? "outline" : 
                                  "secondary"}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8">
                          <Edit size={14} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 text-destructive"
                          onClick={() => handleDeleteContent(item.id)}
                        >
                          <Trash size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="versions" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5">
                    <TableHead>Content</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Changed</TableHead>
                    <TableHead>Changed By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockVersions.map((version) => (
                    <TableRow key={version.id} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-medium">
                        {content.find(c => c.id === version.contentId)?.title || "Unknown"}
                      </TableCell>
                      <TableCell>{version.version}</TableCell>
                      <TableCell>{version.changed}</TableCell>
                      <TableCell>{version.user}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Revert
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="audit" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5">
                    <TableHead>Content</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockAuditLog.map((log) => (
                    <TableRow key={log.id} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-medium">
                        {content.find(c => c.id === log.contentId)?.title || "Unknown"}
                      </TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>{log.user}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentHub;
