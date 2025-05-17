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
      className="relative min-h-screen flex flex-col justify-center pt-32 md:pt-40"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
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

      {/* Content Grid with Form */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center py-12 relative z-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Let Us Help Your Business Shine
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Reliable, high-quality commercial cleaning for the Atlanta Metro area
          </p>
          
          {/* Feature boxes in 2-column layout */}
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
          
          {/* Text Message CTA */}
          <div className="bg-white/10 backdrop-blur-sm py-3 px-4 rounded-md border border-secondary/30 text-center md:text-left mb-8">
            <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-secondary">Quick Quote by Text</span>
            </div>
            <p className="text-sm text-white">
              Get a free quote instantly — just text <span className="font-bold">'FREE QUOTE'</span> to <span className="font-bold text-secondary">+1 (470) 233-5603</span>
            </p>
          </div>
          
          {/* CTA Button - Now below text message info */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block bg-secondary hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
        
        {/* Right side Contact Form - Replacing the white card */}
        <div className="md:block">
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    What type of cleaning services are you looking for?*
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
                
                <div>
                  <label 
                    htmlFor="heroContactMethod" 
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Preferred contact method*
                  </label>
                  <select
                    id="heroContactMethod"
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
    </section>
  );
}
