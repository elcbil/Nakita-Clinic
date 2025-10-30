import { Home, Users, CalendarDays, FlaskConical, Pill, CreditCard } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/", icon: <Home size={22} /> },
    { name: "Data Pasien", path: "/pasien", icon: <Users size={22} /> },
    { name: "Jadwal & Appointment", path: "/jadwalappointment", icon: <CalendarDays size={22} /> },
    { name: "Hasil Lab", path: "/lab", icon: <FlaskConical size={22} /> },
    { name: "Obat", path: "/obat", icon: <Pill size={22} /> },
    { name: "Pembayaran", path: "/pembayaran", icon: <CreditCard size={22} /> },
  ];

  return (
    <div className={`bg-white shadow-md h-screen flex flex-col border-r transition-all duration-300 ${isExpanded ? "w-60" : "w-20"}`}>
      <div className="flex items-center justify-between p-4">
        <img src="/logo-klinik.png" alt="logo" className="w-10 h-10 rounded-full" />
        {isExpanded && <h1 className="text-lg font-bold text-gray-800">KLINIK NAKITA</h1>}
      </div>

      <nav className="flex-1 mt-4 space-y-2">
        {menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              location.pathname === menu.path ? "bg-blue-200 font-semibold text-blue-700" : "text-gray-600"
            }`}
          >
            {menu.icon}
            {isExpanded && <span className="text-sm">{menu.name}</span>}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-2 text-gray-500 hover:text-blue-600 border-t"
      >
        {isExpanded ? "«" : "»"}
      </button>
    </div>
  );
};

export default Navbar;
