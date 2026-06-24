import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "resume", "education", "skills", "projects", "experience", "leadership", "certifications", "github", "contact"];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Leadership", href: "#leadership" },
    { name: "Certifications", href: "#certifications" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl sm:text-2xl font-extrabold tracking-wider text-primary font-display uppercase">
              DUNDI KAKARALA<span className="text-accent font-black">.</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1) === "hero" ? "home" : link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all duration-200 shadow-xs cursor-pointer ml-2"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun className="w-4 h-4 text-amber-500" /> : <FiMoon className="w-4 h-4 text-primary" />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun className="w-4 h-4 text-amber-500" /> : <FiMoon className="w-4 h-4 text-primary" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
              aria-label="Open menu"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 border-l border-slate-200/50 dark:border-slate-800/50 z-40 transform transition-transform duration-300 xl:hidden shadow-2xl pt-20 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1) === "hero" ? "home" : link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Overlay click to close mobile drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-xs z-30 xl:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
