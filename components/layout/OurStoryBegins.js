// components/OurStoryBegins.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Base64-encoded placeholder image (a 1x1 gray pixel)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const OurStoryBegins = () => {
  // Fade-in animation for text
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about/first-office.jpg" // Replace with actual path
          alt="Falco Industries' First Office"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={placeholderImage}
          className="z-0"
          onError={() => console.warn("Failed to load first office image")}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hover:shadow-[0_0_10px_rgba(0,161,214,0.3)] transition-all duration-300">
          Our Story Begins
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
          Discover how Falco Industries became a trusted name in cooling
          solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default OurStoryBegins;
