import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";

export default function HeroSection() {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Set video as loaded after a short delay to ensure smooth animation
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <iframe 
            className="w-full h-full object-cover" 
            src="https://www.youtube.com/embed/A6WNV4apkUo?autoplay=1&mute=1&loop=1&playlist=A6WNV4apkUo&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1" 
            title="PurePoint Cleaning Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
        </div>
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 relative z-20 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Let Us Help Your <span className="text-secondary">Business Shine</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Reliable, high-quality commercial cleaning for the Atlanta Metro area
          </p>
        </div>

        {/* Feature Highlights - Horizontally centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center gap-3">
            <div className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white font-medium">Price Match Guarantee</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center gap-3">
            <div className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white font-medium">
              Text <span className="font-bold whitespace-nowrap">FREE QUOTE</span> to <span className="text-secondary font-bold whitespace-nowrap">+1 (470) 233-5603</span>
            </p>
          </div>
        </div>
        
        {/* CTA Buttons - Centered with space between */}
        <div className="flex justify-center gap-4 md:gap-6">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-secondary hover:bg-accent-dark text-primary font-bold py-3 px-6 md:py-4 md:px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get a Free Quote
          </button>
          
          <button
            onClick={() => scrollToSection("services")}
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-md transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
