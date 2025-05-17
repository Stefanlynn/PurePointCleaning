import { cleaningCrewImage } from '../assets/index';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg z-10"></div>
            <img
              src={cleaningCrewImage}
              alt="Professional cleaning crew high-fiving"
              className="rounded-lg shadow-lg w-full h-auto relative"
              width="800"
              height="600"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6 text-primary">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                PurePoint Cleaning is a locally owned commercial cleaning company serving small and medium-sized businesses across the Atlanta Metro area. We deliver high-quality, reliable cleaning services with integrity, professionalism, and a commitment to excellence.
              </p>
              <p>
                Our price match guarantee means we'll beat any competitor's price—no questions asked. And our unique closeout process ensures every job is completed thoroughly, with photo documentation of each room after every visit.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-primary mb-3">Decades of Experience. Elite-Level Service.</h3>
                <p className="text-lg">
                  Our team brings decades of industry experience and delivers top-tier service for clients who expect nothing less than excellence.
                </p>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-5 border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="text-secondary mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Trusted Professionals</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-primary/5 rounded-md p-3">
                  <span className="font-bold text-sm">Licensed</span>
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-md p-3">
                  <span className="font-bold text-sm">Insured</span>
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-md p-3">
                  <span className="font-bold text-sm">Bonded</span>
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
