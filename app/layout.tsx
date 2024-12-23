import React from "react";
import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "Pixel Path",
  description: `Pixel Path `,
  creator: "Pixel Path",
  applicationName: "Pixel Path website",
  keywords: ["Pixel Path", "Portfolio", "Next.js", "Software engineer"],
  icons: {
    icon: "./favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "",
    title: "Pixel Path - Software Company",
    description: `Pixel Path`,
    images: [
      {
        url: "",
        width: 1200,
        height: 628,
        alt: "Adel Guitoun",
      },
    ],
  },
  twitter: {
    title: "Pixel Path - Software Company",
    description: `Pixel Path`,
    card: "summary_large_image",
    site: "Pixel Path",
    images: "/Pixel Path.jpg",
  },
  verification: {
    google: "###########################",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
