
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md animate-scale-in px-6">
        <h1 className="text-7xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page doesn't exist or has been moved to another dimension.
        </p>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => navigate("/")}
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
