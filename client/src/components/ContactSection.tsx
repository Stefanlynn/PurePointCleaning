import { useContactForm } from "@/hooks/use-contact-form";

export default function ContactSection() {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral-lightest to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-3">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form and we'll get back to you within 24 hours with a custom quote
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-6xl mx-auto">
          <div className="lg:w-5/12 rounded-2xl overflow-hidden shadow-xl relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600"
              alt="Professional cleaning team"
              className="w-full h-full object-cover"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose PurePoint</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Price match guarantee</span>
                </li>
                <li className="flex items-center text-white gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free on-site estimates</span>
                </li>
                <li className="flex items-center text-white gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-center text-white gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Eco-friendly cleaning options</span>
                </li>
                <li className="flex items-center text-white gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fully insured and bonded cleaners</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h3>
              <form
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="fullName" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="companyName" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Acme Inc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="serviceType" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    What type of cleaning services are you looking for? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Office cleaning, floor care, etc."
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contactMethod" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Preferred contact method <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Tell us more about your cleaning needs..."
                  ></textarea>
                </div>

                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-lg w-full">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-700">
                        By submitting this form, you'll receive a free, no-obligation quote. Your information is secure and will never be shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-md transition duration-300 shadow-lg ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "transform hover:-translate-y-1 hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Request a Free Quote →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
