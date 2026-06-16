"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, Globe, MessageCircle } from "lucide-react";

export default function FindUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 md:py-48 bg-cream" id="find-us">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-wood" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">
              Location
            </span>
            <div className="w-12 h-px bg-wood" />
          </div>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-forest">
            Find the<br />
            <span className="italic">Experience</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 border border-wood/20 shadow-2xl bg-white overflow-hidden max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] bg-parchment relative"
          >
            {/* Map styling: grayscale, sepia, high contrast to make it fit the aesthetic */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916172671018!2d79.8504313!3d6.8908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596041695555%3A0x6b306b3a2be641c8!2s357%20R.A.%20De%20Mel%20Mawatha%2C%20Colombo%2000300%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indian Kitchen Location Map"
              className="absolute inset-0 grayscale-[80%] sepia-[30%] contrast-[1.2]"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-cream"
          >
            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 rounded-full border border-wood/30 flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-colors text-wood">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Pondicherry Street Outlet</h4>
                  <p className="font-display text-xl text-forest">357 R.A. De Mel Mawatha,<br />Colombo 03, Sri Lanka</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 rounded-full border border-wood/30 flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-colors text-wood">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Reservations</h4>
                  <a href="tel:+94117112334" className="font-display text-xl text-forest hover:text-yellow transition-colors">
                    +94 117 112 334
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 rounded-full border border-wood/30 flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-colors text-wood">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Opening Hours</h4>
                  <div className="text-forest space-y-1 font-light">
                    <p><span className="font-medium">Mon &ndash; Thu:</span> 12:30 PM &ndash; 11:30 PM</p>
                    <p><span className="font-medium">Fri &ndash; Sat:</span> 12:30 PM &ndash; 3:00 AM</p>
                    <p><span className="font-medium">Sun:</span> 12:30 PM &ndash; 11:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-wood/20">
                <a
                  href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about..."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-sans text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1DA851] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
