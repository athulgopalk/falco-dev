import { Poppins } from "next/font/google";
import Header from "../components/layout/Header"; 
import Footer from "../components/layout/Footer"; 
import "./globals.css";

// Configure Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-poppins", 
});

// SEO Metadata for Falco Industries
export const metadata = {
  title: "Falco Industries Pvt Ltd - Innovative Air Conditioning Solutions",
  description:
    "Falco Industries offers state-of-the-art air conditioning systems for residential and commercial needs across the Middle East and India (Kerala). Explore our range of split, window, VRF, and solar air conditioners.",
  keywords:
    "Falco Industries, air conditioners, HVAC solutions, Middle East, split AC, VRF systems, solar air conditioners",
  openGraph: {
    title: "Falco Industries Pvt Ltd - Innovative Air Conditioning Solutions",
    description:
      "Discover high-quality air conditioning systems from Falco Industries, designed for optimal comfort and efficiency in the Middle East.",
    url: "https://falcoindustries.in", 
    type: "website",
    images: [
      {
        url: "https://falcoindustries.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Falco Industries Air Conditioning Solutions",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
