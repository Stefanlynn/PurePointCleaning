import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";
import logoImage from "../assets/logo.png";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
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
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Laure@purepointcleaning.com</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium bg-secondary hover:bg-accent-dark px-4 py-1 rounded text-primary font-bold transition-all duration-300"
          >
            Free Quote
          </button>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className={`border-b border-gray-200 ${scrolled ? "py-1" : "py-2"}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Area with Shield logo */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Company Logo */}
              <img 
                src={logoImage}
                alt="PurePoint Cleaning Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain -mt-2 -mb-2" 
              />
              <div className="flex flex-col justify-center">
                <div className="font-bold leading-tight">
                  <span className="text-primary text-lg md:text-2xl">Pure</span>
                  <span className="text-secondary text-lg md:text-2xl">Point</span>
                </div>
                <div className="text-primary font-medium text-sm md:text-xl leading-tight">Cleaning</div>
              </div>
            </div>
            
            {/* Desktop Navigation - Improved visibility */}
            <nav className="hidden md:flex items-center mr-4">
              <div className="flex items-center space-x-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href);
                    }}
                    className={`font-medium px-2.5 py-2 rounded-md transition duration-300 ${
                      activeSection === link.href
                        ? "text-white bg-primary"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              {/* Call to action button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 bg-secondary hover:bg-accent-dark text-primary-foreground px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
              >
                <span>Free Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </nav>
            
            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              {/* Menu Button - Positioned First */}
              <button
                onClick={toggleMobileMenu}
                className="text-primary focus:outline-none mr-3"
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
                    d={mobileMenuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 8h16M4 16h16"}
                  />
                </svg>
              </button>
              
              {/* Quote button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-accent-dark text-primary-foreground px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-300"
              >
                Free Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Horizontal Nav Tabs - directly under logo */}
        <div className="md:hidden w-full mt-1">
          <div className="flex justify-center gap-1 pb-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`whitespace-nowrap font-medium px-1.5 py-0.5 rounded text-xs transition duration-300 ${
                  activeSection === link.href
                    ? "text-white bg-primary"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Expanded Menu Panel */}
      <div
        className={`mobile-menu md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {/* Price Match Banner */}
          <div className="bg-primary/10 rounded-md p-3 flex items-center gap-3 border border-primary/20">
            <div className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-primary font-bold">Price Match Guarantee</h3>
              <p className="text-xs text-gray-600">We'll beat any competitor's price!</p>
            </div>
          </div>
          
          {/* Contact Info - Full Details */}
          <div className="flex justify-center mb-1">
            <a 
              href="mailto:Laure@purepointcleaning.com" 
              className="text-primary font-medium text-sm flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Laure@purepointcleaning.com</span>
            </a>
          </div>
          
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full bg-secondary hover:bg-accent-dark text-primary font-bold px-5 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
