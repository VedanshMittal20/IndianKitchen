import type { Metadata } from "next";
import { Eczar, Kalam, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";
import CursorGlow from "@/components/ui/CursorGlow";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import QRWidget from "@/components/QRWidget";

const eczar = Eczar({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
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
    <html lang="en" className={`${eczar.variable} ${kalam.variable} ${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-body-md text-body-md-md bg-surface-container-lowest text-on-surface min-h-full flex flex-col">
        {/* WebGL Shader Background removed as requested */}
        
        <ScrollProvider>
          <CursorGlow />
          <Navigation />
          <FloatingWhatsApp />
          <QRWidget />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
