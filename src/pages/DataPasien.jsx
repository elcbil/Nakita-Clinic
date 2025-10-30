import React from "react";
import { Edit, Trash2, Plus } from "lucide-react";

const DataPasien = () => {
  const pasien = [
    { id: 1, nama: "Siti Rahma", umur: 29, gender: "Perempuan", alamat: "Medan" },
    { id: 2, nama: "Andi Pratama", umur: 34, gender: "Laki-laki", alamat: "Binjai" },
    { id: 3, nama: "Rina Marlina", umur: 22, gender: "Perempuan", alamat: "Lubuk Pakam" },
    { id: 4, nama: "Fajar Hidayat", umur: 40, gender: "Laki-laki", alamat: "Tanjung Morawa" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Data Pasien</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-sm">
          <Plus size={18} /> Tambah Pasien
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="py-3 px-5">ID</th>
              <th className="py-3 px-5">Nama</th>
              <th className="py-3 px-5">Umur</th>
              <th className="py-3 px-5">Jenis Kelamin</th>
              <th className="py-3 px-5">Alamat</th>
              <th className="py-3 px-5 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pasien.map((p, i) => (
              <tr
                key={p.id}
                className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`}
              >
                <td className="py-3 px-5">{p.id}</td>
                <td className="py-3 px-5 font-medium text-gray-800">{p.nama}</td>
                <td className="py-3 px-5">{p.umur}</td>
                <td className="py-3 px-5">{p.gender}</td>
                <td className="py-3 px-5">{p.alamat}</td>
                <td className="py-3 px-5 flex justify-center gap-2">
                  <button className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPasien;
