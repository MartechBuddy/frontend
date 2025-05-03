
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
import SiteOptimization from "./pages/post-login/SiteOptimization";
import LocalSeo from "./pages/post-login/LocalSeo";
import SocialMedia from "./pages/post-login/SocialMedia";
import ContentStudio from "./pages/post-login/ContentStudio";
import InsightsReports from "./pages/post-login/InsightsReports";
import ContentPerformance from "./pages/post-login/InsightsReports/ContentPerformance";
import Inbox from "./pages/post-login/Inbox";
import ContentScheduler from "./pages/post-login/ContentScheduler";

// Settings Pages
import ProfileSettings from "./pages/post-login/settings/Profile";
import IntegrationsSettings from "./pages/post-login/settings/Integrations";
import LlmConfig from "./pages/post-login/settings/LLMConfig";
import PreferencesSettings from "./pages/post-login/settings/Preferences";
import LicensesSettings from "./pages/post-login/settings/Licenses";
import ProjectsSettings from "./pages/post-login/settings/Projects";
import NotesSettings from "./pages/post-login/settings/Notes";
import EnterpriseContact from "./pages/post-login/settings/EnterpriseContact";
import GdprManagement from "./pages/post-login/settings/GDPR";

// Shared components
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/use-auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ContentCollaboration from "./pages/post-login/ContentCollaboration";

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
                <Route path="content-hub/scheduler" element={<ContentScheduler />} />
                <Route path="content-hub/collaboration" element={<ContentCollaboration />} />
                <Route path="ai-readiness" element={<AiReadiness />} />
                <Route path="site-optimization" element={<SiteOptimization />} />
                <Route path="local-seo" element={<LocalSeo />} />
                <Route path="social-media" element={<SocialMedia />} />
                <Route path="content-studio" element={<ContentStudio />} />
                <Route path="insights-reports" element={<InsightsReports />} />
                <Route path="insights-reports/content-performance" element={<ContentPerformance />} />
                <Route path="inbox" element={<Inbox />} />
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
                <Route path="integrations" element={<IntegrationsSettings />} />
                <Route path="llm" element={<LlmConfig />} />
                <Route path="preferences" element={<PreferencesSettings />} />
                <Route path="licenses" element={<LicensesSettings />} />
                <Route path="projects" element={<ProjectsSettings />} />
                <Route path="notes" element={<NotesSettings />} />
                <Route path="enterprise-contact" element={<EnterpriseContact />} />
                <Route path="gdpr" element={<GdprManagement />} />
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
