// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900/80 to-transparent py-6  bottom-0 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Falco Industries Pvt Ltd
        </div>

        <ul className="flex space-x-6 my-4 md:my-0">
          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-300 transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="text-white hover:text-gray-300 transition-all"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-white hover:text-gray-300 transition-all"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 transition-all"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Footer Right: Copyright */}
        <div className="text-white text-sm">
          &copy; {new Date().getFullYear()} Falco Industries. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
