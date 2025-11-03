import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Contoh login dummy
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/home"); // arahkan ke halaman utama admin (dashboard)
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login Admin</h2>

        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
