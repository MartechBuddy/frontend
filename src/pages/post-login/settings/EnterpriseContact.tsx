
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Building } from "lucide-react";

const EnterpriseContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your interest in our enterprise solutions. Our team will contact you shortly.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setForm({
        name: "",
        email: "",
        company: "",
        employees: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Enterprise Contact</h1>
        <p className="text-muted-foreground">
          Get in touch with our enterprise team for custom solutions
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="mr-2 h-5 w-5 text-primary" />
            Contact Enterprise Team
          </CardTitle>
          <CardDescription>
            Fill out the form below to learn more about our enterprise offerings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  name="name" 
                  value={form.name} 
                  onChange={handleInputChange} 
                  required
                  className="glass-button"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={form.email} 
                  onChange={handleInputChange} 
                  required
                  className="glass-button"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input 
                  id="company" 
                  name="company"
                  value={form.company} 
                  onChange={handleInputChange} 
                  required
                  className="glass-button"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees</Label>
                <Input 
                  id="employees" 
                  name="employees"
                  type="number"
                  min="1"
                  value={form.employees} 
                  onChange={handleInputChange} 
                  required
                  className="glass-button"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full h-32 rounded-md bg-background/50 border border-input p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your requirements..."
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" type="reset">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnterpriseContact;
