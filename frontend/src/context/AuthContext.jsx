import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me/")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/auth/login/", { email, password });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    const me = await api.get("/auth/me/");
    setUser(me.data);
  };

  const signup = async ({ name, email, mobile_number, address, password }) => {
    await api.post("/auth/register/", {
      name,
      email,
      mobile_number,
      address,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  // ⭐ NEW: update profile
const updateProfile = async (data) => {
  const res = await api.patch("/auth/me/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  setUser(res.data);
};


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,     // ⭐ export it
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
