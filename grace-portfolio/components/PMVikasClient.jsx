"use client";

import { useEffect, useState, useCallback } from "react";
import ProgressTracker from "./ProgressTracker";
import InternshipCalendar from "./InternshipCalendar";
import { useAdmin } from "@/lib/AdminContext";

export default function PMVikasClient() {
  const { isAdmin, password } = useAdmin();
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/calendar", { cache: "no-store" });
      const json = await res.json();
      if (json.ok) {
        setEntries(json.data);
        setLoadError(false);
      } else {
        setLoadError(true);
      }
    } catch (err) {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function saveEntry(entry) {
    try {
      const res = await fetch("/api/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password || ""
        },
        body: JSON.stringify(entry)
      });
      const json = await res.json();
      if (json.ok) {
        setEntries(json.data);
        return { ok: true };
      }
      return { ok: false, message: json.message || "Could not save." };
    } catch (err) {
      return { ok: false, message: "Network error. Please try again." };
    }
  }

  async function deleteEntry(date) {
    try {
      const res = await fetch(`/api/calendar?date=${encodeURIComponent(date)}`, {
        method: "DELETE",
        headers: { "x-admin-password": password || "" }
      });
      const json = await res.json();
      if (json.ok) {
        setEntries(json.data);
        return { ok: true };
      }
      return { ok: false, message: json.message || "Could not delete." };
    } catch (err) {
      return { ok: false, message: "Network error. Please try again." };
    }
  }

  return (
    <section id="tracker" className="section section--tint">
      <div className="container">
        <div className="section__head">
          <span className="section__index">Activity Log</span>
          <h2 className="section__title">Internship calendar</h2>
          <p className="section__desc">
            Daily activity logs from the PM VIKAS IoT internship.
            {isAdmin
              ? " Admin mode is on — click any date to add or edit its log."
              : " Log in as admin above to edit entries."}
          </p>
        </div>

        {loading && <p className="day-panel__empty">Loading calendar…</p>}
        {loadError && (
          <p className="form-message form-message--error">
            Could not load the calendar right now. Please refresh the page.
          </p>
        )}

        {!loading && !loadError && (
          <>
            <div style={{ marginBottom: 24 }}>
              <ProgressTracker entries={entries} />
            </div>
            <InternshipCalendar
              entries={entries || {}}
              isAdmin={isAdmin}
              onSave={saveEntry}
              onDelete={deleteEntry}
            />
          </>
        )}
      </div>
    </section>
  );
}
