import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomeLayout from "./layouts/HomeLayout";
import { AuthProvider } from "./hooks/use-auth";
import { Toaster } from "./components/ui/sonner";

// Public Pages
import HomePage from "./pages/public/HomePage";
import PricingPage from "./pages/public/PricingPage";
import DemoPage from "./pages/public/DemoPage";

// Features Pages
import FeaturesOverviewPage from "./pages/public/features/FeaturesOverviewPage";
import ComparisonPage from "./pages/public/features/ComparisonPage";
import SeoAuditPage from "./pages/public/features/SeoAuditPage";
import KeywordIntelligencePage from "./pages/public/features/KeywordIntelligencePage";
import AiContentWriterPage from "./pages/public/features/AiContentWriterPage";
import InternalLinkPlannerPage from "./pages/public/features/InternalLinkPlannerPage";
import AutomationWorkflowsPage from "./pages/public/features/AutomationWorkflowsPage";
import WordpressIntegrationPage from "./pages/public/features/WordpressIntegrationPage";
import VisualSeoAuditPage from "./pages/public/features/VisualSeoAuditPage";
import BacklinkInsightsPage from "./pages/public/features/BacklinkInsightsPage";
import LocalSeoFeaturePage from "./pages/public/features/LocalSeoPage";
import SchemaMarkupPage from "./pages/public/features/SchemaMarkupPage";

// Resources Pages
import ResourcesHubPage from "./pages/public/resources/ResourcesHubPage";
import BlogListPage from "./pages/public/resources/BlogListPage";
import GuidesPage from "./pages/public/resources/GuidesPage";
import DocumentationPage from "./pages/public/resources/DocumentationPage";
import FAQPage from "./pages/public/resources/FAQPage";
import SeoGlossaryPage from "./pages/public/resources/SeoGlossaryPage";
import CommunityPage from "./pages/public/resources/CommunityPage";
import WebinarsPage from "./pages/public/resources/WebinarsPage";
import CaseStudiesPage from "./pages/public/resources/CaseStudiesPage";
import ApiDocumentationPage from "./pages/public/resources/ApiDocumentationPage";

// Company Pages
import AboutPage from "./pages/public/company/AboutPage";
import ContactPage from "./pages/public/company/ContactPage";
import CareersPage from "./pages/public/company/CareersPage";
import PartnersPage from "./pages/public/company/PartnersPage";
import PressPage from "./pages/public/company/PressPage";
import TermsOfServicePage from "./pages/public/company/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/public/company/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/public/company/CookiePolicyPage";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// Dashboard Pages
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDashboardPage from "./pages/projects/ProjectDashboardPage";
import ProjectSettingsPage from "./pages/projects/ProjectSettingsPage";
import ProjectActivityPage from "./pages/projects/ProjectActivityPage";

// Content Hub
import ContentHubPage from "./pages/content-hub/ContentHubPage";
import ContentCreatePage from "./pages/content-hub/ContentCreatePage";
import ContentLibraryPage from "./pages/content-hub/ContentLibraryPage";
import ContentEditPage from "./pages/content-hub/ContentEditPage";
import ContentRepurposePage from "./pages/content-hub/ContentRepurposePage";
import MediaLibraryPage from "./pages/content-hub/MediaLibraryPage";
import ContentSchedulerPage from "./pages/content-hub/ContentSchedulerPage";
import ContentVersionsPage from "./pages/content-hub/ContentVersionsPage";

// SEO Tools
import SiteAuditPage from "./pages/seo-tools/SiteAuditPage";
import KeywordMetricsPage from "./pages/seo-tools/KeywordMetricsPage";
import KeywordGeneratorPage from "./pages/seo-tools/KeywordGeneratorPage";
import KeywordClusterPage from "./pages/seo-tools/KeywordClusterPage";
import BacklinkAnalyzerPage from "./pages/seo-tools/BacklinkAnalyzerPage";
import CompetitorAnalysisPage from "./pages/seo-tools/CompetitorAnalysisPage";
import InternalLinksPage from "./pages/seo-tools/InternalLinksPage";
import SchemaGeneratorPage from "./pages/seo-tools/SchemaGeneratorPage";
import SitemapAuditPage from "./pages/seo-tools/SitemapAuditPage";
import RobotsTxtPage from "./pages/seo-tools/RobotsTxtPage";
import SerpInsightsPage from "./pages/seo-tools/SerpInsightsPage";
import LocalSeoPage from "./pages/seo-tools/LocalSeoPage";

