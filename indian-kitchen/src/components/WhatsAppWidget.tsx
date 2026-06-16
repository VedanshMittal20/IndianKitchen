"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20know%20more%20about%20Indian%20Kitchen."
        target="_blank"
        rel="noreferrer"
        className="relative group flex items-center justify-center"
        aria-label="Chat with Indian Kitchen on WhatsApp"
      >
        {/* Pulsing ring behind the button */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-50 animate-[pulse-ring_2s_ease-out_infinite]" />
        
        {/* Main Button */}
        <div className="relative z-10 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white fill-current" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-forest text-cream text-xs font-sans tracking-wide rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          Chat with Indian Kitchen
        </div>
      </a>
    </div>
  );
}
