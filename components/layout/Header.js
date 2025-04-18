"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900 to-transparent py-4 hidden md:flex">
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/" aria-label="Falco Industries Home">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
              <Image
                src="/logo-svg.svg" // Replace with actual logo path
                alt="Falco Industries Logo"
                width={90}
                height={20}
                className="p-1"
                onError={() => console.warn("Failed to load logo")}
              />
            </div>
          </Link>
          <span className="ml-3 text-white text-lg font-semibold">
            FALCO INDUSTRIES
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Products", href: "/products" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="nav-link text-white hover:text-gray-300  transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="flex space-x-4">
          <Link href="/contact">
            <div className="flex space-x-4">
             
              <button className="p-0 bg-gradient-to-r from-gray-900 to-gray-900 text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] glossy-button">
              <span className="relative z-10">Contact Us</span>
              
              </button>
             
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}