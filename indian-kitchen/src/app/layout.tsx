import type { Metadata } from "next";
// import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";
import CursorGlow from "@/components/ui/CursorGlow";

// const bebasNeue = Bebas_Neue({
//   variable: "--font-bebas",
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const outfit = Outfit({
//   variable: "--font-outfit",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

const bebasNeue = { variable: "font-bebas" };
const outfit = { variable: "font-outfit" };

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
    <html lang="en" className={`${bebasNeue.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-body-md text-body-md bg-surface-container-lowest text-on-surface min-h-full flex flex-col">
        {/* WebGL Shader Background removed as requested */}
        
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
