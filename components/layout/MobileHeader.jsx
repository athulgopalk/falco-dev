// components/ui/MobileHeader.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder logo
const placeholderLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Link animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut", delay: i * 0.1 },
    }),
  };

  // Hamburger line variants
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (i) => ({
      rotate: i === 1 ? 45 : -45,
      y: i === 1 ? 5 : -5,
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900 to-transparent py-3 flex md:hidden">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/" aria-label="Falco Industries Home">
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-full">
              <Image
                src="/logo-svg.svg" // Replace with actual logo path
                alt="Falco Industries Logo"
                width={60}
                height={14}
                className="p-1"
                placeholder="blur"
                blurDataURL={placeholderLogo}
                onError={() => console.warn("Failed to load logo")}
              />
            </div>
          </Link>
          <span className="ml-2 text-white text-sm font-semibold">
            FALCO INDUSTRIES
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="flex flex-col space-y-1 p-2 rounded-full hover:bg-[rgba(0,161,214,0.2)] transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-5 h-0.5 bg-[rgba(0,161,214,0.9)]"
              variants={lineVariants}
              animate={isOpen ? "open" : "closed"}
              custom={i}
            />
          ))}
        </button>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-14 right-4 w-48 bg-gradient-to-b from-gray-900 to-black shadow-[0_0_10px_rgba(0,161,214,0.3)] rounded-lg py-4 px-4 z-40"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <motion.li
                  key={link.name}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  onClick={toggleMenu}
                >
                  <Link href={link.href}>
                    <span className="text-white text-sm font-medium hover:text-[rgba(0,161,214,0.9)] hover:shadow-[0_0_5px_rgba(0,161,214,0.4)] transition-all duration-300 block py-1">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-3"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <Link href="/contact">
                <button
                  className="w-full bg-gradient-to-r from-gray-900 to-black text-white px-4 py-1.5 rounded-full text-xs uppercase font-semibold border border-[rgba(0,161,214,0.3)] hover:bg-[rgba(0,161,214,0.9)] hover:shadow-[0_0_10px_rgba(0,161,214,0.6)] transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;
