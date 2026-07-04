"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/AdminContext";

export default function LoginBar() {
  const { isAdmin, ready, login, logout } = useAdmin();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!ready) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!password) return;
    setSubmitting(true);
    setError("");
    const result = await login(password);
    setSubmitting(false);
    if (!result.ok) {
      setError(result.message || "Incorrect password.");
      return;
    }
    setPassword("");
  }

  return (
    <div className="admin-bar">
      <div className="admin-bar__inner">
        {isAdmin ? (
          <>
            <span className="admin-bar__status">
              <span className="admin-bar__dot" />
              Admin Active
            </span>
            <button className="admin-bar__logout" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <form className="admin-bar__form" onSubmit={handleSubmit}>
            {error && <span className="admin-bar__error">{error}</span>}
            <input
              type="password"
              className="admin-bar__input"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button className="admin-bar__btn" type="submit" disabled={submitting}>
              {submitting ? "Checking…" : "Log in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
