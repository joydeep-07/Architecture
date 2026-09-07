import React from "react";

const Hero = () => {
  const stats = [
    { value: "10+", label: "years in the market" },
    { value: "1000+", label: "successful deals" },
    { value: "4000+", label: "properties in database" },
    { value: "95%", label: "satisfied clients" },
  ];

  return (
    <section className="w-full mx-auto px-4 py-8 font-sans">
      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-sm bg-[#9bbbd0] text-white p-8 md:p-14 lg:p-16 flex flex-col justify-center">
        {/* Background Image Overlay with Cutout */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[55%] pointer-events-none">
          <div
            className="w-full h-full relative"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
              alt="Modern commercial building with glass balconies"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1]">
            Real estate
            for <br /> business
          </h1>

          <p className="text-white/90 text-sm sm:text-base font-normal max-w-sm leading-relaxed">
            Lease, sale, and selection of properties from offices to
            warehouses
          </p>

          <div className="pt-2">
            <button
              type="button"
              className="px-7 py-3.5 bg-white text-slate-800 font-semibold text-sm rounded-full shadow-md hover:bg-slate-50 transition-colors duration-200"
            >
              Start collaboration
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section Below Hero */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start px-2">
        {/* Left Side: About Text */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            About us
          </span>

          <h2 className="text-[2vw] font-medium tracking-tight text-slate-900">
            Helping businesses find the right space.
          </h2>

          <p className="text-sm leading-7 text-slate-500 max-w-lg">
            We are an expert commercial real estate agency helping businesses
            find suitable properties for lease or purchase. From selecting the
            right property to providing complete legal support, we handle it
            all.
          </p>
        </div>

        {/* Right Side: Stats */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
          group
          relative
          min-h-[150px]
          rounded-sm
          border border-slate-200
          bg-slate-50
          p-5 sm:p-6
          flex flex-col justify-between
          transition-all duration-300
          hover:bg-white
          hover:border-slate-300
          
        "
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-slate-400">
                  0{index + 1}
                </span>

                <span className="h-2 w-2 rounded-full bg-slate-900 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <span className="block text-4xl sm:text-5xl font-normal tracking-tight text-slate-900">
                  {stat.value}
                </span>

                <span className="mt-2 block text-xs sm:text-sm font-medium text-slate-500">
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
