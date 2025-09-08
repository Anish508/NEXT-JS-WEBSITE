import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import AOSProvider from "./providers/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bodhify.tech - Professional Web Development Services",
  description:
    "Transform your business with modern, responsive websites featuring smooth animations, 3D elements, and exceptional user experiences. Professional web development services with React, Next.js, and cutting-edge technologies.",
  keywords:
    "web development, React, Next.js, website design, UI/UX, animations, 3D elements, professional development",
  authors: [{ name: "Bodhify.tech" }],
  creator: "Bodhify.tech",
  publisher: "Bodhify.tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bodhify.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bodhify.tech - Professional Web Development Services",
    description:
      "Transform your business with modern, responsive websites featuring smooth animations, 3D elements, and exceptional user experiences.",
    url: "https://bodhify.tech",
    siteName: "Bodhify.tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bodhify.tech - Professional Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhify.tech - Professional Web Development Services",
    description:
      "Transform your business with modern, responsive websites featuring smooth animations, 3D elements, and exceptional user experiences.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
