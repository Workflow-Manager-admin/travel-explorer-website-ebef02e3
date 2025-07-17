import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Responsive top navigation bar with ETA logo (italics) and nav links for main pages.
 * Fixed at top for accessibility. Color palette matches brand.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Upcoming Adventures", to: "/upcoming-adventures" },
    { label: "Design Your Adventure", to: "/design-your-adventure" },
    { label: "Past Adventures", to: "/past-adventures" },
    { label: "Coaching & Support", to: "/coaching-support" },
    { label: "About Us", to: "/about" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <nav className="bg-white dark:bg-primary px-4 py-4 border-b border-gray-200 dark:border-secondary w-full z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-primary dark:text-accent font-logo italic text-3xl font-bold tracking-wide"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          ETA
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden ml-4 p-2 focus:outline-none text-primary dark:text-accent"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            width={28}
            height={28}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="block"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
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
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-accent dark:bg-accent dark:text-primary"
                    : "text-primary dark:text-accent hover:bg-accent/20 dark:hover:bg-accent/10"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile slide-down navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-primary px-2 pt-2 pb-3 flex flex-col gap-1 border-b border-accent">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded text-base font-medium ${
                  isActive
                    ? "bg-secondary text-accent dark:bg-accent dark:text-primary"
                    : "text-primary dark:text-accent hover:bg-secondary/20"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
