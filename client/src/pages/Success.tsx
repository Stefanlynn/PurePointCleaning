import React, { useEffect } from 'react';
import { Link } from 'wouter';

export default function Success() {
  // Redirect to home after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
        
        <p className="text-gray-600 mb-6">
          Your message has been successfully submitted. We'll get back to you as soon as possible.
        </p>
        
        <p className="text-sm text-gray-500 mb-6">
          You will be redirected to the homepage in 5 seconds, or you can click the button below.
        </p>
        
        <Link href="/">
          <a className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
}