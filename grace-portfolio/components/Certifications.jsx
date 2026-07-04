import { certifications } from "@/lib/data";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">07 — Certifications</span>
          <h2 className="section__title">Certifications & training</h2>
          <p className="section__desc">
            Certificate files can be attached here as they're uploaded.
          </p>
        </Reveal>

        <div className="cert__list">
          {certifications.map((c, i) => (
            <Reveal key={i} className="cert-row">
              <span className="cert-row__issuer">{c.issuer}</span>
              <span className="cert-row__title">{c.title}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
