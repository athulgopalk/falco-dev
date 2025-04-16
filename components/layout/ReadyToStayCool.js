// components/ReadyToStayCool.jsx
"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Placeholder background image (1x1 gray pixel, base64-encoded)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Pulsating radial glow CSS
const radialStyles = `
  .radial-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%);
    
    animation: pulse 6s infinite ease-in-out;
    z-index: 1;
    opacity: 0.2;
  }
  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  }
`;

const ReadyToStayCool = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parallax zoom effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Animation variants for text and button
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: i * 0.3 },
    }),
    flicker: {
      opacity: [1, 0.8, 1, 0.9, 1],
      textShadow: [
        "0 0 5px rgba(0, 161, 214, 0.6)",
        "0 0 10px rgba(0, 161, 214, 0.8)",
        "0 0 5px rgba(0, 161, 214, 0.6)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.9 },
    },
    hover: {
      y: -5,
     
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full bg-black py-16 relative overflow-hidden" ref={ref}>
      {/* Background Image with Parallax Zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <Image
          src="/images/cool-room.jpg" // Replace with actual image path
          alt="Cool, comfortable room"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          priority={true}
          placeholder="blur"
          blurDataURL={placeholderImage}
          onError={() => console.warn("Failed to load background image")}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80 z-1" />
        {/* Radial Glow */}
        <style>{radialStyles}</style>
        <div className="radial-glow" />
      </motion.div>

      {/* Content */}
      <section className="relative z-10 text-center px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? ["visible", "flicker"] : "hidden"}
          custom={0}
        >
          Ready to Stay Cool?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-50 mb-8 max-w-xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          Let’s find the perfect cooling solution for your home or business.
        </motion.p>
        <motion.div
          className="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide border border-[rgba(0,161,214,0.3)]"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
        >
          <Link href="/contact">Contact Us</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ReadyToStayCool;
