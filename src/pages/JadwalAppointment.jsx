import React from "react";

const JadwalAppointment = () => {
  // Data dummy jadwal appointment
  const jadwalList = [
    {
      id: 1,
      nama: "Andi Saputra",
      dokter: "dr. Rina Amelia",
      tanggal: "2025-11-01",
      waktu: "09:30",
      status: "Sudah Dikonfirmasi",
    },
    {
      id: 2,
      nama: "Bila Huwaida",
      dokter: "dr. Andika Putra",
      tanggal: "2025-11-02",
      waktu: "10:00",
      status: "Menunggu Konfirmasi",
    },
    {
      id: 3,
      nama: "Siti Rahma",
      dokter: "dr. Rina Amelia",
      tanggal: "2025-11-02",
      waktu: "13:00",
      status: "Selesai",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Jadwal Appointment
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nama Pasien</th>
              <th className="px-4 py-2 text-left">Dokter</th>
              <th className="px-4 py-2 text-left">Tanggal</th>
              <th className="px-4 py-2 text-left">Waktu</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jadwalList.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.dokter}</td>
                <td className="px-4 py-2">{item.tanggal}</td>
                <td className="px-4 py-2">{item.waktu}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    item.status === "Sudah Dikonfirmasi"
                      ? "text-green-600"
                      : item.status === "Menunggu Konfirmasi"
                      ? "text-yellow-500"
                      : "text-gray-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JadwalAppointment;
