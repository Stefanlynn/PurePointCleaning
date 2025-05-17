import { Link } from "wouter";

export default function FooterSection() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-white">Pure</span>
              <span className="text-secondary">Point</span>
              <span className="text-white font-medium ml-1">Cleaning</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex items-center mb-2 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white">Info@purepointcleaning.com</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white">+1 (470) 233-5603</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 text-center flex justify-between items-center flex-col md:flex-row">
          <p className="text-white text-sm">© 2025 PurePoint Cleaning. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
            <Link href="/faq" className="text-white hover:text-secondary transition duration-300">FAQ</Link>
            <Link href="/privacy-policy" className="text-white hover:text-secondary transition duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white hover:text-secondary transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
