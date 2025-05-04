
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (acceptTerms) {
      toast({
        title: "Account created successfully",
        description: "Welcome to MartechEngine.ai!",
      });
      
      // Store login state
      localStorage.setItem("martechIsLoggedIn", "true");
      
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "You must accept the terms and conditions.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-10 px-4">
      <Card className="w-full max-w-md glass-card border border-white/10">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-button border-white/10"
                placeholder="John Doe"
                required
              />
            </div>
            
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
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-button border-white/10 pr-10"
                  placeholder="••••••••"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                id="accept-terms"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-transparent"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
              />
              <Label htmlFor="accept-terms" className="text-sm font-normal">
                I accept the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full" disabled={!acceptTerms}>
              Create Account
            </Button>
          </form>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
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
            <span className="text-muted-foreground">Already have an account? </span>
            <Link
              to="/login"
              className="text-primary hover:underline"
            >
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
