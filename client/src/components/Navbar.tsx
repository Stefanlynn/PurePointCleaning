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
        scrolled ? "shadow-sm border-b border-gray-100" : ""
      }`} 
      id="navbar"
    >
      <div className="container mx-auto px-6">
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
              <img src={logoImg} alt="PurePoint Cleaning Logo" className="h-8 mr-3 rounded-md" />
              <div className="text-xl font-medium">
                <span className="text-gray-900">Pure</span>
                <span className="text-primary">Point</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`text-sm font-medium transition duration-300 ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Contact button for desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavLinkClick("contact")}
              className="bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-5 rounded-md transition duration-300"
            >
              Get a Quote
            </button>
          </div>
          
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
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu md:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
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
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNavLinkClick("contact")}
            className="w-full bg-gray-50 hover:bg-gray-100 text-primary font-medium py-3 px-4 rounded-md transition duration-300 mt-4 text-center"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
