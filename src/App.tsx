
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
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
            {/* We'll add more routes here as we build the dashboard */}
          </Route>

          {/* Protected Routes for other sections */}
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/ai-readiness"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/content-hub"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/seo-tools"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/social-media"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
          </Route>

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
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
