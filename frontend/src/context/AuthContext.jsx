import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api";

// Create the context
const AuthContext = createContext(null);

// Simple hook to use it
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // { id, name, email, ... } from /auth/me/
  const [loading, setLoading] = useState(true);

  // On first load, check if we already have a token and fetch user
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me/")
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        // Token invalid/expired
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // Login with email + password
  const login = async (email, password) => {
    const res = await api.post("/auth/login/", { email, password });

    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    const me = await api.get("/auth/me/");
    setUser(me.data);
  };

  // Signup (we won't auto-login, just create account)
  const signup = async ({ name, email, mobile_number, address, password }) => {
    await api.post("/auth/register/", {
      name,
      email,
      mobile_number,
      address,
      password,
    });
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* wait for initial load so Navbar doesn't flicker */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
