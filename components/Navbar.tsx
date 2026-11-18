"use client";

import { useEffect, useState } from "react";
import { navItems } from "../data/agencyData";
import { ArrowUpRight } from "./icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="RAWRAJ home">
        RAW<span>RAJ</span>
        <i />
      </a>

      <div className="nav-links" aria-label="Main menu">
        {navItems.map((item, index) => (
          <a
            className={index === 0 ? "active" : ""}
            href={index === 0 ? "#top" : `#${item.toLowerCase().replace(" ", "-")}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </div>

      <a className="nav-cta" href="#contact">
        <span>Let&apos;s Talk</span>
        <ArrowUpRight />
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
        {navItems.map((item, index) => (
          <a
            href={index === 0 ? "#top" : `#${item.toLowerCase().replace(" ", "-")}`}
            key={item}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {item}
          </a>
        ))}
        <a className="mobile-talk" href="#contact" onClick={() => setMenuOpen(false)}>
          <span>Let&apos;s Talk</span>
          <ArrowUpRight />
        </a>
      </div>
    </nav>
  );
}
