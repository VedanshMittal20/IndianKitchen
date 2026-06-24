import type { Metadata } from "next";
import { Hanken_Grotesk, EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";
import CursorGlow from "@/components/ui/CursorGlow";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["100", "400", "600", "900"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Indian Kitchen - Architectural Permanence",
  description: "A curation of regional Indian heritage, distilled through a lens of modern minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${hanken.variable} ${ebGaramond.variable} ${spaceMono.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-body-md text-body-md bg-surface-container-lowest text-on-surface min-h-full flex flex-col">
        {/* WebGL Shader Background */}
        <div className="shader-overlay"></div>
        
        <ScrollProvider>
          <CursorGlow />
          <Navigation />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
