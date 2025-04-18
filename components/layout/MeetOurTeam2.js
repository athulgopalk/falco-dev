// components/MeetOurTeam.jsx
"use client";
import { motion } from "framer-motion";
import TeamMemberCard from "../ui/TeamMemberCard";

// Team member data
const teamMembers = [
  {
    name: "Mr. Abdul Raoof Abdulla",
    designation: "CEO",
    imageSrc: "/CEO-Mr.-Abdul-Raoof-Abdulla.jpg",
  },
  {
    name: "Mr. Shibu K Jose",
    designation: "Executive Director",
    imageSrc: "/GM-Mr.Shibu-k-Jose.jpg",
  },
  {
    name: "Mr. Jesweer Jaleel",
    designation: "Operations Director",
    imageSrc: "/Mr.-Jesweer-Jaleel.jpg",
  },
];

// Starry background effect
const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,161,214,0.1)_0%,transparent_70%)] opacity-50" />
      </div>
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

const MeetOurTeam = () => {
  // Animation for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Animation variants for sliding in from left and right
  const slideVariants = {
    hidden: (index) => ({
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative py-16">
      <StarryBackground />
      <div className="relative z-10 text-center px-4">
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
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              designation={member.designation}
              imageSrc={member.imageSrc}
              imageHeight="h-72" // Explicitly set for MeetOurTeam
              animationProps={{
                custom: index,
                variants: slideVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, amount: 0.3 },
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
