
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';

const SignupPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const planType = searchParams.get('plan');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signup(email, password);
      toast({
        title: "Success",
        description: "Account created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Email already exists",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-2">Create an Account</h1>
      {planType === 'paid' && (
        <p className="text-center text-muted-foreground mb-8">
          You're signing up for the Premium plan
        </p>
      )}
      
      <div className="glass-card p-8 rounded-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account?</span>
          {' '}
          <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
