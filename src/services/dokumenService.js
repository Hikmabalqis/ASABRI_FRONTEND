import API from "./api";

const dummyDokumen = [
  {
    _id: "dok-1",
    nrp: "1234567",
    ktpa: "KTP-001",
    nomorPensiun: "P-20230001",
    namaPengaju: "Budi Santoso",
    nama: "Siti Rahayu",
    jenisDokumen: "SK Pensiun",
    tanggalSuratPemrosesan: "2023-03-15",
    createdAt: "2023-03-16T08:00:00Z",
    boxId: { _id: "box-1", nomorBox: "B001" },
    statusPeminjaman: "Tersedia",
    peminjam: null,
    isDeleted: false,
  },
  {
    _id: "dok-2",
    nrp: "2345678",
    ktpa: "KTP-002",
    nomorPensiun: "P-20230002",
    namaPengaju: "Andi Pratama",
    nama: "Dewi Lestari",
    jenisDokumen: "Kartu Peserta",
    tanggalSuratPemrosesan: "2023-05-10",
    createdAt: "2023-05-11T09:00:00Z",
    boxId: { _id: "box-1", nomorBox: "B001" },
    statusPeminjaman: "Dipinjam",
    peminjam: { nama: "Admin Demo", tanggalPinjam: "2024-01-10T10:00:00Z" },
    isDeleted: false,
  },
  {
    _id: "dok-3",
    nrp: "3456789",
    ktpa: "KTP-003",
    nomorPensiun: "P-20230003",
    namaPengaju: "Rini Wulandari",
    nama: "Agus Setiawan",
    jenisDokumen: "SK Pensiun",
    tanggalSuratPemrosesan: "2022-11-20",
    createdAt: "2022-11-21T08:30:00Z",
    boxId: { _id: "box-4", nomorBox: "B004" },
    statusPeminjaman: "Tersedia",
    peminjam: null,
    isDeleted: false,
  },
  {
    _id: "dok-4",
    nrp: "4567890",
    ktpa: "KTP-004",
    nomorPensiun: "P-20220004",
    namaPengaju: "Hendra Kusuma",
    nama: "Yuni Astuti",
    jenisDokumen: "Surat Keterangan",
    tanggalSuratPemrosesan: "2022-07-05",
    createdAt: "2022-07-06T07:00:00Z",
    boxId: { _id: "box-5", nomorBox: "B005" },
    statusPeminjaman: "Tersedia",
    peminjam: null,
    isDeleted: false,
  },
  {
    _id: "dok-5",
    nrp: "5678901",
    ktpa: "KTP-005",
    nomorPensiun: "P-20210005",
    namaPengaju: "Mega Pertiwi",
    nama: "Doni Firmansyah",
    jenisDokumen: "Kartu Peserta",
    tanggalSuratPemrosesan: "2021-09-12",
    createdAt: "2021-09-13T10:15:00Z",
    boxId: { _id: "box-2", nomorBox: "B002" },
    statusPeminjaman: "Tersedia",
    peminjam: null,
    isDeleted: true,
    deletedAt: "2023-12-01T00:00:00Z",
  },
];

const dokumenService = {
  getAllDokumen: async (params = {}) => {
    let data = [...dummyDokumen];
    if (!params.includeDeleted) data = data.filter((d) => !d.isDeleted);
    if (params.search) {
      const q = params.search.toLowerCase();
      data = data.filter(
        (d) =>
          d.nama?.toLowerCase().includes(q) ||
          d.namaPengaju?.toLowerCase().includes(q) ||
          d.nomorPensiun?.toLowerCase().includes(q) ||
          d.ktpa?.toLowerCase().includes(q) ||
          d.jenisDokumen?.toLowerCase().includes(q),
      );
    }
    return data;
  },
  getDokumenById: async (id) => dummyDokumen.find((d) => d._id === id),
  createDokumen: async (data) => ({ ...data, _id: "dok-new" }),
  updateDokumen: async (id, data) => ({ ...data, _id: id }),
  deleteDokumen: async (id) => ({ success: true }),
  checkDuplicate: async (data) => ({ isDuplicate: false }),
  updatePeminjaman: async (id, data) => ({ success: true }),
  getDokumenByBox: async (boxId) =>
    dummyDokumen.filter((d) => d.boxId?._id === boxId),
};

export default dokumenService;