// Workflow Pages
import WorkflowsPage from "./pages/workflows/WorkflowsPage";

// Reports Pages
import ReportsPage from "./pages/reports/ReportsPage";

// Inbox Pages
import InboxPage from "./pages/inbox/InboxPage";

// Settings Pages
import ProfileSettingsPage from "./pages/settings/ProfileSettingsPage";
import PreferencesSettingsPage from "./pages/settings/PreferencesSettingsPage";
import AiUsageSettingsPage from "./pages/settings/AiUsageSettingsPage";
import BillingSettingsPage from "./pages/settings/BillingSettingsPage";
import TeamManagementPage from "./pages/settings/TeamManagementPage";
import IntegrationsPage from "./pages/settings/IntegrationsPage";
import LlmConfigurationPage from "./pages/settings/LlmConfigurationPage";
import RolesPermissionsPage from "./pages/settings/RolesPermissionsPage";
import UserManagementPage from "./pages/settings/UserManagementPage";

// Error Pages
import NotFoundPage from "./pages/404/NotFoundPage";

// Add new detail page imports
import BlogPostPage from "./pages/public/resources/BlogPostPage";
import GuideDetailPage from "./pages/public/resources/GuideDetailPage";
import CaseStudyDetailPage from "./pages/public/resources/CaseStudyDetailPage";
import DocumentationDetailPage from "./pages/public/resources/DocumentationDetailPage";
import WebinarDetailPage from "./pages/public/resources/WebinarDetailPage";
import CareerDetailPage from "./pages/public/company/CareerDetailPage";

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
            <Route path="demo" element={<DemoPage />} />
            
            {/* Features Pages */}
            <Route path="features" element={<FeaturesOverviewPage />} />
            <Route path="features-overview" element={<FeaturesOverviewPage />} />
            <Route path="features/comparison" element={<ComparisonPage />} />
            <Route path="features/seo-audit" element={<SeoAuditPage />} />
            <Route path="features/keyword-intelligence" element={<KeywordIntelligencePage />} />
            <Route path="features/ai-content-writer" element={<AiContentWriterPage />} />
            <Route path="features/internal-link-planner" element={<InternalLinkPlannerPage />} />
            <Route path="features/automation-workflows" element={<AutomationWorkflowsPage />} />
            <Route path="features/wordpress-integration" element={<WordpressIntegrationPage />} />
            <Route path="features/visual-seo-audit" element={<VisualSeoAuditPage />} />
            <Route path="features/backlink-insights" element={<BacklinkInsightsPage />} />
            <Route path="features/local-seo" element={<LocalSeoFeaturePage />} />
            <Route path="features/schema-markup" element={<SchemaMarkupPage />} />
            
            {/* Resources Pages */}
            <Route path="resources/blog" element={<BlogListPage />} />
            <Route path="resources/blog/:slug" element={<BlogPostPage />} />
            <Route path="resources/guides" element={<GuidesPage />} />
            <Route path="resources/guides/:slug" element={<GuideDetailPage />} />
            <Route path="resources/documentation" element={<DocumentationPage />} />
            <Route path="resources/documentation/:category/:slug" element={<DocumentationDetailPage />} />
            <Route path="resources/api-documentation" element={<ApiDocumentationPage />} />
            <Route path="resources/faq" element={<FAQPage />} />
            <Route path="resources/seo-glossary" element={<SeoGlossaryPage />} />
            <Route path="resources/community" element={<CommunityPage />} />
            <Route path="resources/webinars" element={<WebinarsPage />} />
            <Route path="resources/webinars/:id" element={<WebinarDetailPage />} />
            <Route path="resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="resources/case-studies/:slug" element={<CaseStudyDetailPage />} />
            
            {/* Company Pages */}
            <Route path="company/about" element={<AboutPage />} />
            <Route path="company/contact" element={<ContactPage />} />
            <Route path="company/careers" element={<CareersPage />} />
            <Route path="company/careers/:id" element={<CareerDetailPage />} />
            <Route path="company/partners" element={<PartnersPage />} />
            <Route path="company/press" element={<PressPage />} />
            <Route path="company/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="company/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="company/cookie-policy" element={<CookiePolicyPage />} />
          </Route>

          {/* Authentication Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="login/reset-password" element={<ResetPasswordPage />} />
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
            <Route path="create" element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectDashboardPage />} />
            <Route path=":id/settings" element={<ProjectSettingsPage />} />
            <Route path=":id/activity" element={<ProjectActivityPage />} />
            
            {/* Project-specific SEO Tools */}
            <Route path=":id/seo-tools/site-audit" element={<SiteAuditPage />} />
            <Route path=":id/seo-tools/keyword-metrics" element={<KeywordMetricsPage />} />
            <Route path=":id/seo-tools/keyword-generator" element={<KeywordGeneratorPage />} />
            <Route path=":id/seo-tools/keyword-cluster" element={<KeywordClusterPage />} />
            <Route path=":id/seo-tools/backlinks" element={<BacklinkAnalyzerPage />} />
            <Route path=":id/seo-tools/competitors" element={<CompetitorAnalysisPage />} />
            <Route path=":id/seo-tools/internal-links" element={<InternalLinksPage />} />
            <Route path=":id/seo-tools/schema-markup" element={<SchemaGeneratorPage />} />
            <Route path=":id/seo-tools/sitemap-audit" element={<SitemapAuditPage />} />
            <Route path=":id/seo-tools/robots-txt" element={<RobotsTxtPage />} />
            <Route path=":id/seo-tools/serp-insights" element={<SerpInsightsPage />} />
            <Route path=":id/seo-tools/local-seo" element={<LocalSeoPage />} />
          </Route>

          {/* Protected Routes for Global SEO Tools */}
          <Route
            path="/seo-tools"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="site-audit" element={<SiteAuditPage />} />
            <Route path="keyword-metrics" element={<KeywordMetricsPage />} />
            <Route path="keyword-generator" element={<KeywordGeneratorPage />} />
            <Route path="keyword-cluster" element={<KeywordClusterPage />} />
            <Route path="backlinks" element={<BacklinkAnalyzerPage />} />
            <Route path="competitors" element={<CompetitorAnalysisPage />} />
            <Route path="internal-links" element={<InternalLinksPage />} />
            <Route path="schema-markup" element={<SchemaGeneratorPage />} />
            <Route path="sitemap-audit" element={<SitemapAuditPage />} />
            <Route path="robots-txt" element={<RobotsTxtPage />} />
            <Route path="serp-insights" element={<SerpInsightsPage />} />
            <Route path="local-seo" element={<LocalSeoPage />} />
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
            <Route path="edit/:id" element={<ContentEditPage />} />
            <Route path="repurpose" element={<ContentRepurposePage />} />
            <Route path="media" element={<MediaLibraryPage />} />
            <Route path="scheduler" element={<ContentSchedulerPage />} />
            <Route path="versions" element={<ContentVersionsPage />} />
            <Route path="versions/:id" element={<ContentVersionsPage />} />
          </Route>

          {/* Protected Routes for Workflows */}
          <Route
            path="/workflows"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<WorkflowsPage />} />
          </Route>

          {/* Protected Routes for Reports */}
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ReportsPage />} />
          </Route>

          {/* Protected Routes for Inbox */}
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
            <Route index element={<ProfileSettingsPage />} />
            <Route path="profile" element={<ProfileSettingsPage />} />
            <Route path="preferences" element={<PreferencesSettingsPage />} />
            <Route path="ai-usage" element={<AiUsageSettingsPage />} />
            <Route path="billing" element={<BillingSettingsPage />} />
            <Route path="team" element={<TeamManagementPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="llm" element={<LlmConfigurationPage />} />
            <Route path="roles-permissions" element={<RolesPermissionsPage />} />
            <Route path="user-management" element={<UserManagementPage />} />
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
