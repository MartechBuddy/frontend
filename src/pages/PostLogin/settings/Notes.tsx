
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PanelLeft, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NotesSettings = () => {
  const [notes, setNotes] = useState(
    "Track important reminders and campaign ideas here...\n\n- Follow up on Google Analytics integration\n- Research competitor keywords\n- Schedule content calendar review"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Notes saved",
        description: "Your notes have been saved successfully.",
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Notes</h1>
        <p className="text-muted-foreground">
          Keep track of important reminders and ideas
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center">
              <PanelLeft className="mr-2 h-5 w-5 text-primary" />
              Your Notes
            </CardTitle>
            <CardDescription>
              Private notes that only you can access
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full h-64 rounded-md bg-background/50 border border-input p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Type your notes here..."
          />
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <p className="text-sm text-muted-foreground">
            Last saved: 2025-05-01 10:23 AM
          </p>
          <Button 
            onClick={handleSave} 
            disabled={isSubmitting}
          >
            <Save className="h-4 w-4 mr-2" />
            {isSubmitting ? "Saving..." : "Save Notes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotesSettings;
