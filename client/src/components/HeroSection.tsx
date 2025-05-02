import { scrollToSection } from "@/lib/utils";
import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center relative z-10">
        {/* Left content side */}
        <div 
          className={`w-full md:w-1/2 text-center md:text-left transition-all duration-700 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Cleaning for Your Business
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0">
            Reliable commercial cleaning services tailored to your needs with our price match guarantee.
          </p>
          
          {/* Price match guarantee callout - minimalist style */}
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg mb-10 shadow-sm inline-block text-left">
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-lg mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl text-gray-900">Price Match Guarantee</p>
                <p className="text-gray-600">We'll beat any competitor's quote</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Request a Quote
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-8 rounded-md border border-gray-200 transition duration-300"
            >
              Our Services
            </button>
          </div>
        </div>
        
        {/* Right image side */}
        <div 
          className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-xl transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1625243288138-8a359668f255?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600"
              alt="Professional office cleaning"
              className="relative z-10 rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Trust indicators - minimalist strip */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gray-50 transition-all duration-700 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Fully Insured",
                description: "Peace of mind guaranteed"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 Emergency Services",
                description: "Always available when needed"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                ),
                title: "100% Satisfaction Guarantee",
                description: "Quality service every time"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}