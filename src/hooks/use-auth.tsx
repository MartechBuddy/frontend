
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the context
interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  user: UserType | null;
}

// Simple user type
interface UserType {
  email: string;
  name: string;
  role: string;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
  user: null
});

// The provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  // Check localStorage on initial render
  useEffect(() => {
    const storedLoginState = localStorage.getItem("martechIsLoggedIn");
    const storedUserEmail = localStorage.getItem("martechUserEmail");
    
    if (storedLoginState === "true" && storedUserEmail) {
      setIsLoggedIn(true);
      setUser({
        email: storedUserEmail,
        name: "John Doe", // Would normally come from a backend API
        role: "Administrator"
      });
    }
  }, []);

  // Login function with email and password validation
  const login = (email: string, password: string) => {
    // Validate against the test credentials
    if (email === "test@example.com" && password === "test@123") {
      localStorage.setItem("martechIsLoggedIn", "true");
      localStorage.setItem("martechUserEmail", email);
      
      setIsLoggedIn(true);
      setUser({
        email,
        name: "John Doe", // Would normally come from a backend API
        role: "Administrator"
      });
      
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("martechIsLoggedIn");
    localStorage.removeItem("martechUserEmail");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);
