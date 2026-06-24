"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-24 sm:bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20know%20more%20about%20Indian%20Kitchen."
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center"
        aria-label="Chat with Indian Kitchen on WhatsApp"
      >
        {/* Pulsing brass ring */}
        <div className="absolute inset-0 bg-saffron-gold/30 rounded-full opacity-50 animate-[pulse-ring_2.5s_ease-out_infinite]" />
        
        {/* Main Button */}
        <div className="relative z-10 w-12 h-12 bg-surface-container-lowest border border-outline-variant/30 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:border-saffron-gold group-hover:bg-saffron-gold group-hover:text-on-surface transition-all duration-300 text-saffron-gold">
          <MessageCircle className="w-5 h-5 fill-current text-current" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 text-on-surface text-[10px] uppercase font-body-md tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-2xl">
          Chat with Us
        </div>
      </a>
    </div>
  );
}
