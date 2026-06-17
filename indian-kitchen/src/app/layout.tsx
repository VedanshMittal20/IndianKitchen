import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import QRWidget from "@/components/QRWidget";
import CursorGlow from "@/components/ui/CursorGlow";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Indian Kitchen | Immersive Theme Dining — Colombo & Kandy",
  description:
    "Authentic Indian cuisine inside three themed worlds. Reserve your table at Pondicherry Street, Kerala Houseboat, or Sherlock Mystery Dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-paper">
        <Navigation />
        <CursorGlow />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <QRWidget />
        <Analytics />
      </body>
    </html>
  );
}
