
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/hooks/use-theme";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import SettingsLayout from "./layouts/SettingsLayout";

// Pre-login pages
import Home from "./pages/pre-login/Home";
import Login from "./pages/pre-login/Login";
import Signup from "./pages/pre-login/Signup";
import ForgotPassword from "./pages/pre-login/ForgotPassword";
import Pricing from "./pages/pre-login/Pricing";
import About from "./pages/pre-login/About";
import Contact from "./pages/pre-login/Contact";
import Docs from "./pages/pre-login/resources/Documentation";
import Blog from "./pages/pre-login/resources/Blog";
import Community from "./pages/pre-login/resources/Community";
import FAQ from "./pages/pre-login/resources/FAQ";
import Careers from "./pages/pre-login/Careers";
import CookiesPage from "./pages/pre-login/legal/Cookies";
import PrivacyPage from "./pages/pre-login/legal/Privacy";
import TermsPage from "./pages/pre-login/legal/Terms";

// Post-login pages
import Dashboard from "./pages/post-login/Dashboard";
import Projects from "./pages/post-login/Projects";
import ContentHub from "./pages/post-login/ContentHub";
import AiReadiness from "./pages/post-login/AiReadiness";
import ProfileSettings from "./pages/post-login/settings/Profile";

// Shared components
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/use-auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
                <Route path="projects" element={<Projects />} />
                <Route path="content-hub" element={<ContentHub />} />
                <Route path="ai-readiness" element={<AiReadiness />} />

                {/* Additional routes will be added as they're implemented */}
                <Route path="site-optimization" element={<div className="p-8">Site Optimization Page (Coming Soon)</div>} />
                <Route path="local-seo" element={<div className="p-8">Local SEO Page (Coming Soon)</div>} />
                <Route path="social-media" element={<div className="p-8">Social Media Page (Coming Soon)</div>} />
                <Route path="content-studio" element={<div className="p-8">Content Studio Page (Coming Soon)</div>} />
                <Route path="insights-reports" element={<div className="p-8">Insights & Reports Page (Coming Soon)</div>} />
                <Route path="inbox" element={<div className="p-8">Inbox Page (Coming Soon)</div>} />
              </Route>

              {/* Settings Routes (Protected) */}
              <Route path="/settings" element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <SettingsLayout />
                  </DashboardLayout>
                </ProtectedRoute>
              }>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="integrations" element={<div className="p-6">Integrations Settings (Coming Soon)</div>} />
                <Route path="llm" element={<div className="p-6">LLM Configuration (Coming Soon)</div>} />
                <Route path="preferences" element={<div className="p-6">Preferences Settings (Coming Soon)</div>} />
                <Route path="licenses" element={<div className="p-6">Licenses Information (Coming Soon)</div>} />
                <Route path="projects" element={<div className="p-6">Projects Management (Coming Soon)</div>} />
                <Route path="notes" element={<div className="p-6">Notes Settings (Coming Soon)</div>} />
                <Route path="enterprise-contact" element={<div className="p-6">Enterprise Contact (Coming Soon)</div>} />
                <Route path="gdpr" element={<div className="p-6">GDPR Management (Coming Soon)</div>} />
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
