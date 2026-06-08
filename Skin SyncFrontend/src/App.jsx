import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import SkinTestPage from "./pages/SkinTestPage";
import ProductLibraryPage from "./pages/ProductLibraryPage";
import RoutineBuilderPage from "./pages/RoutineBuilderPage";
import JournalPage from "./pages/JournalPage";
import ReviewPage from "./pages/ReviewPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SkinTypePage from "./pages/SkinTypePage";
import RecommendationPage from "./pages/RecommendationPage";
import TipsPage from "./pages/TipsPage";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>

          <Route path="/" element={<DashboardPage />} />

          <Route path="/skin-test" element={<SkinTestPage />} />

          <Route path="/skin-type" element={<SkinTypePage />} />

          <Route path="/recommendations" element={<RecommendationPage />} />

          <Route path="/products" element={<ProductLibraryPage />} />

          <Route path="/routine" element={<RoutineBuilderPage />} />

          <Route path="/journal" element={<JournalPage />} />

          <Route path="/reviews" element={<ReviewPage />} />

          <Route path="/tips" element={<TipsPage />} />

        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </Router>
  );
}