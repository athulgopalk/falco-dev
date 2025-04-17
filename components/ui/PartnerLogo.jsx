// components/PartnerLogo.jsx
import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder logo (1x1 gray pixel, base64-encoded)
const placeholderLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const PartnerLogo = ({ logoSrc, alt, index, isInView }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: index % 2 === 0 ? -30 : 30, // Orbit-like rotation
      x: index % 2 === 0 ? -100 : 100, // Slide in from sides
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.3 },
    },
  };

  return (
    <motion.div
      className="relative w-44 h-22 md:w-52 md:h-26 flex items-center justify-center bg-gray-900/50 rounded-xl border border-[rgba(0,161,214,0.2)]"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="relative p-4 transition-all duration-600 hover:shadow-[0_0_25px_rgba(0,161,214,0.6)] rounded-lg overflow-hidden">
        <Image
          src={logoSrc || placeholderLogo}
          alt={alt}
          width={208}
          height={104}
          className="w-full h-full object-cover"
          priority={true}
          onError={() => console.warn(`Failed to load logo: ${alt}`)}
        />
        {/* Neon pulse effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-[rgba(0,161,214,0.6)] opacity-0 "
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
          }}
        />
      </div>
    </motion.div>
  );
};

export default PartnerLogo;

