import API from "./api";

const dummyBoxes = [
  {
    _id: "box-1",
    nomorBox: "B001",
    lokerId: { _id: "loker-1", nomorLoker: "A1" },
    jumlahDokumen: 12,
  },
  {
    _id: "box-2",
    nomorBox: "B002",
    lokerId: { _id: "loker-1", nomorLoker: "A1" },
    jumlahDokumen: 40,
  },
  {
    _id: "box-3",
    nomorBox: "B003",
    lokerId: { _id: "loker-2", nomorLoker: "A2" },
    jumlahDokumen: 0,
  },
  {
    _id: "box-4",
    nomorBox: "B004",
    lokerId: { _id: "loker-2", nomorLoker: "A2" },
    jumlahDokumen: 25,
  },
  {
    _id: "box-5",
    nomorBox: "B005",
    lokerId: { _id: "loker-4", nomorLoker: "B2" },
    jumlahDokumen: 38,
  },
];

const boxService = {
  getAllBoxes: async (lokerId = null) => {
    if (lokerId) return dummyBoxes.filter((b) => b.lokerId?._id === lokerId);
    return dummyBoxes;
  },
  getBoxById: async (id) => dummyBoxes.find((b) => b._id === id),
  createBox: async (data) => ({ ...data, _id: "box-new" }),
  updateBox: async (id, data) => ({ ...data, _id: id }),
  deleteBox: async (id) => ({ success: true }),
  exportBox: async (id) => {
    const box = dummyBoxes.find((b) => b._id === id);
    return { box, dokumen: dummyDokumen.filter((d) => d.boxId?._id === id) };
  },
};

export default boxService;
