import API from "./api";

const dummyLokers = [
  { _id: "loker-1", nomorLoker: "A1", jumlahBox: 3 },
  { _id: "loker-2", nomorLoker: "A2", jumlahBox: 5 },
  { _id: "loker-3", nomorLoker: "B1", jumlahBox: 0 },
  { _id: "loker-4", nomorLoker: "B2", jumlahBox: 50 },
];

const lokerService = {
  getAllLoker: async () => dummyLokers,
  getLokerById: async (id) => dummyLokers.find((l) => l._id === id),
  createLoker: async (data) => ({ ...data, _id: "loker-new" }),
  updateLoker: async (id, data) => ({ ...data, _id: id }),
  deleteLoker: async (id) => ({ success: true }),
  getBoxesByLoker: async (id) =>
    dummyBoxes.filter((b) => b.lokerId?._id === id),
};

export default lokerService;
