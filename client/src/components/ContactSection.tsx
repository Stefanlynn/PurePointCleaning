import { useContactForm } from "@/hooks/use-contact-form";

export default function ContactSection() {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-primary">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600"
              alt="Professional cleaning team"
              className="w-full h-full object-cover"
              width="800"
              height="600"
            />
          </div>

          <div className="lg:w-1/2">
            <form
              id="contact-form"
              className="bg-white rounded-lg shadow-lg p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="fullName" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="companyName" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Acme Inc."
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label 
                  htmlFor="serviceType" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  What type of cleaning services are you looking for?
                </label>
                <input
                  type="text"
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Office cleaning, floor care, etc."
                  required
                />
              </div>

              <div className="mb-6">
                <label 
                  htmlFor="contactMethod" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred contact method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <div className="mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us more about your cleaning needs..."
                ></textarea>
              </div>

              <div>
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
