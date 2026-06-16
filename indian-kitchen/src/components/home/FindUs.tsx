"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function FindUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-cream" id="find-us">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-terracotta font-medium block mb-3">
            Find Us
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-espresso">
            Our Themed Sanctuaries
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 border border-terracotta/15 shadow-lg bg-white overflow-hidden max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full lg:w-1/2 h-[320px] lg:h-auto lg:min-h-[420px] bg-parchment relative"
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
              className="absolute inset-0 grayscale-[70%] sepia-[20%] contrast-[1.1]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-cream"
          >
            <div className="space-y-7">
              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 rounded-full border border-terracotta/25 flex items-center justify-center shrink-0 group-hover:bg-espresso group-hover:text-cream transition-colors text-terracotta">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                      Colombo Outlet
                    </h4>
                    <p className="font-display text-lg text-espresso leading-snug">
                      357 R.A. De Mel Mawatha,<br />Kollupitiya, Colombo 03
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                      Kandy Outlet
                    </h4>
                    <p className="font-display text-lg text-espresso leading-snug">
                      25/8 Sangaraja Mawatha,<br />Hillwood College Rd, Kandy
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 rounded-full border border-terracotta/25 flex items-center justify-center shrink-0 group-hover:bg-espresso group-hover:text-cream transition-colors text-terracotta">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                    Reservations & Inquiries
                  </h4>
                  <div className="flex flex-col">
                    <a
                      href="tel:+94778191396"
                      className="font-display text-lg text-espresso hover:text-saffron transition-colors"
                    >
                      +94 778 191 396
                    </a>
                    <a
                      href="mailto:kitchenindian1@gmail.com"
                      className="font-light text-sm text-espresso hover:text-saffron transition-colors"
                    >
                      kitchenindian1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-9 h-9 rounded-full border border-terracotta/25 flex items-center justify-center shrink-0 group-hover:bg-espresso group-hover:text-cream transition-colors text-terracotta">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                    Opening Hours
                  </h4>
                  <div className="text-espresso space-y-0.5 font-light text-sm">
                    <p>
                      <span className="font-medium">Mon – Thu:</span> 12:30 PM – 11:30 PM
                    </p>
                    <p>
                      <span className="font-medium">Fri – Sat:</span> 12:30 PM – 3:00 AM
                    </p>
                    <p>
                      <span className="font-medium">Sun:</span> 12:30 PM – 11:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-terracotta/15">
                <a
                  href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about..."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-sans text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#1DA851] transition-colors"
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
