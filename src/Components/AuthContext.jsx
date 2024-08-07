// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    const storedUsername = localStorage.getItem("username");

    if (storedAuthStatus === "true") {
      setIsAuthenticated(true);
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", user);
    setIsAuthenticated(true);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
