import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";
import logoImg from "../assets/logo.png";

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
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`} 
      id="navbar"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick("home");
              }}
              className="flex items-center"
            >
              <img src={logoImg} alt="PurePoint Cleaning Logo" className="h-10 mr-2 rounded-md" />
              <div className="text-2xl font-bold">
                <span className="text-primary">Pure</span>
                <span className="text-secondary">Point</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`font-medium transition duration-300 ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
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
        </div>
      </div>
    </header>
  );
}
