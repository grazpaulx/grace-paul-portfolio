import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand">Grace Paul</p>
            <p className="footer__tag">
              B.Tech Computer Science Engineering · Christ College of Engineering, Irinjalakuda
            </p>
          </div>
          <div className="footer__links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Grace Paul.</span>
          <span>Built with React &amp; Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
