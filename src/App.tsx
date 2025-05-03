import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/hooks/use-theme";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/pre-login/Home";
import Login from "./pages/pre-login/Login";
import Signup from "./pages/pre-login/Signup";
import ForgotPassword from "./pages/pre-login/ForgotPassword";
import Dashboard from "./pages/post-login/Dashboard";
import Pricing from "./pages/pre-login/Pricing";
import About from "./pages/pre-login/About";
import Contact from "./pages/pre-login/Contact";
import Docs from "./pages/pre-login/resources/Documentation";
import Blog from "./pages/pre-login/resources/Blog";
import Community from "./pages/pre-login/resources/Community";
import FAQ from "./pages/pre-login/resources/FAQ";
import Careers from "./pages/pre-login/Careers";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/use-auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CookiesPage from "./pages/pre-login/legal/Cookies";
import PrivacyPage from "./pages/pre-login/legal/Privacy";
import TermsPage from "./pages/pre-login/legal/Terms";
import Workflows from "./pages/post-login/Workflows";
import Agents from "./pages/post-login/Agents";
import Campaigns from "./pages/post-login/Campaigns";
import Settings from "./pages/post-login/Settings";

// Create a new query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="careers" element={<Careers />} />
                
                {/* Resources */}
                <Route path="docs" element={<Docs />} />
                <Route path="blog" element={<Blog />} />
                <Route path="community" element={<Community />} />
                <Route path="resources/faq" element={<FAQ />} />
                
                {/* Legal */}
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="terms" element={<TermsPage />} />
                <Route path="cookies" element={<CookiesPage />} />
              </Route>
              
              {/* Dashboard Routes (Protected) */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Dashboard />} />
                <Route path="workflows" element={<Workflows />} />
                <Route path="agents" element={<Agents />} />
                <Route path="campaigns" element={<Campaigns />} />
                <Route path="settings" element={<Settings />} />
                {/* Other dashboard pages would be added here */}
              </Route>
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
