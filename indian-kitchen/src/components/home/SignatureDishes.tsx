"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import PipeList from "@/components/ui/PipeList";

const signatureMenu = [
  {
    name: "Bamboo Biryani",
    desc: "Tribal recipe cooked inside bamboo over charcoal, infused with earthy sweetness.",
    price: "LKR 1,950",
    image: "/images/bamboo_biryani.png",
    tag: "Signature",
  },
  {
    name: "Tender Coconut Prawn Curry",
    desc: "Malabar coastal flavours infused with fresh coconut milk and curry leaves.",
    price: "LKR 2,500",
    image: "/images/banana_leaf.png",
    tag: "Seafood",
  },
  {
    name: "Pineapple Butter Chicken",
    desc: "A tropical twist on the classic. Slow-roasted tomatoes with subtle pineapple zest.",
    price: "LKR 2,100",
    image: "/images/pineapple_chicken.png",
    tag: "Popular",
  },
  {
    name: "Kadai Paneer",
    desc: "Cottage cheese wok-tossed with bell peppers and freshly ground whole spices.",
    price: "LKR 1,976",
    image: "/images/kadai_paneer.png",
    tag: "Vegetarian",
  },
];

export default function SignatureDishes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-paper" id="menu">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <p className="text-[9px] tracking-[0.3em] uppercase text-sage font-semibold mb-3 pipe-item">
              La Carte
            </p>
            <h2 className="heading-presentation mb-5">
              Signature
              <br />
              Dishes
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-text-muted font-light leading-relaxed text-sm uppercase tracking-wide lg:pt-6"
          >
            Our menu celebrates India&apos;s rich culinary heritage with authentic recipes passed
            down through generations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            {signatureMenu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-5 border-b border-gold/20 pb-5 group"
              >
                <div className="relative w-20 h-20 shrink-0 overflow-hidden gold-frame">
                  <Image src={item.image} alt={item.name} fill className="object-cover img-warm" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-sage mb-1 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-text-muted text-sm font-light mb-1">{item.desc}</p>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-terracotta">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-display text-xl uppercase tracking-wide text-sage mb-4">
              Must-Try Favorites
            </h3>
            <PipeList items={signatureMenu.map((i) => i.name)} />
            <Link
              href="/menu"
              className="inline-block mt-8 text-[10px] tracking-[0.2em] uppercase text-terracotta hover:text-gold transition-colors link-underline pb-1"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
