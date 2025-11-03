import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarPasien from "./components/NavbarPasien";
import NavbarDokter from "./components/NavbarDokter";

// Admin Page
import HomeAdmin from "./pages/admin/Home";
import DataPasien from "./pages/admin/DataPasien";
import JadwalAppointment from "./pages/admin/JadwalAppointment";
import DetailPasien from "./pages/admin/DetailPasien";
import LoginAdmin from "./pages/LoginAdmin";
import ProfilAdmin from "./pages/admin/ProfilAdmin";

// Patient Page
import DashboardPasien from "./pages/patient/DashboardPasien";
import JadwalPraktikPasien from "./pages/patient/JadwalPraktik";
import DetailJadwal from "./pages/patient/DetailJadwal";
import RiwayatMedis from "./pages/patient/RiwayatMedis";
import HasilLabPasien from "./pages/patient/HasilLabPasien";
import ObatPasien from "./pages/patient/ObatPasien";
import ProfilPasien from "./pages/patient/ProfilPasien";

// Doctor Page
import DashboardDokter from "./pages/doctor/DashboardDokter";
import JanjiTemu from "./pages/doctor/JanjiTemu";
import DataPasien2 from "./pages/doctor/DataPasien2";
import RekamMedis from "./pages/doctor/RekamMedis";
import TulisResep from "./pages/doctor/TulisResep";
import JadwalPraktek from "./pages/doctor/JadwalPraktek";

export default function App() {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isPatientPage = location.pathname.startsWith("/patient");
  const isDoctorPage = location.pathname.startsWith("/doctor");

  return (
    <div className="flex h-screen">
      {/* ===== NAVBAR TAMPIL SESUAI ROLE ===== */}
      {!isLoginPage && <>{isPatientPage ? <NavbarPasien /> : isDoctorPage ? <NavbarDokter /> : <NavbarAdmin />}</>}

      {/* ===== KONTEN UTAMA ===== */}
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto scroll-smooth">
        <Routes>
          {/* ===== LOGIN ===== */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginAdmin />} />

          {/* ===== ADMIN ===== */}
          <Route path="/home" element={isAdminLoggedIn ? <HomeAdmin /> : <Navigate to="/login" replace />} />
          <Route path="/pasien" element={isAdminLoggedIn ? <DataPasien /> : <Navigate to="/login" replace />} />
          <Route path="/datapasien/:id" element={isAdminLoggedIn ? <DetailPasien /> : <Navigate to="/login" replace />} />
          <Route path="/jadwalappointment" element={isAdminLoggedIn ? <JadwalAppointment /> : <Navigate to="/login" replace />} />
          <Route path="/profiladmin" element={isAdminLoggedIn ? <ProfilAdmin /> : <Navigate to="/login" replace />} />

          {/* ===== PASIEN ===== */}
          <Route path="/patient/dashboardpasien" element={<DashboardPasien />} />
          <Route path="/patient/jadwal" element={<JadwalPraktikPasien />} />
          <Route path="/patient/detail-jadwal/:id" element={<DetailJadwal />} />
          <Route path="/patient/riwayat" element={<RiwayatMedis />} />
          <Route path="/patient/lab" element={<HasilLabPasien />} />
          <Route path="/patient/obat" element={<ObatPasien />} />
          <Route path="/patient/profilpasien" element={<ProfilPasien />} />

          {/* ===== DOKTER ===== */}
          <Route path="/doctor/dashboarddokter" element={<DashboardDokter />} />
          <Route path="/doctor/janjitemu" element={<JanjiTemu />} />
          <Route path="/doctor/datapasien2" element={<DataPasien2 />} />
          <Route path="/doctor/rekammedis" element={<RekamMedis />} />
          <Route path="/doctor/tulisresep" element={<TulisResep />} />
          <Route path="/doctor/jadwalpraktek" element={<JadwalPraktek />} />

          
        </Routes>
      </div>
    </div>
  );
}
