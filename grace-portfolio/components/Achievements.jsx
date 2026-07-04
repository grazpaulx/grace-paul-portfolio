import { achievements } from "@/lib/data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">06 — Achievements</span>
          <h2 className="section__title">Achievements & leadership</h2>
        </Reveal>

        <div className="achieve__grid">
          {achievements.map((a, i) => (
            <Reveal key={i} className="achieve-card">
              {a.image && (
                <div className="achieve-card__image">
                  <img src={a.image} alt={a.title} />
                </div>
              )}
              <div className="achieve-card__body">
                <p className="achieve-card__title">{a.title}</p>
                {a.detail && <p className="achieve-card__detail">{a.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
