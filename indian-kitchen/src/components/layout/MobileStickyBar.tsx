"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 shadow-[0_-8px_32px_rgba(7,4,3,0.6)]">
      <div className="flex items-center justify-between h-14">
        {/* Call Trigger */}
        <a
          href="tel:+94117112334"
          className="flex-1 flex justify-center items-center h-full border-r border-outline-variant/30 text-saffron-gold hover:bg-saffron-gold/5 transition-colors"
          aria-label="Call Us"
        >
          <Phone className="w-4 h-4" />
        </a>
        
        {/* WhatsApp Chat Trigger */}
        <a
          href="https://wa.me/94117112334"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center h-full border-r border-outline-variant/30 text-saffron-gold hover:bg-saffron-gold/5 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
        
        {/* Direct Booking Link */}
        <Link
          href="/reservations"
          className="flex-[2] flex justify-center items-center h-full bg-saffron-gold text-on-surface font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-saffron-gold/90 transition-colors"
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}
