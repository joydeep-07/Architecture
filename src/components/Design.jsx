import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Get all sub-sections inside the container
      const sections = gsap.utils.toArray(".design-section");

      sections.forEach((section) => {
        // Find elements within the current section context
        const q = gsap.utils.selector(section);

        // --------------------------------------------------
        // Initial states per section
        // --------------------------------------------------
        gsap.set(q(".design-top-line"), {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(q(".design-image-wrap"), {
          clipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.set(q(".design-image"), {
          scale: 1.2,
        });

        gsap.set(q(".design-label"), {
          y: 25,
          opacity: 0,
        });

        gsap.set(q(".design-heading-line"), {
          yPercent: 200,
        });

        gsap.set(q(".design-description"), {
          y: 40,
          opacity: 0,
        });

        gsap.set(q(".design-info-line"), {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(q(".design-info"), {
          y: 35,
          opacity: 0,
        });

        // --------------------------------------------------
        // Section Reveal Timeline
        // --------------------------------------------------
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(q(".design-top-line"), {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
        })
          .to(
            q(".design-label"),
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.8",
          )
          .to(
            q(".design-image-wrap"),
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.4,
              stagger: 0.2,
              ease: "power4.inOut",
            },
            "-=0.5",
          )
          .to(
            q(".design-image"),
            {
              scale: 1,
              duration: 1.8,
              stagger: 0.2,
              ease: "power3.out",
            },
            "<",
          )
          .to(
            q(".design-heading-line"),
            {
              yPercent: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.inOut",
            },
            "-=1.1",
          )
          .to(
            q(".design-description"),
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.8",
          )
          .to(
            q(".design-info-line"),
            {
              scaleX: 1,
              duration: 0.9,
              ease: "power3.inOut",
            },
            "-=0.6",
          )
          .to(
            q(".design-info"),
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.7",
          );

        // --------------------------------------------------
        // Image Parallax per section
        // --------------------------------------------------
        gsap.to(q(".design-image-parallax"), {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* ===================================================
          SECTION 01: DESIGN PHILOSOPHY
      =================================================== */}
      <section className="design-section w-full px-4 md:px-12 py-24 md:py-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          {/* Top Label */}
          <div className="relative flex items-center justify-between pb-5 mb-16 overflow-hidden">
            <span className="design-label text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              01 — Design Philosophy
            </span>

            <span className="design-label text-xs md:text-sm text-[var(--text-secondary)]">
              Architecture / 2026
            </span>

            <div className="design-top-line absolute bottom-0 left-0 w-full h-px bg-[var(--border-light)]" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Image Block */}
            <div className="lg:col-span-4">
              <div className="design-image-wrap relative group overflow-hidden rounded-sm aspect-[9/12]">
                <div className="design-image-parallax w-full h-[120%] -mt-[10%]">
                  <img
                    className="design-image w-full h-full object-cover will-change-transform"
                    src="https://i.pinimg.com/1200x/20/15/54/201554cbd3d269667f75e39920c26a6a.jpg"
                    alt="Architectural design"
                  />
                </div>

                <div className="design-caption absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
                  <span className="text-white text-xs uppercase tracking-[0.2em]">
                    Fig. 01 — Spatial composition
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col h-full">
                <div>
                  <div className="overflow-hidden inline-block mb-6">
                    <p className="design-label text-xs uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                      Thoughtful spaces
                    </p>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] text-[var(--text-main)] mb-10 overflow-hidden">
                    <span className="design-heading-line block">
                      Designed around the
                    </span>

                    <span className="design-heading-line block text-[var(--text-secondary)]">
                      way you live.
                    </span>
                  </h2>

                  <div className="overflow-hidden">
                    <p className="design-description text-base md:text-lg leading-8 text-[var(--text-secondary)] text-justify">
                      Great architecture is not simply about creating beautiful
                      structures. It is about understanding how people move,
                      live, interact, and experience a space. Every detail
                      should have a purpose while maintaining a sense of
                      simplicity and balance.
                    </p>
                  </div>
                </div>

                {/* Approach & Principle */}
                <div className="mt-12 relative grid grid-cols-1 md:grid-cols-2 border-t border-transparent">
                  <div className="design-info-line absolute top-0 left-0 w-full h-px bg-[var(--accent-primary)] origin-left" />

                  <div className="design-info py-7 md:pr-10 md:border-r border-[var(--border-light)]">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        Approach
                      </span>

                      <span className="text-[10px] tracking-[0.15em] text-[var(--text-secondary)] opacity-50">
                        01
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-tight text-[var(--text-main)] max-w-md">
                      Form follows experience.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)] max-w-sm">
                      Spaces are shaped around movement, comfort, and the way
                      people naturally interact with them.
                    </p>
                  </div>

                  <div className="design-info py-7 md:pl-10">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        Principle
                      </span>

                      <span className="text-[10px] tracking-[0.15em] text-[var(--text-secondary)] opacity-50">
                        02
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-tight text-[var(--text-main)] max-w-md">
                      Simple. Functional. Timeless.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)] max-w-sm">
                      Every element is reduced to what matters, creating spaces
                      that remain relevant beyond changing trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 02: MATERIALITY & LIGHT (NEW SECTION)
      =================================================== */}
      <section className="design-section w-full px-4 md:px-12 py-8 md:py-10 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          {/* Top Label */}
          <div className="relative flex items-center justify-between pb-5 mb-16 overflow-hidden">
            <span className="design-label text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              02 — Materiality & Light
            </span>

            <span className="design-label text-xs md:text-sm text-[var(--text-secondary)]">
              Elements / 2026
            </span>

            <div className="design-top-line absolute bottom-0 left-0 w-full h-px bg-[var(--border-light)]" />
          </div>

          {/* Main Content Grid (Reversed layout for dynamic hierarchy) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="overflow-hidden inline-block mb-6">
                    <p className="design-label text-xs uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                      Atmospheric balance
                    </p>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] text-[var(--text-main)] mb-10 overflow-hidden">
                    <span className="design-heading-line block">
                      Harnessing tactile materials
                    </span>

                    <span className="design-heading-line block text-[var(--text-secondary)]">
                      and natural illumination.
                    </span>
                  </h2>

                  <div className="overflow-hidden">
                    <p className="design-description text-base md:text-lg leading-8 text-[var(--text-secondary)] text-justify">
                      Light defines how we perceive shape, texture, and scope.
                      By integrating raw stone, warm timber, and controlled
                      daylight, we craft environments that shift organically
                      throughout the day, cultivating dynamic indoor
                      atmospheres.
                    </p>
                  </div>
                </div>

                {/* Info Grid - Craft & Light */}
                <div className="mt-12 relative grid grid-cols-1 md:grid-cols-2 border-t border-transparent">
                  <div className="design-info-line absolute top-0 left-0 w-full h-px bg-[var(--accent-primary)] origin-left" />

                  <div className="design-info py-7 md:pr-10 md:border-r border-[var(--border-light)]">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        Tactility
                      </span>

                      <span className="text-[10px] tracking-[0.15em] text-[var(--text-secondary)] opacity-50">
                        03
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-tight text-[var(--text-main)] max-w-md">
                      Raw authenticity.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)] max-w-sm">
                      Unrefined stone and rich wood bring warm texture into
                      crisp geometries.
                    </p>
                  </div>

                  <div className="design-info py-7 md:pl-10">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        Illumination
                      </span>

                      <span className="text-[10px] tracking-[0.15em] text-[var(--text-secondary)] opacity-50">
                        04
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight leading-tight text-[var(--text-main)] max-w-md">
                      Sculpted daylight.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)] max-w-sm">
                      Strategic openings transform daylight into an
                      ever-shifting architectural element.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dual Image Grid Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="design-image-wrap relative group overflow-hidden rounded-sm aspect-[3/4]">
                <div className="design-image-parallax w-full h-[120%] -mt-[10%]">
                  <img
                    className="design-image w-full h-full object-cover will-change-transform"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    alt="Material detail 1"
                  />
                </div>
                <div className="design-caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em]">
                    Fig. 02 — Light shadow play
                  </span>
                </div>
              </div>

              <div className="design-image-wrap relative group overflow-hidden rounded-sm aspect-[3/4] mt-8 md:mt-12">
                <div className="design-image-parallax w-full h-[120%] -mt-[10%]">
                  <img
                    className="design-image w-full h-full object-cover will-change-transform"
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                    alt="Material detail 2"
                  />
                </div>
                <div className="design-caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em]">
                    Fig. 03 — Concrete & Timber
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
