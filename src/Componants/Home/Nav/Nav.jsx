import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Home/Nav/Logo.svg";
import bgImg from "../../../assets/Home/Nav/bg-img.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClasses = (path) => {
    const isActive = currentPath === path || currentPath.startsWith(path + "/");

    return `transition duration-300 px-3 py-2 rounded-lg ${
      isActive ? "border border-[#262626] bg-[#141414]" : "hover:bg-[#141414]"
    }`;
  };

  return (
    <div className="bg-[#1A1A1A]">
      {/* Top Banner */}
      <h1
        className="text-center py-6 text-xl md:text-3xl lg:text-4xl bg-cover bg-center text-white px-4 md:px-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        ✨ Discover Your Dream Property with Estatein{" "}
        <span className="underline text-base md:text-xl cursor-pointer">
          Learn More
        </span>
      </h1>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-white">
          <li>
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClasses("/about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/properties" className={getLinkClasses("/properties")}>
              Properties
            </Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClasses("/services")}>
              Services
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <ul className="hidden md:block">
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="md:hidden fixed top-[96px] left-0 w-full z-30 animate-slideDown">
            <ul className="flex flex-col p-6 space-y-4 text-white bg-[#1A1A1A] shadow-lg">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={getLinkClasses("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={getLinkClasses("/about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  onClick={closeMenu}
                  className={getLinkClasses("/properties")}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className={getLinkClasses("/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded text-center hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
