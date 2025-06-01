
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomeLayout from "./layouts/HomeLayout";
import { AuthProvider } from "./hooks/use-auth";
import { Toaster } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

// Public Pages
import HomePage from "./pages/public/HomePage";
import PricingPage from "./pages/public/PricingPage";

// Features Pages  
import FeaturesOverviewPage from "./pages/public/features/FeaturesOverviewPage";
import ComparisonPage from "./pages/public/features/ComparisonPage";
import SeoAuditPage from "./pages/public/features/SeoAuditPage";
import KeywordIntelligenceFeaturePage from "./pages/public/features/KeywordIntelligencePage";
import AiContentWriterPage from "./pages/public/features/AiContentWriterPage";
import InternalLinkPlannerPage from "./pages/public/features/InternalLinkPlannerPage";
import AutomationWorkflowsPage from "./pages/public/features/AutomationWorkflowsPage";
import WordpressIntegrationPage from "./pages/public/features/WordpressIntegrationPage";
import VisualSeoAuditPage from "./pages/public/features/VisualSeoAuditPage";
import BacklinkInsightsFeaturePage from "./pages/public/features/BacklinkInsightsPage";
import LocalSeoFeaturePage from "./pages/public/features/LocalSeoPage";
import SchemaMarkupPage from "./pages/public/features/SchemaMarkupPage";
import SeoToolsPage from "./pages/public/features/SeoToolsPage";

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
import LegalBasePage from "./pages/public/company/LegalBasePage";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// MVP Dashboard Pages
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDashboardPage from "./pages/projects/ProjectDashboardPage";
import ProjectSettingsPage from "./pages/projects/ProjectSettingsPage";
import ProjectActivityPage from "./pages/projects/ProjectActivityPage";

// MVP Content Hub
import ContentHubPage from "./pages/content-hub/ContentHubPage";
import CreateContentPage from "./pages/content-hub/CreateContentPage";
import ContentLibraryPage from "./pages/content-hub/ContentLibraryPage";
import ContentEditPage from "./pages/content-hub/ContentEditPage";
import ContentRepurposePage from "./pages/content-hub/ContentRepurposePage";
import MediaLibraryPage from "./pages/content-hub/MediaLibraryPage";
import ContentSchedulerPage from "./pages/content-hub/ContentSchedulerPage";
import ContentVersionsPage from "./pages/content-hub/ContentVersionsPage";

// MVP SEO Tools
import DomainCitationScorePage from "./pages/seo-tools/DomainCitationScorePage";
import SiteAuditPage from "./pages/seo-tools/SiteAuditPage";
import VisualAuditPage from "./pages/seo-tools/VisualAuditPage";
import KeywordIntelligencePage from "./pages/seo-tools/KeywordIntelligencePage";
import BacklinkInsightsPage from "./pages/seo-tools/BacklinkInsightsPage";
import InternalLinkingPage from "./pages/seo-tools/InternalLinkingPage";
import SitemapAuditPage from "./pages/seo-tools/SitemapAuditPage";
import RobotsTxtPage from "./pages/seo-tools/RobotsTxtPage";
import LocalSeoPage from "./pages/seo-tools/LocalSeoPage";
import OpportunitiesPage from "./pages/seo-tools/OpportunitiesPage";

// Additional SEO Tools (legacy)
import KeywordMetricsPage from "./pages/seo-tools/KeywordMetricsPage";
import KeywordGeneratorPage from "./pages/seo-tools/KeywordGeneratorPage";
import BacklinkAnalyzerPage from "./pages/seo-tools/BacklinkAnalyzerPage";
import CompetitorAnalysisPage from "./pages/seo-tools/CompetitorAnalysisPage";
import SchemaGeneratorPage from "./pages/seo-tools/SchemaGeneratorPage";

// MVP Other Pages
import WorkflowsPage from "./pages/workflows/WorkflowsPage";
import ReportsPage from "./pages/reports/ReportsPage";
import InboxPage from "./pages/inbox/InboxPage";

