// contexts/UserContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Membuat context untuk userdata
const UserContext = createContext();

// Membuat provider untuk menyimpan dan memberikan akses ke userdata
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Menyimpan state user
  const [loading, setLoading] = useState(true); // Untuk menunggu proses load

  // Memeriksa apakah ada data user yang tersimpan di localStorage (misalnya token atau informasi pengguna)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Mengambil userdata dari localStorage
    if (storedUser) {
      setUser(storedUser); // Jika ada, set ke state user
    }
    setLoading(false); // Setelah pengecekan selesai, set loading ke false
  }, []);

  // Fungsi untuk login, menyimpan data user ke state dan localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Menyimpan data ke localStorage
  };

  // Fungsi untuk logout, menghapus data user dari state dan localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Menghapus data dari localStorage
  };

  return <UserContext.Provider value={{ user, login, logout, loading }}>{children}</UserContext.Provider>;
};

// Hook untuk mengakses userdata dan fungsi login/logout
export const useUser = () => useContext(UserContext);
