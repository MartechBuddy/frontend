
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions",
    });
    
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-10 px-4">
      <Card className="w-full max-w-md glass-card border border-white/10">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email and we'll send you a reset link
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="text-primary text-lg font-medium mb-2">
                Check your inbox
              </div>
              <p className="text-muted-foreground">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Button 
                variant="outline" 
                className="mt-2" 
                onClick={() => setSubmitted(false)}
              >
                Try again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-button border-white/10"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          )}
        </CardContent>
        
        <CardFooter>
          <div className="text-center w-full text-sm">
            <span className="text-muted-foreground">Remember your password? </span>
            <Link
              to="/login"
              className="text-primary hover:underline"
            >
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetForm;
