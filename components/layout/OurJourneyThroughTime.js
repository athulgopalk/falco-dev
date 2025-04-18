// components/OurJourneyThroughTime.jsx
"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// Base64-encoded placeholder image (a 1x1 gray pixel)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const milestones = [
  {
    title: "Founded with a Vision",
    description:
      "Started in 2010 with a mission to redefine cooling solutions.",
    imageSrc: "/about/milestone-1.jpg",
  },
  {
    title: "Expanded to Qatar",
    description: "Opened our first office in Doha to serve the Middle East.",
    imageSrc: "/about/milestone-2.jpg",
  },
  {
    title: "Grew to UAE and India",
    description:
      "Expanded operations to Dubai and Mumbai, reaching more clients.",
    imageSrc: "/about/milestone-3.jpg",
  },
  {
    title: "Industry Leader",
    description: "Completed a landmark project in 2023, setting new standards.",
    imageSrc: "/about/milestone-4.jpg",
  },
  {
    title: "Future Innovations",
    description:
      "Pioneering sustainable cooling technologies for the next decade.",
    imageSrc: "/about/milestone-5.jpg",
  },
];

const OurJourneyThroughTime = () => {
  const containerRef = useRef(null);
  const [activeMilestone, setActiveMilestone] = useState(0);

  // Use IntersectionObserver to detect which milestone is in view
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index, 10);
        setActiveMilestone(index);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is in view
    });

    const milestoneElements = containerRef.current?.querySelectorAll("article");
    milestoneElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection]);

  // Calculate progress based on active milestone
  const progress = (activeMilestone / (milestones.length - 1)) * 100;

  // Fade-in animation for milestones
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-black py-12">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Our Journey Through Time
      </h2>

      {/* Milestones Container */}
      <div
        ref={containerRef}
        className="flex flex-col snap-y snap-mandatory overflow-y-auto h-screen"
      >
        {milestones.map((milestone, index) => (
          <article
            key={index}
            data-index={index}
            className="flex-none h-screen snap-start flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-8 py-6"
          >
            <motion.div
              className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-96 md:h-full relative">
                <Image
                  src={milestone.imageSrc}
                  alt={`${milestone.title} - Falco Industries Milestone`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  loading="lazy"
                  className="rounded-lg"
                  onError={() =>
                    console.warn(`Failed to load image for ${milestone.title}`)
                  }
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {milestone.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {milestone.description}
                </p>
              </div>
            </motion.div>

            {/* Progress Bar Below Each Card */}
            <div className="w-full px-4 md:px-8 mt-6">
              <div className="relative w-full h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <motion.div
                  className="absolute h-3 w-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] -top-1"
                  style={{ left: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {milestones.map((_, idx) => (
                  <div
                    key={idx}
                    className={`absolute w-4 h-4 rounded-full -top-[6px] transition-all duration-500 ease-in-out ${
                      activeMilestone >= idx
                        ? "bg-[rgba(0,161,214,0.9)] shadow-[0_0_8px_rgba(0,161,214,0.6)]"
                        : "bg-gray-400"
                    }`}
                    style={{
                      left: `${(idx / (milestones.length - 1)) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurJourneyThroughTime;
