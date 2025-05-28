
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card className="glass-card border-white/10 p-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Set new password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your new password below.
            </p>
          </div>
          
          <form className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                placeholder="Enter new password"
                type="password"
                autoComplete="new-password"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                placeholder="Confirm new password"
                type="password"
                autoComplete="new-password"
              />
            </div>
            
            <Button className="w-full" type="submit">
              Reset password
            </Button>
          </form>
        </Card>
        
        <p className="px-8 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link to="/login" className="hover:text-brand underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
