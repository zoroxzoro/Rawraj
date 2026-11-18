"use client";

import { processSteps } from "../data/agencyData";
import { ArrowUpRight, ProcessIcon } from "./icons";

export default function ProcessSection() {
  return (
    <section className="method-section" id="process" aria-labelledby="method-title">
      <div className="method-grid">
        <div className="method-left">
          <header className="method-intro">
            <div className="method-eyebrow reveal-on-scroll">
              <span className="status-dot">
                <i />
              </span>
              <span>02 / The Rawraj Method</span>
            </div>

            <h2 id="method-title">
              <span className="method-line reveal-on-scroll">We don&apos;t follow</span>
              <span className="method-line reveal-on-scroll">the formula.</span>
              <span className="method-line reveal-on-scroll">We create the</span>
              <span className="method-impact reveal-on-scroll">Impact.</span>
            </h2>

            <p className="method-summary reveal-on-scroll">
              From the first idea to the final result, we combine strategy, creativity, and
              performance to build brands that refuse to be ignored.
            </p>
          </header>

          <div className="process-stack">
            {processSteps.map((step, index) => (
              <article
                className={`method-card ${index === processSteps.length - 1 ? "scale-method-card" : ""}`}
                key={step.number}
              >
                {index === processSteps.length - 1 && (
                  <>
                    <div className="scale-glow" aria-hidden="true" />
                    <div className="method-grain" aria-hidden="true" />
                  </>
                )}

                <div className="method-card-top">
                  <span className="method-number">{step.number}</span>
                  <div className="method-icon">
                    <ProcessIcon icon={step.icon} />
                  </div>
                </div>

                <div className="method-card-bottom">
                  <h3>{step.title}</h3>
                  <div className="method-divider" />
                  <p>{step.description}</p>
                  {index === processSteps.length - 1 && (
                    <a className="method-cta" href="#contact">
                      <span>Let&apos;s build something</span>
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="method-visual-column" aria-label="Creative ambition">
          <figure className="method-visual reveal-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1609493344059-e5aaa233e62e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"
              alt="Silhouette of a person standing in monumental golden architectural light"
            />
            <div className="visual-grade" aria-hidden="true" />
            <div className="visual-grain" aria-hidden="true" />
            <div className="visual-index">
              <span>RAW / 02</span>
              <span>Ambition in motion</span>
            </div>
            <figcaption>
              <span>Creative growth</span>
              <i />
              <span>Built to move forward</span>
            </figcaption>
            <a
              className="photo-credit"
              href="https://unsplash.com/@krutarthshah14"
              target="_blank"
              rel="noreferrer"
            >
              Photo / Krutarth Shah
            </a>
          </figure>
        </aside>
      </div>
    </section>
  );
}
