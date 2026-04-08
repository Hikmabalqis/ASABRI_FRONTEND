import { createContext, useState, useContext, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentAdmin = authService.getCurrentAdmin();
    if (currentAdmin) {
      setAdmin(currentAdmin);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const demoAccounts = [
      {
        username: "admin",
        password: "admin123",
        role: "superadmin",
        name: "Administrator",
      },
      {
        username: "user",
        password: "user123",
        role: "admin",
        name: "User Demo",
      },
    ];

    const match = demoAccounts.find(
      (acc) =>
        acc.username === credentials.username &&
        acc.password === credentials.password,
    );

    if (!match) {
      const usernameExists = demoAccounts.find(
        (acc) => acc.username === credentials.username,
      );
      return {
        success: false,
        error: usernameExists ? "Password salah" : "Username tidak ditemukan",
        errorType: usernameExists ? "INVALID_PASSWORD" : "USERNAME_NOT_FOUND",
        accountDisabled: false,
      };
    }

    const demoData = {
      username: match.username,
      role: match.role,
      name: match.name,
      token: "demo-token",
    };

    localStorage.setItem("token", "demo-token");
    localStorage.setItem("admin", JSON.stringify(demoData));
    setAdmin(demoData);
    return { success: true };
  };

  const register = async (userData) => {
    return { success: false, error: "Register tidak tersedia di mode demo" };
  };

  const logout = () => {
    authService.logout();
    setAdmin(null);
  };

  const isSuperAdmin = () => admin?.role === "superadmin";
  const isAdmin = () => admin?.role === "admin" || admin?.role === "superadmin";

  const value = {
    admin,
    login,
    register,
    logout,
    isAuthenticated: !!admin,
    isSuperAdmin,
    isAdmin,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
