// Featured.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiArrowRight, FiMapPin, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: "office",
    title: "Office Spaces",
    count: "4000+ properties",
    location: "Prime business locations",
    description:
      "Modern office spaces designed for startups, established businesses, and growing teams.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "warehouse",
    title: "Warehouse Spaces",
    count: "1000+ properties",
    location: "Industrial & logistics hubs",
    description:
      "Strategically located warehouses built for storage, logistics, distribution, and operations.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "land",
    title: "Land Plots",
    count: "2000+ properties",
    location: "Commercial development areas",
    description:
      "Commercial and industrial land plots suitable for your next development or investment.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "coworking",
    title: "Co-working Spaces",
    count: "800+ properties",
    location: "Business & startup communities",
    description:
      "Flexible workspaces with modern amenities for freelancers, startups, remote teams, and growing businesses.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  },
];

const Featured = () => {
  const [activeCategory, setActiveCategory] = useState("office");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef(null);
  const activeIndicatorRef = useRef(null);
  const categoryRefs = useRef({});

  const activeIndex = useMemo(
    () => CATEGORIES.findIndex((item) => item.id === activeCategory),
    [activeCategory],
  );
  const activeProperty = CATEGORIES[activeIndex] || CATEGORIES[0];

  const handleCategoryChange = (newId) => {
    const newIndex = CATEGORIES.findIndex((item) => item.id === newId);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveCategory(newId);
  };

  // Active Category Indicator Animation
  useEffect(() => {
    const currentElement = categoryRefs.current[activeCategory];
    if (currentElement && activeIndicatorRef.current) {
      gsap.to(activeIndicatorRef.current, {
        y: currentElement.offsetTop,
        height: currentElement.offsetHeight,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [activeCategory]);

  // GSAP ScrollTrigger Sequence Setup
  useGSAP(
    () => {
      const section = sectionRef.current;

      // --------------------------------------------------
      // Initial States Setup
      // --------------------------------------------------

      // Lines scaleX setup
      gsap.set(".feat-line-draw", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Labels & badges
      gsap.set(".feat-label-reveal", {
        y: 20,
        opacity: 0,
      });

      // Heading lines masking
      gsap.set(".feat-heading-line", {
        yPercent: 120,
      });

      // Category menu items (Desktop)
      gsap.set(".feat-menu-item", {
        x: -30,
        opacity: 0,
      });

      // Display card image reveal
      gsap.set(".feat-image-wrap", {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(".feat-image-inner", {
        scale: 1.2,
      });

      // Mobile cards initial setup
      gsap.set(".feat-mobile-card", {
        y: 40,
        opacity: 0,
      });

      // --------------------------------------------------
      // Orchestrated Entrance Timeline
      // --------------------------------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".feat-label-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          ".feat-heading-line",
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        // Reveal desktop menu items
        .to(
          ".feat-menu-item",
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.5",
        )
        // Image crop unveil
        .to(
          ".feat-image-wrap",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.6",
        )
        // Image inner unscale
        .to(
          ".feat-image-inner",
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<",
        )
        // Draw footer dividing lines
        .to(
          ".feat-line-draw",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        // Animate mobile cards sequentially
        .to(
          ".feat-mobile-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.8",
        );

      // --------------------------------------------------
      // Image Parallax Scroll Effect
      // --------------------------------------------------
      gsap.to(".feat-parallax-bg", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: sectionRef },
  );

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="w-full md:px-4 py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <span
              className="feat-label-reveal inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-primary)" }}
            >
              Property catalog
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            style={{ color: "var(--text-main)" }}
          >
            <div className="overflow-hidden">
              <span className="feat-heading-line block">
                Find a space that fits
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="feat-heading-line block"
                style={{ color: "var(--text-secondary)" }}
              >
                your business.
              </span>
            </div>
          </h2>
        </div>

        {/* ========== DESKTOP / LAPTOP ========== */}
        <div className="hidden lg:grid grid-cols-4 gap-12 items-start">
          {/* LEFT CATEGORY MENU */}
          <div className="relative h-full flex flex-col justify-between">
            <div className="relative">
              <div
                ref={activeIndicatorRef}
                className="absolute left-0 w-full pointer-events-none rounded-l-xl z-0"
                style={{
                  borderLeft: "3px solid var(--accent-primary)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              />
              <div className="flex flex-col relative z-10">
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <div
                      key={category.id}
                      ref={(el) => {
                        categoryRefs.current[category.id] = el;
                      }}
                      onClick={() => handleCategoryChange(category.id)}
                      className="feat-menu-item min-w-0 relative z-10 cursor-pointer group"
                    >
                      <div
                        className="px-4 py-5 flex items-center justify-between gap-6 transition-all duration-300"
                        style={{
                          color: isActive
                            ? "var(--text-main)"
                            : "var(--text-secondary)",
                        }}
                      >
                        <div>
                          <h3
                            className={`text-base transition-all ${
                              isActive ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p
                            className="text-[11px] mt-1"
                            style={{
                              color: isActive
                                ? "var(--accent-primary)"
                                : "var(--text-secondary)",
                            }}
                          >
                            {category.count}
                          </p>
                        </div>
                        <FiChevronRight
                          size={16}
                          className={`transition-all duration-200 ${
                            isActive
                              ? "opacity-100 translate-x-1"
                              : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                          style={{ color: "var(--accent-primary)" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT FEATURED PROPERTY */}
          <div className="col-span-3 overflow-hidden relative rounded-sm h-[400px] bg-black">
            <div className="feat-image-wrap w-full h-full relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeProperty.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 260, damping: 28 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer group rounded-sm overflow-hidden bg-zinc-950"
                  onClick={() => setSelectedProperty(activeProperty)}
                >
                  <div className="feat-parallax-bg absolute inset-0 w-full h-[120%] -mt-[10%] will-change-transform">
                    <img
                      src={activeProperty.image}
                      alt={activeProperty.title}
                      className="feat-image-inner absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                      {activeProperty.count}
                    </span>
                    <span className="text-white/60 text-xs tracking-widest">
                      0{activeIndex + 1}/0{CATEGORIES.length}
                    </span>
                  </div>
                  <div className="absolute left-8 right-8 bottom-8 z-10">
                    <p className="text-white/60 text-[10px] uppercase tracking-[0.18em] mb-3">
                      Featured property type
                    </p>
                    <div className="flex items-end justify-between gap-6">
                      <div className="max-w-2xl">
                        <h3 className="text-white text-5xl lg:text-6xl font-medium tracking-tight">
                          {activeProperty.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-4">
                          <FiMapPin
                            size={15}
                            className="text-white/70 shrink-0"
                          />
                          <span className="text-white/60 text-sm">
                            {activeProperty.location}
                          </span>
                        </div>
                        <p className="text-white/65 text-sm leading-relaxed max-w-xl mt-4">
                          {activeProperty.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProperty(activeProperty);
                        }}
                        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:translate-x-1"
                        style={{
                          backgroundColor: "var(--accent-primary)",
                          color: "var(--bg-main)",
                        }}
                        aria-label="View property details"
                      >
                        <FiArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:block relative mt-8 pt-6">
          <div
            className="feat-line-draw absolute top-0 left-0 w-full h-px"
            style={{ backgroundColor: "var(--border-light)" }}
          />
          <div className="flex items-center justify-between gap-6">
            <p
              className="text-xs leading-relaxed max-w-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Explore carefully selected commercial properties across different
              business requirements and locations.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    aria-label={`Select ${category.title}`}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: activeCategory === category.id ? "36px" : "14px",
                      backgroundColor:
                        activeCategory === category.id
                          ? "var(--accent-primary)"
                          : "var(--border-light)",
                    }}
                  />
                ))}
              </div>
              <div
                className="text-xs font-medium tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                0{activeIndex + 1} / 0{CATEGORIES.length}
              </div>
            </div>
          </div>
        </div>

        {/* ========== MOBILE ARCHITECTURE ========== */}
        <div className="lg:hidden space-y-6">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="feat-mobile-card relative aspect-[16/9] rounded-sm overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProperty(category)}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                  {category.count}
                </span>

                <span className="text-white/50 text-xs tracking-widest">
                  0{index + 1}/0{CATEGORIES.length}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute left-5 right-5 bottom-5 z-10">
                <p className="text-white/50 text-[9px] uppercase tracking-[0.2em] mb-2">
                  Featured property type
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-white text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
                      {category.title}
                    </h3>

                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2 max-w-[90%]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Hint */}
                <div className="mt-4 flex items-center">
                  <span className="text-white/35 text-[10px] uppercase tracking-[0.15em]">
                    Tap to explore
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Footer Note */}
          <p
            className="text-xs leading-relaxed text-center pt-2 px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore carefully selected commercial properties across different
            business requirements and locations.
          </p>
        </div>
      </div>

      {/* DRAWER */}
      <AnimatePresence>
        {selectedProperty && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg flex flex-col border-l"
              style={{
                backgroundColor: "var(--bg-main)",
                borderColor: "var(--border-light)",
              }}
            >
              <div
                className="p-4 border-b flex items-center justify-between"
                style={{ borderColor: "var(--border-light)" }}
              >
                <span
                  className="text-xs uppercase tracking-[0.15em] font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Property information
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProperty(null)}
                  className="w-9 h-9 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                >
                  <FiX size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="relative h-64 rounded-sm overflow-hidden mb-7">
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-xs uppercase tracking-[0.16em] mb-2"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {selectedProperty.count}
                </p>
                <h2
                  className="text-3xl font-medium tracking-tight mb-4"
                  style={{ color: "var(--text-main)" }}
                >
                  {selectedProperty.title}
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <FiMapPin
                    size={14}
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {selectedProperty.location}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {selectedProperty.description}
                </p>
                <div className="mt-8 rounded-sm">
                  <p
                    className="text-xs uppercase tracking-[0.15em] font-semibold mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Looking for a property?
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Browse available listings and find a property matching your
                    business requirements.
                  </p>
                </div>
              </div>
              <div
                className="py-6 px-4 border-t"
                style={{ borderColor: "var(--border-light)" }}
              >
                <button
                  type="button"
                  className="w-full py-3.5 rounded-sm text-xs uppercase tracking-[0.12em] font-semibold"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--bg-main)",
                  }}
                >
                  Explore more Properties
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Featured;
