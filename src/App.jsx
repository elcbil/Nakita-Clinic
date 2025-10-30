import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DataPasien from "./pages/DataPasien";
import JadwalAppointment from "./pages/JadwalAppointment";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Halaman Konten */}
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto scroll-smooth">
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Home />} />

          {/* Halaman data pasien */}
          <Route path="/pasien" element={<DataPasien />} />

          {/* Halaman jadwal appointment */}
          <Route
            path="/jadwalappointment"
            element={<JadwalAppointment />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
