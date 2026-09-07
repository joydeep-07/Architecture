import React from "react";

const Featured = () => {
  const categories = [
    {
      id: 1,
      title: "Office Spaces",
      count: "4000+ properties",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      alt: "Modern white office building facade",
    },
    {
      id: 2,
      title: "Warehouse Spaces",
      count: "1000+ properties",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      alt: "Blue industrial warehouse building",
    },
    {
      id: 3,
      title: "Land Plots",
      count: "2000+ properties",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      alt: "Aerial view of land plots",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Heading & Subtitle */}
        <div className="lg:col-span-4 space-y-4 pt-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Property 
            Catalog
          </h2>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            A wide selection of real estate for your business
          </p>
        </div>

        {/* Right Side: Property Category Cards */}
        <div className="lg:col-span-8 flex flex-col items-end gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {categories.map((item) => (
              <div key={item.id} className="group cursor-pointer space-y-3">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Labels */}
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              aria-label="Previous property"
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next property"
              className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
