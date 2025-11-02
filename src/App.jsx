import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/admin/Home";
import DataPasien from "./pages/admin/DataPasien";
import JadwalAppointment from "./pages/admin/JadwalAppointment";
import DetailPasien from "./pages/admin/DetailPasien";
import LoginAdmin from "./pages/LoginAdmin";

export default function App() {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex h-screen">
      {/* Navbar hanya muncul kalau bukan halaman login */}
      {!isLoginPage && <Navbar />}

      {/* Konten utama */}
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto scroll-smooth">
        <Routes>
          {/* Halaman login */}
          <Route path="/login" element={<LoginAdmin />} />

          {/* Home */}
          <Route path="/" element={isAdminLoggedIn ? <Home /> : <Navigate to="/login" replace />} />

          {/* Data Pasien */}
          <Route path="/pasien" element={isAdminLoggedIn ? <DataPasien /> : <Navigate to="/login" replace />} />

          {/* Detail Pasien */}
          <Route path="/data-pasien/:id" element={isAdminLoggedIn ? <DetailPasien /> : <Navigate to="/login" replace />} />

          {/* Jadwal */}
          <Route path="/jadwalappointment" element={isAdminLoggedIn ? <JadwalAppointment /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}
