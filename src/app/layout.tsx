import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guddu Kumar — Full Stack Developer",
  description:
    "Full Stack Developer with 4+ internships & jobs. Specialized in React, Next.js, Node.js & MongoDB. Building fast, scalable, production-ready web applications. Based in Ghaziabad, India.",
  keywords: ["Guddu Kumar", "Full Stack Developer", "React", "Next.js", "Node.js", "MERN Stack", "Portfolio", "Ghaziabad"],
  authors: [{ name: "Guddu Kumar" }],
  metadataBase: new URL("https://guddu-kumar.vercel.app"),
  openGraph: {
    title: "Guddu Kumar — Full Stack Developer",
    description: "Full Stack Developer building modern web applications with React, Next.js & Node.js.",
    url: "https://guddu-kumar.vercel.app",
    siteName: "Guddu Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guddu Kumar — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guddu Kumar — Full Stack Developer",
    description: "Full Stack Developer building modern web applications with React, Next.js & Node.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased"><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
