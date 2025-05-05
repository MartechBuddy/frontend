
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { UserRound, Mail, Lock } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "test@example.com",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password && formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="flex items-center gap-2">
                <UserRound size={16} className="text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="glass-button border"
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="glass-button border"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Change Password (Optional)
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock size={16} className="text-primary" />
                  New Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="glass-button border"
                />
              </div>
              
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock size={16} className="text-primary" />
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="glass-button border"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="px-6">Save Changes</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
