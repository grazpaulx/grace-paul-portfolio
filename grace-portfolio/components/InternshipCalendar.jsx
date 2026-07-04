"use client";

import { useMemo, useState } from "react";
import { buildMonthGrid, WEEKDAYS, MONTH_NAMES } from "@/lib/calendarUtils";
import { programInfo } from "@/lib/internshipLog";

const todayISO = new Date().toISOString().slice(0, 10);

export default function InternshipCalendar({ entries, isAdmin, onSave, onDelete }) {
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(5); // June 2026 (0-indexed)
  const [selectedDate, setSelectedDate] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", module: "", day: "" });
  const [message, setMessage] = useState(null);
  const [saving, setSaving] = useState(false);

  const grid = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  function changeMonth(delta) {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setViewMonth(m);
    setViewYear(y);
    setSelectedDate(null);
    setEditing(false);
    setMessage(null);
  }

  function selectDate(date) {
    setSelectedDate(date);
    setEditing(false);
    setMessage(null);
    const existing = entries[date];
    setForm({
      title: existing?.title || "",
      description: existing?.description || "",
      module: existing?.module || programInfo.modules[0].name,
      day: existing?.day || ""
    });
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setMessage({ type: "error", text: "A title is required." });
      return;
    }
    setSaving(true);
    const result = await onSave({
      date: selectedDate,
      day: form.day ? Number(form.day) : null,
      title: form.title.trim(),
      description: form.description.trim(),
      module: form.module
    });
    setSaving(false);
    if (result.ok) {
      setMessage({ type: "success", text: "Activity log updated." });
      setEditing(false);
    } else {
      setMessage({ type: "error", text: result.message });
    }
  }

  async function handleDelete() {
    setSaving(true);
    const result = await onDelete(selectedDate);
    setSaving(false);
    if (result.ok) {
      setMessage({ type: "success", text: "Entry deleted." });
      setEditing(false);
      setForm({ title: "", description: "", module: "", day: "" });
    } else {
      setMessage({ type: "error", text: result.message });
    }
  }

  const selectedEntry = selectedDate ? entries[selectedDate] : null;

  return (
    <div className="calendar">
      <div className="calendar__head">
        <button className="calendar__nav-btn" onClick={() => changeMonth(-1)} aria-label="Previous month">←</button>
        <span className="calendar__month">{MONTH_NAMES[viewMonth]} {viewYear}</span>
        <button className="calendar__nav-btn" onClick={() => changeMonth(1)} aria-label="Next month">→</button>
      </div>

      <div className="calendar__grid">
        {WEEKDAYS.map((w) => (
          <div key={w} className="calendar__weekday">{w}</div>
        ))}

        {grid.map((cell, i) => {
          if (!cell) return <div key={i} className="calendar__cell empty" />;
          const entry = entries[cell.date];
          const classes = [
            "calendar__cell",
            entry ? "has-entry" : "",
            isAdmin ? "editable" : "",
            cell.date === todayISO ? "" : ""
          ].join(" ");
          return (
            <button
              key={cell.date}
              className={classes}
              onClick={() => selectDate(cell.date)}
              type="button"
            >
              <span className="calendar__date-num">{cell.day}</span>
              {entry && <span className="calendar__dot" />}
            </button>
          );
        })}
      </div>

      <div className="calendar__legend">
        <span><span className="legend-swatch legend-swatch--entry" /> Logged activity</span>
        {isAdmin && (
          <span><span className="legend-swatch legend-swatch--editable" /> Click any date to add or edit</span>
        )}
      </div>

      <div className="day-panel">
        {!selectedDate && <p className="day-panel__empty">Select a date to view its activity log.</p>}

        {selectedDate && !editing && (
          <>
            <div className="day-panel__header">
              <div>
                <span className="day-panel__date mono">
                  {selectedDate} {selectedEntry?.day ? `· Day ${selectedEntry.day}` : ""}
                </span>
                <h3 className="day-panel__title">
                  {selectedEntry ? selectedEntry.title : "No activity logged"}
                </h3>
                {selectedEntry?.module && (
                  <span className="pill day-panel__module">{selectedEntry.module}</span>
                )}
              </div>
              {isAdmin && (
                <button className="day-panel__edit-btn" onClick={() => setEditing(true)}>
                  {selectedEntry ? "Edit entry" : "Add entry"}
                </button>
              )}
            </div>
            {selectedEntry ? (
              <p className="day-panel__desc">{selectedEntry.description}</p>
            ) : (
              !isAdmin && <p className="day-panel__empty">Nothing logged for this date yet.</p>
            )}
          </>
        )}

        {selectedDate && editing && isAdmin && (
          <form className="edit-form" onSubmit={handleSave}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Interfacing DHT11 Temperature Sensor"
              />
            </div>

            <div className="edit-form__row">
              <div>
                <label htmlFor="day">Day number (optional)</label>
                <input
                  id="day"
                  type="text"
                  inputMode="numeric"
                  value={form.day}
                  onChange={(e) => setForm({ ...form, day: e.target.value.replace(/\D/g, "") })}
                  placeholder="e.g. 11"
                />
              </div>
              <div>
                <label htmlFor="module">Module</label>
                <select
                  id="module"
                  value={form.module}
                  onChange={(e) => setForm({ ...form, module: e.target.value })}
                >
                  {programInfo.modules.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="What was done on this day?"
              />
            </div>

            <div className="edit-form__actions">
              <button className="btn-primary" type="submit" disabled={saving}>
                {saving ? "Saving…" : "Save changes"}
              </button>
              <button className="btn-secondary" type="button" onClick={() => setEditing(false)}>
                Cancel
              </button>
              {selectedEntry && (
                <button className="btn-danger" type="button" onClick={handleDelete} disabled={saving}>
                  Delete
                </button>
              )}
            </div>
          </form>
        )}

        {message && (
          <div
            className={`form-message ${message.type === "success" ? "form-message--success" : "form-message--error"}`}
            style={{ marginTop: 14 }}
          >
            {message.type === "success" ? "✓ " : "✕ "}{message.text}
          </div>
        )}
      </div>
    </div>
  );
}
