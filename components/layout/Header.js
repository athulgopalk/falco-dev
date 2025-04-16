// components/Header.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900/100 to-transparent py-4">
      <nav className="container mx-auto flex items-center justify-between px-6">
       
        <div className="flex items-center">
          <Link href="/" aria-label="Falco Industries Home">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
              <Image src="/logo-svg.svg" className="text-white font-bold text-lg p-1" width={90} height={20} alt="falco industries logo"/>
            </div>
          </Link>
          <span className="ml-3 text-white text-lg font-semibold">
            FALCO INDUSTRIES
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="nav-link text-white hover:text-gray-300 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="nav-link text-white hover:text-gray-300 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="nav-link text-white hover:text-gray-300 transition-all duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="nav-link text-white hover:text-gray-300 transition-all duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="nav-link text-white hover:text-gray-300 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="p-0 bg-gradient-to-r from-gray-900 to-gray-900 text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] glossy-button">
            <span className="relative z-10">Contact Us</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
