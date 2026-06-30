"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    { text: "[PLACEHOLDER] An exquisite blend of tradition and modernity. The ambiance and flavors took us straight to the heart of India.", author: "A. Sharma", role: "Food Critic" },
    { text: "[PLACEHOLDER] The architectural beauty of the space is matched only by the depth of flavors in every dish.", author: "M. Patel", role: "Architect" },
    { text: "[PLACEHOLDER] A truly premium dining experience. Impeccable service, stunning interiors, and unforgettable food.", author: "J. Doe", role: "Entrepreneur" }
  ];

  return (
    <section className="py-24 bg-brand-sandy relative overflow-hidden">
      {/* Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply opacity-5">
        <img src="/footer_mandala_backdrop.jpg" alt="" className="w-full h-full object-cover max-w-none opacity-50" />
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-brand-golden w-12" />
            <span className="font-label-lg text-brand-golden tracking-[0.2em] uppercase">Testimonials</span>
            <div className="h-px bg-brand-golden w-12" />
          </div>
          <h2 className="font-headline-lg text-brand-deep-forest">What Our Guests Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-brand-warm-cream p-8 jodhpuri-border flex flex-col justify-between"
            >
              <p className="font-headline-sm text-brand-charcoal mb-8 relative z-10 leading-relaxed text-lg">
                <span className="text-6xl font-headline-lg text-brand-golden/20 absolute -top-6 -left-4 -z-10">"</span>
                {testimonial.text}
              </p>
              <div>
                <p className="font-body font-semibold text-brand-deep-forest text-lg">{testimonial.author}</p>
                <p className="font-label-sm text-brand-charcoal/60 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
