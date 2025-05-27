
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
  // Remove authentication logic - set to always logged in for now
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState<User | null>({
    email: "user@example.com",
    name: "Demo User"
  });
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Simplified - just navigate to dashboard
    navigate("/dashboard");
  };

  const signup = async (email: string, password: string) => {
    // Simplified - just navigate to dashboard
    navigate("/dashboard");
  };

  const logout = () => {
    navigate("/");
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
