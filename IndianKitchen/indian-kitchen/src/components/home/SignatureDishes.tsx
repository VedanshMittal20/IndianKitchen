"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const sideDishes = [
  {
    name: "Puff Parotta",
    desc: "Flaky, layered, and unforgettable. A staple of Tamil Nadu street food, perfected.",
    image: "/images/slide_8.png", // fallback placeholder
  },
  {
    name: "Tender Coconut Prawn Curry",
    desc: "Malabar coastal flavours in every spoonful.",
    image: "/images/slide_9.png", // fallback placeholder
  },
  {
    name: "Jigarthanda",
    desc: "The coolant of Madurai. A dessert drink unlike any other.",
    image: "/images/slide_10.png", // fallback placeholder
  },
  {
    name: "Ilaneer Cake",
    desc: "Tender coconut reimagined as dessert art.",
    image: "/images/slide_11.png", // fallback placeholder
  },
];

export default function SignatureDishes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-parchment" id="signature-dishes">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-crimson mb-6">
            The Dishes That Started It All
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Hero Dish - Left Side (Spans 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[600px] group overflow-hidden rounded-sm cursor-pointer shadow-lg"
          >
            <Image
              src="/images/slide_7.png" // Replace with actual bamboo biryani image
              alt="Bamboo Biryani"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.1] saturate-[1.15]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent mix-blend-multiply" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="font-display text-4xl md:text-5xl text-gold mb-3">
                Bamboo Biryani
              </h3>
              <p className="text-cream text-lg md:text-xl font-light italic">
                &ldquo;Where Tradition Meets Fire.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* 4 Smaller Dishes - Right Side (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {sideDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-row items-center gap-6 bg-cream-dark p-4 rounded-sm hover:shadow-[0_4px_20px_rgba(200,135,42,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover sepia-[0.1] saturate-[1.15]"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xl text-crimson mb-1 font-semibold">
                    {dish.name}
                  </h4>
                  <p className="text-text-muted text-sm leading-snug">
                    {dish.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/#menu-qr"
            className="px-8 py-3 bg-terracotta text-cream text-sm font-medium border border-terracotta hover:bg-transparent hover:text-terracotta hover:border-terracotta transition-colors"
          >
            Scan to Order
          </Link>
          <Link
            href="/menu"
            className="px-8 py-3 bg-transparent text-crimson border border-crimson text-sm font-medium hover:bg-crimson hover:text-cream transition-colors"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
