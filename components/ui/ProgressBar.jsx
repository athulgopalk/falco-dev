// components/ProgressBar.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ sectionRefs, containerRef }) => {
  const [progress, setProgress] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Get the container's position and height
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      const containerBottom = containerTop + containerHeight;

      // Calculate scroll position relative to the container
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const relativeScroll = Math.max(0, scrollY - containerTop);
      const progressPercent = (relativeScroll / containerHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progressPercent)));

      // Determine active checkpoint based on section visibility
      let active = 0;
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop =
            ref.current.getBoundingClientRect().top + window.scrollY;
          const relativeTop = sectionTop - containerTop;
          if (
            relativeTop <= containerHeight / 2 &&
            scrollY >= containerTop &&
            scrollY <= containerBottom
          ) {
            active = index;
          }
        }
      });
      setActiveCheckpoint(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, containerRef]);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 hidden lg:block z-50">
      <div className="relative w-1 h-40 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        {/* Progress Indicator */}
        <motion.div
          className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] -left-1"
          style={{ top: `${progress}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        {/* Checkpoints */}
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`absolute w-4 h-4 rounded-full -left-[6px] transition-all duration-300 ${
              activeCheckpoint >= index
                ? "bg-[rgba(0,161,214,0.9)] shadow-[0_0_8px_rgba(0,161,214,0.6)]"
                : "bg-gray-400"
            }`}
            style={{ top: `${index * 50 + 10}%` }} // Evenly spaced (10%, 60%, 110%)
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
