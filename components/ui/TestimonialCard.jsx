// ui/TestimonialCard.jsx
"use client";
import { motion } from "framer-motion";

const TestimonialCard = ({ quote, author, location }) => {
  const variants = {
    hidden: { opacity: 0, x: 50 }, // Slide in from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.8, ease: "easeInOut" },
    }, // Slide out to left
  };

  return (
    <motion.div
      className="relative w-full max-w-xs md:max-w-sm bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-[rgba(0,161,214,0.2)]"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        rotate: 0,
        boxShadow: "0 0 20px rgba(0, 161, 214, 0.6)",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <p className="text-lg italic mb-4">"{quote}"</p>
      <p className="text-base font-semibold">– {author}</p>
      <p className="text-sm text-gray-300">{location}</p>
    </motion.div>
  );
};

export default TestimonialCard;
