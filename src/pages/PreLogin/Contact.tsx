
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <Input placeholder="Your name" />
              </div>
              
              <div>
                <label className="block mb-1">Email</label>
                <Input type="email" placeholder="Your email" />
              </div>
              
              <div>
                <label className="block mb-1">Message</label>
                <Textarea placeholder="How can we help?" rows={5} />
              </div>
              
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Email: contact@martechengine.ai<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Tech Plaza, San Francisco, CA 94105
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm PST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
