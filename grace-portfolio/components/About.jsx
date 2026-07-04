import { profile, additional } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">01 — About</span>
          <h2 className="section__title">A closer look</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text">
            <p>{profile.summary}</p>
            <p>
              Beyond coursework, she leads within the IEEE Computer Society at Christ College of
              Engineering and volunteers with NSS, while regularly competing at national and
              international hackathons across AI, VR, and mobile app tracks.
            </p>

            <div className="about__lists">
              <div>
                <span className="about__list-title">Core Competencies</span>
                <div className="pill-row">
                  {additional.competencies.map((c) => (
                    <span key={c} className="pill">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="about__list-title">Hobbies</span>
                <div className="pill-row">
                  {additional.hobbies.map((h) => (
                    <span key={h} className="pill pill--copper">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="about__facts">
            <div className="about__fact">
              <span className="about__fact-label">Location</span>
              <span className="about__fact-value">{profile.location}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">CGPA</span>
              <span className="about__fact-value">{profile.cgpa} / 10</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Languages</span>
              <span className="about__fact-value">{additional.languages.join(" · ")}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Currently</span>
              <span className="about__fact-value">IoT Intern @ IIIT-Kottayam (PM VIKAS)</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
