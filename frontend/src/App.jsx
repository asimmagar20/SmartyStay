import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import NavbarPublic from "./components/public/NavbarPublic";
import Footer from "./components/public/Footer";
import AuroraBackground from "./components/public/AuroraBackground";

import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

import RoomDetail from "./components/public/RoomDetail";

import ScrollToTop from "./components/common/ScrollToTop";

const PublicLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <AuroraBackground />
    <NavbarPublic />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <PublicLayout>
                <HomePage />
              </PublicLayout>
            }
          />
          <Route
            path="/rooms"
            element={
              <PublicLayout>
                <RoomsPage />
              </PublicLayout>
            }
          />
          <Route
            path="/rooms/:id"
            element={
              <PublicLayout>
                <RoomDetail />
              </PublicLayout>
            }
          />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <LoginPage />
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <RegisterPage />
              </PublicLayout>
            }
          />

          <Route
            path="/customer"
            element={
              <ProtectedRoute>
                <CustomerDashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
