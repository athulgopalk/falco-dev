// components/WhoWeAre.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Base64-encoded placeholder image (a 1x1 gray pixel)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const WhoWeAre = () => {
  // Fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-black py-12">
      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 h-96 lg:h-[500px] relative">
          <Image
            src="/about/team-at-work.jpg"
            alt="Falco Industries Team at Work"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={placeholderImage}
            loading="lazy"
            className="rounded-lg hover:shadow-[0_0_10px_rgba(0,161,214,0.3)] transition-all duration-300"
            onError={() => console.warn("Failed to load team at work image")}
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Founded with a vision to set new benchmarks in climate control
            solutions, Falco Industries has grown into a trusted name in the
            HVAC industry. Our team of experienced professionals, cutting-edge
            technology, and customer-centric approach make us the preferred
            choice for homes, businesses, and industries seeking efficient
            cooling and refrigeration solutions. We combine global expertise
            with localized service, ensuring every project meets international
            standards while catering to our clients’ specific needs.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
