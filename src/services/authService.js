// DEMO MODE - tidak ada API call

const authService = {
  register: async (userData) => {
    // Demo: tidak dipakai
    return userData;
  },

  login: async (credentials) => {
    // Logic login ada di AuthContext, ini tidak dipakai langsung
    return credentials;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  },

  getMe: async () => {
    const admin = localStorage.getItem("admin");
    return admin ? JSON.parse(admin) : null;
  },

  getCurrentAdmin: () => {
    const admin = localStorage.getItem("admin");
    return admin ? JSON.parse(admin) : null;
  },

  isLoggedIn: () => {
    return !!localStorage.getItem("token");
  },
};

export default authService;
