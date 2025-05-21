
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header for Auth Pages */}
      <header className="glass-nav border-b border-white/5 py-3 px-6 md:px-8 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">MartechEngine.ai</span>
          </Link>
          
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center animate-fade-in p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} MartechEngine.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
