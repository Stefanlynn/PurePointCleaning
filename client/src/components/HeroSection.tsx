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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Let Us Help Your Business Shine
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Reliable, high-quality commercial cleaning for the Atlanta Metro area
          </p>
          
          {/* Feature boxes - JaniKing style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-md border border-white/20">
              <div className="flex items-center gap-3">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Professional Staff</h3>
                  <p className="text-sm text-white/80">Trained & Background Checked</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-md border border-white/20">
              <div className="flex items-center gap-3">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Price Match Guarantee</h3>
                  <p className="text-sm text-white/80">We'll Beat Any Competitor</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block bg-secondary hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
        
        {/* Right side callout - JaniKing inspired - Visible on both desktop and mobile */}
        <div className="md:block">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-1">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Commercial Cleaning Specialists
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Offices & Business Spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Churches & Event Spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Retail & Commercial Properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized Cleaning Solutions</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-primary/10 rounded-md border border-primary/20">
                <p className="font-bold text-primary">Our Price Match Guarantee</p>
                <p className="text-sm">We'll beat any competitor's price—no questions asked!</p>
              </div>
            </div>
          </div>

          {/* Mobile Version - More compact */}
          <div className="md:hidden mt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-5">
              <h2 className="text-xl font-bold text-primary mb-3">
                Commercial Cleaning Specialists
              </h2>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Offices & Business</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Churches & Events</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Retail Properties</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom Solutions</span>
                </div>
              </div>
              
              <div className="p-3 bg-primary/10 rounded-md border border-primary/20 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-primary text-sm">Price Match Guarantee</p>
                  <p className="text-xs text-gray-600">We'll beat any competitor's price!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
