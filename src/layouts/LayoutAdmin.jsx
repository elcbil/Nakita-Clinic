import React from "react";
import Navbar from "../components/Navbar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Halaman Konten */}
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto scroll-smooth">{children}</div>
    </div>
  );
};

export default LayoutAdmin;
