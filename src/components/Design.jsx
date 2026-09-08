import React from "react";

const Design = () => {
  return (
    <section className="w-full px-4 md:px-12 py-24 md:py-32">
      <div className="max-w-8xl mx-auto">
        {/* Top label */}
        <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-5 mb-16">
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            01 — Design Philosophy
          </span>

          <span className="text-xs md:text-sm text-[var(--text-secondary)]">
            Architecture / 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative group overflow-hidden">
             

              <img
                className="w-full rounded-sm aspect-[9/12] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://i.pinimg.com/1200x/20/15/54/201554cbd3d269667f75e39920c26a6a.jpg"
                alt="Architectural design"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xs uppercase tracking-[0.2em]">
                  Fig. 01 — Spatial composition
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col">
            <div className=" flex flex-col h-full">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-6">
                  Thoughtful spaces
                </p>

                <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] text-[var(--text-main)] mb-10">
                  Designed around the
                  <br />
                  <span className="text-[var(--text-secondary)]">
                    way you live.
                  </span>
                </h2>

                <p className="text-base md:text-lg leading-8 text-[var(--text-secondary)] text-justify">
                  Great architecture is not simply about creating beautiful
                  structures. It is about understanding how people move, live,
                  interact, and experience a space. Every detail should have a
                  purpose while maintaining a sense of simplicity and balance.
                </p>
              </div>

              {/* Approach + Principle */}
              <div className="mt-auto pt-10 border-t border-[var(--border-light)] grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-3">
                    Approach
                  </span>

                  <h3 className="text-xl md:text-2xl text-[var(--text-main)]">
                    Form follows experience.
                  </h3>
                </div>

                <div>
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
