import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/providers/SmoothScroll";
import { BookingProvider } from "../components/providers/BookingContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyCTA from "../components/layout/StickyCTA";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";
import { clinicContact, doctorProfile, siteMeta } from "../data/siteContent";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://trulyderma.com"),
  title: siteMeta.title || siteMeta.defaultTitle,
  description: siteMeta.description || siteMeta.defaultDescription,
  keywords: siteMeta.keywords,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: "https://trulyderma.com",
    siteName: siteMeta.brandName,
    locale: "en_IN",
    type: "website",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "DermatologyClinic"],
    name: siteMeta.brandName,
    image: "https://trulyderma.com/logo.png",
    description: siteMeta.tagline,
    telephone: clinicContact.phoneClean,
    email: clinicContact.email,
    address: clinicContact.branches.map((b) => ({
      "@type": "PostalAddress",
      streetAddress: b.address.split(",")[0],
      addressLocality: b.city,
      addressRegion: "New Delhi",
      postalCode: b.pincode || "110034",
      addressCountry: "IN",
    })),
    founder: {
      "@type": "Physician",
      name: doctorProfile.name,
      jobTitle: doctorProfile.role,
      description: doctorProfile.degrees,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "19:30",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream-50 text-charcoal-900 min-h-screen flex flex-col antialiased selection:bg-blush-100 selection:text-blush-600">
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <BookingProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyCTA />
          </BookingProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
