"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { portfolioProjects } from "../data/agencyData";
import { ArrowUpRight } from "./icons";

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = document.querySelectorAll<HTMLElement>(".portfolio-item");

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((el) => {
        el.classList.add("is-visible");
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "120px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setCursorPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <section
      className="portfolio-section"
      id="our-work"
      aria-labelledby="portfolio-title"
      onMouseMove={handleMouseMove}
    >
      <div className="portfolio-ambient-glow" aria-hidden="true" />

      {/* Dynamic Cursor Follower Badge */}
      <div
        className={`portfolio-cursor-pill ${hoveredProject ? "is-active" : ""}`}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      >
        <span>VIEW PROJECT</span>
        <ArrowUpRight className="cursor-arrow" />
      </div>

      <div className="portfolio-container">
        {/* Section Introduction */}
        <header className="portfolio-header">
          <div className="portfolio-eyebrow reveal-on-scroll">
            <span className="status-dot">
              <i />
            </span>
            <span>03 / SELECTED WORK</span>
            <span className="eyebrow-rule" />
            <span className="concept-badge">Concept Archive</span>
          </div>

          <div className="portfolio-header-grid">
            <h2 id="portfolio-title" className="portfolio-heading">
              <span className="portfolio-mask">
                <span className="portfolio-line reveal-on-scroll">Work that</span>
              </span>
              <span className="portfolio-mask">
                <span className="portfolio-line reveal-on-scroll delay-1">makes an</span>
              </span>
              <span className="portfolio-mask accent-mask">
                <span className="portfolio-impact reveal-on-scroll delay-2">Impact.</span>
              </span>
            </h2>

            <div className="portfolio-intro-aside reveal-on-scroll">
              <p className="portfolio-intro-text">
                Bold thinking. Distinctive experiences. Creative work built to make brands impossible to ignore.
              </p>
              <div className="portfolio-scroll-cue">
                <span className="cue-dot" />
                <span>SCROLL TO EXPLORE ↓</span>
              </div>
            </div>
          </div>
        </header>

        {/* Project Gallery */}
        <div className="portfolio-gallery">
          {portfolioProjects.map((project) => (
            <article
              key={project.number}
              className={`portfolio-item ${project.widthClass} ${project.revealType} reveal-on-scroll`}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href="#contact"
                className="portfolio-link"
                aria-label={`Explore concept project ${project.title} — ${project.category}`}
              >
                <div className={`portfolio-image-wrapper ${project.aspectRatioClass}`}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="portfolio-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="portfolio-image-overlay" aria-hidden="true" />
                  <div className="portfolio-image-grain" aria-hidden="true" />

                  {/* Floating Glassmorphic Tags */}
                  <div className="portfolio-glass-badges">
                    <span className="portfolio-tag-pill">
                      <span className="tag-pulse" />
                      {project.category}
                    </span>
                    <span className="portfolio-tag-pill glass-num">
                      {project.number} / 04
                    </span>
                  </div>
                </div>

                <div className="portfolio-meta">
                  <div className="portfolio-meta-top">
                    <div className="portfolio-title-group">
                      <span className="portfolio-num-small">{project.number}</span>
                      <h3 className="portfolio-title">
                        {project.title}
                        <span className="portfolio-title-underline" />
                      </h3>
                    </div>

                    <div className="portfolio-meta-right">
                      <span className="portfolio-category-label">{project.category}</span>
                      <span className="portfolio-arrow-btn" aria-hidden="true">
                        <ArrowUpRight className="arrow-icon" />
                      </span>
                    </div>
                  </div>

                  <div className="portfolio-divider" />

                  <div className="portfolio-meta-bottom">
                    <p className="portfolio-desc">{project.description}</p>
                    <span className="portfolio-year">{project.year}</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Section Ending / Integrated Portfolio CTA */}
        <div className="portfolio-cta-section reveal-on-scroll">
          <div className="portfolio-cta-ambient" aria-hidden="true" />
          <div className="portfolio-cta-grain" aria-hidden="true" />

          <div className="portfolio-cta-inner">
            <div className="portfolio-cta-eyebrow">
              <span className="status-dot">
                <i />
              </span>
              <span>Next Collaboration</span>
            </div>

            <h3 className="portfolio-cta-title">
              <span>GOT SOMETHING</span>
              <span>IN MIND?</span>
            </h3>

            <span className="portfolio-cta-script">Let&apos;s create.</span>

            <p className="portfolio-cta-desc">
              Have an ambitious idea, a strategic rebrand, or a digital experience that needs to leave a lasting mark? Let&apos;s talk about what&apos;s possible.
            </p>

            <a className="portfolio-cta-btn" href="#contact">
              <span>START A PROJECT</span>
              <span className="cta-arrow-badge">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
