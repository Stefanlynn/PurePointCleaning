import { useEffect } from "react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy for PurePoint Cleaning</h1>
        <p className="text-gray-600 mb-8">Effective Date: May 2, 2025</p>

        <div className="prose max-w-none">
          <p className="mb-6">
            At PurePoint Cleaning, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website or contact us for services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Information We Collect</h2>
          <p className="mb-4">We may collect personal information such as:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Any details you provide through our contact or quote request form</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">How We Use Your Information</h2>
          <p className="mb-4">Your information is used solely to:</p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Respond to service inquiries</li>
            <li>Provide quotes</li>
            <li>Schedule cleanings</li>
            <li>Improve customer experience</li>
          </ul>
          <p className="mb-6">We do not sell, trade, or rent your information to third parties.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Cookies & Analytics</h2>
          <p className="mb-6">
            Our website may use cookies or similar technologies to improve your browsing experience and collect anonymous analytics.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Data Security</h2>
          <p className="mb-6">
            We take reasonable steps to protect your data, but no online system is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-primary">Your Rights</h2>
          <p className="mb-12">
            You may request that we delete your personal information by contacting us at: Laure@purepointcleaning.com
          </p>
        </div>
      </div>
    </div>
  );
}