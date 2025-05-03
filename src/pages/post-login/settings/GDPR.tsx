
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { ShieldAlert, Download, Trash, AlertTriangle } from "lucide-react";

const GdprManagement = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Data export initiated",
        description: "Your data export has been initiated. You will receive an email with download link shortly.",
      });
      setIsExporting(false);
    }, 2000);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account deletion initiated",
        description: "Your account deletion has been initiated. Your account and data will be removed within 30 days.",
      });
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">GDPR Management</h1>
        <p className="text-muted-foreground">
          Control your personal data and privacy settings
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShieldAlert className="mr-2 h-5 w-5 text-primary" />
            Data Privacy Controls
          </CardTitle>
          <CardDescription>
            Export or delete your personal data according to GDPR regulations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/5 p-6 rounded-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-1">Export Your Data</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download a copy of all your personal data that we store
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={handleExport}
                disabled={isExporting}
              >
                <Download className="h-4 w-4 mr-2" />
                {isExporting ? "Processing..." : "Export Data"}
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-4 bg-white/5 p-3 rounded-md">
              <p>Your export will include:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Profile information</li>
                <li>Projects data</li>
                <li>Content and media</li>
                <li>Analytics data</li>
                <li>Settings and preferences</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-1">Delete Your Account</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button 
                variant="destructive"
                onClick={() => setShowDeleteConfirm(true)}
                disabled={isDeleting || showDeleteConfirm}
              >
                <Trash className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
            
            {showDeleteConfirm && (
              <Alert variant="destructive" className="mt-4">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <AlertTitle>Warning: Permanent Action</AlertTitle>
                <AlertDescription className="mt-2">
                  <p>Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.</p>
                  <div className="flex gap-4 mt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Processing..." : "Confirm Deletion"}
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6">
          <p className="text-sm text-muted-foreground">
            For more information about how we handle your data, please read our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GdprManagement;
