
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Test user credentials
    if (email === "test@example.com" && password === "Admin123") {
      console.log("Login attempt with:", email);
      setIsLoggedIn(true);
      setUser({
        email: "test@example.com",
        name: "Test User"
      });
      navigate("/dashboard");
      return;
    }
    
    // If credentials don't match
    throw new Error("Invalid email or password");
  };

  const signup = async (email: string, password: string) => {
    // This would typically call an API to create a new user
    console.log("Signup attempt with:", email);
    setIsLoggedIn(true);
    setUser({
      email: email,
      name: email.split('@')[0]
    });
    navigate("/dashboard");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
