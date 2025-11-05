import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // sementara dummy login
    if (formData.username === "" || formData.password === "") {
      setError("Username dan password wajib diisi");
      return;
    }

    // contoh role login dummy
    if (formData.username === "admin") {
      localStorage.setItem("role", "admin");
      alert("Login sebagai admin berhasil!");
      // nanti diganti Navigate("/home")
    } else if (formData.username === "dokter") {
      localStorage.setItem("role", "doctor");
      alert("Login sebagai dokter berhasil!");
    } else if (formData.username === "pasien") {
      localStorage.setItem("role", "patient");
      alert("Login sebagai pasien berhasil!");
    } else {
      setError("Username tidak dikenali");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Nakita Clinic</h2>
        <p className="text-gray-500 text-center mb-6">Masuk ke akun Anda</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Masukkan password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Masuk
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Belum punya akun? <span className="text-blue-600 hover:underline cursor-pointer">Hubungi admin</span>
        </p>
      </div>
    </div>
  );
}
