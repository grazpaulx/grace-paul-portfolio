"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const AdminContext = createContext(null);

const SESSION_KEY = "gp_admin_session";

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      setIsAdmin(true);
      setPassword(stored);
    }
    setReady(true);
  }, []);

  const login = useCallback(async (candidatePassword) => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: candidatePassword })
    });
    const data = await res.json();
    if (data.ok) {
      window.sessionStorage.setItem(SESSION_KEY, candidatePassword);
      setIsAdmin(true);
      setPassword(candidatePassword);
      return { ok: true };
    }
    return { ok: false, message: data.message || "Incorrect password." };
  }, []);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setIsAdmin(false);
    setPassword(null);
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, password, ready, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
