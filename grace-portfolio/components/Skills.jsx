import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">02 — Skills</span>
          <h2 className="section__title">Technical toolkit</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group) => (
            <Reveal key={group.group} className="skill-card">
              <span className="skill-card__group">{group.group}</span>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
