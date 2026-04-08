import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://guddu-kumar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Guddu Kumar — Full Stack Developer",
  description:
    "Full Stack Developer with 4+ internships & jobs. Specialized in React, Next.js, Node.js & MongoDB. Building fast, scalable, production-ready web applications. Based in Ghaziabad, India.",
  keywords: [
    "Guddu Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MERN Stack",
    "Portfolio",
    "Ghaziabad",
    "India",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Guddu Kumar", url: BASE_URL }],
  creator: "Guddu Kumar",
  openGraph: {
    title: "Guddu Kumar — Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with React, Next.js & Node.js. 4+ companies, 5+ production projects.",
    url: BASE_URL,
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
    description:
      "Full Stack Developer building modern web applications with React, Next.js & Node.js.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
