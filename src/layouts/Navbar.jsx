import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-6 lg:px-4 pt-4">
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-100 rounded-sm">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col gap-1">
            <span className="w-4 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5"></span>
            <span className="w-6 h-1 bg-slate-900 rounded-full"></span>
            <span className="w-3 h-1 bg-slate-900 rounded-full transition-all group-hover:w-5"></span>
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About Us
          </a>
          <a href="#catalog" className="hover:text-slate-900 transition-colors">
            Catalog
          </a>
          <a href="#process" className="hover:text-slate-900 transition-colors">
            Process
          </a>
          <a href="#reviews" className="hover:text-slate-900 transition-colors">
            Reviews
          </a>
          <a
            href="#contacts"
            className="hover:text-slate-900 transition-colors"
          >
            Contacts
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 bg-slate-100 rounded-2xl flex flex-col space-y-3 text-sm font-medium text-slate-600">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-900"
          >
            About Us
          </a>
          <a
            href="#catalog"
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-900"
          >
            Catalog
          </a>
          <a
            href="#process"
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-900"
          >
            Process
          </a>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-900"
          >
            Reviews
          </a>
          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-900"
          >
            Contacts
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
