"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

export default function RawrajApp() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => {
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
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rawraj-app-wrapper" id="top" suppressHydrationWarning>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProcessSection />
        <PortfolioSection />
        <ServicesSection />
        <PricingSection onSelectPlan={(plan) => setSelectedPlan(plan)} />
        <ContactSection
          selectedPlan={selectedPlan}
          onClearPlan={() => setSelectedPlan(null)}
        />
      </main>
      <FooterSection />
    </div>
  );
}
