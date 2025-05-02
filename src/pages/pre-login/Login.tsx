
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Very simple authentication for test user
    if (email === "test@example.com" && password === "test123") {
      toast({
        title: "Login Successful",
        description: "Welcome back to MartechEngine.ai",
      });
      
      // Store login state
      localStorage.setItem("martechIsLoggedIn", "true");
      
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Try test@example.com / test123",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-10 px-4">
      <Card className="w-full max-w-md glass-card border border-white/10">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Log in to your account</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
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
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link 
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
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
    </div>
  );
};

export default Login;
