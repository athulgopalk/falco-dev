// components/TeamMemberCard.jsx
import Image from "next/image";
import { motion } from "framer-motion";

// Base64-encoded placeholder image (a 1x1 gray pixel)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const TeamMemberCard = ({ name, role, imageSrc, animationProps }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      {...animationProps}
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-[0_0_15px_rgba(0,161,214,0.4)]">
        <Image
          src={imageSrc || placeholderImage}
          alt={`${name}, ${role}`}
          width={288}
          height={384}
          className="w-full h-full object-cover bg-gray-300"
          priority={true}
        />
        {/* Overlay for hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.p
            className="text-white text-lg font-semibold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileHover={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {role}
          </motion.p>
        </motion.div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
    </motion.div>
  );
};

export default TeamMemberCard;
