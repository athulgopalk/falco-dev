
"use client";


// components/PartnersWeTrust.jsx
import { useRef } from "react";
import { useInView } from "framer-motion";
import PartnerLogo from "../ui/PartnerLogo";

// Partner data (using placeholders for testing; replace with actual paths)
const partners = [
  {
    logoSrc: "/partners/partner1.jpg",
    alt: "falcon logo",
  },
  {
    logoSrc: "/partners/partner2.jpg",
    alt: "General Logo",
  },
  {
    logoSrc: "/partners/partner3.jpg",
    alt: "Haier Logo",
  },
  {
    logoSrc: "/partners/partner4.jpg",
    alt: "Panasonic Logo",
  },
];

// Neon grid background CSS
const neonGridStyles = `
  .neon-grid-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background: radial-gradient(circle at center, rgba(0, 161, 214, 0.15) 0%, transparent 70%);
  }
  .neon-grid {
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
    animation: neonShift 15s infinite ease-in-out;
    opacity: 0.2;
  }
  @keyframes neonShift {
    0% { transform: translate(0, 0); opacity: 0.2; }
    50% { transform: translate(20px, -20px); opacity: 0.3; }
    100% { transform: translate(0, 0); opacity: 0.2; }
  }
`;

const PartnersWeTrust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Debug logs for development
  if (process.env.NODE_ENV === "development") {
    console.log("PartnersWeTrust isInView:", isInView);
    console.log("Partners data:", partners);
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden">
      {/* Neon Grid Background */}
      <style>{neonGridStyles}</style>
      <div className="neon-grid-background">
        <div className="neon-grid" />
      </div>

      <section className="px-4 text-center relative z-10" ref={ref}>
        <h2 className="text-4xl font-bold text-white mb-8">Partners We Trust</h2>
        <p className="text-lg text-gray-50 mb-12 max-w-2xl mx-auto">
          We work with the best in the industry to bring you top-quality solutions.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12  " >
          {partners.length > 0 ? (
            partners.map((partner, index) => (
              <PartnerLogo
                key={index}
                logoSrc={partner.logoSrc}
                alt={partner.alt}
                index={index}
                isInView={isInView}
              />
            ))
          ) : (
            <p className="text-white">No partners available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PartnersWeTrust;