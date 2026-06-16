"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    name: "Bamboo Biryani",
    desc: "Cooked inside bamboo over charcoal — Colombo's most photographed dish.",
    price: "LKR 1,950",
    image: "/images/real_bamboo_biryani.jpeg",
    tag: "Signature",
  },
  {
    name: "Tender Coconut Prawn Curry",
    desc: "Malabar coastal flavours with fresh coconut milk and curry leaves.",
    price: "LKR 2,500",
    image: "/images/real_banana_leaf.jpeg",
    tag: "Seafood",
  },
  {
    name: "Pineapple Butter Chicken",
    desc: "Slow-roasted tomatoes with a subtle tropical twist.",
    price: "LKR 2,100",
    image: "/images/pineapple_chicken.png",
    tag: "Popular",
  },
];

export default function HomeSignaturePreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="relative overflow-hidden bg-void">
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/slide_7.png" alt="" fill className="object-cover object-top" />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-semibold mb-3 pipe-item">
              La Carte
            </p>
            <h2 className="heading-presentation-lg heading-presentation-light mb-4">
              Signature
              <br />
              Dishes
            </h2>
            <p className="text-cream/65 font-light text-sm leading-relaxed mb-6">
              Recipes passed down through generations — no shortcuts, no artificial colours.
            </p>
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative bg-crimson/30 border border-gold/20 overflow-hidden rounded-[32px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover img-warm group-hover:scale-110 transition-transform duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold text-void text-[8px] tracking-[0.18em] uppercase px-2 py-0.5 font-bold">
                    {dish.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg uppercase tracking-wide text-cream mb-1 group-hover:text-gold transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-cream/55 text-xs font-light leading-relaxed mb-2 line-clamp-2">
                    {dish.desc}
                  </p>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-gold font-semibold">
                    {dish.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
