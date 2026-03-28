
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveData, loadData, clearData } from './persistence';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = loadData('ar_session');
    if (savedUser) setUser(savedUser);
    setLoading(false);
  }, []);

  const login = (credentials) => {
    const adminEmail = 'malikawaisbabar143@gmail.com';
    const is_admin = credentials.email === adminEmail && credentials.pass === 'admin123';

    const userData = { email: credentials.email, isAdmin: is_admin };
    saveData('ar_session', userData);
    setUser(userData);
    return userData;
  };

  const logout = () => {
    clearData('ar_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
