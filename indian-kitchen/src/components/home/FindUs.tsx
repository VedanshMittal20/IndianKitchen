"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, Globe, MessageCircle } from "lucide-react";

export default function FindUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-parchment" id="find-us">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-crimson mb-6">
            Come Find the Experience
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white p-4 shadow-[0_0_40px_rgba(200,135,42,0.1)] border border-border-gold rounded-sm">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] bg-parchment overflow-hidden rounded-sm relative"
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
              className="absolute inset-0 grayscale-[20%] contrast-[1.1] sepia-[0.1]"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center gap-8 text-text-dark"
          >
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-lg mb-1">Pondicherry Street Outlet</h4>
                <p className="text-text-muted">357 R.A. De Mel Mawatha,<br />Colombo 03, Sri Lanka</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-terracotta flex-shrink-0" />
              <a href="tel:+94117112334" className="text-lg hover:text-gold transition-colors">
                +94 117 112 334
              </a>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
              <div className="text-text-muted space-y-1">
                <p><span className="font-medium text-text-dark">Monday&ndash;Thursday:</span> 12:30 PM &ndash; 11:30 PM</p>
                <p><span className="font-medium text-text-dark">Friday&ndash;Saturday:</span> 12:30 PM &ndash; 3:00 AM</p>
                <p><span className="font-medium text-text-dark">Sunday:</span> 12:30 PM &ndash; 11:30 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="w-6 h-6 text-terracotta flex-shrink-0" />
              <a href="https://indiankitchen.lk" className="text-lg hover:text-gold transition-colors">
                indiankitchen.lk
              </a>
            </div>

            <div className="mt-4 pt-8 border-t border-gold/20">
              <a
                href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about..."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-medium hover:bg-[#1DA851] transition-colors rounded-sm shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat with us instantly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
