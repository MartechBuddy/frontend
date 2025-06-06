
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
      
      <div className="glass-card p-8 rounded-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input 
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
          >
            Sign in
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account?</span>
          {' '}
          <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
