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
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-4">
            Let Us Help Your Business Shine
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Reliable, high-quality commercial cleaning for the Atlanta Metro area
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Request a Quote
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white animate-bounce"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