// MVP Settings Pages
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <Toaster />
          <Router>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomePage />} />
              </Route>

              {/* Public Routes */}
              <Route path="/" element={<PublicLayout />}>
                <Route path="pricing" element={<PricingPage />} />
                
                {/* Features Routes */}
                <Route path="features" element={<FeaturesOverviewPage />} />
                <Route path="features/seo-tools" element={<SeoToolsPage />} />
                <Route path="features/keyword-intelligence" element={<KeywordIntelligenceFeaturePage />} />
                <Route path="features/backlink-insights" element={<BacklinkInsightsFeaturePage />} />
                <Route path="features/internal-link-planner" element={<InternalLinkPlannerPage />} />
                <Route path="features/visual-seo-audit" element={<VisualSeoAuditPage />} />
                <Route path="features/local-seo" element={<LocalSeoFeaturePage />} />
                <Route path="features/schema-markup" element={<SchemaMarkupPage />} />
                <Route path="features/seo-audit" element={<SeoAuditPage />} />
                <Route path="features/ai-content-writer" element={<AiContentWriterPage />} />
                <Route path="features/automation-workflows" element={<AutomationWorkflowsPage />} />
                <Route path="features/wordpress-integration" element={<WordpressIntegrationPage />} />
                <Route path="features/comparison" element={<ComparisonPage />} />

                {/* Resources Routes */}
                <Route path="resources" element={<ResourcesHubPage />} />
                <Route path="blog" element={<BlogListPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="guides" element={<GuidesPage />} />
                <Route path="guides/:slug" element={<GuideDetailPage />} />
                <Route path="case-studies" element={<CaseStudiesPage />} />
                <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
                <Route path="webinars" element={<WebinarsPage />} />
                <Route path="webinars/:slug" element={<WebinarDetailPage />} />
                <Route path="documentation" element={<DocumentationPage />} />
                <Route path="documentation/:slug" element={<DocumentationDetailPage />} />
                <Route path="api-docs" element={<ApiDocumentationPage />} />
                <Route path="community" element={<CommunityPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="seo-glossary" element={<SeoGlossaryPage />} />

                {/* Company Routes */}
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="careers" element={<CareersPage />} />
                <Route path="careers/:id" element={<CareerDetailPage />} />
                <Route path="partners" element={<PartnersPage />} />
                <Route path="press" element={<PressPage />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
                <Route path="terms" element={<TermsOfServicePage />} />
                <Route path="cookies" element={<CookiePolicyPage />} />
                <Route path="legal" element={
                  <LegalBasePage title="Legal Information" lastUpdated="December 2024">
                    <p>This page contains legal information and policies for MartechEngine.ai platform.</p>
                  </LegalBasePage>
                } />
              </Route>

              {/* Authentication Routes */}
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="forgot-password" element={<ForgotPasswordPage />} />
                <Route path="reset-password" element={<ResetPasswordPage />} />
              </Route>

              {/* Protected MVP Dashboard Routes */}
              <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                {/* Main Dashboard */}
                <Route path="dashboard" element={<DashboardPage />} />
                
                {/* Projects */}
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:id" element={<ProjectDashboardPage />} />
                <Route path="projects/:id/activity" element={<ProjectActivityPage />} />
                <Route path="projects/:id/settings" element={<ProjectSettingsPage />} />
                
                {/* SEO Tools */}
                <Route path="projects/:id/seo-tools/domain-citation-score" element={<DomainCitationScorePage />} />
                <Route path="projects/:id/seo-tools/site-audit" element={<SiteAuditPage />} />
                <Route path="projects/:id/seo-tools/visual-audit" element={<VisualAuditPage />} />
                <Route path="projects/:id/seo-tools/keyword-intelligence" element={<KeywordIntelligencePage />} />
                <Route path="projects/:id/seo-tools/backlinks" element={<BacklinkInsightsPage />} />
                <Route path="projects/:id/seo-tools/internal-links" element={<InternalLinkingPage />} />
                <Route path="projects/:id/seo-tools/sitemap-audit" element={<SitemapAuditPage />} />
                <Route path="projects/:id/seo-tools/robots-txt" element={<RobotsTxtPage />} />
                <Route path="projects/:id/seo-tools/local-seo" element={<LocalSeoPage />} />
                <Route path="projects/:id/seo-tools/opportunities" element={<OpportunitiesPage />} />

                {/* Content Hub */}
                <Route path="content-hub" element={<ContentHubPage />} />
                <Route path="content-hub/create" element={<CreateContentPage />} />
                <Route path="content-hub/library" element={<ContentLibraryPage />} />
                <Route path="content-hub/edit/:id" element={<ContentEditPage />} />
                <Route path="content-hub/versions/:id" element={<ContentVersionsPage />} />
                <Route path="content-hub/repurpose" element={<ContentRepurposePage />} />
                <Route path="content-hub/scheduler" element={<ContentSchedulerPage />} />
                <Route path="content-hub/media" element={<MediaLibraryPage />} />

                {/* Reports */}
                <Route path="reports" element={<ReportsPage />} />
                
                {/* Workflows */}
                <Route path="workflows" element={<WorkflowsPage />} />
                
                {/* Inbox */}
                <Route path="inbox" element={<InboxPage />} />

                {/* Settings */}
                <Route path="settings" element={<ProfileSettingsPage />} />
                <Route path="settings/profile" element={<ProfileSettingsPage />} />
                <Route path="settings/billing" element={<BillingSettingsPage />} />
                <Route path="settings/ai-usage" element={<AiUsageSettingsPage />} />
                <Route path="settings/preferences" element={<PreferencesSettingsPage />} />
                <Route path="settings/team" element={<TeamManagementPage />} />
                <Route path="settings/integrations" element={<IntegrationsPage />} />
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
