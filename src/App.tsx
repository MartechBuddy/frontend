
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
import Home from "./pages/PreLogin/Home";
import LoginPage from "./pages/PreLogin/LoginPage";
import SignupPage from "./pages/PreLogin/SignupPage";
import ForgotPasswordPage from "./pages/PreLogin/ForgotPasswordPage";
import Pricing from "./pages/PreLogin/Pricing";
import About from "./pages/PreLogin/About";
import Contact from "./pages/PreLogin/Contact";
import Docs from "./pages/PreLogin/resources/Documentation";
import Blog from "./pages/PreLogin/resources/Blog";
import Community from "./pages/PreLogin/resources/Community";
import FAQ from "./pages/PreLogin/resources/FAQ";
import Careers from "./pages/PreLogin/Careers";
import CookiesPage from "./pages/PreLogin/legal/Cookies";
import PrivacyPage from "./pages/PreLogin/legal/Privacy";
import TermsPage from "./pages/PreLogin/legal/Terms";

// Post-login pages
import DashboardPage from "./pages/PostLogin/DashboardPage";
import ProjectsPage from "./pages/PostLogin/ProjectsPage";
import ContentHub from "./pages/PostLogin/ContentHub";
import AiReadiness from "./pages/PostLogin/AiReadiness";
import SiteOptimization from "./pages/PostLogin/SiteOptimization";
import LocalSeo from "./pages/PostLogin/LocalSeo";
import SocialMedia from "./pages/PostLogin/SocialMedia";
import ContentStudio from "./pages/PostLogin/ContentStudio";
import InsightsReports from "./pages/PostLogin/InsightsReports";
import ContentPerformance from "./pages/PostLogin/InsightsReports/ContentPerformance";
import Inbox from "./pages/PostLogin/Inbox";
import ContentScheduler from "./pages/PostLogin/ContentScheduler";
import ContentCollaboration from "./pages/PostLogin/ContentCollaboration";

// Settings Pages
import SettingsPage from "./pages/PostLogin/SettingsPage";
import ProfileSettings from "./components/PostLogin/SettingsPage/ProfileForm";
import IntegrationsSettings from "./pages/PostLogin/settings/Integrations";
import LlmConfig from "./pages/PostLogin/settings/LLMConfig";
import PreferencesSettings from "./pages/PostLogin/settings/Preferences";
import LicensesSettings from "./pages/PostLogin/settings/Licenses";
import ProjectsSettings from "./pages/PostLogin/settings/Projects";
import NotesSettings from "./pages/PostLogin/settings/Notes";
import EnterpriseContact from "./pages/PostLogin/settings/EnterpriseContact";
import GdprManagement from "./pages/PostLogin/settings/GDPR";

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
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="forgot-password" element={<ForgotPasswordPage />} />
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
                <Route index element={<DashboardPage />} />
                <Route path="projects" element={<ProjectsPage />} />
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
