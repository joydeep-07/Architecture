import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Featured from "./Featured";
import Design from "./Design";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const aboutRef = useRef(null);

  // Split target values and suffixes for smooth numeric interpolation
  const stats = [
    { target: 10, suffix: "+", label: "years in the market" },
    { target: 1000, suffix: "+", label: "successful deals" },
    { target: 4000, suffix: "+", label: "properties in database" },
    { target: 95, suffix: "%", label: "satisfied clients" },
  ];

  useGSAP(
    () => {
      // Hardware acceleration config
      gsap.config({ force3D: true });

      // ==========================================
      // 1. HERO LOAD ANIMATION
      // ==========================================
      gsap.set(".hero-img-container", {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      });
      gsap.set(heroImageRef.current, { scale: 1.2 });
      gsap.set(".hero-label", { y: 20, opacity: 0 });
      gsap.set(".hero-title-line", { yPercent: 200 });
      gsap.set(".hero-desc", { y: 25, opacity: 0 });
      gsap.set(".hero-btn", { y: 20, opacity: 0 });

      const heroTl = gsap.timeline({
        defaults: { ease: "easeInOut" },
      });

      heroTl
        .to(".hero-img-container", {
          clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.3,
          ease: "power4.inOut",
        })
        .to(
          heroImageRef.current,
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.inOut",
          },
          "<",
        )
        .to(
          ".hero-label",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.9",
        )
        .to(
          ".hero-title-line",
          {
            yPercent: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.inOut",
          },
          "-=0.5",
        )
        .to(
          ".hero-desc",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".hero-btn",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4",
        );

      // Parallax effect
      gsap.to(heroImageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ==========================================
      // 2. ABOUT + STATS SCROLLTRIGGER ANIMATION
      // ==========================================
      gsap.set(".about-label", { y: 20, opacity: 0 });
      gsap.set(".about-title-line", { yPercent: 120 });
      gsap.set(".about-desc", { y: 30, opacity: 0 });
      gsap.set(".stat-card", { y: 35, opacity: 0 });

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.inOut" },
      });

      aboutTl
        .to(".about-label", {
          y: 0,
          opacity: 1,
          duration: 0.6,
        })
        .to(
          ".about-title-line",
          {
            yPercent: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        .to(
          ".about-desc",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".stat-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          ".stat-number",
          {
            duration: 2,
            ease: "power2.out",
            onStart: function () {
              const targets = document.querySelectorAll(".stat-number");
              targets.forEach((el) => {
                const targetValue = parseInt(
                  el.getAttribute("data-target"),
                  10,
                );
                const suffix = el.getAttribute("data-suffix") || "";
                const obj = { val: 0 };

                gsap.to(obj, {
                  val: targetValue,
                  duration: 2,
                  ease: "power2.out",
                  onUpdate: () => {
                    el.textContent = `${Math.floor(obj.val)}${suffix}`;
                  },
                });
              });
            },
          },
          "-=0.7",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full mx-auto px-4 py-8 font-sans bg-[var(--bg-main)] overflow-hidden"
    >
      {/* HERO BANNER */}
      <div
        ref={heroRef}
        className="relative min-h-[560px] overflow-hidden rounded-sm bg-[var(--accent-primary)] text-[var(--white)]"
      >
        <div className="hero-img-container absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[55%] transform-gpu will-change-[clip-path]">
          <div className="relative h-full w-full overflow-hidden">
            <img
              ref={heroImageRef}
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
              alt="Modern commercial building"
              className="h-[115%] w-full object-cover transform-gpu will-change-transform -mt-[5%]"
            />
            <div className="absolute inset-0 bg-[var(--black)]/10" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[560px] items-center p-8 md:p-14 lg:p-16">
          <div className="max-w-xl">
            <span className="hero-label mb-6 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--white)]/50 transform-gpu will-change-[transform,opacity]">
              Commercial real estate
            </span>

            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl overflow-hidden">
              <span className="hero-title-line block transform-gpu will-change-transform">
                Real estate
              </span>
              <span className="hero-title-line block transform-gpu will-change-transform">
                for business
              </span>
            </h1>

            <p className="hero-desc mt-7 max-w-sm text-sm leading-7 text-[var(--white)]/60 sm:text-base transform-gpu will-change-[transform,opacity]">
              Lease, sale, and selection of properties from offices to
              warehouses.
            </p>

            <button
              type="button"
              className="
                hero-btn
                mt-8
                rounded-sm
                bg-[var(--white)]
                px-7
                py-3.5
                text-sm
                font-medium
                text-[var(--text-main)]
                transition-colors
                duration-300
                hover:bg-[var(--bg-hover)]
                transform-gpu
                will-change-[transform,opacity]
              "
            >
              Start collaboration
            </button>
          </div>
        </div>
      </div>

      {/* <Featured /> */}
      <Design/>

      {/* ABOUT + STATS BOXES */}
      <div
        ref={aboutRef}
        className="grid grid-cols-1 items-start gap-12  md:px-8  lg:grid-cols-12 mt-16"
      >
        <div className="space-y-5 lg:col-span-5">
          <span className="about-label block text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] transform-gpu will-change-[transform,opacity]">
            About us
          </span>

          <h2 className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] text-[var(--text-main)] sm:text-4xl overflow-hidden">
            <span className="about-title-line block transform-gpu will-change-transform">
              Helping businesses find
            </span>
            <span className="about-title-line block transform-gpu will-change-transform">
              the right space.
            </span>
          </h2>

          <p className="about-desc max-w-lg text-sm leading-7 text-[var(--text-secondary)] transform-gpu will-change-[transform,opacity]">
            We are an expert commercial real estate agency helping businesses
            find suitable properties for lease or purchase. From selecting the
            right property to providing complete legal support, we handle it
            all.
          </p>
        </div>

        {/* Stat Boxes */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                stat-card
                group
                flex
                flex-col
                justify-between
                rounded-sm
                border
                border-[var(--border-light)]
                bg-[var(--bg-card)]
                p-5
                transition-colors
                duration-300
                sm:p-6
                transform-gpu
                will-change-[transform,opacity]
              "
            >
              <div className="hidden md:flex mb-2 items-start justify-between">
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  0{index + 1}
                </span>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--accent-primary)]
                    opacity-20
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              <div>
                <div className="inline-flex transition-colors duration-300">
                  <span
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                    className="
                      stat-number
                      text-3xl
                      font-normal
                      tracking-tight
                      text-[var(--text-main)]
                      transition-colors
                      duration-300
                      sm:text-4xl
                    "
                  >
                    0{stat.suffix}
                  </span>
                </div>

                <span className="mt-3 block text-xs font-medium text-[var(--text-muted)] sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
