import { programInfo } from "@/lib/internshipLog";
import Reveal from "./Reveal";

export default function PMVikasIntro() {
  return (
    <>
      <section className="pv-hero">
        <div className="container">
          <Reveal>
            <span className="pv-hero__badge">
              <span className="led" /> Ongoing · {programInfo.program}
            </span>
            <h1 className="pv-hero__title">{programInfo.title}</h1>
            <p className="pv-hero__sub">
              {programInfo.host} hosts this offline IoT internship under the {programInfo.program},
              a national skilling initiative. {programInfo.objective}
            </p>

            <div className="pv-hero__facts">
              <div className="pv-fact">
                <span className="pv-fact__label">Host Institute</span>
                <span className="pv-fact__value">IIIT-Kottayam</span>
              </div>
              <div className="pv-fact">
                <span className="pv-fact__label">Mode</span>
                <span className="pv-fact__value">{programInfo.mode}</span>
              </div>
              <div className="pv-fact">
                <span className="pv-fact__label">Duration</span>
                <span className="pv-fact__value">{programInfo.duration}</span>
              </div>
              <div className="pv-fact">
                <span className="pv-fact__label">Domain</span>
                <span className="pv-fact__value">{programInfo.domain}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="section__index">Modules</span>
            <h2 className="section__title">Training curriculum</h2>
          </Reveal>

          <div className="modules__grid">
            {programInfo.modules.map((m, i) => (
              <Reveal key={m.name} className="module-card">
                <span className="module-card__num mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="module-card__name">{m.name}</h3>
                <p className="module-card__detail">{m.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
