"use client";

import { footerLinks } from "../data/agencyData";
import { ArrowUpIcon, ArrowUpRight } from "./icons";

export default function FooterSection() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section" id="footer" aria-label="RAWRAJ footer">
      <div className="footer-ambient-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Top Info & Navigation Row */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand-mark" aria-label="RAWRAJ home">
              RAW<span>RAJ</span>
              <i className="brand-dot" />
            </a>

            <p className="footer-descriptor">
              Independent creative thinking. Digital experiences. Measurable ambition.
            </p>

            <div className="footer-cta-card">
              <span className="cta-cue">START A PROJECT</span>
              <a href="#contact" className="footer-talk-link">
                <span>Let&apos;s talk about your next move</span>
                <ArrowUpRight className="talk-arrow" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="footer-nav-grid">
            {/* Col 1: Explore */}
            <div className="footer-col">
              <span className="col-heading">EXPLORE</span>
              <ul className="footer-link-list">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Services */}
            <div className="footer-col">
              <span className="col-heading">SERVICES</span>
              <ul className="footer-link-list">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Connect */}
            <div className="footer-col">
              <span className="col-heading">CONNECT</span>
              <ul className="footer-link-list">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="footer-nav-link flex-link"
                    >
                      <span>{link.label}</span>
                      {link.external && <ArrowUpRight className="external-arrow" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Monumental Edge-to-Edge Typography Banner */}
        <div className="footer-monumental-banner" aria-hidden="true">
          <div className="monumental-text-wrapper">
            <span className="monumental-wordmark">RAWRAJ</span>
            <span className="monumental-tagline">Made to stand out.</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright" suppressHydrationWarning>
            &copy; 2026 RAWRAJ. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#top" className="legal-link">
              Privacy Policy
            </a>
            <span className="legal-separator">&bull;</span>
            <a href="#top" className="legal-link">
              Terms &amp; Conditions
            </a>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUpIcon className="top-arrow" />
          </button>
        </div>
      </div>
    </footer>
  );
}
