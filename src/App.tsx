
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomeLayout from "./layouts/HomeLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Pre-Login Pages
import Home from "./pages/PreLogin/Home";
import Login from "./pages/PreLogin/Login";
import Signup from "./pages/PreLogin/Signup";
import ForgotPassword from "./pages/PreLogin/ForgotPassword";
import About from "./pages/PreLogin/About";
import Contact from "./pages/PreLogin/Contact";
import Pricing from "./pages/PreLogin/Pricing";
import Privacy from "./pages/PreLogin/legal/Privacy";
import Terms from "./pages/PreLogin/legal/Terms";
import Cookies from "./pages/PreLogin/legal/Cookies";
import Documentation from "./pages/PreLogin/resources/Documentation";
import Blog from "./pages/PreLogin/resources/Blog";
import Community from "./pages/PreLogin/resources/Community";
import FAQ from "./pages/PreLogin/resources/FAQ";

// Post-Login Pages
import Dashboard from "./pages/PostLogin/Dashboard";
import Projects from "./pages/PostLogin/Projects";
import ContentHub from "./pages/PostLogin/ContentHub";
import ContentScheduler from "./pages/PostLogin/ContentScheduler";
import AiReadiness from "./pages/PostLogin/AiReadiness";
import Inbox from "./pages/PostLogin/Inbox";
import ContentStudio from "./pages/PostLogin/ContentStudio";
import SiteOptimization from "./pages/PostLogin/SiteOptimization";
import SocialMedia from "./pages/PostLogin/SocialMedia";
import InsightsReports from "./pages/PostLogin/InsightsReports";
import ContentPerformance from "./pages/PostLogin/InsightsReports/ContentPerformance";
import LocalSeo from "./pages/PostLogin/LocalSeo";
import ContentCollaboration from "./pages/PostLogin/ContentCollaboration";

// Settings Pages
import SettingsPage from "./pages/PostLogin/SettingsPage";
import Profile from "./pages/PostLogin/settings/Profile";
import Preferences from "./pages/PostLogin/settings/Preferences";
import Integrations from "./pages/PostLogin/settings/Integrations";
import LLMConfig from "./pages/PostLogin/settings/LLMConfig";
import Billing from "./pages/PostLogin/settings/Billing";
import Licenses from "./pages/PostLogin/settings/Licenses";
import GDPR from "./pages/PostLogin/settings/GDPR";
import Notes from "./pages/PostLogin/settings/Notes";
import Projects_Settings from "./pages/PostLogin/settings/Projects";
import RolesPermissions from "./pages/PostLogin/settings/RolesPermissions";
import UserManagement from "./pages/PostLogin/settings/UserManagement";

// Not Found
import NotFound from "./pages/NotFound";

import "./App.css";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pre-Login Routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="blog" element={<Blog />} />
          <Route path="community" element={<Community />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Post-Login Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="content-hub" element={<ContentHub />} />
          <Route path="content-hub/scheduler" element={<ContentScheduler />} />
          <Route path="ai-readiness" element={<AiReadiness />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="content-studio" element={<ContentStudio />} />
          <Route path="site-optimization" element={<SiteOptimization />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="insights-reports" element={<InsightsReports />} />
          <Route path="insights-reports/content-performance" element={<ContentPerformance />} />
          <Route path="local-seo" element={<LocalSeo />} />
          <Route path="content-collaboration" element={<ContentCollaboration />} />
        </Route>

        {/* Settings Routes - Now within the DashboardLayout */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SettingsLayout />
              </DashboardLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<SettingsPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="llm" element={<LLMConfig />} />
          <Route path="billing" element={<Billing />} />
          <Route path="licenses" element={<Licenses />} />
          <Route path="gdpr" element={<GDPR />} />
          <Route path="notes" element={<Notes />} />
          <Route path="projects" element={<Projects_Settings />} />
          <Route path="roles-permissions" element={<RolesPermissions />} />
          <Route path="user-management" element={<UserManagement />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
