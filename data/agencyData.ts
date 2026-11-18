export const navItems = ["Home", "Services", "Our Work", "Pricing", "Contact"] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive into your brand, audience, and market to uncover the opportunities that make you different.",
    icon: "search",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We turn insights into a focused creative direction with clear messaging, ambitious goals, and a measurable roadmap.",
    icon: "target",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We bring bold ideas to life through design, content, digital experiences, and performance-driven campaigns.",
    icon: "layers",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We refine what works, amplify what performs, and build lasting momentum for brands ready to grow.",
    icon: "arrow",
  },
] as const;

export const portfolioProjects = [
  {
    id: "monoform",
    number: "01",
    title: "MONOFORM",
    category: "Brand Identity / Creative Direction",
    description:
      "Minimalist luxury product campaign with sculptural chiaroscuro lighting, tactile textures, and bold editorial typography.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
    alt: "Sculptural luxury dark vessel with dramatic rim lighting for MONOFORM",
    widthClass: "portfolio-item-monoform",
    revealType: "reveal-clip-vertical",
    aspectRatioClass: "aspect-16-9",
  },
  {
    id: "afterhours",
    number: "02",
    title: "AFTERHOURS",
    category: "Digital Experience / Web Design",
    description:
      "Experimental nightlife and lifestyle digital experience featuring immersive dark visual storytelling and kinetic typography.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Atmospheric dark club silhouette with volumetric lighting beams for AFTERHOURS",
    widthClass: "portfolio-item-afterhours",
    revealType: "reveal-parallax-up",
    aspectRatioClass: "aspect-4-5",
  },
  {
    id: "forma",
    number: "03",
    title: "FORMA",
    category: "Brand Strategy / Digital Campaign",
    description:
      "Monumental architectural and spatial design identity driven by brutalist monochrome compositions and editorial publication design.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Monumental architectural concrete geometry with sharp geometric shadows for FORMA",
    widthClass: "portfolio-item-forma",
    revealType: "reveal-clip-horizontal",
    aspectRatioClass: "aspect-21-9",
  },
  {
    id: "motion-lab",
    number: "04",
    title: "MOTION LAB",
    category: "Creative Campaign / Digital Experience",
    description:
      "Avant-garde athletic and high-fashion movement campaign with high-contrast strobe lighting and relentless kinetic art direction.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    alt: "High-contrast kinetic athlete silhouette leaping in dramatic studio light for MOTION LAB",
    widthClass: "portfolio-item-motionlab",
    revealType: "reveal-scale-fade",
    aspectRatioClass: "aspect-square-dynamic",
  },
] as const;

export const servicesData = [
  {
    number: "01",
    name: "Brand Strategy",
    description:
      "We build distinctive brand identities, compelling positioning, and creative directions that make businesses unforgettable.",
    tagline: "Identity & Positioning",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Abstract sculptural typography artwork representing Brand Strategy",
  },
  {
    number: "02",
    name: "Digital Marketing",
    description:
      "We connect brands with the right audiences through thoughtful, integrated digital campaigns.",
    tagline: "Integrated Campaigns",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "High-contrast cinematic editorial campaign lighting for Digital Marketing",
  },
  {
    number: "03",
    name: "Web Design & Development",
    description:
      "We create expressive, intuitive, and high-performing digital experiences built around real user needs.",
    tagline: "Interactive Craft",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Minimal modern creative web layout composition for Web Design & Development",
  },
  {
    number: "04",
    name: "Search Engine Optimization",
    description:
      "We strengthen search visibility through technical improvements, content strategy, and sustainable organic growth.",
    tagline: "Organic Authority",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Architectural data visualization aesthetic representing Search Engine Optimization",
  },
  {
    number: "05",
    name: "Content & Creative",
    description:
      "We turn ideas into compelling stories, visuals, and campaigns that capture attention and inspire action.",
    tagline: "Cinematic Narrative",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "High-fashion editorial chiaroscuro portrait for Content & Creative",
  },
  {
    number: "06",
    name: "Performance Marketing",
    description:
      "We plan, test, and optimize paid campaigns with a focus on measurable business outcomes.",
    tagline: "Scalable Growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Dynamic high-contrast kinetic lighting composition for Performance Marketing",
  },
] as const;

export interface PricingPlan {
  id: string;
  number: string;
  badge: string;
  popularBadge?: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  isFeatured: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    number: "01",
    badge: "01 / FOUNDATION",
    name: "Starter",
    tagline: "Essential brand foundation",
    price: "₹14,999",
    period: "/month",
    description: "For emerging brands establishing a strong, cohesive digital foundation.",
    features: [
      "Brand identity & visual guidelines",
      "5-page custom responsive website",
      "Social media starter kit (12 posts/mo)",
      "Basic search engine optimization (SEO)",
      "Monthly performance report & analytics",
    ],
    ctaText: "GET STARTED",
    isFeatured: false,
  },
  {
    id: "growth",
    number: "02",
    badge: "02 / ACCELERATION",
    popularBadge: "MOST POPULAR",
    name: "Growth",
    tagline: "Comprehensive scale & momentum",
    price: "₹29,999",
    period: "/month",
    description: "For ambitious businesses looking to scale their audience, brand presence, and digital revenue.",
    features: [
      "Everything in Starter included",
      "Full-funnel digital marketing campaigns",
      "Custom web design & dev (up to 12 pages)",
      "Comprehensive SEO & technical optimization",
      "Performance ad management (Meta + Google)",
      "Dedicated creative strategist & bi-weekly syncs",
    ],
    ctaText: "START GROWING",
    isFeatured: true,
  },
  {
    id: "scale",
    number: "03",
    badge: "03 / ENTERPRISE",
    popularBadge: "BESPOKE SCOPE",
    name: "Scale",
    tagline: "Tailored brand transformation",
    price: "Custom",
    period: "/tailored scope",
    description: "For market leaders requiring bespoke creative direction, custom digital platforms, and dedicated team embedded execution.",
    features: [
      "Bespoke brand transformation & strategy",
      "High-performance web apps & headless builds",
      "Multi-channel performance marketing with ad ops",
      "Full-service content production (photo, 3D, motion)",
      "Real-time analytics dashboard & weekly strategy calls",
      "Dedicated 4-person multidisciplinary team",
    ],
    ctaText: "TALK TO US",
    isFeatured: false,
  },
];

export const serviceOptions = [
  "Brand Strategy",
  "Digital Marketing",
  "Web Design & Dev",
  "Search Optimization",
  "Content & Creative",
  "Performance Ads",
] as const;

export const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Let's discuss",
] as const;

export const footerLinks = {
  explore: [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our-work" },
    { label: "Growth Process", href: "#process" },
    { label: "Plans & Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ],
  services: [
    { label: "Brand Strategy", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Web Design & Dev", href: "#services" },
    { label: "SEO & Authority", href: "#services" },
    { label: "Performance Campaigns", href: "#services" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com", external: true },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Behance", href: "https://behance.net", external: true },
    { label: "hello@rawraj.com", href: "mailto:hello@rawraj.com", external: false },
  ],
};

export const socialLinks = [
  { name: "Instagram", handle: "@rawraj.agency", href: "https://instagram.com" },
  { name: "LinkedIn", handle: "company/rawraj", href: "https://linkedin.com" },
  { name: "Behance", handle: "rawraj-creative", href: "https://behance.net" },
  { name: "Twitter / X", handle: "@rawraj_hq", href: "https://x.com" },
];
