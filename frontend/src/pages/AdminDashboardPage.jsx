import React from "react";
import AdminDashboard from "../components/admin/AdminDashboard";
import AuroraBackground from "../components/public/AuroraBackground";

const AdminDashboardPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
