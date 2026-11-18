"use client";

import { pricingPlans, type PricingPlan } from "../data/agencyData";
import { ArrowUpRight, CheckIcon } from "./icons";

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const handlePlanClick = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.name);
    }
    if (typeof document !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCustomInquiry = () => {
    if (onSelectPlan) {
      onSelectPlan("Custom Scope");
    }
    if (typeof document !== "undefined") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      {/* Background ambient lighting */}
      <div className="pricing-ambient-glow" aria-hidden="true" />
      <div className="pricing-grain" aria-hidden="true" />

      <div className="pricing-container">
        {/* Section Introduction */}
        <div className="pricing-header reveal-on-scroll">
          <div className="pricing-eyebrow">
            <span className="eyebrow-dot" />
            <span>05 / INVEST IN YOUR GROWTH</span>
          </div>

          <div className="pricing-title-row">
            <div className="pricing-heading-col">
              <h2 id="pricing-title" className="pricing-heading">
                BIG IDEAS.
                <span className="pricing-heading-serif">Clear pricing.</span>
              </h2>
            </div>

            <div className="pricing-desc-col">
              <p className="pricing-lead">
                From building your digital presence to scaling ambitious campaigns, find a plan that
                fits where your brand is today.
              </p>
              <div className="pricing-badge-strip">
                <span className="pricing-pill">NO HIDDEN CHARGES</span>
                <span className="pricing-pill">CANCEL ANYTIME</span>
                <span className="pricing-pill">TRANSPARENT VALUE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.isFeatured;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${isFeatured ? "is-featured" : "is-standard"} reveal-on-scroll`}
              >
                {/* Popular Badge */}
                {plan.popularBadge && (
                  <div className="pricing-card-badge">
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="card-top">
                  <div className="card-badge-row">
                    <span className="plan-number-badge">{plan.badge}</span>
                  </div>

                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="card-price-row">
                  <div className="price-amount">{plan.price}</div>
                  <div className="price-period">{plan.period}</div>
                </div>

                <p className="plan-description">{plan.description}</p>

                <div className="card-divider" />

                {/* Features List */}
                <div className="card-features-wrapper">
                  <span className="features-label">WHAT&apos;S INCLUDED</span>
                  <ul className="features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-icon">
                          <CheckIcon />
                        </span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`plan-cta-button ${isFeatured ? "btn-featured" : "btn-standard"}`}
                  onClick={() => handlePlanClick(plan)}
                  aria-label={`Select ${plan.name} plan and proceed to contact`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="cta-icon" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Footnotes Strip */}
        <div className="pricing-footnotes reveal-on-scroll">
          <div className="footnote-left">
            <span className="footnote-cue" />
            <div className="footnote-prompt">
              <span>Need something different?</span>{" "}
              <button
                type="button"
                className="footnote-link"
                onClick={handleCustomInquiry}
              >
                Let&apos;s build a custom plan ↗
              </button>
            </div>
          </div>

          <div className="footnote-right">
            <p className="footnote-disclaimer">
              All plans include NDA protection, dedicated Slack channel, and transparent monthly
              sprint reporting. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
