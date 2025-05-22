
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Upload, Filter, Search, FileType, Edit, Copy, Trash, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

// Mock data for media items
const mockMediaItems = [
  { id: 1, type: 'image', name: 'Marketing Banner', date: '2025-05-15', url: 'https://via.placeholder.com/300x200?text=Marketing+Banner' },
  { id: 2, type: 'image', name: 'Product Image', date: '2025-05-14', url: 'https://via.placeholder.com/300x200?text=Product+Image' },
  { id: 3, type: 'video', name: 'Product Demo', date: '2025-05-13', url: 'https://via.placeholder.com/300x200?text=Product+Demo+Video' },
  { id: 4, type: 'image', name: 'Team Photo', date: '2025-05-12', url: 'https://via.placeholder.com/300x200?text=Team+Photo' },
  { id: 5, type: 'audio', name: 'Podcast Intro', date: '2025-05-11', url: 'https://via.placeholder.com/300x200?text=Podcast+Audio' },
  { id: 6, type: 'image', name: 'Logo Assets', date: '2025-05-10', url: 'https://via.placeholder.com/300x200?text=Logo+Assets' },
  { id: 7, type: 'video', name: 'Customer Testimonial', date: '2025-05-09', url: 'https://via.placeholder.com/300x200?text=Testimonial+Video' },
  { id: 8, type: 'audio', name: 'Radio Ad', date: '2025-05-08', url: 'https://via.placeholder.com/300x200?text=Radio+Ad+Audio' },
  { id: 9, type: 'image', name: 'Social Media Post', date: '2025-05-07', url: 'https://via.placeholder.com/300x200?text=Social+Media+Post' },
  { id: 10, type: 'image', name: 'Event Flyer', date: '2025-05-06', url: 'https://via.placeholder.com/300x200?text=Event+Flyer' },
  { id: 11, type: 'image', name: 'Website Header', date: '2025-05-05', url: 'https://via.placeholder.com/300x200?text=Website+Header' },
  { id: 12, type: 'video', name: 'Tutorial Video', date: '2025-05-04', url: 'https://via.placeholder.com/300x200?text=Tutorial+Video' },
];

const MediaLibraryPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter media items based on active tab and search query
  const filteredMediaItems = mockMediaItems.filter(item => {
    // Filter by type
    if (activeTab !== 'all' && item.type !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Media Library</h1>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => navigate('/content-hub/media/upload')}
          >
            <Upload size={16} />
            Upload Media
          </Button>
          <Button 
            className="flex items-center gap-2"
            onClick={() => navigate('/content-hub/media/generate')}
          >
            <PlusCircle size={16} />
            Generate Media
          </Button>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search media files..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="image">Images</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>
        
        <Separator className="mb-6" />
        
        {filteredMediaItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMediaItems.map((item) => (
              <div key={item.id} className="group relative aspect-square bg-gray-800 rounded-md overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                  <div className="flex justify-end">
                    <span className="text-xs bg-primary/80 text-white px-2 py-0.5 rounded capitalize">
                      {item.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white truncate">{item.name}</h3>
                    <p className="text-xs text-white/70">{item.date}</p>
                    <div className="flex mt-2 gap-1 justify-center">
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full">
                        <Download size={14} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full">
                        <Edit size={14} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full">
                        <Copy size={14} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full text-red-500">
                        <Trash size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <FileType className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No media found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              {searchQuery 
                ? `No results for "${searchQuery}". Try a different search term.` 
                : "Upload or generate media to see it here."}
            </p>
            <div className="flex gap-3 mt-6">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => navigate('/content-hub/media/upload')}
              >
                <Upload size={16} />
                Upload Media
              </Button>
              <Button 
                className="flex items-center gap-2"
                onClick={() => navigate('/content-hub/media/generate')}
              >
                <PlusCircle size={16} />
                Generate Media
              </Button>
            </div>
          </div>
        )}
        
        {filteredMediaItems.length > 0 && (
          <div className="flex justify-center mt-6">
            <Button variant="outline" className="w-full max-w-xs">
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaLibraryPage;
