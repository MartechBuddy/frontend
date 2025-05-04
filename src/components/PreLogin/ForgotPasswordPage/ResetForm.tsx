
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetForm = () => {
  return (
    <div className="w-full max-w-md p-8 glass-card border border-white/10 rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
      
      <p className="text-muted-foreground text-center mb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        
        <Button type="submit" className="w-full">Send Reset Link</Button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <Link to="/login" className="text-primary hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetForm;
