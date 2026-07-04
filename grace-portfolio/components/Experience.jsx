import Link from "next/link";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">04 — Experience</span>
          <h2 className="section__title">Internships & training</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((item) => (
            <Reveal
              key={item.id}
              as="div"
              className={`timeline__item ${item.period.includes("Ongoing") ? "timeline__item--current" : ""}`}
            >
              <span className="timeline__node" />
              <span className="timeline__period">{item.period}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__org">{item.org}</p>
              {item.meta && <p className="timeline__meta">{item.meta}</p>}

              <ul className="timeline__points">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {item.image && (
                <div className="timeline__photo">
                  <img src={item.image} alt={item.org} />
                </div>
              )}

              {item.link && (
                <Link className="timeline__link" href={item.link}>
                  {item.linkLabel} →
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
