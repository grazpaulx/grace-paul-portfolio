import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">05 — Education</span>
          <h2 className="section__title">Academic background</h2>
        </Reveal>

        <div className="edu__grid">
          {education.map((edu) => (
            <Reveal key={edu.id} className="edu-card">
              <div>
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <p className="edu-card__school">{edu.school}</p>
                <p className="edu-card__detail">{edu.detail}</p>
              </div>
              <span className="edu-card__period">{edu.period}</span>

              {edu.points.length > 0 && (
                <div className="edu-card__points">
                  {edu.points.map((p) => (
                    <span key={p} className="pill">{p}</span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
