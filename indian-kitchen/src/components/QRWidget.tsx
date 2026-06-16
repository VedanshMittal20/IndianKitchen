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
    // The library may return an array of results or a single string depending on version
    const text = Array.isArray(result) ? result[0]?.rawValue : result;
    
    if (text) {
      setScanned(true);
      // Mock redirect logic
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
        className="fixed bottom-6 left-6 z-50 bg-wood text-cream w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-forest transition-all duration-300 group"
        aria-label="Scan Table QR Code"
      >
        <QrCode className="w-6 h-6" />
        {/* Tooltip */}
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-forest text-cream text-[10px] uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm">
          Scan to Order
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cream/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-forest hover:text-wood transition-colors p-2"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full bg-cream-dark p-8 rounded-sm shadow-2xl border border-wood/20 text-center relative overflow-hidden"
            >
              <div className="mb-8">
                <h3 className="font-display text-4xl text-forest mb-2">Scan Your Table</h3>
                <p className="text-text-muted font-light">Point your camera at the QR code on your table to access the ordering menu.</p>
              </div>

              {!scanned ? (
                <div className="relative w-full aspect-square overflow-hidden rounded-sm border-2 border-dashed border-wood/50 bg-black/5">
                  <Scanner
                    onScan={handleScan}
                    onError={(error) => console.log(error)}
                    components={{ finder: false }}
                  />
                  {/* Decorative corner markers */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-forest m-4 z-10" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-forest m-4 z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-forest m-4 z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-forest m-4 z-10" />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full aspect-square flex flex-col items-center justify-center bg-forest text-cream rounded-sm"
                >
                  <Utensils className="w-16 h-16 mb-4 animate-bounce" strokeWidth={1} />
                  <h4 className="font-display text-3xl mb-2">Table Recognized!</h4>
                  <p className="text-cream/80 text-sm tracking-wider uppercase">Opening your menu...</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
