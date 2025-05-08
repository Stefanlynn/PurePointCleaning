import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40"
    >
      {/* Solid background with gradient */}
      <div className="absolute inset-0 z-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 z-10"></div>
      </div>

      {/* Content Grid - JaniKing inspired layout */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center py-20 relative z-20">
        <div className="text-white">
          <div className="mb-4">
            <span className="bg-secondary text-primary text-sm md:text-base font-bold py-1 px-3 rounded-full inline-block mb-3 uppercase tracking-wider transform -rotate-1 shadow-md">Licensed • Bonded • Insured</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6 drop-shadow-md">
            Professional Commercial Cleaning <span className="text-secondary">You Can Count On</span>
          </h1>
          <div className="border-l-4 border-secondary pl-4 mb-8">
            <p className="text-xl md:text-2xl font-medium">
              With decades of combined experience, our team delivers top-tier service for businesses that expect the best
            </p>
          </div>
          
          {/* Feature boxes - Enhanced with additional details and styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/15 backdrop-blur-sm p-5 rounded-md border border-white/30 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-secondary/20 rounded-full p-3 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">100% Satisfaction</h3>
                  <p className="text-sm text-white/90">Guaranteed On All Services</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-5 rounded-md border border-white/30 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-secondary/20 rounded-full p-3 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Experienced Team</h3>
                  <p className="text-sm text-white/90">Decades of Combined Experience</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-5 rounded-md border border-white/30 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-white/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-secondary/20 rounded-full p-3 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Price Match Guarantee</h3>
                  <p className="text-sm text-white/90">We'll Beat Any Competitor</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center bg-secondary hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
          </div>
        </div>
        
        {/* Right side callout - JaniKing inspired - Visible on both desktop and mobile */}
        <div className="md:block">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-1 border-t-4 border-secondary">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-primary">
                  Expert Commercial Cleaning
                </h2>
                <div className="bg-secondary/20 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              <p className="mb-4 text-gray-700 italic border-l-2 border-primary/30 pl-3 text-sm">
                "With cleaners who bring decades of experience, we believe top-notch talent should care for top-notch customers."
              </p>
              
              <h3 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wider">Our Specialties:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Churches</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Event Spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Public Businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clothing Stores</span>
                </li>
              </ul>
              
              <div className="mt-2 p-4 bg-primary/10 rounded-md border border-primary/20 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <p className="font-bold text-primary">100-Point Inspection</p>
                  <p className="text-sm">Every clean includes our thorough 100-point inspection to ensure unmatched quality and service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Version - More compact */}
          <div className="md:hidden mt-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-5 border-t-4 border-secondary">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-primary">
                  Expert Commercial Cleaning
                </h2>
                <div className="bg-secondary/20 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              <p className="mb-3 text-gray-700 italic border-l-2 border-primary/30 pl-2 text-xs">
                "With decades of experience, we believe top-notch talent should care for top-notch customers."
              </p>
              
              <h3 className="text-primary font-semibold mb-1 text-xs uppercase tracking-wider">Our Specialties:</h3>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Offices</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Churches</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Event Spaces</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Public Businesses</span>
                </div>
              </div>
              
              <div className="p-3 bg-primary/10 rounded-md border border-primary/20 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 bg-secondary/10 rounded-full w-14 h-14 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <p className="font-bold text-primary text-sm">100-Point Inspection</p>
                  <p className="text-xs text-gray-600">Every clean includes our thorough inspection for quality assurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
