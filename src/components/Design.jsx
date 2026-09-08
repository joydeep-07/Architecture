import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      // --------------------------------------------------
      // Initial states
      // --------------------------------------------------

      // Top line
      gsap.set(".design-top-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Image
      gsap.set(".design-image-wrap", {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(".design-image", {
        scale: 1.2,
      });

      // Labels
      gsap.set(".design-label", {
        y: 25,
        opacity: 0,
      });

      // Heading
      gsap.set(".design-heading-line", {
        yPercent: 200,
      });

      // Description
      gsap.set(".design-description", {
        y: 40,
        opacity: 0,
      });

      // Bottom information line
      gsap.set(".design-info-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Approach + Principle
      gsap.set(".design-info", {
        y: 35,
        opacity: 0,
      });

      // --------------------------------------------------
      // Main timeline (Original durations, reduced delays)
      // --------------------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Top border draws
      tl.to(".design-top-line", {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.inOut",
      })

        // 2. Top labels appear
        .to(
          ".design-label",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.8",
        )

        // 3. Image reveal
        .to(
          ".design-image-wrap",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=0.5",
        )

        // 4. Image scale
        .to(
          ".design-image",
          {
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          "<",
        )

        // 5. Heading reveal
        .to(
          ".design-heading-line",
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.inOut",
          },
          "-=1.1",
        )

        // 6. Description
        .to(
          ".design-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8",
        )

        // 7. Bottom information line
        .to(
          ".design-info-line",
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "-=0.6",
        )

        // 8. Approach + Principle
        .to(
          ".design-info",
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
      // Image parallax
      // --------------------------------------------------

      gsap.to(".design-image-parallax", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto">
        {/* -----------------------------------------------
            TOP LABEL
        ------------------------------------------------ */}

        <div className="relative flex items-center justify-between pb-5 mb-16 overflow-hidden">
          <span className="design-label text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            01 — Design Philosophy
          </span>

          <span className="design-label text-xs md:text-sm text-[var(--text-secondary)]">
            Architecture / 2026
          </span>

          {/* Animated top line */}
          <div className="design-top-line absolute bottom-0 left-0 w-full h-px bg-[var(--border-light)]" />
        </div>

        {/* -----------------------------------------------
            MAIN CONTENT
        ------------------------------------------------ */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* ---------------------------------------------
              IMAGE
          ---------------------------------------------- */}

          <div className="lg:col-span-4">
            <div className="design-image-wrap relative group overflow-hidden rounded-sm aspect-[9/12]">
              <div className="design-image-parallax w-full h-[120%] -mt-[10%]">
                <img
                  className="design-image w-full h-full object-cover will-change-transform"
                  src="https://i.pinimg.com/1200x/20/15/54/201554cbd3d269667f75e39920c26a6a.jpg"
                  alt="Architectural design"
                />
              </div>

              {/* Image caption */}
              <div className="design-caption absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
                <span className="text-white text-xs uppercase tracking-[0.2em]">
                  Fig. 01 — Spatial composition
                </span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------
              CONTENT
          ---------------------------------------------- */}

          <div className="lg:col-span-8 flex flex-col">
            <div className="flex flex-col h-full">
              {/* Main text */}
              <div>
                {/* Small label */}
                <div className="overflow-hidden inline-block mb-6">
                  <p className="design-label text-xs uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                    Thoughtful spaces
                  </p>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] text-[var(--text-main)] mb-10 overflow-hidden">
                  <span className="design-heading-line block">
                    Designed around the
                  </span>

                  <span className="design-heading-line block text-[var(--text-secondary)]">
                    way you live.
                  </span>
                </h2>

                {/* Description */}
                <div className="overflow-hidden">
                  <p className="design-description text-base md:text-lg leading-8 text-[var(--text-secondary)] text-justify">
                    Great architecture is not simply about creating beautiful
                    structures. It is about understanding how people move, live,
                    interact, and experience a space. Every detail should have a
                    purpose while maintaining a sense of simplicity and balance.
                  </p>
                </div>
              </div>

              {/* -----------------------------------------
                  APPROACH + PRINCIPLE
              ------------------------------------------ */}

              <div className="mt-auto pt-10 relative grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Animated line */}
                <div className="design-info-line absolute top-0 left-0 w-full h-px bg-[var(--border-light)]" />

                {/* Approach */}
                <div className="design-info">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-3">
                    Approach
                  </span>

                  <h3 className="text-xl md:text-2xl text-[var(--text-main)]">
                    Form follows experience.
                  </h3>
                </div>

                {/* Principle */}
                <div className="design-info">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-3">
                    Principle
                  </span>

                  <h3 className="text-xl md:text-2xl text-[var(--text-main)]">
                    Simple. Functional. Timeless.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
