// // components/Hero.js
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = ["/kerala.JPG", "/commercial.JPG", "/maintainence.JPG"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-teal-900 overflow-hidden">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       {/* Text Content */}
//       <div className="relative z-10 text-center px-6">
//         <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-200 uppercase tracking-wide leading-tight animate-fade-in">
//           Innovative Air Conditioning Solutions by Falco Industries
//         </h1>
//         <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 uppercase mt-4 animate-fade-in-delayed">
//           Cooling Homes and Businesses in India and the Middle East
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//           <Link href="/products">
//             <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up">
//               <span className="relative z-10">Explore Products</span>
//             </button>
//           </Link>
//           {/* <Link href="/quote">
//             <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//               <span className="relative z-10">Get a Quote</span>
//             </button>
//           </Link>
//           <Link href="/contact">
//             <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
//               <span className="relative z-10">Contact Us</span>
//             </button>
//           </Link> */}
//         </div>
//       </div>

//       {/* Carousel Images */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               currentImage === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={src}
//               alt={`Falco Industries Air Conditioning Solutions - ${
//                 index === 0
//                   ? "Residential Cooling in Kerala"
//                   : index === 1
//                   ? "Commercial Cooling in the Middle East"
//                   : "Air Conditioner Maintenance Services"
//               }`}
//               fill
//               className="object-cover object-center w-full h-full"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Carousel Indicators */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentImage === index ? "bg-white scale-125" : "bg-gray-500"
//             }`}
//             aria-label={`Go to image ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const images = ["/kerala.JPG", "/commercial.JPG", "/maintainence.JPG"];

  useEffect(() => {
    setMounted(true); // Ensures hydration is done

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!mounted) return null; // Avoid mismatch during SSR/CSR

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-teal-900 overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white uppercase tracking-wide leading-tight animate-fade-in">
          Innovative Air Conditioning Solutions by Falco Industries
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 uppercase mt-4 animate-fade-in-delayed">
          Cooling Homes and Businesses in Kerala and the Middle East
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/products">
            <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up">
              <span className="relative z-10">Explore Products</span>
            </button>
          </Link>
          <Link href="/quote">
            <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-200">
              <span className="relative z-10">Get a Quote</span>
            </button>
          </Link>
          <Link href="/contact">
            <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400">
              <span className="relative z-10">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              fill={true} // Use fill instead of layout="fill"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
