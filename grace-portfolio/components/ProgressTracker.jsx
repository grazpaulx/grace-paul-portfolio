import { programInfo } from "@/lib/internshipLog";

const TOTAL_PLANNED_DAYS = 33; // approx. working days across 1.5 months

export default function ProgressTracker({ entries }) {
  const daysLogged = Object.keys(entries || {}).length;
  const percent = Math.min(100, Math.round((daysLogged / TOTAL_PLANNED_DAYS) * 100));

  const touchedModules = new Set(Object.values(entries || {}).map((e) => e.module).filter(Boolean));

  return (
    <div className="progress">
      <div className="progress__top">
        <span className="progress__label mono">Internship progress</span>
        <span className="progress__count mono">{daysLogged} days logged · {percent}%</span>
      </div>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${percent}%` }} />
      </div>
      <div className="progress__steps">
        {programInfo.modules.map((m) => (
          <span
            key={m.name}
            className={`progress__step ${touchedModules.has(m.name) ? "done" : ""}`}
          >
            {touchedModules.has(m.name) ? "✓ " : "· "}
            {m.name}
          </span>
        ))}
      </div>
    </div>
  );
}
