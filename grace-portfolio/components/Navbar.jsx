"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/pmvikas", label: "PM VIKAS Log" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand">
          Grace Paul <span className="navbar__brand-mark">// gp.dev</span>
        </Link>

        <button className="navbar__toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>

        <nav className={`navbar__links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="navbar__cta" href="mailto:gracepaulpottakkal3@gmail.com">
          Say hello
        </a>
      </div>
    </header>
  );
}
