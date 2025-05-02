import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "services", label: "Services" },
  { href: "industries", label: "Industries" },
  { href: "guarantee", label: "Why Us" },
  { href: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md bg-white" : "py-4 bg-white bg-opacity-95"
      }`} 
      id="navbar"
    >
      {/* Top bar with quote button - JaniKing style */}
      <div className="bg-primary text-white py-1 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:underline flex items-center gap-1"
          >
            <span>Get a Free Quote</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">Pure</span>
              <span className="text-secondary">Point</span>
              <span className="text-primary font-light ml-1">Cleaning</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`font-medium px-4 py-2 transition duration-300 ${
                  activeSection === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Call to action button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-secondary hover:bg-accent-dark text-primary-foreground px-5 py-2 rounded font-medium transition-all duration-300"
            >
              Get a Quote
            </button>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu md:hidden bg-white shadow-lg absolute w-full transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "transform-none" : "transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className={`block font-medium py-2 transition duration-300 ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-secondary hover:bg-accent-dark text-primary-foreground px-5 py-2 rounded font-medium transition-all duration-300"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
