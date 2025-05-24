
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Construction, Calendar, Bell } from "lucide-react";

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
  description?: string;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({
  isOpen,
  onClose,
  featureName,
  description
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-white/10 max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
            <Construction className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-xl font-bold">
            {featureName} - Coming Soon!
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            {description || `${featureName} is currently under development and will be available soon.`}
          </p>
          
          <div className="glass-card p-4 rounded-lg border border-white/5">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Expected release: Q2 2024</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={onClose}>
              <Bell className="h-4 w-4 mr-2" />
              Notify Me When Available
            </Button>
            <Button className="w-full" onClick={onClose}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonPopup;
