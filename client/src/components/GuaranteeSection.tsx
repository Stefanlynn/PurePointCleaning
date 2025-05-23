const guarantees = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
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
    priority: true,
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
    priority: false,
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "100-Point Inspection",
    description:
      "We don't just clean—we verify. Every visit ends with a meticulous 100-point inspection to guarantee nothing gets overlooked.",
    priority: false,
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
    priority: false,
  },
];

import { scrollToSection } from "@/lib/utils";

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 pb-10 bg-white relative">
      {/* Price Match Badge - Floating position similar to JaniKing style */}
      <div className="absolute -top-16 right-0 left-0 mx-auto w-64 md:w-80 md:right-20 md:left-auto z-10">
        <div className="bg-secondary text-primary rounded-full transform rotate-6 shadow-xl border-4 border-white">
          <div className="text-center py-6 px-4">
            <div className="text-xl md:text-2xl font-bold">PRICE MATCH</div>
            <div className="font-bold text-sm md:text-base">GUARANTEE</div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At PurePoint Cleaning, we stand behind our work with guarantees that ensure quality, transparency, and value
          </p>
        </div>

        {/* Featured Price Match Card - JaniKing inspired prominence */}
        <div className="mb-12 mx-auto max-w-4xl">
          <div className="bg-primary rounded-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-primary p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14 text-secondary"
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
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Price Match Guarantee</h3>
                </div>
              </div>
              <div className="md:w-2/3 bg-white p-8">
                <div className="h-full flex flex-col justify-center">
                  <p className="text-lg mb-6">
                    <span className="font-bold text-primary">We guarantee to beat any competitor's price.</span> At PurePoint Cleaning, we're so confident in our value that if you find a lower price for comparable commercial cleaning services, we'll not only match it – we'll beat it!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="bg-secondary hover:bg-accent-dark text-primary font-bold py-3 px-6 rounded-md transition duration-300"
                    >
                      Get Your Quote Today
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-md transition duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 md:mb-16">
          {guarantees.slice(1).map((guarantee, index) => (
            <div key={index} className="bg-neutral-lightest rounded-lg shadow-md p-6 flex items-start gap-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                {guarantee.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
