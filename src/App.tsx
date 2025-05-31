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
import LocalSeoPage from "./pages/public/features/LocalSeoPage";
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
import CreateContentPage from "./pages/content-hub/CreateContentPage";
import ContentLibraryPage from "./pages/content-hub/ContentLibraryPage";
import ContentEditPage from "./pages/content-hub/ContentEditPage";
import ContentRepurposePage from "./pages/content-hub/ContentRepurposePage";
import MediaLibraryPage from "./pages/content-hub/MediaLibraryPage";
import ContentSchedulerPage from "./pages/content-hub/ContentSchedulerPage";
import ContentVersionsPage from "./pages/content-hub/ContentVersionsPage";

// SEO Tools
import DomainCitationScorePage from "./pages/seo-tools/DomainCitationScorePage";
import SiteAuditPage from "./pages/seo-tools/SiteAuditPage";
import VisualAuditPage from "./pages/seo-tools/VisualAuditPage";
import KeywordIntelligenceToolPage from "./pages/seo-tools/KeywordIntelligencePage";
import BacklinkInsightsToolPage from "./pages/seo-tools/BacklinkInsightsPage";
import InternalLinkingPage from "./pages/seo-tools/InternalLinkingPage";
import SchemaMetaPage from "./pages/seo-tools/SchemaMetaPage";
import SitemapAuditPage from "./pages/seo-tools/SitemapAuditPage";
import RankTrackerPage from "./pages/seo-tools/RankTrackerPage";
import CompetitorTrackerPage from "./pages/seo-tools/CompetitorTrackerPage";
import IndexingMonitorPage from "./pages/seo-tools/IndexingMonitorPage";
import BrokenLinksPage from "./pages/seo-tools/BrokenLinksPage";

// Workflow Pages
import WorkflowsPage from "./pages/workflows/WorkflowsPage";
import WorkflowExecutionPage from "./pages/workflows/WorkflowExecutionPage";
import WorkflowResultsPage from "./pages/workflows/WorkflowResultsPage";

// Reports Pages
import ReportsPage from "./pages/reports/ReportsPage";

// Settings Pages
import ProfileSettingsPage from "./pages/settings/ProfileSettingsPage";
import PreferencesSettingsPage from "./pages/settings/PreferencesSettingsPage";
import AiUsageSettingsPage from "./pages/settings/AiUsageSettingsPage";
import BillingSettingsPage from "./pages/settings/BillingSettingsPage";
import TeamManagementPage from "./pages/settings/TeamManagementPage";
import IntegrationsPage from "./pages/settings/IntegrationsPage";

// Error Pages
import NotFoundPage from "./pages/404/NotFoundPage";

// Detail page imports
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
            <Route path="features/local-seo" element={<LocalSeoPage />} />
            <Route path="features/schema-markup" element={<SchemaMarkupPage />} />
            
            {/* Resources Pages */}
            <Route path="resources" element={<ResourcesHubPage />} />
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
            <Route path=":id/seo-tools/domain-citation-score" element={<DomainCitationScorePage />} />
            <Route path=":id/seo-tools/site-audit" element={<SiteAuditPage />} />
            <Route path=":id/seo-tools/visual-audit" element={<VisualAuditPage />} />
            <Route path=":id/seo-tools/keyword-intelligence" element={<KeywordIntelligenceToolPage />} />
            <Route path=":id/seo-tools/backlinks" element={<BacklinkInsightsToolPage />} />
            <Route path=":id/seo-tools/internal-links" element={<InternalLinkingPage />} />
            <Route path=":id/seo-tools/schema-markup" element={<SchemaMetaPage />} />
            <Route path=":id/seo-tools/sitemap-audit" element={<SitemapAuditPage />} />
            <Route path=":id/seo-tools/robots-txt" element={<RobotsTxtPage />} />
            <Route path=":id/seo-tools/indexing" element={<IndexingMonitorPage />} />
            <Route path=":id/seo-tools/broken-links" element={<BrokenLinksPage />} />
            <Route path=":id/seo-tools/rank-tracker" element={<RankTrackerPage />} />
            <Route path=":id/seo-tools/competitors" element={<CompetitorTrackerPage />} />
            
            {/* Project-specific Content Hub */}
            <Route path=":id/content-hub" element={<ContentHubPage />} />
            <Route path=":id/content-hub/create" element={<CreateContentPage />} />
            <Route path=":id/content-hub/library" element={<ContentLibraryPage />} />
            <Route path=":id/content-hub/edit/:articleId" element={<ContentEditPage />} />
            <Route path=":id/content-hub/repurpose" element={<ContentRepurposePage />} />
            <Route path=":id/content-hub/media" element={<MediaLibraryPage />} />
            <Route path=":id/content-hub/scheduler" element={<ContentSchedulerPage />} />
            <Route path=":id/content-hub/versions/:articleId" element={<ContentVersionsPage />} />
            
            {/* Project-specific Workflows */}
            <Route path=":id/workflows" element={<WorkflowsPage />} />
            <Route path=":id/workflows/:workflowName" element={<WorkflowExecutionPage />} />
            <Route path=":id/workflows/results/:runId" element={<WorkflowResultsPage />} />
            
            {/* Project-specific Reports */}
            <Route path=":id/reports" element={<ReportsPage />} />
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
