// components/WhatWeDo.jsx
import Image from "next/image";


// Base64-encoded placeholder image (a 1x1 gray pixel)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

export const WhatWeDo = () => {
  return (
    <div className="w-full bg-transparent py-9 px-9">
      {/* Section 1: Classic Layered Layout with Bigger Images */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-9 mb-1">
        {/* Images */}
        <div className="md:w-3/5 relative h-[90vh]  ">
          <Image
            src="/whyus/whychooseus1.jpg"
            alt="HVAC Solutions by Falco Industries"
            width={400}
            height={300}
            className="absolute top-0 left-10 w-80 h-56 object-cover rounded-lg bg-gray-300 z-10 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
            priority={true}
          />
          <Image
            src="/whyus/whychooseus2.jpg"
            alt="Air Conditioning Sales at Falco Industries"
            width={400}
            height={300}
            className="absolute top-40 left-79 w-96 h-64 object-cover rounded-lg bg-gray-300 z-0 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
            priority={true}
          />
          <Image
            src="/whyus/whychooseus3.jpg"
            alt="Contracting and Installation Services by Falco Industries"
            width={600}
            height={400}
            className="absolute bottom-10 left-0 w-[28rem] h-72 object-cover rounded-lg bg-gray-300 z-5 shadow-lg hover:z-20 transition-all duration-300 hover:scale-105"
            priority={true}
          />
        </div>
        {/* Text */}
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">What We Do?</h2>
          <p className="text-lg text-gray-50 mb-4">
            At Falco Industries, we specialize in delivering high-quality
            refrigeration and air conditioning solutions across Qatar, the UAE,
            and India. From designing and installing advanced HVAC systems to
            providing top-tier maintenance and repair services, we ensure
            comfort, efficiency, and sustainability for both residential and
            commercial clients.
          </p>
          <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400">
            Explore Services
          </button>
        </div>
      </section>

      {/* Section 2: Mirrored Classic Layered Layout with Bigger Images */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-8 px-4 mb-12">
        {/* Images */}
        <div className="md:w-3/5 relative h-[600px]">
          <Image
            src="/whyus/maintainence.jpg"
            alt="Custom HVAC Solutions for Commercial and Residential Clients"
            width={400}
            height={300}
            className="absolute top-0 right-10 w-80 h-56 object-cover rounded-lg bg-gray-300 z-10 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
          />
          <Image
            src="/whyus/commercial.jpg"
            alt="Premium Air Conditioning Units for Sale"
            width={400}
            height={300}
            className="absolute top-40 right-89 w-96 h-64 object-cover rounded-lg bg-gray-300 z-0 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
          />
          <Image
            src={placeholderImage}
            alt="Professional HVAC Installation Services"
            width={600}
            height={400}
            className="absolute bottom-10 right-0 w-[28rem] h-72 object-cover rounded-lg bg-gray-300 z-5 shadow-lg hover:z-20 transition-all duration-300 hover:scale-105"
          />
        </div>
        {/* Text */}
        <div className="md:w-2/5 text-center md:text-right">
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-50 mb-4">
            With years of experience, Falco Industries excels in HVAC solutions,
            air conditioning sales, and contracting & installation. Our
            certified professionals ensure seamless service, adhering to
            international standards, while our maintenance and repair offerings
            keep your systems running smoothly.
          </p>
          <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400">
            Learn More
          </button>
        </div>
      </section>

      {/* Section 3: Classic Layered Layout with Bigger Images */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Images */}
        <div className="md:w-3/5 relative h-[600px]">
          <Image
            src={placeholderImage}
            alt="Energy-Efficient HVAC Systems by Falco Industries"
            width={400}
            height={300}
            className="absolute top-0 left-10 w-80 h-56 object-cover rounded-lg bg-gray-300 z-10 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
          />
          <Image
            src={placeholderImage}
            alt="Top-Quality Air Conditioning Products for All Needs"
            width={400}
            height={300}
            className="absolute top-40 left-88 w-96 h-64 object-cover rounded-lg bg-gray-300 z-0 shadow-md hover:z-20 transition-all duration-300 hover:scale-105"
          />
          <Image
            src={placeholderImage}
            alt="Expert HVAC Contracting and Installation in Qatar, UAE, and India"
            width={600}
            height={400}
            className="absolute bottom-10 left-0 w-[28rem] h-72 object-cover rounded-lg bg-gray-300 z-5 shadow-lg hover:z-20 transition-all duration-300 hover:scale-105"
          />
        </div>
        {/* Text */}
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-50 mb-4">
            Falco Industries is committed to excellence, offering tailored HVAC
            solutions, premium air conditioning products, and expert
            installation services. Our comprehensive maintenance and repair
            services ensure longevity and efficiency, making us the trusted
            choice for cooling solutions.
          </p>
          <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

