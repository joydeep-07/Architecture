import React from "react";

const Hero = () => {
  const stats = [
    { value: "10+", label: "years in the market" },
    { value: "1000+", label: "successful deals" },
    { value: "4000+", label: "properties in database" },
    { value: "95%", label: "satisfied clients" },
  ];

  return (
    <section className="w-full mx-auto px-4 py-8 font-sans bg-[var(--bg-main)]">
      {/* =========================
          HERO
      ========================== */}
      <div className="relative min-h-[560px] overflow-hidden rounded-sm bg-[var(--accent-primary)] text-[var(--white)]">
        {/* Image */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[55%]">
          <div
            className="relative h-full w-full"
            style={{
              clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
              alt="Modern commercial building"
              className="h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-[var(--black)]/10" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[560px] items-center p-8 md:p-14 lg:p-16">
          <div className="max-w-xl">
            {/* Small label */}
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--white)]/50">
              Commercial real estate
            </span>

            {/* Heading */}
            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Real estate
              <br />
              for business
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--white)]/60 sm:text-base">
              Lease, sale, and selection of properties from offices to
              warehouses.
            </p>

            {/* Button */}
            <button
              type="button"
              className="
                mt-8
                rounded-sm
                bg-[var(--white)]
                px-7
                py-3.5
                text-sm
                font-medium
                text-[var(--text-main)]
                transition-all
                duration-300
                hover:bg-[var(--bg-hover)]
              "
            >
              Start collaboration
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          ABOUT + STATS
      ========================== */}
      <div className="mt-20 grid grid-cols-1 items-start gap-12 px-2 lg:grid-cols-12">
        {/* About */}
        <div className="space-y-5 lg:col-span-5">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            About us
          </span>

          <h2 className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] text-[var(--text-main)] sm:text-4xl">
            Helping businesses find the right space.
          </h2>

          <p className="max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
            We are an expert commercial real estate agency helping businesses
            find suitable properties for lease or purchase. From selecting the
            right property to providing complete legal support, we handle it
            all.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group
                flex
                min-h-[165px]
                flex-col
                justify-between
                rounded-sm
                border
                border-[var(--border-light)]
                bg-[var(--bg-card)]
                p-5
                transition-all
                duration-300
               sm:p-6
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
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

              {/* Number + Label */}
              <div>
                <div
                  className="
                    inline-flex
                   
                   
                   
                    transition-colors
                    duration-300
                  
                  "
                >
                  <span
                    className="
                      text-3xl
                      font-normal
                      tracking-tight
                      text-[var(--text-main)]
                      transition-colors
                      duration-300
                    
                      sm:text-4xl
                    "
                  >
                    {stat.value}
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
