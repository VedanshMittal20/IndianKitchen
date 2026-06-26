"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import SplitSection from "@/components/layout/SplitSection";

export default function FindUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const mapIframe = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="w-full h-[320px] lg:h-full lg:min-h-[500px] bg-surface-container-low relative shadow-2xl border border-outline-variant/30 rounded-sm overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916172671018!2d79.8504313!3d6.8908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596041695555%3A0x6b306b3a2be641c8!2s357%20R.A.%20De%20Mel%20Mawatha%2C%20Colombo%2000300%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Indian Kitchen Location Map"
        className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );

  const contactDetails = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="w-full flex flex-col justify-center"
    >
      <SectionHeader 
        label="Sanctuary Directions" 
        title={<>Visit Our <span className="italic text-brand-golden">Outlets</span></>}
        lightMode
      />

      <div className="space-y-8 mt-2">
        <div className="flex gap-5 items-start group">
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center shrink-0 group-hover:bg-saffron-gold group-hover:text-on-surface transition-all duration-300 text-brand-golden bg-surface-container-low shadow-md">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-body-md text-[8px] tracking-[0.25em] uppercase text-on-surface-variant mb-1.5 font-bold">
                Colombo Outlet
              </h4>
              <p className="font-headline-md text-xl text-on-surface leading-snug">
                357 R.A. De Mel Mawatha,<br />Kollupitiya, Colombo 00300
              </p>
            </div>
            <div>
              <h4 className="font-body-md text-[8px] tracking-[0.25em] uppercase text-on-surface-variant mb-1.5 font-bold">
                Kandy Outlet
              </h4>
              <p className="font-headline-md text-xl text-on-surface leading-snug">
                25/8 Sangaraja Mawatha,<br />Hillwood College Rd, Kandy 20000
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-start group">
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center shrink-0 group-hover:bg-saffron-gold group-hover:text-on-surface transition-all duration-300 text-brand-golden bg-surface-container-low shadow-md">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-body-md text-[8px] tracking-[0.25em] uppercase text-on-surface-variant mb-1.5 font-bold">
              Reservations & Inquiries
            </h4>
            <div className="flex flex-col gap-1.5">
              <a
                href="tel:+94117112334"
                className="font-headline-md text-xl text-on-surface hover:text-brand-golden transition-colors font-medium"
              >
                +94 117 112 334
              </a>
              <a
                href="mailto:kitchenindian1@gmail.com"
                className="font-light text-sm text-on-surface/60 hover:text-brand-golden transition-colors font-body-md"
              >
                kitchenindian1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-start group">
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center shrink-0 group-hover:bg-saffron-gold group-hover:text-on-surface transition-all duration-300 text-brand-golden bg-surface-container-low shadow-md">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-body-md text-[8px] tracking-[0.25em] uppercase text-on-surface-variant mb-1.5 font-bold">
              Kitchen Hours
            </h4>
            <div className="text-on-surface/70 space-y-1.5 font-body-md font-light text-sm">
              <p>
                <span className="font-semibold text-on-surface">Mon – Thu:</span> 12:30 PM – 11:30 PM
              </p>
              <p>
                <span className="font-semibold text-on-surface">Fri – Sat:</span> 12:30 PM – 3:00 AM
              </p>
              <p>
                <span className="font-semibold text-on-surface">Sun:</span> 12:30 PM – 11:30 PM
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about..."
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full md:w-auto text-center"
          >
            <MessageCircle className="w-4 h-4 inline-block mr-2" />
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div id="find-us">
      <SplitSection 
        variant="void" 
        content={contactDetails} 
        media={mapIframe} 
        reverse 
      />
    </div>
  );
}
