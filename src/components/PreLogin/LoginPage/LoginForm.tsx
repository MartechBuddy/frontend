
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simplified login - no password check
    if (login(email)) {
      toast({
        title: "Login Successful",
        description: "Welcome back to MartechEngine.ai",
      });
      
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Please use test@example.com for testing",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md glass-card border border-white/10">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Log in to your account</CardTitle>
        <CardDescription>
          Enter your email to access your account
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="glass-button border-white/10"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-transparent"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Label htmlFor="remember-me" className="text-sm font-normal">
              Remember me
            </Label>
          </div>
          
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="glass-button">
            Google
          </Button>
          <Button variant="outline" className="glass-button">
            LinkedIn
          </Button>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="text-center w-full text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link
            to="/signup"
            className="text-primary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
