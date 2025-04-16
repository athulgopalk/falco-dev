// components/MeetOurTeam.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TeamMemberCard from "../ui/TeamMemberCard";

// Team member data (replace with actual data)
const teamMembers = [
  {
    name: "John Smith",
    role: "Chief Engineer",
    imageSrc: "/path/to/john-smith.jpg", // Replace with actual image path
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    imageSrc: "/path/to/sarah-johnson.jpg",
  },
  {
    name: "Ahmed Khan",
    role: "Project Manager",
    imageSrc: "/path/to/ahmed-khan.jpg",
  },
  {
    name: "Emily Davis",
    role: "HVAC Specialist",
    imageSrc: "/path/to/emily-davis.jpg",
  },
];

const MeetOurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for sliding in from left and right
  const slideVariants = {
    hidden: (index) => ({
      x: index % 2 === 0 ? -100 : 100, // Even indices slide from left, odd from right
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-black py-12">
      <section className="px-4 text-center" ref={ref}>
        <h2 className="text-4xl font-bold text-white mb-12">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              animationProps={{
                custom: index,
                variants: slideVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetOurTeam;
