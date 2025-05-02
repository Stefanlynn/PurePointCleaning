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
        scrolled ? "shadow-md bg-white" : "bg-white bg-opacity-98"
      }`} 
      id="navbar"
    >
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(404) 555-0123</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">info@purepointcleaning.com</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium bg-secondary hover:bg-accent-dark px-4 py-1 rounded text-primary font-bold transition-all duration-300"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className={`border-b border-gray-200 ${scrolled ? "py-2" : "py-3"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Area with SVG logo */}
            <div className="flex items-center gap-3">
              {/* SVG Logo */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-white" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 7h16M4 12h16M4 17h12" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M8 20.01l.01-.011M12 20.01l.01-.011M16 20.01l.01-.011" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M12 4v2" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold leading-tight">
                  <span className="text-primary text-xl">Pure</span>
                  <span className="text-secondary text-xl">Point</span>
                </div>
                <div className="text-primary font-medium text-sm leading-tight">Cleaning Services</div>
              </div>
            </div>
            
            {/* Desktop Navigation - Improved visibility */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className={`font-medium px-3 py-2 rounded-md transition duration-300 ${
                    activeSection === link.href
                      ? "text-white bg-primary"
                      : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Call to action button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-2 bg-secondary hover:bg-accent-dark text-primary-foreground px-5 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu md:hidden bg-white shadow-lg absolute w-full transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "transform-none" : "transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className={`block font-medium py-2 px-4 rounded transition duration-300 ${
                activeSection === link.href
                  ? "text-white bg-primary"
                  : "text-gray-700 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="flex items-center gap-2 py-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(404) 555-0123</span>
            </div>
            
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 bg-secondary hover:bg-accent-dark text-primary font-bold px-5 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
