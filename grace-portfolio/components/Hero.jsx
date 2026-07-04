import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow">Computer Science Engineer · Kerala, India</span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title} · CGPA {profile.cgpa}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__contacts">
            <a className="hero__contact" href={`mailto:${profile.email}`}>
              ✉ {profile.email}
            </a>
            <a className="hero__contact" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              ☎ {profile.phone}
            </a>
            <a className="hero__contact" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              in/ {profile.linkedin.replace("linkedin.com/in/", "")}
            </a>
            <a className="hero__contact" href={profile.githubUrl} target="_blank" rel="noreferrer">
              ⌥ {profile.github.replace("github.com/", "")}
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="hero__photo-tag">
            <span className="led" />
            status: building
          </div>
        </div>
      </div>
    </section>
  );
}
