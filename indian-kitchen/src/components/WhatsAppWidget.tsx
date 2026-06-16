"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.me/94117112334?text=Hello!%20I%27d%20like%20to%20know%20more%20about%20Indian%20Kitchen."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat with Indian Kitchen on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-void text-cream text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-void">
          Chat with Indian Kitchen
        </span>
      </a>
    </div>
  );
}
