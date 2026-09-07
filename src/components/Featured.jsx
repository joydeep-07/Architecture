// Featured.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiArrowRight, FiMapPin, FiX } from "react-icons/fi";
import { gsap } from "gsap";

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
      className="w-full px-4 py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: "var(--accent-primary)" }}
          >
            Property catalog
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            style={{ color: "var(--text-main)" }}
          >
            Find a space that fits
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              your business.
            </span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:px-6 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* LEFT CATEGORY MENU */}
          <div className="relative h-full flex flex-col justify-between">
            <div className="relative">
              {/* Desktop sliding indicator */}
              <div
                ref={activeIndicatorRef}
                className="hidden lg:block absolute left-0 w-full pointer-events-none rounded-l-xl z-0"
                style={{
                  borderLeft: "3px solid var(--accent-primary)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              />

              {/* Mobile horizontal scroll / Desktop vertical list */}
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-none relative z-10">
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <div
                      key={category.id}
                      ref={(el) => {
                        categoryRefs.current[category.id] = el;
                      }}
                      onClick={() => handleCategoryChange(category.id)}
                      className="min-w-max lg:min-w-0 relative z-10 cursor-pointer group"
                    >
                      <div
                        className="px-4 py-4 lg:py-5 flex items-center justify-between gap-6 transition-all duration-300"
                        style={{
                          color: isActive
                            ? "var(--text-main)"
                            : "var(--text-secondary)",
                        }}
                      >
                        <div>
                          <h3
                            className={`text-sm lg:text-base transition-all ${
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
                          className={`hidden lg:block transition-all duration-200 ${
                            isActive
                              ? "opacity-100 translate-x-1"
                              : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                          style={{ color: "var(--accent-primary)" }}
                        />
                      </div>

                      {/* Mobile active border */}
                      {isActive && (
                        <div
                          className="lg:hidden absolute bottom-0 left-0 right-0 h-[2px]"
                          style={{ backgroundColor: "var(--accent-primary)" }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT FEATURED PROPERTY (DARK CARD SLIDER) */}
          <div className="lg:col-span-3 overflow-hidden relative rounded-2xl h-[400px] bg-black">
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
                className="absolute inset-0 w-full h-full cursor-pointer group rounded-2xl overflow-hidden bg-zinc-950"
                onClick={() => setSelectedProperty(activeProperty)}
              >
                {/* Background Image */}
                <img
                  src={activeProperty.image}
                  alt={activeProperty.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                {/* Top Content */}
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                    {activeProperty.count}
                  </span>

                  <span className="text-white/60 text-xs tracking-widest">
                    0{activeIndex + 1}/0{CATEGORIES.length}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-8 md:bottom-8 z-10">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.18em] mb-3">
                    Featured property type
                  </p>

                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="max-w-2xl">
                      <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                        {activeProperty.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-4">
                        <FiMapPin
                          size={15}
                          className="text-white/70 shrink-0"
                        />
                        <span className="text-white/60 text-xs sm:text-sm">
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

        {/* PARALLEL FOOTER ROW (Text + Indicators + Card Number) */}
        <div
          className="mt-8 pt-6 border-t md:mx-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          style={{ borderColor: "var(--border-light)" }}
        >
          {/* Footer Text */}
          <p
            className="text-xs leading-relaxed max-w-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore carefully selected commercial properties across different
            business requirements and locations.
          </p>

          {/* Indicators + Number Count */}
          <div className="flex items-center justify-between sm:justify-start gap-8">
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
                className="p-5 border-b flex items-center justify-between"
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

              <div className="flex-1 overflow-y-auto p-6">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-7">
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

                <div
                  className="mt-8 p-5 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-light)",
                  }}
                >
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
                className="p-6 border-t"
                style={{ borderColor: "var(--border-light)" }}
              >
                <button
                  type="button"
                  className="w-full py-3.5 rounded-xl text-xs uppercase tracking-[0.12em] font-semibold"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--bg-main)",
                  }}
                >
                  Explore Properties
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
