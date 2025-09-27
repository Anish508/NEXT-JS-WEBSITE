import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import AOSProvider from "./providers/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development in Mangalore, Karnataka, India",
  description:
    "Professional web development in Mangalore: modern, responsive websites with React, Next.js, animations, 3D, and UI/UX.",
  keywords:
    "Bodhify Tech, web development Mangalore, website design Mangalore Karnataka, Next.js development India, React developer Mangalore, professional web development Karnataka, UI/UX Mangalore, SEO-friendly websites, 3D elements websites Mangalore",
  authors: [{ name: "Bodhify.tech" }],
  creator: "Bodhify.tech",
  publisher: "Bodhify.tech",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bodhify.tech"),
  alternates: {
    canonical: "https://bodhify.tech/",
  },
  openGraph: {
    title: "Bodhify.tech - Web Development in Mangalore, Karnataka, India",
    description:
      "Get professional web development in Mangalore, Karnataka (575001), India. Bodhify Tech specializes in React, Next.js, animations, 3D elements, and SEO-optimized websites for businesses.",
    url: "https://bodhify.tech",
    siteName: "Bodhify.tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bodhify.tech - Web Development in Mangalore, Karnataka, India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhify.tech - Web Development in Mangalore, Karnataka, India",
    description:
      "Bodhify Tech offers professional website design & development services in Mangalore, Karnataka (575001), India. Next.js, React, UI/UX, SEO, animations, and 3D websites.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured Data JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bodhify.tech",
    image: "https://bodhify.tech/logo.png",
    url: "https://bodhify.tech",
    telephone: "+91-6363297814",
    email: "admin@bodhify.tech",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mangalore",
      addressLocality: "Mangalore",
      addressRegion: "KA",
      postalCode: "575001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/bodhify-tech",
      "https://www.facebook.com/bodhify.tech",
      "https://twitter.com/bodhifytech",
    ],
    description:
      "Professional web development services in Mangalore, Karnataka (575001), India. We build modern, responsive websites with React, Next.js, animations, 3D elements, and exceptional UI/UX.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/bodhify.ico" type="image/png" />
        <link rel="shortcut icon" href="/bodhify.ico" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AOSProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatbotWrapper />
        </AOSProvider>
      </body>
    </html>
  );
}
