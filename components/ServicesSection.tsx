"use client";

import { useEffect, useRef, useState } from "react";
import { servicesData } from "../data/agencyData";
import { ArrowUpRight } from "./icons";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0);
  const serviceRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let serviceObserver: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (serviceObserver) {
        serviceObserver.disconnect();
        serviceObserver = null;
      }

      if (window.innerWidth <= 1080) return;

      serviceObserver = new IntersectionObserver(
        (entries) => {
          if (window.innerWidth <= 1080) return;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute("data-service-index"));
              if (!isNaN(index) && index >= 0 && index < servicesData.length) {
                setActiveService(index);
              }
            }
          });
        },
        { rootMargin: "-25% 0px -40% 0px", threshold: 0.15 },
      );

      serviceRowRefs.current.forEach((el) => {
        if (el && serviceObserver) serviceObserver.observe(el);
      });
    };

    setupObserver();

    const handleResize = () => {
      setupObserver();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (serviceObserver) serviceObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const safeActiveIndex = activeService >= 0 ? activeService : 0;
  const activeServiceData = servicesData[safeActiveIndex] || servicesData[0];

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-ambient-glow" aria-hidden="true" />

      <div className="services-container">
        {/* Section Introduction */}
        <header className="services-header">
          <div className="services-eyebrow reveal-on-scroll">
            <span className="status-dot">
              <i />
            </span>
            <span>04 / WHAT WE DO</span>
            <span className="eyebrow-rule" />
            <span className="services-pill-badge">Expertise &amp; Capabilities</span>
          </div>

          <div className="services-header-grid">
            <h2 id="services-title" className="services-heading">
              <span className="services-mask">
                <span className="services-line reveal-on-scroll">We make brands</span>
              </span>
              <span className="services-mask accent-mask">
                <span className="services-matter reveal-on-scroll delay-1">Matter.</span>
              </span>
            </h2>

            <div className="services-intro-aside reveal-on-scroll">
              <p className="services-intro-text">
                From bold identities to high-performing digital experiences, we combine creativity and strategy to help ambitious brands stand apart.
              </p>
              <div className="services-disciplines-tag">
                <span>6 CORE DISCIPLINES</span>
                <i />
                <span>END-TO-END IMPACT</span>
              </div>
            </div>
          </div>
        </header>

        {/* Interactive Services Two-Column Layout */}
        <div className="services-body-grid">
          {/* Left Column: Interactive Service Rows */}
          <div className="services-list-column" role="list">
            {servicesData.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  key={service.number}
                  ref={(el) => {
                    serviceRowRefs.current[index] = el;
                  }}
                  data-service-index={index}
                  className={`service-row ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 1080) {
                      setActiveService(index);
                    }
                  }}
                  onFocus={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 1080) {
                      setActiveService(index);
                    }
                  }}
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth <= 1080) {
                      setActiveService((prev) => (prev === index ? -1 : index));
                    } else {
                      setActiveService(index);
                    }
                  }}
                  role="listitem"
                  tabIndex={0}
                  aria-expanded={isActive}
                >
                  <div className="service-row-highlight" aria-hidden="true" />

                  <div className="service-row-main">
                    <div className="service-row-left">
                      <span className="service-number">{service.number}</span>
                      <h3 className="service-name">{service.name}</h3>
                    </div>

                    <div className="service-row-right">
                      <span className="service-arrow-badge" aria-hidden="true">
                        <ArrowUpRight className="arrow-icon" />
                      </span>
                    </div>
                  </div>

                  {/* Smoothly expanding description on active state */}
                  <div className={`service-desc-wrapper ${isActive ? "is-open" : ""}`}>
                    <p className="service-description">{service.description}</p>

                    {/* Mobile compact preview image */}
                    <div className="service-mobile-preview" aria-hidden="true">
                      <img src={service.image} alt={service.alt} loading="lazy" />
                      <span className="service-mobile-tag">{service.tagline}</span>
                    </div>
                  </div>

                  <div className="service-separator" />
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Visual Preview */}
          <aside className="services-preview-column" aria-label="Discipline preview">
            <div className="services-sticky-panel">
              <div className="services-preview-glass-wrapper">
                {/* Image Stack with smooth crossfade */}
                {servicesData.map((service, index) => (
                  <div
                    key={service.number}
                    className={`services-preview-image-layer ${
                      safeActiveIndex === index ? "is-active" : ""
                    }`}
                    aria-hidden={safeActiveIndex !== index}
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="services-preview-img"
                      loading="lazy"
                    />
                    <div className="services-preview-gradient" />
                    <div className="services-preview-grain" />
                  </div>
                ))}

                {/* Glass Top Header Tag */}
                <div className="services-preview-top-tag">
                  <span className="preview-dot">
                    <i />
                  </span>
                  <span className="preview-label">04 / DISCIPLINE</span>
                  <span className="preview-counter">
                    {activeServiceData.number} / 06
                  </span>
                </div>

                {/* Glass Bottom Caption Card */}
                <div className="services-preview-caption-card">
                  <div className="caption-meta">
                    <span className="caption-tagline">
                      {activeServiceData.tagline}
                    </span>
                    <h4 className="caption-title">
                      {activeServiceData.name}
                    </h4>
                  </div>
                  <div className="caption-indicator">
                    <span className="pulse-ring" />
                    <span className="active-dot" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
