"use client";

import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { QrCode, X, Utensils } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function QRWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  const handleScan = (result: unknown) => {
    const text = Array.isArray(result) ? result[0]?.rawValue : result;
    
    if (text) {
      setScanned(true);
      setTimeout(() => {
        setIsOpen(false);
        setScanned(false);
        router.push("/menu");
      }, 1500);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 sm:bottom-6 left-6 z-50 bg-surface-container-lowest text-saffron-gold border border-outline-variant/30 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:border-saffron-gold hover:bg-saffron-gold hover:text-on-surface transition-all duration-300 group"
        aria-label="Scan Table QR Code"
      >
        <QrCode className="w-5 h-5" />
        {/* Tooltip */}
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 text-on-surface text-[10px] uppercase font-body-md tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm shadow-2xl">
          Scan Table QR
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-surface-container-lowest/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-on-surface hover:text-saffron-gold transition-colors p-2 z-50"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-surface-container-low p-8 rounded-sm shadow-2xl border border-outline-variant/30 text-center relative overflow-hidden"
            >
              <div className="mb-8">
                <span className="text-[9px] tracking-[0.25em] uppercase text-saffron-gold font-bold block mb-2">
                  Dine In Order
                </span>
                <h3 className="font-headline-md text-3xl text-on-surface mb-3 uppercase tracking-wide">Scan Your Table</h3>
                <p className="text-on-surface-variant text-sm font-body-md font-light leading-relaxed">
                  Focus your camera on the QR code on your table to automatically open our digital menu.
                </p>
              </div>

              {!scanned ? (
                <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-outline-variant/30 bg-surface-container-low/50">
                  <Scanner
                    onScan={handleScan}
                    onError={(error) => console.log(error)}
                    components={{ finder: false }}
                  />
                  {/* Corner bounds */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saffron-gold m-4 z-10" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron-gold m-4 z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-saffron-gold m-4 z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saffron-gold m-4 z-10" />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full aspect-square flex flex-col items-center justify-center bg-saffron-gold/10 border border-saffron-gold text-saffron-gold rounded-sm"
                >
                  <Utensils className="w-12 h-12 mb-4 animate-bounce" strokeWidth={1.5} />
                  <h4 className="font-headline-md text-2xl mb-1 uppercase tracking-wide text-on-surface">Table Recognized</h4>
                  <p className="text-saffron-gold/80 text-[10px] tracking-widest uppercase font-body-md font-semibold">Retrieving Culinary Passport...</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
