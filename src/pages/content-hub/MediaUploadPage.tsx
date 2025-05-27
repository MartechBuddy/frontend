
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const MediaUploadPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Media Upload</h1>
          <p className="text-muted-foreground mt-2">
            Upload images and media files for your content
          </p>
        </div>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Upload Media</CardTitle>
          <CardDescription>Upload images, videos, and other media files</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="text-center py-20">
            <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Upload your media files</h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop files here or click to browse
            </p>
            <Button>Choose Files</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaUploadPage;
