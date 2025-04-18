
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const images = ["/casate-ac.jpg", "/standingg.jpg ", "/vrf-1.jpg"];

//   useEffect(() => {
//     setMounted(true); 

//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   if (!mounted) return null; 

//   return (
//     <section className="relative h-screen flex items-center  bg-gradient-to-b from-gray-900 to-teal-900 overflow-hidden">
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 px-6 max-w-4xl text-left ml-10">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide leading-tight animate-lux-fade-in">
//           Your Trusted <br />
//           Partner in Refrigeration
//           <br />& Air Conditioning Solutions
//         </h1>

//         <div className="mt-8 flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6">
//           <Link href="/products">
//             <button
//               type="button"
//               className="flex justify-center items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-full bg-gradient-to-br from-gray-900 to-gray-900 text-white transition-all duration-300  relative overflow-hidden group"
//             >
//               <span className="relative z-10">Explore Products</span>
//               <svg
//                 className="w-5 h-5 transition-transform duration-300 transform group-hover:rotate-90 text-white"
//                 viewBox="0 0 16 19"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                   className="fill-white"
//                 />
//               </svg>

//               {/* Gloss overlay */}
//             </button>
//           </Link>

//           <Link href="/contact">
//             <button className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400">
//               <span className="relative z-10">Contact Us</span>
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000  ${
//               currentImage === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={src}
//               alt={`Image ${index}`}
//               fill={true} 
//               className="object-cover object-center brightness-75"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentImage === index ? "bg-white scale-125" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Memoize images array to prevent recreation
  const images = useMemo(
    () => [
      { src: "/casate-ac.jpg", alt: "Cassette Air Conditioner" },
      { src: "/standingg.jpg", alt: "Standing Air Conditioner" },
      { src: "/vrf-1.jpg", alt: "VRF Air Conditioning System" },
    ],
    []
  );

  // Set up carousel interval
  const handleNextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(handleNextImage, 5000);
    return () => clearInterval(interval);
  }, [handleNextImage]);

  if (!mounted) return null;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Refrigeration & Air Conditioning Solutions</title>
        <meta
          name="description"
          content="Your trusted partner for refrigeration and air conditioning solutions. Explore our products and contact us today."
        />
        <meta
          name="keywords"
          content="refrigeration, air conditioning, HVAC, cooling solutions"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        className="relative h-screen flex items-center bg-gradient-to-b from-gray-900 to-teal-900 overflow-hidden"
        aria-label="Hero section with carousel"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl text-left ml-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide leading-tight animate-lux-fade-in">
            Your Trusted <br />
            Partner in Refrigeration
            <br />& Air Conditioning Solutions
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/products">
              <button
                type="button"
                className="flex justify-center items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-full bg-gradient-to-br from-gray-900 to-gray-900 text-white transition-all duration-300 relative overflow-hidden group"
                aria-label="Explore our products"
              >
                <span className="relative z-10">Explore Products</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 transform group-hover:rotate-90 text-white"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/contact">
              <button
                className="glossy-button bg-gradient-to-r from-gray-900 to-gray-900 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-up delay-400"
                aria-label="Contact us"
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={currentImage !== index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                className="object-cover object-center brightness-75"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={currentImage === index}
              role="tab"
            />
          ))}
        </div>
      </section>
    </>
  );
}
