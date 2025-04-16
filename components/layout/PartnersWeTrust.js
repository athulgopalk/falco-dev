// // components/PartnersWeTrust.jsx
// "use client";
// // components/PartnersWeTrust.jsx
// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import PartnerLogo from "../ui/PartnerLogo";

// // Partner data (replace with actual logo paths)
// const partners = [
//   {
//     logoSrc: "/path/to/daikin-logo.png",
//     alt: "Daikin Logo",
//   },
//   {
//     logoSrc: "/path/to/trane-logo.png",
//     alt: "Trane Logo",
//   },
//   {
//     logoSrc: "/path/to/carrier-logo.png",
//     alt: "Carrier Logo",
//   },
// ];

// // Animated grid background CSS
// const gridStyles = `
//   .grid-background {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     z-index: 0;
//     background: radial-gradient(circle at center, rgba(0, 161, 214, 0.1) 0%, transparent 70%);
//   }
//   .grid {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: repeating-linear-gradient(
//       0deg,
//       rgba(0, 161, 214, 0.05),
//       rgba(0, 161, 214, 0.05) 1px,
//       transparent 1px,
//       transparent 40px
//     ),
//     repeating-linear-gradient(
//       90deg,
//       rgba(0, 161, 214, 0.05),
//       rgba(0, 161, 214, 0.05) 1px,
//       transparent 1px,
//       transparent 40px
//     );
//     animation: gridMove 20s infinite linear;
//     opacity: 0.3;
//   }
//   @keyframes gridMove {
//     0% { transform: translateY(0); }
//     100% { transform: translateY(-40px); }
//   }
// `;

// const PartnersWeTrust = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden">
//       {/* Grid Background */}
//       <style>{gridStyles}</style>
//       <div className="grid-background">
//         <div className="grid" />
//       </div>

//       <section className="px-4 text-center relative z-10" ref={ref}>
//         <h2 className="text-4xl font-bold text-white mb-8">Partners We Trust</h2>
//         <p className="text-lg text-gray-50 mb-12 max-w-2xl mx-auto">
//           We work with the best in the industry to bring you top-quality solutions.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
//           {partners.map((partner, index) => (
//             <PartnerLogo
//               key={index}
//               logoSrc={partner.logoSrc}
//               alt={partner.alt}
//               index={index}
//               isInView={isInView}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PartnersWeTrust;

"use client";


// components/PartnersWeTrust.jsx
import { useRef } from "react";
import { useInView } from "framer-motion";
import PartnerLogo from "../ui/PartnerLogo";

// Partner data (using placeholders for testing; replace with actual paths)
const partners = [
  {
    logoSrc: "/images/daikin-logo.png", // Replace with actual path
    alt: "Daikin Logo",
  },
  {
    logoSrc: "/images/trane-logo.png", // Replace with actual path
    alt: "Trane Logo",
  },
  {
    logoSrc: "/images/carrier-logo.png", // Replace with actual path
    alt: "Carrier Logo",
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
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
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