export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/src/assets/cleaning-crew-highfive.jpg"
              alt="Professional cleaning crew high-fiving"
              className="rounded-lg shadow-lg w-full h-auto"
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
              <p className="font-medium">
                At PurePoint, we don't just clean spaces—we build trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
