import React from "react";
import { Building2, Workflow, Star, Mail } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    {
      label: "Catalog",
      href: "#catalog",
      icon: Building2,
    },
    {
      label: "Process",
      href: "#process",
      icon: Workflow,
    },
    {
      label: "Reviews",
      href: "#reviews",
      icon: Star,
    },
    {
      label: "Contacts",
      href: "#contacts",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="w-full mx-auto px-4 sm:px-6 lg:px-4 pt-4">
        <nav className="flex items-center justify-between px-4 py-4 bg-slate-100 rounded-sm">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col gap-1">
              <span className="w-4 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5" />
              <span className="w-6 h-1 bg-slate-900 rounded-full" />
              <span className="w-3 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5" />
            </div>

            <div className="leading-tight">
              <span className="block font-medium text-slate-900 text-lg tracking-tight">
                Architecture
              </span>

              <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                Commercial Real Estate
              </span>
            </div>
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Login */}
            <button
              type="button"
              className="
                inline-flex items-center justify-center
                h-9 px-4 sm:px-5
                rounded-sm
                bg-[var(--accent-primary)]
                text-[var(--bg-main)]
                border border-[var(--accent-primary)]
                text-[10px] sm:text-[11px]
                font-semibold uppercase
                tracking-[0.14em]
                transition-all duration-300
                hover:bg-transparent
                hover:text-[var(--accent-primary)]
                active:scale-95
              "
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav
          className="
            flex items-center justify-around
            bg-[var(--bg-main)]
            border-t border-[var(--border-light)]
            px-2 py-2
            shadow-xl
          "
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                className="
                  flex flex-1 flex-col
                  items-center justify-center
                  gap-1 py-2
                  text-slate-500
                  hover:text-slate-900
                  active:text-slate-900
                  transition-colors
                "
              >
                <Icon size={19} strokeWidth={1.7} />

                <span className="text-[9px] font-medium uppercase tracking-wider">
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
