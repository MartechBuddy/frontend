
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./hooks/use-auth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<div className="container mx-auto p-8">Home Page Content</div>} />
          </Route>

          {/* Authentication Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<div className="container mx-auto p-8">Login Page</div>} />
            <Route path="signup" element={<div className="container mx-auto p-8">Signup Page</div>} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<div className="container mx-auto p-8">Dashboard Content</div>} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<div className="container mx-auto p-8 text-center">404 - Page Not Found</div>} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
