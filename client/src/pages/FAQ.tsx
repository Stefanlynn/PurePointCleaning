import { useEffect } from "react";
import { Link } from "wouter";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Do you offer a price match guarantee?",
      answer: "Yes. We'll beat any competitor's price—no questions asked."
    },
    {
      question: "Do you bring your own supplies and equipment?",
      answer: "Yes, we provide all the necessary cleaning supplies, including eco-friendly options when requested."
    },
    {
      question: "How does your closeout process work?",
      answer: "After each visit, we document the work with photos of every room to ensure nothing was missed."
    },
    {
      question: "Can I customize my cleaning schedule?",
      answer: "Absolutely! We offer flexible scheduling tailored to your business needs."
    },
    {
      question: "What types of businesses do you serve?",
      answer: "We clean everything from offices and churches to retail stores and event spaces."
    },
    {
      question: "Are you insured?",
      answer: "Yes, PurePoint Cleaning is fully licensed and insured for your peace of mind."
    }
  ];

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

        <h1 className="text-3xl font-bold text-primary mb-10">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h2 className="text-xl font-semibold text-primary mb-3">{index + 1}. {faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}