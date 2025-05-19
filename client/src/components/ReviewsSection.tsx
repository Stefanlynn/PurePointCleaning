import React, { useState, useEffect } from "react";

type Review = {
  name: string;
  company: string;
  review: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    company: "Atlanta Financial Partners",
    review: "PurePoint Cleaning has transformed our office environment. Their attention to detail is unmatched, and our team has noticed a significant difference in cleanliness and organization.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    company: "Tech Innovations Inc.",
    review: "We've tried several cleaning services, but none compare to PurePoint. Their price match guarantee saved us money, and the quality exceeded our expectations. Highly recommend!",
    rating: 5
  },
  {
    name: "Rebecca Williams",
    company: "Piedmont Medical Group",
    review: "As a medical facility, sanitization is critical. PurePoint understands our unique needs and consistently delivers exceptional results. Their 100-point inspection gives us confidence that no detail is overlooked.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Cumming Law Associates",
    review: "Our law firm demands professionalism and discretion. PurePoint delivers both, along with spotless offices that impress our clients. Their flexibility with our late-hour scheduling needs is invaluable.",
    rating: 5
  },
  {
    name: "Lisa Montgomery",
    company: "Montgomery Real Estate",
    review: "PurePoint has been cleaning our offices for over a year now. Their reliability and consistency are what keep us coming back. Our properties always look immaculate for client showings.",
    rating: 5
  },
  {
    name: "James Wilson",
    company: "Roswell Community Church",
    review: "Our church requires special attention before weekend services. PurePoint has been a blessing with their thoroughness and respect for our space. The photo documentation gives us peace of mind.",
    rating: 5
  },
  {
    name: "Tanisha Brooks",
    company: "Alpharetta Wellness Center",
    review: "PurePoint Cleaning understands that cleanliness is essential to our wellness center's mission. Their eco-friendly options align perfectly with our values, and their service is consistently excellent.",
    rating: 5
  }
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance the testimonials every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from businesses throughout Atlanta who trust PurePoint Cleaning
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="min-w-full p-4"
                >
                  <div className="bg-neutral-lightest rounded-lg shadow-md p-8 border-l-4 border-secondary relative">
                    {/* Quote icon */}
                    <div className="absolute -top-5 -left-5 bg-white p-3 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="mb-6 text-gray-700 italic text-lg">"{review.review}"</p>
                    
                    {/* Client Info */}
                    <div>
                      <h3 className="font-bold text-primary text-lg">{review.name}</h3>
                      <p className="text-gray-600">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={() => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)}
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}