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
            Get a Free Quote Today
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
                <span>Get a Free Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </nav>
            
            {/* Mobile Navigation - Horizontal Scrollable Tabs */}
            <div className="md:hidden flex items-center">
              {/* Mobile Navigation Button - Always visible for expanded menu */}
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
                      : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
              
              {/* Quote button always visible on mobile too */}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-accent-dark text-primary-foreground px-3 py-1.5 rounded-md font-medium text-sm transition-all duration-300"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Horizontal Nav Tabs - directly under logo */}
        <div className="md:hidden w-full overflow-x-auto scrollbar-hide mt-2 px-2">
          <div className="flex space-x-1 pb-2 min-w-max px-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`whitespace-nowrap font-medium px-3 py-1.5 rounded-md text-sm transition duration-300 ${
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
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {/* Contact info shown in expanded menu */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(404) 555-0123</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">info@purepointcleaning.com</span>
            </div>
          </div>
          
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
          
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full bg-secondary hover:bg-accent-dark text-primary font-bold px-5 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Get Your Free Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
