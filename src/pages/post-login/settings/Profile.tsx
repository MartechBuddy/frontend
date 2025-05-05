
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { UserRound, AtSign, Lock, Check } from "lucide-react";

const ProfileSettings = () => {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      setIsSubmitting(false);
      
      // Reset password fields
      setForm({
        ...form,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account details and password
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserRound className="mr-2 h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleInputChange} 
                    className="glass-button"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={handleInputChange} 
                      className="glass-button pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
              <Button variant="outline" type="reset">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-primary" />
                Change Password
              </CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input 
                    id="currentPassword" 
                    name="currentPassword" 
                    type="password" 
                    value={form.currentPassword} 
                    onChange={handleInputChange} 
                    className="glass-button"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input 
                      id="newPassword" 
                      name="newPassword" 
                      type="password" 
                      value={form.newPassword} 
                      onChange={handleInputChange} 
                      className="glass-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password" 
                      value={form.confirmPassword} 
                      onChange={handleInputChange} 
                      className="glass-button"
                    />
                  </div>
                </div>
              </div>
              
              {form.newPassword && (
                <div className="bg-white/5 p-3 rounded-md">
                  <p className="text-sm mb-2">Password requirements:</p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-2">
                      <Check size={12} className={form.newPassword.length >= 8 ? "text-green-400" : "text-muted-foreground"} />
                      <span className={form.newPassword.length >= 8 ? "text-green-400" : "text-muted-foreground"}>
                        At least 8 characters
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className={/[A-Z]/.test(form.newPassword) ? "text-green-400" : "text-muted-foreground"} />
                      <span className={/[A-Z]/.test(form.newPassword) ? "text-green-400" : "text-muted-foreground"}>
                        At least one uppercase letter
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={12} className={/[0-9]/.test(form.newPassword) ? "text-green-400" : "text-muted-foreground"} />
                      <span className={/[0-9]/.test(form.newPassword) ? "text-green-400" : "text-muted-foreground"}>
                        At least one number
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
              <Button variant="outline" type="reset">
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !form.currentPassword || !form.newPassword || form.newPassword !== form.confirmPassword}
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
