
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, FileUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

const MediaUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleUpload = () => {
    if (files.length === 0) {
      toast.error("Please select files to upload");
      return;
    }
    
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      toast.success(`Successfully uploaded ${files.length} files`);
      navigate('/content-hub/media/library');
    }, 2000);
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Upload Media</h1>
        <Button variant="outline" onClick={() => navigate('/content-hub/media/library')}>
          Back to Library
        </Button>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 ${
            dragActive ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-medium mb-2">Drag & Drop Files</h3>
          <p className="text-muted-foreground mb-4">
            Drop your files here, or click to browse your device
          </p>
          <div className="flex justify-center">
            <Label 
              htmlFor="file-upload" 
              className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
            >
              <FileUp size={16} />
              Browse Files
            </Label>
            <Input 
              id="file-upload" 
              type="file" 
              multiple 
              className="hidden" 
              onChange={handleFileChange}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Supported formats: JPG, PNG, GIF, MP4, MP3, WAV (max 50MB)
          </p>
        </div>
        
        {files.length > 0 && (
          <>
            <h3 className="text-lg font-medium mb-3">Selected Files ({files.length})</h3>
            <div className="space-y-2 mb-6">
              {files.map((file, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-card rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
                      <FileUp size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeFile(index)}
                    disabled={uploading}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="project">Project</Label>
                <Select defaultValue="default">
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Project</SelectItem>
                    <SelectItem value="marketing">Marketing Campaign</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce Site</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="e.g. logo, branding, product" />
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setFiles([])}
                disabled={uploading}
              >
                Clear All
              </Button>
              <Button 
                onClick={handleUpload}
                disabled={uploading}
                className="min-w-[120px]"
              >
                {uploading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Check size={16} className="mr-2" />
                    Upload Files
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MediaUploadPage;
