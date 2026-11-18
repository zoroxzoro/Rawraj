"use client";

import { useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "./icons";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const bounds = heroRef.current.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroRef.current.style.setProperty("--pointer-x", `${x * 18}px`);
    heroRef.current.style.setProperty("--pointer-y", `${y * 18}px`);
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={handlePointerMove}
      aria-labelledby="hero-title"
    >
      <div className="atmosphere" aria-hidden="true">
        <div className="ambient ambient-gold" />
        <div className="ambient ambient-lavender" />
        <div className="noise" />
        <div className="glass-object glass-disc">
          <div />
        </div>
        <div className="glass-object glass-slab" />
        <div className="glass-object glass-orb" />
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="status-dot">
            <i />
          </span>
          <span>Independent Creative &amp; Growth Agency</span>
          <span className="eyebrow-rule" />
          <span className="location">Worldwide / 2025</span>
        </div>

        <h1 id="hero-title">
          <span className="headline-mask">
            <span className="headline-line">We don&apos;t just</span>
          </span>
          <span className="headline-mask">
            <span className="headline-line delay-1">build brands.</span>
          </span>
          <span className="headline-mask">
            <span className="headline-line delay-2">We make them</span>
          </span>
          <span className="headline-mask accent-mask">
            <span className="headline-line headline-accent">Unforgettable.</span>
          </span>
        </h1>

        <div className="hero-support">
          <p>
            We combine bold ideas, creative storytelling, and performance-driven marketing to turn
            ambitious businesses into brands people remember.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#contact">
              <span>Let&apos;s Grow Your Brand</span>
              <span className="button-arrow">
                <ArrowUpRight />
              </span>
            </a>
            <a className="secondary-cta" href="#our-work">
              <span>Explore Our Work</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <a className="scroll-cue" href="#process">
            <span className="scroll-track">
              <i />
            </span>
            <span>Scroll to explore</span>
          </a>
          <div className="disciplines">
            <span>Strategy</span>
            <i />
            <span>Creative</span>
            <i />
            <span>Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
