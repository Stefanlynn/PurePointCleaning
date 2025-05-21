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
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      >
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <iframe 
                className="absolute w-[400%] md:w-[120%] h-full md:h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 md:-translate-x-1/2"
                src="https://www.youtube.com/embed/A6WNV4apkUo?autoplay=1&mute=1&loop=1&playlist=A6WNV4apkUo&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                title="Atlanta City Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content Layout Container */}
        <div className="container mx-auto px-4 relative z-20 max-w-6xl">
          {/* Two-column layout for desktop */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main hero content - takes 3/5 on desktop, full on mobile */}
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left mb-8 md:mb-12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Let Us Help Your <span className="text-secondary">Business Shine</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Reliable, high-quality commercial cleaning for the Atlanta Metro area
                </p>
              </div>

              {/* Feature Highlights - Horizontally centered */}
              <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6 mb-12">
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
              <div className="flex justify-center lg:justify-start gap-4 md:gap-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-secondary hover:bg-accent-dark text-primary font-bold py-3 px-6 md:py-4 md:px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Why Us
                </button>
                
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-md transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Our Services
                </button>
              </div>
            </div>
            
            {/* Contact card - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block lg:col-span-2 relative z-20">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                  Request a Free Quote
                </h2>
                
                <form
                  id="hero-contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/success"
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <label 
                        htmlFor="heroFullName" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="heroFullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="heroCompanyName" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="heroCompanyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Acme Inc."
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label 
                          htmlFor="heroEmail" 
                          className="block text-gray-700 font-medium mb-1 text-sm"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          id="heroEmail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="you@company.com"
                          required
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="heroPhone" 
                          className="block text-gray-700 font-medium mb-1 text-sm"
                        >
                          Phone*
                        </label>
                        <input
                          type="tel"
                          id="heroPhone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="heroServiceType" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Service Needed*
                      </label>
                      <input
                        type="text"
                        id="heroServiceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Office cleaning, floor care, etc."
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Request a Quote"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Contact Card - only visible on mobile */}
      <section className="bg-white py-8 lg:hidden relative">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                  Schedule A Service
                </h2>
                
                <form
                  id="mobile-contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/success"
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label 
                        htmlFor="mobileFullName" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="mobileFullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
    
                    <div>
                      <label 
                        htmlFor="mobileCompanyName" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="mobileCompanyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Acme Inc."
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label 
                          htmlFor="mobileEmail" 
                          className="block text-gray-700 font-medium mb-1 text-sm"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          id="mobileEmail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
    
                      <div>
                        <label 
                          htmlFor="mobilePhone" 
                          className="block text-gray-700 font-medium mb-1 text-sm"
                        >
                          Phone*
                        </label>
                        <input
                          type="tel"
                          id="mobilePhone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>
    
                    <div>
                      <label 
                        htmlFor="mobileServiceType" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        What type of cleaning services are you looking for?*
                      </label>
                      <input
                        type="text"
                        id="mobileServiceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Office cleaning, floor care, etc."
                        required
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="mobileContactMethod" 
                        className="block text-gray-700 font-medium mb-1 text-sm"
                      >
                        Preferred contact method*
                      </label>
                      <select
                        id="mobileContactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Please select...</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                  </div>
    
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Request a Quote"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}