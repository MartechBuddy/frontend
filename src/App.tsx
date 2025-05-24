
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import HomePage from "./pages/public/HomePage";
import PricingPage from "./pages/public/PricingPage";
import AiReadinessFreeCheckPage from "./pages/public/AiReadinessFreeCheckPage";
import FeaturesOverviewPage from "./pages/public/features/FeaturesOverviewPage";
import AiReadinessFeaturePage from "./pages/public/features/AiReadinessFeaturePage";
import ContentAutomationPage from "./pages/public/features/ContentAutomationPage";
import SeoToolsPage from "./pages/public/features/SeoToolsPage";
import SocialMediaPage from "./pages/public/features/SocialMediaPage";
import BlogListPage from "./pages/public/resources/BlogListPage";
import FAQPage from "./pages/public/resources/FAQPage";
import AboutPage from "./pages/public/company/AboutPage";
import ContactPage from "./pages/public/company/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import { Toaster } from "./components/ui/sonner";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomeLayout from "./layouts/HomeLayout";
import { AuthProvider } from "./hooks/use-auth";

// Import all dashboard pages
import ProjectsPage from "./pages/projects/ProjectsPage";
import AiReadinessPage from "./pages/ai-readiness/AiReadinessPage";
import ContentHubPage from "./pages/content-hub/ContentHubPage";
import ContentCreatePage from "./pages/content-hub/ContentCreatePage";
import ContentLibraryPage from "./pages/content-hub/ContentLibraryPage";
import ContentKeywordsPage from "./pages/content-hub/ContentKeywordsPage";
import ContentRepurposePage from "./pages/content-hub/ContentRepurposePage";
import ContentSchedulerPage from "./pages/content-hub/ContentSchedulerPage";
import CampaignsPage from "./pages/content-hub/CampaignsPage";
import MediaLibraryPage from "./pages/content-hub/MediaLibraryPage";
import MediaUploadPage from "./pages/content-hub/MediaUploadPage";
import MediaGeneratePage from "./pages/content-hub/MediaGeneratePage";
import KeywordMetricsPage from "./pages/seo-tools/KeywordMetricsPage";
import KeywordGeneratorPage from "./pages/seo-tools/KeywordGeneratorPage";
import KeywordPlannerPage from "./pages/seo-tools/KeywordPlannerPage";
import TrafficKeywordsPage from "./pages/seo-tools/TrafficKeywordsPage";
import ContentOptimizerPage from "./pages/seo-tools/ContentOptimizerPage";
import BacklinkAnalyzerPage from "./pages/seo-tools/BacklinkAnalyzerPage";
import SchemaGeneratorPage from "./pages/seo-tools/SchemaGeneratorPage";
import SiteAuditPage from "./pages/seo-tools/SiteAuditPage";
import CompetitorAnalysisPage from "./pages/seo-tools/CompetitorAnalysisPage";
import SocialAccountsPage from "./pages/social-media/SocialAccountsPage";
import SocialPostsPage from "./pages/social-media/SocialPostsPage";
import SocialSchedulerPage from "./pages/social-media/SocialSchedulerPage";
import SocialAnalyticsPage from "./pages/social-media/SocialAnalyticsPage";
import InboxPage from "./pages/inbox/InboxPage";
import ProfileSettingsPage from "./pages/settings/ProfileSettingsPage";
import BillingSettingsPage from "./pages/settings/BillingSettingsPage";
import AiUsageSettingsPage from "./pages/settings/AiUsageSettingsPage";
import PreferencesSettingsPage from "./pages/settings/PreferencesSettingsPage";
import TeamManagementPage from "./pages/settings/TeamManagementPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Home Page with special layout */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            {/* Basic Pages */}
            <Route path="pricing" element={<PricingPage />} />
            <Route path="ai-readiness/free-check" element={<AiReadinessFreeCheckPage />} />
            
            {/* Features Pages */}
            <Route path="features-overview" element={<FeaturesOverviewPage />} />
            <Route path="features/ai-readiness" element={<AiReadinessFeaturePage />} />
            <Route path="features/content-automation" element={<ContentAutomationPage />} />
            <Route path="features/seo-tools" element={<SeoToolsPage />} />
            <Route path="features/social-media" element={<SocialMediaPage />} />
            
            {/* Resources Pages */}
            <Route path="resources/blog" element={<BlogListPage />} />
            <Route path="resources/faq" element={<FAQPage />} />
            
            {/* Company Pages */}
            <Route path="company/about" element={<AboutPage />} />
            <Route path="company/contact" element={<ContactPage />} />
          </Route>

          {/* Authentication Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          {/* Protected Routes for Projects */}
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProjectsPage />} />
          </Route>

          {/* Protected Routes for AI Readiness */}
          <Route
            path="/ai-readiness"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AiReadinessPage />} />
          </Route>

          {/* Protected Routes for Content Hub */}
          <Route
            path="/content-hub"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ContentHubPage />} />
            <Route path="create" element={<ContentCreatePage />} />
            <Route path="library" element={<ContentLibraryPage />} />
            <Route path="keywords" element={<ContentKeywordsPage />} />
            <Route path="repurpose" element={<ContentRepurposePage />} />
            <Route path="scheduler" element={<ContentSchedulerPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="media/library" element={<MediaLibraryPage />} />
            <Route path="media/upload" element={<MediaUploadPage />} />
            <Route path="media/generate" element={<MediaGeneratePage />} />
          </Route>

          {/* Protected Routes for SEO Tools */}
          <Route
            path="/seo-tools"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="keyword-metrics" element={<KeywordMetricsPage />} />
            <Route path="keyword-generator" element={<KeywordGeneratorPage />} />
            <Route path="keyword-planner" element={<KeywordPlannerPage />} />
            <Route path="traffic-keywords" element={<TrafficKeywordsPage />} />
            <Route path="content-optimizer" element={<ContentOptimizerPage />} />
            <Route path="backlinks" element={<BacklinkAnalyzerPage />} />
            <Route path="schema" element={<SchemaGeneratorPage />} />
            <Route path="site-audit" element={<SiteAuditPage />} />
            <Route path="competitors" element={<CompetitorAnalysisPage />} />
          </Route>

          {/* Protected Routes for Social Media */}
          <Route
            path="/social-media"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="accounts" element={<SocialAccountsPage />} />
            <Route path="posts" element={<SocialPostsPage />} />
            <Route path="scheduler" element={<SocialSchedulerPage />} />
            <Route path="analytics" element={<SocialAnalyticsPage />} />
          </Route>

          {/* Protected Route for Inbox */}
          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<InboxPage />} />
          </Route>

          {/* Protected Routes for Settings */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SettingsLayout />}>
              <Route index element={<ProfileSettingsPage />} />
              <Route path="profile" element={<ProfileSettingsPage />} />
              <Route path="billing" element={<BillingSettingsPage />} />
              <Route path="ai-usage" element={<AiUsageSettingsPage />} />
              <Route path="preferences" element={<PreferencesSettingsPage />} />
              <Route path="team-management" element={<TeamManagementPage />} />
            </Route>
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
