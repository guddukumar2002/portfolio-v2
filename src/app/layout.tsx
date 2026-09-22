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
  title: "Guddu Kumar — Full Stack Developer | React, Next.js, Node.js, AI Web Apps",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, MERN & AI-powered web applications. 4+ industry experiences, production apps handling real users.",
  keywords: [
    "Guddu Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "AI Web Applications",
    "REST API Engineer",
    "PostgreSQL",
    "MongoDB",
    "Ghaziabad",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Guddu Kumar", url: BASE_URL }],
  creator: "Guddu Kumar",
  openGraph: {
    title: "Guddu Kumar — Full Stack Developer Portfolio",
    description:
      "Full Stack Developer building modern, scalable web applications with React, Next.js, Node.js, TypeScript & AI APIs.",
    url: BASE_URL,
    siteName: "Guddu Kumar — Software Engineer Portfolio",
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
      "Full Stack Developer building modern web applications with React, Next.js, Node.js & TypeScript.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guddu Kumar",
  jobTitle: "Full Stack Developer",
  url: BASE_URL,
  sameAs: [
    "https://github.com/guddukumar2002",
    "https://www.linkedin.com/in/guddu-kumar-dev21/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Tailwind CSS",
    "Full Stack Web Development",
    "AI Integrations",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SEG",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "ABES Institute of Technology",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-theme text-theme">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

