import { useEffect } from "react";
import { Link } from "wouter";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <button className="mb-8 flex items-center text-primary hover:text-secondary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>
        </Link>

        <h1 className="text-3xl font-bold text-primary mb-6">Terms of Service for PurePoint Cleaning</h1>
        <p className="text-gray-600 mb-8">Effective Date: May 2, 2025</p>

        <div className="prose max-w-none">
          <p className="mb-6">
            By using this website or hiring PurePoint Cleaning for services, you agree to the following terms:
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">1. Services</h2>
          <p className="mb-6">
            PurePoint Cleaning provides commercial cleaning services to businesses in the Atlanta Metro area. Service details, pricing, and scheduling are agreed upon prior to commencement.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">2. Quotes & Payment</h2>
          <p className="mb-6">
            Quote requests are free. Pricing will be finalized upon evaluation of your cleaning needs. Payment terms are outlined in your service agreement.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">3. Scheduling & Cancellations</h2>
          <p className="mb-6">
            We ask for at least 24 hours' notice for cancellations. Rescheduling can be arranged at no extra charge if communicated within that timeframe.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">4. Guarantee</h2>
          <p className="mb-6">
            We offer a price match guarantee and a documented closeout process. If you are not satisfied with any part of the service, please notify us within 24 hours for resolution.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">5. Website Use</h2>
          <p className="mb-12">
            This site and its content are the property of PurePoint Cleaning. You may not reproduce or reuse materials without written permission.
          </p>
        </div>
      </div>
    </div>
  );
}