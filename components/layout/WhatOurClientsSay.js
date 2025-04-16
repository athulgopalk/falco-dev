
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import TestimonialCard from "../ui/TestimonialCard";

// Testimonial data
const testimonials = [
  {
    quote:
      "Falco Industries installed our office AC system, and it’s been flawless! Great service!",
    author: "Ahmed Al-Mansoori",
    location: "Doha",
  },
  {
    quote:
      "Their maintenance team is quick and professional. Highly recommend!",
    author: "Priya Sharma",
    location: "Mumbai",
  },
  {
    quote:
      "The HVAC solutions provided by Falco are top-notch. Exceptional quality!",
    author: "James Carter",
    location: "Dubai",
  },
  {
    quote:
      "Falco’s team delivered beyond our expectations. Highly efficient service!",
    author: "Anita Desai",
    location: "Delhi",
  },
  {
    quote:
      "Their professionalism and expertise make them our go-to for AC solutions.",
    author: "Omar Khalid",
    location: "Abu Dhabi",
  },
  {
    quote:
      "Outstanding installation and support. Falco is the best in the business!",
    author: "Sofia Mendes",
    location: "Bangalore",
  },
];

// Pre-defined particle styles to avoid hydration mismatch
const particleStylesData = [
  { width: 5.1, height: 3.3, left: 32.2, delay: 7.8 },
  { width: 3.7, height: 3.1, left: 11.3, delay: 9.2 },
  { width: 3.4, height: 4.2, left: 52.8, delay: 0.8 },
  { width: 2.9, height: 4.3, left: 37.4, delay: 4.5 },
  { width: 5.6, height: 3.6, left: 28.9, delay: 6.8 },
  { width: 5.1, height: 5.8, left: 53.1, delay: 3.5 },
  { width: 5.8, height: 5.8, left: 89.1, delay: 1.1 },
  { width: 3.6, height: 5.1, left: 40.6, delay: 5.7 },
  { width: 4.9, height: 2.5, left: 71.5, delay: 0.6 },
  { width: 4.3, height: 4.3, left: 83.1, delay: 6.2 },
];

// Pulsating grid background CSS
const gridStyles = `
  .grid-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background: radial-gradient(circle at center, rgba(0, 161, 214, 0.15) 0%, transparent 70%);
  }
  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 161, 214, 0.1),
      rgba(0, 161, 214, 0.1) 2px,
      transparent 2px,
      transparent 60px
    );
    animation: gridPulse 10s infinite ease-in-out;
    opacity: 0.2;
  }
  @keyframes gridPulse {
    0% { transform: translate(0, 0); opacity: 0.2; }
    50% { transform: translate(10px, -10px); opacity: 0.3; }
    100% { transform: translate(0, 0); opacity: 0.2; }
  }
`;

const WhatOurClientsSay = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const cardsPerGroup = 3;

  // Cycle through groups every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerGroup)
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Get current group of testimonials
  const currentTestimonials = testimonials.slice(
    currentGroup * cardsPerGroup,
    (currentGroup + 1) * cardsPerGroup
  );

  // Generate static particles
  const particles = particleStylesData.map((style, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: `${style.width}px`,
        height: `${style.height}px`,
        left: `${style.left}%`,
        animationDelay: `${style.delay}s`,
      }}
    />
  ));

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden">
      {/* Grid Background */}
      <style>{gridStyles}</style>
      <div className="grid-background">
        <div className="grid" />
      </div>

      <section className="px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>
        <AnimatePresence mode="wait">
          <div
            key={currentGroup}
            className="flex flex-col md:flex-row justify-center gap-6 md:gap-8"
          >
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default WhatOurClientsSay;
