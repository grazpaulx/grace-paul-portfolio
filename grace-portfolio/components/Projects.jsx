"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

const categories = ["All", "Hackathon", "Academic", "Personal"];

function tagClass(category) {
  if (category === "Hackathon") return "tag tag--hackathon";
  if (category === "Academic") return "tag tag--academic";
  return "tag tag--personal";
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">03 — Projects</span>
          <h2 className="section__title">Selected builds</h2>
          <p className="section__desc">
            GitHub repositories and additional write-ups will be linked here as they're published.
          </p>
        </Reveal>

        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((project) => (
            <Reveal
              key={project.id}
              className={`project-card ${project.placeholder ? "project-card--placeholder" : ""}`}
              as="article"
            >
              <div className="project-card__top">
                <div>
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>
                </div>
                <span className={tagClass(project.category)}>{project.category}</span>
              </div>

              {project.image && (
                <div className="project-card__image">
                  <img src={project.image} alt={project.name} />
                </div>
              )}

              <div className="project-card__desc">
                {project.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>

              <a
                className="project-card__link"
                href={project.repo || "https://github.com/grazpaulx"}
                target="_blank"
                rel="noreferrer"
              >
                {project.repo ? "View repository ↗" : "Repository coming soon ↗"}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
