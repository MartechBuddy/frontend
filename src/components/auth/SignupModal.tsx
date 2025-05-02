
import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface SignupModalProps {
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: Authentication functionality disabled as per requirements
    toast({
      title: "Authentication Disabled",
      description: "Signup functionality is currently disabled.",
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-xl w-full max-w-md p-6 relative animate-scale-in">
        <Button 
          onClick={onClose} 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4"
        >
          <X size={16} />
        </Button>
        
        <h2 className="text-xl font-semibold mb-6 text-center">Create your account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass-button w-full p-2 rounded-md bg-transparent border border-white/10"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="signup-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-button w-full p-2 rounded-md bg-transparent border border-white/10"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="signup-password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-button w-full p-2 pr-10 rounded-md bg-transparent border border-white/10"
                placeholder="••••••••"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="accept-terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-transparent"
              required
            />
            <label htmlFor="accept-terms" className="ml-2 block text-sm">
              I accept the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <Button type="submit" className="w-full" disabled={!acceptTerms}>
            Create Account
          </Button>
          
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
          
          <div className="text-center text-sm mt-4">
            <span className="text-muted-foreground">Already have an account? </span>
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => {
                onClose();
                // Ideally trigger login modal here
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
