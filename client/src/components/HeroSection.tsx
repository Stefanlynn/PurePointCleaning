import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1623861397340-903fd08650ec?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=1080')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-4">
            Let Us Help Your Business Shine
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Reliable, high-quality commercial cleaning for the Atlanta Metro area
          </p>
          
          {/* Price match guarantee callout */}
          <div className="bg-white text-primary p-5 rounded-lg mb-8 shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex items-center">
              <div className="bg-secondary/20 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl text-secondary">Price Match Guarantee</p>
                <p className="text-gray-800 text-lg">We'll beat any competitor's price. No questions asked!</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Request a Quote
            </button>
            <button
              onClick={() => scrollToSection("guarantee")}
              className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-4 px-8 rounded-md transition duration-300 border border-white/30 hover:border-white/40"
            >
              Our Guarantees
            </button>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-5xl px-4">
        <div className="bg-black/70 backdrop-blur-sm p-5 rounded-lg flex justify-center items-center gap-8 flex-wrap">
          <div className="text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-medium">Fully Insured</span>
          </div>
          <div className="text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium">24/7 Emergency Services</span>
          </div>
          <div className="text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <span className="font-medium">100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}