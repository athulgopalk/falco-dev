// components/OurMissionAndValues.jsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Starry background effect using CSS
const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,161,214,0.1)_0%,transparent_70%)] opacity-50" />
      </div>
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const OurMissionAndValues = () => {
  const panelRef = useRef(null);

  // Parallax-like 3D rotation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!panelRef.current) return;
      const { top } = panelRef.current.getBoundingClientRect();
      const rotateX = Math.min(
        Math.max((top - window.innerHeight / 2) / 50, -10),
        10
      );
      panelRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Neon flicker animation for heading
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Panel float-in animation
  const panelVariants = {
    hidden: { opacity: 0, translateZ: -100, rotateX: 20 },
    visible: {
      opacity: 1,
      translateZ: 0,
      rotateX: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative py-16 min-h-screen flex items-center justify-center">
      {/* Starry Background */}
      <StarryBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Heading with Neon Effect */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          style={{
            textShadow:
              "0 0 10px rgba(0,161,214,0.7), 0 0 20px rgba(0,161,214,0.5)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Our Mission and Values
        </motion.h2>

        {/* Holographic Panel */}
        <motion.div
          ref={panelRef}
          className="max-w-md md:max-w-3xl mx-auto bg-black/30 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_20px_rgba(0,161,214,0.3)] border border-[rgba(0,161,214,0.2)] transform-gpu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={panelVariants}
        >
          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-typewriter">
              Our Mission
            </h3>
            <p className="text-base md:text-lg text-gray-300 animate-typewriter-delayed">
              Deliver top-tier HVAC solutions with innovation, reliability, and
              customer focus.
            </p>
          </div>

          {/* Divider */}
          <div className="w-1/2 mx-auto h-0.5 bg-[rgba(0,161,214,0.5)] shadow-[0_0_10px_rgba(0,161,214,0.7)] my-6" />

          {/* Values */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-typewriter">
              Our Values
            </h3>
            <p className="text-base md:text-lg text-gray-300 animate-typewriter-delayed">
              Excellence, innovation, and trust in every project we undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMissionAndValues;
