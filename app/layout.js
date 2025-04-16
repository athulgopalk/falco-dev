import { Poppins } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

// Configure Poppins font with optimization
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

// Viewport export (moved from metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Comprehensive SEO Metadata (removed viewport)
export const metadata = {
  title: {
    default: "Falco Industries Pvt Ltd - Innovative Air Conditioning Solutions",
    template: "%s | Falco Industries Pvt Ltd",
  },
  description:
    "Falco Industries offers state-of-the-art air conditioning systems for residential and commercial needs across Qatar, India (Kerala), and UAE. Explore our split, window, VRF, and solar AC solutions.",
  keywords: [
    "Falco Industries",
    "air conditioners",
    "HVAC solutions",
    "Qatar",
    "India",
    "UAE",
    "split AC",
    "VRF systems",
    "solar air conditioners",
    "energy-efficient HVAC",
  ].join(", "),

  // Open Graph
  openGraph: {
    title: "Falco Industries Pvt Ltd - Innovative Air Conditioning Solutions",
    description:
      "Discover high-quality air conditioning systems from Falco Industries, designed for optimal comfort and efficiency in Qatar, India, and UAE.",
    url: "https://falcoindustries.in",
    siteName: "Falco Industries Pvt Ltd",
    type: "website",
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Falco Industries Pvt Ltd - Innovative Air Conditioning Solutions",
    description:
      "State-of-the-art HVAC solutions for Qatar, India, and UAE by Falco Industries.",
    image: "https://falcoindustries.in/og-image.jpg",
  },

  // Additional SEO
  robots: "index, follow",
  alternates: {
    canonical: "https://falcoindustries.in",
  },
};

// Dynamic Sitemap
export async function generateStaticParams() {
  return [];
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
