"use client";

import { useState } from "react";
import { serviceOptions, budgetOptions, socialLinks } from "../data/agencyData";
import { ArrowUpRight, CloseIcon, CopyIcon, CheckIcon } from "./icons";

interface ContactSectionProps {
  selectedPlan: string | null;
  onClearPlan: () => void;
}

export default function ContactSection({ selectedPlan, onClearPlan }: ContactSectionProps) {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [message, setMessage] = useState("");

  // UI state
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  };

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText("hello@rawraj.com");
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }

    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setErrorMsg("Please provide a valid business email address.");
      return;
    }

    setSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setBrand("");
    setSelectedServices([]);
    setSelectedBudget("");
    setMessage("");
    setErrorMsg(null);
    setSubmitted(false);
    onClearPlan();
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-ambient-glow" aria-hidden="true" />
      <div className="contact-grain" aria-hidden="true" />

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header reveal-on-scroll">
          <div className="contact-eyebrow">
            <span className="eyebrow-dot" />
            <span>06 / LET&apos;S CONNECT</span>
          </div>

          <div className="contact-title-wrapper">
            <h2 id="contact-title" className="contact-heading">
              HAVE A PROJECT IN MIND?
              <span className="contact-heading-serif">Let&apos;s make it happen.</span>
            </h2>
          </div>
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="contact-layout">
          {/* Left Column: Direct Info & Editorial */}
          <div className="contact-info-col reveal-on-scroll">
            <p className="contact-lead-statement">
              Whether you&apos;re starting from scratch, redefining your category, or scaling to the
              next level — we&apos;re ready to build something remarkable together.
            </p>

            <div className="contact-availability-card">
              <div className="availability-dot-wrapper">
                <span className="availability-pulse-ring" />
                <span className="availability-dot" />
              </div>
              <div className="availability-text">
                <span className="availability-status">OPEN FOR SELECT PROJECTS</span>
                <span className="availability-quarter">Q1 & Q2 2026 ENGAGEMENTS</span>
              </div>
            </div>

            <div className="contact-details-grid">
              {/* Email Block */}
              <div className="detail-card">
                <span className="detail-label">DIRECT INQUIRIES</span>
                <div className="detail-email-row">
                  <a href="mailto:hello@rawraj.com" className="detail-email-link">
                    hello@rawraj.com
                  </a>
                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy agency email address"
                  >
                    {copiedEmail ? <CheckIcon className="copy-icon" /> : <CopyIcon className="copy-icon" />}
                    <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                  </button>
                </div>
              </div>

              {/* Location Block */}
              <div className="detail-card">
                <span className="detail-label">LOCATION & STUDIOS</span>
                <p className="detail-value">New Delhi / Mumbai, India</p>
                <span className="detail-sub">Remote partnerships worldwide</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-socials-wrapper">
              <span className="socials-label">FIND US ACROSS CHANNELS</span>
              <div className="socials-list">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <div className="social-pill-info">
                      <span className="social-name">{s.name}</span>
                      <span className="social-handle">{s.handle}</span>
                    </div>
                    <ArrowUpRight className="social-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="contact-form-col reveal-on-scroll">
            <div className="contact-form-card">
              {/* Pre-selected Plan Banner */}
              {selectedPlan && (
                <div className="selected-plan-banner">
                  <div className="plan-banner-left">
                    <span className="plan-banner-label">SELECTED PLAN</span>
                    <span className="plan-banner-name">{selectedPlan}</span>
                  </div>
                  <button
                    type="button"
                    className="plan-remove-btn"
                    onClick={onClearPlan}
                    aria-label={`Remove selected ${selectedPlan} plan`}
                  >
                    <CloseIcon className="remove-icon" />
                    <span>REMOVE</span>
                  </button>
                </div>
              )}

              {submitted ? (
                /* Success Screen */
                <div className="form-success-state">
                  <div className="success-icon-badge">
                    <CheckIcon />
                  </div>
                  <h3 className="success-title">INQUIRY RECEIVED.</h3>
                  <p className="success-message">
                    Thank you, <strong className="text-white">{name}</strong>. We&apos;ve received
                    your project brief and our partner team will review it and reply within 24 hours.
                  </p>
                  {selectedPlan && (
                    <div className="success-plan-info">
                      <span>Selected Focus: </span>
                      <strong className="text-brand-yellow">{selectedPlan}</strong>
                    </div>
                  )}
                  <button type="button" className="success-reset-btn" onClick={handleReset}>
                    <span>SEND ANOTHER INQUIRY</span>
                    <ArrowUpRight className="btn-arrow" />
                  </button>
                </div>
              ) : (
                /* Standard Form */
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-card-header">
                    <h3 className="form-card-title">PROJECT INQUIRY</h3>
                    <p className="form-card-subtitle">
                      Fill out the form below and we will get back to you with a preliminary scope.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="form-error-banner" role="alert">
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        YOUR NAME <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        WORK EMAIL <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Brand / Company Row */}
                  <div className="form-group">
                    <label htmlFor="contact-brand" className="form-label">
                      BRAND / COMPANY NAME
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="e.g. Acme Studio"
                      className="form-input"
                    />
                  </div>

                  {/* Service Selection Pills */}
                  <div className="form-group">
                    <label className="form-label">SERVICES NEEDED (SELECT ALL THAT APPLY)</label>
                    <div className="pills-grid">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            className={`service-pill ${isSelected ? "is-selected" : ""}`}
                            onClick={() => toggleService(service)}
                          >
                            <span>{service}</span>
                            {isSelected && <CheckIcon className="pill-check" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Estimated Budget Pills */}
                  <div className="form-group">
                    <label className="form-label">ESTIMATED BUDGET</label>
                    <div className="pills-grid budget-grid">
                      {budgetOptions.map((opt) => {
                        const isSelected = selectedBudget === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            className={`budget-pill ${isSelected ? "is-selected" : ""}`}
                            onClick={() => setSelectedBudget(opt)}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      PROJECT DETAILS & OBJECTIVES
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you're looking to build, your timeline, or any specific challenges..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={submitting}
                  >
                    <span>{submitting ? "SUBMITTING BRIEF..." : "SEND YOUR INQUIRY"}</span>
                    <ArrowUpRight className="submit-arrow" />
                  </button>

                  <p className="form-privacy-note">
                    By submitting this form, you agree to our confidential handling of your project
                    information under strict mutual NDA standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
