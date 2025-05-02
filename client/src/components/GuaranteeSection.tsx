const guarantees = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-accent-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Price Match Guarantee",
    description:
      "We'll beat any competitor's price. No questions asked—just reliable cleaning at the best possible value.",
    badge: "Most Popular",
    featured: true
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-accent-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Closeout Process",
    description:
      "Photo documentation after every visit ensures transparency and completion of all tasks to your satisfaction.",
    badge: null,
    featured: false
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-accent-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Customized Plans",
    description:
      "Cleaning schedules tailored to your business needs, whether that's daily, weekly, or monthly service.",
    badge: null,
    featured: false
  },
];

const testimonials = [
  {
    quote: "PurePoint Cleaning has transformed our office space. Their attention to detail and consistent quality make a real difference for our team and clients. The price match guarantee saved us over 20% compared to our previous service.",
    name: "Sarah Johnson",
    title: "Office Manager",
    company: "Atlanta Tech Solutions",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400"
  },
  {
    quote: "We've worked with multiple cleaning services before finding PurePoint. Their photo documentation process gives us complete peace of mind that our medical facility is properly sanitized and disinfected.",
    name: "Dr. Michael Chen",
    title: "Medical Director",
    company: "Peachtree Family Practice",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400"
  }
];

import { useState } from "react";
import { scrollToSection } from "@/lib/utils";

export default function GuaranteeSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="guarantee" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-3">OUR PROMISES TO YOU</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            Why Choose PurePoint Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our work with guarantees that ensure quality, transparency, and exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index} 
              className={`text-center relative p-8 rounded-xl transition-all duration-300 ${
                guarantee.featured 
                ? "bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 shadow-lg transform hover:-translate-y-2" 
                : "bg-neutral-lightest hover:shadow-md transform hover:-translate-y-1"
              }`}
            >
              {guarantee.badge && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  {guarantee.badge}
                </span>
              )}
              <div className={`w-24 h-24 ${guarantee.featured ? 'bg-secondary/20' : 'bg-accent/20'} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {guarantee.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{guarantee.title}</h3>
              <p className="text-gray-700 font-medium">{guarantee.description}</p>
              
              {guarantee.featured && (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-6 inline-block text-secondary hover:text-secondary-dark font-medium transition-colors duration-300"
                >
                  Learn more →
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-sans mb-2">What Our Clients Say</h3>
            <p className="text-gray-700 font-medium">Don't just take our word for it - here's what businesses like yours think</p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="flex overflow-hidden relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden bg-white rounded-xl p-8 w-full flex-shrink-0 transition-all duration-500 ease-in-out transform shadow-xl ${
                    index === activeTestimonial ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"
                  }`}
                  style={{left: index === activeTestimonial ? 0 : '100%'}}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-primary/10 rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 transform -translate-x-16 translate-y-16 bg-secondary/10 rounded-full"></div>

                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.title}`}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />

                    <div>
                      <svg
                        className="w-12 h-12 text-secondary/30 mb-2"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-2.209 0-4 1.791-4 4v10c0 2.209 1.791 4 4 4h10c2.209 0 4-1.791 4-4v-10c0-2.209-1.791-4-4-4h-10zM2 4v10c0 1.1.9 2 2 2h2v-4c0-3.313 2.687-6 6-6h4v-2c0-1.1-.9-2-2-2h-10c-1.1 0-2 .9-2 2z"></path>
                      </svg>

                      <p className="text-lg italic text-gray-700 mb-4">
                        {testimonial.quote}
                      </p>

                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-gray-700">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial ? "bg-primary" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
          >
            Experience the PurePoint Difference
          </button>
        </div>
      </div>
    </section>
  );
}
